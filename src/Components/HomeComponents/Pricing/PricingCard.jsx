import { useSelector } from "react-redux";
import { Link } from "react-router-dom"
import { MyContext } from "../../../ContextApi/MyContext";
import { useContext } from "react";

export const PricingCard = ({title,Price,clas}) => {
  const login = useSelector((state) => (state.login_status));
  const { handleLoginClose } = useContext(MyContext);

    return (
        <>
        
        <div className="row">
        <div className="col-md-4 col-sm-6">
            <div className={clas==1?"single-pricing best-offer":"single-pricing"}>
                <div className="package-name">
                    <h3>{title}</h3>
                    <h1>
                        <span className="currency">₹</span>{Price}
                        <span className="count">/per night</span>
                    </h1>
                </div>
                <div className="package-offer">
                    <span>Flight Ticket</span>
                    <span>Music Concert (30% Off)</span>
                    <span>Restaurant (Lunch)</span>
                    <span className={clas==2?"light":''}>Treatment</span>
                    <span className={clas==1?"light":''}>Face Make</span>
                </div>
                <div className="signup-btn">
                    {
                        login?<Link to="/" className="default-btn">BUY</Link> :
                        <Link  className="default-btn" onClick={()=>handleLoginClose(true)}>SIGN UP</Link> 
                        
                    }
                </div>
            </div>
        </div>
        </div>
        </>
    )
} 