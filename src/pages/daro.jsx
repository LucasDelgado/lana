import React from 'react';

import Button from '../components/com-button';
import Title from '../components/com-title';

const Daro = (props) => {
    return ( 
        <div class="daro">
            <h4>Link:</h4>
            <p><Button href="https://www.lanacion.com.ar" mod="--secondary" size="--xs" text="Secondary">Secondary xs</Button></p>
            <p><Button href="https://www.twitter.com/lanacion" target="_blank" icon="right" text="Twitter">Twitter</Button></p>
            <p><Button href="#" size="--xs" icon="play"/></p>
            <h4>Input:</h4>
            <p><Button value="Tertiary" type="submit" mod="--tertiary"/></p>
            <p><Button value="Borrar" type="reset"/></p>
            <h4>Button:</h4>
            <p><Button text="Special" mod="--special">Special</Button></p>
            <p><Button icon="arrow-right" text="Avanzar">Avanzar</Button></p>
            <p><Button icon="android"/></p>
            <h4>Título:</h4>
            <Title text="Título default"></Title>
            <Title text="Título" tag="h1"></Title>
            <Title text="Título" href="/nota" tag="h2" size="xxl"></Title>
            <Title text="Título" href="/nota" tag="div" size="xxl"></Title>
            <h4>Logos</h4>
            <p><i className="com-logo logo-bbc"></i></p>
            <p><i className="com-logo logo-brando"></i></p>
            <p><i className="com-logo logo-club"></i></p>
            <p><i className="com-logo logo-club-lanacion"></i></p>
            <p><i className="com-logo logo-hola"></i></p>
            <p><i className="com-logo logo-hola-argentina"></i></p>
            <p><i className="com-logo logo-jardin"></i></p>
            <p><i className="com-logo logo-la-nacion"></i></p>
            <p><i className="com-logo logo-living"></i></p>
            <p><i className="com-logo logo-ln"></i></p>
            <p><i className="com-logo logo-ln-mas"></i></p>
            <p><i className="com-logo logo-ln-placeholder"></i></p>
            <p><i className="com-logo logo-lugares"></i></p>
            <p><i className="com-logo logo-negocios"></i></p>
            <p><i className="com-logo logo-propiedades"></i></p>
            <p><i className="com-logo logo-ohlala"></i></p>
            <p><i className="com-logo logo-rolling"></i></p>
        </div>
     );
}
 
export default Daro;

