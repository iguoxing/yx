<template>
    <div class="wait-pay">
        <toolbar></toolbar>
        <div class="main">
          <my-title></my-title>
          <div class="endty x-flex">
            <sidebar></sidebar>
            <router-view></router-view>
          </div>
        </div>
        <foot></foot>
    </div>
</template>

<script>
import Toolbar from '@/components/Base/Toolbar'
import Sidebar from '@/components/Base/Sidebar'
import MyTitle from '@/components/Entry/MyTitle'
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
    },
    InitData(){
        let user='test@test.com';
        $.ajax({
            url: 'http://101.201.122.124:9001/public/menu.jsonp', dataType: 'jsonp', async: false, data: {account:user}, success: function (result) {
                console.log(result)
            }, error: function (err) {
                console.log(err)
            }
        })
      },
  },
  computed:{},
  components:{
    Toolbar,Foot,Sidebar,MyTitle
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../../assets/css/css.css";
</style>
<style lang="less">
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
      .no-order{
        color:#99A9BF;
        font-size:18px;
        margin-top:60px;
      }
    }
  }
}
</style>
