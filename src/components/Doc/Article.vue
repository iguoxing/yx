<template>
    <div class="article">
        <toolbar></toolbar>
        <div class="main">
          <div class="title">怡享空气亮相北京双创周，怡享科技开创空气净化共享新模式</div>
          <img class="divider" src="./img/line.png">
          <div class="subtitle x-flex">
            <p class="date">2017/9/10 </p>阅读次数：9
          </div>
          <img class="img" src="./img/a1.jpg">
          <div class="para">
            <i class="indent"></i>“创业促升级，壮大新动能”2017全国大众创业万众创新活动周北京会场正举办的如火如荼。这个由国家发展和改革委员会，中国科学技术协会，北京市人民政府承办，科学技术部火炬高新技术产业开发中心，北京市发展和改革委员会，北京市科学技术委员会，中关村科技园区管理委员会，海淀区人民政府承办的双创北京分会场，全面展示了北京在创新发展方面的的最新成果和显著成效。
          </div >
          <img class="img" src="./img/a2.jpg">
          <div class="para">
            <i class="indent"></i>作为双创周上“双创惠民生”主题的参展单位之一，北京怡享科技旗下的怡享工业级空气净化器重点向各界领导和与会者展示了“共享空气净化器”的新模式：以1000元押金+1200元/年滤芯的形式，用户只要付出极低的成本就可体验到万元品质机带来的极速净化效果。
          </div>
          <div class="blank-line"></div>
          <div class="para">
            <i class="indent"></i>作为拥有十余年工业级空气净化经验的专业型企业，怡享科技创新性的将博物馆，手术室等更高标准的空气净化技术应用到家庭。2015年开始正式进入家用空气净化器行业，目的就是为大众提供真正有效的家用空气净化器，打破国外老牌的垄断地位，重塑国人对国产品牌的信心。
          </div>
          <div class="blank-line"></div>
          <div class="para">
            <i class="indent"></i>基于丰富的行业经验，怡享工业级空气净化器除了最基本的对PM2.5去除效果可以达到99.99%以上外，对更小微米PM0.3颗粒物的去除率也可以达到99.97%的效果。同时由于多年的行业经验，怡享重点关注的不仅仅是对PM2.5，PM0.3等颗粒物的去除，更注重的是家庭中对人体危害更大的气态污染物，如甲醛，苯，一氧化碳，二氧化硫以及病毒病菌微生物等的去除。
          </div>
          <div class="para">
            <i class="indent"></i>科技创新，惠及民生！怡享始终致力于为家庭提供更纯净，更安全的呼吸体验。在这个雾霾季即将到来的时候，怡享的共享空气净化器模式更是受到了广大参展人员的欢迎，纷纷要求以这种模式体验我们的工业级空气净化器。
          </div>
          <div class="para">
            <i class="indent"></i>如果您没有来到双创周现场也没关系，现在在我们怡享公众号平台上就可以申请共享怡享空气净化器啦：
          </div>
          <div class="para">
            <i class="indent"></i>1. 点击怡享公众号底部菜单“空气共享”中的“申请共享净化器”
          </div>
          <div class="blank-line"></div>
          <div class="para">
            <i class="indent"></i>2. 进入到“商品详情”页面，拉到底部点击"立即购买"
          </div>
          <div class="blank-line"></div>
          <div class="para">
            <i class="indent"></i>3. 留下地址并提交订单，通过微信支付后，就会有工作人员跟您联系安排送货事宜。您只要在家中坐等体验纯净空气就好啦！
          </div>
          <div class="blank-line"></div>
          <div class="para">
            ↓↓↓↓据说这个周末，雾霾又双叒叕要来了，赶紧点击“阅读原文”，共享空气净化器用起来吧!
          </div>
          <div class="blank-line"></div>
          <img class="img" src="./img/a3.jpg">
          <div class="care">关注怡享</div>
          <img src="./img/code.jpg">
        </div>
        <foot></foot>
    </div>
</template>

<script>
import Toolbar from '@/components/Base/Toolbar'
import Foot from '@/components/Base/Foot'

export default {
  data () {
    return {
      msg: '测评文章',
    }
  },
  methods:{},
  computed:{},
  components:{
    Toolbar,Foot
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../../assets/css/css.css";
</style>
<style lang="less">
.article{
  .main{
    margin:0.56rem auto 1.2rem;
    width: 9.6rem;
    text-align: left;
    font-size:0.16rem;
    .title{font-size:0.26rem;}
    .divider{margin-top:0.16rem;height: 0.02rem;width: 3.2rem;}
    .subtitle{
      font-size:0.16rem;
      color:#636363;
      margin: 0.48rem auto 0.64rem;
      .date{margin-right: 0.2rem;}
    }
    .img{margin: 0 auto;width: 100%;}
    .para{margin:0.2rem auto;line-height: 0.24rem;}
    .indent{padding-left: 0.4rem;}
    .blank-line{height:0.6rem;}
    .care{
      color: #3abad7;
      margin: 0.66rem 0 0.4rem;
    }
  }
}
</style>
