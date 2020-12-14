import React from 'react';


const Button = ({as, children, className, type, href, onClick}) => {

    let Element = as || 'button';

    Element !== "input" ?   
                        Element = <Element className={className} href={href} onClick={onClick}>{children}</Element>
                        :
                        Element = <Element className={className} type={type ? type : "submit"} value={children} onClick={onClick}/>


    return ( 
        <>
            {Element}
        </>
    );
}
 
export default Button;