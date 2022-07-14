import React from "react";
import MyParagraph from './components/Demo/MyParagraph';

const DemoOutput = (props)=>{
    console.log('DemoOtput Running')
    return
    <MyParagraph >{props.show ? 'react behind scenes':''}</MyParagraph>
}

export default DemoOutput;