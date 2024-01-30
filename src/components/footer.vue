<template>
  <div class="footer">
    <div class="footer-item" v-for="item in footerItems">
      <template v-if="item.href">
        <a :href="item.href" class="flex justify-center md:justify-end items-center" target="_blank">
          <i class="iconfont" :class="[item.icon]" v-if="item.icon"></i>
          <img class="w-4 h-4 mr-1" :src="[item.img]" v-if="item.img">
          {{ item.text }}
        </a>
      </template>
      <template v-else>
        <i class="iconfont" :class="[item.icon]" v-if="item.icon"></i>
        {{ item.text }}
      </template>
    </div>
  </div>
</template>
<script setup>
const footerItems = [
  {
    text: "@2024 lidppp"
  },
  {
    text: "晋ICP备19009175号-2",
    href: "http://beian.miit.gov.cn/"
  },
  {
    text: "晋公网安备14092302000031号",
    href: "https://beian.mps.gov.cn/#/query/webSearch?code=14092302000031",
    img: "/image/gongan.png"
  },
  {
    text: "GitHub",
    href: "https://github.com/lidppp",
    icon: "icon-github-fill"
  }
]
</script>


<style scoped lang="scss">
.footer {
  margin-top: 100px;
  //static md:absolute
  @apply text-center md:text-right md:mt-0 absolute md:fixed bottom-10 text-white md:right-[64px] w-full md:w-auto;
  .footer-item {
    font-size: 14px;
    @apply mb-1;
  }
}
</style>
