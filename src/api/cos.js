import http from "@/http/request.js"

export function getCos(params){
  return http({
    method:"GET",
    url:"https://v1.hitokoto.cn",
    params
  })
}
