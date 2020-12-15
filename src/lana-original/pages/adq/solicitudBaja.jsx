import React from 'react';
import Title from '../../components/title';
import Label from '../../components/label';
import Input from '../../components/input';
import Button from '../../components/button';
import Link from '../../components/link';
import Textarea from '../../components/textarea';
import Menu from './menu';
import Breadcrumb from '../../modules/breadcrumb';


const SolicitudBaja = (props) => {
    return ( 
        
        <>
            <div className="lay-sidebar">
                <aside>
                    <Menu />
                </aside>
                <section>
                    <Breadcrumb />

                    <div className="mod-title">
                        <Title text="Solicitud de baja" tag="h1" size="xl"></Title>
                        <Link link="#" text="Ver historial de solicitudes de baja" />
                    </div>

                    <form>
                        <fieldset>
                            <legend>1. Seleccioná las suscripciones en las cuales querés solicitar la baja:</legend>
                            <div className="mod-input">                 
                                <Label type="checkbox" text="Club LA NACION + Acceso Digital" value="2 meses" id="01" name="01"/>
                                <Label type="checkbox" text="LN Sábado o Domingo 100% Dto. 3 meses" value="3 meses" id="02" name="02"/>
                                <Label type="checkbox" value="4 meses" id="03" name="03">Acceso Digital (suscripción realizada con Google)</Label>
                            </div>
                        </fieldset>
                        
                        
                        <fieldset>
                            <legend>2. Ingresá los datos donde podamos contactarte para gestionar la baja:</legend>
                            <div className="mod-input">
                                <Label mod="--title">Teléfono de contacto</Label>
                                <Input type="text" placeholder="00-0000-0000"/>
                                <span className="com-text 5xs">Código de área y número (Ej: 0117891234)</span>
                            </div>

                            <div className="mod-input">
                                <Label mod="--title">Teléfono alternativo</Label>
                                <Input type="text" placeholder="00-0000-0000"/>
                                <span className="5xs">Código de área y número (Ej: 0117891234). Opcional.</span>
                            </div>

                            <div className="mod-input">
                                <Label mod="--title">E-mail de contacto</Label>
                                <Input type="text" placeholder="Ingresá un e-mail de contacto"/>
                            </div>

                            <div className="mod-input">
                                <Label mod="--title">Horario de contacto</Label>
                                <Label text="De 8 a 14" type="radio" value="1" id="1" name="time"/>
                                <Label text="De 14 a 20" type="radio" value="2" id="2" name="time"/>
                            </div>

                            <div className="mod-input">
                                <Label mod="--title">Motivo de la baja</Label>
                                <Textarea></Textarea>
                            </div>
                        </fieldset>

                        <Button text="Solicitar baja">Solicitar baja</Button>
                        <Button value="Solicitar baja"/>
                    
                    </form>
                </section>
            </div>
        </>
       
     );
}
 
export default SolicitudBaja;