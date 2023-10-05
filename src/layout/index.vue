<script setup lang="ts">
// import tabbar from "@/components/Tabbar/index.vue";
// import NavBar from "@/components/NavBar/index.vue";
// import { useDarkMode } from "@/hooks/useToggleDarkMode";
</script>

<template>
  <div class="app-wrapper">
    <!-- <van-config-provider :theme="useDarkMode() ? 'dark' : 'light'"> -->
    <!-- <nav-bar /> -->
    <!-- <router-view v-slot="{ Component }">
        <stack-keep-alive :include="cachedViews">
          <component :is="Component" />
        </stack-keep-alive>
      </router-view> -->
    <!-- <tabbar /> -->
    <router-view v-slot="{ Component }">
      <!-- <sk-transition name="slide-left" back_name="slide-right"> -->
      <stack-keep-alive v-slot="{ key }">
        <component :is="Component" :key="key" />
      </stack-keep-alive>
      <!-- </sk-transition> -->
    </router-view>
    <!-- </van-config-provider> -->
  </div>
</template>

<style lang="less" scoped>
@import "@/styles/mixin.less";

.app-wrapper {
  .clearfix();
  position: relative;
  height: 100%;
  width: 100%;
}
</style>
