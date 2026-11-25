# Steptoread

Обучение русскому алфавиту для детей 4–6 лет. Лэндинг + личный кабинет.
Стек: Vue 3 + Vite + Tailwind + Supabase + Vercel.

## Запуск локально

1. Установи зависимости:
   ```bash
   npm install
   ```

2. Создай файл `.env` (скопируй из `.env.example`) и впиши свой Supabase anon key:
   ```bash
   cp .env.example .env
   ```
   Затем открой `.env` и замени `впиши-сюда-свой-anon-key` на ключ из
   Supabase → Settings → API → anon public.

3. Запусти dev-сервер:
   ```bash
   npm run dev
   ```

4. Открой в браузере: http://localhost:5173

## Сборка для продакшена

```bash
npm run build      # собирает в папку dist/
npm run preview    # локальный просмотр собранной версии
```

## Структура

```
steptoread/
├── api/                  serverless-функции Vercel (пока пусто)
├── src/
│   ├── api/supabase.js   клиент Supabase
│   ├── components/       компоненты лэндинга (Hero и далее)
│   ├── pages/            страницы (кабинет — добавим)
│   ├── composables/      переиспользуемая логика (добавим)
│   ├── App.vue           корневой компонент
│   ├── main.js           точка входа
│   └── index.css         Tailwind
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Что дальше

Текущий шаг: готов Hero (первый экран). Далее — блоки лэндинга
(Problem, Solution, FAQ, форма lead magnet), затем кабинет и API.
