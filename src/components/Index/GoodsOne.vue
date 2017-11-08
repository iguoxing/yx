<template>
<!-- <h1>{{msg}}</h1> -->
    <div id="goods_one" class="goods-one">
        <toolbar></toolbar>

        <div class="main flex-row-center">
            <div class="left-show">
              <img class="img" src="../../assets/img/goods/pro2.png">
              <p class="title">新风第二代空气净化器  502m2/h 工业级空气净化器</p>
              <p class="info"><a>产品详情></a></p>
            </div>
            <div class="goods-info">
              <div class="orgin-prise info">
                <label class="title">原价格</label>
                <div class="num"><span class="sign">¥</span> 6999.00</div>
              </div>
              <div class="share-prise info">
                <label class="title">共享价</label>
                <div class="num">
                  <span class="sign">¥</span> 6999.00<span class="des">（含押金1000）</span>
                </div>
              </div>
              <div class="goods-intro info">
                <label class="title">详情</label>
                <div class="des">了解共享></div>
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
                  <a class="cart">加入购物车</a>
                  <a class="buy">购买</a>
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
  methods:{},
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
