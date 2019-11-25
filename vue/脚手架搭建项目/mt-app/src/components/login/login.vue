<template>
  <div class="form">
    <h4 v-if="error" class="tips">{{error}}</h4>
      <p>
          <span>账号登录</span>
      </p>
      <el-input :class="{error:error&&!userName}" v-model="userName" placeholder="手机号/用户名/邮箱" prefix-icon="el-icon-user"></el-input>
      <el-input :class="{error:error&&!userName}" v-model="password" type="password" prefix-icon="password"></el-input>
      <p class="foot" >
          <a href="#">忘记密码</a>
      </p>
      <el-button class="btn-login" @click="submit">登录</el-button>
    <div class="reg">
      还没有账号？
      <router-link :to="{name:'register'}">立即注册</router-link>
    </div>
    <div class="oauth-wrapper">
      <div class="title-wrapper">
        <span class="title">用合作网站账号登录</span>
      </div>
      <div class="oauth">
        <span class="oauth__link"></span>
        <span class="oauth__link_weibo"></span>
      </div>
    </div>
  </div>
</template>

<script>
import api from '@/api/index.js'
export default {
    data(){
        return{
            userName:'',
            password:'',
            error:'',
        }
    },
    methods:{
      submit(){
          if (!this.userName) {
            this.error = '请输入账号'
            return false;
          }
          if(!this.password) {
            this.error = '请输入密码'
            return false;
          }
        let params = {
          userName:this.userName,
          password:this.password,
        }
        api.login({
          params:params
          }).then(res=>{
          if (res.data.status == 'success' ){
            this.$store.commit('setUserName',this.userName);
            this.$router.push({name:'index'})
          } else {
            this.error = res.data.msg;
          }
        })
      }
    }
};
</script>

<style lang="scss" scoped>
</style>