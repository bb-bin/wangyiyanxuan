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
                        <img src="../../../public/img/sing-icon1.png" alt="">
                        <div>特价 仅剩6天</div>
                        <span>时尚按摩筋膜枪</span>
                        <strong>￥1099</strong><s>￥1299</s>
                        <p>好货内部价</p>
                    </li>
                    <li>
                        <img src="../../../public/img/sing-icon1.png" alt="">
                        <div>特价 仅剩6天</div>
                        <span>时尚按摩筋膜枪</span>
                        <strong>￥1099</strong><s>￥1299</s>
                        <p>好货内部价</p>
                    </li>
                    <li>
                        <img src="../../../public/img/sing-icon1.png" alt="">
                        <div>特价 仅剩6天</div>
                        <span>时尚按摩筋膜枪</span>
                        <strong>￥1099</strong><s>￥1299</s>
                        <p>好货内部价</p>
                    </li>
                    <li>
                        <img src="../../../public/img/sing-icon1.png" alt="">
                        <div>特价 仅剩6天</div>
                        <span>时尚按摩筋膜枪</span>
                        <strong>￥1099</strong><s>￥1299</s>
                        <p>好货内部价</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import wyHead from '../../components/wyHead/index.vue'

export default {
    name: 'sort-list',

    components: {
        wyHead
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
                // position: relative;

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
        background: green;
        overflow: hidden;

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
        overflow: hidden;

        ul{
             li{
                padding: 10px;
                width: 187.5px;
            }
        }
    }
}
</style>