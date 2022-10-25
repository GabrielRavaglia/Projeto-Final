import { useState } from 'react'
import './App.css'
import {auth} from './firebase.js';
import {useEffect} from 'react';
import Header from './Header.jsx';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Rotas from './Rots';



function App() {
  
  const [user, setUser] = useState();

  useEffect(()=>{
    console.log(auth);
  },[])

  return (
  
    <div className="App">
       
       
       
                
   </div>
  )
}

export default App
