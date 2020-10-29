import React from 'react'

const ComTexarea  = props => {
    const { id, altClass, children } = props;

    return (
        
        <textarea className={`com-textarea ${altClass || ''}`}></textarea>
    )
}

export default ComTexarea;