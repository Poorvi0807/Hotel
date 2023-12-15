import { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { MyContext } from "../../ContextApi/MyContext";
import { handleLoginSuccess } from "../../Redux/action";
import { useToast } from "@chakra-ui/react";

export const Otp = ({ currOtp, password }) => {
  let [inputOtp, setIntputotp] = useState("");
  let [username, setUserName] = useState("");
  let [users, setUsers] = useState([]);
  let [flag, setSuccess] = useState(false);
  let [err, setErr] = useState(false);
  let user = useSelector((state) => state.UserList);
  const { handleLoginClose, loginPopup } = useContext(MyContext);
  let dispatch = useDispatch();
  const toast = useToast()


  const handleLoginToast = () => {
    toast({
      title: 'Account created.',
      position: 'top-right',
      description: `We've created your account for you.Your Temporary password :- ${password}`,
      status: 'success',
      duration: 7000,
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

  const handleOtpVerify = () => {
    //otp verify
    if (inputOtp == currOtp) {
      dispatch(handleLoginSuccess(true));
      handleLoginToast()
      handleLoginClose(false);
    } else {
      handleErr()
    }
  };
  return (
    <div id="box">
      <div id="login_popup">
        <h3>GET OTP</h3>
        <p>
          A 4-digit OTP has been sent to <br />
          <br />
          <span id="mail"> +91 9999955555</span>
        </p>
        <p id="close" onClick={() => handleLoginClose(false)}>
          &times;
        </p>
        <input
          type="text"
          placeholder="Enter OTP"
          id="OTP"
          onChange={(e) => setIntputotp(e.target.value)}
        />
        {err && <span>invalid !</span>}
        <button id="login_btn" className="otp_btn" onClick={handleOtpVerify}>
          LOGIN
        </button>

        <Link to="#" id="login_skip">
          Resend OTP
        </Link>
      </div>
    </div>
  );
};
