<template>
  <div>
    <Teleport to="body">
      <canvas ref="can" id="snow"/>
      <!--<AudioPlayer/>-->
    </Teleport>
    <router-view v-if="$route.meta.notLayout"/>
    <div v-else>
      <Menu></Menu>
      <Teleport to="body">
        <Bac></Bac>
        <ToTop></ToTop>
      </Teleport>
      <router-view #default="{Component,route}">
        <transition name="fade" mode="out-in" :duration="800">
          <div class="tran-box" :key="route.path">
            <div class="tran-mask">
              <div class="mask-item mask1" style="--v:0%;--d:0s;--p:-100%"></div>
              <div class="mask-item mask2" style="--v:25%;--d:.1s;--p:100%"></div>
              <div class="mask-item mask3" style="--v:50%;--d:.2s;--p:-100%"></div>
              <div class="mask-item mask4" style="--v:75%;--d:.3s;--p:100%"></div>
            </div>
            <div class="tran-content">
              <component :is="Component"/>
            </div>
          </div>

        </transition>
      </router-view>
      <Footer></Footer>

    </div>
  </div>
</template>

<script setup>
import Menu from "@/components/menu.vue";
import Snow from "@/utils/snow.js";
// import AudioPlayer from "@/components/audioPlayer.vue";
import ToTop from "@/components/toTop.vue";
import {nextTick, ref, watch} from "vue";
import Bac from "@/components/bac.vue";
import {L2Dwidget} from "live2d-widget";
import {useRoute} from "vue-router";
import Footer from "@/components/footer.vue";

let route = useRoute();

// const moduleName = Math.random() > 0.7 ? "rem" : "snow_miku";
const moduleName = "snow_miku";
if (import.meta.env.MODE !== "development") {
  L2Dwidget.init(
      {
        "pluginRootPath": "/live2dw/",
        "pluginJsPath": "lib/",
        "pluginModelPath": "assets/",
        "tagMode": false,
        "debug": false,
        "model": {"jsonPath": `/live2dw/${moduleName}/model.json`},
        "display": {"position": "right", "width": 300, "height": 300},
        "mobile": {"show": false},
        "log": false
      }
  );
}


const can = ref(null)
let canSnow = null
watch(route, (val) => {
  nextTick(() => {
    let bodyDom = document.querySelector("body")
    if (val?.meta?.notLayout) {
      bodyDom && bodyDom.classList.add("notLayout")
      if (can.value && !canSnow) {
        canSnow = new Snow(can.value, {
          speed: 10,
          num: 200,
          color: "rgba(255, 255, 255, 1)",
          max: 8,
          min: 3,
          outColor: "rgba(255,255,255,0.3)",
          defaultMouse: true,
          mouseReverse: true
        })
      }
    } else {
      bodyDom && bodyDom.classList.remove("notLayout")
      if (!!canSnow) {
        console.log("canSnow 销毁")
        canSnow.destroy();
        canSnow = null
      }
    }
  })
}, {
  immediate: true,
  deep: true
})

</script>

<style scoped lang="scss">
#snow {
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  opacity: .6;
}

.tran-box{
  .tran-mask{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 99999;
    pointer-events: none;
    overflow: hidden;
    .mask-item{
      background: #93bfa8;
      position: absolute;
      transition: all .5s;
      transition-delay: var(--d);
      opacity: 0;
      transform:translateY(var(--p));
    }
  }
  &.fade-enter-active{
    .mask-item{
      height: 25vh;
      width: 100%;
      left: 0;
      top: var(--v);
      transform:translateX(var(--p));
    }
  }
  &.fade-leave-active{
    .mask-item{
      height: 100%;
      width: 25vw;
      left: var(--v);
      top: 0;
      transform:translateY(var(--p));
    }
  }

  &.fade-enter-active,
  &.fade-leave-active {
    .mask-item{
      opacity: 1;
    }
  }

  &.fade-enter-from,
  &.fade-leave-to {
    .mask-item{
      transform: translate(0);
    }
  }
  &.fade-enter-to{
    .mask-item{
      opacity: 0;
    }
  }
}



</style>
