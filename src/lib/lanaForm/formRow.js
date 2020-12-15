import React from 'react';

const  FormRow = ({children, align}) => {
    let className = align ? "state--" + align : ""; 
    return ( 
        <div className={`lanaForm__row ${align && 'state--' + align }`}>
            {children}
        </div>
     );
}
 
export default  FormRow;