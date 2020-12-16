import React from 'react';

const Input = ({className, leftIcon, type, name, id, placeholder, value, onChange, disabled, description}) => {

    const _className = ()=>{
        let resultado=[];
        resultado.push("lanaForm__input");

        if(className){
            resultado.push(className);
        }
        if(leftIcon){
            resultado.push("leftIcon");
        }
        return resultado.join(' ');
    }

    return ( 
        <div className={_className()}>
            <div className="lanaForm__input__box">
                {leftIcon && 
                    <i class={leftIcon}></i> 
                }
                <input 
                    type={type}
                    name={name} 
                    id={id}
                    value={value}
                    placeholder={placeholder}
                    onChange={onChange}
                    disabled={disabled}/>

                { description &&
                    <span className="lanaForm__input__box__descrip">{description}</span>
                }
            </div>
        </div>
    );
}
 
export default Input;