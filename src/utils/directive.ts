import type { App } from 'vue'

export default function directive(app: App) {
  app.directive('touch', (el, binding) => {
    let time: any
    let lock = false
    el.onmousedown = () => {
      lock = true
      time = setTimeout(() => {
        lock = false
      }, 1000)
    }
    el.onmouseup = () => {
      if (!lock) {
        binding.value()
      }
      clearTimeout(time)
    }
  })
}
