
import React,{useState} from 'react';
import SwipeableBottomSheet from "react-swipeable-bottom-sheet";
import styled from "styled-components";
import StartRoom from './bottomSheets/StartRoom'
import  NewRoom from "./bottomSheets/NewRoom";

 const BottomSheet =  (props)=> {
    //const [setGroup, useSetGroup] = useState("")

 
       

     
    
    return ( 
        < Container>
    
        <SwipeableBottomSheet
    
    overlay={true}
        open = { props.sheetVisible }
        onChange = {
            () => {
                props.setSheetVisible(!props.sheetVisible)
                props.setItemsVisible(true)  }
        }
        fullScreen = { props.sheetTitle === 'room detail' ? true : false }>
        
            
           
       <div style = {
             { backgroundColor: props.sheetTitle === "profile" ? "transparent" : " " ,
          //  height:"250px", 
            overflowY:"hidden",
            // zIndex:1,
          
          
            
             } } >  
                 
            {  props.sheetTitle === "new room" ? (
            <NewRoom
             setSheetCreateRoom = {props.setSheetCreateRoom}
            cardDetail = {props.cardDetail}
           /* setSheetVisible = { (item)=> {
               props.setSheetVisible(item)
               props.setItemsVisible(true)
                
            }}*/
            setSheetVisible={props.setSheetVisible}
            setItemsVisible = {props.setItemsVisible}
            
            
            
            />
             
           ) : props.sheetTitle === "start room" ? (

                <StartRoom 
              //  cardDetail = {props.cardDetail}
                setSheetCreateRoom = { props.setSheetCreateRoom }
             
                setSheetVisible = {  (item)=>{
              
                   
                    props.setSheetVisible(item);
                   
                    props.setItemsVisible(true); 
                       

                }
               
            }
            />
            ) :(
            " "
            )
            
            
            
        }
        

        </div>
 
        </SwipeableBottomSheet>
       
              </Container>
    )
}

export default BottomSheet;


const Container = styled.div `
//background-color: #ffffff;
//background-color : #eeeee8;
//border-radius: 1.5 1.5 0 0;
//padding: 3em 1em;
//position: relative;

//display: flex;
  //flex-direction: column;
 // flex: 1;

 background-color:#f2f0e4;

`