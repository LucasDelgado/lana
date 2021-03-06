import React from 'react'
import ComInput from './input';

const ComLabel  = props => {
    const { type, active, text, value, id, name, size, mod, children } = props;
    //const _type = type || 'checkbox';
 
    return (        
        <label className={`com-label ${size || '4xs'} ${mod || ''} ${type ? '--for' : ''} ${active ? '--active' : ''}`} htmlFor={id}>
            {
            type &&
                 <ComInput
                    type={type} 
                    name={name}
                    id={id}
                    value={value} 
                    active={active}
                />
            }
            
            {
            text &&
                ( <>{text}</> )
            }
            
            {
            children && 
                ( <>{children}</> )
            }
        </label>
    )
}

export default ComLabel;