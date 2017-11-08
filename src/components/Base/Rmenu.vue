<template>
    <ul class="r-menu x-flex">
                <li class="active">待付款 1</li>
                <li>待付款 0</li>
                <li>所有订单 1</li>
              </ul>
</template>

<style lang="less">
.r-menu{
          padding-bottom: 30px;
          border-bottom: 1px solid #666;
          width: 750px;
          li{
            font-size: 18px;
            margin-right: 115px;
          }
          li.active{color: #868686;}
        }
</style>


<script>
export default {
  name: 'index',
  data () {
    return {
      msg: 'Welcome'
    }
  }
}
</script>

