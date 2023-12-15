import { Button, Flex,Box, Spacer, Input, Select, Text, HStack,Image,Heading, Slider } from "@chakra-ui/react";
import { About } from "./HomeComponents/Abouth";
import { Availibility } from "./HomeComponents/AvailbilityCheck";
import { RoomBox } from "./HomeComponents/RoomBox";
import { ServicesBox } from "./HomeComponents/ServicesBox";
import { Navbar } from "./HomeComponents/Navbar/Navbar";
import { SliderSec } from "./HomeComponents/Slider/Slider";
import { Footer } from "./Footer/Footer";
import { Gallery } from "./HomeComponents/Gallery/Gallery";
import { Blogs } from "./HomeComponents/BlogSec/Blogs";
import { Clientarea } from "./HomeComponents/ClinetArea";
import {useEffect} from 'react'
import { Pricing } from "./HomeComponents/Pricing/Pricing";
import { Registration } from "./Registration/Registration";
import { useDispatch } from "react-redux";
import { getdata } from "../Redux/action";


export const Home = () => {
let dispatch = useDispatch()

    useEffect(()=>{
        getdata(dispatch)
    },[])
    return (
       <div>
        <SliderSec />
       <Availibility />
        <About />
       <RoomBox />
       <ServicesBox />
       <Gallery />
       <Pricing/>
       <Blogs />
       <Clientarea />
        </div>
    )
}