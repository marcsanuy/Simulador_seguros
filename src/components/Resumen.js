import React, { Fragment } from 'react';


const Resumen = ({datos}) => {

    //Extraer de datos
    const {zone, year, type} = datos;

    if(zone === '' || year === '' || type === '' ) return null;
    
    return ( 
        <Fragment>
            <h2>Resumen de Cotización</h2>
            <ul>
                <li>Zona: </li>
                <li>Año: </li>
                <li>Tipo: </li>
            </ul>
        </Fragment>
        
     );
}
 
export default Resumen;