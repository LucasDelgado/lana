import React from 'react';

import Button from '../components/com-button';
import Title from '../components/com-title';

const Daro = (props) => {
    return ( 
        <div id="daro">
            <h4>Link:</h4>
            <p><Button href="https://www.lanacion.com.ar" mod="--secondary" size="--xs" text="Secondary">Secondary xs</Button></p>
            <p><Button href="https://www.twitter.com/lanacion" target="_blank" icon="right" text="Twitter">Twitter</Button></p>
            <p><Button href="#" size="--xs" icon="right"/></p>
            <h4>Input:</h4>
            <p><Button value="Tertiary" type="submit" mod="--tertiary"/></p>
            <p><Button value="Borrar" type="reset"/></p>
            <h4>Button:</h4>
            <p><Button text="Special" mod="--special">Special</Button></p>
            <p><Button icon="right" text="Avanzar">Avanzar</Button></p>
            <p><Button icon="right"/></p>
            <h4>Título:</h4>
            <Title text="Título default"></Title>
            <Title text="Título" tag="h1"></Title>
            <Title text="Título" href="/nota" tag="h2" size="xxl"></Title>
            <Title text="Título" href="/nota" tag="div" size="xxl"></Title>

        </div>
     );
}
 
export default Daro;

