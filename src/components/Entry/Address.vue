<template>
    <div class="r-content">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="我的收货地址" name="first">
          <el-row :gutter="20">
            <el-col :span="14">
              <div class="grid-content bg-purple">
                <div class="address-info">
                  北京市朝阳区东四环中路远洋国际中心A座六层1212室<br>
                  张三李四  18188888882
                </div>
              </div>
            </el-col>
            <el-col :span="2"><div class="grid-content bg-purple"><el-button icon="el-icon-edit" size="small"></el-button></div></el-col>
            <el-col :span="2"><div class="grid-content bg-purple"><el-button icon="el-icon-delete" size="small"></el-button></div></el-col>
            <el-col :span="2"><div class="grid-content bg-purple"><el-button size="small">设为默认</el-button></div></el-col>
          </el-row>

          <el-button class="margin-top-3" type="primary" @click="dialogFormVisible = true">添加</el-button>

          <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
            <el-form :model="form">
              <el-form-item label="姓名" :label-width="formLabelWidth">
                <el-input v-model="form.name" placeholder="请填写收货人姓名" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="电话" :label-width="formLabelWidth">
                <el-input v-model="form.phone" placeholder="请填写收货人联系电话" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="省市区" :label-width="formLabelWidth">
                <el-select v-model="form.province" placeholder="请选择省">
                  <el-option label="上海" value="shanghai"></el-option>
                  <el-option label="北京" value="beijing"></el-option>
                </el-select>
                <el-select v-model="form.city" placeholder="请选择市">
                  <el-option label="北京" value="beijing"></el-option>
                  <el-option label="太原" value="taiyuan"></el-option>
                </el-select>
                <el-select v-model="form.region" placeholder="请选择区">
                  <el-option label="海淀区" value="haidian"></el-option>
                  <el-option label="朝阳区" value="chaoyang"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="详细地址" :label-width="formLabelWidth">
                <el-input v-model="form.desc" placeholder="请填写详细地址" auto-complete="off"></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
          </el-dialog>

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
  font-size: 16px;
  margin-top: 0;
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
