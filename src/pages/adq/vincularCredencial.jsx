import React from 'react';

import MiCuentaLayout from '../../businessLayout/miCuentaLayout';

import Title from '../../components/title';
import Menu from '../../modules/adq/menu';
import Breadcrumb from '../../modules/breadcrumb';

import Promo from '../../modules/adq/promo';

import imgPromo from '../../imagePromo.png';
import imgPromo2 from '../../image1.png';
import Link  from '../../components/link';
import Button from '../../components-feli/molecules/Button'
import Divider from '../../components-feli/atoms/Divider'


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
                    
                    <Promo 
                        title="¿Tenés Club LA NACION?"
                        descrip= { <>
                                        <p> Vinculá tu tarjeta Club LA NACION con tu cuenta para gestionar desde acá tu suscripciones. </p> <br/>
                                        <Button label="Vincular Tarjeta">Vincular Tarjeta</Button>
                                    </>
                        }/>
                    <Divider width="100" color= "#CCCCCC"/>
                    <Promo 
                        title="¡Agregá Club LA NACIÓN a tu suscripción!"
                        imageUrl={imgPromo2} 
                        descrip= { <p> Dejanos tus datos y empezá a disfrutar de los beneficios. <Link link="#">Completá el formulario</Link> o llamanos al <Link link="#">5199-4740</Link>. </p> }/>

                    <Promo 
                        title="¡Suscribite ahora!"
                        imageUrl={imgPromo} 
                        descrip= { <p>Conocé los planes digitales de LA NACION. <br/> <Link link="#"> Más información</Link>.</p> }/>

                </section>
            </div>
        </MiCuentaLayout>
    );
}
 
export default SolicitudBaja;