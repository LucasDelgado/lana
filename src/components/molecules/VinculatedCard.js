import React from 'react';
import PropTypes from 'prop-types';
import Title from '../atoms/Title';
import Link from '../atoms/Link';
import Card from '../atoms/Card';
import '../../static/scss/molecules/_vinculated-card.scss';


const VinculatedCard = ({type, cardNumber, href1, href2, linkText1, linkText2}) => {

    if (!type) return null;

    return(
        <div className="VinculatedCard">
            <Title tag="h3" size="s">Mi tarjeta: {type}</Title>
            <Card type={type} cardNumber={cardNumber} />
            { href1 && <Link href={href1} text={linkText1} /> }
            { href2 && <Link href={href2} text={linkText2} >{"Activar <strong>Acceso Digital</strong> sin cargo"}</Link> }
        </div> 
    );
}


VinculatedCard.propTypes = {
    type: PropTypes.string,
    cardNumber: PropTypes.string,
    href1: PropTypes.string,
    href2: PropTypes.string,
    linkText1: PropTypes.string,
    linkText2: PropTypes.string,
}


export default VinculatedCard;