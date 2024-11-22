import { useTranslations } from "next-intl";
import RegisterForm from "../../../components/register-form";

export default function RegisterPage() {
  const t = useTranslations("auth");

  return (
    <div className="container mx-auto p-4 max-w-md">
      <h1 className="text-2xl font-bold text-center mb-6">
        {t("registerButton")}
      </h1>
      <RegisterForm />
    </div>
  );
}
