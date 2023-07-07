import React from "react";
//import 'antd/dist/antd.css'
import {DownOutlined,  FireOutlined, SearchOutlined  }from  "@ant-design/icons"
import Explore from "../Data/Explore.json"
import styled from "styled-components";
import { Button } from "antd";
//import 'bootstrap/dist/css/bootstrap.min.css';
import Input from "antd/es/input/Input";
import SubHeader from "../components/bottomSheets/SubHeader";







function Explorer() {
  //  const {people, conversation} = Explore

  return (
    <Container>
    <ExplorerContainer>
        
     <SubHeader pageTitle = "Explorer" />
           
            <StyledInput 
            size="small" 
            style={{backgroundColor:"f4f4f4"}}
            placeholder="Find People and Clubs"
            prefix={<SearchOutlined/>}
            allowClear={true}
            
            >

            </StyledInput>
           
       

    </ExplorerContainer>


      <h6>PEOPLE TO FOLLOW</h6>   
        
        <PeoplesContainer>
            {
                Explore.people.map((person)=>(
                    <PersonData>
                        <ImgProfile>   
                        <img src="./images/joel.jpg" alt="" />
                        </ImgProfile>
                 
                           
                        <DisposeData>
    
      <h5>   {person.userId}  </h5>
       <p>  {person.title} </p>
        
       <DisplayButton> <span>Follow</span>  </DisplayButton>
     
    
    
                            
       </DisposeData>
     
        </PersonData>

           ))
            }
         
  <OnButton> show more people <DownOutlined/>    </OnButton>

 


        </PeoplesContainer>
     <SearchResult> 
        <h6>FIND CONVERSATIONS ABOUT....</h6>

        <Comment className="row mx-0" >
            {
                Explore.conversation.map((item)=>(
                    <Fetched  className="col-6 px-2 mb-3" >
                        <div >

                       <h6> 
                         <FireOutlined  />  
                         {item.userId}
                         
                        </h6>
                       
                        <p>  {item.title} </p>
                        </div>
                     

                    </Fetched>


                )

                )
            }


        </Comment>
     
     
    
     
      </SearchResult>


    </Container>
  )
}

export default Explorer





const ExplorerContainer = styled.div`


    

`

const StyledInput = styled(Input)`
    
//font-size:small;
width:170px;
height:30px;
margin-left:10px;

`



const Container = styled.div`

background-color:#f2f0e4;

overflow:auto;
padding-top:5.2px;
overflow-y:hidden;
height:auto;


 h6{
    font-size:0.975em;
    font-weight:500;
    color:#bbbbbb;
    margin:1.5em 0 0.5em 0;
    padding-left:15px;
 }
 p{
    //font-style:italic;
    font-size:14px;
    font-weight:600;
    color:green;
    padding-left:3px;


font-style:italic;

   


 }
`

const Fetched = styled.div`
display:flex;
align-items:center;
justify-content:center;

div{
box-shadow:0px 2px 3px #cccccc;
background-color:#ffffff;
border-radius:10px;
//padding:0.3em;
display:flex;
align-items:center !important;
justify-content:center;
position: relative;
padding:1.2em;

h6{


   width:150px;
    height:60px;
   
   text-align:flex-start !important;

}

p{
// width:250px;

  
}
svg{
    display:flex;
    align-items:center;
    justify-content:center;
}

} 
   @media (max-width:768px) {

    div{
box-shadow:0px 2px 3px #cccccc;
background-color:#ffffff;
border-radius:10px;
//padding:0.3em;
display:flex;
align-items:center !important;
justify-content:center;
padding:0 !important;

h6{


    width:180px!important ;
    height:60px !important;
   
   text-align:flex-start;
    
}

svg{
    display:flex;
    align-items:center;
    justify-content:center;
}

} 



    
   }

`


const Comment = styled.div`
  // display:flex; 
  // align-items:flex-start;
   justify-content:flex-start;


`

const SearchResult = styled.div`
h6{
  display:flex;
  align-items:flex-start;
  justify-content:center;


}




`



const ImgProfile = styled.div`
position: relative;

img{
    width:45px;
    height:45px;
    border-radius:50px;
    margin-left:10px;
   //padding-left:18px;
   object-fit:cover;

   

   
  // position: absolute;
    left:5px;
    right:-6px;
    bottom:0;
 //  top:50%;
   // transform:translateY(-50%);
};

    
`






const OnButton = styled(Button)`
//display:flex;
margin-left:37em;
box-shadow:0px 10px #888888;
border-radius:2em;

@media (max-width:768px) {

  margin-left:12em !important;
box-shadow:0px 10px #888888 !important;
border-radius:2em !important;
}

    
`

const DisplayButton = styled(Button)`

position:absolute;
left:26em;
bottom:20px;
border-radius:2em;
border: 2px solid var(--btnBgColor);


box-shadow:0px 4px #bdbaba;

//top:0px;

    

`

const PeoplesContainer = styled.div`

position: relative;
padding:5px;
line-height:1;
background-color:#e4dfdf;
border-radius:20px;

color:#aaaaaa;


div{
    position: relative;
    overflow-wrap:break-word;
    word-wrap:break-word;
  

  
}




@media (max-width:768px) {


  position: relative;
padding:5px !important;
line-height:1 !important;
background-color:#e4dfdf;
border-radius:20px !important;

color:#aaaaaa;


div{
    position: relative;
    overflow-wrap:break-word;
    word-wrap:break-word;
  

  
}



  
}



`





const PersonData = styled.div`
display:flex;
align-items:center;

position: relative;
 margin-bottom:15px;
//padding-left:350px;
p{
 
display:inline;
align-items:center;





}
h5{
    padding-left:8px;
    font-size:18px;
 //   -webkit-line-clamp:2;
-webkit-box-orient:vertical;
overflow:hidden;
text-overflow:ellipsis;
width:280px;
text-align:center;

 
};

@media (max-width:768px) {

  display:flex;
align-items:center;

position: relative;
 margin-bottom:15px;

h5{
    padding-left:4px;
    font-size:16px;
    -webkit-line-clamp:2;
-webkit-box-orient:vertical;
overflow:hidden;
text-overflow:ellipsis;
width:250px !important;

 
};
  
}


    

`

const DisposeData = styled.div`
margin-left:2px;

p{
   display:flex;
   align-items:center !important;
   padding-right:30px;
}





@media (max-width:768px) {
  
}





`