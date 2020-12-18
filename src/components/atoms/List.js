import React from 'react';
import PropTypes from 'prop-types';
import '../../static/scss/atoms/_list.scss';


const List = ({children}) => {
    return(
        <ul className="list">
            { children.map( item => 
                <li>{item}</li> ) }
        </ul>
    );
}


List.propTypes = {
    children: PropTypes.element,
}


export default List;