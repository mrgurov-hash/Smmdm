import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown, Check } from "lucide-react";
import { Button } from "@/app/components/ui";

export const SectionHeader = ({ 
  title, 
  subtitle, 
  cta, 
  centered = false,
  className 
}: { 
  title: string; 
  subtitle?: string; 
  cta?: { text: string; href: string }; 
  centered?: boolean;
  className?: string;
}) => (
  <div className={cn("mb-12", centered && "text-center mx-auto max-w-3xl", className)}>
    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 leading-tight">{title}</h2>
    {subtitle && <p className="text-lg text-muted-foreground leading-relaxed">{subtitle}</p>}
    {cta && (
      <div className="mt-6">
        <Button variant="outline" onClick={() => window.location.href = cta.href}>{cta.text}</Button>
      </div>
    )}
  </div>
);

export const Accordion = ({ items }: { items: { title: string; content: string }[] }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="border border-border rounded-xl overflow-hidden bg-white">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-muted/30 transition-colors"
          >
            <span className="font-semibold text-foreground">{item.title}</span>
            <ChevronDown className={cn("text-muted-foreground transition-transform", openIndex === index && "rotate-180")} size={20} />
          </button>
          {openIndex === index && (
            <div className="px-6 pb-4 text-muted-foreground animate-in slide-in-from-top-2 duration-200">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export const Stepper = ({ steps }: { steps: string[] }) => (
  <div className="flex flex-col md:flex-row gap-8">
    {steps.map((step, index) => (
      <div key={index} className="flex-1 flex flex-col items-center text-center group">
        <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl mb-4 group-hover:scale-110 transition-transform">
          {index + 1}
        </div>
        <p className="font-medium text-foreground">{step}</p>
        {index < steps.length - 1 && (
          <div className="hidden md:block absolute w-full h-[2px] bg-border -z-10 top-6 left-1/2" />
        )}
      </div>
    ))}
  </div>
);

export const FormField = ({ 
  label, 
  type = "text", 
  placeholder, 
  options,
  textarea = false,
  value,
  onChange,
}: { 
  label: string; 
  type?: string; 
  placeholder?: string;
  options?: string[];
  textarea?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
}) => {
  // Use controlled or uncontrolled based on whether value/onChange are provided
  const isControlled = value !== undefined && onChange !== undefined;
  
  const inputProps = isControlled 
    ? { value, onChange } 
    : { defaultValue: value };
  
  const selectProps = isControlled
    ? { value: value || "", onChange }
    : { defaultValue: value || "" };

  return (
    <div className="space-y-2">
      <label className="text-sm font-semibold text-foreground">{label}</label>
      {textarea ? (
        <textarea
          className="w-full min-h-[120px] p-3 rounded-xl border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
          placeholder={placeholder}
          {...inputProps}
        />
      ) : type === "select" ? (
        <select 
          {...selectProps}
          className="w-full h-11 px-3 rounded-xl border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all appearance-none cursor-pointer"
        >
          <option value="" disabled>{placeholder}</option>
          {options?.map(opt => <option key={opt} value={opt}>{opt}</option>)}
        </select>
      ) : (
        <input
          type={type}
          className="w-full h-11 px-3 rounded-xl border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
          placeholder={placeholder}
          {...inputProps}
        />
      )}
    </div>
  );
};