import React from 'react';
import {auth} from './firebase.js';


function Header(props) {        

    function Abrirlogar(e){
        e.preventDefault();

        let modallogin = document.querySelector('.login');
        modallogin.style.display = "block";
    }

    function fecharlogin(){
        
        let modallogin = document.querySelector('.login');
        modallogin.style.display = "none";
    }

    function AbrirCriarconta(e){
        e.preventDefault();

        let modal = document.querySelector('.criarconta');
        modal.style.display = "block";
        
    }

    function fecharmodalcriar(){
        let modal = document.querySelector('.criarconta')
        modal.style.display = "none";

    }

    function CriarConta(e){

        e.preventDefault();
        let email=document.getElementById('emailcadastro').value;
        let username=document.getElementById('usernamecadastro').value;
        let senha=document.getElementById('senhacadastro').value;

        auth.createUserWithEmailAndPassword(email, senha)
        .then((authUser)=>{
            authUser.user.updateProfile({
                displayName:username
            })
            alert('Conta criada')
            let modal = document.querySelector('.criarconta')
        modal.style.display = "none";    
            

        }).catch((error)=>{
            alert(error.message)
        })
        ;
    }

    function Logar(e){
        e.preventDefault();
        let emaillogin =document.getElementById('emaillogin').value;
        let senha =document.getElementById('senha').value;

        auth.signInWithEmailAndPassword(emaillogin, senha)
        .then((auth)=>{
            this.props.setUser(auth.user.displayName)
            
            let modallogin = document.querySelector('.login');
        modallogin.style.display = "none";                  
        }).catch((error)=>{
            alert(error.message)
        });
    }

    

   
    return (
   
        

        <div className='header'>

            <div className='criarconta'>
                        
                        <form onSubmit={(e)=>CriarConta(e)}>
                        <div onClick={()=>fecharmodalcriar()} className='botaosaircriarconta'><img src='./src/assets/VoltarLaranja.png'/>
                        </div>                            
                            <input  id='emailcadastro' type="email" placeholder='E-mail'/>
                            <input  id='usernamecadastro' type="username" placeholder='Nome de Usuario'/>
                            <input  id='senhacadastro' type="password" placeholder='Senha'/>
                            <input type="submit" value='Criar'/>
                         </form>
            </div>


            
            <div className='login'>
                                <form onSubmit={(e)=>Logar(e)}>
                                    <div onClick={(()=>fecharlogin())} className='voltarlogin'>
                                        <img src='./src/assets/VoltarLaranja.png'/>
                                    </div>                                                   
                                    <input id='emaillogin' type="email" placeholder='E-mail'/>                                   
                                    <input id='senha' type="password" placeholder='••••••'/>                                                                     
                                    <input type="submit" name='acao' value='Entrar'></input> 
                                                             
                                </form>
                                </div>
                
            

            <div className='center'>                   
                        {
                            (props.user)?

                            <div className='headerlogado'>
                            <div className='header_logo'>
                            <a href='index.html'><img src="./src/assets/Logo.png"/></a>
                             </div>
                            <div className='btn_logado'>Ola {props.user}</div>
                            </div>

                            
                            
                            :
                            
                            <div className='header_loginform'>  
                             <div className='header_logo'>
                            <a href='index.html'><img src="./src/assets/Logo.png"/></a>
                             </div>  
                             <div className='loginecriar'>        
                                       
                                <button onClick={(e)=>AbrirCriarconta(e)} className='btn_criarconta'><strong>CRIAR CONTA</strong></button>
                                <button onClick={(e)=>Abrirlogar(e)} className='btn_logar'><strong>ENTRAR</strong></button>
                             </div>
                           </div>
                
                        }
                </div>  
        </div>

    )
}

    export default Header;



