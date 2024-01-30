<template>
<div class="common-title">
  <!-- 主标题 -->
  <h1 class="common-title-main textShadow">{{props.title}}</h1>
  <!--副标题-->
  <h2 class="common-title-subtitle textShadow">{{props.subtitle}}</h2>
  <slot></slot>
</div>
</template>

<script setup>
const props = defineProps({
  title:{
    type: String,
    default: ''
  },
  subtitle:{
    type: String,
    default:null
  }
})
</script>

<style scoped lang="scss">
.common-title{
  margin: 80px auto 0;
  @apply w-full md:w-4/5;

  .common-title-main{
    font-size: 24px;
    margin-bottom: 30px;
    text-align: center;
  }

  .common-title-subtitle{
    font-size: 18px;
    margin-bottom: 30px;
    text-align: center;
  }

}
</style>
