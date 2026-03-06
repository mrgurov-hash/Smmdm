import React from "react";
import { Link } from "react-router";
import { 
  Cpu, Zap, Code, Database, RefreshCw, Smartphone, 
  ArrowRight, CheckCircle2, Terminal
} from "lucide-react";
import { Button, Card, Badge } from "@/app/components/ui";
import { SectionHeader } from "@/app/components/common";

const IntegrationsPage = () => {
  return (
    <div className="flex flex-col gap-24 pb-24">
      {/* Hero */}
      <section className="pt-24 px-6">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="mb-6">API & Integrations</Badge>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Интеграции и API
          </h1>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
            Автоматизируйте жизненный цикл устройств и управляйте парком из ваших собственных систем с помощью мощного REST API.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg">Запросить доступ к API</Button>
            <Button variant="outline" size="lg" className="flex items-center gap-2">
              <Terminal size={18} /> Документация API
            </Button>
          </div>
        </div>
      </section>

      {/* Что можно автоматизировать */}
      <section className="container mx-auto px-6 md:px-12">
        <SectionHeader title="Что можно автоматизировать" centered />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <IntegrationCard 
            icon={Smartphone}
            title="Device Lifecycle"
            text="Автоматическое создание устройств, привязка к группам и удаление при выводе из эксплуатации."
          />
          <IntegrationCard 
            icon={Zap}
            title="Массовые действия"
            text="Запуск политик или управление тысячами устройств одним вызовом API."
          />
          <IntegrationCard 
            icon={Database}
            title="Статусы и данные"
            text="Получение данных о состоянии устройств в реальном времени для ваших BI и CRM систем."
          />
        </div>
      </section>

      {/* События/Вебхуки */}
      <section className="bg-slate-900 py-24 text-white">
        <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">События и Вебхуки</h2>
            <p className="text-lg opacity-80 mb-8">
              Реагируйте на изменения мгновенно. Мы отправляем уведомления в вашу систему при наступлении важных событий.
            </p>
            <ul className="space-y-4">
              {[
                "Устройство вошло в Geofencing зону",
                "Изменение статуса устройства",
                "Критическая ошибка приложения",
                "Устройство вышло в онлайн / ушло в офлайн"
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
{`POST /your-webhook-endpoint HTTP/1.1
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
      </section>

      {/* Примеры интеграций */}
      <section className="container mx-auto px-6 md:px-12">
        <SectionHeader title="Примеры интеграций" centered />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <PartnerCard title="CRM Systems" text="Salesforce, Bitrix24, AmoCRM" />
          <PartnerCard title="Logistics (WMS)" text="1C:Склад, SAP, Oracle" />
          <PartnerCard title="Education (LMS)" text="Moodle, Canvas, Blackboard" />
          <PartnerCard title="Service Desk" text="Jira, Zendesk, Freshdesk" />
        </div>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-6 md:px-12 max-w-2xl text-center">
        <h2 className="text-3xl font-bold mb-6">Готовы интегрироваться?</h2>
        <p className="text-lg text-muted-foreground mb-10">
          Получите тестовый токен и начните разработку на нашей Sandbox среде.
        </p>
        <Button size="lg" className="px-12">Запросить доступ</Button>
      </section>
    </div>
  );
};

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

export default IntegrationsPage;