import * as React from "react";
import { useLanguage } from "../contexts/LanguageContext";

const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault();
  const targetId = href.replace("#", "");
  
  if (targetId === "") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  
  const element = document.getElementById(targetId);
  
  if (element) {
    const offset = 64; // Height of sticky header
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
};

export function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-6 mb-12">
          <div className="col-span-2 lg:col-span-2">
            <a href="#" onClick={(e) => scrollToSection(e, "#")} className="flex items-center gap-3 mb-4 group cursor-pointer">
              <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#145eff]">
                <rect width="40" height="40" rx="12" fill="currentColor"/>
                <path d="M14 14H26V16.5L19 28H15L22 16.5H14V14Z" fill="white"/>
              </svg>
              <div className="flex flex-col -space-y-1">
                <span className="text-lg font-extrabold tracking-tighter text-gray-900 group-hover:text-[#145eff] transition-colors">7TECH</span>
                <span className="text-[8px] font-bold tracking-[0.2em] text-[#145eff] uppercase">MDM Platform</span>
              </div>
            </a>
            <p className="text-gray-500 text-sm max-w-xs">
              {t("footer.tagline")}
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">{t("footer.platform")}</h4>
            <ul className="space-y-2">
              <li><a href="#solutions" onClick={(e) => scrollToSection(e, "#solutions")} className="text-gray-500 hover:text-[#145eff] text-sm transition-colors cursor-pointer">{t("footer.solutions")}</a></li>
              <li><a href="#smart-marketing" onClick={(e) => scrollToSection(e, "#smart-marketing")} className="text-gray-500 hover:text-[#145eff] text-sm transition-colors cursor-pointer">{t("header.smartMarketing")}</a></li>
              <li><a href="#integrations" onClick={(e) => scrollToSection(e, "#integrations")} className="text-gray-500 hover:text-[#145eff] text-sm transition-colors cursor-pointer">{t("header.integrations")}</a></li>
              <li><a href="#pricing" onClick={(e) => scrollToSection(e, "#pricing")} className="text-gray-500 hover:text-[#145eff] text-sm transition-colors cursor-pointer">{t("header.pricing")}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">{t("footer.solutions")}</h4>
            <ul className="space-y-2">
              <li><a href="#solutions" onClick={(e) => scrollToSection(e, "#solutions")} className="text-gray-500 hover:text-[#145eff] text-sm transition-colors cursor-pointer">{t("solutions.kiosk.badge")}</a></li>
              <li><a href="#solutions" onClick={(e) => scrollToSection(e, "#solutions")} className="text-gray-500 hover:text-[#145eff] text-sm transition-colors cursor-pointer">{t("solutions.education.badge")}</a></li>
              <li><a href="#solutions" onClick={(e) => scrollToSection(e, "#solutions")} className="text-gray-500 hover:text-[#145eff] text-sm transition-colors cursor-pointer">{t("solutions.corporate.badge")}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">{t("footer.support")}</h4>
            <ul className="space-y-2">
              <li><a href="#integrations" onClick={(e) => scrollToSection(e, "#integrations")} className="text-gray-500 hover:text-[#145eff] text-sm transition-colors cursor-pointer">{t("footer.documentation")}</a></li>
              <li><a href="#" className="text-gray-500 hover:text-[#145eff] text-sm transition-colors">{t("footer.security")}</a></li>
              <li><a href="#integrations" onClick={(e) => scrollToSection(e, "#integrations")} className="text-gray-500 hover:text-[#145eff] text-sm transition-colors cursor-pointer">{t("footer.api")}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">{t("footer.company")}</h4>
            <ul className="space-y-2">
              <li><a href="#contacts" onClick={(e) => scrollToSection(e, "#contacts")} className="text-gray-500 hover:text-[#145eff] text-sm transition-colors cursor-pointer">{t("header.contacts")}</a></li>
              <li><a href="#" className="text-gray-500 hover:text-[#145eff] text-sm transition-colors">{t("footer.privacyPolicy")}</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">{t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  );
}