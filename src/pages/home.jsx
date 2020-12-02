import React from 'react';
import Promo from '../modules/promo';
import Link from '../components/link';
import imgPromo from '../imagePromo.png';

const Home = (props) => {
    return ( 
        <div class="lay">
            <h1>Indice</h1>
            <h3>Adquisición</h3>
            <h3>Club</h3>
            <h3>LN</h3>
            <h3>Storybook</h3>
            <img src={imgPromo} alt="Logo" />

            <Promo 
                title="Soy pepe"
                imageUrl={imgPromo}
                descrip= { <p>Dejanos tus datos y empezá a disfrutar de los beneficios. <Link link="#">Completá el formulario</Link> o <Link link="#">llamanos al 5199-4740</Link></p> }/>
        </div>
     );
}
 
export default Home;