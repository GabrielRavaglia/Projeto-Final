import React from 'react';
import './Homelogado.css';



function Homelogado(){

    var select = document.getElementsByClassName('jogouser');

    
    if (select.value == 'Vazio'){
        var fundoopceos = document.querySelector('.formuser')
        fundoopceos.style.backgroundColor = "blue";
    }
    if (select.value == 'CS'){
        var fundoopceos = document.querySelector('.formuser')
        fundoopceos.style.backgroundColor = "red";
    }
    return (

      
        <div className='app'>
        
        <div className='home'>
            <div className='menu'>
                <div className='jogos'>                    
                    <img className='logosicons' src="./src/assets/Logo-Overwatch.png"/>
                    <img className='logosicons' src="./src/assets/Logo-LeagueofLegends.png"/>
                    <img className='logosicons' src="./src/assets/Logo-Cs.png"/>
                </div>

                <div className='opcoes' id='opcoes'>
                   <form className='formuser'>
                    <select id='jogosuser' className='jogouser'>                        
                        <option id='vazio'>Definir Jogo</option>
                        <option id='overwatch' value='OverWatch'>OverWatch</option>
                        <option id='lol' value='LeagueofLegends'>League Of Legends</option>
                        <option id='cs' value='CS'>Counter-Strike</option>
                    </select>
                   </form>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Homelogado;