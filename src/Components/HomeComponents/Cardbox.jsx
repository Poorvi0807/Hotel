
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  StackDivider,
  Stack,
  Button,
  Text,
  CardFooter,
  Box, 
  HStack, 
  Image 
} from "@chakra-ui/react";

export const Cardbox = ({ele}) => {
  return (
   <>
   <Card align='center'
   m='auto'
   border='none'
   bg='rgba(0, 0, 0, 0.341)'
   className='h_card_body_hover'
   color='white'
   textAlign='center'
   zIndex='2'
   >
  <CardHeader >
    <Text fontSize='2xl'  fontWeight='bold'>{ele.title}</Text>
  </CardHeader>
  <Box  
   >
    <Text>Discover the epitome of comfort and style in these handpicked accommodations</Text>
  <CardFooter display='flex' justifyContent='center'>
  <Button bg='#b5876d' borderRadius='2px' color='white' w='8em' className="default-btn">Details</Button>
  </CardFooter>
    <Box color='white' fontSize='2xl' textAlign='end' w='90%'>₹{ele.price}</Box>
  </Box>
  
</Card>
   </>
  );
};
