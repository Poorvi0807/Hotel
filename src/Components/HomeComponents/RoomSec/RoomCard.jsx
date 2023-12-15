import { Cardbox } from "../Cardbox"
import { Grid, GridItem } from '@chakra-ui/react'


export const RoomCard = ({i,ele}) => {
   
    return (
        <GridItem    backgroundImage={`https://htmldemo.net/oestin/oestin/img/room/${i}.jpg`} className="h_roomCard">
         <Cardbox ele={ele}/>
      </GridItem>
    )
}