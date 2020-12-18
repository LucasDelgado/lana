import React     from 'react';
import PropTypes from 'prop-types';
import Link      from './Link';


const Text = ({ href, className, linkText, target, children }) => {

    const textClass = `text ${className}` 
    const text      = ` ${linkText}`

    return(
        <>
            <span 
                className={textClass}
                dangerouslySetInnerHTML={{ __html: children }}
            >
            </span>
            { href &&  
                <Link 
                    text={text}
                    target={target}
                    href={href}
                />
            }
        </>
    );
}


Text.prototype = {
    href: PropTypes.string,
    className: PropTypes.string,
    linkText: PropTypes.string,
    target: PropTypes.string,
    children: PropTypes.string,
}


export default Text;