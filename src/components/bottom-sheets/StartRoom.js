import React,{useState} from 'react'
import styled from 'styled-components'
import {FcGlobe} from "react-icons/fc"


const StartRoom = () => {
    const [room, setRoom] = useState("open")
  return (
    <>
    <div>
    <SwitchLine>
    </SwitchLine>
    </div>

    <div className='text-right'>
        <button>
         <Button>
          + Add a Topic
         </Button>
       </button>

    </div>


    </>
  )
}

export default StartRoom


const SwitchLine = styled.div`

`

const Button= styled.button`
 
 `