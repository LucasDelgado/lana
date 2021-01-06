import React from 'react';

const Input = (props) => {
    const {className, meta, leftIcon, rightIcon, type, name, id, placeholder, value, disabled, description, funcIconDer} = props;
    
    const _className = ()=>{
        let resultado=[];
        resultado.push("lanaForm__input");

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
            resultado.push("state--error rightIcon");
        }
        if(meta != undefined && !meta.error && meta.touched){
            resultado.push("state--success rightIcon");
        }
        
        return resultado.join(' ');
    }

    return ( 
        <div className={_className()}>
            <div className="lanaForm__input__box">
                {leftIcon && 
                    <i className={"lanaForm__input__leftIcon "+ leftIcon}></i> 
                }

                <input 
                    type={type}
                    name={name} 
                    id={id}
                    value={value}
                    placeholder={placeholder}
                    disabled={disabled}
                    {...props}/>

                {rightIcon && 
                    <i className={"lanaForm__input__rightIcon "+ rightIcon} { ...funcIconDer &&  { onClick: funcIconDer } } ></i> 
                }

                {meta != undefined  && meta.error &&  meta.touched  &&
                    <i className="lanaForm__input__rightIcon icon-error-warning"></i>
                }

                {meta != undefined && !meta.error && meta.touched &&
                    <i className="lanaForm__input__rightIcon icon-check-mark"></i>
                }

                {
                    meta != undefined  && meta.error && meta.touched  ?
                    <span className="lanaForm__input__box__descrip">{meta.error}</span>
                    :
                    <span className="lanaForm__input__box__descrip">{description}</span>
                }
            </div>
        </div>
    );
}
 
export default Input;