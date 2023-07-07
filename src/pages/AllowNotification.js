import React from 'react'
import styled from "styled-components";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const AllowNotification = () => {
  return (
  <div>
     
  <StylerA >
      <div className='text-center'>
            <h3 className='mb-2'>Last Important Step </h3>
        <h5 className='mb-2'>Enable notification to know when people are talking</h5>
         

      </div>
             <StylerB>

                   <div className='p-3'>
                   <h3>Clubhouse would like to send you a notification</h3>
                   <p>Notification may include alerts, sounds, icons</p>
               </div>
                  
                      
                         <div>
                        <Link to="/home">
                       Don't Allow
                   </Link>
                   <Link to='/home'>
                       Allow
                     </Link>
            
                        
                         <Pointer src="/images/upward-arrow.svg" />
                         
                     </div>   

             </StylerB>
              
    </StylerA>
               
  </div>
  )}


export default AllowNotification


const StylerA = styled.div`
  display: flex;
  padding: 7em 3.7em;
 
  justify-content: center;
  align-items: center;
  flex-direction : column;
  height: 100vh;
  background-color : #f2f0e4;
 // border-radius : 1em;



  p {font-size:0.825em;
font-weight:500;
line-height : 1.3;
margin: auto;
  }

a{


    display: inline-block;
    width: 50%;
    padding : 0.5em;
    border-top: 1px solid #cccccc;
    
    border-right: 1px solid #cccccc;
    position: relative;
    text-align: center
    

};

div{
   font-size:15px;

   h4{
    width:250px;
   }
   h3{
    margin-top:10px;
   }
}
 

`

const Pointer = styled.img`
position: absolute;

right: 75px;
//left: 333px

bottom:-12px;

    
`

const StylerB = styled.div`

  border-radius : 1em;
  background-color : #ffffff;
  box-shadow : 0px 0px 5px #d3aaaa;
  position: relative;

h3{
    font-size : 1em;
    font-weight: 500;
    color: #000000;
    margin: auto;
    margin-bottom: 0.3em
}


`

