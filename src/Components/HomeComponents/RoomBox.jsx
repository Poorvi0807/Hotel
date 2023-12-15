import { Button, Flex,Box, Spacer, Input, Select, Text, HStack,Image,Heading, Stack } from "@chakra-ui/react";
import { Cardbox } from "./Cardbox";
import { TitleDescription } from "./TitleDescription";
import { Grid, GridItem } from '@chakra-ui/react'
import { RoomCard } from "./RoomSec/RoomCard";

export const RoomBox = () => {
    let RoomArr = [
        {
     title:'Royal Suit',
     description:'',
     price:'2299'
        },
         {
     title:'Deluxe Suit',
     description:'',
     price:'3999'
        },
        {
     title:'Single Room',
     description:'',
     price:'5999'
        },
         {
     title:'Double Room',
     description:'',
     price:'6999'
        },
    ]
    return (
        <>
      <TitleDescription title='OUR FAVORITE ROOMS' desc='
         Indulge in a selection of our most cherished and sought-after rooms. Each one meticulously curated for luxury and comfort, our favorite rooms showcase the epitome of the Lotus Hotel experience. ' />

    {/* our room img-box */}
    <Grid id="room_card" templateColumns='repeat(4, 1fr)' h='40em'>
       {
        RoomArr.map((ele,i)=>(<RoomCard ele={ele} key={i} i={i+1}/>))
       }
    </Grid>

    {/* <Stack className="h_our_room_box" h='40em' my='5em'>
    <Box className="h_our_room"  backgroundImage='img/room/1.jpg' >
         <Cardbox />
    </Box>
    <Box className="h_our_room" backgroundImage='/img/room/2.jpg'>
    <Cardbox />
    </Box>
    <Box  className="h_our_room" backgroundImage='/img/room/3.jpg'>
    <Cardbox />
    </Box>
    <Box className="h_our_room" backgroundImage='/img/room/4.jpg'>
    <Cardbox />
    </Box> */}
    </>
    )
}