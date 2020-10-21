import React from 'react';
//import '../../com-icon.css';

const ComIcon = props => {
    const { iconName, size } = props;

    if (!iconName) return null;
    return <i className={`com-icon icon-${iconName} ${size ? size : ``}`} />;
};
 
export default ComIcon;
