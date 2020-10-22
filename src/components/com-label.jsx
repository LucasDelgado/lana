import React from 'react'
import ComInput from './com-input';

const ComLabel  = props => {
    const { type, active, text, value, id, name, altClass } = props;
    const _type = type || 'checkbox';

    return (
        
        <label className={`com-label ${altClass || ''} ${active ? '--active' : ''}`} htmlFor={id}>
            <ComInput
                type={_type} 
                name={name}
                id={id}
                value={value} 
                active={active}
            />
            {
            text
                ? ( <>{text}</> )
                : ( <></> )
            }
        </label>
    )
}

export default ComLabel;