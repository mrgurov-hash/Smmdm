import React from "react";
import { Link, useLocation } from "react-router";
import { CheckCircle2, ArrowRight, Zap, Target, LineChart, ShieldCheck } from "lucide-react";
import { Button, Card, Badge } from "@/app/components/ui";
import { SectionHeader, Accordion, FormField } from "@/app/components/common";
import { cn } from "@/lib/utils";

interface SolutionPageProps {
  title: string;
  heroText: string;
  resultLine: string;
  tasks: string[];
  steps: { title: string; text: string }[];
  config: string[];
  marketingBenefit: string;
  metrics: string[];
  faq: { title: string; content: string }[];
  pilotDuration: string;
}

const Breadcrumbs = () => {
  const { pathname } = useLocation();
  const paths = pathname.split("/").filter(Boolean);
  
  return (
    <nav className="flex items-center gap-2 text-xs font-medium text-muted-foreground mb-8">
      <Link to="/" className="hover:text-primary">Главная</Link>
      {paths.map((p, i) => (
        <React.Fragment key={p}>
          <ArrowRight size={10} />
          <Link 
            to={`/${paths.slice(0, i + 1).join("/")}`} 
            className={cn("capitalize hover:text-primary", i === paths.length - 1 && "text-foreground pointer-events-none")}
          >
            {p === "solutions" ? "Решения" : p.replace(/-/g, " ")}
          </Link>
        </React.Fragment>
      ))}
    </nav>
  );
};

export const SolutionTemplate: React.FC<SolutionPageProps> = ({
  title, heroText, resultLine, tasks, steps, config, marketingBenefit, metrics, faq, pilotDuration
}) => {
  return (
    <div className="flex flex-col gap-24 pb-24">
      {/* Hero */}
      <section className="pt-24 px-6 bg-primary/5">
        <div className="container mx-auto text-center max-w-4xl pb-24">
          <Breadcrumbs />
          <Badge className="mb-6">{title}</Badge>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            {heroText}
          </h1>
          <p className="text-xl text-primary font-medium mb-10">
            {resultLine}
          </p>
          <Button size="lg">Запросить демо</Button>
        </div>
      </section>

      {/* Какие задачи решаем */}
      <section className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader title="Какие задачи решаем" />
            <ul className="space-y-6">
              {tasks.map((task, i) => (
                <li key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-1">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="text-lg text-muted-foreground">{task}</span>
                </li>
              ))}
            </ul>
          </div>
          <Card className="bg-muted p-0 overflow-hidden h-[400px]">
            <div className="w-full h-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
              <Zap size={80} className="text-primary/20 animate-pulse" />
            </div>
          </Card>
        </div>
      </section>

      {/* Как работает */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6 md:px-12">
          <SectionHeader title="Как работает" centered />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {steps.map((step, i) => (
              <div key={i} className="relative">
                <div className="text-6xl font-black text-primary/5 absolute -top-10 -left-4 -z-10">{i + 1}</div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.text}</p>
                {i < steps.length - 1 && <ArrowRight className="hidden lg:block absolute -right-6 top-1/2 -translate-y-1/2 text-primary/20" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Типовая конфигурация */}
      <section className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12">
        <Card className="p-10 border-primary/20 bg-primary/5">
          <h3 className="text-2xl font-bold mb-8">Типовая конфигурация</h3>
          <ul className="space-y-4">
            {config.map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <ShieldCheck className="text-primary" size={20} />
                <span className="font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </Card>
        <Card className="p-10">
          <h3 className="text-2xl font-bold mb-4">Пилотный проект</h3>
          <p className="text-muted-foreground mb-8">Запустите тестирование на ограниченной группе устройств, чтобы оценить эффективность решения.</p>
          <div className="grid grid-cols-2 gap-8 mb-8">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Срок</p>
              <p className="text-2xl font-bold text-primary">{pilotDuration}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Ключевые метрики</p>
              <ul className="text-sm font-medium">
                {metrics.map((m, i) => <li key={i}>• {m}</li>)}
              </ul>
            </div>
          </div>
          <Button variant="outline" className="w-full">Обсудить пилот</Button>
        </Card>
      </section>

      {/* Smart Marketing */}
      <section className="container mx-auto px-6 md:px-12">
        <div className="bg-slate-900 rounded-[32px] p-8 md:p-16 text-white overflow-hidden relative">
          <div className="relative z-10 max-w-2xl">
            <Badge className="bg-primary border-none mb-6">Smart Marketing</Badge>
            <h2 className="text-3xl font-bold mb-4">Smart Marketing в этом сценарии</h2>
            <p className="text-lg opacity-80 mb-8">{marketingBenefit}</p>
            <Link to="/smart-marketing">
              <Button className="bg-primary text-white hover:bg-primary/90">Подробнее <ArrowRight size={18} className="ml-2" /></Button>
            </Link>
          </div>
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
            <Target size={400} className="translate-x-1/4 -translate-y-1/4" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-6 md:px-12 max-w-4xl">
        <SectionHeader title="Частые вопросы" centered />
        <Accordion items={faq} />
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-6 md:px-12 max-w-2xl">
        <Card className="p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Готовы начать?</h2>
          <p className="text-muted-foreground mb-8">Оставьте заявку, и наши эксперты свяжутся с вами для обсуждения внедрения.</p>
          <form className="space-y-4 text-left" onSubmit={(e) => e.preventDefault()}>
            <FormField label="Ваш Email" type="email" placeholder="example@company.com" />
            <FormField label="Кол-во устройств" placeholder="например, 1000" />
            <Button className="w-full" size="lg">Запросить демо</Button>
          </form>
        </Card>
      </section>
    </div>
  );
};