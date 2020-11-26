import React from 'react'

const ComTexarea  = props => {
    const { id, mod, children } = props;

    return (
        <textarea className={`com-textarea ${mod || ''}`}></textarea>
    )
}

export default ComTexarea;