



import React, {useState} from 'react';
import styled from 'styled-components';
import { AiOutlineFile } from 'react-icons/ai';
import { BsFillMicMuteFill, BsMicFill } from 'react-icons/bs';
import { BsGrid3X2Gap } from 'react-icons/bs';
import CardData from  "../../Data/CardData.json"

import { AiOutlinePlus} from "react-icons/ai";




const NewRoom = (props) => {
    const [micMuteVisible, setMicMuteVisible]= useState(true)
    const [itemsVisible, setItemsVisible] = useState(false)

    const card = props.cardDetail



    const handleButtonClick = () => {
        
        props.setSheetVisible(false);
        props.setItemsVisible(true);
      };


  return (
    <>
    <RoomDetail>
        <Header>
           
                
            <a href="#"  onClick={()=> props.setSheetVisible(false)} >  </a>

               <ArrowIcon>    
                <img src="./images/arrow.png" alt="" />
                <span>Hallway</span>
                </ArrowIcon>
              
               
               
          
            <OutLinePhoto>
              
                <img src="./images/joel.jpg" alt="" />
                <AiOutlineFile />
            </OutLinePhoto>

             <ImageIcon>   
            <BsGrid3X2Gap style ={{marginRight: "4px"}}/>
            </ImageIcon>
            <MicToggle>
                {card.members.map((item)=>(
                    <MembersContainer>
                        {

                            micMuteVisible ? (
                             
                             
                             <SpeakerToggle>
                                   <BsFillMicMuteFill/>
                                </SpeakerToggle>

                            ) 
                            : (
                                " "
                            )
                        }
                          <img src="./images/james.jpg" alt="" />
                          <p>
                            <span>*</span>
                            {item.first_name}
                          </p>


                    </MembersContainer>
                ))

                }


            </MicToggle>
            <MicOff>
                <button onClick={handleButtonClick} >
                    <img src="./images/peaceSign.png" alt="" />
                  Leave Quietly
                </button>
                <button>
                    <AiOutlinePlus/>
                </button>
                <button>
                    <img src="./images/stopImg.png" alt="" />
                </button>
                <button  onClick={()=> setMicMuteVisible(!micMuteVisible)} >
                {micMuteVisible ? <BsFillMicMuteFill/> : <BsMicFill /> }

                </button>


            </MicOff>
        </Header>

    </RoomDetail>
    
    
    </>
  )
}

export default NewRoom



const RoomDetail = styled.div`
//border-top:10px !important;
height:100vh;
//margin:-1.5em -1em;
overflow:hidden !important;

background-color:#f2f0e4;



flex:1;
`

const MicOff = styled.div`
display:flex;
align-items:center;
justify-content:center;
position:absolute;
left:0;
bottom:62px;
right:0;
background-color:#ffffff;



button{
border:none;

border-radius:50px ;
margin-right:5px  ;
padding: 4px  ;





&:nth-child(1){
    display:flex;
    align-items:center;
    font-weight:600;
    justify-content:flex-start;
    color: #28ae61;
    padding:0.3em 1em;
    margin-right:15em;
    margin-bottom:7px;
   


   
}


    img{
        width:30px;
        height:30px;
     
    }
}
    



svg{
    font-size: 25px;
        
    
}







@media(max-width:768px) {
    display:flex;
align-items:center;
justify-content:flex-start !important;
position:absolute;
left:0  !important;
bottom:50px !important;
right:0;
background-color:#ffffff  !important;



button{
border:none;

border-radius:50px  !important;
margin-right:4px  !important;
//padding-bottom: 4px  !important;
display:flex;
align-items:center;
justify-content:center;

padding:4px;





&:nth-child(1){
    display:flex;
    align-items:center;
    font-weight:600;
    justify-content:flex-start;
    color: #28ae61;
    padding:0.2em 1em  !important;
    margin-right:15em  !important;
   margin-bottom:7px  !important;
   


   
}


    img{
        width:30px  !important;
        height:30px  !important;
     
    }
}
    



svg{
    font-size: 20px !important;
   
        
    
}











  


    
}

`



const MicToggle = styled.div`
    
    /*display:flex;
    align-items:center;
    justify-content:space-between;
    flex:wrap;
      padding:0.5em 1em*/
      background-color:#fff;
      border-top-right-radius:1.4em;
      border-top-left-radius:1.4em;
`
const OutLinePhoto = styled.div`
display:flex;
justify-content:flex-end !important;
align-items:space-around !important;
position: relative;



@media (max-width:768px) {


    &> img{
    width:30px !important ;
    height:30px  !important   ;
    border-radius:50px;
 position: absolute;
    bottom:-1px !important;
    margin-left: 5px !important;
    margin-right:2px !important;
    

    
};


&>svg{
position: absolute;
right:2em !important;
bottom:7px !important;  
font-size:18px  !important;
    
}

};





&> img{
    width:50px;
    height:50px;
    border-radius:50px;
 position: absolute;
    //top:1px;
    bottom:-18px;
    margin-left: 5px;
    margin-right:12px;
    

    
};


&>svg{
position: absolute;
right:3em;
bottom:-3px;
font-size:22px;





}
    

`


const ImageIcon = styled.div`
    
`


const MembersContainer = styled.div`
display:flex !important;
padding:1em 4em 3em 4em;
margin:0 100px;
flex-direction:column;
justify-content:space-between !important;
height:90vh !important;
position: relative;


img{
    width:120px !important;
height:120px !important;  

border-radius:20px;

}
    
p{
    display:flex;
   height:80vh;
   padding-top:3px;
  font-size:18px;
  display:flex;
  // align-items:center;
   justify-content:flex-start;
   padding-right:55px;
   color:#000000;
   font-weight:600;

};
span{
    font-size:1.6em;
  //  display:inline-block !important;
  //  align-items:center !important;
    width:14px;
    height:14px;
    border-radius:50px;
    background-color:#28ae61;
    color:#ffffff;
   margin-top:5px;
   line-height:0.8;

}




h6{
    font-size:0.675em;
    color: var(--textColor);
    font-weight: 500;
    margin-bottom:0.3em;
}


@media (max-width:768px) {
    display:flex !important;
padding:1em 4em 3em 4em  !important ;
margin:0 5px   !important ;
flex-direction:column  !important;
justify-content:space-between !important;
height:90vh !important;

span{
    width:10px !important;
   
    height:10px;
    border-radius:50px;
    background-color:#28ae61;
    color:#ffffff;
   margin-top:4px;
   margin-right:2px;

}
img{
    width:70px !important;
height:70px !important;  
border-radius:20px !important;

}
    
p{
   
   height:80vh  !important;
   font-size:13px !important;
   padding-top:1px;
   
   padding-right:18px;

}
    
}




`



const Header = styled.span`


div{

    display:flex;
align-items:center;
justify-content:center;
z-index:1;
position: relative;
padding-top:6px;


}


//padding:0.8em  0.5em 1.5em 0.5em;


//padding:0.8em  0.5em 1.5em 0.5em;



   

`

const SpeakerToggle = styled.div`
    position: absolute;
    right:-5px;
    bottom:-120px;
    background-color:#ffffff;
    left:50px;
    border-radius:50px;
    box-shadow:0px 0px 3px #cccccc;
  

&>svg{
    font-size:23px;
    color:#28ae61;
}



    @media (max-width:768px) {
        position: absolute;
    right:-5px  !important;
    bottom:-69px  !important ;
    background-color:#ffffff;
    left:27px !important;


    &>svg{
        font-size:15px  !important;
        
    }
    }

   

`
const ArrowIcon = styled.div`
display:flex;
justify-content:flex-start !important;





@media (max-width:768px) {
    

    &>img{
    width:22px  !important  ;
    height:22px  !important ;
    transform:rotate(270deg)
   
}
&>span{
    font-size:14px !important ;
    font-weight:600  !important;
 
}



}

    
&>img{
    width:30px;
    height:30px;
    transform:rotate(270deg)
   
}
&>span{
    font-size:17px;
    font-weight:600;
 
}


`












/*







import React, {useState} from 'react';
import styled from 'styled-components';
import { AiOutlineFile } from 'react-icons/ai';
import { BsFillMicMuteFill, BsMicFill } from 'react-icons/bs';
import { BsGrid3X2Gap } from 'react-icons/bs';
import CardData from  "../../Data/CardData.json"

import { AiOutlinePlus} from "react-icons/ai";




const NewRoom = (props) => {
    const [micMuteVisible, setMicMuteVisible]= useState(true)
    const [itemsVisible, setItemsVisible] = useState(false)

    const card = props.cardDetail



    const handleButtonClick = () => {
        
        props.setSheetVisible(false);
        props.setItemsVisible(true);
      };


  return (
    <>
    <RoomDetail>
        <Header>
           
                
            <a href="#"  onClick={()=> props.setSheetVisible(false)} >  </a>

               <ArrowIcon>    
                <img src="./images/arrow.png" alt="" />
                <span>Hallway</span>
                </ArrowIcon>
              
               
               
          
            <OutLinePhoto>
              
                <img src="./images/joel.jpg" alt="" />
                <AiOutlineFile />
            </OutLinePhoto>

             <ImageIcon>   
            <BsGrid3X2Gap style ={{marginRight: "4px"}}/>
            </ImageIcon>
            <MicToggle>
                {card.members.map((item)=>(
                    <MembersContainer>
                        {

                            micMuteVisible ? (
                             
                             
                             <SpeakerToggle>
                                   <BsFillMicMuteFill/>
                                </SpeakerToggle>

                            ) 
                            : (
                                " "
                            )
                        }
                          <img src="./images/james.jpg" alt="" />
                          <p>
                            <span>*</span>
                            {item.first_name}
                          </p>


                    </MembersContainer>
                ))

                }


            </MicToggle>
            <MicOff>
                <button onClick={props.setSheetVisible(true)} >
                    <img src="./images/peaceSign.png" alt="" />
                  Leave Quietly
                </button>
                <button>
                    <AiOutlinePlus/>
                </button>
                <button>
                    <img src="./images/stopImg.png" alt="" />
                </button>
                <button  onClick={()=> setMicMuteVisible(!micMuteVisible)} >
                {micMuteVisible ? <BsFillMicMuteFill/> : <BsMicFill /> }

                </button>


            </MicOff>
        </Header>

    </RoomDetail>
    
    
    </>
  )
}

export default NewRoom



const RoomDetail = styled.div`
//border-top:10px !important;
height:100vh;
//margin:-1.5em -1em;
overflow:hidden !important;

background-color:#f2f0e4;



flex:1;
`

const MicOff = styled.div`
display:flex;
align-items:center;
justify-content:center;
position:absolute;
left:0;
bottom:62px;
right:0;
background-color:#ffffff;



button{
border:none;

border-radius:50px ;
margin-right:5px  ;
padding: 4px  ;





&:nth-child(1){
    display:flex;
    align-items:center;
    font-weight:600;
    justify-content:flex-start;
    color: #28ae61;
    padding:0.3em 1em;
    margin-right:15em;
    margin-bottom:7px;
   


   
}


    img{
        width:30px;
        height:30px;
     
    }
}
    



svg{
    font-size: 25px;
        
    
}







@media(max-width:768px) {
    display:flex;
align-items:center;
justify-content:flex-start !important;
position:absolute;
left:0  !important;
bottom:50px !important;
right:0;
background-color:#ffffff  !important;



button{
border:none;

border-radius:50px  !important;
margin-right:4px  !important;
//padding-bottom: 4px  !important;
display:flex;
align-items:center;
justify-content:center;

padding:4px;





&:nth-child(1){
    display:flex;
    align-items:center;
    font-weight:600;
    justify-content:flex-start;
    color: #28ae61;
    padding:0.2em 1em  !important;
    margin-right:15em  !important;
   margin-bottom:7px  !important;
   


   
}


    img{
        width:30px  !important;
        height:30px  !important;
     
    }
}
    



svg{
    font-size: 20px !important;
   
        
    
}











  


    
}

`



const MicToggle = styled.div`
    
    
      background-color:#fff;
      border-top-right-radius:1.4em;
      border-top-left-radius:1.4em;
`
const OutLinePhoto = styled.div`
display:flex;
justify-content:flex-end !important;
align-items:space-around !important;
position: relative;



@media (max-width:768px) {


    &> img{
    width:30px !important ;
    height:30px  !important   ;
    border-radius:50px;
 position: absolute;
    bottom:-1px !important;
    margin-left: 5px !important;
    margin-right:2px !important;
    

    
};


&>svg{
position: absolute;
right:2em !important;
bottom:7px !important;  
font-size:18px  !important;
    
}

};





&> img{
    width:50px;
    height:50px;
    border-radius:50px;
 position: absolute;
    //top:1px;
    bottom:-18px;
    margin-left: 5px;
    margin-right:12px;
    

    
};


&>svg{
position: absolute;
right:3em;
bottom:-3px;
font-size:22px;





}
    

`


const ImageIcon = styled.div`
    
`


const MembersContainer = styled.div`
display:flex !important;
padding:1em 4em 3em 4em;
margin:0 100px;
flex-direction:column;
justify-content:space-between !important;
height:90vh !important;
position: relative;


img{
    width:120px !important;
height:120px !important;  

border-radius:20px;

}
    
p{
    display:flex;
   height:80vh;
   padding-top:3px;
  font-size:18px;
  display:flex;
  // align-items:center;
   justify-content:flex-start;
   padding-right:55px;
   color:#000000;
   font-weight:600;

};
span{
    font-size:1.6em;
  //  display:inline-block !important;
  //  align-items:center !important;
    width:14px;
    height:14px;
    border-radius:50px;
    background-color:#28ae61;
    color:#ffffff;
   margin-top:5px;
   line-height:0.8;

}




h6{
    font-size:0.675em;
    color: var(--textColor);
    font-weight: 500;
    margin-bottom:0.3em;
}


@media (max-width:768px) {
    display:flex !important;
padding:1em 4em 3em 4em  !important ;
margin:0 5px   !important ;
flex-direction:column  !important;
justify-content:space-between !important;
height:90vh !important;

span{
    width:10px !important;
   
    height:10px;
    border-radius:50px;
    background-color:#28ae61;
    color:#ffffff;
   margin-top:4px;
   margin-right:2px;

}
img{
    width:70px !important;
height:70px !important;  
border-radius:20px !important;

}
    
p{
   
   height:80vh  !important;
   font-size:13px !important;
   padding-top:1px;
   
   padding-right:18px;

}
    
}




`



const Header = styled.span`


div{

    display:flex;
align-items:center;
justify-content:center;
z-index:1;
position: relative;
padding-top:6px;


}


//padding:0.8em  0.5em 1.5em 0.5em;


//padding:0.8em  0.5em 1.5em 0.5em;



   

`

const SpeakerToggle = styled.div`
    position: absolute;
    right:-5px;
    bottom:-120px;
    background-color:#ffffff;
    left:50px;
    border-radius:50px;
    box-shadow:0px 0px 3px #cccccc;
  

&>svg{
    font-size:23px;
    color:#28ae61;
}



    @media (max-width:768px) {
        position: absolute;
    right:-5px  !important;
    bottom:-69px  !important ;
    background-color:#ffffff;
    left:27px !important;


    &>svg{
        font-size:15px  !important;
        
    }
    }

   

`
const ArrowIcon = styled.div`
display:flex;
justify-content:flex-start !important;





@media (max-width:768px) {
    

    &>img{
    width:22px  !important  ;
    height:22px  !important ;
    transform:rotate(270deg)
   
}
&>span{
    font-size:14px !important ;
    font-weight:600  !important;
 
}



}

    
&>img{
    width:30px;
    height:30px;
    transform:rotate(270deg)
   
}
&>span{
    font-size:17px;
    font-weight:600;
 
}


`





*/