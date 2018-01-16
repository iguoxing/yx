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
 @import "../../assets/css/css.css";
</style>
<style lang="less">
.goods{
    .main{
        margin: 1.18rem auto 1.8rem;
        width: 11.9rem;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: left;
        .left-goods{margin-right: 1.92rem;}
        .goods-info{
            width: 4.97rem;
            height: 4.75rem;
            margin-top: 0.3rem;
            cursor: pointer;
            img{
                width: 4.97rem;
                height: 3.85rem;
            }
            .goods-title{
                font-size: 0.18rem;
                line-height: 0.24rem;
                color: #202020;
                margin-top: 0.19rem;
            }
            .buy-now{
                font-size: 0.18rem;
                line-height: 0.2rem;
                color: #3abad7;
                margin-top:0.23rem;
            }
        }
    }
}
</style>

