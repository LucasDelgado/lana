import React from 'react';
import Link from './link';

//import '../../com-logo.css';

const ComLogo = props => {
    const { name, link, title, mod, size } = props;
    if (!name) return null;

    const _logo = <i className={`com-logo logo-${name} ${mod ? mod : ``} ${size ? size : ``}`} />;
    const component = link ? <Link link={link} title={title ? title : ``}>{_logo}</Link> : _logo;

    return component;

};
 
export default ComLogo;
