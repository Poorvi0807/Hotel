import { Link } from 'react-router-dom';
import { MyContext } from '../../../ContextApi/MyContext';
import { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleLoginFailure } from '../../../Redux/action';
import { useToast } from '@chakra-ui/react';

export const NavbarLeft = ({ scrollDistance }) => {
  const { handleLoginClose, loginPopup } = useContext(MyContext);
  const login = useSelector((state) => (state.login_status));
  let dispatch = useDispatch()
  const toast = useToast()

  const handleLogoutToast = () => {
    toast({
      title: 'Logged-out successfull',
      position: 'top-right',
      status: 'success',
      duration: 2000,
      isClosable: true,
    })
  }



  useEffect(() => {
    console.log(login, 'login_status');
  }, []);


  const handleLogout = () => {
    dispatch(handleLoginFailure(false))
    handleLogoutToast()
  }
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-lg-4 col-sm-4 col-12">
            <div className="logo" id={scrollDistance >= 11 ? "NavHomeLogo-resize" : ""}>
              <Link to="/">
                <img src="img/logo/logo.png" alt="Lotus" />
              </Link>
            </div>
          </div>
          <div className="col-xl-7 col-lg-8 col-sm-8 col-12">
            <div className="header-top fix" id={scrollDistance >= 11 ? "NavTopSec-Hide" : ""}>
              <div className="header-contact">
                <span className="text-theme">Contact:</span>
                <span>9999955555</span>
              </div>
              <div className="header-links">
                <Link to="https://www.facebook.com/"><i className="fa-brands fa-facebook-f"></i></Link>
                <Link to="https://twitter.com/"><i className="fa-brands fa-twitter"></i></Link>
                <Link to="https://plus.google.com/"><i className="fa-solid fa-rss"></i></Link>
                <Link to="https://www.instagram.com/"><i className="fa-brands fa-instagram"></i></Link>
                <Link to="https://www.pinterest.com/"><i className="fa-brands fa-pinterest-p"></i></Link>
              </div>
            </div>
            <div className="main-menu d-none d-lg-block">
              <nav>
                <ul>
                  <li><Link to="/">HOME</Link></li>
                  <li>
                    <Link to="/room-list">ROOMS</Link>
                    <ul className="submenu">
                      <li><Link to="/room-list">ROOM LIST</Link></li>
                      <li><Link to="/room-details/1">ROOM DETAILS</Link></li>
                    </ul>
                  </li>
                  <li>
                    <Link to="#">ACTIVITIES</Link>
                    <ul className="submenu megamenu">
                      <li>
                        <Link to="#">Megamenu List</Link>
                        <ul>
                          <li><Link to="#">Location</Link></li>
                          <li><Link to="/room-list">Room List</Link></li>
                          <li><Link to="/room-details">Room Details</Link></li>
                          <li><Link to="#">Mega menu</Link></li>
                        </ul>
                      </li>
                      <li>
                        <Link to="#">Megamenu List</Link>
                        <ul>
                          <li><Link to="/">Event</Link></li>
                          <li><Link to="/">Mega menu</Link></li>
                          <li><Link to="/">Contact</Link></li>
                          <li><Link to="/">Team</Link></li>
                          <li><Link to="/">Mega menu</Link></li>
                        </ul>
                      </li>
                      <li>
                        <Link to="#">Megamenu List</Link>
                        <ul>
                          <li><Link to="room-list">Room List</Link></li>
                          <li><Link to="#">Mega menu</Link></li>
                          <li><Link to="room-list">Room Grid</Link></li>
                          <li><Link to="room-details">Room Details</Link></li>
                          <li><Link to="#">Mega menu</Link></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li><Link to="/">LOCATION</Link></li>
                  <li><Link to="/">EVENT</Link></li>
                  <li><Link to="/">TEAM</Link></li>
                  
                  {
                    login? <li><Link className='profile' onClick={()=>handleLogout()}>LOGOUT</Link></li> :
                    <li><Link className='profile' onClick={() => handleLoginClose(true)}>LOGIN</Link></li>
                  }
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
