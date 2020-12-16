import React from 'react';

const InputGroup = ({children, widthInputs, mobileAllWidth}) => {
    let _renderStyle = (mobileAllWidth, widthInputs)=>{
        let result={"gridTemplateColumns": widthInputs};
        if(mobileAllWidth && window.innerWidth < 768){
            result = null;
        }
        return result;
    }

    return ( 
        <div className="lanaForm__container" style={ _renderStyle(mobileAllWidth, widthInputs) }>
            {children}
        </div>
     );
}
 
export default InputGroup;