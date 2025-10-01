import LocaleSwitcher from "@/components/LocaleSwitcher";
import LoginForm from "@/components/LoginForm";
import Logo from "@/components/Logo";
import { getTranslations, setRequestLocale } from "next-intl/server";
import React, { Suspense } from "react";

const page = async ({ params }: { params: Promise<{ locale: string }> }) => {
  const locale = await params;
  const t = await getTranslations("loginPage");
  setRequestLocale("en");
  return (
    <main className="w-full ">
      <section className="flex flex-col gap-6 items-center justify-center max-w-[500px] mx-auto py-8 px-4">
        <Logo />
        {/* form */}
        <Suspense fallback={<Skeleton />}>
          <LoginForm
            translations={{
              login: t("login"),
              email: t("email"),
              emailPlaceholder: t("emailPlaceholder"),
              password: t("password"),
              forgotPassword: t("forgotPassword"),
              joinUs: t("joinUs"),
              continue: t("continue"),
            }}
            locale={locale.locale}
          />
        </Suspense>
        <div className="flex justify-end w-full max-w-[450px] px-6 ">
          <LocaleSwitcher path="login" />
        </div>
      </section>
    </main>
  );
};

export default page;

const Skeleton = () => {
  return (
    <form className="flex flex-col gap-4 max-w-[430px] lg:max-w-[500px] w-full px-6 py-5 rounded-lg bg-formBG font-ibm">
      <div className="flex justify-between items-center gap-1">
        <div className="h-6 w-24 bg-gray-200 rounded animate-pulse" />
        <div className="h-8 w-20 bg-gray-200 rounded animate-pulse" />
      </div>
      <div className="flex flex-col gap-5 w-full">
        <div className="flex flex-col gap-2 w-full">
          <div className="h-4 w-16 bg-gray-200 rounded animate-pulse" />
          <div className="h-10 w-full bg-gray-200 rounded-md animate-pulse" />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <div className="h-4 w-16 bg-gray-200 rounded animate-pulse" />
          <div className="h-10 w-full bg-gray-200 rounded-md animate-pulse" />
          <div className="h-4 w-24 bg-gray-200 rounded animate-pulse self-end" />
        </div>
        <div className="h-10 w-full bg-gray-200 rounded-md animate-pulse" />
        <div className="flex flex-col gap-6 mt-4">
          <div className="relative flex justify-center items-center w-full max-w-[95%] mx-auto bg-gray-300 h-[1px] ">
            <span className="absolute flex justify-center items-center p-1 bg-white rounded-full h-6 w-10 animate-pulse" />
          </div>
          <div className="grid grid-cols-2 gap-2">
            {[...Array(3)].map((_, idx) => (
              <div
                key={idx}
                className="h-10 w-full bg-gray-200 rounded-md animate-pulse"
              />
            ))}
          </div>
        </div>
      </div>
    </form>
  );
};
