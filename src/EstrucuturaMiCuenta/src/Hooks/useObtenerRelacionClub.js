import { useState, useEffect } from 'react'

const useObtenerRelacionClub = (tipoSuscripcion) => {
    const apiPaywall = "config.get('Dominios').APIPaywall";
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const tipoBlack = { "response": { "tieneClub": true, "desasociarHabilitado": true, "tieneBonificado": false, "nroCredencial": "639130-02430723-14", "categoria": "Black", "categoriaUpdate": "" }, "code": "0000", "message": "OK" }
    const tipoPremium = { "response": { "tieneClub": true, "desasociarHabilitado": true, "tieneBonificado": false, "nroCredencial": "639130-00613616-28", "categoria": "Premium", "categoriaUpdate": "BLACK" }, "code": "0000", "message": "OK" }
    const tipoClassic = { "response": { "tieneClub": true, "desasociarHabilitado": true, "tieneBonificado": false, "nroCredencial": "639130-01324984-81", "categoria": "Classic", "categoriaUpdate": "PREMIUM" }, "code": "0000", "message": "OK" }
    const tipoSinCredencial = { "response": null, "code": "4010", "message": "Informacion de contacto no encontrado" }

    const listaTipoSuscripcion = [tipoBlack, tipoPremium, tipoClassic, tipoSinCredencial];

    useEffect(() => {
        const fetchData = () => {
            //ApiService.get(`${apiPaywall}GetDatos`)
            Promise.resolve(listaTipoSuscripcion[tipoSuscripcion])
                .then(data => {
                    if (data) {
                        console.log(data)
                        setData(data)
                        setError(null)
                        setIsLoading(false)

                    }
                })
                .catch(error => {
                    setError(error)
                    setIsLoading(false)
                });
        };
        fetchData();

    }, []);

    return [data, error, isLoading];
};

export default useObtenerRelacionClub