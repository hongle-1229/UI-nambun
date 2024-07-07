import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
// import Login from './components/Login'

function App() {
  return (
    <div className="app">
      <Header></Header>
      <MainContent></MainContent>
      {/* <Login></Login> */}
    </div>
  );
}

export default App;