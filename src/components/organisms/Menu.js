import React from 'react';
import Link from '../atoms/Link';
import '../../static/scss/pages/_adq.scss';


const Menu  = () => {
    //const { type, active, text, value, id, name, size, mod, children } = props;
 
    return (        
        <nav>
            <dl className="4xs">
                <dt>Mi cuenta</dt>
                <dd><Link href="#">Mi usuario</Link></dd>
                <dd><Link href="#">Datos personales</Link></dd>
                <dt>Club LA NACION</dt>
                <dd><Link href="#">Vincular credencial</Link></dd>
                <dd><Link href="#">Mis credenciales</Link></dd>
                <dd><Link href="#">Mis beneficios</Link></dd>
                <dt>Mis suscripciones</dt>
                <dd><Link href="#">Ver suscripciones</Link></dd>
                <dd><Link href="#">Suspender por vacaciones</Link></dd>
                <dd><Link href="#">Cambiar domicilio de entrega</Link></dd>
                <dt>Mis reclamos</dt>
                <dd><Link href="#">De entrega</Link></dd>
                <dd><Link href="#">Tarjeta Club</Link></dd>
                <dt>Mis pagos</dt>
                <dd><Link href="#">Ver facturas</Link></dd>
                <dd><Link href="#">Pagos pendientes</Link></dd>
                <dd><Link href="#">Cambiar forma de pago</Link></dd>
            </dl>
            <dl className="--secondary">
                <dt>Mi actividad</dt>
                <dd><Link href="#">Newsletters</Link></dd>
                <dd><Link href="#">Mis comentarios</Link></dd>
            </dl>
        </nav>
    );
}


export default Menu;