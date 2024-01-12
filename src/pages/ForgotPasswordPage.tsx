import { FrogotPasswordComponent } from "../forgot-password/ForgotPasswordComponent";
import { PageLayout } from "./PageLayout";

export function FrogotPasswordPage() {
  return (
    <PageLayout>
      <div className="flex flex-col">
        <h2 className="text-indigo-900 text-4xl font-bold">
          Recuperación de contraseña
        </h2>
        <FrogotPasswordComponent />
      </div>
    </PageLayout>
  );
}
