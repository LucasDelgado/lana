import React from 'react';
import Title from '../../components/title';
import Menu from './menu';
import Toast from '../../modules/toast';
import Article from '../../modules/promo';
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
                        <Title text="Vincular credencial" tag="h1" size="xl"></Title>
                    </div>
                    
                    <Toast status="success" title="Información importante" text="Bajada del error, lorem ipsum." />
                    <Toast status="warning" title="Información importante" text="Bajada del error, lorem ipsum." />
                    <Toast status="info" title="Información importante" text="Bajada del error, lorem ipsum." />
                    <Toast status="alert" title="Información importante" text="Bajada del error, lorem ipsum." />
                    
                    <Article title="¡Agregá Club LA NACION a tu suscripción!" buttonText="Vincular tarjeta" href="/vincular-credencial-2" imageUrl="https://via.placeholder.com/180x140" />
                    <Article title="¡Agregá Club LA NACION a tu suscripción!" imageUrl="https://via.placeholder.com/180x140" />
                    <Article title="¡Agregá Club LA NACION a tu suscripción!" buttonText="Vincular tarjeta" href="/vincular-credencial-2" />
                    <Article title="¡Agregá Club LA NACION a tu suscripción!" />

                </section>
            </div>
        </>
       
     );
}
 
export default SolicitudBaja;