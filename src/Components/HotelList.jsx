import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import { useEffect } from "react"
import {
    getHotelFailure,
    getHotelRequest,
    getHotelSuccess
} from "../Redux/action"
import {
    Stack,
    Card,
    CardBody,
    Heading,
    Text,
    Image,
    Box,
    Button,
    Spinner,
} from '@chakra-ui/react'
import "../Components/hotelList.css"
import { Link as RouterLink } from "react-router-dom"


export const HotelList = () => {

    const hotelslist = useSelector((state) => state.hotels)
    const loading = useSelector((state) => state.isLoading)

    console.log(hotelslist)

    const dispatch = useDispatch();

    const getData = () => {
        dispatch(getHotelRequest());
        axios.get(`https://specialized.onrender.com/hotellist`)
            .then((res) => {
                // console.log(res.data)
                dispatch(getHotelSuccess(res.data));
            })
            .catch((error) => {
                console.log(error)
                dispatch(getHotelFailure());
            })
    }

    useEffect(() => {
        getData();
    }, [])

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

            <Box className="hotelView">
                <div>
                    <Heading>OUR ATR ROOMS</Heading>
                    <p>Lotus hotel search allows users to compare hotel prices in just a few clicks from hundreds of booking sites for more than 5.0 million hotels</p>
                </div>
             {
                loading ?   <Spinner  thickness='2px'
                speed='0.15s'ml='40vw' p='2em' size='xl' /> :  
                <div>
                    {hotelslist?.map((hotel) => (

                        <Card
                            direction={{ base: 'column', sm: 'row' }}
                            overflow='hidden'
                            variant='outline'
                            key={hotel.id}
                            my={10}
                        >

                            <RouterLink to={`/room-details/${hotel.id}`}>
                                <Image
                                    objectFit='cover'
                                    // minW={{ base: '100%', sm: '300px' }}
                                    w="1000px" h="100%"
                                    src={hotel.image}
                                    alt={hotel.name}
                                />
                                <div
                                    className="cost">
                                    <h2>₹ {hotel.perNight}</h2>
                                    <p>Per Night</p>
                                </div>
                            </RouterLink>

                            <Stack>
                                <CardBody my={5}>
                                    <Heading size='md'>{hotel.name}</Heading>

                                    <Text py='2'>
                                        {hotel.descriptionlist}
                                    </Text>
                                    <Heading size='md'>Room Facility</Heading>

                                    <Text py='2'>
                                        {hotel.breakfastinclide}, {hotel.freewifi}, {hotel.privatebalcony}, {hotel.fullac}, {hotel.FlatScreenTV}, {hotel.RoomService}
                                    </Text>
                                    {/* <RouterLink to={`/hotel-details/${hotel.id}`}>
                                    <Button colorScheme='blue'>
                                        Hotel Details
                                    </Button>
                                </RouterLink> */}
                                </CardBody>
                            </Stack>
                        </Card>

                    ))}
                </div>
            }
            </Box>
        </>

    )
}