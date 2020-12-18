import React from 'react';
import Link from './Link';

//import '../../com-logo.css';

const Logo = ({ name, href, title, mod, size}) => {

    const className = `com-logo${name ? ` logo-${name}` : ``}${mod ? ` ${mod}` : ``}${size ? ` ${size}` : ``}`;
    const logo = `<i className=${className} />`;

    return(
        <>
            { href ?
                <Link href={href} title={title}>{logo}</Link> :
                logo
            }
        </>
    );
};
 
export default Logo;
