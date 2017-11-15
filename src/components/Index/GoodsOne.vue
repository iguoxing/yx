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
                <div class="num">
                  <span class="reduce">-</span>
                  <span class="des">1</span>
                  <span class="add">+</span>
                </div>
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
      msg: 'Welcome'
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
 /*@import "../../assets/css/base.css";*/
 @import "../../assets/css/css.css";
</style>
<style lang="less">
.goods-one{
  .main{
    padding-top: 76px;
    padding-bottom:188px;
    margin: 0 auto;
    .left-show{
      a{cursor: pointer;}
      display:inline-block;
      margin-right: 66px;
      width: 690px;
      .img{
        width: 690px;
        height: 533px;
      }
      .title{
        font-size: 24px;
        color: #202020;
        margin-top: 26px;
        text-align: left;
      }
      .info{
        font-size: 18px;
        text-align: left;
        a{color: #3abad7;}
      }
    }
    .goods-info{
      .info{
        display:flex;
        align-items: center;
        .title{
          font-size: 16px;
          color: #646464;
          margin-right: 38px;
          width: 50px;
          text-align: left;
        }

      }
      .orgin-prise{
        .num{
          color: #f04827;
          font-size: 27px;
          text-decoration:line-through;
          .sign{font-size: 22px;}
        }
      }
      .share-prise{
        margin-top: 29px;
        .num{
          color: #f04827;
          font-size: 36px;
          .sign{font-size: 30px;}
          .des{font-size: 18px;}
        }
      }
      .goods-intro,.goods-num,.promise{margin-top: 46px;}
      .goods-intro{
        .des{font-size: 18px;color: #3abad7;cursor: pointer;}
      }
      .goods-num{
        .num{
          border:1px solid rgba(182, 182, 182,1);
          .des{width: 60px;display: inline-block;font-size: 22px;}
          .reduce,.add{
            font-size: 24px;
            background: rgba(182, 182, 182,1);
            width:34px;
            height: 34px;
            color:#fff;
            display: inline-block;
          }

        }
      }
      .promise{
        .des{font-size: 18px;text-align: left;}
      }
      .btn-buy{
        margin-top: 180px;
        .ready-buy{
          a{cursor: pointer;}
          .cart,.buy{
            height: 52px;
            border-radius: 10px;
            font-size: 22px;
            padding:10px 12px;
            cursor: pointer;
          }
          .cart{
            border: solid 1px rgba(49, 49, 49, 1);
            margin-right: 32px;
            color: #000;
          }
          .buy{
            background-color: rgba(240, 72, 39, 1);
            border-radius: 10px;
            color: #fff;
          }
        }
      }
    }
  }
}
</style>

