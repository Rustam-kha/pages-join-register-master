import Link from "next/link";
import React from "react";

const Button = ({
  varient = "secondary",
  text,
  textSize = "text-sm",
  onClick,
  Btntype = "button",
  className,
  url,
}: {
  varient?: "primary" | "secondary";
  text: string | React.ReactNode;
  textSize?: string;
  onClick?: () => void;
  Btntype?: "button" | "submit" | "reset";
  className?: string;
  url?: {
    pathname: string;
    query?: { [key: string]: string | string[] | undefined };
  };
}) => {
  return url ? (
    <Link
      href={url.pathname}
      onClick={onClick}
      type={Btntype}
      className={`flex justify-center items-center  overflow-hidden p-[2px] cursor-pointer `}
    >
      <div
        className={`flex justify-center items-center p-[2px] ${
          varient === "primary" ? "bg-green-100 w-full" : "bg-transparent"
        } ${
          varient === "primary"
            ? "shadow-[3px_0_0_-0.5px_#0766b9e0,-3px_0_0_-0.5px_#0766b9e0,0_-3px_0_-0.5px_#0766b9e0,0_3px_0_-0.5px_#0766b9e0]"
            : "shadow-[2px_0_0_-0.5px_var(--color-gray-300),-2px_0_0_-0.5px_var(--color-gray-300),0_-2px_0_-0.5px_var(--color-gray-300),0_2px_0_-0.5px_var(--color-gray-300)]"
        } text-white group ${className}  `}
      >
        <span
          className={` ${
            varient === "primary"
              ? " bg-primary group-hover:bg-[#0d749a] w-full py-1.5"
              : "bg-gray-200/30 group-hover:bg-[#F2F2F2] text-black"
          } font-semibold ${textSize} p-1 double-border-btn `}
        >
          {text}
        </span>
      </div>
    </Link>
  ) : (
    <button
      onClick={onClick}
      type={Btntype}
      className={`flex justify-center items-center rounded-sm  overflow-hidden p-[1.5px] `}
    >
      <div
        className={`flex justify-center items-center p-[2px] ${
          varient === "primary" ? "bg-green-100 w-full" : "bg-transparent"
        }  ${
          varient === "primary"
            ? "shadow-[3px_0_0_-0.5px_#0766b9e0,-3px_0_0_-0.5px_#0766b9e0,0_-3px_0_-0.5px_#0766b9e0,0_3px_0_-0.5px_#0766b9e0]"
            : "shadow-[2px_0_0_-0.5px_var(--color-gray-300),-2px_0_0_-0.5px_var(--color-gray-300),0_-2px_0_-0.5px_var(--color-gray-300),0_2px_0_-0.5px_var(--color-gray-300)]"
        } text-white group ${className} cursor-pointer`}
      >
        <span
          className={` ${
            varient === "primary"
              ? "bg-primary group-hover:bg-[#0d749a] w-full py-1.5"
              : "bg-gray-200/30 group-hover:bg-[#F2F2F2] text-black"
          } font-semibold ${textSize} p-1 double-border-btn `}
        >
          {text}
        </span>
      </div>
    </button>
  );
};

export default Button;
