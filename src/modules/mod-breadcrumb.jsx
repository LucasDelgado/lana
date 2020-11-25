import React from 'react'
import Link from '../components/com-link';


const ModBreadcrumb  = props => {
    //const { mod, title, buttonText, imageUrl } = props;

    return (        
        <nav className="breadcrumb">
            <ol className="com-list --inline">
                <li>Club LA NACION</li>
                <li><Link link="#">Ver suscripciones</Link></li>
            </ol>
        </nav>
    )
}

export default ModBreadcrumb;
