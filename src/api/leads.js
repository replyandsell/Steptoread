import { supabase } from './supabase'

// Версия текста согласия. Меняешь текст галочки в форме — меняй и версию,
// иначе в базе будет написано, что человек согласился не с тем, что прочитал.
export const CONSENT_VERSION = 'v1-2026-11-26'

/**
 * Записывает заявку на бесплатный комплект.
 * Возвращает { ok: true } или { ok: false, reason }, без исключений наружу —
 * форме нужно показать человеку понятный текст, а не стек ошибки.
 */
export async function saveLead({ childName, parentEmail }) {
  const child = (childName || '').trim()
  const email = (parentEmail || '').trim().toLowerCase()

  if (!child) return { ok: false, reason: 'no-child-name' }
  if (!isEmail(email)) return { ok: false, reason: 'bad-email' }

  const { error } = await supabase.from('leads').insert({
    child_name: child,
    parent_email: email,
    consent_version: CONSENT_VERSION,
    source: 'landing',
  })

  if (!error) return { ok: true }

  // 23505 — нарушение уникальности: этот адрес уже оставляли.
  if (error.code === '23505') return { ok: false, reason: 'duplicate' }

  console.error('Не удалось сохранить заявку:', error)
  return { ok: false, reason: 'server' }
}

function isEmail(value) {
  // Намеренно мягкая проверка: строгие регулярные выражения отсекают
  // живые адреса чаще, чем ловят опечатки.
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)
}
