import React from "react"
import ReactDOM from 'react-dom';

const Main = () => {
  return (
    <div>
      <App />
    </div>
  );
};

const App = () => {
  return (
    <h1>Hello World!</h1>
  );
};

function Home() {
    return (
      <div className="home-container">
        <h1>Bem-vindo à minha página inicial</h1>
        <p>
          Nesta página, você encontrará informações sobre meus projetos e
          habilidades em desenvolvimento de software. Fique à vontade para navegar
          e entrar em contato comigo se tiver alguma pergunta.
        </p>
        <button>Veja meus projetos</button>
      </div>
    );
  }
  
  export default Home;
  ReactDOM.render(<Main />, document.getElementById('root'));