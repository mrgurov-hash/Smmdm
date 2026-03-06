import React from "react";
import { Link } from "react-router";
import { 
  Target, Zap, MapPin, MessageSquare, LineChart, Cpu, 
  ArrowRight, CheckCircle2, Database, Share2
} from "lucide-react";
import { Button, Card, Badge } from "@/app/components/ui";
import { SectionHeader, FormField } from "@/app/components/common";

const SmartMarketingPage = () => {
  return (
    <div className="flex flex-col gap-24 pb-24">
      {/* Hero */}
      <section className="pt-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-primary/5 rounded-bl-[200px]" />
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="mb-6">Smart Marketing</Badge>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              Данные, геолокация и коммуникации на устройстве
            </h1>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Умный слой поверх MDM, который превращает устройство в мощный маркетинговый канал и источник инсайтов.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg">Запросить демо</Button>
              <Button variant="outline" size="lg">Посмотреть кейсы</Button>
            </div>
          </div>
          <div className="relative">
            <Card className="p-8 bg-white shadow-2xl relative z-10">
              <div className="space-y-6">
                <div className="flex items-center gap-4 border-b border-border pb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Target size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold">Targeted Message</p>
                    <p className="text-xs text-muted-foreground">User: Field Team A</p>
                  </div>
                </div>
                <div className="p-4 bg-muted rounded-xl">
                  <p className="text-sm font-medium mb-2">Новое спецпредложение!</p>
                  <p className="text-xs text-muted-foreground">Получите скидку 15% на оборудование в вашем регионе.</p>
                </div>
                <Button className="w-full">Отправить на 500 устройств</Button>
              </div>
            </Card>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </section>

      {/* Явное подчеркивание доступности */}
      <section className="container mx-auto px-6 md:px-12 text-center">
        <div className="bg-primary text-white p-12 rounded-[40px]">
          <h2 className="text-3xl font-bold mb-4">Доступно для всех сценариев</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Smart Marketing — это не отдельный продукт, а универсальный модуль, который можно подключить к любому решению: от киосков до корпоративных парков.
          </p>
        </div>
      </section>

      {/* Возможности */}
      <section className="container mx-auto px-6 md:px-12">
        <SectionHeader title="Возможности модуля" centered />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <MarketingFeature 
            icon={Zap} 
            title="Сбор событий и сигналов" 
            text="Отслеживание активности приложений, времени использования и системных триггеров." 
          />
          <MarketingFeature 
            icon={MapPin} 
            title="Геолокация и геотаргетинг" 
            text="Сценарии, основанные на местоположении устройства и входе в заданные зоны (Geofencing)." 
          />
          <MarketingFeature 
            icon={MessageSquare} 
            title="Коммуникации" 
            text="Rich Push уведомления, баннеры и кастомные экранные формы поверх любых приложений." 
          />
          <MarketingFeature 
            icon={Share2} 
            title="Сегментация" 
            text="Группировка устройств по поведенческим признакам, техническим характеристикам или внешним данным." 
          />
          <MarketingFeature 
            icon={Database} 
            title="Персонализация" 
            text="Индивидуальный контент для каждого пользователя на основе его профиля и истории действий." 
          />
          <MarketingFeature 
            icon={LineChart} 
            title="Аналитика" 
            text="Детальные отчеты по эффективности коммуникаций и конверсиям в целевые действия." 
          />
        </div>
      </section>

      {/* Примеры применения */}
      <section className="bg-muted/30 py-24">
        <div className="container mx-auto px-6 md:px-12">
          <SectionHeader title="Примеры применения" />
          <div className="grid lg:grid-cols-3 gap-8">
            <Card>
              <h4 className="text-xl font-bold mb-4">Ритейл / Киоски</h4>
              <p className="text-muted-foreground">Показ промо-материалов в режиме ожидания терминала, зависящих от времени суток или местоположения магазина.</p>
            </Card>
            <Card>
              <h4 className="text-xl font-bold mb-4">Образование</h4>
              <p className="text-muted-foreground">Таргетированные уведомления о начале занятий, опросы удовлетворенности студентов, важные академические объявления.</p>
            </Card>
            <Card>
              <h4 className="text-xl font-bold mb-4">Корпоративный парк</h4>
              <p className="text-muted-foreground">Опросы удовлетворенности сотрудников, важные уведомления о безопасности или новости компании.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Интеграции */}
      <section className="container mx-auto px-6 md:px-12 text-center">
        <SectionHeader 
          title="Интеграция с вашим маркетинговым стеком" 
          subtitle="Синхронизируйте данные Smart Marketing с вашими привычными инструментами."
          centered
        />
        <div className="flex flex-wrap justify-center gap-8 mt-12">
          {["CRM (Salesforce, Bitrix24)", "CDP / Marketing Automation", "Product Analytics (Mixpanel, Amplitude)", "Internal Databases"].map((item, i) => (
            <div key={i} className="px-6 py-3 bg-white border border-border rounded-full font-medium shadow-sm">
              {item}
            </div>
          ))}
        </div>
        <div className="mt-16">
          <Button size="lg" onClick={() => window.location.href='/integrations'}>Смотреть API возможности</Button>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-6 md:px-12 max-w-2xl">
        <Card className="p-12 text-center bg-primary text-white">
          <h2 className="text-3xl font-bold mb-4">Начните использовать данные уже сегодня</h2>
          <p className="opacity-90 mb-8">Оставьте заявку на расчет стоимости модуля для вашего парка устройств.</p>
          <Button className="bg-white text-primary hover:bg-white/90" size="lg">Запросить демо</Button>
        </Card>
      </section>
    </div>
  );
};

const MarketingFeature = ({ icon: Icon, title, text }: { icon: any; title: string; text: string }) => (
  <div className="p-6">
    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-muted-foreground leading-relaxed">{text}</p>
  </div>
);

export default SmartMarketingPage;