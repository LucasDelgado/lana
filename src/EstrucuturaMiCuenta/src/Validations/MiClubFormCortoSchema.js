import * as Yup from 'yup';

const MiClubFormCortoSchema = Yup.object().shape({
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

export default MiClubFormCortoSchema;