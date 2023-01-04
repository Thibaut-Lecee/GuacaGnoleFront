import {useState, useEffect} from "react";

// on fait un appel API au rafrachissement de la page
 const useAxios = (configObj) => {
    const {
        axiosInstance,
        url,
        method,
        requestConfig = {},
    } = configObj;
    const [response, setResponse] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        const fetchData = async () => {
            try {
                setIsLoading(true);
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
        fetchData();
        // Cleanup function
        return () => {
            controller.abort();
        }
    }, [])

    return {
        response,
        error,
        isLoading,
    }
}

export default useAxios;