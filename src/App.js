import React, { useState } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Resumen from './components/Resumen';
import styled from '@emotion/styled';

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
  background-color: #2dd0aa;
  padding: 3rem;
`;

function App() {

  const [ resumen, guardarResumen ] = useState({
    cotizacion: 0,
    datos: {
        zone: '',
        year: '',
        type: ''
    }
  });

  // Extraer datos
  const { datos } = resumen;
  

  return (
    <Contenedor>
        <Header 
          titulo="Simulador de Seguros"
        />

        <ContenedorFormulario>
            <Formulario
              guardarResumen={guardarResumen}
            />
            <Resumen
              datos={datos}
            />
        </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
