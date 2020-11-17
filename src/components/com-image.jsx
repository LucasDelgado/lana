import React from 'react';
import Link from './com-link';

//import '../../com-image.css';

const ComImage = props => {
    const { src, alt, mod, link, withLazy = true } = props;
    if (!src) return null;

    const _image = <img src={src} loading={withLazy ? 'lazy' : undefined} className={`com-image ${mod || ''}`} alt={alt || ''} />
    const component = link ? <Link link={link} title={alt ? alt : ``}>{_image}</Link> : _image;

    return component;
};

export default ComImage;