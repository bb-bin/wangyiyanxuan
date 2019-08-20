<template>
    <div class="page-login">
        <wyHead></wyHead>
        <div class="login-con">
            <div class="login-txt">
                <div class="login-top">
                    <img src="https://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
                </div>
                <div class="login-int">
                    <input placeholder="用户名" type="text">
                    <input placeholder="密码" type="password">
                    <button>登录</button>
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
import wyHead from '../../components/wyHead/index'

export default {

    components: {
    wyHead
  }
}
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
                    padding-top: 80px;
                    padding-bottom: 116px; 
                }
                .login-int{
                    width: 375px;
                    height: 110px;
                    input{
                        margin: 0 auto;
                        display: block;
                        margin-top: 2px;
                        background: rgb(206, 228, 236);
                        border: 1px solid #aaa;
                    }
                    button{
                        background: skyblue;
                        margin-top: 20px;
                        border: 1px solid #aaa;
                        border-radius: 8px;
                        height: 30px;
                        width: 60px;;
                    }
                }
            }
            .login-foot{
                height: 20px;
                position: absolute;
                width: 100%;
                left: 0;
                bottom:100px;
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
    }
</style>