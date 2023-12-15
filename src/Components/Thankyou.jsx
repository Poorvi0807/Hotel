import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Thankyou = () => {
  let navigate = useNavigate();

  const myFunction = () => {
    setTimeout(() => {
      navigate('/');
    }, 10000);
  };

  useEffect(() => {
    const header = window.document.querySelector('#root .header-area');
    const footer = window.document.querySelector('#root .footer-area');
    const mobileNav = window.document.querySelector('#root #mobile-menu-area_r #dropdown ul');

    if (header && footer) {
      header.style.display = 'none';
      footer.style.display = 'none';
      mobileNav.style.display = 'none';
    }

    myFunction();

    return () => {
      if (header && footer) {
        header.style.display = 'block';
        footer.style.display = 'block';
        mobileNav.style.display = 'block';
      }
    };
  }, []);

  return (
    <Box backgroundImage="url('/img/bg/resort_1.jpg')" id="t_container">
      <h1 id="t_logo"><i className="fa-regular fa-circle-check fa-fade"></i></h1>
      <h1>Your Payment is Successful!</h1>
      <p id="t_thank">
        Thank you for your payment. Booking details have been sent to your registered email.<br/>
        <br/>
        <br/>
        <br/>
        Redirecting to the home page...
      </p>
      <button onClick={() => navigate('/')}>
        Back to Home
      </button>
    </Box>
  );
};
