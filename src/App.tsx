import React from 'react';
import PostList from './components/postlist';
import './App.css';

function App() {
  const posts = [
    {
      id: 1,
      title: 'Primeiro Post',
      content: 'Este é o meu primeiro post no blog pessoal!'
    },
    {
      id: 2,
      title: 'Segundo Post',
      content: 'Este é o meu segundo post no blog pessoal!'
    }
  ];

  return (
    <div className="App">
      <header>
        <h1>Blog Pessoal - Rafael Marques</h1>
      </header>
      <main>
        <PostList posts={posts} />
      </main>
      <footer>
        <p>Todos os direitos reservados. 2023 </p>
      </footer>
    </div>
  );
}

export default App;