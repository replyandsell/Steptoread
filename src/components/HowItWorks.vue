<template>
  <section class="bg-white px-6 py-20">
    <div class="max-w-5xl mx-auto">
      <h2 class="text-3xl sm:text-4xl font-bold text-dark text-center mb-4">
        Как это работает
      </h2>
      <p class="text-lg text-gray-600 text-center mb-14">
        Три шага на каждую букву. Всего 20 минут в день.
      </p>

      <div class="grid gap-8 md:grid-cols-3">
        <!-- Карточка 1 -->
        <div class="bg-light rounded-2xl p-8 text-center">
          <div
            class="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/15 flex items-center justify-center text-2xl font-bold text-accent"
          >
            1
          </div>
          <h3 class="text-xl font-bold text-dark mb-3">Раскраска</h3>
          <p class="text-gray-600 leading-relaxed">
            Ребёнок раскрашивает букву — например, А в виде авокадо.
            Мозг создаёт яркий зрительный образ. 5–7 минут.
          </p>
        </div>

        <!-- Карточка 2 -->
        <div class="bg-light rounded-2xl p-8 text-center">
          <div
            class="w-16 h-16 mx-auto mb-6 rounded-full bg-accentAlt/30 flex items-center justify-center text-2xl font-bold text-accent"
          >
            2
          </div>
          <h3 class="text-xl font-bold text-dark mb-3">Говорилка</h3>
          <p class="text-gray-600 leading-relaxed">
            Буква, слова на неё и весёлая скороговорка.
            Взрослый читает вместе с ребёнком. 3–5 минут.
          </p>
        </div>

        <!-- Карточка 3 -->
        <div class="bg-light rounded-2xl p-8 text-center">
          <div
            class="w-16 h-16 mx-auto mb-6 rounded-full bg-success/40 flex items-center justify-center text-2xl font-bold text-accent"
          >
            3
          </div>
          <h3 class="text-xl font-bold text-dark mb-3">Сказка</h3>
          <p class="text-gray-600 leading-relaxed">
            Короткая история про букву — эмоциональный якорь.
            Ребёнок запоминает букву надолго. 5–10 минут.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Статичный блок, логики пока нет
</script>