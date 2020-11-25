import React from 'react'
import Link from '../../components/com-link';
import Logo from '../../components/com-logo';
import Image from '../../components/com-image';


const Header  = props => {
    //const { title, text, status } = props;

    return (        
        <header className="header">
          <div className="lay">
            <div className="left">
              <Logo name="la-nacion" link="#" mod="--color" title="LA NACION"/>
            </div>
            <div className="right 4xs">
              <div>
                <Image src="https://via.placeholder.com/32" alt="Nombre usuario"/>
                <div>
                  <Link link="#">mail@lanacion.com.ar</Link>
                  <span className="com-text 5xs">Estado de usuario</span>
                </div>
              </div>
              <ul className="com-list --inline">
                <li><Link link="#" text="Salir"/></li>
                <li><Link link="#" text="Ayuda"/></li>
              </ul>
            </div>
          </div>
        </header>
    )
}

export default Header;




