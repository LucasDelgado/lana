import React from 'react';
import Title from '../../components/com-title';
import Label from '../../components/com-label';
import Input from '../../components/com-input';
import Button from '../../components/com-button';


const SolicitudBaja = (props) => {
    return ( 
        <div>
            <Title text="Solicitud de Baja" tag="h1"></Title>
            <Label text="LN Sábado o Domingo 100% Dto. 3 meses" value="3 meses" id="0" name="sale"/>
            <Input type="text"/>
            <Input type="search"/>
            <Input type="date"/>
            <Label text="De 8 a 14" type="radio" value="8 a 14" id="1" name="time"/>
            <Label text="De 14 a 20" type="radio" value="14 a 20" id="2" name="time"/>
            <Button text="Solicitar baja">Solicitar baja</Button>

        </div>
     );
}
 
export default SolicitudBaja;