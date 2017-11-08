<template>
    <div class="r-content">
      <el-tabs v-model="activeName">
        <el-tab-pane label="申请成为合伙人" name="first">
          <el-form :model="applyForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-row :gutter="20">
              <el-col :span="16">
                <el-form-item label="姓名" prop="name">
                  <el-input v-model="applyForm.name"></el-input>
                </el-form-item>
                <el-form-item label="手机号" prop="phone">
                  <el-input v-model="applyForm.phone"></el-input>
                </el-form-item>
                <el-form-item label="邀请码" prop="code">
                  <el-input v-model="applyForm.code"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="submitForm('applyForm')">立即创建</el-button>
                  <el-button @click="resetForm('applyForm')">重置</el-button>
                </el-form-item>                          
              </el-col>
              <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
            </el-row>
          </el-form>
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
      applyForm: {
          name: '',
          phone: '',
          code: ''
      },
      rules: {
          name: [
            { required: true, message: '请输入分享人姓名', trigger: 'blur' },
            { min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur' }
          ],
          phone: [
            { required: true, message: '请输入分享人联系方式', trigger: 'blur' },
            { min: 11, max: 11, message: '长度为 11 个字符', trigger: 'blur' }
          ],
          code: [
            { required: true, message: '请输入邀请码', trigger: 'blur' },
            { min: 2, max: 20, message: '长度为 2 到 20 个字符', trigger: 'blur' }
          ],
      }
    }
  },
  methods:{
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
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
.el-form{margin-top: 30px;}
</style>
