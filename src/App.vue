<template>
  <div id="app" class="min-h-screen bg-light text-dark">
    <Hero @lead-magnet="onLeadMagnet" @pricing="onPricing" />
<HowItWorks />
<WhatsIncluded />
    <!-- Следующие блоки (Problem, Solution, FAQ, форма) добавим дальше -->
  </div>
</template>

<script setup>
import Hero from './components/Hero.vue'
import HowItWorks from './components/HowItWorks.vue'
import WhatsIncluded from './components/WhatsIncluded.vue'
// Пока заглушки — подключим логику на следующих шагах
const onLeadMagnet = () => {
  console.log('Открыть форму lead magnet')
}

const onPricing = () => {
  console.log('Перейти к оплате')
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
