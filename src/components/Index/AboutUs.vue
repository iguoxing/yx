<template>
    <div class="wait-pay">
        <toolbar></toolbar>
        <div class="main">
          <div>
            <div class="heading x-flex">
              <span class="title">关于我们</span>
            </div>
            <img class="divide" src="../../assets/img/index/rule_right.png">
          </div>
          <div class="endty x-flex">
            <div class="l-menu">
              <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
                <a @click="changeTab('ConnectUs')"><el-menu-item index="1"><i class="el-icon-service"></i>联系我们</el-menu-item></a>
                <a @click="changeTab('OurPromise')"><el-menu-item index="2"><i class="el-icon-document"></i>我们的承诺</el-menu-item></a>
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
import ConnectUs from '@/components/Index/ConnectUs'//联系我们
import OurPromise from '@/components/Index/OurPromise'//我们的承诺

export default {
  data () {
    return {
      activeName: 'first',
      nowTab:'ConnectUs',
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
    Toolbar,Foot,ConnectUs,OurPromise
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

.el-input__inner{width:88%;}
.el-select .el-input__inner{width:1.2rem;}

</style>
