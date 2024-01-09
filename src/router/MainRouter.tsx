import { Route, Routes } from "react-router";
import { LoginPage } from "../pages/LoginPage";
import { LandingPage } from "../pages/LandingPage";
import { CoursesPage } from "../pages/CoursesPage";
import { ExtraPage } from "../pages/ExtraPage";

export function MainRouter (){
    return(
        <Routes>
            <Route path="/" element={<LandingPage />}/>
            <Route path="/cursos" element={<CoursesPage/>} />
            <Route path="/extra" element={<ExtraPage/>} />
        </Routes>
    )
}