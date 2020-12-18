import React          from 'react';
import MiCuentaLayout from '../layouts/MiCuenta';
import Menu           from '../organisms/Menu';
import Breadcrumb     from '../molecules/Breadcrumb';
import Title          from '../atoms/Title';
import Toast          from '../molecules/Toast';
import CallbackList from '../molecules/CallbackList';


const DesvincularCredencial = () => {
    return ( 
        
        <MiCuentaLayout>

            <div className="lay-sidebar">

                <aside>
                    <Menu />
                </aside>

                <section>

                    <section className="lay-strechted">

                        <Breadcrumb href="#" text="Vincular credencial" />

                        <div className="mod-title">
                            <Title tag="h1" size="xl">Desvincular credencial</Title>
                        </div>

                    </section>
                
                    <section className="lay-small">

                        <Toast status="alert" title="Estás por desvincular una tarjeta y perderás estos beneficios" />

                        <Title size="s">Beneficios de tarjeta Club LA NACION Classic: </Title>

                        <CallbackList 
                            title="Acceso Digital" 
                            description="En caso de querer vincular la tarjeta a otra cuenta deben pasar 48hs hábiles para volver a tener Acceso Digital."
                            listText={["Acceso ilimitado a LA NACION", "Acceso a Edición impresa en PDF"]}
                            href1="#"
                            href2="#"
                            modButton1="--primary"
                            modButton2="--secondary"
                            textButton1="Desvincular"
                            textButton2="Mantener beneficios"
                        />

                    </section>

                </section>

            </div>
        </MiCuentaLayout>
       
     );
}

 
export default DesvincularCredencial;