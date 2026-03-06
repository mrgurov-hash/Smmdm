import * as React from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/app/components/Button";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLanguage } from "../contexts/LanguageContext";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("");
  const { t, language } = useLanguage();

  const NAV_LINKS = React.useMemo(() => [
    { label: t("header.platform"), href: "#platform" },
    { label: t("header.solutions"), href: "#solutions" },
    { label: t("header.smartMarketing"), href: "#smart-marketing" },
    { label: t("header.integrations"), href: "#integrations" },
    { label: t("header.pricing"), href: "#pricing" },
    { label: t("header.contacts"), href: "#contacts" },
  ], [t]);

  // Smooth scroll to section
  const scrollToSection = (href: string) => {
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    
    if (element) {
      const headerOffset = 80; // Height of sticky header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({ 
        top: offsetPosition, 
        behavior: "smooth" 
      });
      setIsOpen(false);
    } else {
      console.error(`Element with id "${targetId}" not found`);
    }
  };

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    setIsOpen(false);
  };

  // Track active section on scroll
  React.useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_LINKS.map(link => link.href.replace("#", ""));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection("#" + sections[i]);
          break;
        }
      }

      // If at the top, no section is active
      if (window.scrollY < 200) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [NAV_LINKS]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-8">
          <a href="#" className="flex items-center gap-2" onClick={(e) => { e.preventDefault(); scrollToTop(); }}>
            <div className="h-8 w-8 rounded-lg bg-[#145eff] flex items-center justify-center text-white font-bold text-xl">7</div>
            <span className="text-xl font-bold tracking-tight text-gray-900">7tech <span className="text-[#145eff]">MDM</span></span>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-[#145eff]",
                  activeSection === link.href ? "text-[#145eff]" : "text-gray-600"
                )}
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <LanguageSwitcher />
          <Button 
            variant="primary" 
            size="sm"
            onClick={() => scrollToSection("#contacts")}
          >
            {t("header.requestDemo")}
          </Button>
        </div>

        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-6 space-y-4 shadow-xl">
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={cn(
                  "text-lg font-medium text-left",
                  activeSection === link.href ? "text-[#145eff]" : "text-gray-600"
                )}
              >
                {link.label}
              </button>
            ))}
            <div className="h-px bg-gray-100 my-2" />
            <div className="flex items-center justify-center">
              <LanguageSwitcher />
            </div>
            <Button 
              variant="primary" 
              className="w-full"
              onClick={() => scrollToSection("#contacts")}
            >
              {t("header.requestDemo")}
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}