<template>
    <div id="goods_one" class="goods-one">
        <toolbar></toolbar>
        <div class="main flex-row-center">
            <div class="left-show">
              <img class="img" src="../../assets/img/goods/pro2.png">
              <p class="title">新风第二代空气净化器  502m2/h 工业级空气净化器</p>
              <p class="info"><a  @click.stop="routerLink('goods_info')">产品详情></a></p>
            </div>
            <div class="goods-info">
              <div class="orgin-prise info">
                <label class="title">原价格</label>
                <div class="num"><span class="sign">¥</span> 6999.00</div>
              </div>
              <div class="share-prise info">
                <label class="title">共享价</label>
                <div class="num">
                  <span class="sign">¥</span> 2200.00<span class="des">（含押金1000）</span>
                </div>
              </div>
              <div class="goods-intro info">
                <label class="title">详情</label>
                <a class="des" @click.stop="routerLink('/share')">了解共享></a>
              </div>
              <div class="goods-num info">
                <label class="title">数量</label>
                <el-input-number v-model="num1" @change="handleChange" :min="1" :max="100" label="数量"></el-input-number>
                <!-- <div class="num">
                  <span class="reduce">-</span>
                  <span class="des">1</span>
                  <span class="add">+</span>
                </div> -->
              </div>
              <div class="promise info">
                <label class="title">承诺</label>
                <div class="des">押金随时退；<br>使用期内非人为问题免费维修；</div>
              </div>
              <div class="btn-buy info">
                <label class="title"></label>
                <div class="ready-buy">
                  <a class="cart" @click.stop="routerLink('cart')">加入购物车</a>
                  <a class="buy"  @click.stop="routerLink('check')">购买</a>
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
      num1: 1
    }
  },
  methods:{
    routerLink(route) {
      this.$router.push(route)
    },
    handleChange(value) {
        console.log(value);
    }
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
.goods-one{
  .main{
    padding-top: 0.76rem;
    padding-bottom:1.88rem;
    margin: 0 auto;
    .left-show{
      a{cursor: pointer;}
      display:inline-block;
      margin-right: 0.66rem;
      width: 6.9rem;
      .img{
        width: 6.9rem;
        height: 5.33rem;
      }
      .title{
        font-size: 0.24rem;
        color: #202020;
        margin-top: 0.26rem;
        text-align: left;
      }
      .info{
        font-size: 0.18rem;
        text-align: left;
        a{color: #3abad7;}
      }
    }
    .goods-info{
      .info{
        display:flex;
        align-items: center;
        .title{
          font-size: 0.16rem;
          color: #646464;
          margin-right: 0.38rem;
          width: 0.5rem;
          text-align: left;
        }

      }
      .orgin-prise{
        .num{
          color: #f04827;
          font-size: 0.27rem;
          text-decoration:line-through;
          .sign{font-size: 0.22rem;}
        }
      }
      .share-prise{
        margin-top: 0.29rem;
        .num{
          color: #f04827;
          font-size: 0.36rem;
          .sign{font-size: 0.3rem;}
          .des{font-size: 0.18rem;}
        }
      }
      .goods-intro,.goods-num,.promise{margin-top: 0.46rem;}
      .goods-intro{
        .des{font-size: 0.18rem;color: #3abad7;cursor: pointer;}
      }
      .goods-num{
        .num{
          border:0.01rem solid rgba(182, 182, 182,1);
          .des{width: 0.6rem;display: inline-block;font-size: 0.22rem;}
          .reduce,.add{
            font-size: 0.24rem;
            background: rgba(182, 182, 182,1);
            width:0.34rem;
            height: 0.34rem;
            color:#fff;
            display: inline-block;
          }

        }
      }
      .promise{
        .des{font-size: 0.18rem;text-align: left;}
      }
      .btn-buy{
        margin-top: 1.8rem;
        .ready-buy{
          a{cursor: pointer;}
          .cart,.buy{
            height: 0.52rem;
            border-radius: 0.1rem;
            font-size: 0.22rem;
            padding:0.1rem 0.12rem;
            cursor: pointer;
          }
          .cart{
            border: solid 0.01rem rgba(49, 49, 49, 1);
            margin-right: 0.32rem;
            color: #000;
          }
          .buy{
            background-color: rgba(240, 72, 39, 1);
            border-radius: 0.1rem;
            color: #fff;
          }
        }
      }
    }
  }
}
</style>

