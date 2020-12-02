import React from 'react';

import Promo from '../modules/promo';
import Link from '../components/link';

import imgPromo from '../imagePromo.png';


const MiCuenta = (props) => {
    return ( 
        <>
            <div className="lay">
                <Promo 
                    title="Soy pepe"
                    imageUrl={imgPromo}
                    descrip= { <p>Dejanos tus datos y empezá a disfrutar de los beneficios. <Link link="#">Completá el formulario</Link> o <Link link="#">llamanos al 5199-4740</Link></p> }/>
            </div>
        </>
     );
}
 
export default MiCuenta;