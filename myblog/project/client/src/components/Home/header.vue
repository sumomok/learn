<template>
  <header ref="header">
    <div class="left">
      <ul class="logo-list">
        <li>
          <div class="logo" alt></div>
        </li>
        <li>R的blog</li>
      </ul>
    </div>
    <div class="search">
      <el-input placeholder="请输入内容" v-model="search" ref="input" class="input-with-select">
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
    </div>
    <div class="right">
      <ul class="logo-list">
        <li>开发进展</li>
        <li>更新公告</li>
        <li class="search-900">
          <a href="#">
            <i class="el-icon-search"></i>
          </a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      search: ""
    };
  }
});
</script>

<style lang="scss" scoped>
$type: screen;
$proto: max-width;
$value: 900px;
header {
  width: 100%;
  background: #fff;
  box-shadow: 1px 1px 1px 1px #ddd;
  padding: 5px 25px;
  box-sizing: border-box;
  display: flex;
  align-content: space-between;
  @media #{$type} and ($proto: $value) {
    .search {
      .input-with-select {
        display: none;
      }
    }
    .right {
      ul {
        .search-900 {
          display: inline-block !important;
        }
      }
    }
  }
  @media #{$type} and ($proto: 775px) {
    width: 775px;
  }
  .left {
    flex: 1;
    height: 100%;
    .logo-list {
      li {
        float: left;
        margin-right: 12px;
        line-height: 50px;
      }
    }
    .logo {
      width: 50px;
      height: 50px;
      border-radius: 10px;
      background: url("../../assets/logo.png");
      background-size: 100% 100%;
      vertical-align: middle;
    }
  }
  .search {
    flex: 1;
    box-sizing: border-box;
    padding: 5px 25px;
    .search {
      display: none;
    }
  }
  .right {
    flex: 1;
    height: 100%;
    .logo-list {
      li {
        float: right;
        margin-right: 12px;
        line-height: 50px;
      }
      .search-900 {
        display: none;
      }
    }
    .logo {
      width: 50px;
      height: 50px;
      border-radius: 10px;
      background: url("../../assets/logo.png");
      background-size: 100% 100%;
      vertical-align: middle;
    }
  }
}
</style>