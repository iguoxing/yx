<template>
    <div id="login" class="login">
        <toolbar></toolbar>

        <div class="main">
            <img class="login_bg" src="../../assets/img/login/bg.png">
            <form class="sign">
               <div class="title">欢迎登陆怡享科技官网</div>
               <div class="iphone form-group flex-col-center margin-top-3">
                 <label class="col-sm-3 control-label">手机号：</label>
                 <input type="text" class="form-control" placeholder="请输入手机号">
               </div>
               <div class="icode form-group flex-col-center margin-top-2">
                 <label class="col-sm-3 control-label">验证码：</label>
                 <input type="text" class="form-control" placeholder="请输入手机号">
                 <a class="get_code">获取验证码</a>
               </div>
               <div class="login_now form-group">
                 <button class="btn btn-primary">立即登录</button>
               </div>
            </form>
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
