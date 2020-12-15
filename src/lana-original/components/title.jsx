import React from 'react';
import Link from './link';

const ComTitle = (props) => {
    const { tag, link, mod, text, size } = props;
    if (!text) return null;

    const _tag = tag || 'h4';
    const _content = link ? <Link link={link} title={text}>{text}</Link> : text;

    const className = `com-title ${mod || ``} ${size || ``}`;

    const component = React.createElement(_tag, {className}, _content);
    return component;
}
 
export default ComTitle;