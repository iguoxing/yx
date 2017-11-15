<template>
    <div class="r-content">
      <el-tabs v-model="activeName">
        <el-tab-pane label="我们的承诺" name="first">
          <div class="address-info">
            1 、我们承诺在购物全程照顾您。<br>
            2 、我们承诺为您提供公平，公正，透明的交易平台。<br>
            3 、我们承诺在您需要的时候能够快捷地找到我们，我们始终在您身边。<br>
            4 、我们承诺一心一意地为您提供舒适、满意的服务。
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
