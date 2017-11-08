<template>
    <div class="wait-pay">
        <toolbar></toolbar>
        <div class="main">
          <my-title></my-title>
          <div class="endty x-flex">
            <sidebar></sidebar>
            <div class="r-content">
              <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="联系我们" name="first">
                  <div class="address-info">
                    联 系 人：张先生<br>
                    售后电话：18612928996<br>
                    售后时间：9:00 - 18:00<br>
                    售后地址：北京市朝阳区慈云寺远洋国际中心6层
                  </div>
                </el-tab-pane>
              </el-tabs>
            </div>
          </div>
        </div>
        <foot></foot>
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
      activeName: 'first',
      dialogFormVisible: false,
      form: {
          name: '',
          phone: '',
          province: '',
          city: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
      },
      formLabelWidth: '120px',
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

.el-input__inner{width:88%;}
.el-select .el-input__inner{width:120px;}
.address-info{
  margin-top:40px;
  font-size: 18px;
  line-height: 1.8;
}

.wait-pay{
  .main{
    .endty{
      margin-top:60px;
      margin-bottom: 180px;
      .divider{
        width: 757px;
        height: 1px;
        background-color: #d1dbe5;
        margin-top: 60px;
      }
    }
  }
}
</style>
