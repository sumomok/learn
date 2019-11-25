<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col :span="3" class="left">
        <img src="//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" alt="美团" />
      </el-col>
      <el-col :span="15" class="center">
        <div class="wrapper">
          <el-input v-model="searchWord" placeholder="请输入要查询的内容" @input="input" @focus="focus" @blur="blur"></el-input>
          <el-button type="primary" icon="el-icon-search">搜索</el-button>
          <dl class="hotPlace" v-if="isHotPlace">
            <dt>热门搜索</dt>
            <dd v-for="(item,index) in hotList" :key="index">
              <router-link :to="{name:'goods',params:{name:item}}">{{item}}</router-link>
            </dd>
          </dl>
          <dl class="searchList" v-if="isSerchList">
            <dd v-for="(item,index) in searchList" :key="index">
              <router-link :to="{name:'goods',params:{name:item}}">{{item}}</router-link>
            </dd>
          </dl>
        </div>
        <p class="suggest">
          <a v-for="(item,index) in suggestList" :key="index" href="#">{{item}}</a>
        </p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import api from "@/api/index.js";
export default {
  data() {
    return {
      searchWord: "",
      isFocus: false,
      hotList: null,
      suggestList: null,
      searchList: null
    };
  },
  created() {
    api.getSearchHotWord().then(res=>{
         this.suggestList = this.hotList = res.data.data;
    })
  },
  computed: {
    isHotPlace: function() {
      return this.isFocus && !this.searchWord;
    },
    isSerchList: function() {
      let flag = this.isFocus && this.searchWord;
      return flag;
    }
  },
  methods: {
    focus() {
      this.isFocus = true;
    },
    blur() {
      let self = this;
      setTimeout(() => {
        this.isFocus = false;
      }, 1000);
    },
    input(){
      let val = this.searchWord
       api.getSearchList().then(res=>{
         this.searchList = res.data.data.list.filter((item,index)=>{
           return item.indexOf(val) > -1;
         });
       })
      // console.log(this.searchWord);
      //     axios
      // .get("http://open.duyiedu.com/api/meituan/header/search.json", {
      //   params: {
      //     appkey: "a18340053607_1558962423408"
      //   }
      // })
      // .then(res => {
      //   console.log(res)
      //   // this.searchList = res.data.data.list;
      // });
    }
  }
};
</script>

<style lang='scss'>
@import "@/assets/css/public/header/index.scss";
@import "@/assets/css/public/header/search.scss";
</style>
