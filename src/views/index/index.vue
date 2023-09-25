<script setup lang="ts" name="Index">
// import { reactive, ref, onMounted } from "vue";
// import { useRoute } from "vue-router";
import { getActivityApi } from "@/api/index";
import { isIos } from "@/utils/useUa";

const route = useRoute();
console.log("route", route.query);
const activityData = ref([]);
route.query.id = 9;

const goText = ref("主页点击跳转小程序");
onMounted(async () => {
  activityData.value = await getActivityApi({ id: 9 });
  console.log("activityData", activityData.value);
});

const toWx = () => {
  var params = {
    url: 'Call APP method "CallApp()"',
    goodsId: "51",
    clickType: "1" // 商品详情
  };
  if (isIos()) {
    // @ts-ignore
    console.log("handleClick", isIos(), params, window.webkit);
    // @ts-ignore
    window.webkit.messageHandlers.handleClick.postMessage(params);
  } else {
    // eslint-disable-next-line
    wx.miniProgram.navigateTo({
      url: `/pageA/goodDetail/goodDetail?id=51&fromType=goods`
    });
  }
};
</script>

<template>
  <div
    class="demo-content px-[12px]"
    :style="{ background: activityData?.rgb }"
  >
    <button @click="toWx">{{ goText }}</button>
    <img class="w-full" alt="Vue logo" :src="activityData.backgroundUrl" />
    <!-- <div class="pl-[12px] border-l-[3px] border-[color:#41b883]">
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
    </div> -->
  </div>
</template>
