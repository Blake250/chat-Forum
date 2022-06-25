import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const CoderConfirm = () => {
    return ( 
        <div>
        
        <Styler className = 'text-center' >
        
        <Link exact to = { '/get-username' }>
     
        
        <img src = "./images/left-arrow.svg"
        alt = "" />
        
        </Link> 
        <h1 > Enter the code we just texted you </h1> 
       <input type = "text" />
        
       <p className = 'mt-2' > didn 't recieve it? <span>tap to resend</span></p> 
        <Link exact to = { "/allow-notification" }
        className = 'primaryBtn d-flex align-items-center' > Next < img src = "./images/right-arrow.svg"
        alt = "" /> </Link> 
        </Styler>

        
        </div>
    )
}

export default CoderConfirm

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
  };

  p{
    width: 200px;
    max-width: 250px;
    text-align: center;
    border: none;
    outline: none;
  }

  a{
    position: absolute;
    top: 0;
    left: 0;

  }
 

  
`