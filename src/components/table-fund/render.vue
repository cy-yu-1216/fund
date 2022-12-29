<script lang="tsx">
import { h, defineComponent } from 'vue'
export default defineComponent({
  name: 'render',
  props: {
    scope: Object,
    render: Function
  },
  render() {
    return this.render ? this.render(h, this.scope) : ''
  }
})
</script>
