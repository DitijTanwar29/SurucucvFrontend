import React from "react";
import i18n from "../../i18n"; // Ensure correct path to i18n.js

const LanguageSwitcher = () => {
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // Now this should work
    localStorage.setItem("language", lng);
  };

  return (
    <div className="fixed top-20 bg-black">
      <button onClick={() => changeLanguage("en")} className="p-2 m-1 bg-blue-500 text-white rounded">
        🇬🇧 English
      </button>
      <button onClick={() => changeLanguage("tr")} className="p-2 m-1 bg-red-500 text-white rounded">
        🇹🇷 Türkçe
      </button>
    </div>
  );
};

export default LanguageSwitcher;
