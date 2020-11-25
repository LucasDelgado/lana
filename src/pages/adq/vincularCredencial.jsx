import React from 'react';
import Title from '../../components/com-title';
import Menu from './menu';
import Toast from '../../modules/mod-toast';
import Article from '../../modules/mod-article';
import Breadcrumb from '../../modules/mod-breadcrumb';


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
                    
                    <Article title="¡Agregá Club LA NACION a tu suscripción!" buttonText="Vincular tarjeta" imageUrl="https://via.placeholder.com/180x140" />
                    <Article title="¡Agregá Club LA NACION a tu suscripción!" imageUrl="https://via.placeholder.com/180x140" />
                    <Article title="¡Agregá Club LA NACION a tu suscripción!" buttonText="Vincular tarjeta" />

                </section>
            </div>
        </>
       
     );
}
 
export default SolicitudBaja;