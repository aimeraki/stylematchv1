/*

App - Stylematch
Ver - 0.21
by - Subu Sangameswar
Last Updated - Apr 2024

This program is property of StyleMatch Inc.
This is the main program
*/

import React from 'react';
import './App.scss'; // Assuming you have Pico CSS imported in this file.

import Header from './components/Header';
import Footer from './components/Footer';
import Chat from './components/Chat';


const App = () => {
  
 
  return (
    <div className="App">
      <Header />
      <Chat/>
      <Footer />
    </div>
  );
};

export default App;

