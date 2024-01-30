/**
 * 生成文章markdown目录,
 * @param arr    marked lexer数据源
 * @param depth  取最小<h[depth]>的标题
 * @returns {*[]}
 */
export function formatDescTitle(arr, depth = 3){
  let tObj = {};
  let rArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].type === "heading" && arr[i].depth <= depth) {
      let tempObj = {
        text: arr[i].text,
        depth: arr[i].depth,
        id: arr[i].text
      }

      if (tObj[tempObj.id]) {
        let num = 0;
        while (true){
          num++
          let id = tempObj.id + '-' + num
          if (!tObj[id]) {
            tempObj.id = id
            tObj[tempObj.id] = tempObj
            break
          }
        }
      } else{
        tObj[tempObj.id] = tempObj
      }

      rArr.push(tempObj)
    }
  }

  return rArr

}
