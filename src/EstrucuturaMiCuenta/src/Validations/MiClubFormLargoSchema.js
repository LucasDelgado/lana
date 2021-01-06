import * as Yup from 'yup';

const MiClubFormLargoSchema = Yup.object().shape({
    tipoDoc: Yup.string()
        .required('Requerido'),
    nroDoc: Yup.string()
        .when('tipoDoc',{
            is: (val) => val === 'PAS',
            then: Yup.string().matches('^[A-Za-z0-9]{6,10}$', "Ingrese un pasaporte válido"),
            otherwise: Yup.string().matches('^[1-9][0-9]{6,7}$', "Ingrese un documento válido")
        })
        .required('Requerido'),
    credencial1: Yup.string()
        .matches('^[0-9]{6}$', 'Ingrese 6 dígitos')
        .required('Requerido'),
    credencial2: Yup.string()
        .matches('^[0-9X]{8}$', 'Ingrese 8 dígitos')
        .required('Requerido'),
    credencial3: Yup.string()
        .matches('^[0-9]{2}$', 'Ingrese 2 dígitos')
        .required('Requerido'),
});

export default MiClubFormLargoSchema;