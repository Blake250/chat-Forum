import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";



const Welcome = () => {
    return (
        
        <Container>

        
        <h1> welcome! </h1>  
        <WelcomeInfo>
        
        <p> Hello, your are welcome to our Power room where you get more information concerning anything that is a burden to you, we answer question thrown by our members, that is why we stand out as the best.You can visit the site using the link below and see things
        for your self, including tetimnoies from our distinguish members who have gotten solution to their problems.People give testimonies on daily basis of how their problems are being solved without them paying any money to any one
        for those 
        </p>
       <p> Hello, your are welcome to our Power room where you get more information concerning anything that is a burden to you, we answer question thrown by our members, that is why we stand as the best.You can visit the site using the link below and see things
        for your self, including tetimnoies from our distinguish members which has gotten solution to their problems People give testimonies on daily basis of how their problems are being solved without them paying any money to any one
        for those advice. 
        </p>

        
        </WelcomeInfo> 
        <LayOuts>

        
        <Link exact to = { "./get_username " } >
        Get Your username { " " } { /*<img src="" alt="" />*/ } 
        </Link>

        
        <Clicker>

         <a href="#">Have an invite text? sign in</a>
        </Clicker>

        
        </LayOuts>


        
        </Container>

    )
};

export default Welcome;

const Container = styled.div `
    padding: 2.5em 1.0em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
    background-color: #dfdcce;
    align-items: flex-start

`
const WelcomeInfo = styled.div `
overflow: auto;
height:253px;

p{
    margin-bottom: 2em;
    color: var(--textColor);
    font-size : 1em;
    font-style: normal;
    font-weight: 500;

}
    
`

const LayOuts = styled.div `
align-self: center;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;


 
`

const Clicker = styled.div `
font-size: 0.875em;
color: var(--btnBGColor);
font-weight: 400;
text-decoration : none;
font-style : normal;

`