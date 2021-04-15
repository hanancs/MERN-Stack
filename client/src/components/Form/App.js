import React from 'react';
  
//importing typewriter-effect
import Typewriter from "typewriter-effect";
import './App.css';
  
function App() {
  return (
    <div className="App color-change-5x">
      <Typewriter options={{
        autoStart: true,
        loop: true,
      }}
  
       onInit={(typewriter)=> {
  
       typewriter
        
       .typeString("Welcome to நினைவுகளே io")
         
       .pauseFor(3000)
       .deleteAll()
       .typeString("Sign-Up to create your own memories and like other's memories.")
       .pauseFor(1000)
       .deleteAll()
       .start();
       }}
       />
    </div>
  );
}
  
export default App;