import axios from "axios";
import {useNavigate} from "react-router-dom";
import {useContext, useState} from "react";
import {AuthContext} from "../Context/AuthContext";
import {useCookies} from "react-cookie";

export const useSignIn = () => {
    const navigate = useNavigate();
    const {dispatch} = useContext(AuthContext);
    const [cookies, setCookie] = useCookies(['user']);
    const [errorMsg, setErrorMsg] = useState(null);
    const [loading, setLoading] = useState(false);
    const signIn = async (email, password) => {
        try {
            const response = await axios.post('http://localhost:8080/api/auth/signin', {email, password}, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            });
            dispatch({type: 'LOGIN', payload: response.data.user});
            setCookie('user', response.data.user, {path: '/'});
            setLoading(false);
            navigate('/');
        } catch (e) {
            setErrorMsg(e.response.data.message);
            setLoading(false);
            dispatch({type: 'LOGIN_ERROR', payload: e.response.data.message});
        }
    }
    return {signIn, errorMsg, loading};
}