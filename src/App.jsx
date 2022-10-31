import { useState } from 'react'
import './App.css'
import {auth} from './firebase.js';
import {useEffect} from 'react';
import Header from './Header.jsx';
import Rotas from './Rots';

function App() {
  
  const [user, setUser] = useState();

  useEffect(()=>{
    console.log(auth);
  },[])

  return (
  
    <div className="App">
       
       <Header setUser={setUser} user={user}></Header>
       <Rotas/>
                 
   </div>
  )
}

export default App
