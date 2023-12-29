import React, { useState,useEffect } from 'react';
import Quote from './components/quote'; // Adjust the import path according to your file structure
import './App.css';
import GenerateRandomColor from './GenerateRandomColor'
function App() {
  const[color,setColor] = useState('')

useEffect( () =>{

    setColor(GenerateRandomColor())

},[])

  document.body.style.backgroundColor = color;
  return (
    <div>
      <Quote Color={color}/>
    </div>
  );
}

export default App;
