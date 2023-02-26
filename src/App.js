import { BrowserRouter, Route, Routes } from "react-router-dom";
import AccountManagerDashboard from "./account_manager/AccountManagerDashboard";
import AdminDashboard from "./admin/AdminDashboard";
import Layout from "./compontnts/ui/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import EndUserDashboard from "./enduser/EndUserDashboard";
import ResellerDashboard from "./reseller/ResellerDashboard";


export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home />}></Route>
      
      <Route path="Register" element={<Register />}></Route>
      <Route path="admindashboard" element={<AdminDashboard />}></Route>
      <Route path="enduser" element={<EndUserDashboard />}></Route>
      <Route path="resller" element={<ResellerDashboard />}></Route>
      <Route path="accountmanager" element={<AccountManagerDashboard />}></Route>
      
      </Route>
      <Route path="login" element={<Login />}></Route>
      <Route path="*" element={<NotFound />}></Route>
     



        </Routes>
        
        
        </BrowserRouter>
   
  )
}
