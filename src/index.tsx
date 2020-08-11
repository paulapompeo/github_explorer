import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


// Esse arquivo utiliza a react-dom para renderizar a nossa aplicação dentro de um elemento da DOM (root)
// StrictMode -> Tratativa de erros
