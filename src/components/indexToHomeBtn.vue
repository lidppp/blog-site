<template>
  <div class="btn">
    <div class="circle" v-for="item in circleArr" :class="{reverse: item.reverse}" :style="item"></div>
    <router-link class="link" :to="props.url">
      <div class="link-text">{{ props.text }}</div>
    </router-link>
    <div class="dot"></div>
  </div>
</template>

<script setup>
const circleArr = [
  {
    "--width": "100px",
    "--color": "#5ee3eb",
    "--time": Math.random() * 5 + 0.8 + "s",
    "--border": "2px",
    reverse: Math.random() > 0.5
  },
  {
    "--width": "125px",
    "--color": "#5e8ceb",
    "--time": Math.random() * 4 + 1 + "s",
    "--border": "3px",
    reverse: Math.random() > 0.5
  },
  {
    "--width": "150px",
    "--color": "#a05eeb",
    "--time": Math.random() * 4 + 1 + "s",
    "--border": "6px",
    reverse: Math.random() > 0.5
  },
  {
    "--width": "175px",
    "--color": "#5eeb78",
    "--time": Math.random() * 4 + 1 + "s",
    "--border": "4px",
    reverse: Math.random() > 0.5
  },
  {
    "--width": "200px",
    "--color": "#e3eb5e",
    "--time": Math.random() * 4 + 1 + "s",
    "--border": "6px",
    reverse: Math.random() > 0.5
  }
];
const props = defineProps({
  text: {
    type: String,
    default: "HOME"
  },
  url: {
    type:String,
    default:"/home"
  }
})
</script>

<style scoped lang="scss">
.btn {
  position: relative;
  width: 200px;
  height: 200px;
  color: #fff;

  .circle {
    position: absolute;
    top: 50%;
    left: 50%;
    width: var(--width);
    height: var(--width);
    border-radius: 50%;
    border: solid var(--border) var(--color);
    border-left: solid var(--border) transparent;
    border-right: solid var(--border) transparent;
    border-bottom: solid var(--border) transparent;
    animation: spin var(--time) infinite linear, twinkle calc(var(--time) / 2) infinite;
    
    &.reverse{
      animation-direction: reverse !important;
    }
  }

  .link{
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
  }
  .dot{
    position: absolute;
    top: 50%;
    left: 50%;
    width: 47px;
    height: 47px;
    background-color: rgba(94, 235, 121, 1);
    border-radius: 50%;
    box-shadow: 0 0 7px 3px rgba(94, 235, 121, 1);
    animation: dotJump 4s infinite;
    z-index: 1;
  }
}

</style>
