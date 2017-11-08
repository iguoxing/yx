<template>
<!-- <h1>{{msg}}</h1> -->
    <div id="goods_info" class="goods-info">
        <toolbar></toolbar>

        <div class="main flex-row-left">
            <div class="buy">
                <img src="../../assets/img/goods/p_1.jpg">
                <a class="buy-now"  style="text-decoration: none;">立即购买</a>
            </div>
            <img src="../../assets/img/goods/p_2.jpg">
            <img src="../../assets/img/goods/p_3.jpg">
            <img src="../../assets/img/goods/p_4.jpg">
            <img src="../../assets/img/goods/p_5.jpg">
            <img src="../../assets/img/goods/p_6.jpg">
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
 @import "../../assets/css/css.css";
</style>
