import {createContext, useEffect, useReducer} from "react";
import {useCookies} from "react-cookie";

export const AuthContext = createContext();
export const AuthReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                user: action.payload,
                isAuth: true
            }
        case "LOGOUT":
            return {
                ...state,
                user: null,
                isAuth: false
            }
        case 'LOGIN_ERROR':
            return {
                ...state,
                errorMsg: action.payload,
                isAuth: false,
                user: null
            }
        default:
            return state
    }
}
export const AuthProvider = ({children}) => {
    const [cookies, setCookie] = useCookies(['user']);
    const [state, dispatch] = useReducer(AuthReducer, {
        user: null,
        isAuth: false
    }, () => {
        const localData = cookies.user;
        return localData ? {user: localData, isAuth: true} : {user: null, isAuth: false}
    })
    useEffect(() => {
        setCookie('user', state.user, {path: '/'})
        const user = cookies.user;
        if (user) {
            dispatch({
                type: "LOGIN",
                payload: user
            })
        }
    }, [state.user])

    return (
        <AuthContext.Provider value={{user: state.user, dispatch, errorMsg: state.errorMsg}}>
            {children}
        </AuthContext.Provider>
    )
}

