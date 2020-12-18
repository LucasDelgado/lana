import React from 'react'
import Link from '../atoms/Link';
import Title from '../atoms/Title';
import '../../static/scss/pages/_adq.scss';


const Footer  = () => {
    //const { title, text, status } = props;

    return (        
        <footer className="footer">
        <div className="lay">
          <Title size="2xs">Ayuda:</Title>
          <ul className="com-list --inline">
            <li><Link href="#" text="Preguntas frecuentes"/></li>
            <li><Link href="#" text="Reglamento de participación"/></li>
            <li><Link href="#" text="Términos y condiciones generales"/></li>
            <li><Link href="#" text="Términos y condiciones de Acceso Digital"/></li>
            <li><Link href="#" text="Políticas de privacidad"/></li>
          </ul>
        </div>
      </footer>
    )
}

export default Footer;




