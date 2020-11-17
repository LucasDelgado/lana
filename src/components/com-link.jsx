import React from 'react';

const ComLink = props => {
    const { children, link, text, target, title, mod, size, style } = props;
    if (!link) return null;

    const isString = typeof children === 'string';
    const SIZE_CLASS = size ? ` ${size}` : '';
    const EXTRA_CLASS = mod ? ` ${mod}` : '';
    const _props = {
        //...(link && { href: link }),
        href: link,
        className: `com-${link ? 'link' : 'text'}${SIZE_CLASS}${EXTRA_CLASS}`,
        ...(link && { target }),
        ...(link && { rel: target === '_blank' && 'nonoopener noreferrer' }),
        ...(link && { title: title || text}), //Si no trae title le pone el texto, sino es children
        ...(isString && { dangerouslySetInnerHTML: { __html: children } }),
        ...(!isString && { children: children || text }),
        ...(style && { style })
    };

    //const tag = link ? 'a' : 'span';
    const tag = 'a';

    return React.createElement(tag, { ..._props });
};



export default ComLink;
