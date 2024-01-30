<template>
  <div class="search-box">
    <input type="text" placeholder="Search...">
    <div class="search"></div>
  </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
.search-box {
  position: fixed;
  top: 26px;
  left: 16px;
  z-index: 998;
  .search {
    position: absolute;
    top: 0;
    left: 0;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    transition: all 1s;
    z-index: 4;
    //box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.4);
    // box-shadow: 0 0 25px 0 crimson;
    &:hover {
      cursor: pointer;
    }
    &::before {
      content: "";
      position: absolute;
      margin: auto;
      top: 16px;
      right: 0;
      bottom: 0;
      left: 16px;
      width: 8px;
      height: 2px;
      background: white;
      transform: rotate(45deg) translateZ(0);
      transition: all .5s;
      transition-delay: 0.2s;
    }
    &::after {
      content: "";
      position: absolute;
      margin: auto;
      top: -3px;
      right: 0;
      bottom: 0;
      left: -3px;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      border: 2px solid white;
      transform: rotate(0deg) translateZ(0);
      transition: all .5s;
    }
  }
  input {
    position: relative;
    width: 50px;
    height: 50px;
    outline: none !important;
    // border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    border: 1px solid var(--main-color);
    background: rgba(0,0,0,0.1);
    color: white;
    //text-shadow: 0 0 10px #14f1dd;
    padding: 0 40px 0 60px;
    border-radius: 30px;
    //box-shadow: 0 0 25px 0 #14f1dd, 0 20px 25px 0 rgba(0, 0, 0, 0.2);
    // box-shadow: inset 0 0 25px 0 rgba(0, 0, 0, 0.5);
    transition: all 0.3s;
    opacity: 0;
    z-index: 5;
    letter-spacing: 0.1em;
    box-sizing:border-box;
    &:hover {
      cursor: pointer;
    }
    &:focus {
      width: 300px;
      height: 40px;
      opacity: 1;
      cursor: text;
      transform: translate3d(15px,5px,0);
      box-shadow: none;
    }
    &:focus ~ .search {
      right: -250px;
      background: #646464;
      z-index: 6;
      &::before {
        top: 0;
        left: 0;
        width: 25px;
      }
      &::after {
        top: 0;
        left: 0;
        width: 25px;
        height: 2px;
        border-width: 0;
        background: white;
        border-radius: 0;
        transform: rotate(-45deg) translateZ(0);
      }
    }
    &::placeholder {
      color: white;
      opacity: 0.5;
      font-weight: bolder;
    }
  }
}

</style>
