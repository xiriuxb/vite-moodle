import { Route, Routes } from "react-router";
import { LoginPage } from "../pages/LoginPage";
import { LandingPage } from "../pages/LandingPage";
import { HomePage } from "../pages/HomePage";

export function LoginRouter(){
    return(
    <Routes>
        <Route path="/auth/*" element={<LoginPage />}/>
        <Route path="/*" element={<HomePage />}/>
    </Routes>
    )
}