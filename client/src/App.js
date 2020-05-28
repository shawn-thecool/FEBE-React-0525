import React from 'react';
import Popup from './components/popup/Popup';

function App() {
  return (
    <div className="App">
      <div style={{height:'100vh',backgroundColor:'gold'}}></div>
      <div style={{height:'100vh',backgroundColor:'orange'}}></div>
      <Popup />
    </div>
  );
}

export default App;
