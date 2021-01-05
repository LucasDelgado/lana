import React from 'react'
import { Form, Formik } from 'formik';
import MiClubFormCortoSchema from '../../../Validations/MiClubFormCortoSchema'

import Input from '../../Common/Formik/Input';
import Label from '../../../../../lib/lanaForm/label'
import InputGroup from '../../../../../lib/lanaForm/inputGroup'
import FormRow from '../../../../../lib/lanaForm/formRow';
import FormCol from '../../../../../lib/lanaForm/formCol';
import SelectFormik from '../../Common/Formik/Select';


const FormularioCorto = () => {
    return (
        <Formik
            validationSchema={MiClubFormCortoSchema}
            initialValues={{
                firstGroup: '',
                secondGroup: '',
                thirdGroup: ''
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
                                <Label text={"Tipo de documento"} />
                                <SelectFormik name="DNI">
                                    <option value="DNI">DNI</option>
                                    <option value="Cédula">Cédula</option>
                                    <option value="LE">LE</option>
                                </SelectFormik>
                            </FormCol>
                            <FormCol>
                                <Label text={"Número de documento"} />
                                <Input name="nroDoc" type="number" />
                            </FormCol>
                        </InputGroup>
                    </FormRow>
                    <FormRow>
                        <FormCol>
                            <Label text={"Número de tarjeta Club LA NACION"} />
                            <InputGroup>
                                <Input name="firstGroup" type="number" disabled/>
                                <Input name="secondGroup" type="number" />
                                <Input name="thirdGroup" type="number" />
                            </InputGroup>
                        </FormCol>
                    </FormRow>
                    <button type="submit">Submit</button>
                </Form>
            )}
        </Formik>
    )
}

export default FormularioCorto
