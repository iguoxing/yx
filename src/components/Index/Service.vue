<template>
    <div class="wait-pay">
        <toolbar></toolbar>
        <div class="main">
          <div>
            <div class="heading x-flex">
              <span class="title">售后服务</span>
            </div>
            <img class="divide" src="../../assets/img/index/rule_right.png">
          </div>
          <div class="endty x-flex">
            <div class="l-menu">
              <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
                <a @click="changeTab('MyDoubt')"><el-menu-item index="1"><i class="el-icon-question"></i>我的疑惑</el-menu-item></a>
                <a @click="changeTab('ConnectService')"><el-menu-item index="2"><i class="el-icon-service"></i>联系售后</el-menu-item></a>
              </el-menu>
            </div>

            <transition name="fade" mode="out-in">
              <keep-alive>
                <component :is="nowTab"></component>
              </keep-alive>
            </transition>

          </div>
        </div>
        <foot></foot>
    </div>
</template>

<script>
import Toolbar from '@/components/Base/Toolbar'
import Foot from '@/components/Base/Foot'
import ConnectService from '@/components/Index/ConnectService'//联系售后
import MyDoubt from '@/components/Index/MyDoubt'//我的疑惑

export default {
  data () {
    return {
      activeName: 'first',
      nowTab:'MyDoubt',
    }
  },
  methods:{
    handleClick(tab, event) {
        console.log(tab, event);
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    changeTab(tab){
      this.nowTab = tab
    }
  },
  computed:{},
  components:{
    Toolbar,Foot,ConnectService,MyDoubt
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../../assets/css/css.css";
</style>
<style lang="less">
.wait-pay{
  .main{
    .endty{
      margin-top:0.6rem;
      margin-bottom: 1.8rem;
      .divider{
        width: 7.57rem;
        height: 0.01rem;
        background-color: #d1dbe5;
        margin-top: 0.6rem;
      }
      .no-order{
        color:#99A9BF;
        font-size:0.18rem;
        margin-top:0.6rem;
      }
    }
  }
}

.divide{margin-top: 0.24rem;width:3.38rem;}

.l-menu{
  width:3.38rem;
  .el-menu{
    background: #fff;
    .el-menu-item, .el-submenu__title{font-size:0.2rem;}
    }
}

.r-content{width: 8.57rem;}
.el-input__inner{width:88%;}
.el-select .el-input__inner{width:1.2rem;}


</style>
