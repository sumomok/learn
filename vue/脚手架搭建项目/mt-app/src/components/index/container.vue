<template>
  <div class="m-istyle">
    <dl @mouseover="over">
      <dt>有格调</dt>
      <dd  v-for="(item,index)  in iStyleList" :key="index" :class="{active : kind == item.tab}" :data-type='item.tab'>{{item.text}}</dd>
    </dl>
    <ul  class="ibody">
      <li  v-for="(item) in data[kind]" :key="item.id">
        <el-card :body-style="{ padding: '0px' }">
          <div class="cbody">
            <img :src="item.imgUrl" class="image" />
            <div class="poi-info" style="padding-left:3px;">
              <div class="title" :title="item.title">{{item.title}}</div>
              <div class="sub-title" :title="item.subTitle">{{item.subTitle}}</div>
              <div class="price-info">
                <span class="current-price-wrapper">
                  <span class="price-symbol numfont">¥</span>
                  <span class="current-price numfont">
                    {{item.price}}/人均
                    <span
                      class="current-price-type"
                      style="padding-left:5px;font-size:12px;color:#999;text-decoration: line-through;"
                    >{{item.oldPrice}}</span>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </el-card>
      </li>
    </ul>
  </div>
</template>
<script>
import api from '@/api/index.js'
export default {
    created(){
        api.getResultsByKeywords().then(res=>{
            this.data = res.data.data;
            // console.log(this.data);
        })
    },
  data() {
    return {
      kind: 'all',
      data: null
    };
  },
  props: ["iStyleList"],
  methods: {
    over(e) {
      let dom = e.target;
      if (dom.tagName.toLowerCase() != "dd") {
        return false;
      }
      this.kind = dom.getAttribute("data-type");
      // 动态获取数据 ajax请求
    },
  }
};
</script>
<style lang="scss">
@import "@/assets/css/index/artistic.scss";
</style>