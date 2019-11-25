<template>
  <div>
     <el-amap vid="amapDemo"  :center="center" :amap-manager="amapManager" :zoom="zoom" :events="events" class="amap-demo">
  </div>
</template>

<style>
  .el-vue-amap-container.map{
    height:1000px;
  }
</style>
<script>
import { AMapManager } from 'vue-amap';
export default {
      data: function() {
        return {
          zoom: 12,
          center: [121.59996, 31.197646],
          amapManager:null,
          events: {
            init(o) {
              let marker = new AMap.Marker({
                position: [121.59996, 31.197646]
              });

              marker.setMap(o);
            }
          }
        };
      },

      methods: {
        add() {
          let o = amapManager.getMap();
          let marker = new AMap.Marker({
            position: [121.59996, 31.177646]
          });

          marker.setMap(o);
        }
      },
      created(){
        this.amapManager = new AMapManager();
      }
  
};
</script>
