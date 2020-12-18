import React     from "react";
import PropTypes from 'prop-types';
import "../../static/scss/atoms/_link.scss";


const Link = ({ children, href, text, target, title, mod, size }) => {
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
      dangerouslySetInnerHTML={{ __html: content }}
    ></a>
  );
};


Link.propTypes = {
  children: PropTypes.string,
  href: PropTypes.string,
  text: PropTypes.string,
  target: PropTypes.string,
  title: PropTypes.string,
  mod: PropTypes.string,
  size: PropTypes.string,
  item: PropTypes.element,
}


export default Link;
