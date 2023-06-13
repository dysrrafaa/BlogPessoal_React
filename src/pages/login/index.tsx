import React, { useState } from "react";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    const handleUsernameChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
      setUsername(event.target.value);
    };
  
    const handlePasswordChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
      setPassword(event.target.value);
    };
  
    const handleSubmit = (event: { preventDefault: () => void; }) => {
      event.preventDefault();
      // Lógica para autenticar o usuário
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Nome de usuário:
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
          />
        </label>
        <label>
          Senha:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <button type="submit">Entrar</button>
      </form>
    );
  }
  
  export default Login;