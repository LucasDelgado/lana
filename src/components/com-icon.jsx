import React from 'react';
import Link from './com-link';

//import '../../com-icon.css';

const ComIcon = props => {
    const { name, link, title, mod, size } = props;
    if (!name) return null;

    const _icon = <i className={`com-icon icon-${name} ${mod ? mod : ``} ${size ? size : ``}`} />;
    const component = link ? <Link link={link} title={title ? title : ``}>{_icon}</Link> : _icon;

    return component;

};
 
export default ComIcon;
