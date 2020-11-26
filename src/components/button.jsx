import React from 'react';
import ComIcon from './icon';

const getTagProps = (tag, props) => {
    const { type, value, href, target, title, disabled } = props;

    const propsByTag = {
        a: { href, target, title },
        input: { type: type || 'button', value, title },
        button: { type: type || 'button', title, disabled }
    };

    return propsByTag[tag];

};

const ComButton = props => {
    const { children, href, value, mod, icon, size, disabled } = props;
    const className = `com-button ${mod || ``} ${size || ``} ${disabled ? '--disabled' : ''}`;

    const tag = (href && 'a') || (value && 'input') || 'button';

    const _props = {
        className,
        ...getTagProps(tag, props)
    };

    const _children = children && <span>{children}</span>;
    const _icon = icon && <ComIcon name={icon}/>;

    const content = tag !== 'input' ? [_children, _icon] : null;

    const component = React.createElement(tag, { ..._props }, content);

    return _children || _icon || value ? component : null;

};

export default ComButton;




