
import { Button, Flex,Box, Spacer, Input, Select, Text, HStack,Image,Heading, Slider } from "@chakra-ui/react";


export const Gallery = () => {
    return (
        <section className="gallery-area pt-90">
        <div className="container">
            <div className="row">
                <div className="col-md-8 mx-auto">
                    <div className="section-title text-center">
                        <h3>Lotus Gallery</h3>
                        <p>
                        Immerse yourself in the visual allure of Lotus Hotel through our captivating gallery. Browse stunning images capturing the essence of luxury, from exquisite interiors to breathtaking views.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div className="gallery-container">
            <div className="gallery-filter">
                <button data-filter="*" className="active">All</button>
                <button data-filter=".spa">Spa</button>
                <button data-filter=".restaurent">Restaurent</button>
                <button data-filter=".gym">Gym</button>
                <button data-filter=".hotel">Hotel</button>
            </div>

            <div className="gallery gallery-masonry" >
                <div className="gallery-item spa gym">
                    <div className="thumb">
                        <img src="img/gallery/1.jpg" alt="" />
                    </div>

                    <div className="gallery-hover">
                        <div className="gallery-icon">
                            <a href="#">
                              <span className="p-img"><img src="img/icon/link.png" alt=""/></span>
                               <span className="s-img"><img src="img/icon/link-hover.png" alt=""/></span>
                           </a>
                            <a className="image-popup" href="img/gallery/1.jpg">
                               <span className="p-img"><img src="img/icon/search.png" alt=""/></span>
                               <span className="s-img"><img src="img/icon/search-hover.png" alt=""/></span>
                             </a>
                        </div>
                    </div>
                </div>

                <div className="gallery-item spa hotel">
                    <div className="thumb">
                        <img src="img/gallery/3.jpg" alt="" />
                    </div>
                    <div className="gallery-hover">
                        <div className="gallery-icon">
                            <a href="#">
                             <span className="p-img"><img src="img/icon/link.png" alt=""/></span>
                             <span className="s-img"><img src="img/icon/link-hover.png" alt=""/></span>
                            </a>
                            <a className="image-popup" href="img/gallery/3.jpg">
                              <span className="p-img"><img src="img/icon/search.png" alt=""/></span>
                              <span className="s-img"><img src="img/icon/search-hover.png" alt="" /></span>
                             </a>
                        </div>
                    </div>
                    <div className="thumb">
                        <img src="img/gallery/6.jpg" alt="" />
                    </div>
                    <div className="gallery-hover">
                        <div className="gallery-icon">
                            <a href="#">
                              <span className="p-img"><img src="img/icon/link.png" alt=""/></span>
                              <span className="s-img"><img src="img/icon/link-hover.png" alt=""/></span>
                           </a>
                            <a className="image-popup" href="img/gallery/6.jpg">
                              <span className="p-img"><img src="img/icon/search.png" alt=""/></span>
                              <span className="s-img"><img src="img/icon/search-hover.png" alt=""/></span>
                           </a>
                        </div>
                    </div>
                </div>

                <div className="gallery-item restaurent hotel">
                    <div className="thumb">
                        <img src="img/gallery/2.jpg" alt="" />
                    </div>
                    <div className="gallery-hover">
                        <div className="gallery-icon">
                            <a href="#">
                              <span className="p-img" ><img src="img/icon/link.png" alt=""/></span>
                              <span className="s-img"><img src="img/icon/link-hover.png" alt=""/></span>
                           </a>
                            <a className="image-popup" href="img/gallery/2.jpg">
                               <span className="p-img"><img src="img/icon/search.png" alt=""/></span>
                               <span className="s-img"><img src="img/icon/search-hover.png" alt="" /></span>
                            </a>
                        </div>
                    </div>
                    <div className="thumb">
                        <img src="img/gallery/5.jpg" alt="" />
                    </div>
                    <div className="gallery-hover">
                        <div className="gallery-icon">
                            <a href="#">
                              <span className="p-img"><img src="img/icon/link.png" alt=""/></span>
                              <span className="s-img"><img src="img/icon/link-hover.png" alt=""/></span>
                           </a>
                            <a className="image-popup" href="img/gallery/5.jpg">
                              <span className="p-img"><img src="img/icon/search.png" alt=""/></span>
                              <span className="s-img"><img src="img/icon/search-hover.png" alt=""/></span>
                           </a>
                        </div>
                    </div>
                </div>

                <div className="gallery-item restaurent hotel">
                    <div className="thumb">
                        <img src="img/gallery/4.jpg" alt="" />
                    </div>
                    <div className="gallery-hover">
                        <div className="gallery-icon">
                            <a href="#">
                              <span className="p-img"><img src="img/icon/link.png" alt=""/></span>
                              <span className="s-img"><img src="img/icon/link-hover.png" alt=""/></span>
                           </a>
                            <a className="image-popup" href="img/gallery/4.jpg">
                              <span className="p-img"><img src="img/icon/search.png" alt=""/></span>
                              <span className="s-img"><img src="img/icon/search-hover.png" alt=""/></span>
                           </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}