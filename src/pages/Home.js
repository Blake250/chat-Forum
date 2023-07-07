import React, {useState} from 'react';
import Header from "../components/Header";
import DailyCard from "../components/DailyCard";
import styled from "styled-components";
import RoomInfoCard from "../components/RoomInfoCard";
import {AiOutlinePlus} from "react-icons/ai";
import { BsGrid3X2Gap } from 'react-icons/bs';
import BottomSheet from '../components/BottomSheet';
import RoomCard from "../Data/RoomCard.json"
import newRoomData from "../Data/newRoomData.json"


const Home = () => {
  const [itemsVisible, setItemsVisible] = useState(true);
  const [sheetVisible, setSheetVisible] = useState(false)
  const [sheetCreateRoom, setSheetCreateRoom] = useState(false)
  const [loaderVisibility, setLoaderVisibility] = useState(false)
  const [cardId, setCardId] = useState(1);
  return (
    <>
    {loaderVisibility ? (
      <div style={{

        position:"fixed",
        top:"3px",
        bottom:"5px",
        right:"0",
        left:"0",
        display:"flex",
       justifyContent: "center",
       alignItems: "center",
       overflow:"hidden"
      }} >


     <img src="./images/spin.svg" alt="" />
      </div>
    ): 
    (" ")
    }
  

   <>
   <Header/> 
      <Container>
       <DailyCard/>
      </Container>
      <RoomInfoCard/>
      <ActionBtn>

        <button  onClick={()=> setSheetVisible(true)} >
       <AiOutlinePlus   />
       Start a room
        </button>
        <button>
      <BsGrid3X2Gap  />
        </button>
      </ActionBtn>
      <BottomSheet




      sheetTitle = "start room"
      setSheetVisible={(item)=> setSheetVisible(item)}
      sheetVisible={sheetVisible}
      cardDetail= {RoomCard.find((item)=> item.id === cardId)}
      setItemsVisible = {(item)=> setItemsVisible(item)}
      setSheetCreateRoom = {(item)=>{
        setLoaderVisibility(true);
        setTimeout(()=>{
          setSheetCreateRoom(item)
          setLoaderVisibility(false)
        }, 1000);
      }}
      
      />   

<BottomSheet
   sheetTitle = "new room"
   setSheetVisible = {(item)=> setSheetCreateRoom(item)}
   sheetVisible = {sheetCreateRoom}
 
   cardDetail = {newRoomData}
   setItemsVisible = {(item)=> setItemsVisible(item)}


/>
   
   
   
     
     </>    
  </>
  )
}

export default Home


const Container = styled.div`
padding : 3.5em 1em 3.5em 1em;
overflow : auto;
background-color:#f2f0e4;











@media (max-width:768px) {

padding : 3.5em 1em 3.5em 1em;
//overflow : auto;
}



    
`
const ActionBtn = styled.div`
background-color:transparent;
display:flex;
align-items: center;
padding:3em 1.5em 3em 1.5em;
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
   padding:5px ;

  
   text-align:center !important;
   justify-content:center;
  
   
   transform:translateX(-50%);
  
   svg{
    font-size:1.3em;
     
   }
   & :nth-child(2){
    line-height:1;
    color: var(--textColor);
   }
   &:first-child{
    margin-right:-7em;
   }
   
 
}

  
`









