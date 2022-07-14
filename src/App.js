import React, { useState } from 'react';

import './App.css';

function App() {
  const[showPara,setShowPara] = useState(false)
  return (
    <div className="app">
      <h1>Hi there!</h1>
     { showPara && <p>react behind scenes</p>}
    </div>
  );
}

export default App;
