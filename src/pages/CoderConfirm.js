import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const CoderConfirm = () => {
    return ( 
        <div>
        
        <Styler >
        
        <Link exact to = { '/get-username' }>
     
        
        <img src = "./images/left-arrow.svg"
        alt = "" />
        
        </Link> 
        <h1 > Enter the code we just texted you </h1> 
       <input type = "text" />
        
       <p > didn't receive it? <span>tap to resend</span></p> 
        <StyledLink exact to = { "/notification" }
       >  <div className='btn' >  Next < img src = "./images/right-arrow.svg"
        alt = "" />  </div>    </StyledLink> 
        </Styler>

        
        </div>
    )
}

export default CoderConfirm


const StyledLink = styled(Link)`
background-color:blue;
padding:5px;
border-radius:50px;
//line-height:0;

div{
  text-align:center !important;
  color:white;
  padding-left:5px;
 // line-height:0.5;
 
  
}





`







const Styler = styled.div `
  padding: 7em 3.7em;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction : column;
  height: 100vh;
  background-color : #f2f0e4;

 
  h1{
    width: 300px;
    max-width: 350px;
    margin-bottom: 1em;

    text-align:center;
    font-weight:600;
    font-size:20px;
    
  };

  p{
    width: 200px;
    max-width: 250px;
    text-align: center;
    border: none;
    outline: none;
    font-weight:400;
    font-size:14px;
  }

 
 

  
`