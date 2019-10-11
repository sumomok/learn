<template>
  <ul class="tree">
    <li v-for="(item,index) in treeData" :key="item.name" :class="{'scope':item.children}">
      <span @click="handleChildren(index)">{{item.name}}</span>
      <!-- <ul class="tree" v-if="item.children && flag[index]">
        <li v-for="item in item.children" :key="item.name">{{item.name}}</li>
      </ul> -->
      <tree 
        v-show='flag[index]' :tree-data='item.children' v-if='isClick'
      />
    </li>
  </ul>
</template>

<script>
export default {
  name: "tree",
  props:['tree-data'],
  data() {
    return {
      flag: [],
      isClick:false
    };
  },
  methods: {
    handleChildren(index) {
      // this.flag[index] = !this.flag[index];
      // this.flag.slice(index,1,!this.flag[index])
      this.flag.splice(index,1,!this.flag[index])
      this.isClick = true;
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

@font-face {
  font-family: "iconfont";
  src: url("../static/iconfont.eot");
  src: url("../static/iconfont.eot?#iefix") format("embedded-opentype"),
    url("../static/iconfont.woff2") format("woff2"),
    url("../static/iconfont.woff") format("woff"),
    url("../static/iconfont.ttf") format("truetype"),
    url("../static/iconfont.svg#iconfont") format("svg");
}

.tree-li {
  font-size: 14px;
  margin-left: 30px;
  cursor: pointer;
}

.scope::before {
  display: inline-block;
  content: "\e65a";
  font-family: "iconfont";
}

.active::before {
  transform: rotateZ(-90deg);
}
</style>