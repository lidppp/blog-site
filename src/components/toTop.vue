<template>
  <div class="topbox" :class="{show: imgShow}" @click="toTop">
    <img src="/image/scroll.gif" draggable="false" alt="" class="top-img">
  </div>
</template>

<script setup>
import {onBeforeUnmount, onMounted, ref} from "vue";

let imgShow = ref(document.documentElement.scrollTop > 600);

const scrollFn = () => {
  imgShow.value = document.documentElement.scrollTop > 600;
}
const toTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener("scroll", scrollFn)
})

onBeforeUnmount(() => {
  window.removeEventListener("scroll", scrollFn)
})

</script>

<style scoped lang="scss">
.topbox {
  @apply hidden md:block cursor-pointer;
  position: fixed;
  transition: all .3s ease;
  right: 6vw;
  top: -120vh;
  height: 100vh;
  max-height: 1080px;


  &.show {
    transform: translateY(80%);
  }

  .top-img {
    @apply h-full;
    animation: toTop 2.5s infinite ease-in-out alternate;
    -webkit-user-drag: none;
  }

  &:active {
    .top-img {
      animation-play-state: paused;
      transform: translate3d(0, 10px, 0);
    }
  }


}
</style>
