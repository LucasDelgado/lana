import React     from 'react';
import PropTypes from 'prop-types';
import '../../static/scss/atoms/_paragraph.scss';


const Paragraph = ({ children }) => <p className="paragraph">{children}</p>


Paragraph.propTypes = {
    className: PropTypes.string,
    children: PropTypes.string,
}


export default Paragraph;