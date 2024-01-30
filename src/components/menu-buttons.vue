<template>
  <div class="btn-box" :class="{show:props.open || close}" @click.stop.prevent="()=>{}">
    <div class="btn" v-for="(item,i) in list" :style="{'--del': (i * 0.2)+'s'}" :class="{close: close}"
         @click.stop.prevent="jumpUrl(item.url)">
      <div class="text">
        {{ item.text }}
      </div>
    </div>
  </div>

</template>

<script setup>
import {ref, watch} from "vue";
import {useRouter} from "vue-router";

const props = defineProps({
  open: Boolean,
  list: Array
})
const close = ref(false)
let timeOutId = null
watch(props, () => {
  if (!props.open) {
    close.value = true
    clearInterval(timeOutId)
    timeOutId = setTimeout(() => {
      close.value = false
    }, 1800)
  }
})
const router = useRouter()
const jumpUrl = (url)=>{
  router.push(url)
}
</script>

<style scoped lang="scss">
.btn-box {
  position: absolute;
  right: 0;
  display: flex;

  &.show {
    .btn {
      &, &::after, &::before {
        display: block;
      }
    }
  }

  .btn {
    margin: 0 30px;
    position: relative;
    animation: menuShow 1s ease 1 forwards, menuLight 4s ease infinite;
    animation-delay: var(--del), calc(var(--del) + 1s);
    transform: scale(0);
    cursor: pointer;


    .text {
      transition: all .3s;
      position: absolute;
      text-align: center;
      left: -25px;
      right: -25px;
      top: 50%;
      transform: translateY(-50%);
      color: #fff;
      z-index: 10;
      font-weight: bold;
      text-transform: uppercase;
    }

    &.close {
      transform: scale(1);
      animation: menuClose 1s ease 1 forwards;
      animation-delay: var(--del);
    }

    &:hover {
      .text {
        color: var(--main-color);
      }

      &, &::after, &::before {
        //background: rgb(19, 218, 200);
        border-color: var(--main-color);
        //backdrop-filter: blur(2px);
        filter: drop-shadow(0 0 8px var(--main-color)) !important;
      }
    }


    &:nth-child(even) {
      margin-left: 0;
      margin-right: 0;
      margin-top: 43px;
    }

    &, &::after, &::before {
      transition: all .3s;
      display: none;
      width: 50px;
      height: 86px;
      border-top: 1px solid white;
      border-bottom: 1px solid white;
      box-sizing: border-box;
      font-size: 12px;

    }

    &::after {
      --deg: -60deg;
    }

    &::before {
      --deg: 60deg;
    }

    &::after, &::before {
      position: absolute;
      top: 0;
      left: 0;
      content: "";
      transform: rotate(var(--deg));
      animation: menuLight 4s ease infinite;
      animation-delay: calc(var(--del) + 1s);
    }

  }
}

@keyframes menuShow {
  0% {
    transform: scale(0);
  }
  80% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes menuClose {
  0% {
    transform: scale(1);
  }
  20% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(0);
  }
}

@keyframes menuLight {
  0% {
    filter: drop-shadow(0 0 8px rgba(255, 255, 255, .0));
  }
  80% {
    filter: drop-shadow(0 0 8px rgba(255, 255, 255, 1));
  }
  100% {
    filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0));
  }
}
</style>
