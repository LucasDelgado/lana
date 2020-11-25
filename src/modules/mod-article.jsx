import React from 'react'
import Button from '../components/com-button';
import Image from '../components/com-image';
import Title from '../components/com-title';
import Link from '../components/com-link';


const ModArticle  = props => {
    const { mod, title, buttonText, imageUrl } = props;
    if (!title) return null;

    return (        
        <div className={`mod-article --${mod || ``}`}>
            <div className="mod-description">
                <Title text={title} tag="h3" size="s"></Title>
                <p>Dejanos tus datos y empezá a disfrutar de los beneficios. <Link link="#">Completá el formulario</Link> o <Link link="#">llamanos al 5199-4740</Link></p>
                {
                buttonText
                ? <Button>{buttonText}</Button>
                    : ( <></> )
                }
            </div>
            {
            imageUrl
            ? <div className="mod-media"><Image src={imageUrl} alt={title} /></div>
                : ( <></> )
            }
        </div>
    )
}

export default ModArticle;
