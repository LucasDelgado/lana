import React from 'react'

const ComInput  = props => {
    const { type, name, value, placeholder, onChange, id, active, altClass } = props;
    
    return (
        <input 
            type={type}
            name={name} 
            id={id}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            className={`com-input ${altClass || ''} ${active ? '--active' : ''}`}
        />

    )
}

export default ComInput;