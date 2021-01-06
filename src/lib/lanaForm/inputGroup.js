import React from 'react';

const InputGroup = ({children, className}) => {

    return ( 
        <div className={"lanaForm__container " + className && className}>
            {children}
        </div>
     );
}
 
export default InputGroup;