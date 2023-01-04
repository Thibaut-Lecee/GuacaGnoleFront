import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Dashboard from "./Components/DashBoard/Dashboard";
import Support from "./Components/Support/Support";
import Articles from "./Components/Article/Article";
import Suppliers from "./Components/Supplier/Supplier";
import Customer from "./Components/Customer/Customer";


function App() {
  return (
   <Router>
     <Routes>
       <Route path={"/"} element={<Dashboard/>}/>
         <Route path={"/Support"} element={<Support/>}/>
         <Route path={"/Articles"} element={<Articles/>}/>
         <Route path={"/Suppliers"} element={<Suppliers/>}/>
         <Route path={"/Customer"} element={<Customer/>}/>
     </Routes>
    </Router>
  );
}

export default App;
