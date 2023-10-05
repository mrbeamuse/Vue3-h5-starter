<script setup lang="ts">
// import tabbar from "@/components/Tabbar/index.vue";
// import NavBar from "@/components/NavBar/index.vue";
// import { useDarkMode } from "@/hooks/useToggleDarkMode";
</script>

<template>
  <div class="app-wrapper">
    <van-config-provider :theme="useDarkMode() ? 'dark' : 'light'">
      <nav-bar />
      <router-view v-slot="{ Component }">
        <sk-transition name="slide-left" back_name="slide-right">
          <stack-keep-alive v-slot="{ key }">
            <component :is="Component" :key="key" />
          </stack-keep-alive>
        </sk-transition>
      </router-view>
      <tabbar />
    </van-config-provider>
  </div>
</template>

<style lang="less" scoped>
@import "@/styles/mixin.less";

.app-wrapper {
  .clearfix();
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: transform 350ms;
  position: fixed;
  pointer-events: none;
  width: 100%;
  height: 100%;
}

.slide-left-enter-active,
.slide-right-leave-active {
  z-index: 99;
}

.slide-right-enter-from {
  z-index: 1;
  transform: translate3d(-100%, 0, 0);
}

.slide-right-leave-active {
  transition-delay: 100ms;
  transform: translate3d(100%, 0, 0);
}

.slide-left-enter-from {
  transform: translate3d(100%, 0, 0);
}

.slide-left-leave-active {
  transition-delay: 100ms;
  transform: translate3d(-100%, 0, 0);
}
</style>
