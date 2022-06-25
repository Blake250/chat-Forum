import React from 'react'
import styled from "styled-components"
import DailyInfoCard from "../Data/DailyInfoCard.json"

const DailyCard = () => {
    return ( <
        div style = {
            { marginBottom: "-55px" } } >
        <
        Daily >

        {
            DailyInfoCard.map((items) => ( <
                DailyA >
                <
                span > { items.time } < /span> <
                div >
                <
                span > { items.title } < /span> <
                p > { items.description } < /p> <
                /div> <
                /DailyA>


            ))
        }


        <
        /Daily> <
        /div>
    )
}

export default DailyCard


const Daily = styled.div `

background-color: #f0f0e4;
padding: 1em 1em;
border-radius: 3em;

div{
  display: flex;
align-items: flex-start;
margin-bottom: 1em;
}



span{
  font-size : 0.975em;
  color: var(--textColor);
  font-weight : 500
}
p{
  font-size : 1em;
  font-weight: 500;
  line-height: 1;
  margin: 0;
  display: inline-block;
  text-overflow: ellipsis;
 

}

    
`
const DailyA = styled.div `


span{
  width: -20px;
  text-align: end;
  margin:0;
 
    
  }


div{
  display: flex;
  width: 80%;
  margin-left: 0.5em;
  flex-direction: column;
 


}
 `