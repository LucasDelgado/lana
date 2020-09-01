import React from 'react';

import button from './Button.module.css'


const Button = (props) => {

    let {as, children, className, type, href, onClick} = props;

    //definimos elemento que queremos dibujar mediante props as;
    let Element = as || 'button';

    Element !== "input"  ?   
                        Element = <Element className={`${button[className]}`} href={href} onClick={onClick}>{children}</Element>
                        :
                        Element = <Element className={`${button[className]}`} type={type ? type : "submit"} value={children} onClick={onClick}/>


    return ( 
        <>
            {Element}
        </>
    );
}
 
export default Button;