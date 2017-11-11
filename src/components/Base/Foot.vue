<template>
    <div class="page_bottom x-flex">
              <div class="left_bottom">
                  <div class="tab_title">
                      <a href="/index">首页</a> |
                      <a href="/goods">产品</a> |
                      <a href="/service">售后服务</a> |
                      <a href="/us">联系我们</a>
                  </div>
                  <div class="company-info">
                  Copyright © 2017, Yixiangkeji Co., Ltd. All Rights Reserved.北京怡享科技有限公司  |
                  <a>法律声明</a>| <a>隐私条款</a>  |  <a>开发者中心</a>
京ICP备14041720号-1    京ICP证140622号    京公网安备11010502025474
                  </div>
              </div>
              <div class="right_bottom">
                  <img src="../../assets/img/index/logo_yx.png">
              </div>
        </div>
</template>

<style lang="less">
.page_bottom{
    // width: 1184px;
    height: 174px;
    margin: 0 auto;
    text-align: left;
    .left_bottom{
        width:888px;
        .tab_title,.company-info{
            margin-top: 44px;
            font-size: 14px;
	        line-height: 24px;
	        color: #9c9c9c;
            a{color:#9c9c9c;}
        }
        .company-info a{
            color:#3abad7;
            cursor: pointer;
        }
    }
    .right_bottom{
        margin-left:123px;
        margin-top: 44px;
        img{
            width: 173px;
	        height: 72px;
        }
    }

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

