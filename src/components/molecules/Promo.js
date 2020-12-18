import React     from 'react'
import PropTypes from 'prop-types';
import Image     from '../atoms/Image';
import Title     from '../atoms/Title';
import Button    from './Button';
import Link      from '../atoms/Link';
import Text      from '../atoms/Text';
import '../../static/scss/molecules/_promo.scss';


const Promo  = ( {title, imageUrl, description, buttonText, hrefButton, buttonMod, hrefLink, linkText } ) => {

    return (        
        <div className="mod-promo">
            <div className="mod-promo__descrip">
                { title && <Title size="s">{title}</Title> }

                { description && <Text href={hrefLink} linkText={linkText}>{description}</Text> }

                { buttonText && <Button href={hrefButton} mod={buttonMod} label={buttonText} /> }
            </div>

            { imageUrl && 

                <div className="mod-promo__img">
                    <Image src={imageUrl} alt={title} />
                </div> 
            }

        </div>
    )
}


Promo.propTypes = {
    title: PropTypes.string,
    imageUrl: PropTypes.string,
    description: PropTypes.string,
    buttonText: PropTypes.string,
    hrefLink: PropTypes.string,
    linkText: PropTypes.string,
    hrefButton: PropTypes.string,
    buttonMod: PropTypes.string,
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