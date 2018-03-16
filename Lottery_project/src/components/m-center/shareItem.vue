<template>
    <div class="shareChild" v-show="isShow">
        <div class="shareChild_bg" @click="cancel_show">

        </div>
        <transition name="slide">
            <div class="shareChild_inner">
                <h4>分享</h4>
                <ul>
                    <li v-for="(item,index) in dataList" :key="index">
                        <img :src="item.picUrl" :alt="item.title">
                        <p>{{ item.title }}</p>
                    </li>
                </ul>
                <button>取消</button>
            </div>
        </transition>
    </div>
</template>

<script>
   

    export default{
        // computed: {
        //     isShow(){
        //         return this.isShow;
        //     }
        // },
        props:{
            isShow :{
                type : Boolean,
                default : false
            }
        },

        data(){
            return{
                dataList : [
                    {
                        title: '新浪微博',
                        picUrl : require('../../images/new_m_center/share_sina.png')
                    },
                    {
                        title: '微信好友',
                        picUrl : require('../../images/new_m_center/share_wechat.png')
                    },
                    {
                        title: '微信朋友圈',
                        picUrl : require('../../images/new_m_center/share_friends_circle.jpg')
                    },
                    {
                        title: '复制链接',
                        picUrl : require('../../images/new_m_center/share_copy.jpg')
                    },
                ]

            }
        },
        methods:{
            cancel_show(e){
                this.isShow = false;
                this.$root.bus.$emit('share_show',false);
            }
        },
       

    }
    
</script>

<style lang="stylus" >

    .shareChild{

        height 100%;
        // background : rgba(0,0,0, .4);
        
    }

    .shareChild_bg{
        width 100%;
        height 100%;
        background : rgba(0,0,0, .4);
        position : fixed;
        left: 0;
        top:0;
    }

    .shareChild .shareChild_inner{
        position : fixed;
        bottom: 0;
        background : #fff;
        width: 100%;
        padding: 0.3rem;
    }

    .shareChild .shareChild_inner h4{
        
        text-align: center;
        font-size : 0.35rem;
        margin-bottom: 0.4rem;
    }
    .shareChild .shareChild_inner ul {
       display : flex;
       flex-wrap : wrap;
    }
    .shareChild .shareChild_inner li{
        width: 33.3%;
    }
    .shareChild .shareChild_inner li img{
        display : block;
        width: 1rem;
        height: 1rem;
        margin: 0 auto;
    }
    .shareChild .shareChild_inner li p{
        display : block;
       text-align: center;
       margin: 0.2rem 0;
    }

    .shareChild_inner button{
        height : 0.8rem;    
        background: #d9d9d9;
        border: none;
        border-radius : 5px;
        width: 100%;
        margin : 0.3rem 0;
    }


    .slide-enter-active, .slide-leave-active {
        transition : all 0.3s;
    } 

    .slide-enter, .slider-leave-to{
        transform: translate3d(0,100%,0);
    }
</style>

