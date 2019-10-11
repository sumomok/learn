<template>
<div id="id">
  <div class="header">
          <div class="logo" @click="handleClick">渡一教育</div>
    <ul class="nav">
      <!-- 用来使用路由↓  -->

      <router-link tag='li' to="/home">首页</router-link> 
      <router-link tag='li' to="/about">关于</router-link>
      <router-link tag='li' to="/Student">学术</router-link> 
      <router-link tag='li' to="/Learn">学习资料</router-link>
      <router-link tag='li' to="/Community">社区</router-link>
    </ul>
  </div>
       <!-- 用来展示路由↓ 加入class后 展示的内容上存在class = 'view'  可以通过改变view的样式改变组件整体的样式 -->
      <router-view class="view"/>
</div>

</template>

<script>
  export default {
    methods:{
      handleClick(){
        // 添加页面 ↓ ： [页面一，页面二，页面三] => [页面一，页面二，页面三，home]
        this.$router.push('/home');
        // 替换页面 ↓ ： [页面一，页面二，页面三] => [页面一，页面二，home]
        // this.$router.replace('/home');
        // location.go() 等价 ↓
        // this.$rotuer.go(-1)
      }
    }
  }
</script>

<style>
.header {
  display: flex;
  justify-content: space-between;
  padding: 0 200px;
  background-color: #38f;
  line-height: 70px;
  padding-bottom: 2px;
  color: #fff;
}

.logo {
  cursor: pointer;
}

.nav {
  display: flex;
}

.nav li {
  margin: 0 20px;
  cursor: pointer;
}

.view {
  padding: 50px 200px;
}

.active {
  font-weight: bold;
}
</style>
