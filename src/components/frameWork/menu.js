import React from 'react';
import { useState  } from 'react';
import {Link} from "react-router-dom";

const Menu = (props) => {

    const [ open, setOpen ] = useState(true);

    const visible =  open ? 'nav-framework nav-framework--visible' : '';
    return ( 
        <div className={ `nav-framework ${visible}`}>
            <span onClick={ () => setOpen(!open) } >{open ? 'X' : ">"}</span>
            <p>MI CUENTA</p>
            <div className ="nav-framework__submenu">
                <Link to="/solicitud-de-baja">solicitud</Link> <br/>
                <Link to="vincular-credencial">Vincular Credencial 1</Link> <br/>
                <Link to="vincular-credencial-2">Vincular Credencial 2</Link> <br/>
            </div>
        </div>
     );
}
 
export default Menu;