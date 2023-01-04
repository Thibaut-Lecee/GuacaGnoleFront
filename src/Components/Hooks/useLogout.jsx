import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../Context/AuthContext";
import {useCookies} from "react-cookie";
export const useLogout = () => {
    const navigate = useNavigate();
    const {dispatch} = useContext(AuthContext);
    const [cookies, removeCookie] = useCookies(['user']);

    const logout = () => {
        removeCookie('user', {path: '/'});
        dispatch({type: 'LOGOUT'});
        navigate('/login');
        localStorage.clear();
    }
    return logout;
}