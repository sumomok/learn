<template>
  <div class="slide">
    <el-carousel height="240px">
      <el-carousel-item v-for="(item,index) in imgList" :key="index">
          <img :src="item.img" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
    data(){
        return {
            imgList:[{
                url:'https://hotel.meituan.com/beijing/',
                img:'http://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg'
            },{
                url:'https://waimai.meituan.com/',
                img:'http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg'
            },{
                url:'/meishi',
                img:'http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg'
            },{
                url:'https://maoyan.com/',
                img:'http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg'
            }]
        }
    }
}
</script>
<style lang="sass">

</style>