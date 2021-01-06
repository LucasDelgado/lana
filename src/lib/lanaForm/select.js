import React from 'react';

const Select = (props) => {
    const { children, name, id } = props;
    return (
        <select {...props} name={name} id={id} className="lanaForm__select">
            {children}
        </select>
    );
}

export default Select;