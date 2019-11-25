<template>
  <div class>
    <dl class="m-categroy">
      <dt>按拼音首字母选择：</dt>
      <dd v-for="item in word" :key="item">
        <a :href="'#city-' + item">{{item}}</a>
      </dd>
    </dl>
    <dl class="m-categroy-section" v-for='(item,index) in cityGroup' :key="index" :id="'city-' + index">
        <dt>{{index}}</dt>
        <dd>
            <span v-for='city in item' :key='city.id'>{{city.name}}</span>
        </dd>
    </dl>
  </div>
</template>

<script>
import api from '@/api/index.js'
export default {
  data() {
    return {
      word: "ABCDEFGHJKLMNPQRSTWXYZ",
      province: "",
      cityGroup:{}
    };
  },
  created() {
    let data = null;
    let obj = {}
    api.getCityList().then(res=>{
      return res.data.data
    }).then(res=>{
    res.forEach((item, index) => {
      if (!obj[item.firstChar.toUpperCase()]) {
          obj[item.firstChar.toUpperCase()] = [];
      } 
      obj[item.firstChar.toUpperCase()].push(item);
    });
        this.cityGroup = obj;
    })
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/changecity/categroy.scss";
</style>