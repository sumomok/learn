<template>
    <div class="academic">
        <ul>
            <!-- <li>test</li> -->
            <!-- params 为动态路由传参    get传参为query -->
            <router-link
            v-for="item in questionList" :key='item.questionId'
             :to="{name:'question',params:{id:item.questionId}}" tag=li :questionTitle='item.title'> {{item.title}} </router-link>
        </ul>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    // beforeRouteEnter(to,from,next){
    //     console.log(to,from)
    // }
    data(){
        return{
            questionList: [
        {
          questionId: 201801,
          title: "到底什么是es6中的class（类）？怎么实现class（类）？"
        },
        {
          questionId: 201802,
          title:
            "什么是es6箭头函数？与普通函数主要区别在哪里？到底该不该使用箭头函数？"
        },
        {
          questionId: 201803,
          title:
            "什么是es6的解构赋值，每次都创建一个对象吗？会加重GC的负担吗？为什么？"
        }
      ]
        }
    }
}
</script>