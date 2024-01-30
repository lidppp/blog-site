<template>
  <div class="water-fall-my-item">
    <img class="cover-img" :src="props.data.src" alt="">
    <div class="item-shadow"></div>
    <div class="item-msg">
      <div class="title">{{ data.title }}</div>
      <div class="message">
        <span>{{ data.num }} 阅读</span>
        <a class="link" href="https://www.baidu.com">{{ data.type }}</a>
      </div>
      <div class="time">{{ moment(data.time).format("YYYY-MM-DD HH:mm:ss") }}</div>
    </div>
  </div>
</template>


<script setup>
import moment from "moment"
const props = defineProps({
  data: {
    type: Object,
    default: () => ({})
  }
})
</script>

<style scoped lang="scss">
.macy-item {
  transform: translateZ(0);
  transition: all .3s;

  .macy-item-img {
    object-fit: cover;
  }
}

.water-fall-my-item{
  backdrop-filter: blur(3px);
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  &:hover{
    box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.1), 0 20px 25px 0 rgba(0, 0, 0, 0.2);
  }

  .cover-img{
    width: 100%;
  }

  .item-shadow{
    margin-top: -40px;
    height: 40px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%,rgba(255, 255, 255, 0.6) 100%);
    position: relative;
    z-index: 1;
  }
  .item-msg{
    background: rgba(255, 255, 255, 0.6);
    padding: 0 0 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .title,
    .message,
    .time{
      text-align: center;
    }

    .title{
      font-size: 20px;
      margin: 12px;
    }
    .message {
      color: #525252;
      .link{
        margin-left: 12px;
        transition: all .3s;
        &:hover{
          color: var(--main-color-dim);
        }
      }
    }
    .time{
      color: #525252;
      margin: 8px 0 0 0;
    }
  }
}
</style>
