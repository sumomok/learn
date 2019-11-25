<template>
  <div>
    <el-form
      :model="registerForm"
      status-icon
      :rules="rules"
      ref="registerForm"
      label-width="100px"
      class="demo-registerForm"
    >
      <!-- <el-form-item label="手机号" prop="phone">
        <el-input v-model.number="registerForm.userName"></el-input>
      </el-form-item>-->
      <el-form-item label="用户名" prop="userName">
        <el-input v-model.number="registerForm.userName"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input @input="input" type="password" v-model="registerForm.password" autocomplete="off"></el-input>
      </el-form-item>
      <div class="pw-strength">
        <div :class="['bar',strengthClass]"></div>
        <div class="letter">
          <span>弱</span>
          <span>中</span>
          <span>强</span>
        </div>
      </div>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="registerForm.rePassword" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('registerForm')">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import api from '@/api/index.js'
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.registerForm.rePassword !== "") {
          this.$refs.registerForm.validateField("rePassword");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.registerForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    var validatePass3 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else if (value.length < 4 || value.length > 16) {
        callback(new Error("用户名必须为4-16位的字符数字下划线组成"));
      } else {
        callback();
      }
    };
    return {
      strengthClass: "",
      registerForm: {
        userName: "",
        password: "",
        rePassword: ""
      },
      rules: {
        userName: [{ validator: validatePass3, trigger: "blur" }],
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          api.register({
              params:{
                  userName:this.registerForm.userName,
                  password:this.registerForm.password,
                  rePassword:this.registerForm.rePassword,
              }
          }).then(res=>{
              if (res.data.status == 'success') {
                  this.$router.push({name:'login'})
              } else{
                  alert(res.data.msg)
              }
          })
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    input() {
      var regstr = /(\w)+/g;
      var regnum = /(\d)+/g;
      var reg = /_/g;
      var strongth =
        this.registerForm.password.match(reg) &&
        this.registerForm.password.match(regnum) &&
        this.registerForm.password.match(regstr);
      var reg = /([\d])([A-z])(_)+/g;
      if (
        this.registerForm.password.length > 20 ||
        (this.registerForm.password > 6 && strongth)
      ) {
        this.strengthClass = "strong";
      } else if (this.registerForm.password.length < 6) {
        this.strengthClass = "week";
      } else if (!this.registerForm.password) {
        this.strengthClass = "";
      } else {
        this.strengthClass = "normal";
      }
    }
  }
};
</script>

<style lang="scss">
</style>