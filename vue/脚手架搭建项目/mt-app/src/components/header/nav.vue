<template>
  <div class="m-nav">
    <ul class="nav">
      <li class="list">
        <router-link to="/">我的美团</router-link>
        <dl>
          <dd>账户设置</dd>
          <dd>我的订单</dd>
          <dd>我的收藏</dd>
          <dd>抵用券</dd>
        </dl>
      </li>
      <li>
        <router-link to="/">手机app</router-link>
      </li>
      <li class="list bd">
        <router-link to="/">商家中心</router-link>
        <dl>
          <dd>登录商家中心</dd>
          <dd>美团智能收银</dd>
          <dd>我想合作</dd>
          <dd>手机免费开店</dd>
        </dl>
      </li>
      <li class="list site">
        <router-link to="/">网站导航</router-link>
        <div class="subContainer">
          <dl class="hotel">
            <dt>酒店旅游</dt>
            <dd>
              <router-link to="/">国际机票</router-link>
            </dd>
            <dd>
              <router-link to="/">火车票</router-link>
            </dd>
            <dd>
              <router-link to="/">榛果民宿</router-link>
            </dd>
            <dd>
              <router-link to="/">经济型酒店</router-link>
            </dd>
            <dd>
              <router-link to="/">主题酒店</router-link>
            </dd>
            <dd>
              <router-link to="/">商务酒店</router-link>
            </dd>
          </dl>
          <dl class="food">
            <dt>吃美食</dt>
            <dd>
              <router-link to="/">烤鱼</router-link>
            </dd>
            <dd>
              <router-link to="/">特色小吃</router-link>
            </dd>
            <dd>
              <router-link to="/">烧烤</router-link>
            </dd>
            <dd>
              <router-link to="/">自助餐</router-link>
            </dd>
            <dd>
              <router-link to="/">火锅</router-link>
            </dd>
            <dd>
              <router-link to="/">代金券</router-link>
            </dd>
          </dl>
          <dl class="movie">
            <dt>看电影</dt>
            <dd>
              <router-link to="/">热映电影</router-link>
            </dd>
            <dd>
              <router-link to="/">热门影院</router-link>
            </dd>
            <dd>
              <router-link to="/">热映电影口碑榜</router-link>
            </dd>
            <dd>
              <router-link to="/">最受期待电影</router-link>
            </dd>
            <dd>
              <router-link to="/">国内票房榜</router-link>
            </dd>
            <dd>
              <router-link to="/">北美票房榜</router-link>
            </dd>
          </dl>
          <dl class="app">
              <dt>我的应用</dt>
            <dd>
              <img
                class="appicon"
                src="//s0.meituan.net/bs/fe-web-meituan/2d53095/img/appicons/meituan.png"
                title="美团app"
                alt="美团app"
              />
            </dd>
            <dd>
              <img
                class="appicon"
                src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/waimai.png"
                title="外卖app"
                alt="外卖app"
              />
            </dd>
            <dd>
              <img
                class="appicon"
                src="//s0.meituan.net/bs/fe-web-meituan/404d350/img/appicons/zhenguo.png"
                title="榛果app"
                alt="榛果app"
              />
            </dd>
            <dd>
              <img
                class="appicon"
                src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/dianping.png"
                title="点评app"
                alt="点评app"
              />
            </dd>
            <dd>
              <img
                class="appicon"
                src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/maoyan.png"
                title="猫眼app"
                alt="猫眼app"
              />
            </dd>
          </dl>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>
