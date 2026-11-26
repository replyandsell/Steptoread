<template>
  <section class="min-h-screen bg-light flex items-center justify-center px-6 py-16">
    <div class="max-w-2xl text-center">
      <!-- Логотип -->
      <div class="mb-10">
        <h1 class="text-4xl sm:text-5xl font-bold text-accent mb-3">Steptoread</h1>
        <p class="text-base sm:text-lg text-gray-600">
          Методика знакомства с русскими буквами для детей 5–6 лет
        </p>
      </div>

      <!-- Главный заголовок -->
      <h2 class="text-3xl sm:text-5xl font-bold text-dark mb-5 leading-tight">
        Знакомство с чтением — через рисование и сказки
      </h2>

      <!-- Подзаголовок -->
      <p class="text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed">
        Без скучных азбук. 5–10 минут в день — 4–5 коротких встреч по паре минут,
        между делом.
      </p>

      <!-- Заглушка под иллюстрацию -->
      <div
        class="mb-10 bg-accentAlt/20 rounded-2xl h-56 sm:h-64 flex items-center justify-center"
      >
        <p class="text-gray-500 text-sm px-4">
          [Иллюстрация: взрослый и ребёнок раскрашивают буквы]
        </p>
      </div>

      <!-- Кнопки -->
      <div class="flex flex-col gap-4 sm:flex-row sm:justify-center">
        <button
          @click="$emit('lead-magnet')"
          class="px-8 py-4 bg-accent text-white font-bold rounded-xl hover:opacity-90 hover:scale-[1.02] transition"
        >
          Скачать букву А бесплатно
        </button>
        <button
          @click="$emit('pricing')"
          class="px-8 py-4 bg-white text-accent font-bold border-2 border-accent rounded-xl hover:bg-accent/5 transition"
        >
          Купить курс — 299 ₪
        </button>
      </div>

      <p class="mt-5 text-sm text-gray-500">
        299 ₪ или 279 ₪, если ребёнок нарисует открытку. Разово, без подписки.
      </p>

      <p class="mt-2 text-sm text-gray-500">
        Бесплатно: «Первая встреча с Маскотом» и комплект буквы А — раскраска,
        сказка и говорилка. Пришлём на почту.
      </p>
    </div>
  </section>
</template>

<script setup>
defineEmits(['lead-magnet', 'pricing'])
</script>
