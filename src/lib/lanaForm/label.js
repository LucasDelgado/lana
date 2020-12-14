import React from 'react';

const Label = ({labelIcon, text}) => {
    return ( 
        <label className="lanaForm__label">
            {text}     
            {labelIcon && 
                <i class={labelIcon}></i> 
            } 
        </label>
    );
}
 
export default Label;