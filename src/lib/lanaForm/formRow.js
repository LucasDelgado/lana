import React from 'react';

const  FormRow = ({children, align}) => {
    return ( 
        <div className={`lanaForm__row ${align ? 'state--'+align : ''}`}>
            {children}
        </div>
     );
}
 
export default  FormRow;