import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
//import {BsAt  }from  "@ant-design/icons"
import { BsAt,   BsUpload,BsPlus } from 'react-icons/bs';
import {AiOutlineSetting,} from 'react-icons/ai'
import {AiOutlineTwitter, AiOutlineInstagram} from 'react-icons/ai'
import {IoIosAddCircle} from 'react-icons/io'




function Profile() {
  return (
    <ProfileData>
        <StyledHeader>

       <StyledLink to={"/home"}> 
       <img src="./images/left-arrow.svg" alt="" />
          </StyledLink>


          <DataPage >
            <BsAt/>
            
            <BsUpload/>
            <AiOutlineSetting/>
          </DataPage>
           <Photo>
            <img src="./images/joel.jpg" alt="" />
           </Photo>
           <div>
           <h4>Blake Christian </h4>
           <p> @fred.gmail.com </p>
           </div>
           <Comments>
            <p>
              <span>0</span>  Followers

             
            </p>
            <p> <span>51</span>  Following
            
            </p> 
                  <div className='btn'>
                  <button> <IoIosAddCircle/>  Add a bio</button>
                  </div>
              
            
            <div>
               <button><AiOutlineTwitter /> Add Twitter  </button>  
                
                 <button>
                 <AiOutlineInstagram /> Add Instagram

                 </button>
                 </div>
           </Comments>
            <ImagePhoto>
            
                <div >
                 <span>  <img src="./images/joel.jpg" alt="" /></span>
                    <p>
                   Joined 14-July-2020     
                    </p>
                    <p>
                    Nominated by <span>Anton Alarcon</span>
                     </p>

                </div>
                <p  >member of</p>
            <button className='obj' > <BsPlus/> </button>
            </ImagePhoto>
           
        </StyledHeader>
        
   </ProfileData>
  )
}

export default Profile

const ImagePhoto= styled.div`
margin-top:-15px;



button{
  border:none;
  background-color:blue;
  border-radius:50px;
  width:50px;
  
}
img{
    width:40px;
    height:40px;
    border-radius:50px;
}
div{
   display:flex;
   align-items:center;

   
   //width:105px;
  


   &>p{
    margin-left:5px;
    font-size:small !important;
    font-weight:bold;

   
 


    &:last-child{
      transform:translateX(-72%);
      margin-top:38px;
      
    }
 
   }
}

 &>p{
  margin-top:5px;
 }

 

`




const Comments = styled.div`
  //line-height:1;
 position: relative;

 
  .btn{
   // padding-top:10px;
    
    position: absolute;
    bottom:20px;
    margin-left:-14px;

  }
 
p{
   display:inline;
   align-items:center;
   justify-content:flex-start;
   padding-left:5px;
   line-height:0;

  // bottom:-20px;



   &:first-child{
    margin-right:0.5em;
   };

  &>span{
  font-weight:600;
 // color: var(--textColor);
 color:black;
  margin-right:4px;
  font-size:1.3em;

}
 
};


div{
  display:flex;

  justify-content:flex-start;
 margin-top:60px;


  button{
       background-color:transparent;
       border:none;
      // margin-top:20px;
       padding-top:40px;
     // line-height:1;
     
   
    
       color:blue;
       font-weight:600;


       &:first-child{
  //  margin:5px 0;
 // margin-top:30px;
     
  }
  }
 
}

    

`



const ProfileData = styled.div`

background-color:#f2f0e4;
height:100vh;
`

const StyledHeader = styled.div`

margin-left:5px;
line-height:0.5;

div{
    padding-top:10px;
  &>h4{
    font-size:1.5em;
    color:var(--textColor);
    font-weight:600;


  };
  p{
    font-size:1em;
    color:#aaaaaa;

  }
}






`

const Photo = styled.div`
margin-left:15px;
margin-top:10px;





img{
    widows:60px;
    height:60px;
    border-radius:50px;
   object-fit:contain;


}
    

`

const DataPage = styled.div`
display:flex;
//align-items:flex-end;
justify-content:flex-end;
padding-top:20px;
padding-right:8px;


svg{
    font-size:25px;
    margin:0 8px;
    

 
}

`

const StyledLink = styled(Link)`

position: relative;

img{
  margin-top:20px;
  position: absolute;
  bottom:-40px;

  
}

`