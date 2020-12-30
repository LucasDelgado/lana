import React from 'react';

import MiCuentaLayout from '../../businessLayout/miCuentaLayout';

import Menu from '../../modules/adq/menu';

import Breadcrumb from '../../modules/breadcrumb';
import Title from '../../components/title';

import Toast from '../../modules/adq/toast';
import Promo from '../../modules/adq/promo';

import FormRow from '../../lib/lanaForm/formRow';
import InputGroup from '../../lib/lanaForm/inputGroup';
import Label from '../../lib/lanaForm/label';
import Input from '../../lib/lanaForm/input';
import Select from '../../lib/lanaForm/select';

import Button from '../../components/button';
import FormCol from '../../lib/lanaForm/formCol';
import RadioInput from '../../lib/lanaForm/radioInput';
import CheckInput from '../../lib/lanaForm/checkInput';
import ItemBox from '../../lib/lanaForm/itemBox';



const SolicitudBaja = (props) => {
    return ( 
        
        <MiCuentaLayout>
            <div className="lay-sidebar">
                <aside>
                    <Menu />
                </aside>
                <section>
                    <Breadcrumb />

                    <div className="mod-title">
                        <Title tag="h1" size="xl">Vincular credencial</Title>
                    </div>
                    
                    <Toast status="warning" title="Información importante" text="Bajada del error, lorem ipsum." />
                    
                    <form className="lanaForm"> 
                        <fieldset>
                            <legend>Ingresá los siguientes datos</legend>
                            <FormRow>
                                <InputGroup className="grid-25-75">
                                    <FormCol>
                                        <Label
                                            text="Tipo de documento"/>
                                        <Select>
                                            <option value="dni">DNI</option>
                                            <option value="pasaporte">Pasaporte</option>
                                        </Select>
                                    </FormCol>
                                    <FormCol>
                                        <Label
                                            text="Número de documento"/>
                                        <Input
                                            type="text"
                                            placeholder="33-"
                                            description="Descripcion"/>
                                    </FormCol>
                                </InputGroup>  
                            </FormRow>   
                            <FormRow>
                                <FormCol>                              
                                    <Label
                                        text="Número de tarjeta Club LA NACION"
                                        labelIcon="icon-info"/>
                                    <InputGroup className="state--no-wrap">
                                        <Input
                                            type="text"
                                            placeholder="33"
                                            description="Descripcion"
                                            disabled/>
                                        <Input
                                            type="text"
                                            placeholder="_ _ _ _ _ _ _ _ _ _"
                                            description="Descripcion"/>
                                        <Input
                                            type="text"
                                            placeholder="_ _"/>  
                                    </InputGroup>  
                                </FormCol>                             
                            </FormRow>

                            <FormRow>
                                <Label
                                    text="Número de documento"/>
                                <Input
                                    type="text"
                                    placeholder="33-"
                                    description="Descripcion"
                                    leftIcon="icon-info"
                                    rightIcon="icon-info"
                                    funIconDer= {()=>{console.log("sdfsdf")}}/>
                            </FormRow>
                        </fieldset>
                        <FormRow>
                            <Button text="Vincular tarjeta">Vincular tarjeta</Button>
                        </FormRow>
                        <FormRow>
                            <FormCol>
                                <CheckInput>Hola</CheckInput>
                            </FormCol>
                        </FormRow>
                        <FormRow>
                            <InputGroup>
                                <FormCol>
                                    <ItemBox
                                        input = {<CheckInput>Hola</CheckInput>}
                                        link = {<a href="#">holaa</a>}
                                        text = {"oasdkaos iasd iasd jiasd jiasd jai"}/>
                                </FormCol>
                                <FormCol>
                                    <ItemBox
                                        input = {<CheckInput>Hola</CheckInput>}
                                        link = {<a href="#">holaa</a>}
                                        text = {"oasdkaos iasd iasd jiasd jiasd jai"}/>
                                </FormCol>
                            </InputGroup>
                        </FormRow>
                    </form>
                       
                    <Promo 
                        descrip= { <p><strong>¿No recordás el número de la tarjeta Club LA NACION?</strong> Llamanos al <strong>5199-4700</strong> de Lunes a Viernes de 8a 20hs y Sábados y Domingos de 8 a 14hs.</p> }/>
                    

                    <p className="6xs"><strong>Protección de datos personales</strong><br/>
                        S.A. La Nación utilizará la información para los siguientes fines: a) identificación y autenticación, b) administración y gestión comercial, c) mejora del servicio, d) fines estadísticos, e) envío de notificaciones, promociones o publicidad, entre otros. Los datos personales no serán difundidos ni empleados para un fin distinto o incompatible al tenido en cuenta al ser ingresados en la base. S.A. La Nación podrá emplear a otras compañías y/o personas físicas para llevar a cabo tareas o funciones en su nombre. Entre los ejemplos de ese tipo podemos mencionar el de enviar correo postal y electrónico, retirar información reiterativa de las listas de usuarios, analizar datos en forma estadística, etc. Dichas personas cuentan con acceso a la información personal necesaria para cumplir con sus tareas y funciones, pero no pueden utilizarla con fines distintos a los estipulados. Las bases de datos de S.A. La Nación se encuentran registradas en la Dirección Nacional de Protección de Datos Personales del Ministerio de Justicia y Derechos Humanos de la Presidencia de la Nación (República Argentina), en cumplimiento de lo dispuesto en el art. 3 de la Ley 25.326. El titular de los datos personales tiene la facultad de ejercer el derecho de acceso a los mismos en forma gratuita a intervalos no inferiores a 6 meses, salvo que se acredite un interés legítimo al efecto, conforme lo establecido en el art. 14, inc. 3 de la Ley 25.326. La DIRECCIÓN NACIONAL DE PROTECCIÓN DE DATOS PERSONALES, Órgano de Control de la Ley 25.326, tiene la atribución de atender las denuncias y reclamos que se interpongan con relación al incumplimiento de las normas sobre protección de datos personales.</p>

                </section>
            </div>
        </MiCuentaLayout>
       
     );
}
 
export default SolicitudBaja;