import React from 'react';
import Title from '../../components/com-title';
import Label from '../../components/com-label';
import Input from '../../components/com-input';
import Button from '../../components/com-button';
import Link from '../../components/com-link';
import Icon from '../../components/com-icon';
import Image from '../../components/com-image';
import Textarea from '../../components/com-textarea';


const SolicitudBaja = (props) => {
    return ( 
        
        <>
            <div className="lay-sidebar">
                <aside>
                    <nav>
                        <dl className="4xs">
                            <dt>Mi cuenta</dt>
                            <dd><a href="#" className="com-link">Mi usuario</a></dd>
                            <dd><a href="#" className="com-link">Datos personales</a></dd>
                            <dt>Club LA NACION</dt>
                            <dd><a href="#" className="com-link">Vincular credencial</a></dd>
                            <dd><a href="#" className="com-link">Mis credenciales</a></dd>
                            <dd><a href="#" className="com-link">Mis beneficios</a></dd>
                            <dt>Mis suscripciones</dt>
                            <dd><a href="#" className="com-link">Ver suscripciones</a></dd>
                            <dd><a href="#" className="com-link">Suspender por vacaciones</a></dd>
                            <dd><a href="#" className="com-link">Cambiar domicilio de entrega</a></dd>
                            <dt>Mis reclamos</dt>
                            <dd><a href="#" className="com-link">De entrega</a></dd>
                            <dd><a href="#" className="com-link">Tarjeta Club</a></dd>
                            <dt>Mis pagos</dt>
                            <dd><a href="#" className="com-link">Ver facturas</a></dd>
                            <dd><a href="#" className="com-link">Pagos pendientes</a></dd>
                            <dd><a href="#" className="com-link">Cambiar forma de pago</a></dd>
                        </dl>
                        <dl className="--secondary">
                            <dt>Mi actividad</dt>
                            <dd><a href="#" className="com-link">Newsletters</a></dd>
                            <dd><a href="#" className="com-link">Mis comentarios</a></dd>
                        </dl>
                    </nav>
                </aside>
                <section>
                    <nav className="breadcrumb">
                        <ol className="com-list --inline">
                            <li>Mis suscripciones</li>
                            <li><Link link="#">Ver suscripciones</Link></li>
                        </ol>
                    </nav>

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
                    
                    <article className="mod-article">
                        <div className="mod-description">
                            <h3 className="com-title s">¡Agregá Club LA NACIÓN a tu suscripción!</h3>
                            <p>Dejanos tus datos y empezá a disfrutar de los beneficios.</p>
                            <Button text="Vincular tarjeta">Vincular tarjeta</Button>
                        </div>
                    </article>

                    <article className="mod-article">
                        <div className="mod-description">
                            <h3 className="com-title s">¡Agregá Club LA NACIÓN a tu suscripción!</h3>
                            <p>Dejanos tus datos y empezá a disfrutar de los beneficios. <Link link="#">Completá el formulario</Link> o <Link link="#">llamanos al 5199-4740</Link></p>
                        </div>
                        <div className="mod-media">
                            <Image src="https://via.placeholder.com/180x140" alt="Nombre usuario"/>
                        </div>
                    </article>

                    <div className="mod-toast --success">
                        <Button icon="close" mod="--tertiary" title="Cerrar" />
                        <Icon name="check-mark" />
                        <div className="mod-description">
                            <h3 className="com-title s">Información importante</h3>
                            <span className="">Bajada del error, lorem ipsum.</span>
                        </div>
                    </div>
                    
                    <div className="mod-toast --warning">
                        <Button icon="close" mod="--tertiary" title="Cerrar" />
                        <Icon name="error-warning" />
                        <div className="mod-description">
                            <h3 className="com-title s">Información importante</h3>
                            <span className="">Bajada del error, lorem ipsum.</span>
                        </div>
                    </div>

                    <div className="mod-toast --info">
                        <Button icon="close" mod="--tertiary" title="Cerrar" />
                        <Icon name="info" />
                        <div className="mod-description">
                            <h3 className="com-title s">Información importante</h3>
                            <span className="">Bajada del error, lorem ipsum.</span>
                        </div>
                    </div>

                    <div className="mod-toast --alert">
                        <Button icon="close" mod="--tertiary" title="Cerrar" />
                        <Icon name="alert" />
                        <div className="mod-description">
                            <h3 className="com-title s">Información importante</h3>
                            <span className="">Bajada del error, lorem ipsum.</span>
                        </div>
                    </div>
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