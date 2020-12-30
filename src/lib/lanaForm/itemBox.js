import React from 'react';

const ItemBox = ({input, text, link}) => {

    return ( 
        <div className="lanaForm__itemBox">
            <div className="lanaForm__itemBox__main">
                {input}
                {link && <div className="lanaForm__itemBox__main__link">{link}</div> }
            </div>
            {
                text &&
                <div className="lanaForm__itemBox__descrip">
                    {text}
                </div>
            }
        </div> 
     );
}
 
export default ItemBox;