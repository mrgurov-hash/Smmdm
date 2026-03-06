import * as React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function SectionHeader({ 
  title, 
  subtitle, 
  align = "left", 
  className,
  badge 
}: { 
  title: string; 
  subtitle?: string; 
  align?: "left" | "center";
  className?: string;
  badge?: string;
}) {
  return (
    <div className={cn(
      "mb-12 md:mb-16",
      align === "center" ? "text-center mx-auto max-w-3xl" : "text-left",
      className
    )}>
      {badge && (
        <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-[#145eff] uppercase bg-blue-50 rounded-full">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-gray-500 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
