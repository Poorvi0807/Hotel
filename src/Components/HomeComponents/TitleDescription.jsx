import { Button, Flex,Box, Spacer, Input, Select, Text, HStack,Image,Heading } from "@chakra-ui/react";


export const TitleDescription = ({title,desc}) => {
    return (
      <Box maxW="50rem"
      textAlign="center" 
     paddingLeft="2em"
     margin="auto"
     my="3em"
     >
       <Text mb={4} fontSize="3xl" color="#444" fontWeight="bold">
       {title}
       </Text>
       <Text fontSize="md">
        {desc}
       </Text>
   </Box>
    )
}

