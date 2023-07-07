import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

const Header = () => {

    
  return(
    <div >
    <StylerA>

      

       <div>
       <NavLink to={'/explore'}>
         <Head src='./images/search-icon2.svg'/>

       </NavLink>
       </div>
       
        
        
        
         <div>
        <NavLink to={'/friends-invite'}>
          <Head src='./images/email.message.svg' />
        </NavLink>
        

        
        <NavLink to={'/upcoming'}>
        <Head src='./images/calender.svg'/>
        </NavLink>
        
          
        
       <NavLink to={'/explorer'}>
        <Head src='./images/bell.svg'/>
        </NavLink>
        
        

        
         <NavLink to={'/profile'}>
        <Head src='./images/person-img.svg'/>
        </NavLink>
        </div>
       
    
    </StylerA>
    </div>
    
  )
}

export default Header

const StylerA = styled.div`
display : flex;
justify-content : space-between;
align-items : center;
 background-color:#f2f0e4;
 padding: 0.5em 1em;
 



a{
 
  position:relative;
  top:0;
  left:0;
  right:0;
  margin : 0 2em

}

`

const Head = styled.img`
width : 25px;

`