import React from 'react';

const CheckInput = ({children, value}) => {
    return ( 
        <label class="lanaForm__checkbox">
            <input type="checkbox" value={value} />
            <span>{children}</span>
        </label>
     );
}
 
export default CheckInput;