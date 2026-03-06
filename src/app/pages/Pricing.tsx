import React from "react";
import { Link } from "react-router";
import { Check, ArrowRight } from "lucide-react";
import { Button, Card, Badge } from "@/app/components/ui";
import { SectionHeader, Accordion } from "@/app/components/common";
import { cn } from "@/lib/utils";

const PricingPage = () => {
  return (
    <div className="flex flex-col gap-24 pb-24">
      {/* Hero */}
      <section className="pt-24 px-6 text-center">
        <div className="container mx-auto max-w-4xl">
          <Badge className="mb-6">Цены</Badge>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Пакеты и лицензирование
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Прозрачные тарифы, которые масштабируются вместе с вашим бизнесом. Выберите подходящий план для вашего парка устройств.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-3 gap-8">
          <PricingCard 
            title="Ежемесячно" 
            price="Гибко"
            subtitle="Для небольших проектов"
            features={[
              "Все базовые функции MDM",
              "Поддержка 8/5",
              "Стандартное API",
              "До 1000 устройств"
            ]}
          />
          <PricingCard 
            title="Ежегодно" 
            price="-20%"
            subtitle="Выбор большинства клиентов"
            features={[
              "Все функции модуля Smart Marketing",
              "Приоритетная поддержка 24/7",
              "Расширенное API и Webhooks",
              "Неограниченное кол-во устройств",
              "Выделенный менеджер"
            ]}
            recommended
          />
          <PricingCard 
            title="Enterprise" 
            price="Custom"
            subtitle="Для крупных корпораций"
            features={[
              "On-premise установка",
              "Private Cloud опции",
              "Индивидуальные доработки",
              "SLA 99.9%",
              "Обучение персонала"
            ]}
          />
        </div>
        <p className="text-center mt-12 text-muted-foreground italic">
          * Окончательная стоимость зависит от объема устройств и выбранных модулей.
        </p>
      </section>

      {/* FAQ по ценам */}
      <section className="container mx-auto px-6 md:px-12 max-w-4xl">
        <SectionHeader title="Частые вопросы по оплате" centered />
        <Accordion items={[
          { title: "Есть ли бесплатный период?", content: "Да, мы предоставляем полноценный доступ ко всем функциям на 14 дней для тестирования платформы." },
          { title: "Как рассчитывается стоимость для Smart Marketing?", content: "Стоимость модуля Smart Marketing добавляется к базовой лицензии MDM и зависит от количества активных маркетинговых сценариев и объема передаваемых данных." },
          { title: "Можно ли перейти на другой план в середине срока?", content: "Конечно. При переходе на более дорогой план мы сделаем перерасчет и учтем остаток неиспользованных средств." },
          { title: "Предоставляете ли вы скидки государственным учреждениям?", content: "Да, у нас есть специальные условия для образовательных и медицинских организаций. Свяжитесь с нами для получения предложения." }
        ]} />
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-6 md:px-12 max-w-2xl text-center">
        <Card className="p-12">
          <h2 className="text-3xl font-bold mb-6">Нужен точный расчет?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Оставьте заявку, и мы подготовим коммерческое предложение под ваши задачи.
          </p>
          <Link to="/contacts">
            <Button size="lg" className="px-12">Запросить расчёт</Button>
          </Link>
        </Card>
      </section>
    </div>
  );
};

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
    <Button variant={recommended ? "primary" : "outline"} className="w-full">
      Запросить расчёт
    </Button>
  </Card>
);

export default PricingPage;