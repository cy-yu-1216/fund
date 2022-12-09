<template>
  <svg class="icon" aria-hidden="true">
    <use :xlink:href="icon"></use>
  </svg>
</template>

<script setup lang="ts">
import { computed, toRefs } from 'vue'

const props = defineProps({
  iconName: {
    type: String,
    default: '#icon-yonghuming'
  }
})
const propsRefs = toRefs(props)
const icon = computed(() => `#icon-${propsRefs.iconName.value}`)
</script>
