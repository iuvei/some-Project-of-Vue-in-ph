<template>
    <div class="share_freiends">
        <Back title="邀请好友"></Back>
        <div class="share_wrap">
            <div class="share_counts">
                <p>邀请朋友：<span>{{ res_data.invFriendNum }}</span>个</p>
                <p>累计收益：<span> {{ res_data.invFriendReward }}</span>元</p>
            </div>

            <div class="shar_body">
                <img :src="res_data.qrcode" alt="邀请码二维码">
                <h4>我的邀请码</h4>
                <p>{{ res_data.invCode }}</p>
                <button @click="share_code">将邀请码发送给朋友</button>
                <h2>{{res_data.sharecontent}}</h2>
            </div>

            <div class="shar_footer">
                <h2>{{ res_data.infotitle }}</h2>
                    <div>
                        <p v-for="(item,index) in res_data.infocontent" :key="index">
                            {{index+1}}、{{item}}
                        </p>
                    </div>
            </div>
        </div>

        <!-- <shareItem :isShow="isShow"></shareItem> -->

        <div class="shareChild" :class="{'active' : isShow}">
            <div class="shareChild_bg" @click="cancel_show" v-show="isShow"> 

            </div>

            <div class="shareChild_inner">
                <h4>分享</h4>
                <ul id="shareChild_inner_ul_1">
                    <!-- <li v-for="(item,index) in dataList" :key="index" @click="go_share(index,item)" :id="'share_item_'+index">
                        <img :src="item.picUrl" :alt="item.title">
                        <p>{{ item.title }}</p>
                    </li> -->
                </ul>
                <div class="copy_text" @click="go_share(3)">

                </div>
                <button @click="cancel_show">取消</button>
            </div>
        </div>
    </div>
</template>


<script>
    import Back from '../back/back'
    import soshm from 'soshm' 
    // import shareItem from './shareItem'
    import {alertip, requestOpt, mt_loading_open, mt_loading_close,mt_toast} from 'api/recommend'
    import {mapState, mapActions} from 'vuex'
    import  { CopyVal } from 'api/recommend'
    export default{

        components:{
            Back,
            // shareItem,
            
        },
        data(){
            return{
                isShow: false,
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
                ],
                res_data: {}

            }
        },
        methods:{

            share_code(){
                this.isShow = true;
                let str = window.location;
                this._init_soshm('#shareChild_inner_ul_1',{
                    url: str,
                    title : document.title + '||' + this.res_data.sharecontent,
                    digest : document.title + '||' + this.res_data.sharecontent,
                    pic: ''
                });
                 
                let html = `
                        <div>
                            <img src="${require('../../images/new_m_center/share_copy.jpg')}" style="width:50px;height:50px;">
                            <p>复制链接</p>
                        </div>
                `
                $('.copy_text').append(html);
                
            },
       
            cancel_show(){
                this.isShow = false;
                $('.copy_text').empty();
            },
            go_share(index,item){
                if(index == 3){
                        CopyVal(window.location);
                }
            },

            _init_soshm(id,obj){
              soshm(id, {
                // 分享的链接，默认使用location.href
                url: obj.url || '',
                // 分享的标题，默认使用document.title
                title: obj.title || '',
                // 分享的摘要，默认使用<meta name="description" content="">content的值
                digest: obj.digest || '',
                // 分享的图片，默认获取本页面第一个img元素的src
                pic: obj.pic || '',
                // 默认显示的网站为以下六个个,支持设置的网站有
                // weixin,weixintimeline,qq,qzone,yixin,weibo,tqq,renren,douban,tieba
                sites: [ 'weibo','weixin', 'weixintimeline'],
                names : ['新浪微博', '微信好友', '微信朋友圈']
                });
            },

            _get_res_data(){
                requestOpt.reqGet('userinvfriendinfo',sessionStorage.getItem('token'),(res)=>{
                    // console.log(res);
                    if (res.data.status === 1) {
                        this.res_data =  res.data.data;
                        console.log(res.data.data);
                    } else {
                        if (res.data.code == -1 || res.data.code == -2 || res.data.code == -3 ) {
                            window.sessionStorage.removeItem('userinfo')
                            window.sessionStorage.removeItem('login')
                            window.sessionStorage.removeItem('token')
                            this.$router.push('/login')
                        }
                                mt_toast(res.data.msg)
                    }

                },(err)=>{
                    if(err){
                        alertip(err.data.msg)
                    }
                    // alert('网络连接失败')
                })
                
            }

        },
        mounted(){
            this._get_res_data();
        },

    }
    
</script>

<style lang="stylus" scoped>

    .share_freiends{
        height:100%;
        background : #fff;
    }
    .share_wrap{

        margin-top: 0.88rem;    
    }
    .share_counts{
        height: 0.88rem;
        margin: 0 .2rem;
        border-bottom: 1px solid #ebebeb;
        display flex;
        justify-content : space-between;
        line-height 0.88rem;
    }

    .share_counts p{
        
        color: #9c9c9c;
        font-size : 0.3rem;
    }

    .share_counts p span{
        color: #d63138;
    }

    .shar_body{
        padding: 0.8rem;
        background #fff;
    }

    .shar_body h2{
        font-weight:normal;
        font-size: 0.3rem;
        margin-top:0.2rem;
        text-align:center;
        
    }

    .shar_body img{
        display:block;
        margin: 0 auto;
        width: 3rem;
        height: 3rem;
        border: 2px solid #ebebeb; 
    }

    .shar_body h4{
        text-align: center;
        font-size 0.32rem;
        color: #323232;
        margin: 0 auto;
        margin-top:0.4rem;
    }
    .shar_body p{
        text-align: center;
        font-size 0.34rem;
        color: #d63138;
        margin: 0 auto;
        margin-top:0.25rem;
    }
    .shar_body button{
        display : block;
        background : #d63138;
        color: #fff;
        border: none ;
        border-radius: 5px;
        width: 4rem;
        height : 0.7rem;
        margin: 0 auto;
        font-size : 0.28rem;
        margin-top: 0.5rem;
    }

    .shar_footer{
        margin: 0 0.2rem ;
    }
    .shar_footer h2{
        color: #9c9c9c;
        font-size : 0.35rem;
    }
    .shar_footer>div>p{
        margin-top: 0.3rem;
        line-height .3rem;
        color: #9c9c9c;
        font-size : 0.25rem;
    }

    .share_freiends  .shareChild{
        
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
    }

    // ------------底部分享-------------


    .shareChild{
        height: 0;
    
    }

    .shareChild.active{
        height : 100%;
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
        transform : translate3d(0, 100%,0);
        transition : all .3s;
    }

    .shareChild.active .shareChild_inner{

            transform : translate3d(0, 0,0);
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

    .copy_text{
        margin-top:20px;
        margin-left:9.5%;
    }
    .copy_text div img{
        width: 40px;
        height:40px;    
    }

    .copy_text div p{
        text-align:center;
    }



    // .slide-enter-active, .slide-leave-active {
    //     transition : all 0.3s;
    // } 

    // .slide-enter, .slider-leave-to{
    //     transform: translate3d(0,100%,0);
    // }
</style>


