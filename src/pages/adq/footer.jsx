import React from 'react'
import Link from '../../components/link';
import Title from '../../components/title';


const Footer  = props => {
    //const { title, text, status } = props;

    return (        
        <footer className="footer">
        <div className="lay">
          <Title text="Ayuda:" size="xxs"/>
          <ul className="com-list --inline">
            <li><Link link="#" text="Preguntas frecuentes"/></li>
            <li><Link link="#" text="Reglamento de participación"/></li>
            <li><Link link="#" text="Términos y condiciones generales"/></li>
            <li><Link link="#" text="Términos y condiciones de Acceso Digital"/></li>
            <li><Link link="#" text="Políticas de privacidad"/></li>
          </ul>
        </div>
      </footer>
    )
}

export default Footer;




