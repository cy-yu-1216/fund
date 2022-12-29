import { App, onMounted } from 'vue'

const mouse = {
  mounted: (el: any, binding: any, vnode: any, prevVnode: any) => {}
}
export default function directive(app: App) {
  app.directive('touch', (el, binding) => {
    let time: any
    let lock = false
    el.onmousedown = () => {
      lock = true
      time = setTimeout(() => {
        lock = false
      }, 500)
    }
    el.onmouseup = () => {
      clearTimeout(time)
      if (!lock) {
        binding.value(binding.arg, el)
      }
    }
  })
}
