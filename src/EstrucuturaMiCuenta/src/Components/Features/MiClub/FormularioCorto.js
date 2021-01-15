import React from 'react'
import { Form, Formik } from 'formik';

import Input from '../../Common/Formik/Input';
import Label from '../../../../../lib/lanaForm/label'
import InputGroup from '../../../../../lib/lanaForm/inputGroup'
import FormRow from '../../../../../lib/lanaForm/formRow';
import FormCol from '../../../../../lib/lanaForm/formCol';
import MiClubFormCortoSchema from '../../../Validations/MiClubFormCortoSchema';


const FormularioCorto = (props) => {
    const { esIntermedio } = props;
    const initialCredencial = (esIntermedio ? '' : 'XXXXXXXX');

    return (
        <Formik
            validationSchema={MiClubFormCortoSchema}
            initialValues={{
                credencial1: 639130,
                credencial2: initialCredencial,
                credencial3: '',
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
                        <InputGroup>
                            <FormCol>
                                <Label text={"Número de tarjeta Club LA NACION"} />
                                <InputGroup>
                                    <Input name="credencial1" type="text" disabled />
                                    {esIntermedio ?
                                        <Input name="credencial2" type="number" />
                                        :
                                        <Input name="credencial2" type="text" disabled />
                                    }
                                    <Input name="credencial3" type="number" />
                                </InputGroup>
                            </FormCol>
                            <FormCol />
                        </InputGroup>
                    </FormRow>
                    <button type="submit">Submit</button>
                </Form>
            )}
        </Formik>
    )
}

export default FormularioCorto
