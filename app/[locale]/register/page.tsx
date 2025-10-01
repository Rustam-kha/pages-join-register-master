import LocaleSwitcher from "@/components/LocaleSwitcher";
import Logo from "@/components/Logo";
import RegisterForm from "@/components/RegisterForm";
import { getTranslations } from "next-intl/server";
import { before } from "node:test";
import React, { Suspense } from "react";

const page = async ({ params }: { params: Promise<{ locale: string }> }) => {
  const locale = await params;
  const t = await getTranslations("loginPage");
  return (
    <main className="w-full ">
      <section className="flex flex-col gap-6 items-center justify-center max-w-[500px] mx-auto py-8 px-4">
        <Logo />
        {/* form */}
        <Suspense fallback={<FormSkeleton />}>
          <RegisterForm
            translations={{
              title: t("registerPage.title"),

              email: t("email"),
              emailPlaceholder: t("emailPlaceholder"),
              password: t("password"),
              confirmPassword: t("registerPage.confirmPassword"),
              confirmPasswordPlaceholder: t(
                "registerPage.confirmPasswordPlaceholder"
              ),
              invalid: t("registerPage.invalid"),
              continue: t("continue"),
              invalidPlaceholder: t("registerPage.invalidPlaceholder"),
              paste: t("registerPage.paste"),
              or: t("or"),

              login: t("login"),
              // terms and privacy policy
              beforeLink: t("registerPage.tearmsAndPrivacy.beforeLink"),
              link: t("registerPage.tearmsAndPrivacy.link"),
              afterLink: t("registerPage.tearmsAndPrivacy.afterLink"),
              link2: t("registerPage.tearmsAndPrivacy.link2"),
            }}
            locale={locale.locale}
          />
        </Suspense>
        <div className="flex justify-end w-full max-w-[450px] px-6 ">
          <LocaleSwitcher path="register" />
        </div>
      </section>
    </main>
  );
};

export default page;

// components/FormSkeleton.tsx

interface FormSkeletonProps {
  className?: string;
  pulse?: boolean;
}

const FormSkeleton: React.FC<FormSkeletonProps> = ({
  className = "",
  pulse = true,
}) => {
  return (
    <div
      className={`
        flex flex-col gap-4 max-w-[430px] lg:max-w-[500px] w-full 
        px-6 py-5 rounded-lg bg-formBG font-ibm
        ${pulse ? "animate-pulse" : ""}
        ${className}
      `}
    >
      {/* Header */}
      <div className="flex justify-between items-center gap-1">
        <div className="h-6 bg-gray-200 rounded w-1/3"></div>
        <div className="h-8 bg-gray-200 rounded w-20"></div>
      </div>

      <div className="flex flex-col gap-5 w-full">
        {/* Form Fields */}
        {[...Array(4)].map((_, index) => (
          <div key={index} className="flex flex-col gap-2 w-full">
            <div className="h-3 bg-gray-200 rounded w-16"></div>
            <div className="h-10 bg-gray-200 rounded-md w-full"></div>
          </div>
        ))}

        {/* Continue Button */}
        <div className="h-12 bg-gray-200 rounded-md w-full"></div>

        {/* Divider and Social Login */}
        <div className="flex flex-col gap-6 mt-4">
          {/* Divider */}
          <div className="relative flex justify-center items-center w-full max-w-[95%] mx-auto bg-gray-200 h-[1px]">
            <div className="absolute bg-white px-2">
              <div className="h-3 bg-gray-200 rounded w-4"></div>
            </div>
          </div>

          {/* Social Login Buttons */}
          <div className="grid grid-cols-2 gap-2">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="h-10 bg-gray-200 rounded-md w-full"
              ></div>
            ))}
          </div>

          {/* Terms Text */}
          <div className="space-y-2">
            <div className="h-3 bg-gray-200 rounded w-full"></div>
            <div className="h-3 bg-gray-200 rounded w-4/5"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
