import React from 'react'
import Button from '../components/button';
import Image from '../components/image';
import Title from '../components/titles';


const Promo  = ( {title, imageUrl, descrip} ) => {

    return (        
        <div className="mod-promo">
            <div className="mod-promo__descrip">
                <Title as="h3" size="s">{title}</Title>
                {descrip}                
            </div>
            <div className="mod-promo__img">
                <Image src={imageUrl} alt={title} />
            </div>
        </div>
    )
}

export default Promo;



/*
const ModArticle  = props => {
    const { mod, title, buttonText, href, imageUrl } = props;
    if (!title) return null;

    return (        
        <div className={`mod-article --${mod || ``}`}>
            <div className="mod-description">
                <Title text={title} tag="h3" size="s"></Title>
                <p>Dejanos tus datos y empezá a disfrutar de los beneficios. <Link link="#">Completá el formulario</Link> o <Link link="#">llamanos al 5199-4740</Link></p>
                { buttonText && <Button href={href}>{buttonText}</Button> }
            </div>
            { imageUrl && <div className="mod-media"><Image src={imageUrl} alt={title} /></div> }
        </div>
    )
}

export default ModArticle;
*/