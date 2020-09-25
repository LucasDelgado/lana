import React from 'react';
import PropTypes from 'prop-types';

/**
* Titulos
*/

const ComTitle = (props) => {
    const { tag, href, mod, text, size } = props;

    const _tag = tag || 'h4';
    //const _content = href ? <a href={href} title={text}>{text}</a> : text;
    const _content = href ? <a href={href} title={text}>{text} link en {_tag}</a> : `${text} en ${_tag}`;
    const className = `com-title ${mod || ``} ${size || ``}`;

    const component = React.createElement(_tag, {className}, _content);
    return component;
}

export default ComTitle;
