import React     from 'react';
import PropTypes from 'prop-types';
import Title     from '../atoms/Title';
import List      from '../atoms/List';
import Button    from '../molecules/Button';
import Paragraph from '../atoms/Paragraph';
import '../../static/scss/molecules/_callback-list.scss';


const CallbackList = ({ title, listText, description, textButton1, textButton2, modButton1, modButton2, href1, href2 }) => {
    return (
        <div className="callback-list">
            <Title size="s">{title}</Title>
            { description && <List>{listText}</List> }
            <Paragraph>{description}</Paragraph>
            { href1 && <Button href={href1} mod={modButton1} label={textButton1} /> }
            { href2 && <Button href={href2} mod={modButton2} label={textButton2} /> }
        </div>
    );
}


CallbackList.propTypes = {
    title: PropTypes.string,
    listText: PropTypes.array,
    description: PropTypes.string,
    href1: PropTypes.string,
    href2: PropTypes.string,
    textButton1: PropTypes.string,
    textButton2: PropTypes.string,
    modButton1: PropTypes.string,
    modButton2: PropTypes.string,
}


export default CallbackList;