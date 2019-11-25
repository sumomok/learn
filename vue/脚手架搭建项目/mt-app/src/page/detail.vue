<template>
  <div class="page-detail">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">北京美团</el-breadcrumb-item>
      <el-breadcrumb-item>北京生活服务</el-breadcrumb-item>
      <el-breadcrumb-item>北京体检/齿科</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row>
      <el-col class="m-crumbs m-sum-card">
        <dl>
          <dt>
            <h1>{{data.title}}</h1>
            <el-rate
              v-model="data.score"
              disabled
              text-color="#ff9900"
              score-template="{data.score}"
            ></el-rate>
            <span>{{data.avgPrice}}</span>
            <ul>
              <li>商家地址：{{data.address}}</li>
              <li>商家电话：{{data.phone}}</li>
              <li>商家营业时间：{{data.businessTime}}</li>
            </ul>
          </dt>
          <dd></dd>
        </dl>
      </el-col>
      <h1 class="m-title">商家优惠促销</h1>
      <el-col class="m-crumbs m-sum-card">
        <div class="m-detail-item">
          <h3>14款套餐</h3>
          <div class="section" v-for="(item,index) in dealItems" :key="index">
            <dd>
              <img
                src="//p1.meituan.net/dpdeal/314e1e2e7252b32793e669e464f9a67e48412.jpg@200w_200h_1e_1c"
              />
            </dd>
            <dd class="test">
              <h4>{{item.title}}</h4>
              <p>已售{{item.saleNum}}截止日期: 2021年11月5日</p>
              <p>
                <span class="price">{{item.price}}</span>
                门店价{{item.counterPrice}}
              </p>
            </dd>
            <dd>
              <el-button class="button" type="warning" round>立即抢购</el-button>
            </dd>
          </div>
        </div>
      </el-col>
      <el-col class="m-crumbs m-sum-card m-sum-list">
        <div class="m-detail-item">
          <h3>1张代金券</h3>
          <div class="section">
            <dd>
              <p>
                <span class="price">118</span>z
              </p>
              <div class="img-wrapper">
                <div class="split-line"></div>
                <div class="voucher-value">
                  代
                  <!-- -->
                  438
                  <!-- -->
                  元代金券
                </div>
              </div>
            </dd>
            <dd class="test">
              <h4>38元 代438元代金券</h4>
              <p>已售0</p>
              <p>仅售38元，价值438元代金券，节假日通用，可叠加，全场通用！</p>
            </dd>
            <dd>
              <el-button class="button" type="warning" round>立即抢购</el-button>
            </dd>
          </div>
        </div>
      </el-col>
      <h1 class="m-title">网友评论</h1>
      <el-col :span="24">
        <el-card class="m-sum-card" :body-style="{ padding: '0px' }">
          <div class="m-detail-item">
            <div class="section" v-for="(item,index) in comment" :key="index">
              <dt>
                <img :src="item.image" class="image" />
                <h4>{{item.username}}</h4>
                <p>
                  <el-rate
                    v-model="item.rate"
                    disabled
                    text-color="#ff9900"
                    score-template="{item.rate}"
                  ></el-rate>
                </p>
                <p>{{item.evalaute}}</p>
                <p>用户晒图：</p>
                <img class="image userImage" v-for="(i,index) in item.pics" :key="index" :src="i" alt />
              </dt>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import api from "@/api/index.js";
export default {
  data() {
    return {
      value: 5,
      data: {},
      comment: null,
      dealItems: null
    };
  },
  created() {
    api.getDetail().then(res => {
      this.data = res.data.data;
      console.log(this.data);
      this.comment = res.data.data.comment;
      this.dealItems = res.data.data.dealItems;
    });
  }
};
</script>

<style lang="scss">
@import "@/assets/css/detail/index.scss";
.image {
  width: 100px;
  height: 100px;
}
.userImage{
  padding-left:20px;
  border-radius:5px; 
}
</style>