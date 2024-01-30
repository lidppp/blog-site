<template>
  <div class="ocs " :class="{'opacity-0':!cosData}">
    <div class="ocs-content">
      {{ cosData?.hitokoto }}
    </div>
    <div class="ocs-author">
      —— {{ cosData?.from || "无名氏" }}
    </div>
  </div>
</template>

<script setup>
import {onMounted, ref, onBeforeUnmount} from "vue"
import {getCos} from "@/api/cos.js";

const cosData = ref(null)
let timeOutId = null;
function getData() {
  getCos().then(res => {
    cosData.value = {...res};
    clearTimeout(timeOutId);
    timeOutId = setTimeout(()=>{
      getData()
    },3*60*1000)
  }).catch(() => {
    setTimeout(()=>{
      getData()
    },5000)
  })
}

onMounted(() => {
  getData();
})

onBeforeUnmount(()=>{
    clearTimeout(timeOutId);
})
</script>

<style lang="scss" scoped>
.ocs {
  width: 80%;
  backdrop-filter: blur(4px);
  background: rgba(255, 255, 255, .2);
  box-shadow: 0px 0px 30px 6px rgba(255, 255, 255, 0.35);
  border-radius: 8px;
  margin: 0 auto;
  color: #fff;
  padding: 36px 36px 20px;
  @media (min-width: 768px) {
    width: 40%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 100px;
  }

  .ocs-content {
    position: relative;
    transform-origin: center center;
    margin-bottom: 25px;
    text-align: center;
    box-sizing: border-box;

    &::after {
      content: "『";
      position: absolute;
      display: block;
      top: -16px;
      left: -16px;
      //transform: translateY(100%);

    }

    &::before {
      content: "』";
      position: absolute;
      bottom: -16px;
      display: block;
      right: -16px;
    }
  }

  .ocs-author {
    font-size: 14px;
    text-align: right;
  }

}
</style>
