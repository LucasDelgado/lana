import React from 'react';

import Button from '../components/buttons'

const Lucas = (props) => {
    return ( 
        <div>
            <h1>Hola soy el Lucas pero ahora estoy nuevo</h1>
            <Button as="a" className="primary" onClick={ ()=>{console.log('hola')} } >hola soy el boton</Button>
        </div>
     );
}
 
export default Lucas;