export default {
    routes:[
        {
            path:"/",component:"@/layouts/index",exact:false,
            routes:[
                {
                    path:"/",component:"./",title:"首页"
                },
                {
                    path:"/login",component:"./login",title:"登录"
                },
                {
                    path:"/welcome",component:"./welcome",title:"欢迎"
                },
            ]
        },
    ],
    dva: {
        immer: true,
        hmr: false,
      },
}