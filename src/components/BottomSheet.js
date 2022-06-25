import React from 'react';
import SwipeableBottomSheet from "react-swipeable-bottom-sheet";
import styled from "styled-components";

import StartRoom from './bottom-sheets/StartRoom'


export default function BottomSheet(props) {
    return ( <
        div >
        <
        SwipeableBottomSheet open = { props.sheetVisible }
        onChange = {
            () => {
                props.setSheetVisible(!props.sheetVisible)
                props.setItemsVisible(true)
            }
        }
        fullScreen = { props.sheetTitle == 'room detail' ? true : false } >
        <
        div style = {
            { backgroundColor: props.sheetTitle = "profile" ? "transparent" : " " } } >

        <
        StartRoom setSheetCreateRoom = { props.setSheetCreateRoom }
        setSheetVisible = {
            (items) => {
                props.setSheetVisible(items);
                props.setItemsVisible(true)
            }
        }
        />


        <
        /div>


        <
        /SwipeableBottomSheet>


        <
        /div>
    )
}



const Sheet = styled.div `
div{background-color: #ffffff;
border-radius: 1.5 1.5 0 0;
padding: 1.5em 1em;
position: relative;
height: 100%;
}

`