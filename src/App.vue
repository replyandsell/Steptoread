<template>
  <div id="app" class="min-h-screen bg-light text-dark">
    <Header @login="onLogin" @register="onRegister" />
    <Hero @lead-magnet="goToForm" @pricing="onPricing" />
    <HowItWorks />
    <WhatsIncluded />
    <Objections />
    <FAQ />
    <LeadMagnetForm />
    <!-- Следующие блоки (финальный CTA, футер) добавим дальше -->
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import HowItWorks from './components/HowItWorks.vue'
import WhatsIncluded from './components/WhatsIncluded.vue'
import Objections from './components/Objections.vue'
import FAQ from './components/FAQ.vue'
import LeadMagnetForm from './components/LeadMagnetForm.vue'

// Кнопка «Скачать букву А бесплатно» ведёт к форме внизу страницы.
const goToForm = () => {
  document.getElementById('besplatno')?.scrollIntoView({ behavior: 'smooth' })
}

// Пока заглушки — подключим на следующих шагах
const onPricing = () => {
  console.log('Перейти к оплате')
}

const onLogin = () => {
  console.log('Открыть форму входа')
}

const onRegister = () => {
  console.log('Открыть форму регистрации')
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
