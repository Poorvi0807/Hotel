import { Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { Otp } from "./OTP"
import { Password } from './Password'
import { useContext, useEffect, useState } from "react"
import { getdata, handleLoginFailure, handleLoginSuccess, handleUserList, postdata } from "../../Redux/action"
import { MyContext } from "../../ContextApi/MyContext";
import { useToast } from '@chakra-ui/react'

export const Signup = ({ handlePage, setPassword, handleUsername }) => {
  let dispatch = useDispatch()
  let [username, setUserName] = useState('')
  let [users, setUsers] = useState(useSelector((state) => state.UserList))
  let [newUser, setnewUser] = useState(true)
  let login_status = useSelector((state) => state.login_status)
  const { handleLoginClose } = useContext(MyContext);
  const toast = useToast()

  useEffect(()=>{
    getdata(dispatch)
  },[])
  const handleMailToast = () => {
    toast({
      title: 'Account created.',
      position: 'top-right',
      description: "We've created your account for you. UserName & Password Sent to your mail",
      status: 'success',
      duration: 9000,
      isClosable: true,
    })
  }

  const handleOtpToast = (Otp) => {
    toast({
      title: `Your OTP is: - ${Otp}`,
      position: 'top-right',
      status: 'success',
      duration: 5000,
      isClosable: true,
    })
  }

  const handleError = () => {
    toast({
      title: `Error Please Try Again`,
      position: 'top-right',
      status: 'error',
      duration: 3000,
      isClosable: true,
    })
  }

  function verify() {
    // OTP & PASSWORD Generate
    let Otp = "",
      password = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUYWXYZ0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&";
    for (let i = 0; i < 4; i++) Otp += Math.floor(Math.random() * 10);
    for (let i = 0; i < 6; i++)
      password += str.charAt(Math.floor(Math.random() * str.length));

    setPassword(pre => password)
    handleUsername(pre => username)
    let input = username;
    let size = input.length;
    let wrong_cred = document.querySelector("#ph_number+span");
    // console.log(object);
    let obj = {
      firstName: "",
      lastName: "",
      Gender: "",
      DOB: "",
      ph: "",
      mail: "",
      Password: "",
      login_status: false,
      RoomNo: 1,
    };

    let flag = true
    if (input.includes("@gmail.com") || Number.parseInt(input) && input.length > 9) {
         
      // check existing customer
      users.map(function (ele) {
        if (ele.mail == input || ele.ph == input) {
          flag = false
          console.log('existing user...');
          handlePage(2)
          return;
        }
      });

    } else if (input.length < 9) {
      document.querySelector("#ph_number+span").style.display = "flex"
      return;
    }

    //    New User's
    if (flag) {
      if (input.includes("@gmail.com")) {

        //  email for new user_________________________________________________
        window.Email.send({
          SecureToken: "dc989647-f40e-45dc-b708-b7b85e1361bf",
          Host: "smtp.elasticemail.com",
          Username: "lotus.com@gmail.com",
          Password: "6178B5D2C5BE6581D19F213604CB943C50C0",
          To: `${input}`,
          From: "lotus.com@gmail.com",
          Subject: "Holle! Welcome to Lotus!",

          Body: `<!DOCTYPE html>
                  <html lang="en">
                  <head>
                    <meta charset="UTF-8">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Lotus</title>
                  </head>
                  <body>
                 
                    <p>Hello,</p>
                    <p><span> We're thrilled you Choose us!</span></p>
                    <p><span>To make your future shopping experience super quick and easy, we created a Lotus account for you.</span></p>
                    <p>EMAIL ID: ${input} </p>
                    <p>PASSWORD: ${password}</p>
                    <p>This password is auto generated and can be changed by going onto your profile.</p>
                  </body>
                  </html>`,
        }).then((message) => {
          console.log('mail',message);
          if (message == "OK") {
            obj.mail = input;
            obj.Password = password;

            // post new user
            // users.push(obj);
            postdata(obj);
            dispatch(handleUserList(obj))
            getdata(dispatch)
            handleMailToast()
            handlePage(2)
          } else {
            // alert(message);
            handleError()
          }
        }).catch((err) => {
          //   alert(err)
            dispatch(handleLoginFailure())
          return;
        });




      } else if (Number.parseInt(input)) {
        if (size != 10) {
          wrong_cred.style.display = "block";
        } else {
          obj.ph = input;
          obj.Password = password;
          obj.login_status = true
          users.push(obj);
          dispatch(handleUserList(obj))
        }
        //   post data {number}
        postdata(obj);
        handlePage(3, Otp)
        handleOtpToast(Otp)
      } 
    } else {
      wrong_cred.style.display = "block";
    }


  }




  return (
    <div id="login_popup">
      <h3>LOGIN OR SIGNUP</h3>
      <p></p>
      <p id="close" onClick={() => handleLoginClose(false)}>&times;</p>
      <input type="text" placeholder="Enter Mobile/Email" id="ph_number" value={username} onChange={(e) =>{ setUserName(e.target.value); 
    getdata(dispatch) }} />
      <span style={{ display: "none" }}>Mobile/Email is required!</span>
      <button id="login_btn" onClick={verify}>CONTINUE</button>
      {/* <h5 id="login_line"><span>Or continue with</span></h5> */}
      <div id="login_fg">
        <Link to="#" id="l_fb"><img src="https://www.faballey.com/images/loginfb.png" alt="facebook" /></Link>
        <Link to="#" id="l_google"><img src="https://www.faballey.com/images/logingogl.png" alt="google" /></Link>
      </div>
      <Link to="#" id="login_skip" onClick={() => handleLoginClose(false)}>skip</Link>
    </div>
  )
}