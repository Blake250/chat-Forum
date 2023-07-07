import React,{ useState,useEffect} from 'react';
import styled from "styled-components";
import RoomCard from "../Data/RoomCard.json";
import {BsChatDots, BsChatDotsFill, BsFillPersonFill} from "react-icons/bs";
//import {Aioutlineplus} from "react-iconai";


const RoomInfoCard = (props) => {
  return (
     <Container  style={{marginBottom:"-20px"}}>
     {RoomCard.map((items)=>(
         <>
            
        <Card >
         <div>
         <h6>{items.title}</h6>
         <h2>{items.sub_title}</h2>
         <Members>
             <div>
                 <Photo src='./images/james.jpg'/>
                     
                   

                 <Photo1 src='./images/joel.jpg'/>
                     
             </div>
             <div>
                 {items.members.map((person)=>(
                     <p>
                     {person.first_name}
                     {person.last_name}
                     <BsChatDots/>
                     </p>
                 
                 ))}
                 <p className='d-flex align-items-center'>
                   <span  >3.5</span><BsFillPersonFill/>
                   <span  ></span>{" "}
                   <span  >2</span><BsChatDotsFill/>
                 </p>
             </div>
         </Members>
         </div>
        </Card>
            
         </ >


     ))}

     </Container>
  )
}
 


export default RoomInfoCard


const Container = styled.div`

background-color:#f2f0e4;
//margin-bottom:800px;
//background-color:white;
//height:120vh;

`




const Card = styled.div`

div{
   background-color : white;;
padding: 0.5em 1em;
border-radius : 2.5em;
border : none;
margin : 0.4em 7px;
width:95%;
margin: 8px auto;







}

h6{
font-size :  0.9em;
color : var(--textColor);
font-weight : 500
}
h2{
    font-size : 0.8em;
    font-weight : 500;
    line-height : 1;
    color : #000000
}

    
`
const Photo = styled.img`
width: 50px;
border-radius : 0.6em;
height : 50px;
position : relative;
margin-right : 2em;
`
   

const Photo1 = styled.img`
   width: 50px;
  border-radius: 0.6em;
  height: 50px;
  position : relative;
  top : 1em;
  left : -2.5em;
`
   
    


const Members = styled.div`
display: flex;
align-items : flex-start;


p{
    font-size: 0.97em;
    font-weight: 400;
    line-height : 1;
   margin-bottom : 0.5em;
   color: var(--textColor);
   span{
    margin-right:0.5em
   }
   

 
}

    
`

