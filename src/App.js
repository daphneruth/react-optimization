import React, { useState, useCallback } from 'react';
import Button from './components/UI/Button/Button';
import DemoOutput from './components/Demo/DemoOutput';

import './App.css';

function App() {
  console.log('App Running')
  const[showPara,setShowPara] = useState(false)

  const toggleParaHandler = useCallback(() => {
    //changing state
    setShowPara(prevShowPara => ! prevShowPara)
  }, []);
  return (
    <div className="app">
      <h1>Hi there!</h1>
     <DemoOutput show ={false}/>
     <Button onClick ={toggleParaHandler}>Toggle Paragrap</Button>
    </div>
  );
}

export default App;
