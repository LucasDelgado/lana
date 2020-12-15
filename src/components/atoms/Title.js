import React from "react";
import "../../static/scss/atoms/_title.scss";

const Title = ({ as, size, children }) => {
  const Element = as || "h4";
  const className = `com-title${` ${size}` || ``}`;

  return <Element className={className}>{children}</Element>;
};

export default Title;
