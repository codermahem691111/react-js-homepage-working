import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar  from './Navbar/Navbar'
import Heading from './Heading/Heading'
import About from './About/About';
import Nav from './Nav';
import Card from './Card/Card';
import Card2 from './Card/Card2';
function App() {
  return (
    <div className="App">
     <Heading></Heading>
    <Navbar></Navbar>
   <About></About>
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <Card2></Card2>
    </div>
  );
}

export default App;
