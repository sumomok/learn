<template>
  <div  :class="{'choose-wrap':true,'disabled':disabled}" @click="show" v-document-click="documentClick">
    <div :class="{'choose':true,'disabled':disabled}">
      <span>{{list.value}}</span>
      <i class="el-icon-caret-bottom"></i>
      <div class="mt-content" :class="{active:isShow}">
        <h2>{{list.title}}</h2>
        <div class="wrapper" :class="Mclass">
          <div class="col" v-for="(listData,index) in renderList" :key="index">
            <span
            @click="changeValue(item)"
              v-for="item in listData"
              :key="item.name"
              :class='{"mt-item":true,"active":item == list.value}'
            >{{item.name}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["list", "value", "title", "isShow",'disabled','Mclass'],
  computed:{
    renderList:function() {
      var col = Math.ceil(this.list.list.length / 12);
      let result = [];
      for (var i =0;i<col;i++) {
        let data = this.list.list.slice( i*12, i*12 + 12)
        result.push(data)
      }
      console.log(result)
      return result;
    }
  },
  methods: {
    show(e) {
      if (this.disabled){
        return;
      }
      e.stopPropagation();
      this.$emit("change_active", true);
    },
    documentClick() {
      this.$emit("change_active", false);
    },
    changeValue(value) {
      console.log(value);
      this.$emit("change", value);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/changeCity/select.scss";
</style>