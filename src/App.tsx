import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';
import Routes from './routes';

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    <GlobalStyle />
  </>
);

export default App;

// componente principal da aplicação

// <BrowserRouter> -> funciona como endereço da url  ex:/contato    /catalogo
// também existe o hashrouter que ficaria: localhost:3000/#/repository    -> utilizado antigamente

