<script setup lang="ts" name="Index">
import type { it } from "node:test";
// import { reactive, ref, onMounted } from "vue";
// import { useRoute } from "vue-router";
import { getActivityApi } from "@/api/index";
import { isIos } from "@/utils/useUa";
import ZList from "@/components/ZList/index.vue";
import ZTitle from "@/components/ZTitle/index.vue";
import ZSwiper from "@/components/ZSwiper/index.vue";

const route = useRoute();
console.log("route", route.query);
const activityData = ref([]);
route.query.id = 12;

const goText = ref("主页点击跳转小程序");
onMounted(async () => {
  activityData.value = await getActivityApi({ id: route.query.id });
  console.log("activityData", activityData.value);
});
// <span v-if="scope.row.style == 1">list单列</span>
//               <span v-else-if="scope.row.style == 2">list双列</span>
//               <span v-else-if="scope.row.style == 3">list三列</span>
//               <span v-else-if="scope.row.style == 4">轮播图</span>
//               <span v-else-if="scope.row.style == 5">标题栏</span>
const compTypeMap = {
  1: ZList,
  2: ZList,
  3: ZList,
  4: ZSwiper,
  5: ZTitle
};
const productTypeMap = {
  0: "ZList",
  1: "ZCounpon"
};

const componentInfo = computed(() => {
  return activityData.value.moduleVos?.map(item => {
    return {
      ...item,
      compType: compTypeMap[item.style],
      productType: productTypeMap[item.type]
    };
  });
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
    class="demo-content px-[12px] h-screen overflow-y-auto"
    :style="{ background: activityData?.rgb }"
  >
    <button @click="toWx">{{ goText }}</button>
    <img class="w-full" alt="Vue logo" :src="activityData.backgroundUrl" />
    <component
      v-for="item in componentInfo"
      :key="item.id"
      :is="item.compType"
      :data="item"
    ></component>
    <!-- <z-list></z-list> -->
    <!-- <z-title></z-title> -->
  </div>
</template>
