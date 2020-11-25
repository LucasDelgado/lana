import React from 'react'
import Link from '../../components/com-link';

const ModMenu  = props => {
    //const { type, active, text, value, id, name, size, mod, children } = props;
 
    return (        
        <nav>
            <dl className="4xs">
                <dt>Mi cuenta</dt>
                <dd><Link link="#">Mi usuario</Link></dd>
                <dd><Link link="#">Datos personales</Link></dd>
                <dt>Club LA NACION</dt>
                <dd><Link link="vincular-credencial">Vincular credencial</Link></dd>
                <dd><Link link="#">Mis credenciales</Link></dd>
                <dd><Link link="#">Mis beneficios</Link></dd>
                <dt>Mis suscripciones</dt>
                <dd><Link link="#">Ver suscripciones</Link></dd>
                <dd><Link link="solicitud-de-baja">Suspender por vacaciones</Link></dd>
                <dd><Link link="#">Cambiar domicilio de entrega</Link></dd>
                <dt>Mis reclamos</dt>
                <dd><Link link="#">De entrega</Link></dd>
                <dd><Link link="#">Tarjeta Club</Link></dd>
                <dt>Mis pagos</dt>
                <dd><Link link="#">Ver facturas</Link></dd>
                <dd><Link link="#">Pagos pendientes</Link></dd>
                <dd><Link link="#">Cambiar forma de pago</Link></dd>
            </dl>
            <dl className="--secondary">
                <dt>Mi actividad</dt>
                <dd><Link link="#">Newsletters</Link></dd>
                <dd><Link link="#">Mis comentarios</Link></dd>
            </dl>
        </nav>
    )
}

export default ModMenu;




