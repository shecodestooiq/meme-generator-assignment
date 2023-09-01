import './App.css';
import React from 'react';
import MemeProvider from './components/MemeInfo';
import Home from './pages/home';


function App() {
  return (
  <MemeProvider>
    <Home /> 
  </MemeProvider>);
}

export default App;
