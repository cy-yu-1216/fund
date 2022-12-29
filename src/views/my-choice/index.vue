<template>
  <div class="container">
    <top-buttons
      :buttonsList="buttonsList"
      :mobileButtonsList="mobileButtonsList"
      :self-adaption="true"
      @handleButtons="handleButtons"
    />
    <div class="content">
      <div class="list-table">
        <table-fund :tableConfig="tableConfig" :tableData="tableData">
          <template #popoverContent="{ row }">
            <div @click.stop="handleDelect(row)">删除</div>
          </template>
        </table-fund>
      </div>
    </div>
  </div>
</template>

<script setup lang="tsx">
import topButtons from '@/components/top-buttons/index.vue'
import tableFund from '@/components/table-fund/index.vue'
import { onMounted, reactive, ref, watch } from 'vue'
import { tableConfig } from './config'

const buttonsList: Array<IconType> = [
  {
    name: '新增',
    icon: 'xinzeng'
  },
  {
    name: '删除',
    icon: 'shanchu'
  },
  {
    name: '搜索',
    icon: 'sousuo'
  }
]
const mobileButtonsList: Array<IconType> = [
  {
    name: '新增',
    icon: 'xinzeng'
  },
  {
    name: '搜索',
    icon: 'sousuo'
  }
]

const handleButtons = (item: IconType) => {
  console.log(item)
}

const handleDelect = (row: any) => {
  row.visible = false
}
const tableData = [
  {
    nickName: '陈豆',
    age: 23
  },
  {
    nickName: '陈豆cc',
    age: 24
  }
]
</script>

<style scoped lang="scss"></style>
