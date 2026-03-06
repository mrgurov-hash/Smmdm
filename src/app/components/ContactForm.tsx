import * as React from "react";
import { Button } from "@/app/components/Button";

export function ContactForm() {
  return (
    <form className="bg-white p-8 rounded-2xl border border-gray-100 shadow-xl space-y-6" onSubmit={(e) => e.preventDefault()}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Компания</label>
          <input 
            type="text" 
            placeholder="ООО Название" 
            className="w-full h-11 px-4 rounded-xl border border-gray-200 focus:outline-hidden focus:ring-2 focus:ring-[#145eff] focus:border-transparent transition-all"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Страна</label>
          <input 
            type="text" 
            placeholder="Россия" 
            className="w-full h-11 px-4 rounded-xl border border-gray-200 focus:outline-hidden focus:ring-2 focus:ring-[#145eff] focus:border-transparent transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Сценарий</label>
          <select className="w-full h-11 px-4 rounded-xl border border-gray-200 focus:outline-hidden focus:ring-2 focus:ring-[#145eff] focus:border-transparent bg-white transition-all">
            <option>Kiosk & Terminals</option>
            <option>Education</option>
            <option>Corporate</option>
            <option>Smart Marketing (отдельно)</option>
          </select>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Количество устройств</label>
          <input 
            type="number" 
            placeholder="от 100" 
            className="w-full h-11 px-4 rounded-xl border border-gray-200 focus:outline-hidden focus:ring-2 focus:ring-[#145eff] focus:border-transparent transition-all"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">Контакт (Email / Мессенджер)</label>
        <input 
          type="text" 
          placeholder="example@company.com или @username" 
          className="w-full h-11 px-4 rounded-xl border border-gray-200 focus:outline-hidden focus:ring-2 focus:ring-[#145eff] focus:border-transparent transition-all"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">Комментарий</label>
        <textarea 
          rows={4}
          placeholder="Опишите вашу задачу" 
          className="w-full p-4 rounded-xl border border-gray-200 focus:outline-hidden focus:ring-2 focus:ring-[#145eff] focus:border-transparent transition-all resize-none"
        />
      </div>

      <Button variant="primary" className="w-full" type="submit">
        Отправить заявку
      </Button>
      
      <p className="text-center text-sm text-gray-500">
        Или напишите нам в <a href="#" className="text-[#145eff] hover:underline">Telegram</a> / <a href="#" className="text-[#145eff] hover:underline">WhatsApp</a>
      </p>
    </form>
  );
}