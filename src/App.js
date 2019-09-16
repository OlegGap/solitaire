import React from 'react';
import './styles/normalize.css'
import Header from './components/Header'
import Menu from './components/Menu'
import Graphics from './components/Graphics'

function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <Graphics />
    </div>
    );
  }
  
  export default App;
