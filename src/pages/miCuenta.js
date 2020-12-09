import React from 'react';

import Promo from '../modules/promo';

import imgPromo from '../imagePromo.png';


const hola= {pepe:"<p>Dejanos tus datos y empezá a disfrutar de los beneficios. Completá el formulario o llamanos al 5199-4740</p> <a class='com-link'> pepepeeee </a> "}

const MiCuenta = (props) => {
    return ( 
        <>
            <div className="lay">
                <Promo 
                    title="Soy pepe"
                    imageUrl={imgPromo} 
                    descrip= { hola.pepe }/>
            </div>
        </>
     );
}
 
export default MiCuenta;