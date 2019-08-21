<template>
  <div class="page-register">
    <div class="header">
      <header>
        <a class="site-logo" href="https://m.you.163.com">
          <img src="https://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
        </a>
        <div class="login">
          <span class="bold">已有网易账号？</span>
          <a href="">
            <span>登录</span>
          </a>
        </div>
      </header>
      <div class="con">
        <el-form-item label="用户名" prop="userName">
          <el-input type="text" v-model="registerForm.userName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="registerForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="rePassword">
          <el-input type="password" v-model="registerForm.rePassword" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('registerForm')">同意以下协议并注册</el-button>
            <a class="f1" href="http://www.meituan.com/about/terms" target="_blank">《美团网用户协议》</a>
        </el-form-item>
      </div>
    </div>
  <div class="content">
    <el-form :model="registerForm" status-icon :rules="rules" ref="registerForm" label-width="80px" class="demo-ruleForm">
      <el-form-item label="用户名" prop="userName">
        <el-input type="text" v-model="registerForm.userName" autocomplete="off"></el-input>
      </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="registerForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="rePassword">
          <el-input type="password" v-model="registerForm.rePassword" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item class="btn">
          <el-button type="primary" @click="submitForm('registerForm')">同意以下协议并注册</el-button>
            <a class="f1" href="https://reg.163.com/agreement_mobile_ysbh_wap.shtml?v=20171127" target="_blank">《网易用户协议》</a>
        </el-form-item>
      </el-form>
    </div>
    <footer class="footer-mini">
      <p class="copyright">
          ©<a class="f1" href="https://m.you.163.com">wangyi.com</a>&nbsp;
          <a class="f1" target="_blank" href="http://www.miibeian.gov.cn/">京ICP证070号</a>&nbsp;
          <span class="f1">京公网安备110号</span>
      </p>
    </footer>
  </div>
</template>

<script>

// import api from '@/api/index.js'

export default {
  data() {
    var checkUserName = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else {
          console.log(checkUserName)
        if (
          this.registerForm.userName.length < 4 ||
          this.registerForm.userName.length > 16
        ) {
          callback(new Error("用户名必须为4-16位的字母数字下划线组成"));
        } else {
             callback();
        }
      }
    };
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
    return {
      registerForm: {
        userName: "",
        password: "",
        rePassword: ""
      },
      rules: {
        password: [{ validator: validatePass, trigger: "blur" }],
        rePassword: [{ validator: validatePass2, trigger: "blur" }],
        userName: [{ validator: checkUserName, trigger: "blur", type: "string" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
         this.$refs[formName].validate((valid) => {
          if (valid) {
              console.log(this.registerForm)
              api.register({
                  params: this.registerForm
              }).then((res) => {
                  console.log(res);
                  if (res.data.status == 'success') {
                      this.$message({
                        message: res.data.msg,
                        type: 'success'
                    });
                      this.$router.push({name: 'login'})
                  }
              })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
    }
  }
};
</script>




<style lang="scss">

  a{
    color: #333;
  }
  .page-register{
    background: #F2F5F4;
    width: 100%;
    height: 100%;
  }
  header{
      width: 375px;
      height: 45px;
      margin: 0 auto;
      padding: 10px 8px 0;
      box-sizing: border-box;
  }
  img{
      height: 45px;
      width: 135px;
      float: left;
    }
  .login{
      height: 45px;
      // width: 100px;
      line-height: 45px;
      float: right;
      font-size: 20px;
    }
  .con{
    width: 375px;
    margin-top: 20px;
    min-height: 30px;
    margin-right: 10px;
    // margin: 0 auto;
    // text-align: left;
  }
  .btn{
    margin-top: 80px;
  }
  .footer-mini{
  position: absolute;
  bottom: 30px;
  left: 12px;
  }
  .footer-mini .copyright{
    text-align: center;
  }



</style>




