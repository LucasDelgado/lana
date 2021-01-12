import { useState, useEffect } from 'react'

const useObtenerRelacionClub = () => {
    const apiPaywall = "config.get('Dominios').APIPaywall";
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const jsonLargo = { "glossary": { "title": "example glossary", "GlossDiv": { "title": "S", "GlossList": { "GlossEntry": { "ID": "SGML", "SortAs": "SGML", "GlossTerm": "Standard Generalized Markup Language", "Acronym": "SGML", "Abbrev": "ISO 8879:1986", "GlossDef": { "para": "A meta-markup language, used to create markup languages such as DocBook.", "GlossSeeAlso": ["GML", "XML"] }, "GlossSee": "markup" } } } } }


    useEffect(() => {
        const fetchData = () => {
            //ApiService.get(`${apiPaywall}GetDatos`)
            Promise.resolve(jsonLargo)
                .then(data => {
                    if (data) {
                        console.log(data)
                        setData(data)
                        setError(`${data.message} - (codigo de error: ${data.code})`)
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