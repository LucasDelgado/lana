import React from 'react'
import MiCuentaLayout from '../../../businessLayout/miCuentaLayout'
import FormularioCorto from '../Components/Features/MiClub/FormularioCorto'
import FormularioLargo from '../Components/Features/MiClub/FormularioLargo';
import useFormCorto from '../Hooks/UseFormCorto';

const MiClub = props => {
    const [dataClub, errorClub, isLoading] = useFormCorto();
    console.log('object', [dataClub, errorClub, isLoading])
    return (
        <MiCuentaLayout>
            {/* <FormularioCorto></FormularioCorto> */}
            <FormularioLargo></FormularioLargo>
        </MiCuentaLayout>
    )
}

export default MiClub
