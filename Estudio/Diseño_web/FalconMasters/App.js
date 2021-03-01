import React from 'react';
import Slideshow from './componentes/slide_show';
import './estilos.css';
import styled from 'styled-components';

const App = () => {
  return (
    <main>
      <Titulo>Productos destacados</Titulo>
      <Slideshow />
    </main>
  );
}

const Titulo = styled.p`
    font-sizel: 18px;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 10px;
`;

export default App;