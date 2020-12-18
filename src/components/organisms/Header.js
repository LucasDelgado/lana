import React from 'react'
import Link from '../atoms/Link';
import Logo from '../atoms/Logo';
import Image from '../atoms/Image';
import '../../static/scss/pages/_adq.scss';


const Header  = () => {

    return (        
        <header className="header">
          <div className="lay">
            <div className="left">
              <Logo name="la-nacion" href="#" mod="--color" title="LA NACION"/>
            </div>
            <div className="right 4xs">
              <div>
                <Image href="#" src="https://via.placeholder.com/32" alt="Nombre usuario"/>
                <div>
                  <Link href="#" text="mail@lanacion.com.ar" />
                  <span className="com-text 5xs">Estado de usuario</span>
                </div>
              </div>
              <ul className="com-list --inline">
                <li><Link href="#" text="Salir"/></li>
                <li><Link href="#" text="Ayuda"/></li>
              </ul>
            </div>
          </div>
        </header>
    )
}

export default Header;




