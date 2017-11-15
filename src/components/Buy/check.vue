<template>
    <div id="cart" class="cart">
        <toolbar></toolbar>
        <div class="main">
          <div class="heading x-flex">
            <img class="icon" src="../../assets/img/common/cart.png" />
            <span class="title">我的购物车</span>
          </div>
          <img class="divide" src="../../assets/img/index/rule_right.png">
          <div class="sec-title">商品信息</div>
          <one-goods></one-goods>
          <div class="address-info">
            地址：北京市朝阳区慈云寺远洋国际中心6层<br>
            收件人：张先生<br>
            电话：18612928996<br>
          </div>
          <div class="balance">
            <div class="settlement">付款</div>
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
  methods:{},
  computed:{},
  components:{
    OneGoods,Toolbar,Foot
  }
}
</script>

<style scoped>
 @import "../../assets/css/css.css";
</style>
