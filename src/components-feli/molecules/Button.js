import React from "react";
import ConditionalWrapper from "../helpers/ConditionalWrapper";
import Icon from "../atoms/Icon";
import PropTypes from "prop-types";
import "../../static/scss/molecules/_button.scss";
const Button = ({ tag, href, mod, target, label, size, disabled, type, icon, onClick, iconSize, isFirstPositioned }) => {
  const className = `com-button${` ${mod}` || ""}${` ${size}` || ""}${ disabled ? " --disabled" : ""}`;
  const CustomTag = tag || "button";
  const iconMargin = isFirstPositioned
                      ? { marginRight: "8px" }
                      : { marginLeft: "8px" };
  return (
    <ConditionalWrapper
      condition={tag === "input"}
      wrapper={(children) => (
        <CustomTag
          className={className}
          type={type ? type : "submit"}
          value={children}
          onClick={onClick}
        />
      )}
      defaultWrapper={(children) => (
        <CustomTag
          className={className}
          { ...(tag === 'a') && { href: href }}
          target={target}
          { ...(tag === 'button') &&  {onClick: onClick} }
        >
          {children}
        </CustomTag>
      )}
    >
      {icon && isFirstPositioned && <Icon name={icon} size={iconSize} style={ label && iconMargin} />}
      {label}
      {icon && !isFirstPositioned && <Icon name={icon} size={iconSize} style={ label && iconMargin} />}
    </ConditionalWrapper>
  );
};
ConditionalWrapper.PropTypes = {
  label: PropTypes.string.isRequired,
  tag: PropTypes.string,
  href: PropTypes.string,
  mod: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.string,
  size: PropTypes.string,
  disabled: PropTypes.bool,
  iconSize: PropTypes.string,
  onClick: PropTypes.func,
  isFirstPositioned: PropTypes.bool,
};
export default Button;