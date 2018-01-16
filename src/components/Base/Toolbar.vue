<template>
    <div class="head">
            <div class="title flex-row-center">
              <a @click.stop="routerLink('/index')"><img src="../../assets/img/index/logo.png"></a>
              <!--<img src="https://air-yx.oss-cn-hangzhou.aliyuncs.com/assets/img/index/head_tree.png">-->
              <ul class="x-flex">
                 <li><a @click.stop="routerLink('/goods')">产品</a></li>
                 <li><a @click.stop="routerLink('/service')">售后服务</a></li>
                 <li><a @click.stop="routerLink('/share')">共享计划</a></li>
                 <li><a @click.stop="routerLink('/us')">关于我们</a></li>
                 <li class="user-login"><a @click.stop="routerLink('/login')">用户登录</a></li>
                 <!--<li class="user-cart"><img src="../../assets/img/common/cart_white.png"></li>-->
                 <!--<li class="user-person"><img src="../../assets/img/common/person_white.png"></li>-->
              </ul>
            </div>
        </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '怡享',
    }
  },
  methods:{
    routerLink(route) {
      this.$router.push(route)
    },
  },
  computed:{},
  components:{}
}
</script>

<style scoped>
  @import "../../assets/css/css.css";
</style>

<style lang="less">
.head{
    width: 100%;
    // height: 94px;
    background-color: rgba(0, 0, 0, 1);
    color: #fff;
    padding: 0.28rem 0;
    .title{
        img{
          width: 0.33rem;
          height: 0.38rem;
          cursor: pointer;
	        // background-color: rgba(167, 167, 167, 1);
        }
        ul{
            margin-left: 0.6rem;
            margin-top: 0;
            li{
                margin: 0.12rem 0.6rem 0 0 ;
                height: 0.24rem;
                a{color: #fff;}
                cursor: pointer;
                a:hover{color: #a7a7a7;}
            }
            li.user-login{
              font-size: 0.16rem;
	            font-weight: normal;
	            font-style: normal;
	            font-stretch: normal;
	            letter-spacing: 0;
	            color: #ffffff;
              margin-left: 6rem;
              margin-right:0;
              padding-bottom: 0.08rem;
              border-bottom: 0.01rem solid #fff;
            }
            li.user-cart{
              margin-left: 3.13rem;
              margin-top: 0;
            }
            li.user-person{
              margin: 0 0 0 0.69rem;
            }
           }
    }
}
</style>



