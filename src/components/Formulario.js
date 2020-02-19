import React from 'react';
import styled from '@emotion/styled';

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


const Formulario = () => {
    return ( 
        <form>
            <Campo>
                <Label>Zona de fabricación: </Label>
                <Select>
                    <option value="">-- Seleccionar --</option>
                    <option value="americano">Americano</option>
                    <option value="europeo">Europeo</option>
                    <option value="asiatico">Asiatico</option>
                </Select>
            </Campo>

            <Campo>
                <Label>Año de fabricación: </Label>
                <Select>                    
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
                <Label>Tipo de Seguro: </Label>
                <InputRadio
                    type="radio"
                    name="tipo de seguro"
                    value="terceros"
                /> Terceros   

                <InputRadio
                    type="radio"
                    name="tipo de seguro"
                    value="terceros ampliado"
                /> Terceros ampliado  

                <InputRadio
                    type="radio"
                    name="tipo de seguro"
                    value="todo riesgo"
                /> Todo riesgo
            </Campo>

            <button type="button">Calcular</button>
        </form>

     );
}
 
export default Formulario;