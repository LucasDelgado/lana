import React from 'react'
import Button from '../components/com-button';
import Icon from '../components/com-icon';
import Title from '../components/com-title';


const ModToast  = props => {
    const { title, text, status } = props;
    if (!status) return null;

    return (        
        <div className={`mod-toast --${status || ``}`}>
            <Button icon="close" mod="--tertiary" title="Cerrar" />
            <Icon name="check-mark" />
            <Icon name="error-warning" />
            <Icon name="info" />
            <Icon name="alert" />
            <div className="mod-description">
                <Title tag="h3" size="s" text={title}></Title>
                { text && <span className="">{text}</span> }             
            </div>
        </div>
    )
}

export default ModToast;
