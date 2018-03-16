<!--代理说明-->
<template>
  <div class="agent-ins-content">
    <back title="帮助中心" go-back="true"></back>
    <!--<div style="width: 100%;height: 100%;display: block">-->
    <!--<img src="http://120.76.211.1:8093/proxy_instruction" alt="" style="width: 100%;height: 100%;display: block">-->
    <!--</div>-->
    <div class="big_wrap" >
         <ul class="header">
             <!-- <li v-for="(item,index) in 4" :key="index">{{item}}</li> -->
        </ul>
        <div class="wrap"></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import axios from "axios";
import Back from "@/components/back/back";
import {
  alertip,
  requestOpt,
  mt_loading_open,
  mt_loading_close
} from "api/recommend";
import { mapState } from "vuex";

export default {
  components: {
    Back
  },
  data() {
    return {
      proxy_ins: ""
    };
  },
  created() {
  
  },
  mounted(){
    mt_loading_open();
    this.get_data();
    setTimeout(() => {
      mt_loading_close();
    }, 500);

  },
  computed: mapState({ user: state => state.user }),
  methods: {
    // getProxyInstruction() {
    //   axios
    //     .get(requestOpt.host + "api/v1/help_page")
    //     .then(res => {
    //       if (res) {
    //         this.proxy_ins = res.data;
    //       } else {
    //         //              alertip(res.data.msg)
    //       }
    //       mt_loading_close();
    //     })
    //     .catch(err => {
    //       //            alertip(err)
    //     });
    // },
    get_data(){
            const $my_pro = {
                ajax(obj) {
                    var xhr = new XMLHttpRequest();
                    if (obj.type == 'get') {
                        if (obj.data) {
                            obj.url += '?';
                            obj.url += obj.data;
                        }
                        obj.data = null;
                    }
                    xhr.open(obj.type, obj.url);
                    if (obj.type == 'post') {

                        xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');

                    }
                    xhr.onreadystatechange = function () {
                        if (xhr.readyState == 4 && xhr.status == 200) {
                            obj.success(xhr.responseText);
                        } else {
                            // alert('数据请求失败')
                        }
                    }
                    xhr.send(obj.data);
                },
                create_dom(){
                    let headers = document.querySelector('.header');
                    let header_str = '';
                    let all_content = '';
                    let wrap = document.querySelector('.wrap');
                    for(let k in $my_pro.all_data){
                        let content_begin = '<div class="content">';
                        header_str += '<li>' + k + '</li>'
                        $my_pro.all_data[k].forEach((item,index) => {
                            let box = '<div class="cont_wrap">';
                            content_begin += box;
                            let title_ = '<h4>'+ (index + 1 ) + '、' + item.title + '</h4>'
                            content_begin += title_;
                            let inner_box = '<div class="inner_box">';
                            content_begin += inner_box;
                            // console.log(item,index);
                            content_begin += item.content;
                            let time = '<i>'+ item.create_time + '</i>';
                            content_begin += time;
                            content_begin += '</div>';
                            content_begin += '</div>';
                        });
                        content_begin += '</div>'
                        all_content += content_begin;
                    }
                    headers.innerHTML = header_str
                    wrap.innerHTML = all_content;
                },

                switch_tab(){
                    let headers = document.querySelector('.header');
                    let head_str = '';
                    let all_inner_box = document.getElementsByClassName('inner_box');  
                    let all_h4 = document.getElementsByTagName('h4');  
                    let contents = document.getElementsByClassName('content');
                    headers.children[0].classList.add('active');
                    contents[0].classList.add('active');
                    for(let i = 0; i < headers.children.length; i++){
                        headers.children[i].addEventListener('click',function(){
                            for(let j = 0; j < headers.children.length; j++){
                                headers.children[j].classList.remove('active');
                                contents[j].classList.remove('active');
                            }

                            headers.children[i].classList.add('active');
                            contents[i].classList.add('active');
                        },false) 
                    }
                    for(let i = 0; i < all_inner_box.length; i++){
                        let flag = true;
                        all_h4[i].addEventListener('click',function(e){
                            if(flag){
                                all_inner_box[i].classList.add('active');
                                flag = !flag;
                            }else{
                                all_inner_box[i].classList.remove('active');
                                flag = !flag;
                            }
                        },false)
                    }
                }

            }

            $my_pro.all_data = JSON.parse(sessionStorage.getItem('new_help_page'));
            if(!$my_pro.all_data){
                $my_pro.ajax({
                    type: 'get',
                    url: 'https://soarg888.com/api/v1/help_list',
                    data: null,
                    success(res) {
                        $my_pro.all_data = JSON.parse(res).data.list;
                        sessionStorage.setItem('new_help_page',JSON.stringify($my_pro.all_data));
                        // $my_pro.all_data
                        // console.log($my_pro.all_data);
                        $my_pro.create_dom();
                        $my_pro.switch_tab();
                    }
                 })
            }else{
                $my_pro.create_dom();
                $my_pro.switch_tab();
            }

         
    }
  }
};
</script>

<style>
.big_wrap{
    padding-top:0.88rem;
}
    /* 基础样式及媒体查询 */
     
      /* 布局样式 */
      /* tab栏样式 */
      
       body{
           background: #f3f3f3;
       }
       ul,li{
           list-style: none;
       }
  
       .header{
           display: flex;
           justify-content: space-around;
           background: #fff;
           height: 0.88rem;
           line-height: 0.88rem;
           position: fixed;
           width: 100%;
           top:0.88rem;
           margin-bottom: 0.88rem;
           border-bottom: 1px solid #ddd;
           z-index: 999;
       }
       .header li{
        font-size: 0.28rem;
        color:#000;
        /* display: none; */
        }
        .header li.active{
            border-bottom: 2px solid  #fd0000;
            color: #fd0000;
        }
        .content{
            display: none;
        }
        .content.active{
            display:block;
        }
        .content{
            padding: 0.2rem;
            margin-top:.3rem;
            background:#fff;
            border-radius: .2rem;
            border:1px solid #ddd;
            box-shadow: 0 0 5px rgba(0,0,0,.3);
        }
      
        .content h4{
            font-size: 0.3rem;
            color:#000;
            margin-bottom: .15rem;
            font-weight: 700;
            
        }
        .content p{
            font-size: 0.28rem;
            margin-bottom: .2rem;
            line-height: .4rem;
        }
        .content i{
            font-style: normal;
            font-size: 0.26rem;
            color:#bbb;
            display: inline-block;
            height: 30px;
        }
    
        .inner_box{
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            margin: .2rem;
            border-radius: .1rem;
            height: auto;
            height: 0;
            /* opacity: 0; */
            overflow: hidden;
            /* transform: scaleY(0); */
            transition: all .1s;
            transform-origin: center top 0;
        }
        .inner_box.active{
           
            height: auto;
            /* transform: scaleY(1); */
            transition: all .1s;
           
        }
      
        .cont_wrap{
            margin-bottom: .2rem;
        }

       .wrap{
           margin-top:1.2rem;
       }
       
</style>

