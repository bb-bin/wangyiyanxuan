<template>
    <div class="sort-list">
        <wyHead />
        <div class="nav">
            <!-- <router-link to=' '>员工精选好货</router-link> -->
            <div class="nav-list">
                <span class="active">员工精选好货</span>
                <span>优选美食2件85折</span>
                <span>母婴好物特价</span>
                <span>夏日男士穿搭特价</span>
                <span>中秋好礼上新</span>
                <span>夏日女士穿搭特价</span>
                <span>50元幸福好物</span>
                <span>暑期出游便携好物</span>
                <span>999+好评</span>
            </div> 
        </div>
        <div class="good">
            <div class="good-bt">
                <p>自家员工眼里，什么值得买</p>
            </div>
            <div class="good-list">
                <ul>
                    <li>
                        <div class="list-wrap">
                            <img src="../../../public/img/sing-icon1.png" alt="">
                            <div class="list-box">
                                <span>特价 </span>
                                <span>仅剩</span>
                                <span style="font-weight:bold;">5</span>
                                <span>天</span>
                            </div>
                        </div>
                        <span class="list-name">时尚按摩筋膜枪</span>
                        <strong>￥1099&nbsp;</strong><s>￥1299</s>
                        <br>
                        <span class="list-price">好货内部价</span>
                    </li>
                    <li>
                        <div class="list-wrap">
                            <img src="../../../public/img/sing-icon1.png" alt="">
                            <div class="list-box">
                                <span>特价 </span>
                                <span>仅剩</span>
                                <span style="font-weight:bold;">5</span>
                                <span>天</span>
                            </div>
                        </div>
                        <span class="list-name">时尚按摩筋膜枪</span>
                        <strong>￥1099&nbsp;</strong><s>￥1299</s>
                        <br>
                        <span class="list-price">好货内部价</span>
                    </li>
                    <li>
                        <div class="list-wrap">
                            <img src="../../../public/img/sing-icon1.png" alt="">
                            <div class="list-box">
                                <span>特价 </span>
                                <span>仅剩</span>
                                <span style="font-weight:bold;">5</span>
                                <span>天</span>
                            </div>
                        </div>
                        <span class="list-name">时尚按摩筋膜枪</span>
                        <strong>￥1099&nbsp;</strong><s>￥1299</s>
                        <br>
                        <span class="list-price">好货内部价</span>
                    </li>
                    <li>
                        <div class="list-wrap">
                            <img src="../../../public/img/sing-icon1.png" alt="">
                            <div class="list-box">
                                <span>特价 </span>
                                <span>仅剩</span>
                                <span style="font-weight:bold;">5</span>
                                <span>天</span>
                            </div>
                        </div>
                        <span class="list-name">时尚按摩筋膜枪</span>
                        <strong>￥1099&nbsp;</strong><s>￥1299</s>
                        <br>
                        <span class="list-price">好货内部价</span>
                    </li>
                    <li>
                        <div class="list-wrap">
                            <img src="../../../public/img/sing-icon1.png" alt="">
                            <div class="list-box">
                                <span>特价 </span>
                                <span>仅剩</span>
                                <span style="font-weight:bold;">5</span>
                                <span>天</span>
                            </div>
                        </div>
                        <span class="list-name">时尚按摩筋膜枪</span>
                        <strong>￥1099&nbsp;</strong><s>￥1299</s>
                        <br>
                        <span class="list-price">好货内部价</span>
                    </li>
                    <li>
                        <div class="list-wrap">
                            <img src="../../../public/img/sing-icon1.png" alt="">
                            <div class="list-box">
                                <span>特价 </span>
                                <span>仅剩</span>
                                <span style="font-weight:bold;">5</span>
                                <span>天</span>
                            </div>
                        </div>
                        <span class="list-name">时尚按摩筋膜枪</span>
                        <strong>￥1099&nbsp;</strong><s>￥1299</s>
                        <br>
                        <span class="list-price">好货内部价</span>
                    </li>
                    <li>
                        <div class="list-wrap">
                            <img src="../../../public/img/sing-icon1.png" alt="">
                            <div class="list-box">
                                <span>特价 </span>
                                <span>仅剩</span>
                                <span style="font-weight:bold;">5</span>
                                <span>天</span>
                            </div>
                        </div>
                        <span class="list-name">时尚按摩筋膜枪</span>
                        <strong>￥1099&nbsp;</strong><s>￥1299</s>
                        <br>
                        <span class="list-price">好货内部价</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="list-footer">
            <div class="footer-txt">
                <p>更多内容，敬请期待</p>
            </div>
            <div class="footer-foot">
                <div class="foot-xz">
                    <router-link to='#'>下载APP</router-link>
                    <router-link to='#'>电脑版</router-link>
                </div>
                <div class="foot-copyright">
                    <p>网易公司版权所有 © 1997-2019</p>
                    <p>食品经营许可证：JY13301080111719</p>
                </div>
            </div>
        </div>
        <el-backtop target=".sort-list" style="right: 12px; bottom: 108px; color: #666;"></el-backtop>
    </div>
</template>

<script>
import request from "../../utils/request";
import wyHead from '../../components/wyHead/index.vue'

export default {
    name: 'sort-list',

    methods: {

        getList(){
        request
            .get('http://129.204.72.71:8000/api/category/listmap/group/item')
            .then(res => {
                if(res.status === 0){
                this.lies = res.data
                console.log(res);
                }
            })
        },
    },

    components: {
        wyHead
    },

    created(){
        // 执行
        this.getList()
    }
}
</script>

<style lang="scss">
.sort-list{
    overflow-x: hidden;
    overflow-y: auto;

    .nav{
        height: 30px;
        width: 100%;
        display: flex;
        overflow-x: auto;
        overflow-y: hidden;

            .nav-list{
                height: 100%;
                width: 100%;
                display: flex;
                flex-flow: nowrap;
                background-color: #fff;

                span{
                    display: inline-block;
                    padding: 0 5px;
                    line-height: 30px;
                    font-size: 14px;
                    color: #333;
                    text-align: center;
                    flex: 0 0 auto;
                    margin: 0 13px;
                    position: relative;

                    &.active{
                        color: #ab2b2b;

                        &::before{
                            content: ' ';
                            position: absolute;
                            left: 0;
                            bottom: 0;
                            width: 100%;
                            height: 2px;
                            background-color: #ab2b2b;
                        }
                    }
                }
            }
    }
    .good{

        .good-bt{
            text-align: center;
            height: 40px;
            line-height: 40px;
            padding-top: 10px;
            background: #f4f4f4;

            p{
                color: #333;
                font-size: 14px;
                height: 40px;
                line-height: 40px;
                background: #fff;
            }
        }
        
    }
    .good-list{

        ul{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            padding: 0 8px;

             li{
                padding: 5px;
                width: 187.5px;
                width: 50%;
                box-sizing: border-box;

                img{
                    width: 100%;
                }
                
                .list-wrap{
                    position: relative;
                    padding-bottom: 15px;

                    .list-box{
                        background: #FFE8CD;
                        color: #F48F18;
                        position: absolute;
                        bottom: 0;
                        width: 100%;
                        font-size: 12px;
                        padding: 5px;
                        box-sizing: border-box;
                    }
                }

                .list-name{
                    display: block;
                    color: #333;
                    font-size: 14px;
                    margin: 8px 0;
                }

                strong{
                    color: #b4282d;
                }

                s{
                    color: #999999;
                    font-size: 12px;
                }

                .list-price{
                    display: inline-block;
                    padding: 2px 5px;
                    text-align: center;
                    color: #CE2424;
                    background: rgba(255,255,255,.9);
                    border: 1px solid #CE2424;
                    font-size: 10px;
                    border-radius: 10px;
                    margin: 5px 0;
                }
            }
        }
    }

    .list-footer{
        background: #f4f4f4;

        .footer-txt{
            text-align: center;
            padding: 14px 0;

            p{
                color: #666;
                font-size: 12px;
                position: relative;

                &::before{
                    content: ' ';
                    position: absolute;
                    left: 253px;
                    top: 5px;
                    width: 40px;
                    height: 1px;
                    background-color: #cccccc;
                }

                &::after{
                    content: ' ';
                    position: absolute;
                    left: 82px;
                    top: 5px;
                    width: 40px;
                    height: 1px;
                    background-color: #cccccc;
                }
            }
        }

        .footer-foot{
            background-color: #414141;
            padding: 25px 25px 10px;
            text-align: center;

            .foot-xz{
                margin-bottom: 10px;

                a{
                    display: inline-block;
                    color: #fff;
                    width: 85px;
                    border: 1px solid #999;
                    height: 30px;
                    line-height: 30px;
                    text-align: center;
                    border-radius: 3px;
                    margin: 10px;
                    font-size: 12px;
                }
            }

            .foot-copyright{
                
                p{
                    color: #999999;
                    font-size: 12px;
                    line-height: 17px;
                }
            }
        }
    }

    .el-backtop{
        right: 12px;
        bottom: 108px;
    }
}
</style>