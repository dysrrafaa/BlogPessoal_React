import React from 'react';
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

ReactDOM.render(<Main />, document.getElementById('root'));