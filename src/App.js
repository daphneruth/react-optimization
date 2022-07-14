import React, { useState } from 'react';
import Button from './components/UI/Button/Button';

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
     { showPara && <p>react behind scenes</p>}
     <Button onClick ={toggleParaHandler}>Toggle Paragrap</Button>
    </div>
  );
}

export default App;
