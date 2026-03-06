import image_e6c445e8533184e80595c45878ed05a3b5716af1 from "@/assets/e6c445e8533184e80595c45878ed05a3b5716af1.png";
import image_f982484599ed1043231bee3b3abe67f11090d606 from "@/assets/f982484599ed1043231bee3b3abe67f11090d606.png";
import { useState, useEffect } from "react";
import { Button, Card, Badge, IconLabel } from "@/app/components/ui";
import { SectionHeader, FormField, Accordion } from "@/app/components/common";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useLanguage } from "../contexts/LanguageContext";
import {
  Smartphone, Shield, Zap, Users, GraduationCap, Building2, ShieldCheck, 
  Download, Settings, Layers, Package, AppWindow, MessageSquare, LineChart, 
  Cpu, Truck, Store, CreditCard, Monitor, Wrench, Database, Share2, 
  CheckCircle2, Check, Mail, MessageCircle, Globe, ArrowRight, Target, 
  MapPin, Phone
} from "lucide-react";

const PlatformPage = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: ""
  });

  const isFormValid = () => {
    return formData.name.trim() !== "" &&
           formData.company.trim() !== "" &&
           formData.email.trim() !== "" &&
           formData.phone.trim() !== "";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid()) {
      toast.success(t("contacts.form.successMessage"));
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        message: ""
      });
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section id="platform" className="pt-24 pb-32 px-6 bg-gradient-to-br from-primary to-blue-600 text-white relative overflow-hidden scroll-mt-16">
        {/* Decorative elements */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" />
        
        <div className="container mx-auto text-center max-w-4xl relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            {t("hero.title")}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed">
            {t("hero.subtitle")}
          </p>
        </div>

        {/* Capabilities Overview */}
        <div className="container mx-auto px-6 md:px-12 mt-20 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CapabilityCard 
              icon={Package}
              title={t("capabilities.deployment.title")}
              items={t("capabilities.deployment.items").split(',')}
            />
            <CapabilityCard 
              icon={ShieldCheck}
              title={t("capabilities.policies.title")}
              items={t("capabilities.policies.items").split(',')}
            />
            <CapabilityCard 
              icon={AppWindow}
              title={t("capabilities.kiosk.title")}
              items={t("capabilities.kiosk.items").split(',')}
            />
            <CapabilityCard 
              icon={MessageSquare}
              title={t("capabilities.communications.title")}
              items={t("capabilities.communications.items").split(',')}
            />
            <CapabilityCard 
              icon={LineChart}
              title={t("capabilities.monitoring.title")}
              items={t("capabilities.monitoring.items").split(',')}
            />
            <CapabilityCard 
              icon={Cpu}
              title={t("capabilities.integrations.title")}
              items={t("capabilities.integrations.items").split(',')}
            />
          </div>
        </div>
      </section>

      {/* Architecture / Implementation */}
      <section className="bg-muted/30 py-24">
        <div className="container mx-auto px-6 md:px-12">
          <SectionHeader 
            title={t("architecture.title")}
            subtitle={t("architecture.subtitle")}
            centered
          />
          <div className="grid md:grid-cols-3 gap-12 mt-16">
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6">
                <Download size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">{t("architecture.step1.title")}</h3>
              <p className="text-muted-foreground">{t("architecture.step1.text")}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6">
                <Settings size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">{t("architecture.step2.title")}</h3>
              <p className="text-muted-foreground">{t("architecture.step2.text")}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6">
                <Layers size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">{t("architecture.step3.title")}</h3>
              <p className="text-muted-foreground">{t("architecture.step3.text")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-24 relative overflow-hidden">
        {/* Decorative background with world map */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50/50 to-purple-50 pointer-events-none" />
        
        {/* World map SVG pattern */}
        <div className="absolute inset-0 opacity-[0.15] pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Dotted pattern for world map feel */}
            <defs>
              <pattern id="worldDots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="1.5" fill="#145eff" opacity="0.3"/>
              </pattern>
              <radialGradient id="mapGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#145eff" stopOpacity="0.2"/>
                <stop offset="100%" stopColor="#145eff" stopOpacity="0"/>
              </radialGradient>
            </defs>
            
            {/* Background dots */}
            <rect width="100%" height="100%" fill="url(#worldDots)"/>
            
            {/* Continents simplified shapes */}
            <ellipse cx="300" cy="200" rx="120" ry="80" fill="url(#mapGlow)"/>
            <ellipse cx="500" cy="300" rx="150" ry="100" fill="url(#mapGlow)"/>
            <ellipse cx="800" cy="250" rx="180" ry="120" fill="url(#mapGlow)"/>
            <ellipse cx="1100" cy="350" rx="140" ry="90" fill="url(#mapGlow)"/>
            <ellipse cx="200" cy="500" rx="100" ry="70" fill="url(#mapGlow)"/>
            <ellipse cx="900" cy="500" rx="120" ry="80" fill="url(#mapGlow)"/>
            
            {/* Connection lines */}
            <path d="M 300 200 Q 500 150 800 250" stroke="#145eff" strokeWidth="1" opacity="0.2" fill="none"/>
            <path d="M 800 250 Q 950 300 1100 350" stroke="#145eff" strokeWidth="1" opacity="0.2" fill="none"/>
            <path d="M 500 300 Q 700 400 900 500" stroke="#145eff" strokeWidth="1" opacity="0.2" fill="none"/>
          </svg>
        </div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <SectionHeader 
            title={t("globalPresence.title")}
            subtitle={t("globalPresence.subtitle")}
            centered
          />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 mb-12">
            <RegionCard 
              country={t("globalPresence.uzbekistan.country")}
              flag="🇺🇿"
              clients={t("globalPresence.uzbekistan.clients")}
              description={t("globalPresence.uzbekistan.description")}
            />
            <RegionCard 
              country={t("globalPresence.kazakhstan.country")}
              flag="🇰🇿"
              clients={t("globalPresence.kazakhstan.clients")}
              description={t("globalPresence.kazakhstan.description")}
            />
            <RegionCard 
              country={t("globalPresence.tajikistan.country")}
              flag="🇹🇯"
              clients={t("globalPresence.tajikistan.clients")}
              description={t("globalPresence.tajikistan.description")}
            />
            <RegionCard 
              country={t("globalPresence.latinAmerica.country")}
              flag="🌎"
              clients={t("globalPresence.latinAmerica.clients")}
              description={t("globalPresence.latinAmerica.description")}
            />
            <RegionCard 
              country={t("globalPresence.philippines.country")}
              flag="🇵🇭"
              clients={t("globalPresence.philippines.clients")}
              description={t("globalPresence.philippines.description")}
            />
            <RegionCard 
              country={t("globalPresence.zambia.country")}
              flag="🇿🇲"
              clients={t("globalPresence.zambia.clients")}
              description={t("globalPresence.zambia.description")}
            />
          </div>

          <div className="text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-6 sm:gap-8 px-6 sm:px-8 py-6 sm:py-4 bg-white rounded-2xl shadow-lg border border-gray-100 max-w-full">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary">40+</div>
                <div className="text-left">
                  <div className="text-sm sm:text-base lg:text-lg text-muted-foreground">{t("globalPresence.stats.clients")}</div>
                  <div className="text-xs sm:text-sm lg:text-base text-muted-foreground">{t("globalPresence.stats.regions")}</div>
                </div>
              </div>
              <div className="hidden sm:block w-px h-12 lg:h-16 bg-gray-200" />
              <div className="text-sm sm:text-base lg:text-lg text-muted-foreground text-center sm:text-left">
                <div className="font-semibold text-foreground mb-1">{t("globalPresence.stats.partners")}</div>
                <div className="flex items-center gap-2 justify-center sm:justify-start">
                  <span>Google</span>
                  <span>•</span>
                  <span>Samsung</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section id="solutions" className="py-24 scroll-mt-16 bg-gradient-to-b from-white to-blue-50/30">
        <div className="container mx-auto px-6 md:px-12">
          <SectionHeader 
            title={t('solutions.title')}
            subtitle={t('solutions.subtitle')}
            centered
          />
          
          <div className="grid lg:grid-cols-3 gap-8 mt-16">
            {/* Kiosk */}
            <Card className="flex flex-col h-full">
              <Badge className="w-fit mb-4">{t('solutions.kiosk.badge')}</Badge>
              <h3 className="text-2xl font-bold mb-4">{t('solutions.kiosk.title')}</h3>
              <p className="text-muted-foreground mb-8">{t('solutions.kiosk.description')}</p>
              
              <div className="space-y-3 mb-8 flex-grow">
                <p className="text-sm font-bold text-foreground">{t('solutions.kiosk.suitableFor')}</p>
                <div className="grid grid-cols-2 gap-4">
                  <IconLabel icon={Truck} label={t('solutions.kiosk.warehouse')} />
                  <IconLabel icon={Store} label={t('solutions.kiosk.retail')} />
                  <IconLabel icon={CreditCard} label={t('solutions.kiosk.pos')} />
                  <IconLabel icon={Monitor} label={t('solutions.kiosk.info')} />
                </div>
              </div>
            </Card>

            {/* Corporate */}
            <Card className="flex flex-col h-full">
              <Badge className="w-fit mb-4">{t('solutions.corporate.badge')}</Badge>
              <h3 className="text-2xl font-bold mb-4">{t('solutions.corporate.title')}</h3>
              <p className="text-muted-foreground mb-8">{t('solutions.corporate.description')}</p>
              
              <div className="space-y-3 mb-8 flex-grow">
                <p className="text-sm font-bold text-foreground">{t('solutions.corporate.suitableFor')}</p>
                <div className="grid grid-cols-2 gap-4">
                  <IconLabel icon={Truck} label={t('solutions.corporate.couriers')} />
                  <IconLabel icon={Wrench} label={t('solutions.corporate.engineers')} />
                  <IconLabel icon={Users} label={t('solutions.corporate.teams')} />
                </div>
              </div>
            </Card>

            {/* Education */}
            <Card className="flex flex-col h-full">
              <Badge className="w-fit mb-4">{t('solutions.education.badge')}</Badge>
              <h3 className="text-2xl font-bold mb-4">{t('solutions.education.title')}</h3>
              <p className="text-muted-foreground mb-8">{t('solutions.education.description')}</p>
              
              <div className="space-y-3 mb-8 flex-grow">
                <p className="text-sm font-bold text-foreground">{t('solutions.education.suitableFor')}</p>
                <div className="grid grid-cols-2 gap-4">
                  <IconLabel icon={GraduationCap} label={t('solutions.education.schools')} />
                  <IconLabel icon={Building2} label={t('solutions.education.colleges')} />
                  <IconLabel icon={GraduationCap} label={t('solutions.education.universities')} />
                </div>
              </div>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-primary/10 via-blue-50 to-primary/10 rounded-3xl p-12 mt-16 text-center border border-primary/20">
            <h2 className="text-2xl font-bold mb-4">{t('solutions.custom.title')}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('solutions.custom.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Smart Marketing */}
      <section id="smart-marketing" className="py-24 scroll-mt-16 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          {/* Hero */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
            <div>
              <Badge className="mb-6 bg-white/20 text-white border-white/30">{t('smartMarketing.badge')}</Badge>
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
                {t('smartMarketing.hero.title')}
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                {t('smartMarketing.hero.subtitle')}
              </p>
            </div>
            
            {/* Phone Mockup */}
            <div className="relative">
              <div className="relative mx-auto w-[300px]">
                {/* Phone frame */}
                <div className="relative bg-black rounded-[48px] p-3 shadow-2xl">
                  <div className="bg-white rounded-[36px] overflow-hidden">
                    <img 
                      src={image_f982484599ed1043231bee3b3abe67f11090d606}
                      alt="Smart Marketing Demo - Ozon Banking App"
                      className="w-full h-auto block"
                    />
                  </div>
                </div>
                
                {/* Decorative elements around phone */}
                
              </div>
            </div>
          </div>

          {/* Second Feature: App Installation */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
            <div className="relative order-2 lg:order-1">
              <div className="relative mx-auto w-[300px]">
                <div className="relative bg-black rounded-[48px] p-3 shadow-2xl">
                  <div className="bg-gradient-to-br from-purple-400 via-pink-300 to-blue-300 rounded-[36px] overflow-hidden">
                    <img 
                      src={image_e6c445e8533184e80595c45878ed05a3b5716af1} 
                      alt="App Installation Demo"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="inline-block px-4 py-1 bg-white/20 rounded-full text-sm font-medium mb-6">{t('smartMarketing.feature2.number')}</div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
                {t('smartMarketing.feature2.title')}
              </h2>
              <p className="text-xl text-white/90 leading-relaxed">
                {t('smartMarketing.feature2.description')}<span className="font-bold text-white">{t('smartMarketing.feature2.highlight')}</span>{t('smartMarketing.feature2.description2')}
              </p>
            </div>
          </div>

          {/* Use Cases Grid */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-1 bg-white/20 rounded-full text-sm font-medium mb-6">{t('smartMarketing.feature4.number')}</div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                {t('smartMarketing.feature4.title')} <span className="text-blue-200">{t('smartMarketing.feature4.highlight')}</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* SMS Optimization */}
              <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all">
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-white mb-4">
                    <MessageSquare size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {t('smartMarketing.smsOptimization.title')}
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    {t('smartMarketing.smsOptimization.description')}
                  </p>
                </div>
              </Card>

              {/* Video Auto-play */}
              <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all">
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-white mb-4">
                    <Target size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {t('smartMarketing.videoAutoplay.title')}
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    {t('smartMarketing.videoAutoplay.description')}
                  </p>
                </div>
              </Card>

              {/* Banner Display */}
              <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all">
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-white mb-4">
                    <Monitor size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {t('smartMarketing.bannerDisplay.title')}
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    {t('smartMarketing.bannerDisplay.description')}
                  </p>
                </div>
              </Card>

              {/* Geolocation */}
              <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all">
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-white mb-4">
                    <MapPin size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {t('smartMarketing.geolocation.title')}
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    {t('smartMarketing.geolocation.description')}
                  </p>
                </div>
              </Card>
            </div>
          </div>

          {/* Tech Features */}
          <div className="grid md:grid-cols-3 gap-8 mt-20">
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center text-white mx-auto mb-6">
                <Database size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{t('smartMarketing.dataCollection.title')}</h3>
              <p className="text-white/80">{t('smartMarketing.dataCollection.description')}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center text-white mx-auto mb-6">
                <Share2 size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{t('smartMarketing.segmentation.title')}</h3>
              <p className="text-white/80">{t('smartMarketing.segmentation.description')}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center text-white mx-auto mb-6">
                <LineChart size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{t('smartMarketing.analytics.title')}</h3>
              <p className="text-white/80">{t('smartMarketing.analytics.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section id="integrations" className="py-24 scroll-mt-16">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <Badge className="mb-6">{t('integrations.badge')}</Badge>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              {t('integrations.title')}
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {t('integrations.subtitle')}
            </p>
          </div>

          {/* Что можно автоматизировать */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <IntegrationCard 
              icon={Smartphone}
              title={t('integrations.deviceLifecycle.title')}
              text={t('integrations.deviceLifecycle.text')}
            />
            <IntegrationCard 
              icon={Zap}
              title={t('integrations.massActions.title')}
              text={t('integrations.massActions.text')}
            />
            <IntegrationCard 
              icon={Database}
              title={t('integrations.statusData.title')}
              text={t('integrations.statusData.text')}
            />
          </div>

          {/* События/Вебхуки */}
          <div className="bg-slate-900 py-16 px-6 md:px-12 rounded-[40px] text-white grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h3 className="text-3xl font-bold mb-6">{t('integrations.webhooks.title')}</h3>
              <p className="text-lg opacity-80 mb-8">
                {t('integrations.webhooks.description')}
              </p>
              <ul className="space-y-4">
                {[
                  t('integrations.webhooks.event1'),
                  t('integrations.webhooks.event2'),
                  t('integrations.webhooks.event3'),
                  t('integrations.webhooks.event4')
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center text-white">
                      <CheckCircle2 size={14} />
                    </div>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Card className="bg-slate-800 border-slate-700 p-6 font-mono text-sm overflow-hidden">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <pre className="text-blue-400">
{`POST /your-webhook-endpoint
Content-Type: application/json

{
  "event": "device.geofence.enter",
  "device_id": "7tech_9921",
  "timestamp": "2026-02-03T10:00:00Z",
  "data": {
    "zone": "Warehouse_A",
    "location": [55.75, 37.61]
  }
}`}
              </pre>
            </Card>
          </div>

          {/* Примеры интеграций */}
          <SectionHeader title={t('integrations.readyApi')} centered />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <PartnerCard title={t('integrations.crm')} text={t('integrations.crmText')} />
            <PartnerCard title={t('integrations.logistics')} text={t('integrations.logisticsText')} />
            <PartnerCard title={t('integrations.education')} text={t('integrations.educationText')} />
            <PartnerCard title={t('integrations.serviceDesk')} text={t('integrations.serviceDeskText')} />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-muted/30 py-24 scroll-mt-16">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <Badge className="mb-6">{t('pricing.badge')}</Badge>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              {t('pricing.title')}
            </h2>
          </div>

          {/* Main Pricing Block */}
          <div className="max-w-5xl mx-auto mb-16">
            <Card className="p-12 md:p-16 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20 border-2 border-primary/20 shadow-2xl relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/5 rounded-full blur-3xl" />
              
              <div className="relative z-10">
                {/* Price Header */}
                <div className="text-center mb-12">
                  <div className="inline-flex items-baseline gap-3 mb-6">
                    <span className="text-muted-foreground text-3xl">{t('pricing.from')}</span>
                    <span className="text-8xl md:text-9xl font-bold text-primary">$3</span>
                    <span className="text-3xl text-muted-foreground">{t('pricing.perMonth')}</span>
                  </div>
                </div>

                {/* What's Included */}
                <div className="mb-12">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                        <CheckCircle2 size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">{t('pricing.feature1.title')}</h4>
                        <p className="text-sm text-muted-foreground">{t('pricing.feature1.description')}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                        <Shield size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">{t('pricing.feature2.title')}</h4>
                        <p className="text-sm text-muted-foreground">{t('pricing.feature2.description')}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                        <Users size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">{t('pricing.feature3.title')}</h4>
                        <p className="text-sm text-muted-foreground">{t('pricing.feature3.description')}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                        <Settings size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">{t('pricing.feature4.title')}</h4>
                        <p className="text-sm text-muted-foreground">{t('pricing.feature4.description')}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                        <Layers size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">{t('pricing.feature5.title')}</h4>
                        <p className="text-sm text-muted-foreground">{t('pricing.feature5.description')}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                        <Database size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">{t('pricing.feature6.title')}</h4>
                        <p className="text-sm text-muted-foreground">{t('pricing.feature6.description')}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="text-center pt-8 border-t border-gray-200">
                  <Button 
                    size="lg" 
                    className="px-12"
                    onClick={() => {
                      document.getElementById('contacts')?.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                      });
                    }}
                  >
                    {t('pricing.cta')}
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="py-24 scroll-mt-16">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <Badge className="mb-6">{t('contacts.badge')}</Badge>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              {t('contacts.title')}
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {t('contacts.subtitle')}
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Info */}
            <div>
              <h3 className="text-2xl font-bold mb-8">{t('contacts.contactUs')}</h3>
              <div className="space-y-8">
                <ContactInfo 
                  icon={Mail}
                  title={t('contacts.email')}
                  text="info@sm-mdm.tech"
                />
                <ContactInfo 
                  icon={MessageCircle}
                  title={t('contacts.messengers')}
                  text="@MdmSupportBot (Telegram)"
                />
                <ContactInfo 
                  icon={Phone}
                  title={t('contacts.phone')}
                  text="+998508708735"
                />
              </div>
            </div>

            {/* Form */}
            <Card className="p-10 shadow-xl">
              <BitrixInlineForm />
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

const BitrixInlineForm = () => {
  useEffect(() => {
    const container = document.getElementById("bitrix-inline-form");
    if (!container) return;

    if (container.getAttribute("data-b24-loaded") === "true") return;
    container.setAttribute("data-b24-loaded", "true");

    const script = document.createElement("script");
    script.setAttribute("data-b24-form", "inline/5/7ta2rr");
    script.setAttribute("data-skip-moving", "true");
    script.innerHTML =
      "(function(w,d,u){var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/180000|0);var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);})(window,document,'https://cdn-ru.bitrix24.ru/b32926530/crm/form/loader_5.js');";

    container.appendChild(script);
  }, []);

  return <div id="bitrix-inline-form" />;
};

const CapabilityCard = ({ icon: Icon, title, items }: { icon: any; title: string; items: string[] }) => (
  <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20 text-white">
    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-white mb-6">
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-bold mb-4 text-white">{title}</h3>
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className="text-white/80 flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
          {item}
        </li>
      ))}
    </ul>
  </Card>
);

const MarketingFeature = ({ icon: Icon, title, text }: { icon: any; title: string; text: string }) => (
  <div className="p-6">
    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-muted-foreground leading-relaxed">{text}</p>
  </div>
);

const IntegrationCard = ({ icon: Icon, title, text }: { icon: any; title: string; text: string }) => (
  <Card className="p-8">
    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <p className="text-muted-foreground">{text}</p>
  </Card>
);

const PartnerCard = ({ title, text }: { title: string; text: string }) => (
  <Card className="text-center p-8 bg-muted/20">
    <h4 className="font-bold mb-2">{title}</h4>
    <p className="text-sm text-muted-foreground">{text}</p>
  </Card>
);

const PricingCard = ({ title, price, subtitle, features, recommended = false }: { 
  title: string; 
  price: string; 
  subtitle: string; 
  features: string[];
  recommended?: boolean;
}) => (
  <Card className={cn(
    "p-10 flex flex-col h-full relative",
    recommended ? "border-primary shadow-xl ring-2 ring-primary/10 scale-105 bg-white z-10" : ""
  )}>
    {recommended && (
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-bold py-1 px-3 rounded-full">
        ПОПУЛЯРНОЕ
      </div>
    )}
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <div className="flex items-baseline gap-1 mb-4">
      <span className="text-4xl font-bold text-primary">{price}</span>
    </div>
    <p className="text-sm text-muted-foreground mb-8">{subtitle}</p>
    <ul className="space-y-4 mb-10 flex-grow">
      {features.map((f, i) => (
        <li key={i} className="flex items-center gap-3 text-sm">
          <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <Check size={12} />
          </div>
          {f}
        </li>
      ))}
    </ul>
  </Card>
);

const ContactInfo = ({ icon: Icon, title, text }: { icon: any; title: string; text: string }) => (
  <div className="flex gap-4">
    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
      <Icon size={24} />
    </div>
    <div>
      <h4 className="font-bold mb-1">{title}</h4>
      <p className="text-muted-foreground">{text}</p>
    </div>
  </div>
);

const RegionCard = ({ country, flag, clients, description }: { country: string; flag: string; clients: string | number; description: string }) => (
  <Card className="p-8">
    <div className="flex items-center gap-4 mb-4">
      <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-xl font-bold">
        {flag}
      </div>
      <h3 className="text-xl font-bold">{country}</h3>
    </div>
    <p className="text-sm text-muted-foreground mb-4">
      {clients}
    </p>
    <p className="text-sm text-muted-foreground">
      {description}
    </p>
  </Card>
);

const ActionTypeCard = ({ icon: Icon, title, description }: { icon: any; title: string; description: string }) => (
  <Card className="p-8">
    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </Card>
);

export default PlatformPage;