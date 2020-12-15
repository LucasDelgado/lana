import React from "react";
import PropTypes from "prop-types";

const Icon = ({ additionalClass, name, link, title, mod, size, style }) => {
  const className = `com-icon icon-${name}${mod ? ` ${mod}` : ""}${size ? ` ${size}` : ""}${additionalClass ? ` ${additionalClass}`: ""}`;

  return <i className={className} style={style} />;
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string,
  title: PropTypes.string,
  mod: PropTypes.string,
  size: PropTypes.string,
};

export default Icon;
