import React from 'react';

const Select = ({children, name, leftIcon, rightIcon, id, className, meta}) => {
    const _className = ()=>{
        let resultado=[];

        resultado.push("lanaForm__select");
        if(className){
            resultado.push(className);
        }
        if(leftIcon){
            resultado.push("leftIcon");
        }
        if(rightIcon){
            resultado.push("rightIcon");
        }
        if(meta != undefined && meta.error && meta.touched){
            resultado.push("state--error");
        }
        if(meta != undefined && !meta.error && meta.touched){
            resultado.push("state--success");
        }
        
        return resultado.join(' ');
    }

    return ( 
        <select name={name} id={id} className={_className()}>
            {children}
        </select>
     );
}
 
export default Select;