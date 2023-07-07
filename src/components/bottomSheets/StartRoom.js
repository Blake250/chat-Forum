import React,{useState} from 'react'
import styled from 'styled-components'
import {FcGlobe} from "react-icons/fc";
import './BtnStyle.css';
//import BottomSheet from '../BottomSheet';



const StartRoom = (props) => {
    const [room, setRoom] = useState(false)
  
  return (
    <> 
  
      <SwitchLine>

</SwitchLine>
    <Container  >
   
   
  
  
     <TextRight>  
    
        <AddTopic>
        <p> + Add a Topic   </p> 
      
        </AddTopic>
      </TextRight>
      <SelectRoom >  
    

   
  
         <button  className={room === "open" ? " activeBtn" : " "}  onClick={(()=> setRoom("open"))}
         >
         <FcGlobe/>
         <p>open</p>
        </button>
    <button     className={room === "social" ? " activeBtn" : " "}   onClick={(()=> setRoom("social"))   }  >
      <FcGlobe/>
      <p>social</p>
  
    </button>
    <button    className={room === "closed" ? " activeBtn" : " "} onClick={(()=> setRoom("closed") )}>
      <FcGlobe/>
     
      <p>Closed</p>
    
    </button>
  
  
  
    <span>
       Start a room {" "}   
    
  {
    room === "closed" ? " for people i choose"
    : room === "social" ? "with people i follow" 
    : "open to everyone"

  }
    
    </span>
  
   
   
   
      <LetGoBtn>    
      <div onClick={()=> {
      props.setSheetCreateRoom(true)
      props.setSheetVisible(true)
      }} >
      <p>  Let's go   </p>  
      </div>
      
      </LetGoBtn>
   
      </SelectRoom>


    </Container> 
    </>  
  )
}

export default StartRoom

const Container = styled.div`
background-color:#ccc;
//z-index:5;
//position: relative;

//flex:1;
 // height:50%;
 padding-bottom:50px;
 border-radius:10px;
`


const SwitchLine = styled.div`

transform:translateX(-50%);
height:4px;
width:40px;
background-color:#cccccc;
margin-left:50%;
padding-bottom:1px;

@media (max-width:768px) {
  
transform:translate(-50%);
height:4px;
width:40px;
background-color:#cccccc;
margin-left:49%;

  
}
`

const AddTopic = styled.button`

position:absolute;
left:80%;
margin-top:10px;
background-color: transparent;
border:none;
color:#28ae61;




p{
  font-size:14px;
 text-align:center;
 margin:10px auto;
 line-height:5px;

}
 
 `



const TextRight = styled.div`




`

const SelectRoom = styled.div`
border-bottom:1px solid #cccccc;
padding:2.5em 0;
display:flex;
align-items:space-evenly;
justify-content:space-evenly;
flex-wrap:wrap;
padding-left:10px;
position: relative;



           
  button{
  line-height:10px;
  margin:10px auto;
  border: none;
  padding: 0.5em 1.3em 0.2em 1.3em ;
 // background-color:transparent;
  color: var(--textColor);
 
  border-radius:20px;  
 // background-color: ${(props)=> props.activeBtn? "lightgray" : " transparent" };
 

 }
 


  svg{
    font-size:4em;
 
  }


p{
 line-height:12px;
 margin:3px auto;
 font-size:20px;
}
 span {
  
  font-size:20px;
position:absolute;
bottom:10px;
}

`






const LetGoBtn = styled.button`
position:fixed;
left: 40%;
bottom:-4px;
background-color:#28ae61;
  color:#ffffff;
  padding:4px 8px;

&:hover{
    background-color:#298952;
    
  }
  
  div>p{
    //padding:0 13px;
    padding:6px 80px;
  }



@media (max-width:760px) {
  position:fixed;
left: 30%;
bottom:-4px;
padding:5px 28px; 
background-color:#28ae61;
  color:#ffffff;

&:hover{
    background-color:#298952;
    
  }
  


div{
  
 // border-radius:50px;
  padding:0 28px;

  p{
    line-height: 10px;
  margin:5px auto;
 


 background:#28ae61;
  color:#ffffff;
 
  font-weight:600;
  //border-radius:5em;
  padding:0.2px 28px;

 
  
  }


 

}
div{
  //border-radius:60rem;
  p{
  
    line-height: 20px;
  margin:5px auto;
 

  color:#ffffff;
 
  font-weight:600;
 border-radius:1rem;

  background-color:transparent;


 
  }
  
}





  
}


  



`






