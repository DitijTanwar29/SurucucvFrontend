import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          "welcome": "Welcome to our Job Platform!",
          "dashboard": "Dashboard",
          "jobs": "Jobs",
          "ads": "Advertisements",
          "settings": "Settings",
          "applyNow": "Apply Now",
          "home" : "Home",
          "about" : "About Us",
          "findJob": "Find Job",
          "findDriver" : "Find Driver",
          "createCv" : "Create Cv",
          "contactUs" : "Contact Us",
          "search":"Search",
          "discover": "Discover Driving Opportunities",
          "jobPostingsFrom":" job postings, from ",
          "tonsOfCompanies": "tons of companies",
          "searchForJobTitles" : "Search for job titles...",
          "myProfile":"My Profile",
          "edit":"Edit",
          "companyDetails" : "Company Details",
          "companyTitle" : "Company Title",
          
        }
      },
      tr: {
        translation: {
          "welcome": "İş Platformumuza Hoşgeldiniz!",
          "dashboard": "Gösterge Paneli",
          "jobs": "İşler",
          "ads": "Reklamlar",
          "settings": "Ayarlar",
          "applyNow": "Şimdi Başvur",
          "home" : "Ev",
          "about" : "Hakkımızda",
          "findJob" : "İş Bul",
          "contactUs" : "Bize Ulaşın",
          "createCv" : "Özgeçmiş Oluştur",
          "findDriver" : "Sürücüyü Bul",
          "search" : "Aramak",
          "discover": "Sürüş Fırsatlarını Keşfedin",
          "jobPostingsFrom":" iş ilanları,",
          "tonsOfCompanies": "tonlarca şirket",
          "searchForJobTitles" : "Meslek ünvanlarını arayın...",
          "myProfile" : "Profilim",
          "edit" : "Düzenlemek",
          "companyDetails" : "Şirket Detayları",
          "companyTitle" : "Şirket Ünvanı"
        }
      }
    },
    lng: localStorage.getItem("language") || "en", // Default language
    fallbackLng: "en",
    interpolation: { escapeValue: false }
  });

// Explicitly export i18n instance
export default i18n;
