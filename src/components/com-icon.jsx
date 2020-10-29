import React from 'react';
//import '../../com-icon.css';

const ComIcon = props => {
    const { name, size } = props;

    if (!name) return null;
    return <i className={`com-icon icon-${name} ${size ? size : ``}`} />;
};
 
export default ComIcon;
