import React from 'react'
import MiCuentaLayout from '../../../businessLayout/miCuentaLayout'
import useObtenerRelacionClub from '../Hooks/useObtenerRelacionClub';


const MiClub = props => {

    const [dataRelacionClub, errorRelacionClub, isLoadingRelacion] = useObtenerRelacionClub(0);
    return (
        <MiCuentaLayout>
            {
                dataRelacionClub && dataRelacionClub.response &&
                <h1>{JSON.stringify(dataRelacionClub.response)}</h1>
            }
            <br></br>
            Error: {errorRelacionClub}
            <br></br>
            isLoading: {isLoadingRelacion}
        </MiCuentaLayout>
    )
}

export default MiClub
