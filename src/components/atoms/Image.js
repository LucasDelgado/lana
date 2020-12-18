import React from 'react';
import Link from './Link';

const Image = ({ src, alt, mod, href, withLazy }) => {

    const loading   = withLazy ? 'lazy' : undefined;
    const className = `com-image${` ${mod}` || ''}`;
    const image     = `<img src=${src} loading=${loading} class="${className} alt=${alt || ''}" />`;

    return(
        <>
            { href ?
                <Link href={href} title={alt}>{image}</Link> :
                image
            }
        </>
    );
};

export default Image;