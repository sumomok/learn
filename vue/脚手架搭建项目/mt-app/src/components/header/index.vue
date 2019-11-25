<template>
    <div class="m-header">
        <el-row>
            <top-bar />
        </el-row>
        <el-row>
            <search-bar />
        </el-row>
    </div>
</template>

<script>
import topBar from './topBar.vue'
import searchBar from './seachBar.vue'
export default {
  components: {
    topBar,
    searchBar
  }
}
</script>

<style lang='scss'>
  @import '@/assets/css/public/header.scss'

</style>
