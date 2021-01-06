import React from 'react'
import MiCuentaLayout from '../../../businessLayout/miCuentaLayout'
import FormularioCorto from '../Components/Features/MiClub/FormularioCorto'
import FormularioLargo from '../Components/Features/MiClub/FormularioLargo';
import useObtenerDatosClub from '../Hooks/UseObtenerDatosClub';

const MiClub = props => {

    const esCorto = (dataClub) => {
        return dataClub && dataClub.code === "1" && dataClub.response && dataClub.response.length === 1;
    }

    const esMedio = (dataClub) => {
        return dataClub && dataClub.code === "1" && dataClub.response && dataClub.response.length > 1;
    }

    const esLargo = (dataClub) => {
        return dataClub && dataClub.code === "2";
    }

    const [dataClub, errorClub, isLoading] = useObtenerDatosClub(2);
    console.log('object', [dataClub, errorClub, isLoading])
    return (
        <MiCuentaLayout>
            { esCorto (dataClub) &&
                <FormularioCorto></FormularioCorto>}
            { esMedio (dataClub) &&
                <FormularioCorto></FormularioCorto>}
            { esLargo (dataClub) &&
                <FormularioLargo></FormularioLargo>}
        </MiCuentaLayout>
    )
}

export default MiClub
