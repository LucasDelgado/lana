import React          from 'react';
import MiCuentaLayout from '../layouts/MiCuenta';
import Menu           from '../organisms/Menu';
import Breadcrumb     from '../molecules/Breadcrumb';
import Title          from '../atoms/Title';
import Toast          from '../molecules/Toast';
import Divider        from '../atoms/Divider';
import Card           from '../atoms/Card';
import Promo          from '../molecules/Promo';
import Text           from '../atoms/Title';



const VincularCredencial = ({ cardType }) => {
    return ( 
        
        <MiCuentaLayout>

            <div className="lay-sidebar">
                <aside>
                    <Menu />
                </aside>
                <section>
                    <section className="lay-strechted">

                        <Breadcrumb />

                        <div className="mod-title">
                            <Title tag="h1" size="xl">Vincular credencial</Title>
                        </div>

                    </section>

                    <section className="lay-small">

                        <Toast status="success" title="¡Felicitaciones!" text="Tu tarjeta está asociada a tu cuenta. A partir de ahora ya podés gestionar acá todos tus beneficios." />

                        <Card type={ cardType } cardNumber="111111-22222222-33"/>

                        { !(cardType === 'Black') && <Promo description="Potencia tu suscripción con más beneficios cambiandoté a <strong>Black</strong>." hrefLink="#" linkText="Más información." buttonText="Cambiar a Black" buttonMod="--secondary" /> }

                        <Divider />

                        <Text>Si tenés dudas o querés realizar una consulta comunicate al: <strong>5199-4740</strong></Text>
                    
                    </section>
                
                </section>
            </div>
        </MiCuentaLayout>
       
     );
}
 
export default VincularCredencial;