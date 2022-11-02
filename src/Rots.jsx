import React from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home';
import Homelogado from './Homelogado';

function Rotas (){
    return(

        <BrowserRouter>
        
          <Routes>         
           <Route path='/' element={<Home/>}></Route>
           <Route path='/Menu' element={<Homelogado/>}></Route>
          </Routes>
        </BrowserRouter>  
    )
}

export default Rotas;