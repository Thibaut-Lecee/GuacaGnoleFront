import {useEffect, useState} from 'react';

const UseAxiosFunction = () => {
    const [response, setResponse] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [controller, setController] = useState(null);

    // Fonction pour avoir le control des données !
    const axiosFetch = async (configObj) => {
        const {
            axiosInstance,
            url,
            method,
            requestConfig = {},
        } = configObj;
        try {
            setIsLoading(true)
            const controller = new AbortController();
            setController(controller);
            const response = await axiosInstance[method](url, {
                ...requestConfig,
                signal: controller.signal,
            });
            console.log(response);
            setResponse(response.data);
        } catch (error) {
            console.log(error);
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        console.log(controller);
        return () => {
            controller && controller.abort();
        }
    }, [controller])

    return {
        response,
        error,
        isLoading,
        axiosFetch,
    }

};

export default UseAxiosFunction;