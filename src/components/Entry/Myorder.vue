<template>
    <div class="r-content">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="待付款 1" name="first">
          <div class="no-order">您还没有订单哦~</div>
        </el-tab-pane>
        <el-tab-pane label="待付款 1" name="second">
          <one-goods></one-goods>
        </el-tab-pane>
        <el-tab-pane label="所有订单 2" name="third">
          <one-goods></one-goods>
          <div class="divider"></div>
          <one-goods></one-goods>
        </el-tab-pane>
      </el-tabs>
    </div>
</template>

<script>
import Toolbar from '@/components/Base/Toolbar'
import Sidebar from '@/components/Base/Sidebar'
import MyTitle from '@/components/Entry/MyTitle'
import OneGoods from '@/components/Entry/OneGoods'
import Foot from '@/components/Base/Foot'

export default {
  data () {
    return {
      activeName: 'first'
    }
  },
  methods:{
    handleClick(tab, event) {
        console.log(tab, event);
    }
  },
  computed:{},
  components:{
    Toolbar,Foot,Sidebar,OneGoods,MyTitle
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../../assets/css/css.css";
</style>
<style lang="less">
.divider{
  width: 757px;
  height: 1px;
  background-color: #d1dbe5;
  margin-top: 60px;
}
.no-order{
  color:#99A9BF;
  font-size:18px;
  margin-top:60px;
}
</style>
