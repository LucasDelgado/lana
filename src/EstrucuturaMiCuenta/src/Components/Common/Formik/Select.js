import React from 'react';
import { useField } from 'formik';
import Select from '../../../../../lib/lanaForm/select';

const SelectFormik = (props) => {
    const [field, meta, helpers] = useField(props);
    return (
        <>
            <Select {...props} {...field} meta={meta}>
                {props.children}
            </Select>
        </>
    )
}

export default SelectFormik;