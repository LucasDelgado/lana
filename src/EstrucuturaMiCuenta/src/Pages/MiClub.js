import React from 'react'
import MiCuentaLayout from '../../../businessLayout/miCuentaLayout'
import FormularioCorto from '../Components/Features/MiClub/FormularioCorto'
import FormularioLargo from '../Components/Features/MiClub/FormularioLargo';
import useObtenerDatosClub from '../Hooks/UseObtenerDatosClub';
import useObtenerRelacionClub from '../Hooks/useObtenerRelacionClub';


const MiClub = props => {
    
    const [dataRelacionClub, errorRelacionClub, isLoadingRelacion] = useObtenerRelacionClub(2);
    return (
        <MiCuentaLayout>
            { 
             dataRelacionClub && dataRelacionClub.response &&
             <h1>{JSON.stringify(dataRelacionClub.response)}</h1>
            }
        </MiCuentaLayout>
    )
}

export default MiClub
