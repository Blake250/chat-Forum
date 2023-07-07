import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-number-input";

const PhoneConfirmation = () => {
  const [value, setValue] = useState();
  return (
    <Phone>
      
      <Link 
      exact to={"/"} > 
      <img src="./images/left-arrow.svg" alt=""/> 
      </Link>
      
      <h1>Enter Your Phone Number</h1>
      <PhoneInput international defaultCountry="US" value={value} onChange={setValue} />
    
     <p>
          By entering your number, you are agreeing to our {" "}
          <span>Terms of services and privacy policy.</span>
       
           Thanks.   
     </p>
     <StyledLink exact to={"/code"} >  <div> Next <img src="./images/right-arrow.svg" alt="" /> </div>   </StyledLink>
     
    </Phone>
  );
};

export default PhoneConfirmation;

const StyledLink = styled(Link)`
background-color:blue;
padding:5px;
border-radius:50px;

div{
  text-align:center !important;
  color:white;
  padding-left:5px;
  
}





`


const Phone = styled.div`
  padding: 7em 3.7em;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction : column;
  height: 100vh;
  background-color : #f2f0e4;

  h1{
      font-size:1.7em;
      font-weight: 500;
      margin-bottom: 0;
     color : var(--textColor);
  }
  p{
      font-size:0.8em;
      font-weight: 500;
      font-style: normal;
      margin:0;
      width: 100%;
      max-width: 270px;
      text-align:center;
      justify-content: center;
      

  }
  p span{
    font-weight:700;
    
  }
  a{
  /*  position : absolute;
    top : 10px;
    left : 10px*/
  }
`