import { Button, Flex,Box, Spacer, Input, Select, Text, HStack,Image,Heading } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Availibility = () =>{

    const navigate = useNavigate();

    let [query,setQuery] = useState({
        from:'',
        to:'',
        children:'',
        adults:'',
     })

     const toDetails = () => {
      navigate(`/room-details/1`)
     }
    return (
        <Box  display="flex" alignItems="center" 
        justifyContent="space-evenly"
         w='80%'
         m='auto'
         py='10'
         h='13em'
         boxShadow='0 10px 15px 0 rgba(0, 0, 0, 0.1)'
        mt='-5em'
        zIndex='2'
        bg='white'
        position={'relative'}
        id="availbility_box"
        >
          <Input 
           placeholder="Select Date and Time"
           size="md"
           type="date"
           w='15%'
           color='#626262'
           fontSize='90%'
           title="From"
           value={query.from}
           onChange={(e)=>{
            setQuery({...query,from:e.target.value})
           }}
          />
          <Input 
           placeholder="Select Date and Time"
           size="md"
           type="date" 
           w='15%'
           color='#626262'
           fontSize='90%'
           title="To"
           value={query.to}
           onChange={(e)=>{
            setQuery({...query,to:e.target.value})
           }}
          />
        <Select placeholder='ADULTS'
         w='15%'
         color='#626262'
         fontSize='90%'
         value={query.adult}
         onChange={(e)=>{
            setQuery({...query,adult:e.target.value})
           }}
         >
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
            <option value='6'>6</option>
        </Select>
        <Select placeholder='CHILDREN'
         w='15%'
         color='#626262'
         fontSize='90%'
         value={query.children}
         onChange={(e)=>{
            setQuery({...query,children:e.target.value})
           }}
         >
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
            <option value='6'>6</option>
        </Select>
        <Button 
        w='15%' 
        color='white'
        background='#b5876d none repeat scroll 0 0' 
        fontSize='90%'
        className="default-btn"
        onClick={toDetails}
        >CHECK AVAILABILITY</Button>
         
        </Box>
    )
}