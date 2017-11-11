<template>
    <div class="head">
            <div class="title flex-row-center">
              <a href="/index"><img src="../../assets/img/index/logo.png"></a>
              <!--<img src="https://air-yx.oss-cn-hangzhou.aliyuncs.com/assets/img/index/head_tree.png">-->
              <ul class="x-flex">
                 <li><a href="/goods">产品</a></li>
                 <li><a href="/service">售后服务</a></li>
                 <li><a href="/share">共享计划</a></li>
                 <li><a href="/us">关于我们</a></li>
                 <li class="user-login"><a href="/login">用户登录</a></li>
                 <!--<li class="user-cart"><img src="../../assets/img/common/cart_white.png"></li>-->
                 <!--<li class="user-person"><img src="../../assets/img/common/person_white.png"></li>-->
              </ul>
            </div>
        </div>
</template>
<style scoped>
  @import "../../assets/css/css.css";
</style>

<style lang="less">
.head{
    width: 100%;
    // height: 94px;
    background-color: rgba(0, 0, 0, 1);
    color: #fff;
    padding: 28px 0px;
    .title{
        img{
            width: 33px;
	        height: 38px;
	        // background-color: rgba(167, 167, 167, 1);
        }
        ul{
            margin-left: 28px;
            margin-top: 0;
            li{
                margin: 12px 30px 0 0 ;
                height: 24px;
                a{color: #fff;}
                a:hover{color: #a7a7a7;}
            }
            li.user-login{
                font-size: 16px;
	            font-weight: normal;
	            font-style: normal;
	            font-stretch: normal;
	            letter-spacing: 0px;
	            color: #ffffff;
                margin-left: 396px;;
                padding-bottom: 8px;
                border-bottom: 1px solid #fff;
            }
            li.user-cart{
              margin-left: 313px;
              margin-top: 0px
            }
            li.user-person{
              margin: 0 0 0 69px;
            }
           }
    }
}
</style>


<script>
export default {
  name: 'index',
  data () {
    return {
      msg: 'Welcome'
    }
  }
}
</script>

