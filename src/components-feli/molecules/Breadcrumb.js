import React from "react";
import PropTypes from "prop-types";
import Link from "../atoms/Link";
import "../../static/scss/molecules/_breadcrumb.scss";
import "../../static/scss/atoms/_list.scss";

const Breadcrumb = ({ href, text, markup, target }) => (
  <nav className="breadcrumb">
    <ol className="com-list --inline">
      <li>Club LA NACION</li>
      {href && (
        <li>
          <Link href={href} text={text} target={target}>
            {markup && markup}
          </Link>
        </li>
      )}
    </ol>
  </nav>
);

Breadcrumb.propTypes = {
  href: PropTypes.string,
  text: PropTypes.string,
};

export default Breadcrumb;
