import React from 'react';
import Popup from './features/popup/Popup';

function App() {
  return (
    <div className="App">
      <div style={{height:'100vh',backgroundColor:'red'}}></div>
      <div style={{height:'100vh',backgroundColor:'blue'}}></div>
      <Popup />
    </div>
  );
}

export default App;
