import React from 'react';
import Header from './Header.jsx';



function Home(){
    return (
        <div className='app'>
        <Header setUser={setUser} user={user}></Header>
        <div className='bannerhome'>
            
            <h1>FAÇA PARTE DA MAIOR  <br /> COMUNIDADE DE ESPORTS DO BRASIL.</h1>
            <h3>Encontre players que se encaixem na sua jogatina!</h3>
            <div className='logos'>
            <img className='logosicons' src="./src/assets/Logo-Overwatch.png"/>
          <img classNmae='logosicons' src="./src/assets/Logo-LeagueofLegends.png"/>
          <img className='logosicons' src="./src/assets/Logo-Cs.png"/>
            </div>
        </div>
        </div>
    )
}

export default Home;