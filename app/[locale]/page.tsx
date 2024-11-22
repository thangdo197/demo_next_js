import { useTranslations } from "next-intl";
import LanguageSwitcher from "../../components/language-switcher";

export default function Home() {
  const t = useTranslations("nav");

  return (
    <main className="container mx-auto p-4">
      <nav className="flex justify-between items-center mb-8">
        <div className="flex gap-4">
          <a href="/">{t("home")}</a>
          <a href="/login">{t("login")}</a>
          <a href="/register">{t("register")}</a>
        </div>
        <LanguageSwitcher />
      </nav>
    </main>
  );
}
