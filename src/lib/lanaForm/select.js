import React from 'react';

const Select = ({children, name, id, className, meta, props}) => {
    const _className = ()=>{
        let resultado=[];

        resultado.push("lanaForm__select");
        if(className){
            resultado.push(className);
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
        <select name={name} {...props} id={id} className={_className()}>
            {children}
        </select>
    );
}

export default Select;