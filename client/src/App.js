import React from 'react';
import Popup from './components/popup/Popup';
import Todo from './components/todo/Todo';
import Home from './pages/home/Home';

function App() {
  return (
    <div className="app">
      <header className="header" />
      <div className="tab" />
      <div className="content">
        <div>
          <aside className="aside"></aside>
          <main className="main">
            <div></div>
            <div></div>
            <div></div>
          </main>
        </div>
      </div>
      <footer className="footer" />
      {/* <Todo />
    <Popup /> <Home />*/}
    </div>
  );
}

export default App;
