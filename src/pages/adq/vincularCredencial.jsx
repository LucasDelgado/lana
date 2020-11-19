import React from 'react';
import Title from '../../components/com-title';
import Label from '../../components/com-label';
import Input from '../../components/com-input';
import Button from '../../components/com-button';
import Link from '../../components/com-link';
import Icon from '../../components/com-icon';
import Image from '../../components/com-image';
import Menu from '../../components/mod-menu';
import Toast from '../../components/mod-toast';


const SolicitudBaja = (props) => {
    return ( 
        
        <>
            <div className="lay-sidebar">
                <aside>
                    <Menu />
                </aside>
                <section>
                    <nav className="breadcrumb">
                        <ol className="com-list --inline">
                            <li>Club LA NACION</li>
                        </ol>
                    </nav>

                    <div className="mod-title">
                        <Title text="Vincular credencial" tag="h1" size="xl"></Title>
                    </div>
                    
                    <Toast status="success" title="Información importante" text="Bajada del error, lorem ipsum." />
                    <Toast status="warning" title="Información importante" text="Bajada del error, lorem ipsum." />
                    <Toast status="info" title="Información importante" text="Bajada del error, lorem ipsum." />
                    <Toast status="alert" title="Información importante" text="Bajada del error, lorem ipsum." />
                    
                    
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
                </section>
            </div>
        </>
       
     );
}
 
export default SolicitudBaja;