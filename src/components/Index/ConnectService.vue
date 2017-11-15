<template>
    <div class="r-content">
      <el-tabs v-model="activeName">
        <el-tab-pane label="联系方式" name="first">
          <div class="address-info">
            联 系 人：张先生<br>
            售后电话：18612928996<br>
            售后时间：9:00 - 18:00<br>
            售后地址：北京市朝阳区慈云寺远洋国际中心6层
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'first',
    }
  },
  methods:{},
  computed:{},
  components:{}
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
  margin-top:16px;
}

</style>
