import React from 'react';

const ComLink = props => {
    const { children, link, text, target, title, classCondition, size, style } = props;

    const isString = typeof children === 'string';
    const SIZE_CLASS = size ? ` ${size}` : '';
    const EXTRA_CLASS = classCondition ? ` ${classCondition}` : '';
    // TODO: Evaluar si debe retornar un span cuando el componente no recibe link
    // TODO: Definir si el link debe ser una propiedad obligatoria
    const _props = {
        ...(link && { href: link }),
        ...(link && { rel: target === '_blank' && 'nonoopener noreferrer' }),
        ...(link && { target }),
        ...(link && { title }),
        ...(isString && { dangerouslySetInnerHTML: { __html: children } }),
        ...(!isString && { children: children || text }),
        ...(style && { style }),
        className: `com-${link ? 'link' : 'text'}${SIZE_CLASS}${EXTRA_CLASS}`
    };

    const tag = link ? 'a' : 'span';

    return React.createElement(tag, { ..._props });
};



export default ComLink;
