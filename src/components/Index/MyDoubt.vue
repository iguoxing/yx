<template>
    <div class="r-content">
      <el-tabs v-model="activeName">
        <el-tab-pane label="常见问题" name="first">
          <div class="my-doubt">
            <p class="ask">Q：怡享空气净化器滤芯多长时间需要更换？</p>
            <p class="answer">
              A： 怡享空气净化器使用超大面积和更高性能的滤芯，美国原装进口3M公司医疗级别的HEPA滤纸展开有6M2，以及美国进口去除甲醛，苯等气态污染物的专业滤料约7公斤，在保证去气态污染物和颗粒物的同时，更延长了滤芯使用的时间。在普通污染的情况下，我们建议一年更换一次。
            </p>
            <p class="ask">Q：我怎么知道什么时候改更换滤芯，以及如何购买滤芯？</p>
            <p class="answer">
              A：1）下载“怡享APP”就可以查看滤芯的使用情况，同时也会有怡享的客服到期提醒您滤芯更换时间;<br>
              <i class="next"></i>2） 在怡享官方网站，淘宝，京东等商城可以直接购买滤芯，也可以直接联系客服进行购买。
            </p>
            <p class="ask">Q：使用空气净化器时可以开窗么？</p>
            <p class="answer">
              A：建议使用空气进化器时不要长时间开窗，可以每天通风10-20分钟的时间，以保证室内有新鲜的氧气。
            </p>
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
.my-doubt{
  font-size: 16px;
  margin-top: 16px;
  .ask{
    color: #f04827;
    font-size: 22px;
  }
  .answer{
    color:#333;
    margin-bottom: 50px;
    .next{padding-left: 27px;}
  }
  .answer:last-child{margin-bottom: 0;}
}

</style>
