import { useEffect, useState } from "react";
import { Signup } from "./Signup";
import { Password } from "./Password";
import { Otp } from "./OTP";
import { getdata } from "../../Redux/action";
import { useDispatch, useSelector } from "react-redux";

export const Registration = () => {
  let [state, setState] = useState(1);
  let [user, setuser] = useState('lotus@gmail.com');
  let [currOtp, setOtp] = useState('');
  let [password, setPassword] = useState('');
  let dispatch = useDispatch()
  
  const handlePage = (p,otp) => {
    setState(p);
    setOtp(otp);
  };

  const handleUsername = ( username) => {
    setuser(username);
  };

  const handlePassword = (pass) => {
    setPassword(pass);
  };

  useEffect(()=>{
    getdata(dispatch)
  },[user])
  
  return (
    <div id="box">
      {state === 1 ? (
        <Signup handlePage={handlePage} handleUsername={handleUsername} setPassword={handlePassword} />
      ) : state === 2 ? (
        <Password handlePage={handlePage} user={user} password={password} />
      ) : (
        <Otp currOtp={currOtp} password={password} />
      )}
    </div>
  );
};
