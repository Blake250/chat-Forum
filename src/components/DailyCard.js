import React from 'react'
import styled from "styled-components"
import DailyInfoCard from "../Data/DailyInfoCard.json"

const DailyCard = () => {
    return ( 
        < Container style = {
            { marginBottom: "-55px" }} >
        
        <Daily>

        {
            DailyInfoCard.map((items) => ( 
               <DailyA key={items.id} >
                
                <span  > { items.time } </span> 
                <div>
                
               <span> { items.title } </span> 
                <p> { items.description } </p> 
                </div> 
               </DailyA>


            ))
              }
      
      
              
              </Daily> 
              </Container>
    )
}

export default DailyCard

const Container = styled.div`
background-color:#f2f0e4;
//position: relative;

`



const Daily = styled.div `

//background-color: #f0f0e4;
background-color : white;;
padding: 1em 1em;
border-radius: 3em;
margin: 0 15px;
//z-index:5;
//position: relative;

@media (max-width:768px) {
  margin: 0 !important;
//  padding: 1em 1em;
//border-radius: 3em;


}


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