import React from 'react';
import Title from '../../components/com-title';
import Label from '../../components/com-label';
import Input from '../../components/com-input';
import Button from '../../components/com-button';
import Link from '../../components/com-link';
import Icon from '../../components/com-icon';
import Textarea from '../../components/com-textarea';


const SolicitudBaja = (props) => {
    return ( 
        <>
        <aside>
            <nav></nav>
        </aside>
        <main>
            <Link link="#">
                <Icon name="arrow-left"></Icon> Volver a ver suscripciones
            </Link>
            
            <Title text="Solicitud de Baja" tag="h1" size="xl"></Title>
            
            <Link link="#" text="Ver historial de solicitides de baja" />

            <ol>
                <li>Seleccioná las suscripciones en las cuales querés solicitar la baja:</li>
            </ol>
            
            <Label text="Club LA NACION + Acceso Digital" value="3 meses" id="01" name="01"/>
            <Label text="LN Sábado o Domingo 100% Dto. 3 meses" value="3 meses" id="02" name="02"/>
            <Label value="3 meses" id="03" name="03">Acceso Digital (suscripción realizada con Google)</Label>
            <strong>Teléfono de contacto</strong>
            <Input type="text" placeholder="00-0000-0000"/>

            <strong>Teléfono alternativo</strong>
            <Input type="text" placeholder="00-0000-0000"/>

            <strong>E-mail de contacto</strong>
            <Input type="text" placeholder="Ingresá un e-mail de contacto"/>


            <strong>Horario de contacto</strong>
            <Label text="De 8 a 14" type="radio" value="1" id="1" name="time"/>
            <Label text="De 14 a 20" type="radio" value="2" id="2" name="time"/>

            <strong>Motivo de la baja</strong>
            <Textarea></Textarea>
            <Button text="Solicitar baja">Solicitar baja</Button>
            <Button value="Solicitar baja"/>

        </main>
        </>
     );
}
 
export default SolicitudBaja;