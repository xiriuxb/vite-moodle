import { Route, Routes } from "react-router";
import { LandingPage } from "../pages/LandingPage";
import { CoursesPage } from "../pages/CoursesPage";
import { ExtraPage } from "../pages/ExtraPage";
import { FrogotPasswordPage } from "../pages/ForgotPasswordPage";

export function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/cursos" element={<CoursesPage />} />
      <Route path="/extra" element={<ExtraPage />} />
      <Route path="/forgot-password" element={<FrogotPasswordPage />} />
    </Routes>
  );
}
