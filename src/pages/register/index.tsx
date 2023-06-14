import React, { useState } from "react";

function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const handleUsernameChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
      setUsername(event.target.value);
    };
  
    const handleEmailChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
      setEmail(event.target.value);
    };
  
    const handlePasswordChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
      setPassword(event.target.value);
    };
  
    const handleSubmit = (event: { preventDefault: () => void; }) => {
      event.preventDefault();
      // Lógica para criar uma nova conta
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
          E-mail:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <label>
          Senha:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <button type="submit">Criar conta</button>
      </form>
    );
  }
  
  export default Register;