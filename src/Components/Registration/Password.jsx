import { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link} from 'react-router-dom'
import { Checkbox, useToast} from '@chakra-ui/react'
import { MyContext } from '../../ContextApi/MyContext';
import { getdata, handleLoginSuccess, postUserStatus } from '../../Redux/action';
export const Password = ({handlePage,user,password}) => {
    let [users,setUsers] = useState(useSelector((state)=>state.UserList))
    let [err,setErr] = useState(false)
    let [inputPass,setInputPass] = useState('')
    const { handleLoginClose,loginPopup } = useContext(MyContext);
  let dispatch = useDispatch()
  const toast = useToast()

  const handleLoginToast = () => {
    toast({
      title: 'Login successfull',
      position: 'top-right',
      status: 'success',
      duration: 3000,
      isClosable: true,
    })
  }

  const handleErr = () => {
    toast({
      title: 'Invalid credentials',
      position: 'top-right',
      status: 'warning',
      duration: 3000,
      isClosable: true,
    })
  }
   
  useEffect(()=>{
   getdata(dispatch)

  },[user])
  
    function passValidation() {
        // password
       let flag =true
        users?.map(function (ele) {
          if ( (ele.mail == user && ele.Password == inputPass) || (ele.ph == user && ele.Password == inputPass) ) {
            flag=false
            console.log("succfull_login",);
            dispatch(handleLoginSuccess(true))
            let id = ele.id || user.length;
            postUserStatus(id,dispatch)
            handleLoginClose(false)
            handleLoginToast()
            return;
          }
        });
      
        flag&&handleErr()
       
      }

    return (
        <div id="login_popup" className="otp">
        <h3>WELCOME BACK</h3>
        <p><span id="mail">{user}</span><Link to="/" onClick={()=>handlePage(1)}> change</Link></p>
        <p id="close" onClick={()=>handleLoginClose(false)}>&times;</p>
        <span style={{display:"none"}} id="mail_sent">Succefully Registerd,<br />Temporary Password sent to registred Email</span>
         <input type="password" placeholder="Password" id="OTP" onChange={(e)=>setInputPass(e.target.value)} />
         {
            err&&<span >Password is incorrect!</span>
         }
         <div id="otp_forgot">
            <div>
            <Checkbox size='md' colorScheme='yellow' defaultChecked>
               Remeber Password
            </Checkbox>
            </div>
            <Link to="#" id="forgot_pass">Forgot Password</Link>
         </div>
         <button id="OTP_btn" onClick={passValidation} >LOGIN</button>
         
    </div>
    )
}