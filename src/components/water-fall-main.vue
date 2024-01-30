<template>
  <div class="main" ref="mainDom">
    <water-fall  gap="20px" width="330px" :data="dataArr" :delay="true" ref="water">
      <template v-slot="item">
        <water-fall-item :data="item"></water-fall-item>
      </template>
    </water-fall>
  </div>
</template>

<script setup>
import WaterFall from 'kuan-vue-waterfall'
import WaterFallItem from "./water-fall-item.vue"
import {onMounted, onUnmounted, ref} from "vue";
const dataArr = ref([])
const water = ref(null)
const mainDom = ref(null)
const lock = ref(false)
let offsetTop = 0
for (let i = 0; i < 30; i++) {
  dataArr.value.push({
    key: i,
    src: "https://api.yimian.xyz/img?type=wallpaper&R18=false&time=" + i,
    title: "这是个标题"+i,
    num: i,
    type:"mysql",
    time: +new Date()
  })
}

setTimeout(()=>{
  console.log("元素添加")
  // water.value = false
  // await nextTick()
  // water.value = true
  dataArr.value = [...dataArr.value]
  for (let i = 0; i < 30; i++) {
    dataArr.value.push({
      key: i + 30,
      src: "https://api.yimian.xyz/img?type=wallpaper&R18=false&time=" + i + 30,
      title: "这是个标题"+(i + 30),
      num: i + 30,
      type:"mysql",
      time: +new Date()
    })
  }
}, 30000)

function scrollHandle() {
  if (lock.value) {
    return
  }
  let t;
  if (document.documentElement && document.documentElement.scrollTop) {
    t = document.documentElement.scrollTop;
  } else if (document.body) {
    t = document.body.scrollTop;
  }
  // console.log(t, offsetTop, water.value.containerHeight)
  if (t - offsetTop + window.innerHeight + 200 > water.value.containerHeight) {
    lock.value = true
    console.log("触底加载")

    setTimeout(() => {
      lock.value = false
    }, 3000)
  }
}

function resizeHandle() {
  offsetTop = mainDom.value.offsetTop
}

onMounted(() => {
  offsetTop = mainDom.value.offsetTop
  window.addEventListener("scroll", scrollHandle)
  window.addEventListener("resize", resizeHandle)
})

onUnmounted(() => {
  window.removeEventListener("scroll", scrollHandle)
  window.removeEventListener("resize", resizeHandle)
})

</script>

<style scoped lang="scss">
.main {
  background: rgba(255, 255, 255, .5);
  min-width: 380px;
  max-width: 1200px;
  @apply w-full mx-auto md:w-4/5 py-8;
  ::v-deep(.kuan-vue-waterfall){
    overflow: visible;
  }
}



</style>
