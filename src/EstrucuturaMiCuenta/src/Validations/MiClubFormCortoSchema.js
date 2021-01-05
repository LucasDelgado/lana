import * as Yup from 'yup';

const MiClubFormCortoSchema = Yup.object().shape({
    nroDoc: Yup.string()
        .matches('^[1-9][0-9]{6,7}$', "Ingrese un documento válido")
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
    // passport: /^[A-Za-z0-9]{6,10}$/,
    //Ingrese un documento valido
});

export default MiClubFormCortoSchema;