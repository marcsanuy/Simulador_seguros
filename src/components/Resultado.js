import React from 'react';
import styled from '@emotion/styled';

const Mensaje = styled.p`
    background-color: rgb(127, 224, 237);
    text-align: center;
    margin-top: 2rem;
    padding: 1rem;
    `;

const ResultadoCotizacion = styled.div`
    text-align: center;
    border: 3px solid #26C6DA;
    background-color: #47FC47;
    margin-top: 1rem;
    position: relative;
`

const Resultado = ({cotizacion}) => {

   return(
    (cotizacion === 0)
    ? <Mensaje>Elige zona, año y tipo de seguro</Mensaje> 
    : 
        (
            <ResultadoCotizacion>
                <h2>Total: {cotizacion} €</h2>
            </ResultadoCotizacion>
        )
   );
}
 
export default Resultado;