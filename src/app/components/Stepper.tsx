import * as React from "react";

export function Stepper({ steps }: { steps: { title: string; description: string }[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {steps.map((step, i) => (
        <div key={i} className="relative group">
          <div className="flex flex-col items-center text-center">
            <div className="h-14 w-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 transition-colors group-hover:bg-[#145eff]">
              <span className="text-xl font-bold text-[#145eff] group-hover:text-white transition-colors">{i + 1}</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
            <p className="text-gray-500">{step.description}</p>
          </div>
          {i < steps.length - 1 && (
            <div className="hidden md:block absolute top-7 left-[calc(50%+40px)] w-[calc(100%-80px)] h-0.5 bg-gray-100" />
          )}
        </div>
      ))}
    </div>
  );
}
