<template>
  <!--<CommonTitle :title="'All Blog'" :subtitle="'越努力,越幸运!'">-->
  <!--  <div class="tags">-->
  <!--    <div class="tag-item textShadow">这是tag</div>-->
  <!--    <div class="tag-item textShadow">tag</div>-->
  <!--    <div class="tag-item textShadow">tagtagtag</div>-->
  <!--    <div class="tag-item textShadow">这是tag</div>-->
  <!--    <div class="tag-item textShadow">tag</div>-->
  <!--    <div class="tag-item textShadow">tagtagtag</div>-->
  <!--    <div class="tag-item textShadow">这是tag</div>-->
  <!--    <div class="tag-item textShadow">tag</div>-->
  <!--    <div class="tag-item textShadow">tagtagtag</div>-->
  <!--    <div class="tag-item textShadow">这是tag</div>-->
  <!--    <div class="tag-item textShadow">tag</div>-->
  <!--    <div class="tag-item textShadow">tagtagtag</div>-->
  <!--    <div class="tag-item textShadow">这是tag</div>-->
  <!--    <div class="tag-item textShadow">tag</div>-->
  <!--    <div class="tag-item textShadow">tagtagtag</div>-->
  <!--    <div class="tag-item textShadow">这是tag</div>-->
  <!--    <div class="tag-item textShadow">tag</div>-->
  <!--    <div class="tag-item textShadow">tagtagtag</div>-->
  <!--    <div class="tag-item textShadow">这是tag</div>-->
  <!--    <div class="tag-item textShadow">tag</div>-->
  <!--    <div class="tag-item textShadow">tagtagtag</div>-->
  <!--  </div>-->
  <!--</CommonTitle>-->
  <!--<WaterFallMain></WaterFallMain>-->

  <EmptyMessage></EmptyMessage>
</template>

<script setup>
import WaterFallMain from "@/components/water-fall-main.vue"
import CommonTitle from "@/components/commonTitle.vue"
import EmptyMessage from "@/components/emptyMessage.vue";
</script>

<style scoped lang="scss">

.tags{
  display: grid;
  grid-template-columns: repeat(auto-fill,100px);
  justify-content: space-around;
  grid-gap: 15px;
  text-align: center;
  margin-bottom: 30px;
  @apply px-8;

  .tag-item{
    cursor: pointer;
    transition: all 0.3s;
    &:hover,&.active{
      color: var(--main-color-dim);
    }
  }
}
</style>
