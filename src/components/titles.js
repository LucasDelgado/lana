import React from 'react';

const Titles = ({as, size, children}) => {
    
    const Element = as || 'h4';
    const className = `com-title ${size || ``}`;

    return ( 
        <Element className ={className}>{children}</Element>
    );
}
 
export default Titles;