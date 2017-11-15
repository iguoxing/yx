<template>
<!-- <h1>{{msg}}</h1> -->
    <div id="goods" class="goods">
        <toolbar></toolbar>
        <div class="main flex-row-left">
            <div class="left-goods goods-info" @click.stop="routerLink('/goods_one')">
                <img class="img" src="../../assets/img/goods/left_goods.png">
                <p class="goods-title">新风第二代空气净化器  502m2/h 工业级空气净化器</p>
                <a class="buy-now">立即购买></a>
            </div>
            <div class="right-goods goods-info" @click.stop="routerLink('/goods_one')">
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
.goods{
    .main{
        margin: 118px auto 233px;
        width: 1184px;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: left;
        .left-goods{margin-right: 190px;}
        .goods-info{
            width: 497px;
            height: 475px;
            margin-top: 30px;
            cursor: pointer;
            img{
                width: 497px;
                height: 385px;
            }
            .goods-title{
                font-size: 18px;
                line-height: 24px;
                color: #202020;
                margin-top: 19px;
            }
            .buy-now{
                font-size: 18px;
                line-height: 20px;
                color: #3abad7;
                margin-top:23px;
            }
        }
    }
}
</style>

