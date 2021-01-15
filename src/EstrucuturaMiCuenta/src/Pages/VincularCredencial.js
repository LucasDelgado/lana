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
    let infoCred = dataClub ? dataClub.response : null;
    return (
        <MiCuentaLayout>
            { (errorClub) &&
                <h2>Ocurrio un error;</h2>
            }
            { esLargo(dataClub) &&
                <FormularioLargo />
            }
            {(esCorto(dataClub) || esMedio(dataClub)) &&
                <FormularioCorto esIntermedio={esMedio(dataClub)}></FormularioCorto>
            }
        </MiCuentaLayout>
    )
}

export default MiClub