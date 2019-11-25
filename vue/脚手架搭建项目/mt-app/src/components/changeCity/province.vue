<template>
  <div>
    <span class="name">按省份选择：</span>
    <my-select
      :list="province"
      :isShow="isProvinceShow"
      @change_active="changeProvinceactive"
      @change="changeProvince"
    />
    <my-select
      :list="city"
      :isShow="isCityShow"
      @change_active="changeCityactive"
      @change="changeCitya"
      :disabled="cityDisable"
      :Mclass="'city'"
    />
    <span>直接搜索：</span>
    <el-select
      v-model="searchWord"
      filterable
      remote
      reserve-keyword
      placeholder="请输入关键词"
      :remote-method="remoteMethod"
      :loading="loading"
    >
      <el-option v-for="item in searchList" :key="item" :label="item" :value="item"></el-option>
    </el-select>
  </div>
</template>

<script>
import mySelect from "./select.vue";
import api from "@/api/index.js";
export default {
  created() {
    api.getProvince().then(res => {
      this.province.list = res.data.data.map(item => {
        item.name = item.provinceName;
        return item;
      });
      console.log(this.province.list);
    });
  },
  data() {
    return {
      province: {
        value: "省份",
        title: "省份",
        list: []
      },
      city: {
        value: "城市",
        title: "城市",
        list: []
      },
      isProvinceShow: false,
      isCityShow: false,
      searchList: ["山东", "甘肃", "黑龙江"],
      searchWord: "",
      loading: false,
      cityDisable: true
    };
  },
  components: {
    mySelect
  },
  methods: {
    changeProvinceactive(flag) {
      if (this.isCityShow) {
        this.isCityShow = false;
      }
      this.isProvinceShow = flag;
    },
    changeCityactive(flag) {
      if (this.isProvinceShow) {
        this.isProvinceShow = false;
      }
      this.isCityShow = flag;
    },
    changeProvince(value) {
      this.province.value = value.name;
      this.cityDisable = false;
      this.city.list = value.cityInfoList;
    },
    changeCitya(value) {
      this.city.value = value.name;
      this.$store.dispatch;
      this.$store.commit('setPosition',value.name);
    },
    // 请求后端接口,
    remoteMethod() {
      // console.log("remoteMethod");
    }
  }
};
</script>

<style lang="scss" scoped>
</style>