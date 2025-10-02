"use client";
import React, { useState } from "react";
import Button from "./Button";
import Link from "next/link";

const LoginForm = ({
  translations,
  locale,
}: {
  translations: { [key: string]: string };
  locale: string;
}) => {
  const data = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="512"
          height="512"
          className="w-4 h-auto"
          viewBox="0 0 512 512"
        >
          <path d="M457.73 216.63a239.24 239.24 0 0 1 4.07 44.1C461.8 380.68 381.48 466 260.2 466c-116.02 0-210-93.98-210-210s93.98-210 210-210c56.7 0 104.08 20.87 140.44 54.73l-59.2 59.2v-.14c-22.05-21-50-31.76-81.24-31.76-69.3 0-125.6 58.54-125.6 127.84 0 69.3 56.3 127.97 125.6 127.97 62.87 0 105.66-35.97 114.46-85.31H260.2v-81.9h197.53z" />
        </svg>
      ),
      name: "Google",
    },
    {
      icon: (
        <svg
          height="100%"
          version="1.1"
          viewBox="0 0 512 512"
          width="100%"
          className="w-4 h-auto"
        >
          <path d="M255.022,511.998l0.229,0.001l-0.079,0l-0.15,-0.001Zm1.806,0.001l-0.079,0l0.229,-0.001l-0.15,0.001Zm-2.588,-0.005l0.247,0.001l-0.142,0l-0.105,-0.001Zm3.415,0.001l-0.142,0l0.247,-0.001l-0.105,0.001Zm-4.169,-0.007l0.165,0.001l-0.132,-0.001l-0.033,0Zm4.995,0l-0.132,0.001l0.165,-0.001l-0.033,0Zm0.826,-0.009l-0.058,0.001l0.223,-0.003l-0.165,0.002Zm-6.779,-0.002l0.223,0.003l-0.058,-0.001l-0.165,-0.002Zm7.604,-0.01l-0.135,0.002l0.275,-0.004l-0.14,0.002Zm-8.404,-0.002l0.275,0.004l-0.135,-0.002l-0.14,-0.002Zm9.228,-0.012l-0.182,0.003l0.254,-0.005l-0.072,0.002Zm-9.984,-0.002l0.254,0.005l-0.182,-0.003l-0.072,-0.002Zm-0.937,-0.019l0.225,0.005l-0.04,-0.001l-0.185,-0.004Zm11.745,0.004l-0.04,0.001l0.225,-0.005l-0.185,0.004Zm-12.567,-0.025l0.309,0.008l-0.125,-0.003l-0.184,-0.005Zm13.39,0.005l-0.125,0.003l0.309,-0.008l-0.184,0.005Zm0.823,-0.022l-0.201,0.006l0.316,-0.009l-0.115,0.003Zm-14.967,-0.003l0.316,0.009l-0.201,-0.006l-0.115,-0.003Zm-0.72,-0.022l0.225,0.007l-0.212,-0.007l-0.194,-0.006l0.181,0.006Zm16.509,0l-0.212,0.007l0.225,-0.007l0.181,-0.006l-0.194,0.006Zm0.821,-0.027l-0.112,0.004l0.345,-0.012l-0.233,0.008Zm-18.371,-0.008l0.345,0.012l-0.112,-0.004l-0.233,-0.008Zm-0.749,-0.028l0.362,0.013l-0.201,-0.007l-0.161,-0.006Zm19.941,0.006l-0.201,0.007l0.362,-0.013l-0.161,0.006Zm-20.676,-0.036l0.354,0.015l-0.277,-0.011l-0.077,-0.004Zm21.495,0.004l-0.277,0.011l0.354,-0.015l-0.077,0.004Zm-22.525,-0.049l0.38,0.017l-0.093,-0.003l-0.287,-0.014Zm23.345,0.014l-0.093,0.003l0.38,-0.017l-0.287,0.014Zm-24.084,-0.048l0.394,0.018l-0.186,-0.008l-0.208,-0.01Zm24.902,0.01l-0.186,0.008l0.394,-0.018l-0.208,0.01Zm-25.63,-0.047l0.397,0.02l-0.279,-0.013l-0.118,-0.007Zm26.448,0.007l-0.279,0.013l0.397,-0.02l-0.118,0.007Zm0.818,-0.043l-0.362,0.019l0.321,-0.017l0.378,-0.021l-0.337,0.019Zm-27.925,0.002l0.321,0.017l-0.362,-0.019l-0.337,-0.019l0.378,0.021Zm28.741,-0.048l-0.16,0.009l0.406,-0.023l-0.246,0.014Zm-29.844,-0.014l0.406,0.023l-0.16,-0.009l-0.246,-0.014Zm-0.722,-0.043l0.405,0.024l-0.253,-0.014l-0.152,-0.01Zm31.382,0.01l-0.253,0.014l0.405,-0.024l-0.152,0.01Zm-32.071,-0.053l0.365,0.023l-0.34,-0.021l-0.342,-0.022l0.317,0.02Zm32.887,0.002l-0.34,0.021l0.365,-0.023l0.317,-0.02l-0.342,0.022Zm0.814,-0.053l-0.122,0.008l0.387,-0.026l-0.265,0.018Zm-34.755,-0.018l0.387,0.026l-0.122,-0.008l-0.265,-0.018Zm-0.721,-0.05l0.38,0.027l-0.208,-0.014l-0.172,-0.013Zm36.29,0.013l-0.208,0.014l0.38,-0.027l-0.172,0.013Zm-37.009,-0.064l0.349,0.025l-0.271,-0.019l-0.078,-0.006Zm37.822,0.006l-0.271,0.019l0.349,-0.025l-0.078,0.006Zm-38.789,-0.079l0.306,0.023l-0.074,-0.005l-0.232,-0.018Zm39.602,0.018l-0.074,0.005l0.306,-0.023l-0.232,0.018Zm0.811,-0.063l-0.146,0.011l0.311,-0.025l-0.165,0.014Zm-41.157,-0.014l0.311,0.025l-0.146,-0.011l-0.165,-0.014Zm-0.725,-0.059l0.264,0.022l-0.186,-0.015l-0.078,-0.007Zm42.694,0.007l-0.186,0.015l0.264,-0.022l-0.078,0.007Zm-43.492,-0.074l0.079,0.007l-0.013,-0.001l-0.066,-0.006Zm44.302,0.006l-0.013,0.001l0.079,-0.007l-0.066,0.006Zm0.81,-0.071l-0.072,0.006l0.181,-0.016l-0.109,0.01Zm-45.965,-0.01l0.181,0.016l-0.072,-0.006l-0.109,-0.01Zm-0.75,-0.068l0.135,0.013l-0.084,-0.008l-0.051,-0.005Zm47.523,0.005l-0.084,0.008l0.135,-0.013l-0.051,0.005Zm-63.736,-2.025c-122.319,-19.226 -216,-125.203 -216,-252.887c0,-141.29 114.71,-256 256,-256c141.29,0 256,114.71 256,256c0,127.684 -93.681,233.661 -216,252.887l0,-178.887l59.65,0l11.35,-74l-71,0l0,-48.021c0,-20.245 9.918,-39.979 41.719,-39.979l32.281,0l0,-63c0,0 -29.296,-5 -57.305,-5c-58.476,0 -96.695,35.44 -96.695,99.6l0,56.4l-65,0l0,74l65,0l0,178.887Z" />
        </svg>
      ),
      name: "Facebook",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="56.69"
          height="56.69"
          className="w-4 h-auto"
          viewBox="0 0 56.69 56.69"
        >
          <path d="M41.78 30.52c-.07-6.24 5.08-9.22 5.3-9.38-2.88-4.22-7.39-4.8-8.99-4.87-3.83-.39-7.48 2.26-9.42 2.26-1.94 0-4.94-2.2-8.12-2.15a12.04 12.04 0 0 0-10.18 6.17c-4.33 7.53-1.1 18.69 3.12 24.8 2.07 2.98 4.53 6.34 7.77 6.22 3.12-.12 4.3-2.02 8.06-2.02s4.83 2.02 8.12 1.96c3.35-.06 5.48-3.05 7.53-6.04 2.37-3.47 3.35-6.83 3.4-7-.06-.04-6.53-2.51-6.6-9.95zM35.58 12.23c1.72-2.08 2.88-4.98 2.56-7.86-2.47.1-5.47 1.65-7.25 3.73-1.59 1.84-2.98 4.78-2.6 7.61 2.76.22 5.57-1.4 7.3-3.48z" />
        </svg>
      ),
      name: "Apple",
    },
  ];
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  return (
    <form className="flex flex-col gap-4 max-w-[430px] lg:max-w-[500px] w-full px-6 py-5 rounded-lg bg-formBG font-ibm">
      <div className="flex justify-between items-center gap-1">
        <h2 className="text-black text-xl font-semibold fon">
          {translations["login"]}
        </h2>
        <Button
          varient="secondary"
          text={translations["joinUs"]}
          url={{ pathname: `/${locale}/register` }}
        />
      </div>
      <div className="flex flex-col gap-5 w-full">
        <div className="flex flex-col gap-2 w-full">
          <label
            htmlFor="email"
            className="text-[#4E5955] font-semibold text-xs"
          >
            {translations["email"]}
          </label>
          <input
            type="email"
            id="email"
            className="border-none bg-[#F2F2F2] focus:bg-[#E0E0E0] text-[#1B1F1E] placeholder:text-[#91b0b6] text-base font-semibold rounded-md outline-none px-4 py-2.5 h-[40px]"
            placeholder={translations["emailPlaceholder"]}
          />
        </div>
        <div className="relative flex flex-col gap-2 w-full">
          <label
            htmlFor="email"
            className="text-[#4E5955] font-semibold text-xs"
          >
            {translations["password"]}
          </label>
          <input
            type={isPasswordVisible ? "text" : "password"}
            id="password"
            className="border-none bg-[#F2F2F2] focus:bg-[#E0E0E0] text-[#1B1F1E] placeholder:text-[#91b0b6] text-base font-semibold rounded-md outline-none px-4 py-2.5"
            placeholder={translations["password"]}
          />
          {/* svg icon pixelated eye and eye-slash*/}
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2"
            type="button"
            onClick={() => setIsPasswordVisible(!isPasswordVisible)}
          >
            {isPasswordVisible ? (
              <svg
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-5 h-5 text-[#1b1f1e]"
              >
                {" "}
                <path
                  d="M8 6h8v2H8V6zm-4 4V8h4v2H4zm-2 2v-2h2v2H2zm0 2v-2H0v2h2zm2 2H2v-2h2v2zm4 2H4v-2h4v2zm8 0v2H8v-2h8zm4-2v2h-4v-2h4zm2-2v2h-2v-2h2zm0-2h2v2h-2v-2zm-2-2h2v2h-2v-2zm0 0V8h-4v2h4zm-10 1h4v4h-4v-4z"
                  fill="currentColor"
                />{" "}
              </svg>
            ) : (
              <svg
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-5 h-5 text-[#1b1f1e]"
              >
                {" "}
                <path
                  d="M0 7h2v2H0V7zm4 4H2V9h2v2zm4 2v-2H4v2H2v2h2v-2h4zm8 0H8v2H6v2h2v-2h8v2h2v-2h-2v-2zm4-2h-4v2h4v2h2v-2h-2v-2zm2-2v2h-2V9h2zm0 0V7h2v2h-2z"
                  fill="currentColor"
                />{" "}
              </svg>
            )}
          </button>
          {/* forgot password */}
          <Link
            href="#"
            className="text-xs text-right text-primary underline font-semibold -mt-1"
          >
            {translations["forgotPassword"]}
          </Link>
        </div>
        {/* continue button */}
        <Button
          varient="primary"
          text={translations["continue"]}
          textSize="text-lg"
        />
        <div className="flex flex-col gap-6 mt-4">
          <div className="relative flex justify-center items-center w-full max-w-[95%] mx-auto bg-gray-300 h-[1px] ">
            <span className="absolute flex justify-center items-center p-1 text-center bg-white rounded-full text-[#4e5955] text-sm font-bold ">
              or
            </span>
          </div>
          {/* other login options */}
          <div className="grid grid-cols-2 gap-2">
            {data.map((item, index) => (
              <Button
                key={index}
                varient="secondary"
                text={
                  <>
                    {item.icon}
                    {item.name}
                  </>
                }
                 className="text-xs text-right font-semibold -mt-1 text-[#1D446F] underline"
              />
            ))}
          </div>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
