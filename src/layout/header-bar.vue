<template>
  <nav>
    <el-popover placement="bottom" :visible="isActiveNav">
      <template #reference>
        <img
          class="logo"
          src="@/assets/logo.png"
          alt=""
          @click.stop="handleLogo"
        />
      </template>
      <div
        v-for="item in navList"
        :key="item.name"
        @click.stop="handleNav(item)"
        class="mobile-item"
        :style="{ color: activeItem == item.name ? '#d9534f' : '' }"
      >
        {{ item.meta?.title }}
      </div>
    </el-popover>
    <div class="right">
      <div class="navigation">
        <div
          v-for="item in navList"
          :key="item.name"
          @click.stop="handleNav(item)"
          :style="{
            '--activeStyle': activeItem == item.name ? 'block' : 'none'
          }"
        >
          {{ item.meta?.title }}
        </div>
      </div>
      <img src="@/assets/header.png" alt="" />
      <span>陈土豆</span>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { routes } from '@/router/index'
import { mainStore } from '@/store/main-store'
import { useRouter } from 'vue-router'
import { onMounted, reactive, ref } from 'vue'
//拿到导航列表
import type { RouteRecordRaw } from 'vue-router'
const navList: RouteRecordRaw[] = reactive([])
const homeRouter = routes.find((res) => res.name == 'home')
if (homeRouter) {
  navList.push(...(homeRouter.children as RouteRecordRaw[]))
}

//当前tab
let activeItem = ref(mainStore.activeRoute)
//路由跳转
const router = useRouter()
const handleNav = (navItem: any) => {
  const routerName = navItem.name
  activeItem.value = routerName
  isActiveNav.value = false
  router.push({ path: routerName })
  mainStore.setActiveRoute(navItem.name)
}

//点击logo 切换显示
let isActiveNav = ref(false)
const handleLogo = () => {
  if (document.body.clientWidth > 992) {
    handleNav({ name: 'home' }) //如果是pc端跳到首页
    return
  }
  isActiveNav.value = !isActiveNav.value
}

//mobile点击其他地方关闭菜单
onMounted(() => {
  document.addEventListener('click', (e) => {
    isActiveNav.value = false
  })
})
</script>

<style scoped lang="scss">
.activeNav {
  display: none;
}

.mobile-item {
  padding: 8px 2px;
  cursor: pointer;
  text-align: center;
}
nav {
  height: 58px;
  display: flex;
  align-items: center;
  padding: 0 10px 0 2px;
  justify-content: space-between;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12);
  .logo {
    width: 100px;
    cursor: pointer;
  }
  .navigation {
    font-size: 16px;
    display: flex;
    margin-right: 15px;
    > div {
      cursor: pointer;
      display: inline-block;
      text-align: center;
      margin: 0 18px;
      margin-bottom: 3px;
      position: relative;
      &::before {
        display: block;
        display: var(--activeStyle);
        position: absolute;
        width: 100%;
        content: '';
        margin-top: 10px;
        left: 0;
        bottom: -19px;
        height: 3px;
        background: $theme;
      }
    }
  }
  .right {
    display: flex;
    justify-content: end;
    align-items: center;

    > img {
      width: 30px;
      height: 30px;
      border-radius: 50px;
    }
    > span {
      min-width: 60px;
      padding-left: 10px;
      font-size: 16px;
    }
  }
}
//pc端
@media screen and (max-width: 992px) {
  .navigation {
    display: none !important;
  }
}
</style>
