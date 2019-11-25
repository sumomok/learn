<template>
  <div class="m-geo">
    <div class="position">
      <i class="el-icon-location" />
      {{$store.state.position}}
      <router-link class="changeCity" :to="{name:'changeCity'}">切换城市</router-link>
      [
        <a class="nearCity" v-for="(item,index) in nearCity" href="#" :key="index">{{item.name}}</a>
      ]
    </div>
    <div class="m-user" v-if="$store.state.userName">
      <router-link class="login" :to="{name:'login'}">立即登录</router-link>
      <router-link class="register" :to="{name:'register'}">注册</router-link>
    </div>
  </div>
</template>

<script>
 import api from '@/api/index.js';
export default {
  data(){
    return {
      data:[],
      nearCity:[]
    }
  },
  created(){
    api.getPosition().then(res=>{
      let data = res.data.data
      console.log(data)
      this.$store.commit('setPosition',data.name)
      this.nearCity = data.nearCity
    })
  }
};
</script>

<style >
.nearCity{
  margin-right:3px; 
}
</style>
