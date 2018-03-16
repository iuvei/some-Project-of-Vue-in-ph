<template>
    <div class="suggest">
        <Back title="意见反馈"></Back>
        <div class="suggest_main">
            <textarea class="suggest_text" style="resize:none" :placeholder="text_data.tip" v-model="user_suggest"></textarea>
            <div class="suggest_upload">


                <!-- <div class="suggest_upload_item">
                    <span>
                        <i class="del_img"> × </i>
                        <img src="" alt=""  >
                    </span>
                </div> -->
                
                <div class="suggest_upload_box">

                    <div class="suggest_upload_inp" >
                        <span>
                            <!-- <img src="" alt="" id="upload_img_add" > -->
                        </span>
                        <input type="file" @change="preview" id="upload_inp_add" >
                    </div>

                </div>

                

            </div>
            <div class="submit_upload" @click="sure_submit">
                提交
            </div>
            <ul class="suggest_relation">
                <li>
                    <img src="../../images/new_m_center/m_qq.png" alt="">
                    <div>
                        <h4>{{text_data.phone}}</h4>
                        <p>{{text_data.phonetime}}</p>
                    </div>
                </li>

                <li>
                    <img src="../../images/new_m_center/m_wechat.png" alt="">
                    <div>
                        <h4>{{text_data.qq}}</h4>
                        <p>{{text_data.qqtime}}</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import Back from '../back/back'
     import axios from  'axios'
    import {alertip, requestOpt, mt_loading_open, mt_loading_close,mt_toast} from 'api/recommend'
     import {mapState, mapActions} from 'vuex'
    export default {
        computed: {
            ...mapState(['user']),
        },
        data(){
            return{
              current_index : 0,
              text_data: {},
              imageUrl : [],
              user_suggest : ''
            }
        },
        components:{
            Back
        },
        mounted(){
            this.get_data_text();
        },
        methods : {
            preview(e) {    
                let file = ''
                if(e.target.files.length <= 1){
                     file = e.target.files[0];
                    //  console.log(file);
                    // console.log(file);
                    if(!file){
                        alertip('请上传正确的图片格式');
                        return;
                    }
                    if(file.type.indexOf('image') < 0 ){
                        alertip('请上传正确的图片格式');
                        return;
                    }

                    // let reader = new FileReader(); 
                    let old_e = e;
                    var that = this;

                    // this.current_index++;
                    let length = $('.suggest_upload_item').length;
                    if(length >= 7){
                        alertip('最多只能上传七张图片');
                        return;
                    }
                    mt_loading_open();
                    // reader.onload=function(e) {  

                        // let html = `
                        //         <div class="suggest_upload_item">
                        //             <span>
                        //                 <i class="del_img"> × </i>
                        //                 <img src="${e.target.result}" alt=""  >
                        //             </span>
                        //         </div>
                        //         `
                        // $(html).insertBefore('.suggest_upload_inp');
                        // console.log(html);
                    // };  
                    // reader.readAsDataURL(file); 
                    
                }
                // 一次上传多张的时候

                else{
                    alertip('一次请选择一张图片');
                }

              
                let param = new FormData();
                // console.log(file);
                param.append('file',file,file.name);
                let config = { // sessionStorage.getItem('token')  this.user.token
                    headers:{'Content-Type':'multipart/form-data', 'Authorization': 'Bearer '+ sessionStorage.getItem('token')}
                };
                axios.post(requestOpt.urlAuth+'uploadfeedback',param,config)
                    .then(res => {
                        if (res.data.status === 1) {
                            // this.imageUrl.push(res.data.data.feedback_url)
                            // console.log(this.imageUrl);

                             let html = `
                                <div class="suggest_upload_item">
                                    <span>
                                        <i class="del_img"> × </i>
                                        <img src="${res.data.data.feedback_url}" alt=""  >
                                    </span>
                                </div>
                                `
                                $(html).insertBefore('.suggest_upload_inp');

                                setTimeout(() => {
                                    this.del_item();
                                }, 20);

                                mt_loading_close();
                        } else {
                        if (res.data.code == -1 || res.data.code == -2 || res.data.code == -3 ) {
                            mt_loading_close();
                            window.sessionStorage.removeItem('userinfo')
                            window.sessionStorage.removeItem('login')
                            window.sessionStorage.removeItem('token')
                            this.$router.push('/login')
                        }
                        mt_toast(res.data.msg)
                        }
                    }).catch(err => {
                    
                })

               
            },

            get_data_text(){
                mt_loading_open()
                let token = this.user.token;
                requestOpt.reqGet('userfeedbackinfo', token, (res)=>{
                    
                    if(res.data.status === 1){
                        // console.log(res);
                        this.text_data = res.data.data
                        mt_loading_close();
                    }
                    else {
                        mt_loading_close()
                        if (res.data.code == -1 || res.data.code == -2 || res.data.code == -3 ) {
                        window.sessionStorage.removeItem('userinfo')
                        window.sessionStorage.removeItem('login')
                        window.sessionStorage.removeItem('token')
                        this.$router.push('/login')

                        }
                    }
                
                },(err)=>{


                })

            },

            sure_submit(){

                let items = $('.suggest_upload_item');
                for(let  i =0 ; i < items.length; i++){
                   let url =  $(items[i]).find('img').attr('src');
                   this.imageUrl.push(url);
                }
                mt_loading_open()
                requestOpt.reqPost('userfeedback', sessionStorage.getItem('token'), {
                    suggest: this.user_suggest,
                    imageUrl : this.imageUrl,
                    version : ''
                },
                
                (res)=>{

                    if (res.data.status === 1) {
                        // this.imageUrl.push(res.data.data.feedback_url)
                        let $items = $('.suggest_upload_item');
                        for(let i = 0; i < $items.length; i++){
                             $($items[i]).remove();
                        }
                        mt_loading_close()
                        this.user_suggest = '';
                        this.current_index = 0,
                        this.imageUrl = [];
                        mt_toast(res.data.msg)

                    } else {
                    if (res.data.code == -1 || res.data.code == -2 || res.data.code == -3 ) {
                        window.sessionStorage.removeItem('userinfo')
                        window.sessionStorage.removeItem('login')
                        window.sessionStorage.removeItem('token')
                        this.$router.push('/login')
                    }
                            mt_toast(res.data.msg)
                    }

                },()=>{})
            },
            del_item(){
                let _imgs = document.querySelectorAll('.del_img');
                let items = document.querySelectorAll('.suggest_upload_item');
                let box = document.querySelector('.suggest_upload_box');
                for(let i= 0; i < items.length+1; i++){
                    if(items[i]){
                        _imgs[i].addEventListener('click',function(e){
                            $(this).parents('.suggest_upload_item').remove();
                            // console.log($(this).parents('.suggest_upload_item'))
                        },false)
                    }
                }
            }
        }

    }
    
</script>

<style lang="stylus">

    .suggest_main{
        margin: 1.3rem .2rem 0 .2rem;

    }
    .suggest_main .suggest_text{
        width:100%;
        height 3.5rem;
        background #fff;
        border: none;
        padding:0.2rem 0.1rem; 
        line-height:0.35rem;
        // box-shadow: 0 0 2px rgba(0,0,0, .1)  
        font-size: 0.28rem; 
        letter-spacing : 0.5px;
    }

    .suggest_text::-webkit-input-placeholder{
        color: #b8b8b8;
        font-size: 0.28rem;
    }
    .suggest_upload{

        width: 100%;
        // height:2rem;
        background: #fff;
        position: relative;
        // padding-top:0.38rem;
        // padding:0.1rem 0;
        padding-bottom: 0.15rem;
        display : flex;
        flex-wrap: wrap;
    }

    .suggest_upload_box{
        display: flex;
        flex-wrap: wrap;
    }
    .suggest_upload_item{
        width:1.5rem;
        height 1.5rem;
        position : relative
        margin-left: .18rem;
        margin-top:0.15rem;
    }
    .suggest_upload_inp{
        width:1.5rem;
        height 1.5rem;
        position : relative
        margin-left: .18rem;
        margin-top:0.15rem;
    }

    .suggest_upload_item span .del_img{
        font-style: normal;
        text-align: center;
        line-height: 0.25rem;
        border-radius: 50%;
        display: inline-block;
        width: 0.3rem;
        height: 0.3rem;
        color: #fff;
        background: #ff3a3b; 
        position: absolute;
        right: 0;
        top: 0;
        z-index: 2;
    }

    .suggest_upload span{
        display : inline-block;
        width: 100%;
        height: 100%;
        left : 0;
        top: 0;
        border : 2px solid #ededed;
        position: absolute ;
    }

    .suggest_upload span>img{
        width: 100%;
        height 100%;   
        position: absolute; 
        // z-index: 1;
    }
    .suggest_upload .suggest_upload_inp span::before{
        content : "";
        display: inline-block;
        width: 60%;
        height: 1.5px;
        background: #ededed;     
        position: absolute;
        left:20%;
        top:48%;
    }
    .suggest_upload .suggest_upload_inp span::after{
        content : "";
        display: inline-block;
        width: 1.5px;
        height: 60%;
        background: #ededed;     
        position: absolute;
        left:48%;
        top:20%;
    }

    .suggest_upload input{
        left:5%;
        top:5%;
        position: absolute;
        width:90%;
        height 90%;
        background: #fff;
        background-color:transparent;
        opacity : 0;
        z-index: 1;
    }

    .suggest .submit_upload{

        // margin: 0 .2rem;
        height: 0.75rem;
        background: #d63138;
        color: #fff;
        font-size : 0.26rem;
        text-align: center;
        line-height 0.75rem;
        border-radius: 5px;
        margin-top: 0.4rem;
    }
    .suggest_relation{
        margin-top: 0.4rem;
    }
    .suggest_relation li{
        display: flex;
    }

    .suggest_relation li img{
        display: block;
        width: 0.6rem;
        height:0.6rem;
    }

    .suggest_relation li + li{
        margin-top: 0.4rem;
    }
    .suggest_relation li h4{
        margin-bottom:0.1rem;
    }
    .suggest_relation li h4, .suggest_relation li p{
        color: #737373;
        font-size: 0.24rem;
    }
</style>

