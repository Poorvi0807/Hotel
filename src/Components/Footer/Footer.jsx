import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="footer-area">
      <div className="footer-widget-area bg-dark">
        <div className="container">
          <div className="row mb-n60">
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-60">
              <div className="single-footer-widget">
                <div className="footer-logo">
                  <Link to="/">
                    <img src="img/logo/footer-logo.png" alt="Oestin" />
                  </Link>
                </div>
                <p>
                Navigate the luxury with ease. Find quick links to book, explore, and connect. Stay updated with our latest offers and follow us on social media.
                </p>
                <div className="social-icons">
                  <Link to="https://www.facebook.com/">
                    <i className="fa-brands fa-facebook-f"></i>
                  </Link>
                  <Link to="https://twitter.com/">
                    <i className="fa-brands fa-twitter"></i>
                  </Link>
                  <Link to="https://plus.google.com/">
                    <i className="fa-solid fa-rss"></i>
                  </Link>
                  <Link to="https://www.instagram.com/">
                    <i className="fa-brands fa-instagram"></i>
                  </Link>
                  <Link to="https://www.pinterest.com/">
                    <i className="fa-brands fa-pinterest-p"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 offset-lg-1 col-lg-4 col-md-6 col-sm-6 col-12 mb-60">
              <div className="single-footer-widget">
                <h3>contact us</h3>
                <div className="c-info">
                  <span>
                    <i className="fa-solid fa-location-dot"></i>
                  </span>
                  <span>
                    #02, Electronic City, <br />
                    chhattisgarh-492001
                  </span>
                </div>
                <div className="c-info">
                  <span>
                    <i className="fa-solid fa-envelope"></i>
                  </span>
                  <span>
                    lotus@hotel.com<br />
                    lotus@hotel.com
                  </span>
                </div>
                <div className="c-info">
                  <span>
                    <i className="fa-solid fa-phone"></i>
                  </span>
                  <span>
                    +91 9999955555<br />
                    +91 9999955555
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-6 col-sm-6 col-12 mb-60">
              <div className="single-footer-widget">
                <h3>quick links</h3>
                <ul className="footer-list">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/">Stuffs</Link>
                  </li>
                  <li>
                    <Link to="/rome-details">Suits &amp; Rooms</Link>
                  </li>
                  <li>
                    <Link to="/">Event</Link>
                  </li>
                  <li>
                    <Link to="/">Location</Link>
                  </li>
                  <li>
                    <Link to="/">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-60">
              <div className="single-footer-widget">
                <h3>collections</h3>
                <div className="instagram-image">
                  <div className="footer-img">
                    <Link to="/room-details/1">
                      <img src="img/footer/1.jpg" alt="" />
                    </Link>
                  </div>
                  <div className="footer-img">
                    <Link to="/room-details/1">
                      <img src="img/footer/2.jpg" alt="" />
                    </Link>
                  </div>
                  <div className="footer-img">
                    <Link to="/room-details/1">
                      <img src="img/footer/3.jpg" alt="" />
                    </Link>
                  </div>
                  <div className="footer-img">
                    <Link to="/room-details/1">
                      <img src="img/footer/4.jpg" alt="" />
                    </Link>
                  </div>
                  <div className="footer-img">
                    <Link to="/room-details/1">
                      <img src="img/footer/5.jpg" alt="" />
                    </Link>
                  </div>
                  <div className="footer-img">
                    <Link to="/room-details/1">
                      <img src="img/footer/6.jpg" alt="" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom-area bg-black">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-auto">
              <div className="footer-text text-center">
                <span>
                  © 2023 <b className="text-white">Lotus</b> Made with{" "}
                  <i className="fa fa-heart text-danger"></i> in{" "}
                  <Link to="/hasthemes.com/">
                    <b>India</b>
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};