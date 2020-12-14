import React from 'react';

const InputGroup = ({children, widthInputs}) => {
    return ( 
        <div className="lanaForm__group" style={ {gridTemplateColumns: widthInputs} }>
            {children}
        </div>
     );
}
 
export default InputGroup;