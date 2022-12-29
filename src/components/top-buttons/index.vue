<template>
  <div ref="buttons" class="buttons">
    <div
      v-for="item in buttonsFinal.data"
      :key="item.icon"
      class="button"
      :class="item.icon == 'sousuo' && showInput ? 'show-input' : ''"
      @click="handleButtons(item)"
    >
      <icon-svg :iconName="item.icon" />
      <span>{{ item.name }}</span>
    </div>
    <el-input
      v-model="searchValue"
      placeholder="请输入内容"
      v-show="showInput"
      :onkeydown="handleSearch"
      ref="inputRef"
    >
      <template #suffix>
        <icon-svg iconName="sousuo" @click="handleSearch" />
      </template>
    </el-input>
  </div>
</template>

<script setup lang="ts">
import { mainStore } from '@/store/main-store'
import { toRefs, ref, onMounted, onUnmounted, reactive, watch } from 'vue'

const props = defineProps({
  buttonsList: {
    type: Array<IconType>,
    default() {
      return []
    }
  },
  mobileButtonsList: {
    type: Array<IconType>,
    default() {
      return []
    }
  },
  selfAdaption: {
    type: Boolean,
    default: true
  }
})
const propsRefs = toRefs(props)

//按钮列表
let buttonsFinal: { data: Array<IconType> } = reactive({
  data: propsRefs.buttonsList.value
})
//监听store中屏幕宽度的变化 从而改变按钮的数量(如果需要的话)
if (propsRefs.selfAdaption.value) {
  let clientWidth = ref(mainStore.clientWidth)
  watch(
    () => mainStore.getClientWidth,
    (newData) => {
      clientWidth.value = newData
      changeButtons()
    }
  )
  const changeButtons = () => {
    clientWidth.value > 992
      ? (buttonsFinal.data = propsRefs.buttonsList.value)
      : (buttonsFinal.data = propsRefs.mobileButtonsList.value)
  }
  changeButtons()
}

//点检按钮给父组件发送事件
const emit = defineEmits(['handleButtons', 'handleSearch'])
//input输入框
const inputRef = ref<{ focus: Function }>({ focus: () => {} })
let showInput = ref(false)
let searchValue = ref('')
const handleSearch = (e: KeyboardEvent) => {
  if (e.key == 'Enter' || e.type == 'click') {
    emit('handleSearch', searchValue.value)
  }
}

//监听点击搜索
//点击搜索的监听
onMounted(() => {
  document.addEventListener('click', handleShowInput)
})
onUnmounted(() => {
  document.removeEventListener('click', handleShowInput)
})
const buttons: any = ref('')
const handleShowInput = (e: { target: any }) => {
  if (!buttons.value.contains(e.target)) {
    showInput.value = false
  }
}

//点击按钮
const handleButtons = (item: IconType) => {
  if (item.icon == 'sousuo') {
    showInput.value = true
    inputRef.value.focus()
    return
  }
  emit('handleButtons', item)
}
</script>

<style scoped lang="scss">
.buttons {
  border: 1px solid $line;
  height: 46px;
  display: flex;
  align-items: center;
  padding: 0 4px;
  .el-input {
    max-width: 220px;
  }
}
.show-input {
  display: none !important;
}
::v-deep(.el-input__inner) {
  height: 30px !important;
}
.button {
  display: flex;
  align-items: center;
  padding: 2px;
  border-radius: 4px;
  margin-right: 8px;
  span {
    padding-left: 2px;
  }
  &:hover {
    background-color: #ebedf0;
    cursor: pointer;
  }
}
</style>
