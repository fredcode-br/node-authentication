import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import AdminBasePage from "../pages/Admin/AdminBasePage";

import AuthBasePage from "../pages/Admin/AuthBasePage";
import Login from "../pages/Admin/Login";
import Register from "../pages/Admin/Register";
import BasePage from "../pages/Client/BasePage";
import Home from "../pages/Client/Home";
import Dashboard from "../pages/Admin/Dashboard";
import PrivateRoutes from "./PrivateRoutes";

function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PrivateRoutes />}>   
                    <Route path='/' element={<AdminBasePage />}>
                        <Route path='/dashboard' element={<Dashboard />} />
                    </Route>
                </Route>     
                <Route path='/' element={<BasePage />}>
                    <Route index element={<Home />} />
                    <Route path="/home" element={<Home />} />
                </Route>
                <Route path='/' element={<AuthBasePage />}>
                    <Route path="/login" element={<Login />}/>
                    <Route path="/register" element={<Register />}/>
                </Route>
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;