<template>
  <div class="community">
    <ul class="nav">
      <router-link tag=li to='/Community/academic'>学术讨论</router-link>
      <router-link tag=li to='/Community/download'>资源下载</router-link>
      <router-link tag=li to='/Community/personal'>个人中心</router-link>
    </ul>
      <router-view class="view"></router-view>
  </div>

</template>

<style>
  .community .view {
      padding: 50px 22px;
  }
  .active{
    display: block;
    height: 30px;
  }
</style>