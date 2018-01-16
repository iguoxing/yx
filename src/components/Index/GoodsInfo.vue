<template>
<!-- <h1>{{msg}}</h1> -->
    <div id="goods_info" class="goods-info">
        <toolbar></toolbar>
        <div class="main flex-row-left">
            <div class="buy">
                <img src="../../assets/img/goods/p_1.jpg">
                <a @click.stop="routerLink('check')" class="buy-now"  style="text-decoration: none;">立即购买</a>
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
.goods-info {
    img{width:10rem;}
    .main {
        .buy {
            position: relative;
            .buy-now {
                position: absolute;
                top: 11.6rem;
                left: 50%;
                margin-left: -1rem;
                width: 2rem;
                height: 0.6rem;
                font-size: 0.23rem;
                color: #fff;
                border-radius: 0.66rem;
                background: red;
                padding: 0.14rem 0.2rem;
                letter-spacing: 0.02rem;
                cursor: pointer;
            }
            a:link,
            a:hover,
            a:visited {
                text-decoration: none;
                background-color: #fd6565;
            }
        }
    }
}
</style>

