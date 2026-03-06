import * as React from "react";
import { ChevronDown } from "lucide-react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function Accordion({ items }: { items: { question: string; answer: string }[] }) {
  return (
    <AccordionPrimitive.Root type="single" collapsible className="w-full space-y-3">
      {items.map((item, i) => (
        <AccordionPrimitive.Item 
          key={i} 
          value={`item-${i}`}
          className="border border-gray-100 rounded-xl overflow-hidden bg-white shadow-sm transition-all hover:border-gray-200"
        >
          <AccordionPrimitive.Header className="flex">
            <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-4 px-6 text-left font-medium text-gray-900 transition-all [&[data-state=open]>svg]:rotate-180">
              {item.question}
              <ChevronDown className="h-5 w-5 shrink-0 text-gray-400 transition-transform duration-200" />
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>
          <AccordionPrimitive.Content className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
            <div className="pb-4 pt-0 px-6 text-gray-500 leading-relaxed">
              {item.answer}
            </div>
          </AccordionPrimitive.Content>
        </AccordionPrimitive.Item>
      ))}
    </AccordionPrimitive.Root>
  );
}
