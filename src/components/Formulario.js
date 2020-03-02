import React, { useState } from 'react';
import styled from '@emotion/styled';
import { obtenerDiferenciaYear, calcularZona, calcularTipoSeguro } from '../helper';

const Campo = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`;

const Label = styled.label`
    flex: 0 0 150px;
`;

const Select = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 2px solid #456cf9;
    border-radius: 5px;
    -webkit-appearance: none;
`;

const InputRadio = styled.input`
    margin: 0 6px;
`;

const Button = styled.button`
    background-color: #456cf9;
    font-size: 20px;
    width: 100%;
    padding: 1rem;
    text-transform: uppercase;
    font-weight: bolder;
    border: none;
    transition: background-color .3s ease;
    margin-top: 1rem;

    &:hover{
        background-color: #8771ff;
        cursor: pointer;
    }
`;

const Error = styled.div`
    background-color: red;
    padding: 1rem;
    width: 94%;
    text-align: center;
    margin-top: 2rem;
`;


const Formulario = ({guardarResumen, guardarCargando}) => {

    const [ datos, guardarDatos ] = useState ({
        zone: '',
        year: '',
        type: ''
    });
    const [ error, guardarError ] = useState(false);

    //extraer valores del state
    const { zone, year, type } = datos;

    //leer datos del form y colocarlos en el state
    const obtenerInformacion = e => {
        guardarDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }

    //cuando el usuario realiza submit
    const calcularSeguro = e => {
        e.preventDefault();
        
        if(zone.trim() === '' || year.trim() === '' || type.trim() === '') {
            guardarError(true);
            return;
        }

        guardarError(false);

        // Precio base 500
        let resultado = 500;

        // obtener la diferencia de años

        const diferencia = obtenerDiferenciaYear(year);
        

        // por cada año hay que restar un 3%
        resultado -= (( diferencia * 3) * resultado) / 100;
        

        // Americano +20%
        // Asiatico +10%
        // Europeo +5%
        resultado = calcularZona(zone) * resultado;
        

        // Incremento de póliza por tipo de seguro contratado
        const IncrementoPorTipo = calcularTipoSeguro(type);
        resultado = parseFloat (IncrementoPorTipo * resultado).toFixed(2);

        guardarCargando(true);

        // Total
        setTimeout(() => {

            //Elimina el Spinner
            guardarCargando(false);

            //pasa la info al componente principal
            guardarResumen({
                cotizacion: resultado,
                datos
            });

        }, 2000);
        
        
        

    }
    

    return ( 
        <form
           onSubmit={calcularSeguro} 
        >

            <Campo>
                <Label>Zona de fabricación: </Label>
                <Select
                    name="zone"
                    value={zone}
                    onChange={obtenerInformacion}
                >
                    <option value="">-- Seleccionar --</option>
                    <option value="americano">Americano</option>
                    <option value="europeo">Europeo</option>
                    <option value="asiatico">Asiatico</option>
                </Select>
            </Campo>

            <Campo>
                <Label>Año de fabricación: </Label>
                <Select
                name="year"
                value={year}
                onChange={obtenerInformacion}
                >                    
                    <option value="">-- Seleccionar --</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                    <option value="2011">2011</option>
                    <option value="2010">2010</option>
                    <option value="2009">2009</option>
                    <option value="2008">2008</option>
                    <option value="2007">2007</option>
                    <option value="2006">2006</option>
                    <option value="2005">2005</option>
                    <option value="2004">2004</option>
                    <option value="2003">2003</option>
                </Select>
            </Campo>

            <Campo>
                <Label>Tipo de Cobertura: </Label>
                <InputRadio
                    type="radio"
                    name="type"
                    value="terceros"
                    checked={type === "terceros"}
                    onChange={obtenerInformacion}
                /> Terceros   

                <InputRadio
                    type="radio"
                    name="type"
                    value="terceros ampliado"
                    checked={type === "terceros ampliado"}
                    onChange={obtenerInformacion}
                /> Terceros ampliado  

                <InputRadio
                    type="radio"
                    name="type"
                    value="todo riesgo"
                    checked={type === "todo riesgo"}
                    onChange={obtenerInformacion}
                /> Todo riesgo
            </Campo>

            <Button type="submit">Calcular</Button>

            { error ? <Error>Todos los campos deben tener contenido.</Error> : null}
           
        </form>

        

     );
}
 
export default Formulario;