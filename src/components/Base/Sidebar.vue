<template>
  <div class="l-menu">
    <!-- <ul class="l-menu">
              <li class="active">我的订单</li>
              <li>收货地址</li>
              <li>申请售后</li>
              <li>申请成为合伙人</li>
            </ul> -->
    <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
      <a href="/enter/order"><el-menu-item index="1"><i class="el-icon-star-on"></i>我的订单</el-menu-item></a>
      <a href="/enter/address"><el-menu-item index="2"><i class="el-icon-message"></i>收货地址</el-menu-item></a>
      <a href="/enter/after_sale"><el-menu-item index="3"><i class="el-icon-upload"></i>申请售后</el-menu-item></a>
      <a href="/enter/partner_apply"><el-menu-item index="4"><i class="el-icon-edit"></i>申请成为合伙人</el-menu-item></a>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg: 'Welcome'
    }
  },
  methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>


<style lang="less">
.l-menu{
  width:338px;
  .el-menu{
    background: #fff;
    .el-menu-item, .el-submenu__title{font-size:20px;}
    }
  // display: flex;
  // flex-direction: column;
  // li{
  //   font-size: 24px;
  //   border-bottom: 1px solid #666;
  //   padding-bottom: 6px;
  //   display: table;
  //   margin-bottom: 60px;
  // }
  // li.active{color: #7e7e7e;}
}
</style>
