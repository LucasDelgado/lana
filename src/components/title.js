import React from 'react';

const Title = ({as, size, children}) => {
    
    const Element = as || 'h4';
    const className = `com-title ${size || ``}`;

    return ( 
        <Element className ={className}>{children}</Element>
    );
}
 
export default Title;



/*
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
*/