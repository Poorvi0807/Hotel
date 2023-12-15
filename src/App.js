import React, { useContext, useEffect, useState } from 'react';
import { AllRoutes } from './AllRoutes';
import './App.css';
import './home.css'
import { Navbar } from './Components/HomeComponents/Navbar/Navbar';
import { Registration } from './Components/Registration/Registration';
import { MyContext, MyProvider } from './ContextApi/MyContext';
import { Footer } from './Components/Footer/Footer';

function App() {
  const [scrollDistance, setScrollDistance] = useState(0);
  const { handleLoginClose,loginPopup } = useContext(MyContext);

  useEffect(() => {
    function updateScrollDistance() {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercentage = Math.round((scrollTop / scrollHeight) * 100);
      setScrollDistance(pre=>scrollPercentage);
    }

    window.addEventListener('scroll', updateScrollDistance);

    return () => {
      window.removeEventListener('scroll', updateScrollDistance);
    };
  }, []);

  return (
      <div className="App">
        <Navbar scrollDistance={scrollDistance} />
   {    loginPopup&&<Registration />}
        <AllRoutes />
       <Footer />
      </div>
  );
}

export default App;
