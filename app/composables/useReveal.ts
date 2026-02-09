import { onMounted } from 'vue'

export const useReveal = () => {
  onMounted(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    }

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-show')
          entry.target.classList.add('reveal-item-show')
        } else {
          entry.target.classList.remove('reveal-show')
          entry.target.classList.remove('reveal-item-show')
        }
      })
    }, observerOptions)

    const revealElements = document.querySelectorAll('.reveal-hidden, .reveal-item')
    revealElements.forEach((el) => revealObserver.observe(el))
  })
}
