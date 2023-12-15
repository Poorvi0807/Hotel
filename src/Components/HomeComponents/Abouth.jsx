import { Box, HStack, Image } from "@chakra-ui/react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  StackDivider,
  Stack,
  Text,
} from "@chakra-ui/react";
import { wrap } from "framer-motion";

export const About = () => {
  return (
    <Box
      width="80%"
      margin="auto"
      marginTop="5em"
      display="flex"
      id="abouth_us"
    >

      <Box >
        <Image src="img/blog/aboutimgs.png" />
        
      </Box>

      <Box maxW="32rem" textAlign="start" paddingLeft="2em">
        <Text mb={4} fontSize="3xl" color="#444" fontWeight="bold">
          ABOUT US
        </Text>
        <Text fontSize="md">
        Welcome to Lotus Haven, where tranquility and luxury converge to create an unforgettable stay. Nestled amidst lush surroundings and inspired by the symbolic beauty of the lotus flower, our hotel is a serene oasis designed to elevate your senses.
          <br/>
          <br/>
          As you step into Lotus Haven, you are greeted by an ambiance of calm sophistication. The lobby, adorned with subtle hues and floral accents,
          <br/>
          <br/>
          sets the tone for a peaceful retreat. Our attentive staff, committed to delivering impeccable service, ensures that your every need is met with a warm smile.
        </Text>
        <HStack className="h-social-icon">
        <a href=""><i className="fa-brands fa-facebook-f" ></i></a>
        <a href=""><i className="fa-brands fa-instagram"></i></a>
        <a href=""><i className="fa-solid fa-rss"></i></a>
        <a href=""><i className="fa-brands fa-twitter"></i></a>
        <a href=""><i className="fa-brands fa-pinterest-p"></i></a>    
        </HStack>
      </Box>
    </Box>
  );
};
