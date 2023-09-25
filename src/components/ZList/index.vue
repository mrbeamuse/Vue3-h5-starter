<script setup lang="ts" name="ZList">
import ZListItem from "@/components/ZListItem/index.vue";
import ZCounpon from "@/components/ZCounpon/index.vue";
const props = defineProps({
  data: {
    type: Object,
    default: () => {}
  }
});
const listStyle = computed(() => {
  return props.data.style;
});
const listStyleMap = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3"
};
const productType = computed(() => {
  const maps = {
    1: { list: props.data.spuVos, type: ZListItem },
    2: { list: props.data.couponVos, type: ZCounpon }
  };
  return maps[props.data.type];
});
</script>

<template>
  <div class="w-full grid" :class="listStyleMap[listStyle]">
    <!-- <z-list-item v-for="item in productType" :key="item.id"></z-list-item> -->
    <component
      v-for="item in productType.list"
      :key="item.id"
      :is="item.type"
    ></component>
  </div>
</template>
