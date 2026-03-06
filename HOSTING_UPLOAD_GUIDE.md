# 📤 Инструкция по загрузке недостающих файлов на хостинг

## 🎯 Что нужно загрузить:

### 1️⃣ **OG Image** (КРИТИЧНО!)

**Файл:** `og-image.jpg`  
**Размер:** 1200 x 630 пикселей  
**Путь:** `~/www/sm-mdm.tech/og-image.jpg`

#### Как создать:

**Быстрый способ (скриншот):**
1. Откройте файл `/public/og-image-placeholder.html` в браузере
2. Сделайте скриншот синего блока (Cmd+Shift+4 на Mac, Win+Shift+S на Windows)
3. Обрежьте до размера 1200x630 пикселей
4. Сохраните как `og-image.jpg`

**Профессиональный способ (рекомендуется):**
1. Откройте https://www.canva.com/
2. Выберите "Custom size" → 1200 x 630 пикселей
3. Создайте дизайн с:
   - Градиент фона: #145eff → #0a3bad
   - Заголовок: "7tech MDM"
   - Подзаголовок: "Enterprise Mobile Device Management"
   - Текст: "Kiosk & Terminals • Education • Corporate"
   - Домен внизу: "www.sm-mdm.tech"
4. Экспортируйте как JPG (качество 90%)

---

### 2️⃣ **PWA Icons** (Важно!)

**Файлы:**
- `icon-192.png` (192 x 192 пикселей)
- `icon-512.png` (512 x 512 пикселей)
- `apple-touch-icon.png` (180 x 180 пикселей)

**Путь:** `~/www/sm-mdm.tech/`

#### Как создать:

**Способ 1: Онлайн-генератор (рекомендуется):**
1. Откройте https://realfavicongenerator.net/
2. Загрузите ваш логотип (желательно SVG или PNG высокого разрешения)
3. Нажмите "Generate your Favicons and HTML code"
4. Скачайте архив
5. Найдите и переименуйте:
   - `android-chrome-192x192.png` → `icon-192.png`
   - `android-chrome-512x512.png` → `icon-512.png`
   - `apple-touch-icon.png` → оставьте как есть

**Способ 2: Вручную (Figma/Photoshop):**
1. Создайте квадратное изображение с вашим логотипом
2. Добавьте отступы (padding) по краям
3. Экспортируйте в 3 размера:
   - 192x192 → `icon-192.png`
   - 512x512 → `icon-512.png`
   - 180x180 → `apple-touch-icon.png`
4. Формат: PNG с прозрачным фоном

---

## 📂 Как загрузить файлы через File Manager:

### Шаг 1: Откройте File Manager
1. Войдите в панель управления хостингом
2. Найдите **"File Manager"** / **"Файловый менеджер"**
3. Перейдите в папку: `~/www/sm-mdm.tech/`

### Шаг 2: Загрузите OG Image
1. Нажмите кнопку **"Загрузить"** / **"Upload"**
2. Выберите файл `og-image.jpg` с вашего компьютера
3. Дождитесь завершения загрузки
4. Убедитесь что файл появился в списке

### Шаг 3: Загрузите PWA Icons
1. Нажмите кнопку **"Загрузить"** / **"Upload"**
2. Выберите все 3 файла:
   - `icon-192.png`
   - `icon-512.png`
   - `apple-touch-icon.png`
3. Дождитесь завершения загрузки
4. Убедитесь что все файлы появились в списке

---

## ✅ Проверка после загрузки:

### 1. Проверьте доступность файлов в браузере:

Откройте каждую ссылку и убедитесь что файл открывается:

```
https://www.sm-mdm.tech/og-image.jpg
https://www.sm-mdm.tech/icon-192.png
https://www.sm-mdm.tech/icon-512.png
https://www.sm-mdm.tech/apple-touch-icon.png
```

✅ **Должны открыться изображения (не ошибка 404!)**

---

### 2. Проверьте Open Graph превью:

#### Facebook:
1. Откройте: https://developers.facebook.com/tools/debug/
2. Введите: `https://www.sm-mdm.tech/`
3. Нажмите **"Debug"**

**Ожидаемый результат:**
- ✅ Title: "7tech MDM - Enterprise Mobile Device Management Platform"
- ✅ Description: "Профессиональная платформа..."
- ✅ Image: Ваше изображение OG (1200x630)

Если изображение не появилось:
- Нажмите **"Scrape Again"** для обновления кеша
- Подождите 30 секунд и повторите

#### Twitter:
1. Откройте: https://cards-dev.twitter.com/validator
2. Введите: `https://www.sm-mdm.tech/`
3. Нажмите **"Preview card"**

**Ожидаемый результат:**
- ✅ Card preview with image: Ваше изображение OG

#### LinkedIn:
1. Откройте: https://www.linkedin.com/post-inspector/
2. Введите: `https://www.sm-mdm.tech/`
3. Нажмите **"Inspect"**

**Ожидаемый результат:**
- ✅ Preview с вашим изображением

---

### 3. Проверьте Structured Data:

1. Откройте: https://search.google.com/test/rich-results
2. Введите: `https://www.sm-mdm.tech/`
3. Нажмите **"Test URL"**

**Ожидаемый результат:**
- ✅ Valid structured data found:
  - Organization
  - WebSite
  - SoftwareApplication

---

### 4. Проверьте Sitemap:

1. Откройте: https://www.xml-sitemaps.com/validate-xml-sitemap.html
2. Введите: `https://www.sm-mdm.tech/sitemap.xml`
3. Нажмите **"Validate"**

**Ожидаемый результат:**
- ✅ **Sitemap is valid: Yes**
- ✅ Content-Type: `application/xml; charset=UTF-8`

---

## 🎉 После успешной загрузки всех файлов:

### Финальная структура файлов на хостинге:

```
~/www/sm-mdm.tech/
├── .htaccess                  ✅ (уже есть)
├── index.html                 ✅ (создается при сборке)
├── robots.txt                 ✅ (уже есть)
├── sitemap.xml                ✅ (уже есть)
├── sitemap-xml.php            ✅ (уже есть)
├── manifest.json              ✅ (создается при сборке)
├── favicon.svg                ✅ (создается при сборке)
├── og-image.jpg               🆕 ЗАГРУЗИТЬ!
├── icon-192.png               🆕 ЗАГРУЗИТЬ!
├── icon-512.png               🆕 ЗАГРУЗИТЬ!
└── apple-touch-icon.png       🆕 ЗАГРУЗИТЬ!
```

---

## 🔄 Если что-то не работает:

### Проблема: Файл не открывается (404 ошибка)

**Решение:**
1. Убедитесь что файл загружен в правильную папку: `~/www/sm-mdm.tech/`
2. Проверьте права доступа (должно быть 644 или 755)
3. Проверьте имя файла (должно быть **точно** как в инструкции)

### Проблема: OG image не появляется в превью

**Решение:**
1. Проверьте что файл доступен: `https://www.sm-mdm.tech/og-image.jpg`
2. Очистите кеш в Facebook Debugger: нажмите **"Scrape Again"**
3. Подождите 1-2 минуты
4. Попробуйте снова

### Проблема: Sitemap всё ещё показывает text/plain

**Решение:**
1. Убедитесь что файл `sitemap-xml.php` загружен
2. Убедитесь что в `.htaccess` есть строка:
   ```apache
   RewriteRule ^sitemap\.xml$ /sitemap-xml.php [L]
   ```
3. Очистите кеш браузера (Cmd+Shift+R / Ctrl+Shift+R)
4. Проверьте снова

---

## 📞 Поддержка:

Если возникли вопросы:
1. Проверьте файл `SEO_CHECKLIST.md` для детальной информации
2. Убедитесь что все файлы загружены в правильную папку
3. Проверьте доступность файлов через браузер

---

**Готово!** 🎉

После загрузки всех 4 файлов ваш сайт будет **100% SEO-оптимизирован** и готов к продвижению в поисковых системах и социальных сетях!
