import React, { useState } from 'react';
import './login.css';

function Login() {
  const [isSignUp, setIsSignUp] = useState(false);

  function handleSignUp() {
    setIsSignUp(true);
  }

  function handleSignIn() {
    setIsSignUp(false);
  }

  return (
    <div className="container" id="container">
      <div className={`form-container ${isSignUp ? 'sign-up-container' : 'sign-in-container'}`}>
        {isSignUp ? (
          <form action="#">
            <h2>Criando sua Conta</h2>
            <input type="text" placeholder="Nome" />
            <input type="email" placeholder="Email" />
            <input type="Senha" placeholder="Senha" />
            <button>Criar</button>
          </form>
        ) : (
          <form action="#">
            <h1>Entrar</h1>
            <input type="email" placeholder="Email" />
            <input type="Senha" placeholder="Senha" />
            <a href="#">Esqueceu a senha?</a>
            <button>Entrar</button>
          </form>
        )}
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Seja Bem Vindo!</h1>
            <p>Para se manter conectado, faça o login com suas informações pessoais</p>
            <button className="ghost" id="signIn" onClick={handleSignIn}>Entrar</button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Salvee!</h1>
            <p>CRIE SUA CONTA AQUI!</p>
            <button className="ghost" id="signUp" onClick={handleSignUp}>Criar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;