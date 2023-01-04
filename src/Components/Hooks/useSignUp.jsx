import {useNavigate} from "react-router-dom";
import {useState} from "react";
import axios from "axios";

export const useSignUp = () => {
    const navigate = useNavigate();
    const [errorMsg, setErrorMsg] = useState(null);
    const [loading, setLoading] = useState(false);
    const signUp = async (email, password) => {
        try {
            const signUpResponse = await axios.post('http://localhost:8080/api/auth/signup', {email, password}, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
            if (signUpResponse.status === 201) {
                navigate('/login');
            }
        } catch (e) {
            setErrorMsg(e.response.data.message);
            setLoading(false);
        }
    }
    return {signUp, errorMsg, loading};
}