<template>
  <div class="m-product-select">
    <dl class="tab">
      <dt>
        {{name}}
        <h3 class="el-icon-caret-bottom"></h3>
      </dt>
      <dd>
          <h3 class="select-title">{{name}}</h3>
          <span v-for="(item,index) in list" :key="index">{{item.name}}</span>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  props: ["name", "list"]
};
</script>

<style lang="scss">
</style>