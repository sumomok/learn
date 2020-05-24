
<template>
  <div class="left">
    <ul>
      <li
        v-for="item in this.leftlist"
        :key="item.id"
        @click="()=>handleClick(item.type)"
        :class="typeClass==item.type?'active':''"
      >
        <i :class="item.iconClassName"></i>
        <router-link :to="`/`+item.type" tag="span">{{item.content}}</router-link>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.left {
  height: 100%;
  position: fixed;
  top: 100px;
  left: 100px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 20px;
  ul {
    li {
      margin-top: 50px;
    }
    .active {
      color: rgb(54, 181, 255);
    }
    li:hover {
      color: rgb(54, 181, 255);
      cursor: pointer;
    }
  }
}
</style>
<script lang="ts">
      /* eslint-disable */
import Vue from "vue";
export default Vue.extend({
  props: {
    leftlist: Array
  },
  data() {
    return {
      typeClass: ""
    };
  },
  methods: {
    handleClick(typeClass: any) {
      this.typeClass = typeClass;
    }
  }
});
</script>