<template>
    <div id="example" class="index">
        <toolbar></toolbar>
        <!--<buy></buy>-->
        <div class="main">
            <div>
              <el-carousel height="5.60rem">
                <el-carousel-item v-for="item in bannerList" :key="item.id">
                  <!-- <h3>{{ item.img }}</h3> -->
                  <img class="banner" :src="item.img">
                </el-carousel-item>
              </el-carousel>
            </div>
            <!-- <img class="banner" src="../../assets/img/index/banner.png"> -->
            <!-- <img class="banner" src="https://air-yx.oss-cn-hangzhou.aliyuncs.com/assets/img/index/banner.png">
            <img class="logo" src="https://air-yx.oss-cn-hangzhou.aliyuncs.com/assets/img/index/logo_yx.png">-->
            <img class="logo" src="../../assets/img/index/logo_yx.png">
        </div>
        <div class="img-list">
            <div class="img-info img-info-1">
                <div class="first-title">净化器共享计划</div>
                <div class="second-title">1200元（滤芯）+ 1000元（押金）<br>
                  您只需要支付一个滤芯的价格，就可带走整台空气净化器
                </div>
                <a class="apply-now">立即申请></a>
            </div>
            <div class="img-info img-info-2">
                <div class="first-title"> 共享净化器 怡享好空气  </div>
                <div class="second-title">0.3微米颗粒物为0的医疗级别效果/PM2.5 99.99%以上的去除效果<br>
                有效去除甲醛、苯等七天污染物 / 有效去除宠物异味，烟味等
                </div>
                <a class="apply-now">了解产品></a>
            </div>
        </div>
        <div class="pro-usr x-flex">
            <div class="pro-test">
                <div class="pro-title">产品测评</div>
                <img class="divide-line" src="../../assets/img/index/rule_left.png">
                <div class="pro-list flex-wrap">
                    <div class="test-info">
                        <img src="../../assets/img/index/logo_yx.png">
                        <p class="test-title">净化器获奖</p>
                    </div>
                    <div class="test-info">
                        <img src="../../assets/img/index/logo_yx.png">
                        <p class="test-title">明星企业</p>
                    </div>
                    <div class="test-info no-margin-right">
                        <img src="../../assets/img/index/logo_yx.png">
                        <p class="test-title">明星企业</p>
                    </div>
                    <div class="test-info">
                        <img src="../../assets/img/index/logo_yx.png">
                        <p class="test-title">明星企业</p>
                    </div>
                    <div class="test-info">
                        <img src="../../assets/img/index/logo_yx.png">
                        <p class="test-title">明星企业</p>
                    </div>
                    <div class="test-info no-margin-right">
                        <img src="../../assets/img/index/logo_yx.png">
                        <p class="test-title">明星企业</p>
                    </div>
                </div>
            </div>
            <div class="user-back">
                <div class="user-title">用户反馈</div>
                <img class="divide-line" src="../../assets/img/index/rule_right.png">
                <div class="x-flex">
                    <img class="user-weibo" src="../../assets/img/index/weibo_.png">
                    <a class="go-know">去了解></a>
                </div>
            </div>
        </div>

        <div class="pro-des">
                <div class="des-title">工业过滤设备的制造商，品质值得信赖</div>
                <div class="des-info">
                怡享家用空气净化器将工业级空气净化技术应用到家庭<br>
                关注的不仅仅是对PM2.5的去除，更关心的是对家庭中各种气态污染物和病毒病菌的去除。
                </div>
                <div class="pro-icons">
                    <div class="pro-info pro-info-1">
                        <img src="../../assets/img/index/pen.png">
                        <p class="info-des">北京怡享科技发展有限公司前身为工业过滤设备的制造商，在医院手术室，制药车间，博物馆，设备机房等场所的空气净化领域积累了10余年的技术经验。</p>
                    </div>
                    <div class="pro-info pro-info-2">
                        <img src="../../assets/img/index/glasses.png">
                        <p class="info-des">关注的不仅仅是PM2.5的去除，更关心的是对家庭中各种气态污染物和病毒病菌的去除。</p>
                    </div>
                    <div class="pro-info pro-info-3">
                        <img src="../../assets/img/index/box.png">
                        <p class="info-des">依托在空气净化技术方面的丰富经验以及稳定的全球供应链优势，北京怡享科技发展有限公司旨在为国内打造可信赖的高效家居智能净化设备。</p>
                    </div>
                </div>
        </div>
        <!--<img class="about-us" src="../../assets/img/index/us.png">-->
        <div class="about-us">
          <div class="title">联系我们</div>
          <div class="us-info flex-row-center">
            <div class="us-des">
                <img src="../../assets/img/index/icon-phone.png">
                <div class="des">
                  010-400-707-8889
                </div>
            </div>
            <div class="us-des">
                <img src="../../assets/img/index/icon-wechat.png">
                <div class="des">
                  <img src="../../assets/img/index/icon-QR.png">
                </div>
            </div>
            <div class="us-des">
                <img src="../../assets/img/index/icon-site.png">
                <div class="des">
                  北京经济技术开发区科创十二街鸿坤云时代B座二层
                </div>
            </div>
          </div>

        </div>
        <foot></foot>

    </div>
</template>

<script>
import Toolbar from '@/components/Base/Toolbar'
import Foot from '@/components/Base/Foot'

export default {
  name: 'index',
  data () {
    return {
      msg: 'Welcome',
      bannerList:[
        {id:1,img:require('../../assets/img/index/banner.png')},
        {id:2,img:require('../../assets/img/index/product.png')},
      ]
    }
  },
  components:{
    Toolbar,Foot,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 @import "../../assets/css/css.css";
</style>
