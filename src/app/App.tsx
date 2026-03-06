import React from "react";
import { Header, Footer } from "@/app/components/layout-elements";
import Platform from "@/app/pages/Platform";
import { Toaster } from "sonner";
import { LanguageProvider } from "./contexts/LanguageContext";

const App = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white flex flex-col font-sans selection:bg-primary selection:text-white">
        <Header />
        <main className="flex-grow">
          <Platform />
        </main>
        <Footer />
        <Toaster position="top-center" />
      </div>
    </LanguageProvider>
  );
};

export default App;