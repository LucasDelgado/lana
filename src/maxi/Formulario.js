import React from 'react'
import MiCuentaLayout from '../businessLayout/miCuentaLayout'
import { useField, Form, FormikProps, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Input from '../lib/lanaForm/input';
import Label from '../lib/lanaForm/label';
import FormRow from '../lib/lanaForm/formRow';

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


const MyTextField = (props) => {
    const [field, meta, helpers] = useField(props);
    console.log(field)
    return (
        <>
            <Input description="A description" {...field} {...props} meta={meta} />
        </>
    );
};


function Formulario() {

    return (
        <MiCuentaLayout>
            <Formik
                validationSchema={SignupSchema}
                initialValues={{
                    email: 'unMailCualquiera@gmail.com',
                    firstName: 'maxi',
                    lastName: 'asdasdasdas',
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
                        <FormRow>
                            <Label text={"First Name"}></Label>
                            <MyTextField name="firstName" type="text" />
                        </FormRow>
                        <FormRow>
                            <Label text={"Last Name"}></Label>
                            <MyTextField name="lastName" type="text" />
                        </FormRow>
                        <FormRow>
                            <Label text={"Email"}></Label>
                            <MyTextField name="email" type="email" />
                        </FormRow>
                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </MiCuentaLayout>
    )
}

export default Formulario
