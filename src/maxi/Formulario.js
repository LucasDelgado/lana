import React from 'react'
import MiCuentaLayout from '../businessLayout/miCuentaLayout'
import { useField, Form, FormikProps, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import ComLabel from '../components/label';

const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(8, "Ingrese al menos ${min} letras")
        .max(20, "Ingrese hasta ${max} letras")
        .required('Required'),
    lastName: Yup.string()
        .min(8, "Ingrese al menos ${min} letras")
        .max(20, "Ingrese hasta ${max} letras")
        .required('Required'),
    email: Yup.string()
        .email('Mail inválido')
        .required('Required'),
});


const MyTextField = ({ label, ...props }) => {
    const [field, meta, helpers] = useField(props);

    return (
        <>
            <ComLabel text={label} {...field} {...props} />
            <ErrorMessage
                component="span"
                name={props.name}
                // className="hintError error"
                style={{color:"red"}}
            />

            {/* {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null} */}
        </>
    );
};


function Formulario() {

    return (
        <MiCuentaLayout>
            Formulario de ejemplo
            <Formik
                validationSchema={SignupSchema}
                initialValues={{
                    email: 'asdas@asd.com',
                    firstName: 'maxi',
                    lastName: 'asdasd',
                }}
                onSubmit={(values, actions) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        actions.setSubmitting(false);
                    }, 1000);
                }}
            >
                {(props) => (
                    <Form>
                        <MyTextField name="firstName" type="text" label="First Name" />
                        <MyTextField name="lastName" type="text" label="Last Name" />
                        <MyTextField name="email" type="email" label="Email" />
                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </MiCuentaLayout>
    )
}

export default Formulario
