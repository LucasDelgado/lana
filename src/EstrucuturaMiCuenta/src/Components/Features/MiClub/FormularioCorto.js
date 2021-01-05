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
                nroDoc: '',
                credencial1: 639130,
                credencial2: '',
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
                                <Label text={"Tipo de documento"} />
                                <SelectFormik name="tipoDoc">
                                    <option value="DNI" selected>D.N.I.</option>
                                    <option value="PAS">PAS.</option>
                                    <option value="LC">L.C.</option>
                                    <option value="LE">L.E.</option>
                                    <option value="CI">C.I.</option>
                                </SelectFormik>
                            </FormCol>
                            <FormCol>
                                <Label text={"Número de documento"} />
                                <Input name="nroDoc" type="text" />
                            </FormCol>
                        </InputGroup>
                    </FormRow>
                    <FormRow>
                        <InputGroup>
                            <FormCol>
                                <Label text={"Número de tarjeta Club LA NACION"} />
                                <InputGroup>
                                    <Input name="credencial1" type="text" disabled />
                                    <Input name="credencial2" type="text" />
                                    <Input name="credencial3" type="text" />
                                </InputGroup>
                            </FormCol>
                            <FormCol/>
                        </InputGroup>
                    </FormRow>
                    <button type="submit">Submit</button>
                </Form>
            )}
        </Formik>
    )
}

export default FormularioCorto
