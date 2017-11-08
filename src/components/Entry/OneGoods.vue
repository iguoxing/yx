<template>
    <div class="r-content">
      <div class="r-info flex-col-center">
        <div class="flex-col-center">
          <img src="../../assets/img/goods/left_goods.png">
          <p class="title">共享工业级空气净化器</p>
        </div>
        <p class="number">¥ 2200.00/件</p>
      </div>
      <div class="info-des flex-space-between">
        <ul class="r-des">
          <li><label>订单号：</label> 123456789044</li>
          <li><label>数量：</label> 1</li>
          <li><label>订单状态：</label>提交订单等待付款</li>
          <li><label>收货地址：</label>北京市朝阳区东四环中路远洋国际中心A座六层</li>
          <li><label>收货人：</label>张三李四 </li>
          <li><label>联系方式：</label>183181818181</li>
          <li><label>下单时间：</label>2017-11-11 12:12:12</li>
          <li><label>总额：</label>¥2200.00（微信支付）</li>
          <li><label>快递：</label>韵达  178923619826</li>
        </ul>
        <el-steps :space="100" direction="vertical" :active="1">
          <el-step title="已下单"></el-step>
          <el-step title="配送中"></el-step>
          <el-step title="已签收"></el-step>
        </el-steps>
      </div>
      <div class="r-btn">
        <a class="cancel">取消订单</a>
        <a class="buy">去支付</a>
      </div>
    </div>
</template>

<script>

export default {
  data () {},
  methods:{},
  computed:{},
  components:{}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 /*@import "../../assets/css/base.css";*/
  @import "../../assets/css/css.css";
</style>
<style lang="less">
.r-content{
  width: 750px;
  .r-info{
    justify-content: space-between;
    margin:20px 0;
    img{width: 100px;height: 100px;}
    .title{font-size: 24px;margin-left: 20px;}
    .number{
      color: #f04827;
      font-size:18px;
    }
  }
  .r-btn{
    margin-top: 45px;
    // margin-bottom: 300px;
    display: flex;
    justify-content: space-between;
    .cancel{
      font-size: 18px;
      color: #7e7e7e;
      padding-bottom:6px;
      border-bottom:1px solid #7e7e7e;
    }
    .buy{
      background-color: rgba(240, 72, 39, 1);
      border-radius: 10px;
      font-size: 16px;
      color: #fcfcfc;
      padding: 7px 12px;;
    }
  }
}
</style>
