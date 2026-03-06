import React, { useState } from "react";
import { Mail, MessageCircle, MapPin, Globe, Phone } from "lucide-react";
import { Button, Card, Badge } from "@/app/components/ui";
import { SectionHeader, FormField } from "@/app/components/common";
import { toast } from "sonner";

const ContactsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    scenario: "",
    devices: "",
    message: ""
  });

  const isFormValid = () => {
    return formData.name.trim() !== "" &&
           formData.company.trim() !== "" &&
           formData.email.trim() !== "" &&
           formData.phone.trim() !== "" &&
           formData.scenario !== "" &&
           formData.devices.trim() !== "" &&
           formData.message.trim() !== "";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid()) {
      toast.success("Ваша заявка отправлена! Мы свяжемся с вами в ближайшее время.");
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        scenario: "",
        devices: "",
        message: ""
      });
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="flex flex-col gap-24 pb-24">
      {/* Hero */}
      <section className="pt-24 px-6">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="mb-6">Контакты</Badge>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Свяжитесь с нами
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Мы работаем по всему миру и готовы обсудить ваш проект в любом часовом поясе.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16">
        {/* Info */}
        <div className="space-y-12">
          <div>
            <h2 className="text-2xl font-bold mb-8">Связаться с нами</h2>
            <div className="space-y-8">
              <ContactInfo 
                icon={Mail}
                title="Email"
                text="sales@7tech.mdm"
              />
              <ContactInfo 
                icon={MessageCircle}
                title="Мессенджеры"
                text="@seven_tech_mdm (Telegram)"
              />
              <ContactInfo 
                icon={Globe}
                title="Регионы присутствия"
                text="Казахстан, Узбекистан, ОАЭ"
              />
            </div>
          </div>
          
          <div className="p-8 bg-muted rounded-[32px]">
            <h3 className="font-bold mb-4">Что нам прислать для быстрого ответа?</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>• Страна и регион использования</li>
              <li>• Выбранный сценарий (или несколько)</li>
              <li>• Тип и количество устройств</li>
              <li>• Необходимость модуля Smart Marketing</li>
            </ul>
          </div>
        </div>

        {/* Form */}
        <Card className="p-10 shadow-xl">
          <h2 className="text-2xl font-bold mb-8">Отправить заявку</h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid sm:grid-cols-2 gap-6">
              <FormField 
                label="Ваше имя" 
                placeholder="Иван" 
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
              />
              <FormField 
                label="Компания" 
                placeholder="Название" 
                value={formData.company}
                onChange={(e) => handleInputChange("company", e.target.value)}
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <FormField 
                label="Email" 
                type="email" 
                placeholder="ivan@mail.ru" 
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
              />
              <FormField 
                label="Телефон / TG" 
                placeholder="+7 (999) 000-00-00" 
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
              />
            </div>
            <FormField 
              label="Сценарий" 
              type="select" 
              placeholder="Выберите сценарий" 
              options={["Kiosk & Terminals", "Education", "Corporate", "Другое"]} 
              value={formData.scenario}
              onChange={(e) => handleInputChange("scenario", e.target.value)}
            />
            <FormField 
              label="Кол-во устройств" 
              placeholder="например, 500" 
              value={formData.devices}
              onChange={(e) => handleInputChange("devices", e.target.value)}
            />
            <FormField 
              label="Сообщение" 
              textarea 
              placeholder="Расскажите о ваших задачах..." 
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
            />
            <Button 
              size="lg" 
              className="w-full" 
              type="submit"
              disabled={!isFormValid()}
            >
              Отправить заявку
            </Button>
            <p className="text-center text-xs text-muted-foreground">
              Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности.
            </p>
          </form>
        </Card>
      </section>
    </div>
  );
};

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

export default ContactsPage;