import React, { useState } from 'react';
import Button from './components/UI/Button/Button';
import DemoOutput from './components/UI/Button/Demo/DemoOutput';

import './App.css';

function App() {
  const[showPara,setShowPara] = useState(false)

  const toggleParaHandler = () => {
    //changing state
    setShowPara(prevShowPara => ! prevShowPara)
  }
  return (
    <div className="app">
      <h1>Hi there!</h1>
     <DemoOutput show = {showPara}/>
     <Button onClick ={toggleParaHandler}>Toggle Paragrap</Button>
    </div>
  );
}

export default App;
