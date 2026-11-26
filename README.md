# Steptoread

Методика знакомства с русскими буквами для детей 5–6 лет. Многостраничный сайт и личный кабинет родителя.

Стек: Vue 3 + Vite + Tailwind 3.4 + Supabase + Cloudflare Pages.

## Документы

- `AGENTS.md` и `CLAUDE.md` в корне `Documents/Steptoread` — правила проекта. Два файла с одинаковым текстом: меняешь один, меняй и второй.
- [docs/TZ.md](docs/TZ.md) — что строим: страницы, данные, интеграции.
- [docs/resheniya.md](docs/resheniya.md) — журнал решений и почему именно так.
- [docs/pravila-tekstov.md](docs/pravila-tekstov.md) — чек-лист проверки текстов.
- [docs/procedura-udaleniya.md](docs/procedura-udaleniya.md) — удаление данных по запросу.

## Запуск локально

1. Установить зависимости:
   ```bash
   npm install
   ```

2. Создать файл `.env` из примера и вписать свой Supabase anon key:
   ```bash
   cp .env.example .env
   ```
   Ключ берётся в Supabase → Settings → API → anon public. В репозиторий `.env` не попадает.

3. Запустить dev-сервер:
   ```bash
   npm run dev
   ```

4. Открыть http://localhost:5173

## Сборка

```bash
npm run build      # собирает в dist/
npm run preview    # просмотр собранной версии
```

## Структура

```
steptoread/
├── api/                  пустая папка от Vercel, станет functions/ на Cloudflare
├── docs/                 правила, решения, ТЗ, процедуры
├── src/
│   ├── api/supabase.js   клиент Supabase
│   ├── components/       блоки страниц
│   ├── pages/            страницы (появятся вместе с vue-router)
│   ├── composables/      переиспользуемая логика
│   ├── App.vue           корневой компонент
│   ├── main.js           точка входа
│   └── index.css         Tailwind
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Где мы сейчас

Собрана одна страница: шапка, первый экран, «Как это работает», «Что входит», сомнения, вопросы. Тексты приведены в соответствие с методикой.

Не сделано: `LeadMagnetForm.vue`, `FinalCTA.vue` и `Footer.vue` — пустые файлы, не подключённые в `App.vue`. Маршрутизации нет, остальных страниц нет, база пустая, оплата и письма не подключены.

Ближайшая по важности задача — форма сбора почты: сейчас сайт не собирает ни одного адреса.
