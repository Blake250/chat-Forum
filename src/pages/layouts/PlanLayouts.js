import React from 'react';
import styled from "styled-components";


const PlanLayouts = ({children})=> {
  return (
      <Plan>
        {children}
      </Plan>
  )
};

export default PlanLayouts;

const Plan = styled.div`
    width : 1400px;
    max-width : 1500px;
    margin : auto;
    

`


