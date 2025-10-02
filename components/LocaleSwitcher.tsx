"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";

export default function LocaleSwitcher({ path }: { path: string }) {
  const router = useRouter();
  const params = useParams();
  const currentLocale = params?.locale || "en";
  const [isOpen, setIsOpen] = useState(false);

  const locales = [
    {
      label: "English",
      value: "en",
      flag: (
        <svg width="20" height="14" viewBox="0 0 20 14">
          <rect width="20" height="14" fill="#012169" />
          <path d="M0 0l20 14M20 0L0 14" stroke="#FFF" strokeWidth="2" />
          <path d="M0 0l20 14M20 0L0 14" stroke="#C8102E" strokeWidth="1" />
          <rect x="7" width="6" height="14" fill="#FFF" />
          <rect y="4" width="20" height="6" fill="#FFF" />
          <rect x="8" width="4" height="14" fill="#C8102E" />
          <rect y="5" width="20" height="4" fill="#C8102E" />
        </svg>
      ),
    },
    {
      label: "Français",
      value: "fr",
      flag: (
        <svg width="20" height="14" viewBox="0 0 20 14">
          <rect width="20" height="14" fill="#FFF" />
          <rect width="7" height="14" fill="#0055A4" />
          <rect x="13" width="7" height="14" fill="#EF4135" />
        </svg>
      ),
    },
    {
      label: "Noones",
      value: "nhu",
      flag: (
        <svg width="20" height="14" viewBox="0 0 20 14">
          <rect width="20" height="14" fill="#FFD700" />
          <circle cx="10" cy="7" r="4" fill="#008000" />
        </svg>
      ),
    },
    {
      label: "Español",
      value: "es",
      flag: (
        <svg width="20" height="14" viewBox="0 0 20 14">
          <rect width="20" height="14" fill="#AA151B" />
          <rect y="3" width="20" height="8" fill="#F1BF00" />
        </svg>
      ),
    },
    {
      label: "Русский",
      value: "ru",
      flag: (
        <svg width="20" height="14" viewBox="0 0 20 14">
          <rect width="20" height="14" fill="#FFF" />
          <rect y="4.67" width="20" height="4.66" fill="#0039A6" />
          <rect y="9.33" width="20" height="4.67" fill="#D52B1E" />
        </svg>
      ),
    },
    {
      label: "Vietnamita",
      value: "vi",
      flag: (
        <svg width="20" height="14" viewBox="0 0 20 14">
          <rect width="20" height="14" fill="#DA251D" />
          <polygon
            points="10,3 11.18,8.09 16,8.09 12.09,10.91 13.27,16 10,13.18 6.73,16 7.91,10.91 4,8.09 8.82,8.09"
            fill="#FF0"
          />
        </svg>
      ),
    },
    {
      label: "简体中文(SC)",
      value: "zh",
      flag: (
        <svg width="20" height="14" viewBox="0 0 20 14">
          <rect width="20" height="14" fill="#DE2910" />
          <polygon points="3,2 4,5 1,3.5 5,3.5 2,5" fill="#FFDE00" />
        </svg>
      ),
    },
  ];

  const currentLocaleData =
    locales.find((locale) => locale.value === currentLocale) || locales[0];

  const handleLocaleChange = (selectedLocale: string) => {
    router.push(`/${selectedLocale}/${path}`);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block">
      {/* Trigger Button */}
      <button
        className="bg-transparent text-[#1D446F] text-xs font-semibold underline outline-none cursor-pointer flex items-center gap-1"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{currentLocaleData.flag}</span>
        <span>{currentLocaleData.label}</span>
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:bg-transparent"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="absolute left-0 mt-2 w-56 bg-white rounded-xl shadow-lg z-50
            lg:absolute lg:rounded-xl
            max-lg:fixed max-lg:bottom-0 max-lg:left-0 max-lg:right-0 max-lg:w-full max-lg:rounded-t-2xl max-lg:shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center px-4 py-3 border-b border-gray-200">
            <h3 className="text-sm font-semibold text-gray-800">Languages</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700 text-xl font-bold"
            >
              ×
            </button>
          </div>

          <div className="space-y-1 max-h-[250px] overflow-y-auto p-2">
            {locales.map((locale) => (
              <button
                key={locale.value}
                onClick={() => {
                  handleLocaleChange(locale.value);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-2 rounded-md flex items-center gap-2 transition-colors ${
                  locale.value === currentLocale
                    ? "bg-[#1D446F] text-white"
                    : "hover:bg-gray-100 text-gray-700"
                }`}
              >
                <span className="text-lg">{locale.flag}</span>
                <span className="font-medium">{locale.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
