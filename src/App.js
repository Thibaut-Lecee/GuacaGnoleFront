import {Route, Routes, useNavigate} from "react-router-dom";
import Dashboard from "./Components/DashBoard/Dashboard";
import Support from "./Components/Support/Support";
import Articles from "./Components/Article/Article";
import Suppliers from "./Components/Supplier/Supplier";
import Customer from "./Components/Customer/Customer";
import {useEffect} from "react";


function App() {
    const location = window.location.pathname;
    const navigate = useNavigate();
    useEffect(() => {
        if (location === '/') {
            navigate('/Dashboard');
        }
    }, [location, navigate]);
    return (
        <Routes>
            <Route path={"/Dashboard"} element={<Dashboard/>}/>
            <Route path={"/Support"} element={<Support/>}/>
            <Route path={"/Articles"} element={<Articles/>}/>
            <Route path={"/Suppliers"} element={<Suppliers/>}/>
            <Route path={"/Customer"} element={<Customer/>}/>
        </Routes>
    );
}

export default App;
