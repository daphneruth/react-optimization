import React, { useState, useCallback } from 'react';
import Button from './components/UI/Button/Button';
import DemoOutput from './components/Demo/DemoOutput';

import './App.css';

function App() {
  console.log('App Running')
  const[showPara,setShowPara] = useState(false)
  const[allowToggle,setAllowToggle] = useState(false)


  const toggleParaHandler = useCallback(() => {
    if(allowToggle){
//changing state
setShowPara(prevShowPara => ! prevShowPara)
    }
    }, []);

  const allowToggleHandler = () =>{
setAllowToggle(true);
  }
  return (
    <div className="app">
      <h1>Hi there!</h1>
     <DemoOutput show ={false}/>
     <Button onClick ={allowToggleHandler}>allowToggle Paragraph</Button>
     <Button onClick ={toggleParaHandler}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;
