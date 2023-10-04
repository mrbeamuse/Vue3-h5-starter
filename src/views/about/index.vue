<script setup lang="ts" name="About">
const router = useRouter();
const goBack = () => {
  router.back();
};
onMounted(() => {
  console.log("mounted-detail");
});
</script>

<template>
  <div>
    <div>about-detail</div>
    <div @click="goBack">返回</div>
  </div>
</template>
