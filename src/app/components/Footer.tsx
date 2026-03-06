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
            <a
              href="#"
              onClick={(e) => scrollToSection(e, "#")}
              className="flex items-center gap-3 mb-4 group cursor-pointer"
              aria-label="7tech MDM"
            >
              <svg
                width="70"
                height="127"
                viewBox="0 0 122 90"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-40 w-auto text-[#145eff]"
              >
                <path
                  d="M9.82861 80.4488L17.5044 61.4581L42.6871 51.7739L27.3343 89.7566L9.82861 80.4488Z"
                  fill="#145EFF"
                />
                <path
                  d="M-3.05176e-05 52.152L17.5044 61.4585V38.388L-3.05176e-05 29.0864V52.152Z"
                  fill="#145EFF"
                />
                <path
                  d="M29.3731 52.9082C27.875 53.4833 26.4274 53.8659 25.0303 54.0561C23.6545 54.2381 22.5768 54.2133 21.7972 53.9819L23.9325 48.5589C24.7335 48.7821 25.6826 48.8446 26.7797 48.7465C27.8764 48.6255 28.9491 48.3637 29.9978 47.9612C31.8598 47.2464 32.7829 46.4421 32.7673 45.5482C32.7609 45.1815 32.5316 45.0041 32.0794 45.0162C31.6481 44.9971 30.9496 45.0922 29.9837 45.3015C28.6952 45.5423 27.6312 45.6854 26.7917 45.7307C25.9732 45.7449 25.2477 45.5273 24.615 45.0779C23.9823 44.6286 23.6552 43.785 23.6336 42.5473C23.596 40.3927 24.4231 38.4023 26.1148 36.5761C27.8276 34.7187 30.0537 33.2643 32.7931 32.2127C34.0344 31.7362 35.2353 31.4137 36.3958 31.2451C37.5559 31.0536 38.568 31.0228 39.4321 31.1526L37.361 36.551C35.8893 36.1698 34.1582 36.3613 32.1679 37.1253C31.2262 37.4868 30.5223 37.8954 30.0563 38.3512C29.6112 38.7759 29.3923 39.1945 29.3995 39.6071C29.4059 39.9738 29.6247 40.1667 30.056 40.1858C30.5082 40.1737 31.2391 40.0778 32.2486 39.8979C33.4939 39.6506 34.5258 39.5199 35.3442 39.5057C36.1841 39.4832 36.9097 39.7008 37.5209 40.1584C38.1536 40.6078 38.4803 41.4285 38.5011 42.6203C38.5387 44.7749 37.701 46.7694 35.9878 48.6038C34.2747 50.4383 32.0698 51.873 29.3731 52.9082ZM65.5019 19.657C67.3424 18.9505 68.8288 18.9337 69.9609 19.6067C71.093 20.2797 71.6766 21.6248 71.7118 23.6418C71.725 24.3982 71.6635 25.1948 71.5273 26.0316L69.8133 37.0732L63.7138 39.4146L65.3435 29.0976C65.4215 28.6293 65.4567 28.1773 65.4491 27.7418C65.4347 26.9167 65.2313 26.3717 64.8388 26.107C64.4678 25.8341 63.9292 25.8332 63.2229 26.1043C61.2753 26.8519 60.0681 28.6652 59.6013 31.5441L57.9995 41.6081L51.8999 43.9495L53.5617 33.6202C53.6406 33.1977 53.676 32.7572 53.668 32.2988C53.6536 31.4736 53.4501 30.9287 53.0577 30.664C52.6863 30.3682 52.1474 30.3558 51.4412 30.6269C49.4722 31.3827 48.2547 33.223 47.7886 36.1478L46.2177 46.1307L40.1182 48.4721L43.26 28.5063L49.0385 26.2882L48.7184 28.3147C50.1267 26.2973 51.8475 24.8984 53.8807 24.118C55.0364 23.6743 56.0789 23.5395 57.0084 23.7134C57.9375 23.8644 58.6568 24.3382 59.1662 25.1349C59.9623 23.8371 60.891 22.7307 61.9523 21.8156C63.0346 20.8695 64.2178 20.1499 65.5019 19.657ZM73.6826 23.7506L89.734 17.589L89.0956 21.7453L73.0442 27.9068L73.6826 23.7506Z"
                  fill="#145EFF"
                />
                <path
                  d="M50.059 64.8951C50.0218 65.2325 50.0039 65.447 50.0055 65.5386C50.024 66.593 50.5682 66.9148 51.6383 66.504C52.2161 66.2822 52.8229 65.8647 53.4586 65.2515L54.3076 69.4597C53.1219 70.6533 51.6195 71.5992 49.8003 72.2975C48.0026 72.9876 46.5603 73.0567 45.4734 72.5048C44.4079 71.9447 43.8601 70.8051 43.8301 69.086C43.8185 68.4213 43.8618 67.8162 43.96 67.2709L45.0083 60.673L42.4401 61.6588L43.2858 56.4193L45.822 55.4457L46.6362 50.2529L52.7358 47.9115L51.9215 53.1044L55.8701 51.5886L55.0565 56.8158L51.1078 58.3316L50.059 64.8951ZM75.4383 51.311C75.454 52.2049 75.354 53.2701 75.1386 54.5065L62.3617 59.4111C62.6109 61.346 63.9447 61.8493 66.3632 60.9209C67.1336 60.6252 67.8805 60.2116 68.6038 59.6801C69.327 59.1486 69.9732 58.5199 70.5422 57.7938L73.1498 60.9117C71.1446 63.2966 68.6867 65.0477 65.776 66.165C63.9355 66.8716 62.3029 67.1521 60.8784 67.0067C59.4749 66.8301 58.3769 66.2594 57.5844 65.2945C56.8129 64.2985 56.4122 62.9409 56.3822 61.2218C56.3466 59.1819 56.7533 57.1798 57.6024 55.2155C58.4724 53.2202 59.6913 51.4601 61.2591 49.9353C62.8478 48.3794 64.6695 47.2071 66.7241 46.4184C68.4576 45.753 69.9724 45.5176 71.2686 45.7123C72.5857 45.8759 73.5975 46.4451 74.3039 47.4199C75.0318 48.3866 75.4099 49.6836 75.4383 51.311ZM66.5162 51.1709C65.5317 51.5488 64.7127 52.1516 64.0592 52.9793C63.4054 53.7841 62.9372 54.7368 62.6548 55.8374L69.8138 53.0893C69.8179 52.0955 69.5156 51.4386 68.9068 51.1185C68.2975 50.7755 67.5006 50.7929 66.5162 51.1709ZM86.1515 58.3436C84.311 59.0501 82.6891 59.3266 81.286 59.1729C79.9039 58.9882 78.8164 58.4019 78.0235 57.4141C77.252 56.418 76.8515 55.0719 76.8219 53.3758C76.7863 51.3358 77.2144 49.3255 78.1063 47.3448C78.9982 45.3642 80.2599 43.5877 81.8914 42.0153C83.523 40.443 85.366 39.2625 87.4206 38.4738C89.3896 37.718 91.0988 37.5118 92.5484 37.8553C93.9975 38.1758 95.0678 39.011 95.7593 40.3608L90.6048 45.0045C89.9339 43.6007 88.7959 43.2068 87.1908 43.823C85.9495 44.2995 84.9306 45.1752 84.1341 46.45C83.3591 47.7167 82.9847 49.1064 83.0111 50.6192C83.0303 51.7194 83.3347 52.491 83.9241 52.9339C84.5346 53.3456 85.3856 53.342 86.4771 52.923C87.2903 52.6108 88.0039 52.1408 88.6177 51.5129C89.2316 50.885 89.7558 50.0607 90.1905 49.0401L94.7032 50.2153C93.8949 52.0485 92.7384 53.6807 91.2337 55.1121C89.7504 56.5353 88.0563 57.6124 86.1515 58.3436ZM109.687 29.9263C111.571 29.2034 113.1 29.1702 114.275 29.8268C115.45 30.4834 116.055 31.8431 116.091 33.906C116.104 34.6624 116.043 35.4361 115.905 36.227L114.159 47.2809L108.06 49.6223L109.688 39.2366C109.767 38.8141 109.803 38.3851 109.795 37.9496C109.766 36.2993 108.949 35.7822 107.344 36.3983C106.274 36.8091 105.403 37.5012 104.73 38.4747C104.058 39.4252 103.594 40.6529 103.34 42.1579L101.768 52.0376L95.6681 54.379L99.9741 27.0441L106.074 24.7027L104.648 33.73C106.103 31.9254 107.783 30.6575 109.687 29.9263Z"
                  fill="#145EFF"
                />
              </svg>
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