<script setup lang="ts" name="Demo">
import { reactive, ref } from "vue";
import { useRoute } from "vue-router";
// import wx from "weixin-js-sdk";

const route = useRoute();
console.log("route", route.query);

const contentList = reactive([
  "✔ ⚡ Vue3 + Vite4",
  "✔ 🍕 TypeScript",
  "✔ ✨ Vant4 组件库",
  "✔ 🌀 Tailwindcss 原子类框架",
  "✔ 🍍 Pinia 状态管理",
  "✔ 🌓 支持深色模式",
  "✔ Vue-router 4",
  "✔ 支持 SVG 图标自动注册组件",
  "✔ vw 视口适配",
  "✔ Axios 封装",
  "✔ 打包资源 gzip 压缩",
  "✔ 开发环境支持 Mock 数据",
  "✔ ESLint",
  "✔ 首屏加载动画",
  "✔ 开发环境调试面板"
]);
const goText = ref("点击跳转小程序");
// 判断是否是ios或者小程序
const isIos = () => {
  const u = navigator.userAgent;
  // const isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1; //android终端
  const isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
  // const isMiniProgram = u.indexOf("miniProgram") > -1;
  return isiOS;
};
const toWx = () => {
  // if (isIos()) {
  var params = { url: 'Call APP method "CallApp()"' };
  // @ts-ignore
  console.log("ClickGoodsDetail", params, window.webkit);
  // @ts-ignore
  goText.value = window.webkit;
  // @ts-ignore
  window.webkit.messageHandlers.ClickGoodsDetail.postMessage(params);
  // } else {
  //   // 忽略eslint
  //   // eslint-disable-next-line
  //   wx.miniProgram.navigateTo({
  //     url: `/pageA/goodDetail/goodDetail?id=51&fromType=goods`
  //   });
  // }
};
</script>

<template>
  <div class="demo-content px-[12px]">
    <button @click="toWx">{{ goText }}</button>
    <img
      class="block w-[120px] mx-auto mb-[20px] pt-[30px]"
      alt="Vue logo"
      src="~@/assets/logo_melomini.png"
    />
    <div class="pl-[12px] border-l-[3px] border-[color:#41b883]">
      <a
        class="flex items-center"
        href="https://github.com/yulimchen/vue3-h5-template"
        target="_blank"
      >
        <svg-icon class="text-[20px] mr-[8px]" name="github" />
        <h3 class="font-bold text-[18px] my-[4px]">Vue3-h5-template</h3>
        <svg-icon class="text-[12px] ml-[5px]" name="link" />
      </a>
    </div>
    <div
      class="text-[14px] py-[2px] px-[10px] rounded-[4px] bg-[var(--color-block-background)] mt-[14px]"
    >
      <p class="my-[14px] leading-[24px]">
        {{ route.query }}
        🌱 基于 Vue3 全家桶、TypeScript、Vite 构建工具，开箱即用的 H5
        移动端项目基础模板
      </p>
    </div>

    <div class="demo-main">
      <van-cell v-for="(item, idx) in contentList" :key="idx" :title="item" />
    </div>
  </div>
</template>
