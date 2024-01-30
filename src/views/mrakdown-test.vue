<template>
  <div class="markdown-box">
    <textarea class="markdown dark:bg-black dark:text-white" v-model="markdownVal"/>
    <div class="outPut markdown-body" v-html="outputHTML"></div>

    <div class="fixed top-1/2 left-2 z-50 text-blue-600">
      <ul>
        <li v-for="item in outputHTMLList">
          <a :href="'#'+item.id" :style="{marginLeft: item.depth-1+'em'}">{{ item.text }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import {computed, ref} from "vue";
import "github-markdown-css"
import 'highlight.js/styles/github.css';
import {marked} from "marked"
import hljs from "highlight.js"

const markdownVal = ref("");
const outputHTML = computed(() => marked.parse(markdownVal.value))
const outputHTMLList = computed(() => {
  let val = marked.lexer(markdownVal.value)
  return formatDescTitle(val)
})

/**
 * 生成目录,
 * @param arr    marked lexer数据源
 * @param depth  取最小<h[depth]>的标题
 * @returns {*[]}
 */
function formatDescTitle(arr, depth = 3) {
  let tObj = {};
  let rArr = [];
  console.log(arr)

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].type === "heading" && arr[i].depth <= depth) {
      let tempObj = {
        text: arr[i].text,
        depth: arr[i].depth,
        id: arr[i].text
      }

      if (tObj[tempObj.id]) {
        let num = 0;
        while (true) {
          num++
          let id = tempObj.id + '-' + num
          if (!tObj[id]) {
            tempObj.id = id
            tObj[tempObj.id] = tempObj
            break
          }
        }
      } else {
        tObj[tempObj.id] = tempObj
      }
      rArr.push(tempObj)
    }
  }

  return rArr

}

marked.setOptions({
  renderer: new marked.Renderer(),
  highlight: function (code, lang) {
    const language = hljs.getLanguage(lang) ? lang : 'plaintext';
    return hljs.highlight(code, {language}).value;
  },
  langPrefix: 'hljs language-', // highlight.js css expects a top-level 'hljs' class.
  pedantic: false,
  gfm: true,
  breaks: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false
});
</script>
<style lang="scss">
.markdown-box {
  width: 100vw;
  height: 100vh;
  display: flex;

  .markdown {
    width: 50vw;
    resize: none;
    box-sizing: border-box;
  }

  .outPut {
    width: 50vw;
    border: 1px solid red;
    box-sizing: border-box;
    @apply border
  }
}


</style>
