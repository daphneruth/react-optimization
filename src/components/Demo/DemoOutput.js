import React from "react";
import MyParagraph from './myParagraph'

const DemoOutput = (props)=>{
    console.log('DemoOtput Running')
    return
    <MyParagraph >{props.show ? 'react behind scenes':''}</MyParagraph>
}

export default React.memo(DemoOutput);