import React, { Fragment } from 'react';
import styled from '@emotion/styled';
import { primerMayuscula } from '../helper';

const ContenedorResumen = styled.div`
    text-align: center;    
`


const Resumen = ({datos}) => {

    //Extraer de datos
    const {zone, year, type} = datos;

    if(zone === '' || year === '' || type === '' ) return null;
    
    return ( 
        <ContenedorResumen>
            <h3>Resumen de Cotización</h3>
            <ul>
                <li>Zona: {primerMayuscula(zone)} </li>
                <li>Año: {primerMayuscula(year)} </li>
                <li>Tipo: {primerMayuscula(type)} </li>
            </ul>
        </ContenedorResumen>
        
     );
}
 
export default Resumen;