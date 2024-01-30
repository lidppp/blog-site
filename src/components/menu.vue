<template>
  <div class="menu-box menu-box1"  @click="changeOpenStatus">
    <div class="line-box" :class="{open:isOpen}">
      <div class="line line1" style="--line-translateY:-8px;--line-rotate:45deg"></div>
      <div class="line line2" style="--line-translateY:0px;--line-rotate:-45deg"></div>
      <div class="line line3" style="--line-translateY:8px;--line-rotate:45deg"></div>
    </div>

    <div class="menu-item-box" :class="{show:isOpen}" >
      <router-link class="menu-item" :to="item.url" v-for="item in menuList">{{ item.text }}</router-link>
    </div>

    <div class="shadow" :class="{show:isOpen}"></div>
  </div>

  <div class="menu-box menu-box2"  @click="changeOpenStatus(false)">
    <div class="line-box" :class="{open:isOpen}">
      <div class="line line1" style="--line-translateY:-8px;--line-rotate:45deg"></div>
      <div class="line line2" style="--line-translateY:0px;--line-rotate:-45deg"></div>
      <div class="line line3" style="--line-translateY:8px;--line-rotate:45deg"></div>
    </div>
    <MenuButtons :open="isOpen" :list="menuList"></MenuButtons>

  </div>
  <SearchButton />

</template>

<script setup>
import MenuButtons from "./menu-buttons.vue"
import {ref, watch} from "vue";
import SearchButton from "./searchButton.vue"

const menuList = [
  {
    url: "/home",
    text: "Home"
  },
  {
    // url: "/test",
    url: "/allBlog",
    text: "All Blog"
  },
  {
    url: "/about",
    text: "About Me"
  },
  {
    url: "/call",
    text: "Call Me"
  }
];
const isOpen = ref(false)
let lock = true;
const changeOpenStatus = (lockFlag=true) => {
  lock = lockFlag
  isOpen.value = !isOpen.value
}
watch(isOpen, (val) => {
  if (lock){
    window?.document?.body?.classList?.[!val ? "remove" : "add"]("lock")
  }
})
</script>

<style lang="scss" scoped>
.menu-box {
  top: 33px;
  right: 12px;
  z-index: 999;
  display: none;
  @media (min-width: 768px) {
    right: 64px;
  }
  @apply fixed;

  &.menu-box1{
    @apply block md:hidden;
  }
  &.menu-box2{
    @apply hidden md:block;
  }
  .line-box {
    width: 30px;
    height: 30px;
    @apply relative;
    z-index: 999;
    cursor: pointer;

    .line {
      position: absolute;
      top: 50%;
      left: 0;
      width: 30px;
      height: 2px;
      //border: 1px solid rgba(132, 219, 214, 0.58);
      //background: rgba(132, 219, 214);
      background: #fff;
      //@apply bg-white;
      transform: translateY(var(--line-translateY));
    }

    &.open {
      .line {
        background: var(--main-color);
        transform: rotate(var(--line-rotate));
      }
    }
  }


  .shadow {
    background: rgba(0, 0, 0, .5);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0;
    pointer-events: none;

    &.show {
      pointer-events: auto;
      opacity: 1;
    }
  }

  .menu-item-box {
    position: fixed;
    top: 20%;
    left: 50%;
    opacity: 0;
    transform: translateX(-50%);
    pointer-events: none;
    color: #fff;
    z-index: 10;

    &.show {
      pointer-events: auto;
      opacity: 1;
    }

    .menu-item{
      display: block;
      text-align: center;
      margin-bottom: 30px;
      font-size: 18px;
    }
  }

}
</style>
