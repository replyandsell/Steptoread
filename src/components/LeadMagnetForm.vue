<template>
  <section id="besplatno" class="bg-white px-6 py-20">
    <div class="max-w-xl mx-auto">
      <!-- Успех -->
      <div v-if="sent" class="text-center">
        <div
          class="w-16 h-16 mx-auto mb-6 rounded-full bg-success/50 flex items-center justify-center text-3xl"
          aria-hidden="true"
        >
          ✓
        </div>
        <h2 class="text-3xl sm:text-4xl font-bold text-dark mb-4">
          Записали, {{ sentChildName }} ждёт Маскота
        </h2>
        <p class="text-gray-600 leading-relaxed">
          Комплект придёт на {{ sentEmail }}. Внутри — «Первая встреча с
          Маскотом»: вводная сказка, обложка «Мой первый букварь» и Карта пути
          на стену. Через 1–2 дня прилетит письмо от Маскота с буквой А.
        </p>
      </div>

      <!-- Форма -->
      <form v-else novalidate @submit.prevent="submit">
        <h2 class="text-3xl sm:text-4xl font-bold text-dark text-center mb-4">
          Первая буква — бесплатно
        </h2>
        <p class="text-gray-600 text-center mb-10 leading-relaxed">
          Пришлём «Первую встречу с Маскотом» и комплект буквы А: раскраску,
          сказку и говорилку. Распечатаете и попробуете, как это устроено.
        </p>

        <div class="space-y-5">
          <div>
            <label for="childName" class="block text-sm font-semibold text-dark mb-2">
              Имя ребёнка
            </label>
            <input
              id="childName"
              v-model="childName"
              type="text"
              autocomplete="given-name"
              :aria-invalid="error === 'no-child-name'"
              class="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-accent focus:outline-none transition"
              placeholder="Как зовут ребёнка"
            />
            <p class="mt-2 text-sm text-gray-500">
              Только имя, без фамилии. Впишем его в обложку букваря.
            </p>
          </div>

          <div>
            <label for="parentEmail" class="block text-sm font-semibold text-dark mb-2">
              Ваша почта
            </label>
            <input
              id="parentEmail"
              v-model="parentEmail"
              type="email"
              autocomplete="email"
              :aria-invalid="error === 'bad-email' || error === 'duplicate'"
              class="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-accent focus:outline-none transition"
              placeholder="vy@example.com"
            />
          </div>

          <label class="flex gap-3 items-start cursor-pointer">
            <input
              v-model="consent"
              type="checkbox"
              class="mt-1 w-5 h-5 flex-shrink-0 accent-[#E8746F]"
            />
            <span class="text-sm text-gray-600 leading-relaxed">
              Мне есть 18 лет, я родитель или законный представитель ребёнка.
              Согласен с
              <a href="/zakon" class="text-accent underline">политикой
              конфиденциальности</a> и на письма от Steptoread — от них можно
              отписаться в любом письме.
            </span>
          </label>
        </div>

        <p
          v-if="message"
          role="alert"
          class="mt-5 text-sm text-accent font-semibold"
        >
          {{ message }}
        </p>

        <button
          type="submit"
          :disabled="sending"
          class="mt-7 w-full px-8 py-4 bg-accent text-white font-bold rounded-xl hover:opacity-90 transition disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {{ sending ? 'Отправляем…' : 'Получить бесплатно' }}
        </button>

        <p class="mt-4 text-sm text-gray-500 text-center">
          Имя ребёнка нужно только для обложки букваря. Данные о ребёнке мы не
          публикуем без Вашего отдельного согласия.
        </p>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { saveLead } from '../api/leads'

const childName = ref('')
const parentEmail = ref('')
const consent = ref(false)

const sending = ref(false)
const sent = ref(false)
const error = ref('')
const message = ref('')

const sentChildName = ref('')
const sentEmail = ref('')

const texts = {
  'no-child-name': 'Напишите, пожалуйста, имя ребёнка.',
  'bad-email': 'Проверьте адрес почты — кажется, в нём опечатка.',
  'no-consent': 'Поставьте галочку согласия — без неё мы не можем написать Вам.',
  duplicate: 'На этот адрес комплект уже отправляли. Не нашли письмо — напишите нам на info@steptoread.com.',
  server: 'Не получилось отправить. Попробуйте ещё раз через минуту или напишите на info@steptoread.com.',
}

async function submit() {
  error.value = ''
  message.value = ''

  if (!consent.value) {
    fail('no-consent')
    return
  }

  sending.value = true
  const result = await saveLead({
    childName: childName.value,
    parentEmail: parentEmail.value,
  })
  sending.value = false

  if (!result.ok) {
    fail(result.reason)
    return
  }

  sentChildName.value = childName.value.trim()
  sentEmail.value = parentEmail.value.trim().toLowerCase()
  sent.value = true
}

function fail(reason) {
  error.value = reason
  message.value = texts[reason] || texts.server
}
</script>
