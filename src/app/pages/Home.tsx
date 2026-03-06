import React from "react";
import { Link } from "react-router";
import { 
  ArrowRight, CheckCircle2, ShieldCheck, Zap, 
  Smartphone, BarChart3, Database, Globe, 
  CreditCard, Store, GraduationCap, Building2,
  Package, Settings, AppWindow, MessageSquare, LineChart, Cpu, Truck, Wrench, Users
} from "lucide-react";
import { Button, Card, Badge, IconLabel } from "@/app/components/ui";
import { SectionHeader, Accordion, Stepper, FormField } from "@/app/components/common";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { motion } from "motion/react";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-24 pb-24">
      {/* Hero Section */}
      <section className="relative pt-12 md:pt-24 px-6 overflow-hidden">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="z-10"
          >
            <Badge className="mb-6">Enterprise MDM Platform</Badge>
            <h1 className="md:text-7xl font-bold tracking-tight mb-6 leading-[1.1] text-[48px]">
              7tech — единая платформа для управления мобильными устройствами
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-lg">
              Киоски, терминалы, образование и корпоративные парки — единые политики и управление.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="px-10">Запросить демо</Button>
              <Button variant="outline" size="lg">Скачать презентацию</Button>
            </div>
            <p className="text-sm text-muted-foreground italic">
              Данные, геолокация, коммуникации доступены в любом сценарии.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="absolute -inset-4 bg-primary/5 rounded-[40px] -rotate-2" />
            <div className="relative rounded-3xl overflow-hidden border border-border shadow-2xl">
               <ImageWithFallback 
                src="https://images.unsplash.com/photo-1736134869040-1c1853bc23cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjB0ZWNobm9sb2d5JTIwZGFzaGJvYXJkJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc3MDEyMDY2OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                alt="MDM Dashboard" 
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="container mx-auto px-6 md:px-12">
        <SectionHeader 
          title="Направления использования 7tech MDM"
          centered
        />
        <div className="grid md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <Card className="flex flex-col h-full group">
            <Badge className="w-fit mb-4">Kiosk</Badge>
            <h3 className="text-2xl font-bold mb-3">Kiosk & Terminals — ТСД, терминалы, инфопанели</h3>
            <p className="text-muted-foreground mb-6">Киоск-режим, белый список приложений, централизованные обновления и единые политики для парка.</p>
            <div className="space-y-3 mb-8 flex-grow">
              <p className="text-sm font-bold text-foreground">Подходит:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <IconLabel icon={Truck} label="Склад/логистика" />
                <IconLabel icon={Store} label="Ритейл" />
                <IconLabel icon={CreditCard} label="PoS/кассы" />
                <IconLabel icon={Smartphone} label="Инфоэкраны" />
              </div>
            </div>
            <Link to="/solutions/kiosk">
              <Button variant="secondary" className="w-full group-hover:bg-primary group-hover:text-white transition-all">
                Подробнее <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </Card>

          {/* Card 2 */}
          <Card className="flex flex-col h-full group">
            <Badge className="w-fit mb-4">Education</Badge>
            <h3 className="text-2xl font-bold mb-3">Education — управляемые устройства для обучения</h3>
            <p className="text-muted-foreground mb-6">Доступ только к разрешённым приложениям, профили по классам/группам, быстрый онбординг устройств.</p>
            <div className="space-y-3 mb-8 flex-grow">
              <p className="text-sm font-bold text-foreground">Подходит:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <IconLabel icon={GraduationCap} label="Школы" />
                <IconLabel icon={Building2} label="Колледжи" />
                <IconLabel icon={GraduationCap} label="Вузы" />
              </div>
            </div>
            <Link to="/solutions/education">
              <Button variant="secondary" className="w-full group-hover:bg-primary group-hover:text-white transition-all">
                Подробнее <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </Card>

          {/* Card 3 */}
          <Card className="flex flex-col h-full group">
            <Badge className="w-fit mb-4">Corporate</Badge>
            <h3 className="text-2xl font-bold mb-3">Corporate — управление корпоративными парками</h3>
            <p className="text-muted-foreground mb-6">Развёртывание, политики, приложения и контроль парка для служебных смартфонов и полевых команд.</p>
            <div className="space-y-3 mb-8 flex-grow">
              <p className="text-sm font-bold text-foreground">Подходит:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <IconLabel icon={Truck} label="Курьеры" />
                <IconLabel icon={Wrench} label="Сервисные инженеры" />
                <IconLabel icon={Users} label="Выездные команды" />
              </div>
            </div>
            <Link to="/solutions/corporate">
              <Button variant="secondary" className="w-full group-hover:bg-primary group-hover:text-white transition-all">
                Подробнее <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </Card>
        </div>
      </section>

      {/* Smart Marketing Banner */}
      <section className="bg-primary/5 py-24">
        <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-4">Smart Marketing — доступно при любом варианте использования 7tech MDM</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Слой поверх MDM: сбор данных (по вашим правилам), геолокация и маркетинговые коммуникации на устройство.
            </p>
            <ul className="grid sm:grid-cols-2 gap-4 mb-10">
              {[
                "Сбор событий и сигналов",
                "Геолокация и геотаргетинг",
                "Коммуникации: push и элементы интерфейса",
                "Сегментация и персонализация",
                "Интеграции с CRM/CDP через API"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <CheckCircle2 size={14} />
                  </div>
                  <span className="text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <Link to="/smart-marketing">
              <Button size="lg">Подробнее про Smart Marketing</Button>
            </Link>
          </div>
          <div className="relative">
             <ImageWithFallback 
              src="https://images.unsplash.com/photo-1768228103038-98c2ea91a687?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5rJTIwZmluYW5jZSUyMHRlY2hub2xvZ3klMjBtb2JpbGV8ZW58MXx8fHwxNzcwMTEyNjYzfDA&ixlib=rb-4.1.0&q=80&w=1080" 
              alt="Smart Marketing" 
              className="rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Platform Section */}
      <section className="container mx-auto px-6 md:px-12">
        <SectionHeader 
          title="Платформа 7tech MDM: установка → политики → приложения → контроль"
          centered
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover:-translate-y-1 transition-transform">
            <Package className="text-primary mb-4" size={32} />
            <h4 className="text-xl font-bold mb-4">Развёртывание</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Массовое подключение устройств</li>
              <li>• Профили по группам/ролям</li>
              <li>• Быстрый Zero-touch онбординг</li>
            </ul>
          </Card>
          <Card className="hover:-translate-y-1 transition-transform">
            <ShieldCheck className="text-primary mb-4" size={32} />
            <h4 className="text-xl font-bold mb-4">Политики и управление</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Дистанционная настройка ограничений</li>
              <li>• Работа по расписанию</li>
              <li>• Гео-фенсинг и блокировки</li>
            </ul>
          </Card>
          <Card className="hover:-translate-y-1 transition-transform">
            <AppWindow className="text-primary mb-4" size={32} />
            <h4 className="text-xl font-bold mb-4">Киоск и приложения</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Режим одного приложения</li>
              <li>• Белый список контента</li>
              <li>• Удалённая установка ПО</li>
            </ul>
          </Card>
          <Card className="hover:-translate-y-1 transition-transform">
            <MessageSquare className="text-primary mb-4" size={32} />
            <h4 className="text-xl font-bold mb-4">Коммуникации и воздействия</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Экранные уведомления (Push)</li>
              <li>• Кастомные интерфейсы воздействия</li>
              <li>• Интерактивные сценарии</li>
            </ul>
          </Card>
          <Card className="hover:-translate-y-1 transition-transform">
            <LineChart className="text-primary mb-4" size={32} />
            <h4 className="text-xl font-bold mb-4">Мониторинг и отчётность</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Онлайн статусы парка</li>
              <li>• Детальный аудит действий</li>
            </ul>
          </Card>
          <Card className="hover:-translate-y-1 transition-transform">
            <Cpu className="text-primary mb-4" size={32} />
            <h4 className="text-xl font-bold mb-4">Интеграции / API</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Full REST API доступ</li>
              <li>• Webhooks на события</li>
            </ul>
            <Link to="/integrations">
               <Button variant="link" className="mt-4 p-0">К API <ArrowRight size={14} className="ml-1" /></Button>
            </Link>
          </Card>
        </div>
      </section>

      {/* Stepper Section */}
      <section className="container mx-auto px-6 md:px-12 text-center">
        <SectionHeader title="Как начать" centered />
        <div className="max-w-4xl mx-auto py-12">
          <Stepper steps={[
            "Выбираем сценарий",
            "Настраиваем политики и контент (Smart Marketing)",
            "Запускаем пилот и фиксируем метрики"
          ]} />
          <Button size="lg" className="mt-16">Обсудить пилот</Button>
        </div>
      </section>

      {/* Pricing Teaser */}
      <section className="container mx-auto px-6 md:px-12">
        <SectionHeader title="Пакеты и лицензирование" centered />
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center p-10">
            <h4 className="text-xl font-bold mb-4">Ежемесячно</h4>
            <ul className="space-y-4 mb-8 text-muted-foreground">
              <li>• Гибкая оплата</li>
              <li>• Все базовые функции MDM</li>
            </ul>
            <Button variant="outline" className="w-full">Запросить расчёт</Button>
          </Card>
          <Card className="text-center p-10 border-primary shadow-lg ring-1 ring-primary/20 scale-105 bg-white z-10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-bold py-1 px-3 rounded-full">RECOMMENDED</div>
            <h4 className="text-xl font-bold mb-4">Ежегодно</h4>
            <ul className="space-y-4 mb-8 text-muted-foreground">
              <li>• Выгода до 20%</li>
              <li>• Приоритетная поддержка</li>
              <li>• Полный доступ к модулям</li>
            </ul>
            <Button className="w-full">Запросить расчёт</Button>
          </Card>
          <Card className="text-center p-10">
            <h4 className="text-xl font-bold mb-4">Enterprise</h4>
            <ul className="space-y-4 mb-8 text-muted-foreground">
              <li>• Индивидуальные условия</li>
              <li>• On-premise / Private Cloud</li>
              <li>• Выделенный менеджер</li>
            </ul>
            <Button variant="outline" className="w-full">Запросить расчёт</Button>
          </Card>
        </div>
        <p className="text-center mt-8 text-sm text-muted-foreground">Стоимость зависит от объёма устройств и выбранных модулей.</p>
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-6 md:px-12 max-w-4xl">
        <SectionHeader title="Частые вопросы" centered />
        <Accordion items={[
          { title: "Можно ли использовать разные сценарии одновременно?", content: "Да, платформа 7tech MDM позволяет управлять смешанным парком устройств, применяя разные политики (Kiosk, Education, Corporate) к разным группам внутри одного личного кабинета." },
          { title: "Smart Marketing доступен только для маркетинга?", content: "Нет, инструменты Smart Marketing (сбор данных, геолокация, push-коммуникации) могут использоваться для операционных задач, уведомлений о безопасности или сбора технической статистики." },
          { title: "Сколько времени обычно занимает пилот?", content: "Стандартный пилот занимает от 2 до 4 недель в зависимости от сложности сценария и количества устройств." },
          { title: "Есть ли интеграции с нашими системами?", content: "Да, мы предоставляем полноценное REST API и механизм вебхуков, что позволяет легко интегрировать MDM с вашими CRM, ERP или аналитическими системами." }
        ]} />
      </section>

      {/* Final CTA Form */}
      <section className="container mx-auto px-6 md:px-12">
        <div className="bg-primary rounded-[32px] p-8 md:p-16 text-white grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Расскажите о вашем сценарии — предложим конфигурацию и план внедрения</h2>
            <p className="text-lg opacity-90 mb-8">
              Достаточно страны, типа устройств/продукта, объёма парка и выбранных сценариев (включая Smart Marketing).
            </p>
            <div className="flex gap-4">
              <Button className="bg-white text-primary hover:bg-white/90">Отправить заявку</Button>
              <Button variant="ghost" className="text-white border-white/20 border hover:bg-white/10">Написать в Telegram</Button>
            </div>
            <p className="mt-6 text-sm opacity-70">Можно сразу написать в мессенджер — ответим оперативно.</p>
          </div>
          <Card className="text-foreground p-8">
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-4">
                <FormField label="Компания" placeholder="ООО Название" />
                <FormField label="Страна" placeholder="Россия" />
              </div>
              <FormField label="Сценарий" type="select" placeholder="Выберите сценарий" options={["Kiosk & Terminals", "Education", "Corporate", "Несколько"]} />
              <FormField label="Кол-во устройств" placeholder="например, 500" />
              <FormField label="Контакт (email/мессенджер)" placeholder="example@mail.ru" />
              <FormField label="Комментарий" textarea placeholder="Ваши задачи и пожелания..." />
              <Button className="w-full" size="lg">Отправить заявку</Button>
            </form>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default HomePage;