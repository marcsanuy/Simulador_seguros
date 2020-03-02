import React from 'react';
import styled from '@emotion/styled';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const Mensaje = styled.p`
    background-color: rgb(127, 224, 237);
    text-align: center;
    margin-top: 2rem;
    padding: 1rem;
    `;

const ResultadoCotizacion = styled.div`
    text-align: center;
    font-size: 25px;
    border: 3px solid #26C6DA;
    background-color: #47FC47;
    margin-top: 1rem;
    position: relative;
`;

const TextoCotizacion = styled.p`
    color: black;
    padding: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    margin: 0;
`

const Resultado = ({cotizacion}) => {

   return(
    (cotizacion === 0)
    ? <Mensaje>Elige zona, año y tipo de seguro</Mensaje> 
    : 
        (
            <ResultadoCotizacion>
                <TransitionGroup
                    component="p"
                    className="resultado"
                >
                        <CSSTransition
                            classNames="resultado"
                            key={cotizacion}
                            timeout={{ enter: 1500, exit: 1500 }}
                        >
                                <TextoCotizacion>Total: {cotizacion} €</TextoCotizacion>
                        </CSSTransition>
                </TransitionGroup>
            </ResultadoCotizacion>
        )
   );
}
 
export default Resultado;