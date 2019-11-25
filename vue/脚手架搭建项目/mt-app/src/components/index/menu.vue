<template>
  <div class="m-menu" @mouseleave="mouseLeave">
    <dl class="nav"  >
      <dt>全部分类</dt>
      <dd v-for="(item,index) in menuList" :key='index' @mouseenter="mouseEnter(item)">
        <i :class="item.type"></i>
        {{item.name}}
        <span class="arrow"></span>
      </dd>
    </dl>
    <div v-if="curDetail" class="detail">
      <template  v-for="(item,index) in curDetail.items">
        <h4 :key='index'>
            {{item.title}}
        </h4>
        <span v-for="(Sitem,Sindex) in item.items" :key="Sindex+'_' + Sitem">{{Sitem}}</span>
      </template>
    </div>
  </div>
</template>
<script>
import api from '@/api/index.js'
export default {
    created(){
        api.getNav().then(res=>{
            this.menuList = res.data.data;
        })
    },
    data(){
        return{
            menuList:null,
            curDetail:null,
        }
    },
    methods:{
        mouseEnter(data){
            this.curDetail = data;
        },
        mouseLeave(){
            this.curDetail = null;
        }
    }
};
</script>