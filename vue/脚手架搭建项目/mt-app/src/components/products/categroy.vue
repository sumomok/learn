<template>
  <div class="m-product-categroy">
    <dl class="classic">
      <dt>分类</dt>
      <dt>全部</dt>
      <dd v-for="(item) in menuList" :key="item.type">
        <m-select :name="item.title" :list="item.subList" />
      </dd>
    </dl>
    <dl class="classic">
      <dt>区域</dt>
      <dt>全部</dt>
      <dd v-for="(item) in list" :key="item.type">
        <m-select :name="item.title" :list="item.subList" />
      </dd>
    </dl>
  </div>
</template>

<script>
import mSelect from "./select.vue";
import api from "@/api/index.js";
export default {
  created() {
    api.getClassify().then(res => {
      this.menuList = res.data.data;
      console.log(res.data.data);
    });
    // api.getAreaList().then(res => {
    //   // this.list = res.data.data;
    //   console.log(res.data);
    // });
    this.list = [{
			"title": "推荐商圈",
			"subList": [{
					"name": "望京",
					"id": 120000
				},
				{
					"name": "昌平",
					"id": 12222
				}
			]
		},
		{
			"title": "南岗区",
			"subList": [{
					"name": "中央大街",
					"id": 123
				},
				{
					"name": "西客站",
					"id": 11
				},
				{
					"name": "花园街",
					"id": 222
				},
				{
					"name": "通乡街/果园街",
					"id": 21
				},
				{
					"name": "爱建社区",
					"id": 1
				},
				{
					"name": "学府路",
					"id": 34
				}
			]
		}
	]
  },
  data() {
    return {
      menuList: [],
      list: []
    };
  },
  components: {
    mSelect
  }
};
</script>

<style lang="scss">
</style>