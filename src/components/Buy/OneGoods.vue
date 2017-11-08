<template>
    <div class="goods-info flex-col-center">
      <img class="icon" src="../../assets/img/goods/left_goods.png"/>
      <div class="name">共享工业级空气净化器</div>
      <div class="number">数量 1</div>
      <div class="spec">¥ 2200.00/件</div>
    </div>
</template>

<script>

export default {
  data () {
    return {
      msg: 'Welcome',
    }
  },
  methods:{},
  computed:{},
  components:{}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 /*@import "../../assets/css/base.css";*/
  @import "../../assets/css/css.css";
</style>
<style lang="less">
.goods-info{
  padding: 60px 0;
  border-top: solid 1px rgba(83, 83, 83, 1);
  .icon{
    width: 100px;
    height: 100px;
  }
  .name{font-size: 24px;margin-left: 21px;width: 480px;}
  .number{font-size: 24px;color: #868686;}
  .spec{font-size: 18px;color: #f04827;width: 468px;text-align: right;}
}
</style>
