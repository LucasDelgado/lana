import React from 'react';
import Menu from './menu';
import Breadcrumb from '../../modules/breadcrumb';
import Title from '../../components/title';

import Toast from '../../modules/toast';
import Label from '../../components/label';
import Input from '../../components/input';
import Button from '../../components/button';



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
                        <Title text="Vincular credencial" tag="h1" size="xl"></Title>
                    </div>
                    
                    <Toast status="warning" title="Información importante" text="Bajada del error, lorem ipsum." />
                    
                    <form>                      
                        
                        <fieldset>
                            <legend>Ingresá los siguientes datos</legend>

                            <section className="row-gap-2">
                            <div className="mod-input">
                                <Label mod="--title">Tipo de documento</Label>
                                <Input type="text" placeholder="DNI"/>
                            </div>

                            <div className="mod-input">
                                <Label mod="--title">Número de documento</Label>
                                <Input type="text" placeholder="Ingresá el número de docuemento"/>
                            </div>
                            </section>
                            <div className="mod-input">
                                <Label mod="--title">Número de tarjeta Club LA NACION</Label>
                                <section className="row-gap-3">
                                <Input type="text" placeholder="638130" disabled/>
                                <Input type="text" placeholder="_ _ _ _ _ _ _ _ _ _"/>
                                <Input type="text" placeholder="_ _"/>
                                </section>
                            </div>
                            
                        </fieldset>

                        <Button text="Vincular tarjeta" disabled>Vincular tarjeta</Button>
                    
                    </form>

                    <p><strong>¿No recordás el número de la tarjeta Club LA NACION?</strong> Llamanos al <strong>5199-4700</strong> de Lunes a Viernes de 8a 20hs y Sábados y Domingos de 8 a 14hs.</p>

                    <p className="6xs"><strong>Protección de datos personales</strong><br/>
S.A. La Nación utilizará la información para los siguientes fines: a) identificación y autenticación, b) administración y gestión comercial, c) mejora del servicio, d) fines estadísticos, e) envío de notificaciones, promociones o publicidad, entre otros. Los datos personales no serán difundidos ni empleados para un fin distinto o incompatible al tenido en cuenta al ser ingresados en la base. S.A. La Nación podrá emplear a otras compañías y/o personas físicas para llevar a cabo tareas o funciones en su nombre. Entre los ejemplos de ese tipo podemos mencionar el de enviar correo postal y electrónico, retirar información reiterativa de las listas de usuarios, analizar datos en forma estadística, etc. Dichas personas cuentan con acceso a la información personal necesaria para cumplir con sus tareas y funciones, pero no pueden utilizarla con fines distintos a los estipulados. Las bases de datos de S.A. La Nación se encuentran registradas en la Dirección Nacional de Protección de Datos Personales del Ministerio de Justicia y Derechos Humanos de la Presidencia de la Nación (República Argentina), en cumplimiento de lo dispuesto en el art. 3 de la Ley 25.326. El titular de los datos personales tiene la facultad de ejercer el derecho de acceso a los mismos en forma gratuita a intervalos no inferiores a 6 meses, salvo que se acredite un interés legítimo al efecto, conforme lo establecido en el art. 14, inc. 3 de la Ley 25.326. La DIRECCIÓN NACIONAL DE PROTECCIÓN DE DATOS PERSONALES, Órgano de Control de la Ley 25.326, tiene la atribución de atender las denuncias y reclamos que se interpongan con relación al incumplimiento de las normas sobre protección de datos personales.</p>

                </section>
            </div>
        </>
       
     );
}
 
export default SolicitudBaja;