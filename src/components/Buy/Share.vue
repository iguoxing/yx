<template>
    <div class="share">
        <toolbar></toolbar>
        <div class="main">
          <div class="f-title">净化器共享计划</div>
          <div class="s-title">让每个家庭都能用上万元品质的空气净化器</div>
          <div class="content">
            <el-row :gutter="20">
              <el-col class="left" :span="18">
                <el-row class="t-title" :gutter="24">
                  <el-col :span="4">
                    <p class="f-name">滤芯 </p>
                    <p class="s-name">（1200元/年）</p>
                  </el-col>
                  <el-col :span="2"><p class="f-name">+</p></el-col>
                  <el-col :span="3">
                    <p class="f-name">押金</p>
                    <p class="s-name">(1000元)</p>
                  </el-col>
                  <el-col :span="2"><p class="f-name">=</p></el-col>
                  <el-col :span="13">
                    <p class="f-name">万元品质工业级空气净化器</p>
                  </el-col>
                </el-row>
                <el-row class="info" :gutter="20">
                  <el-col :span="7">
                    <div class="des">
                      <p class="f-info">品质</p>
                      <p class="s-info">十余年行业技术经验累积，用料良心更用心，品质赶超国外老牌万元机。</p>
                    </div>
                  </el-col>
                  <el-col :span="1">&nbsp;</el-col>
                  <el-col :span="7">
                    <div class="des">
                      <p class="f-info">价格</p>
                      <p class="s-info">只需购买滤芯（平均100元/月），再加1000元押金即可。使用过程中，不满意押金可以随时退还。</p>
                    </div>
                  </el-col>
                  <el-col :span="1">&nbsp;</el-col>
                  <el-col :span="7">
                    <div class="des">
                      <p class="f-info">质保</p>
                      <p class="s-info">颠覆质保期限，共享下的产品，非人为质量问题，怡享终身免费维修。清新空气，无忧享用。</p>
                    </div>
                  </el-col>
                </el-row>
                <div class="care flex-col-center">
                  <img class="arrow" src="../../assets/img/buy/arrows.png">
                  <img class="code" src="../../assets/img/buy/QR.png">
                  <div class="word">
                    <p class="f">微信扫一扫</p>
                    <p class="s">立即申请</p>
                  </div>
                  <!-- <div class="buynow">立即购买</div> -->

                  <a @click.stop="routerLink('goods')" style="text-decoration: none;"><el-button type="danger" round>立即购买</el-button></a>
                </div>
              </el-col>
              <el-col class="right" :span="4">
                <img class="pic" src="../../assets/img/buy/one.png">
              </el-col>
            </el-row>
          </div>
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
      msg: '共享计划',
    }
  },
  methods:{
    routerLink(route) {
      this.$router.push(route)
    },
  },
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
.share{
  .main{
    width: 100%;
    height: 8.88rem;
    margin: 0 auto ;
    display: flex;
    justify-content: baseline;
    flex-direction: column;
    background: url(../../assets/img/buy/bg.png) no-repeat center;
    background-size: 100% 8.88rem;
    color: #1b1b1b;
    .f-title{
      font-size: 0.38rem;
      margin-top: 0.64rem;
    }
    .s-title{
      font-size: 0.16rem;
      margin-top:0.2rem;
      font-weight: 300;
    }
    .content{
      width: 11.88rem;
      margin:0.8rem auto 0;
      .left{
        .t-title{
          .f-name{
            font-size: 0.33rem;
          }
          .s-name{
            font-size: 0.16rem;
          }
        }
        .info{
          margin-top: 0.66rem;
          .des{
            height: 1.8rem;
            border-radius: 0.1rem;
            border: solid 0.02rem rgba(49, 49, 49, 1);
            opacity: 0.8;
            .f-info{
              font-size: 0.26rem;
              padding-top: 0.16rem;
            }
            .s-info{font-size: 0.15rem;font-weight: 300;text-align: left;padding:0rem 0.16rem 0.3rem;}
          }
        }
        .care{
          margin-top: 1rem;
          .arrow{width: 1.05rem;height: 0.64rem;margin-right: 0.16rem;}
          .code{width: 1.46rem;height: 1.46rem;margin-right: 0.28rem}
          .word{
            text-align: center;
            font-size: 0.28rem;
            .f{letter-spacing: -0.01rem;}
            .s{letter-spacing: 0.07rem;margin-bottom: 0;}
          }
          .el-button--danger{margin-left:1.1rem;}
        }
      }
      .right{
        .pic{margin-top: 0.88rem;margin-left: 0.6rem;}
      }
    }
  }
}

</style>
