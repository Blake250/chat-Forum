import React from 'react'
import styled from 'styled-components'
import {Link} from  "react-router-dom"



function SubHeader(props) {
  return (
    <SubTopic>
        <SubTitle>   
        < StyledLink to={"/home"}>
         <img src="./images/left-arrow.svg" alt="" />
        </StyledLink>
        <h3> {props.pageTitle} </h3>
        </SubTitle>
        </SubTopic>
  )
}

export default SubHeader



const SubTopic =  styled.div`

`


const SubTitle = styled.div`
display:flex;
//align-items:flex-start;
justify-content:center;
position: relative;
h3{
  

}
    



`

const  StyledLink = styled(Link)`
position: relative;


img{
  position: absolute;
  top:5px;
  left:280px;


    
};

    


`