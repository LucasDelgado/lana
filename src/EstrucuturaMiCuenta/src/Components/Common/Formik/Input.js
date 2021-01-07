import React from 'react';
import { useField } from 'formik';
import Input from '../../../../../lib/lanaForm/input';

const InputFormik = (props) => {
    const [field, meta, helpers] = useField(props);

    return (
        <Input {...field} {...props} meta={meta} />
    );
    //ver si el meta . errors puede ser pasado como una prop y no todo el obj para simplificar el input de lana
};

export default InputFormik;