import React from "react";

const DemoOutput = (props)=>{
    console.log('DemoOtput Running')
    return <p> {props.show ? 'react behind the scenes': ''}</p>
}

export default DemoOutput;