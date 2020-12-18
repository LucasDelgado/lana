import React from "react";
import PropTypes from "prop-types";
import "../../static/scss/atoms/_divider.scss";

const Divider = ({ color, width }) => (
  <hr
    className="Divider"
    style={{ backgroundColor: color, width: width + "%" }}
  />
);

Divider.propTypes = {
  width: PropTypes.string,
  color: PropTypes.string,
};

Divider.defaultProps = {
  color: '#CCCCCC',
  width: '100',
}

export default Divider;
