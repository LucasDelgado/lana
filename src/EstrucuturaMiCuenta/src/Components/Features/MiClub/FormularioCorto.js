import React from 'react'
import { Form, Formik } from 'formik';
import MiClubFormCortoSchema from '../../../Validations/MiClubFormCortoSchema'

import Input from '../../Common/Formik/Input';
import Label from '../../../../../lib/lanaForm/label'
import FormRow from '../../../../../lib/lanaForm/formRow';


const FormularioCorto = () => {
    return (
        <Formik
            validationSchema={MiClubFormCortoSchema}
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
                    <FormRow>
                        <Label text={"First Name"}></Label>
                        <Input name="firstName" type="text" />
                    </FormRow>
                    <FormRow>
                        <Label text={"Last Name"}></Label>
                        <Input name="lastName" type="text" />
                    </FormRow>
                    <FormRow>
                        <Label text={"Email"}></Label>
                        <Input name="email" type="email" />
                    </FormRow>
                    <button type="submit">Submit</button>
                </Form>
            )}
        </Formik>
    )
}

export default FormularioCorto
