import React, {useState} from 'react';
import Header from "../components/Header";
import DailyCard from "../components/DailyCard";
import styled from "styled-components";
import RoomInfoCard from "../components/RoomInfoCard";
import {AiOutlinePlus} from "react-icons/ai";
import { BsGrid3X2Gap } from 'react-icons/bs';
import BottomSheet from '../components/BottomSheet';
import RoomCard from "../Data/RoomCard.json"



const Home = () => {
  const [itemsVisible, setItemsVisible] = useState(true);
  const [sheetVisible, setSheetVisible] = useState(false)
  const [sheetCreateRoom, setSheetCreateRoom] = useState(false)
  const [loaderVisibility, setLoaderVisibility] = useState(false)
  const [cardId, setCardId] = useState(1);
  return (
    <>
      <Header/> 
      <Container>
       <DailyCard/>
      </Container>
      <RoomInfoCard/>
      <Action_Btn>
        <button  onClick={()=> setSheetVisible(true)} >
       <AiOutlinePlus  style = {{marginRight : "4px"}} />
       Start a room
        </button>
        <button>
      <BsGrid3X2Gap style ={{marginRight: "4px"}}/>
        </button>
      </Action_Btn>
      <BottomSheet
      sheetTitle = "start room"
      setSheetVisible={(item)=> setSheetVisible(item)}
      sheetVisible={sheetVisible}
      cardDetail= {RoomCard.find((item)=> item.id == cardId)}
      setItemVisisble = {(item)=> setItemsVisible(item)}
      setSheetCreateRoom = {(item)=>{
        setLoaderVisibility(true);
        setTimeout(()=>{
          setSheetCreateRoom(item)
          setLoaderVisibility(false)
        }, 1000)
      }}
      
      
      
      />
      
     
     
        
  </>
  )
}

export default Home


const Container = styled.div`
padding : 3.5em 1em 3.5em 1em;
overflow : auto;
height: 100%;


    
`
const Action_Btn = styled.div`
background-color:transparent;
display:flex;
align-items: center;
padding:4em 1.5em 2em 1.5em;
position:sticky;
left:0;
right:0;
top:0;
bottom:0;
button{
   background-color:#d3d3cd;
   border:none;
   margin-left:auto;
   border-radius:4em;
   font-weight:400;
   font-size:1.1em;
   display:flex;
   align-items: center;
   
   transform:translateX(-50%)
  
   svg{
    font-size:1.3em;
     
   }
   & :nth-child(2){
    line-height:1;
    color: var(--textColor);
   }
   
 
}

  
`









