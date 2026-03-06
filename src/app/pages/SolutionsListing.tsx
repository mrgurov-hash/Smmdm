import React from "react";
import { Link } from "react-router";
import { 
  ArrowRight, CreditCard, Store, GraduationCap, Building2, Smartphone, 
  Truck, Wrench, Users, Monitor
} from "lucide-react";
import { Button, Card, Badge, IconLabel } from "@/app/components/ui";
import { SectionHeader } from "@/app/components/common";

const solutions = [
  {
    id: "kiosk",
    badge: "Kiosk",
    title: "Kiosk & Terminals — ТСД, терминалы, инфопанели",
    text: "Киоск-режим, белый список приложений, централизованные обновления и единые политики для парка.",
    items: [
      { icon: Truck, label: "Склад/логистика" },
      { icon: Store, label: "Ритейл" },
      { icon: CreditCard, label: "PoS/кассы" },
      { icon: Monitor, label: "Инфоэкраны" }
    ],
    href: "/solutions/kiosk"
  },
  {
    id: "education",
    badge: "Education",
    title: "Education — управляемые устройства для обучения",
    text: "Доступ только к разрешённым приложениям, профили по классам/группам, быстрый онбординг устройств.",
    items: [
      { icon: GraduationCap, label: "Школы" },
      { icon: Building2, label: "Колледжи" },
      { icon: GraduationCap, label: "Вузы" }
    ],
    href: "/solutions/education"
  },
  {
    id: "corporate",
    badge: "Corporate",
    title: "Corporate — управление корпоративными парками",
    text: "Развёртывание, политики, приложения и контроль парка для служебных смартфонов и полевых команд.",
    items: [
      { icon: Truck, label: "Курьеры" },
      { icon: Wrench, label: "Сервисные инженеры" },
      { icon: Users, label: "Выездные команды" }
    ],
    href: "/solutions/corporate"
  }
];

const SolutionsListingPage = () => {
  return (
    <div className="flex flex-col gap-24 pb-24">
      <section className="pt-24 px-6">
        <div className="container mx-auto text-center">
          <Badge className="mb-6">Наши Решения</Badge>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Решения на базе 7tech MDM
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Мы разработали специализированные конфигурации для ключевых бизнес-сценариев, чтобы вы могли начать работу максимально быстро.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-8">
          {solutions.map((s) => (
            <Card key={s.id} className="flex flex-col h-full hover:border-primary/50 transition-colors">
              <Badge className="w-fit mb-4">{s.badge}</Badge>
              <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
              <p className="text-muted-foreground mb-8">{s.text}</p>
              
              <div className="space-y-3 mb-10 flex-grow">
                <p className="text-sm font-bold text-foreground">Подходит для:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {s.items.map((item, idx) => (
                    <IconLabel key={idx} icon={item.icon} label={item.label} />
                  ))}
                </div>
              </div>

              <Link to={s.href} className="mt-auto">
                <Button variant="secondary" className="w-full">
                  Подробнее <ArrowRight size={18} className="ml-2" />
                </Button>
              </Link>
            </Card>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-6 md:px-12 text-center">
        <div className="bg-muted/50 rounded-3xl p-12">
          <h2 className="text-3xl font-bold mb-6">Не нашли подходящий сценарий?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            7tech MDM — это гибкая платформа. Мы можем настроить индивидуальную конфигурацию под ваши уникальные бизнес-задачи.
          </p>
          <Button size="lg" onClick={() => window.location.href='/contacts'}>Обсудить архитектуру</Button>
        </div>
      </section>
    </div>
  );
};

export default SolutionsListingPage;