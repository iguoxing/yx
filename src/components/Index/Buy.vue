<template>
    <div id="goods" class="goods">
        <toolbar></toolbar>
        <div class="main flex-row-left">
            <div class="left-goods goods-info">
                <img class="img" src="../../assets/img/goods/left_goods.png">
                <p class="goods-title">新风第二代空气净化器  502m2/h 工业级空气净化器</p>
                <a class="buy-now">立即购买></a>
            </div>
            <div class="right-goods goods-info">
                <img class="img" src="../../assets/img/goods/right_goods.png">
                <p class="goods-title">怡享第二代空气净化器  502m2/h 工业级滤芯</p>
                <a class="buy-now">立即购买></a>
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
