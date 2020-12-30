import React from 'react';

const RadioInput = ({ name, value, children}) => {
    return ( 
        <label class="lanaForm__radio">
            <input type="radio" name={name} value={value} />
            <span>{children}</span>
        </label>
    );
}
 
export default RadioInput;