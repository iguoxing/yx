<template>
    <div class="cart">
        <toolbar></toolbar>
        <div class="main">
          <div class="heading x-flex">
            <img class="icon" src="../../assets/img/common/cart.png" />
            <span class="title">我的购物车</span>
          </div>
          <img class="divide" src="../../assets/img/index/rule_right.png">
          <div class="sec-title">商品信息</div>
          <one-goods></one-goods>
          <one-goods></one-goods>
          <div class="balance">
            <a class="settlement" @click.stop="routerLink('/check')">结算</a>
          </div>
        </div>
        <foot></foot>
    </div>
</template>

<script>
import Toolbar from '@/components/Base/Toolbar'
import OneGoods from '@/components/Buy/OneGoods'
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
    OneGoods,Toolbar,Foot
  }
}
</script>

<style scoped>
 @import "../../assets/css/css.css";
</style>

<style lang="less">
.cart{
  .main{
    .sec-title{font-size: 18px;color: #010101;margin-top: 58px;margin-bottom: 30px;}
    .balance{
      display: flex;
      flex-direction: row-reverse;
      margin-bottom: 150px;
      .settlement{
        width: 101px;
        font-size: 28px;
        padding: 13px 22px;
        background-color: rgba(240, 72, 39, 1);
        border-radius: 10px;
        color:#fcfcfc;
        cursor: pointer;
      }
    }

  }
}
</style>

