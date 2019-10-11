<template>
  <div class="question">
    问题：{{title}}
    <button @click="handleClick(-1)" v-if="index  > 0 ">上一个问题</button>
    <button @click="handleClick(1)" v-if="index  < questionListLength - 1">下一个问题</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
      ],
      index: 0,
      title: "",
      questionListLength: 0,
    };
  },
  // 当路由数据发生改变的时候     beforeRouteEnter 为当路由刚进入的时候
  beforeRouteUpdate(to, from, next) {
    if (to.params.id != {}) {
      const id = to.params.id;
      this.index = this.questionList.findIndex(item => item.questionId === id);
      this.title = this.questionList[this.index].title;
      next();
    }
  },
  mounted() {
      // 用来获取动态路由传递的数据 this.$route.params
      // get传参为 this.$route.query
    const id = this.$route.params.id;
    this.index = this.questionList.findIndex(item => item.questionId === id);
    this.title = this.questionList[this.index].title;
    this.questionListLength = this.questionList['length'];
  },
  methods: {
    handleClick(val) {
      //   console.log(this.questionList[this.index + 1].questionId)
      this.$router.push({
        name: "question",
        params: { id: this.questionList[this.index + val].questionId }
      });
    }
  }
};
</script>

<style>
</style>