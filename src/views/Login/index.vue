<template>
    <div class="page-login">
        <wyHead></wyHead>
        <div class="login-con">
            <div class="login-txt">
                <div class="login-top">
                    <img src="https://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
                </div>
                <div class="login-form">
                    <div class="form-group">
                        <input placeholder="用户名" class="input-control" type="text" v-model="username" />
                    </div>
                    <div class="form-group">
                        <input placeholder="密码" class="input-control" type="password" v-model="password" />
                    </div>
                    <button
                    class="submit login-btn"
                    :disabled="!username || !password"
                    @click="handleLogin({username, password})"
                >
                    <span>登录</span>
                </button>
            </div>
        </div>
        <div class="login-foot">
            <div class="login-foot1">
                <span>
                    <i class="iconfont iconQQ"></i>
                    <span></span>
                </span>
            </div>
            <div class="login-foot2">
                <span>
                    <i class="iconfont iconweixin"></i>
                    <span></span>
                </span>
            </div>
            <div class="login-foot3">
                <span>
                    <i class="iconfont iconweibo"></i>
                    <span></span>
                </span>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { mapActions } from "vuex";
import wyHead from '../../components/wyHead/index';

export default {
  name: "Login",
  components: {
    wyHead
  },
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    ...mapActions("user", ["handleLogin"])
  }
};
</script>
<style lang="scss">
    .page-login{
        width: 100%;
        height: 100%;
        margin:0 auto;
        .login-con{
            background: #F2F5F4;
            height: 623px;
            .login-txt{
                position: relative;
                // height: 100%;
                text-align: center;
                height: 350px;
                img{
                    width: 137px;
                    height: 46px;
                    padding-top: 100px;
                    padding-bottom: 80px; 
                }
                 .login-form {
                    .form-group {
                    // @include border-bottom;
                    line-height: 55px;
                    margin: 0 25px;
                    position: relative;
                        .input-control {
                            height: 15px;
                            line-height: 15px;
                            padding: 20px 0;
                            width: 100%;
                            font-size: 15px;
                            color: #191a1b;
                            border: 0;
                            outline-width: 0;
                        }
                    }
                    .submit {
                    width: calc(100% - 50px);
                    line-height: 45px;
                    font-size: 16px;
                    margin: 70px 25px 0;
                    border-radius: 3px;
                    text-align: center;
                    background-color: #ff5f16;
                    height: 44px;
                    color: #fff;
                    border: none;
                    &[disabled] {
                        background-color: #ccc;
                    }
                }
            }
        }
    }
    .login-foot{
        height: 20px;
        position: absolute;
        width: 100%;
        left: 0;
        bottom:0;
        height: 20px;
        text-align: center;
        .iconfont{
            font-size: 22px;
            color: #333;
        }
        .login-foot1,
        .login-foot2,
        .login-foot3{
            height: 10px;
            border-right: 1px solid #979797;
            display: inline-block;
            line-height: 10px;
            text-align: center;
            padding:0 8px;
        }
    }
}
</style>