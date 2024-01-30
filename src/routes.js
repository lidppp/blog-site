export const routes = [

  {
    path: '/',
    component: ()=>import("@/layout/default.vue"),
    children:[
      { path: '',
        component: ()=>import("@/views/Index.vue"),
        meta:{
          title:"lidppp's blog", // document.title
          notLayout: true  // 是否不要header等等
        }
      },
      {
        path:"home",
        component: ()=>import("@/views/Home.vue"),
        meta:{
          title:"lidppp's blog"
        }
      },
      {
        path:"about",
        component: ()=>import("@/views/Home.vue"),
        // component: ()=>import("@/views/About.vue"),
        meta:{
          title:"About Me",
        }
      },
      {
        path:"markdown",
        component: ()=>import("@/views/mrakdown-test.vue"),
        meta:{
          title:"mrakdown"
        }
      }
      ,
      {
        path:"test",
        component: ()=>import("@/views/test.vue"),
        meta:{
          title:"test"
        }
      }
    ]
  },
  { path: '/:path(.*)', redirect: "/home" },
]
