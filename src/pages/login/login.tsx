import React from 'react'
import './login.css'

function Login(): JSX.Element {

    return (
        
        <div className="container" id="container">
            
        <div className="form-container sign-up-container">
            <form action="#">
                <h2>Criando sua Conta</h2>
                <input type="text" placeholder="Nome" />
                <input type="email" placeholder="Email" />
                <input type="Senha" placeholder="Senha" />
                <button>Criar</button>
            </form>
        </div>
        <div className="form-container sign-in-container">
            <form action="#">
                <h1>Entrar</h1>
                <input type="email" placeholder="Email" />
                <input type="Senha" placeholder="Senha" />
                <a href="#">Esqueceu a senha?</a>
                <button>Entrar</button>
            </form>
        </div>
        <div className="overlay-container">
            <div className="overlay">
                <div className="overlay-panel overlay-left">
                    <h1>Seja Bem Vindo!</h1>
                    <p>Para se manter conectado, faça o login com suas informações pessoais</p>
                    <button className="ghost" id="signIn">Entrar</button>
                </div>
                <div className="overlay-panel overlay-right">
                    <h1>Salvee!</h1>
                    <p>CRIE SUA CONTA AQUI!</p>
                    <button className="ghost" id="signUp">Criar</button>
                </div>
            </div>
        </div>
    </div>
        
    );

}

export default Login;