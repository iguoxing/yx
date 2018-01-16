<template>
    <div class="wait-pay">
        <toolbar></toolbar>
        <div class="main">
          <my-title></my-title>
          <div class="endty x-flex">
            <div class="l-menu">
              <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
                <a @click="changeTab('Myorder')"><el-menu-item index="1"><i class="el-icon-star-on"></i>我的订单</el-menu-item></a>
                <a @click="changeTab('Address')"><el-menu-item index="2"><i class="el-icon-message"></i>收货地址</el-menu-item></a>
                <a @click="changeTab('AfterSale')"><el-menu-item index="3"><i class="el-icon-upload"></i>申请售后</el-menu-item></a>
                <a @click="changeTab('PartnerApply')"><el-menu-item index="4"><i class="el-icon-edit"></i>申请成为合伙人</el-menu-item></a>
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
import Sidebar from '@/components/Base/Sidebar'
import MyTitle from '@/components/Entry/MyTitle'
import Foot from '@/components/Base/Foot'
import Myorder from '@/components/Entry/Myorder'//我的订单
import Address from '@/components/Entry/Address'//收货地址
import AfterSale from '@/components/Entry/AfterSale'//售后服务
import PartnerApply from '@/components/Entry/PartnerApply'//合伙人申请

export default {
  data () {
    return {
      activeName: 'first',
      nowTab:'Myorder',
    }
  },
  methods:{
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    changeTab(tab){
      this.nowTab = tab
    },
    handleClick(tab, event) {
        console.log(tab, event);
    },
    InitData(){
        let user='test@test.com';
        $.ajax({
            url: 'http://101.201.122.124:9001/public/menu.jsonp', dataType: 'jsonp', async: false, data: {account:user}, success: function (result) {
                console.log(result)
            }, error: function (err) {
                console.log(err)
            }
        })
      },
  },
  computed:{},
  components:{
    Toolbar,Foot,Sidebar,MyTitle,Myorder,Address,AfterSale,PartnerApply
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../../assets/css/css.css";
</style>
<style lang="less">

.l-menu{
  width:3.38rem;
  .el-menu{
    background: #fff;
    .el-menu-item, .el-submenu__title{font-size:0.2rem;}
    }
}
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
</style>
