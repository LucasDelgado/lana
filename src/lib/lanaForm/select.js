import React from 'react';

const Select = ({children, name, id}) => {
    return ( 
        <select name={name} id={id} className="lanaForm__select">
            {children}
        </select>
     );
}
 
export default Select;