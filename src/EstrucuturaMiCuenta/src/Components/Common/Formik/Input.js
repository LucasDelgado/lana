import React from 'react';
import { useField } from 'formik';
import Input from '../../../../../lib/lanaForm/input';

const InputFormik = (props) => {
    const [field, meta, helpers] = useField(props);
    /*  if (field.name == 'firstName'){
         console.log('-------' , field.name);
         console.log('   touched', meta.touched);
         console.log('   error', meta.error);
         console.log('   meta', meta)
         console.log('   field', field)
         console.log('-------');
     } */

    return (
        <Input {...field} description="holaaaa" {...props} meta={meta} />
    );
    //ver si el meta . errors puede ser pasado como una prop y no todo el obj para simplificar el input de lana
};

export default InputFormik;