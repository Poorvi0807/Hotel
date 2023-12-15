import { Box } from "@chakra-ui/react"
import { useState } from "react"
import { SliderCard } from "./SliderCard"


export const SliderSec = () => {
    let [slide,setSlide] = useState(1)

    const  handleSlide = (i) => {
        setSlide(i)
    }
    return (
        <section className="slider-area">
        <div className="slider-wrapper">
           <SliderCard i={slide} handleSlide={handleSlide} />
        </div>
    </section>
      )
}