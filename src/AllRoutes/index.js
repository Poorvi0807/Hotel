import { Routes, Route } from 'react-router-dom'
import { Home } from '../Components/Home'
import { HotelDetails } from '../Components/HotelDetails'
import { Signup } from '../Components/Registration/Signup'
import { HotelList } from '../Components/HotelList'
import { Payment } from '../Components/Payment'
import { Otp } from '../Components/Registration/OTP'
import { Thankyou } from '../Components/Thankyou'
import { ErrorPage } from "../Components/Error";

export const AllRoutes = () => {
    
    return (
        <Routes>
            <Route path='/payment-success' element={<Thankyou /> } />
            <Route path='/' element={<Home />} />
            {/* <Route path='/signup' element={<Signup/> }/> */}
            {/* <Route path='/otp' element={<Otp/> }/> */}
            <Route path='/Payment' element={<Payment />} />
            <Route path='*' element={<ErrorPage />} />
            <Route path='/room-list' element={<HotelList /> } />
            <Route path='/room-details/:id' element={<HotelDetails />} />
        </Routes>
    )
}