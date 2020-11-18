import React from 'react'
import ComInput from './com-input';

const ComLabel  = props => {
    const { type, active, text, value, id, name, size, mod, children } = props;
    //const _type = type || 'checkbox';
 
    return (        
        <label className={`com-label ${size || ''} ${mod || ''} ${type ? '--for' : ''} ${active ? '--active' : ''}`} htmlFor={id}>
            {
            type
                ? <ComInput
                    type={type} 
                    name={name}
                    id={id}
                    value={value} 
                    active={active}
                />
                : ( <></> )
            }
            {
            text || children
                ? ( <>{text || ``} {children || ``}</> )
                : ( <></> )
            }
        </label>
    )
}

export default ComLabel;