<template>
  <div class="user-edit">
      <el-form
      ref="form"
      :model="form"
      label-width="80px"
      :rules="rules"
    >
      <el-form-item label="用户名" prop="user">
        <el-input v-model="form.user"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pwd">
        <el-input v-model="form.pwd"></el-input>
      </el-form-item>
      <el-form-item label="管理员">
        <el-switch v-model="form.admin"></el-switch>
      </el-form-item>
      <el-form-item>
        <el-button
            type="primary"
            @click="onSubmit('form')"
        >提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

  export default {
    name: "ArticleEdit",
    data(){
      return {
        form : {
          user : this.defaultData.user||"",
          pwd : this.defaultData.pwd||'',
          admin : this.defaultData.admin || false,
        },
        rules : {
          pwd : [{ required: true, message: '请选择pwd' }],
          user : [{ required: true, message: '请输入user' }],
          admin : [{ required: true, message: '请输入admin' }],
        }
      }
    },
    props : ["defaultData"],
    watch:{
      defaultData(){
        this.form = {
          user : this.defaultData.user,
          pwd : this.defaultData.pwd,
          admin : this.defaultData.admin,
        }
      }
    },
    methods:{
      uploadSuccess(url){
        this.form.surface = url;
      },
      onSubmit(formName){
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$emit("handleSubmit", {
              pwd: this.form.pwd,
              user: this.form.user,
              admin: this.form.admin,

            })
          } else {
            return false;
          }
        });
      },
    },
  }
</script>

<style scoped lang="less">
.user-edit {
  position: relative;
  width: 60%;
}
.el-form {
  position: absolute;
  top: 50%;
  left: 50%;
  right: 0;
  bottom: 0;
  transform: translate(-50%, -50%);
  width: 400px;
}
</style>
