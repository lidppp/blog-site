<template>
  <div class="body">
    <div class="nav">
      <div class="title" data-spotlight="Welcome To My Blog">
        Welcome To My Blog
      </div>
      <div class="nav-item-box">
        <div class="nav-item" v-for="item in menuList">
          <router-link class="nav-item-text" :to="item.url">{{ item.text }}</router-link>
        </div>
      </div>
    </div>

    <!--一言-->
    <!--<Ocs></Ocs>-->

    <!--进入首页的按钮-->
    <IndexToHomeBtn class="indexToHomeBtn" />

    <div class="footer">
      <div class="footer-item" v-for="item in footerItems">
        <template v-if="item.href">
          <a :href="item.href"  class="flex justify-center md:justify-end items-center" target="_blank">
            <i class="iconfont" :class="[item.icon]" v-if="item.icon"></i>
            <img class="w-4 h-4 mr-1" :src="[item.img]" v-if="item.img">
            {{item.text}}
          </a>
        </template>
        <template v-else>
          <i class="iconfont" :class="[item.icon]" v-if="item.icon"></i>
          {{item.text}}
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import Ocs from "@/components/ocs.vue"
import IndexToHomeBtn from "@/components/indexToHomeBtn.vue"
const menuList = [
  {
    url:"/home",
    text:"Home"
  },
  {
    url:"/allblog",
    text: "All Blog"
  },
  {
    url:"/about",
    text: "About Me"
  },
  {
    url:"/call",
    text: "Call Me"
  }
];
const footerItems = [
  {
    text:"@2024 lidppp"
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
.body {
  background: url("/image/bac1.jpg") no-repeat center center/cover;
  @apply relative min-w-full min-h-screen box-border text-white overflow-auto;

  @media (min-width: 768px)  {
    height: 100vh;
    min-height: 764px;
  }

  .nav {
    margin-top: 100px;
    top: 100px;
    right: 65px;
    @apply static md:absolute text-center md:text-right md:m-0;

    .title {
      font-size: 28px;

      @apply font-bold relative mb-12 max-w-max mx-auto;


      &::after {
        content: attr(data-spotlight);
        color: transparent;
        position: absolute;
        top: 0;
        left: 0;
        -webkit-clip-path: ellipse(100px 100px at 0% 50%);
        clip-path: ellipse(100px 100px at 0% 50%);
        animation: spotlight 5s infinite;
        background-image: linear-gradient(to right, rgba(225, 197, 139, 1), #84dbd6);
        background-size: 150%;
        background-position: center center;
        -webkit-background-clip: text;
        background-clip: text;
      }
    }

    .nav-item-box{
      .nav-item{
        @apply mb-6 hidden md:block;
        .nav-item-text{
          transition: all .3s, color 0s;
        }
        .nav-item-text:hover{
          background-image: linear-gradient(to right,rgba(202,253,191,1),#feb2be);
          background-size: 500%;
          color:#ffffff00;
          animation: indexLinkHover 5s infinite;
          -webkit-background-clip: text;
          background-clip: text;
          filter: drop-shadow(0 0 3px #fff);

        }
      }
    }
  }

  .footer{
    margin-top: 100px;
    @apply text-center md:text-right md:mt-0 absolute bottom-10 w-full md:w-auto right-0 md:right-[65px];
    .footer-item{
      font-size: 14px;
      @apply mb-1;
    }
  }

  .indexToHomeBtn{
    @apply fixed left-[50%] top-[50%] md:top-[auto] translate-x-[-50%] md:translate-x-0 translate-y-[-50%] md:translate-y-0 mx-auto md:absolute md:left-[65px] md:bottom-[100px];

  }
}

</style>
