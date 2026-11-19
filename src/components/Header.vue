<template>
  <header class="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100 px-6 py-4">
    <div class="max-w-5xl mx-auto flex items-center justify-between">
      <span class="text-xl font-bold text-accent">Букволёт</span>

      <div class="flex items-center gap-3">
        <button
          @click="$emit('login')"
          class="px-4 py-2 text-accent font-semibold hover:opacity-80 transition"
        >
          Войти
        </button>
        <button
          @click="$emit('register')"
          class="px-4 py-2 bg-accent text-white font-semibold rounded-lg hover:opacity-90 transition"
        >
          Зарегистрироваться
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
defineEmits(['login', 'register'])
</script>
