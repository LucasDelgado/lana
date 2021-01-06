import { useState, useEffect } from 'react'

const useFormCorto = () => {
    const apiPaywall = "config.get('Dominios').APIPaywall";

    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const formCortoJson = {
        "code": "1",
        "message": "",
        "response": [
            {
                "nroTarjeta": "6391300143326427",
                "CrmId": "A02462886"
            }
        ]
    }

    useEffect(() => {
        const fetchData = () => {
            //ApiService.get(`${apiPaywall}Cliente/GetDatosCliente`)
            Promise.resolve(formCortoJson)
                .then(data => {
                    if (data && data.code) {
                        if ((data.code !== "1" && data.code !== "2")) {
                            setData(data)
                            setError(`${data.message} - (codigo de error: ${data.code})`)
                            setIsLoading(false)
                        }
                        else {
                            setData(data)
                            setIsLoading(false)
                            setError(null)
                        }
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

export default useFormCorto