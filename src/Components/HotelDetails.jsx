import React, { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "../Components/hotelDetails.css"
import { Button, Grid, Input, Select, Spinner, useToast } from '@chakra-ui/react'
import { RoomCard } from "./HomeComponents/RoomSec/RoomCard";
import { RoomBox } from "./HomeComponents/RoomBox";
import { Clientarea } from "./HomeComponents/ClinetArea";
import { useDispatch, useSelector } from "react-redux"
import { CartValue, getHotelDetailFailure, getHotelDetailRequest, getHotelDetailSuccess } from "../Redux/action"
import { MyContext } from "../ContextApi/MyContext";

export const HotelDetails = () => {
    let login_status = useSelector((state) => state.login_status)

    const [dateStart, setDateStart] = useState("")
    const [dateEnd, setDateEnd] = useState("")
    const [adults, setAdults] = useState(0);
    const [imgShow, setImg] = useState('');
    const [children, setChildren] = useState(0);
    let RoomArr = Array(4).fill(0)
    const { handleLoginClose } = useContext(MyContext);
    const loading = useSelector((state) => state.isLoading)


    const dispatch = useDispatch()

    const { id } = useParams();

    const navigate = useNavigate();

    const [data, setData] = useState([]);


    var totalPrice;

    const toast = useToast()

    const handleAvailable = () => {
        toast({
            title: 'Available',
            position: 'top-right',
            status: 'success',
            duration: 3000,
            isClosable: true,
        })
        navigate(`/Payment`)
    }
    const handleError = (mes) => {
        toast({
            title: 'Not Available',
            position: 'top-right',
            description: `${mes}`,
            status: 'error',
            duration: 3000,
            isClosable: true,
        })
    }
    const handleLoginToast = (mes) => {
        toast({
            title: 'Please login to proceed',
            position: 'top-right',
            status: 'warning',
            duration: 3000,
            isClosable: true,
        })
        handleLoginClose(true)
    }
    // Get Single Hotel Data Sart

    const getSingleData = () => {
        dispatch(getHotelDetailRequest())
        axios.get(`https://specialized.onrender.com/hotellist/${id}`)
            .then((res) => {
                setData(res.data)
                setImg(res.data.image)
                dispatch(getHotelDetailSuccess())
            }).catch((error) => {
                console.log(error)
                dispatch(getHotelDetailFailure())
            })
    }

    useEffect(() => {
        getSingleData();
    }, [])

    // Get Single Hotel Data End

    // Posting Date Data Start

    const handleSubmit = (e) => {
        e.preventDefault();
       if(login_status) {  if (!dateStart || !dateEnd || adults < 1) {
            const showAlertfields = document.getElementById("showAlertfields")
            showAlertfields.textContent = "Fill all the fields"
            console.log("Data not Added")
        } else if (
            (data.name === "Single Room" && adults <= 2 && children <= 1) ||
            (data.name === "Royal Suit" && adults <= 3 && children <= 3) ||
            (data.name === "Delux Suit" && adults <= 4 && children <= 5) ||
            (data.name === "Double Room" && adults <= 6 && children <= 6)
        ) {
            let newVales = {
                dateStart: dateStart,
                dateEnd: dateEnd,
                adults: adults,
                children: children,
                price: price,
                numOfNights: numNights
            }
            console.log(newVales);
            axios.post(`https://specialized.onrender.com/booking`, newVales)
                .then((res) => {
                    console.log(res.data);
                }).catch((err) => {
                    console.log(err);
                })


            const alertMessage = "Check In Date: " + dateStart + "\n" +
                "Check Out Date: " + dateEnd + "\n" +
                "Adults: " + adults + "\n" +
                "Childrens: " + children + "\n" +
                "Per Night Price: ₹ " + price + "\n" +
                "Number of Nights: " + numNights + "\n" +
                "Total Price: " + totalPrice;
            // alert(alertMessage);
            if (totalPrice === data.name + " Can't Go With More Members") {
                // navigate(`/room-details/${id}`)
            } else {
                handleAvailable()
                dispatch(CartValue(totalPrice))
            }

        } else {
            console.log("DataNOt ADDED")
            // alert(data.name + " Can't Go With More Members")
            handleError(data.name + " Can't Go With More Members");
        }
    }else{
        handleLoginToast()
    }
    }

    // Posting Date Data End


    var price = data.perNight;
    const checkInDate = new Date(dateStart);
    const checkOutDate = new Date(dateEnd);
    const perNightPrice = price;

    console.log(checkInDate - checkOutDate)
    // Calculate the number of nights
    const numNights = Math.round((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24)) + 1;



    if (
        (data.name === "Single Room" && adults <= 2 && children <= 1) ||
        (data.name === "Royal Suit" && adults <= 3 && children <= 3) ||
        (data.name === "Delux Suit" && adults <= 4 && children <= 5) ||
        (data.name === "Double Room" && adults <= 6 && children <= 6)
    ) {
        totalPrice = "₹ " + (numNights * perNightPrice)
    } else {
        totalPrice = data.name + " Can't Go With More Members"
    }

    // console.log('Number of nights:', numNights);
    // console.log('Total price:', totalPrice);

    const handleImgchange = (img, name) => {
        setImg(img)
        console.log(img, '//');
    }

    return (
        <>
            <section className="bg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center bg-head text-white">
                            <h2 style={{ color: "white" }}>ROOM - LIST VIEW</h2>
                            <p>A quality room of Lotus with sea or mountain view</p>
                        </div>
                    </div>
                </div>
            </section>
            {
                loading ?  <Spinner  thickness='2px'
                speed='0.15s'my='10em' mx='40vw' p='2em' size='xl' /> : 
            
            <section>
                <div className="container mt-5">
                    <div className="row">
                        
                        <div className="col-md-8 right">
                            <div style={{ position: "relative" }}>
                                <img src={imgShow} alt={data.name} />
                                <div className="cost">
                                    <h2>₹ {price}</h2>
                                    <p>Per Night</p>
                                </div>
                            </div>

                            <div className="my-4">
                                <div onClick={() => handleImgchange(data.image_1, data.name)} >
                                    <img src={data.image_1} alt={data.name} />
                                </div>
                                <div onClick={() => handleImgchange(data.image_2, data.name)}>
                                    <img src={data.image_2} alt={data.name} />
                                </div>
                                <div onClick={() => handleImgchange(data.image_3, data.name)}>
                                    <img src={data.image_3} alt={data.name} />
                                </div>
                                <div onClick={() => handleImgchange(data.image_4, data.name)}>
                                    <img src={data.image_4} alt={data.name} />
                                </div>
                            </div>


                            <div className="my-4">
                                <h2 className="room-details-title mb-4 pb-2">DESCRIPTION OF ROOM</h2>
                                <p>{data.descriptionsingle_1}</p>
                                <p>{data.descriptionsingle_2}</p>
                                <p>{data.descriptionsingle_3}</p>
                                <p>{data.descriptionsingle_4}</p>
                            </div>
                            <div>
                                <h2 className="room-details-title mb-4 pb-2">ROOM FACILITIES</h2>
                                <ul>
                                    <li><span className="rightIcon"><i className="fa-solid fa-check"></i></span>{data.name}</li>
                                    <li><span className="rightIcon"><i className="fa-solid fa-check"></i></span>{data.roomsize}</li>
                                    <li><span className="rightIcon"><i className="fa-solid fa-check"></i></span>{data.perperson}</li>
                                    <li><span className="rightIcon"><i className="fa-solid fa-check"></i></span>{data.freeinternet}</li>
                                    <li><span className="rightIcon"><i className="fa-solid fa-check"></i></span>{data.breakfastinclide}</li>
                                    <li><span className="rightIcon"><i className="fa-solid fa-xmark"></i></span>{data.freewifi}</li>
                                    <li><span className="rightIcon"><i className="fa-solid fa-check"></i></span>{data.privatebalcony}</li>
                                    <li><span className="rightIcon"><i className="fa-solid fa-check"></i></span>{data.freenewspaper}</li>
                                    <li><span className="rightIcon"><i className="fa-solid fa-check"></i></span>{data.fullac}</li>
                                    <li><span className="rightIcon"><i className="fa-solid fa-xmark"></i></span>{data.FlatScreenTV}</li>
                                    <li><span className="rightIcon"><i className="fa-solid fa-check"></i></span>{data.BeachView}</li>
                                    <li><span className="rightIcon"><i className="fa-solid fa-xmark"></i></span>{data.RoomService}</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="reservation">
                                <h4 className="room-details-title">YOUR RESERVATION</h4>
                                <form onSubmit={handleSubmit}>
                                    <Input
                                        type="date"
                                        placeholder="MM/DD/YYYY"
                                        value={dateStart}
                                        bg='white'
                                        onChange={(e) => setDateStart(e.target.value)}
                                        required
                                    />
                                    <Input
                                        type="date"
                                        placeholder="MM/DD/YYYY"
                                        min={`${dateStart}`}
                                        value={dateEnd}
                                        bg='white'
                                        onChange={(e) => setDateEnd(e.target.value)}
                                        required
                                    />
                                    <Select value={adults} bg='white' onChange={(e) => setAdults(parseInt(e.target.value))} required>
                                        <option>ADULTS</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                    </Select>
                                    <Select value={children} bg='white' onChange={(e) => setChildren(parseInt(e.target.value))} required>
                                        <option>CHILDREN</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                    </Select>
                                    <p id="showAlertfields"></p>
                                    <div>
                                        <Button bg='white' className="btn texr-center default-btn" type="submit" >CHECK AVAILABILITY</Button>
                                    </div>
                                </form>
                            </div>
                            <div className="contact my-4">
                                <p>If you have any question please don't hesitate to contact us</p>
                                <div className="phoneEmail">
                                    <p><i className="fa-solid fa-phone"></i></p>
                                    <div>
                                        <p>9999955555</p>
                                        <p>9999955555</p>
                                    </div>
                                </div>
                                <div className="phoneEmail">
                                    <p><i className="fa-solid fa-envelope"></i></p>
                                    <div>
                                        <p>lotus@example.com</p>
                                        <p>demo@example.com</p>
                                    </div>
                                </div>
                            </div>
                            <div className="popular">
                                <h4 className="room-details-title">POPULAR POSTS</h4>
                                <div className="phoneEmail mt-4">
                                    <div>
                                        <img src="https://htmldemo.net/oestin/oestin/img/sidebar/1.jpg" alt="s1" />
                                    </div>
                                    <div>
                                        <p>POST DEMO TITLE</p>
                                        <p>22 Dec, 2023</p>
                                    </div>
                                </div>
                                <div className="phoneEmail mt-3">
                                    <div>
                                        <img src="https://htmldemo.net/oestin/oestin/img/sidebar/2.jpg" alt="s2" />
                                    </div>
                                    <div>
                                        <p>POST DEMO TITLE</p>
                                        <p>10 Feb, 2023</p>
                                    </div>
                                </div>
                                <div className="phoneEmail mt-3">
                                    <div>
                                        <img src="https://htmldemo.net/oestin/oestin/img/sidebar/3.jpg" alt="s3" />
                                    </div>
                                    <div>
                                        <p>POST DEMO TITLE</p>
                                        <p>06 Mar, 2023</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Clientarea />
            </section>
            }
        </>

    )
}