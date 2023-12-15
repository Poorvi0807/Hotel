import { Link } from "react-router-dom"
import { NavbarLeft } from "./NavbarLeft"
import { useDispatch, useSelector } from "react-redux";
import { useContext, useEffect } from "react";
import { MyContext } from "../../../ContextApi/MyContext";
import { useToast } from "@chakra-ui/react";
import { handleLoginFailure } from "../../../Redux/action";


export const NavRight = () => {
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
        {/*  Mobile Menu Area start  */}
        <div className="mobile-menu-area" id="mobile-menu-area_r" style={{padding:'0px'}}>
           
                            <nav id="dropdown">
                                <ul>
                                    <li><Link to="/">HOME</Link></li>
                                    <li>
                                        <Link to="/room-list/">ROOMS</Link>
                                    </li>
                                    <li><Link to="#">TEAM</Link></li>
                                    {
                    login? <li><Link className='profile' onClick={()=>handleLogout()}>LOGOUT</Link></li> :
                    <li><Link className='profile' onClick={() => handleLoginClose(true)}>LOGIN</Link></li>
                  }
                                </ul>
                            </nav>
                       </div>
                   </>
    )
}