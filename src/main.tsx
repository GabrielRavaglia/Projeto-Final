import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Componentes/Header'
import Meio from './App'
import Meio2 from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />    
    <Meio />
    <Meio2 />
  </React.StrictMode>
)
