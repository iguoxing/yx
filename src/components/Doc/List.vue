<template>
    <div class="article">
        <toolbar></toolbar>
        <div class="main">
          <div class="title">文章列表</div>
          <img class="divider" src="./img/line.png">
          <div class="set flex-wrap">
            <div class="info">
              <img class="pic" src="./img/a1.jpg">
              <p class="title flex-col-center">
                <span class="word beyong-width">怡享空气亮相北京双创周，怡享科技为顾客讲解共享模式</span>
                <span class="date">2017/9/10</span>
              </p>
            </div>
            <div class="info">
              <img class="pic" src="./img/a1.jpg">
              <p class="title flex-col-center">
                <span class="word beyong-width">怡享空气亮相北京双创周，怡享科技为顾客讲解共享模式</span>
                <span class="date">2017/9/10</span>
              </p>
            </div>
            <div class="info">
              <img class="pic" src="./img/a1.jpg">
              <p class="title flex-col-center">
                <span class="word beyong-width">怡享空气亮相北京双创周，怡享科技为顾客讲解共享模式</span>
                <span class="date">2017/9/10</span>
              </p>
            </div>
            <div class="info">
              <img class="pic" src="./img/a1.jpg">
              <p class="title flex-col-center">
                <span class="word beyong-width">怡享空气亮相北京双创周，怡享科技为顾客讲解共享模式</span>
                <span class="date">2017/9/10</span>
              </p>
            </div>
            <div class="info">
              <img class="pic" src="./img/a1.jpg">
              <p class="title flex-col-center">
                <span class="word beyong-width">怡享空气亮相北京双创周，怡享科技为顾客讲解共享模式</span>
                <span class="date">2017/9/10</span>
              </p>
            </div>
          </div>
        </div>
        <foot></foot>
    </div>
</template>

<script>
import Toolbar from '@/components/Base/Toolbar'
import Foot from '@/components/Base/Foot'

export default {
  data () {
    return {
      msg: '测评文章',
    }
  },
  methods:{},
  computed:{},
  components:{
    Toolbar,Foot
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../../assets/css/css.css";
</style>
<style lang="less">
.article{
  .main{
    margin:0.56rem auto 1.2rem;
    width: 9.6rem;
    text-align: left;
    font-size:0.16rem;
    .title{font-size:0.26rem;}
    .divider{margin-top:0.16rem;height: 0.02rem;width: 3.2rem;}
    .set{
      margin:0.48rem auto;
      .info{
        margin-bottom: 0.6rem;
        margin-right: 0.16rem;
        .pic{width: 2.9rem;height: 2.4rem;}
        .title{
          font-size: 0.2rem;
          color:#202020;
          margin-top: 0.16rem;
          .word{width: 2.2rem;}
          .date{color:#636336;font-size: 0.15rem;}
        }
      }
    }
  }
}
</style>
