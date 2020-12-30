import React from 'react'

const ComInput  = props => {
    const { type, name, value, placeholder, onChange, id, disabled, active, mod } = props;
    
    return (
        <input 
            type={type}
            name={name} 
            id={id}
            value={value}
            placeholder={placeholder}   
            onChange={onChange}
            disabled={disabled}
            {...props}
            className={`com-input ${mod || ''} ${active ? '--active' : ''} ${disabled ? '--disabled' : ''}`}
        />

    )
}

export default ComInput;