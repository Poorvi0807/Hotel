import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { Box } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/toast";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom'

export const Payment = () => {
let [carData,setData] = useState({
    input:'',
    card_number: 0,
    cvv: '',
})
let cart_value = useSelector(state=>state.cart_value )
const navigate = useNavigate()
const toast = useToast()
// =========================
//             Toast        
// ========================
const handlePaymentSuccess = () => {
    toast({
      title: `Payment Successfull`,
      position: 'top-right',
      status: 'success',
      duration: 3000,
      isClosable: true,
    })
    navigate('/payment-success')
  }

  const handlePaymentFailure = () => {
    toast({
      title: `Invalid credentials`,
      description:'Use Card no:- 123456789 & cvv:- 123',
      position: 'top-right',
      status: 'error',
      duration: 3000,
      isClosable: true,
    })
  }

  const handleMail = () => {
    window.Email.send({
        SecureToken: "dc989647-f40e-45dc-b708-b7b85e1361bf",
        Host: "smtp.elasticemail.com",
        Username: "vkvinu.com@gmail.com",
        Password: "6178B5D2C5BE6581D19F213604CB943C50C0",
        To: `${carData.input}`,
        From: "vkvinu.com@gmail.com",
        Subject: "Booking Confirmed",

        Body: `<!DOCTYPE html>
                <html lang="en">
                <head>
                  <meta charset="UTF-8">
                  <meta http-equiv="X-UA-Compatible" content="IE=edge">
                  <meta name="viewport" content="width=device-width, initial-scale=1.0">
                  <title>Oestin</title>
                </head>
                <body>
               
                  <p>Hello,</p>
                  <p><span> We're thrilled you Choose us!</span></p>
                  <p><span>Room No:- ${Math.floor(Math.random() * 900) + 100}.</span></p>
                  <br />
                  <p>From: 2023-07-10 </p>
                  <p>To  : 2023-07-14 </p>
                </body>
                </html>`,
      }).then(()=>{
        handlePaymentSuccess()
      }).catch(()=>{
        console.log('Email Failed');
      })
  }
// =========================
//         Toast--End       
// ========================

   const handleSubmit = (e) => {
        e.preventDefault();
        if ("123456789" === carData.card_number&&'123' === carData.cvv) {
            handleMail()
        } else {
          handlePaymentFailure()
        }
      }
      
      useEffect(()=>{

      },[])
      

    return (
        <Box className="h_container" backgroundImage='img/slider/1.jpg' >

        <form action="">
    
            <div className="row">
    
                <div className="col">
    
                    <h3 className="title">billing address</h3>
    
                    <div className="inputBox">
                        <span>full name :</span>
                        <input type="text" id='name' placeholder="john deo" required />
                    </div>
                    <div className="inputBox">
                        <span>email :</span>
                        <input type="email" id="email" placeholder="example@example.com" required onChange={(e)=>setData({...carData,input:e.target.value})}/>
                    </div>
                    <div className="inputBox">
                        <span>address :</span>
                        <input type="text" id="address" placeholder="room - street - locality" required />
                    </div>
                    <div className="inputBox">
                        <span>city :</span>
                        <input type="text" id="city" placeholder="mumbai" required />
                    </div>
    
                    <div className="flex">
                        <div className="inputBox">
                            <span>state :</span>
                            <input type="text" id="state" placeholder="india" required />
                        </div>
                        <div className="inputBox">
                            <span>zip code :</span>
                            <input type="text" id="zip" placeholder="123 456" required />
                        </div>
                    </div>
    
                </div>
    
                <div className="col">
    
                    <div style={{display:'flex', justifyContent: "space-between"}}><h3 className="title">payment</h3><h3 className="title" id="price">{cart_value}</h3></div>
    
                    <div className="inputBox">
                        <span>cards accepted :</span>
                        <img src="https://d6xcmfyh68wv8.cloudfront.net/assets/payments/payment_method_cards.png" alt="" />
                    </div>
                    <div className="inputBox">
                        <span>name on card :</span>
                        <input type="text" id="cardName" placeholder="mr. john deo" required />
                    </div>
                    <div className="inputBox">
                        <span>credit card number :</span>
                        <input type="number" id="cardNum" placeholder="1111-2222-3333-4444" required onChange={(e)=>setData({...carData,card_number:e.target.value})} />
                    </div>
                    <div className="inputBox">
                        <span>exp month :</span>
                        <input type="text" id="expMon" placeholder="january" required />
                    </div>
    
                    <div className="flex">
                        <div className="inputBox">
                            <span>exp year :</span>
                            <input type="number" id="expYr" placeholder="2023" required />
                        </div>
                        <div className="inputBox">
                            <span>CVV :</span>
                            <input type="text" id="cvv" placeholder="123" required onChange={(e)=>setData({...carData,cvv:e.target.value})}/>
                        </div>
                    </div>
    
                </div>
        
            </div>
    <div id="btn">
            <Button  type="submit" id="btn" className="submit-btn" onClick={handleSubmit}>CONFIRM PAYMENT</Button>
        </div>
        </form>
    
    </Box>  
    )
}