import React from "react";
import PropTypes from "prop-types";

const Icon = ({ additionalClass, name, mod, size, funcionIcono, style }) => {
  const className = `com-icon${` icon-${name}` || ``}${` ${mod}` || ``}${` ${size}` || ``}${` ${additionalClass}` || ``}`;

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
