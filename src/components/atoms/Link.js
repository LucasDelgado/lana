import React from "react";
import "../../static/scss/atoms/_link.scss";

const Link = ({ children, href, text, target, title, mod, size, style }) => {
  const className = `com-${href ? "link" : "text"}${size ? ` ${size}` : ""}${
    mod ? ` ${mod}` : ""
  }`;
  const content = children || text;

  return (
    <a
      className={className}
      href={href}
      target={target}
      rel={target === "_blank" && "nonoopener noreferrer"}
      title={title || text}
      style={style}
      dangerouslySetInnerHTML={{ __html: content }}
    ></a>
  );
};

export default Link;
