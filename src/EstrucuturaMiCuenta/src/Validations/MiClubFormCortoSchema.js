import * as Yup from 'yup';

const MiClubFormCortoSchema = Yup.object().shape({
    nroDoc: Yup.string()
        .min(7, "Ingrese al menos ${min} dígitos")
        .required('Required')
});

export default MiClubFormCortoSchema;