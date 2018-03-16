<template> 
        <div class="cont-left-bot">
            <h4>
                <span>开奖公告</span>
                <i @click="go_lottery">更多</i>
            </h4>
            
            <div class="cont_main_lot">

                <div class="main_lot_item clearfix" v-for="(items, indexs) in all_cp_list" :key="items.lot_type_id" v-if="(items.lot_type_id != 4 && items.lot_type_id != 8 && items.lot_type_id != 9 && items.lot_type_id != 10 && items.lot_type_id != 20 && items.lot_type_id != 21 && items.lot_type_id != 22 && items.lot_type_id != 23 && items.lot_type_id != 24)">
                    <p> 
                        <span>{{ items.name }}</span>
                        <i>第 {{ items.issue_number }} 期</i>
                    </p>
                    <h5> {{ items.curr_draw_time }} </h5>
                    <h2 v-if="items.number1">
                        <span v-if="items.number1"> {{ items.number1}}</span>
                        <span v-if="items.number2"> {{ items.number2}} </span>
                        <span v-if="items.number3"> {{ items.number3}} </span>
                        <span v-if="items.number4"> {{ items.number4}} </span>
                        <span v-if="items.number5"> {{ items.number5}} </span>
                        <span v-if="items.number6"> {{ items.number6}} </span> 
                        <span v-if="items.number7"> {{ items.number7}}</span>
                        <span v-if="items.number8"> {{ items.number8}}</span>
                        <span v-if="items.number9"> {{ items.number9}}</span>
                        <span v-if="items.number10">{{ items.number10}}</span> 
                    </h2>
                    <h2 v-else class="loading_kaijiang">
                        <strong>正在开奖</strong>
                        <i class="loading_kaijiang_i">
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                        </i>
                    </h2>

                    <ul class="clearfix">
                        <li @click="go_trend(items.lot_type_id , items.name, items.code)">走势</li>
                        <li @click="go_bet(2,indexs,items.lot_type_id,items.code,items.name,items.is_hot,items.frequency)">投注</li>
                        <li @click="go_son_lottery(items.lot_type_id , items.name, items.code)">历史开奖</li>
                    </ul> 
                </div>

                <div class="main_lot_item clearfix" v-for="(items, indexs) in all_cp_list" :key="items.lot_type_id" v-if="(items.lot_type_id == 4)">
                    <p> 
                        <span>{{ items.name }}</span>
                        <i>第 {{ items.issue_number }} 期</i>
                    </p>
                    <h5> {{ items.curr_draw_time }} </h5>
                    <h2 v-if="items.number1">
                        <span v-if="items.number1"> {{ items.number1}}</span>
                        <span v-if="items.number2"> {{ items.number2}} </span>
                        <span v-if="items.number3"> {{ items.number3}} </span>
                        <span v-if="items.number4"> {{ items.number4}} </span>
                        <span v-if="items.number5"> {{ items.number5}} </span>
                        <span v-if="items.number6" style="background:#0047aa;"> {{ items.number6}} </span> 
                        <span v-if="items.number7" style="background:#0047aa;"> {{ items.number7}}</span>
                    </h2>
                    <h2 v-else class="loading_kaijiang">
                        <strong>正在开奖</strong>
                        <i class="loading_kaijiang_i">
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                        </i>
                    </h2>
                    <ul class="clearfix">
                        <li @click="go_trend(items.lot_type_id , items.name, items.code)">走势</li>
                        <li @click="go_bet(2,indexs,items.lot_type_id,items.code,items.name,items.is_hot,items.frequency)">投注</li>
                        <li @click="go_son_lottery(items.lot_type_id , items.name, items.code)">历史开奖</li>
                    </ul> 
                </div>

                 <div class="main_lot_item clearfix" v-for="(items, indexs) in all_cp_list" :key="items.lot_type_id" v-if=" (items.lot_type_id == 8 || items.lot_type_id == 9  || items.lot_type_id == 20 ) ">
                    <p> 
                        <span>{{ items.name }}</span>
                        <i>第 {{ items.issue_number }} 期</i>
                    </p>
                    <h5> {{ items.curr_draw_time }} </h5>
                    <h2 v-if="items.number1">
                        <img v-show="items.number1" :src="items.number1 | transImg">
                        <img v-show="items.number2" :src="items.number2 | transImg">
                        <img v-show="items.number3" :src="items.number3 | transImg">
                    </h2>
                    <h2 v-else class="loading_kaijiang">
                        <strong>正在开奖</strong>
                        <i class="loading_kaijiang_i">
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                        </i>
                    </h2>

                    <ul class="clearfix">
                        <li @click="go_trend(items.lot_type_id , items.name, items.code)">走势</li>
                        <li @click="go_bet(2,indexs,items.lot_type_id,items.code,items.name,items.is_hot,items.frequency)">投注</li>
                        <li @click="go_son_lottery(items.lot_type_id , items.name, items.code)">历史开奖</li>
                    </ul> 
                </div>

                <div class="main_lot_item clearfix" v-for="(items, indexs) in all_cp_list" :key="items.lot_type_id" v-if="(items.lot_type_id == 21 ||  items.lot_type_id == 22)">
                    <p> 
                        <span>{{ items.name }}</span>
                        <i>第 {{ items.issue_number }} 期</i>
                    </p>
                    <h5> {{ items.curr_draw_time }} </h5>
                    <h2 v-if="items.number1">
                        <span v-show="items.number1"> {{ items.number1 }} </span> 
                            + 
                        <span v-show="items.number2"> {{ items.number2 }} </span> 
                            + 
                        <span v-show="items.number3"> {{ items.number3 }} </span>
                            =
                        <span v-show="items.number4" style="background:#0047aa;"> {{ items.number4 }} </span>
                    </h2>
                    <h2 v-else class="loading_kaijiang">
                        <strong>正在开奖</strong>
                        <i class="loading_kaijiang_i">
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                        </i>
                    </h2>

                    <ul class="clearfix">
                        <li @click="go_trend(items.lot_type_id , items.name, items.code)">走势</li>
                        <li @click="go_bet(2,indexs,items.lot_type_id,items.code,items.name,items.is_hot,items.frequency)">投注</li>
                        <li @click="go_son_lottery(items.lot_type_id , items.name, items.code)">历史开奖</li>
                    </ul> 
                </div>


                <div class="main_lot_item clearfix" v-for="(items, indexs) in all_cp_list" :key="items.lot_type_id" v-if="(items.lot_type_id == 23 || items.lot_type_id == 24)">
                    <p> 
                        <span>{{ items.name }}</span>
                        <i>第 {{ items.issue_number }} 期</i>
                    </p>
                    <h5> {{ items.curr_draw_time }} </h5>
                    <h2 v-if="items.number1">
                        <span v-if="items.number1" class="bo_se_span"> {{ items.number1}}</span>
                        <span v-if="items.number2" class="bo_se_span"> {{ items.number2}} </span>
                        <span v-if="items.number3" class="bo_se_span"> {{ items.number3}} </span>
                        <span v-if="items.number4" class="bo_se_span"> {{ items.number4}} </span>
                        <span v-if="items.number5" class="bo_se_span"> {{ items.number5}} </span>
                        <span v-if="items.number6" class="bo_se_span"> {{ items.number6}} </span> 
                        <span v-if="items.number7" class="bo_se_span"> {{ items.number7}}</span>
                        <span v-if="items.number8" class="bo_se_span"> {{ items.number8}}</span>
                        <span v-if="items.number9" class="bo_se_span"> {{ items.number9}}</span>
                        <span v-if="items.number10" class="bo_se_span">{{ items.number10}}</span> 
                    </h2>
                    <h2 v-else class="loading_kaijiang">
                        <strong>正在开奖</strong>
                        <i class="loading_kaijiang_i">
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                        </i>
                    </h2>

                    <ul class="clearfix">
                        <li @click="go_trend(items.lot_type_id , items.name, items.code)">走势</li>
                        <li @click="go_bet(2,indexs,items.lot_type_id,items.code,items.name,items.is_hot,items.frequency)">投注</li>
                        <li @click="go_son_lottery(items.lot_type_id , items.name, items.code)">历史开奖</li>
                    </ul> 
                </div>

            </div>
        </div>
</template>


<script>

    import { messageBox , Loading } from 'element-ui';
    import { requestOpt, el_tip } from '../../api/recommend'
    export default{
        name : 'SmallBet',
        components:{

        },
        data(){
            return{
                all_cp_list:[]
            }
        },
        methods :{
            
            getData() {
                this.all_cp_list = JSON.parse(sessionStorage.getItem('cp_data_list'));
                // if(!this.all_cp_list){
                    requestOpt.reqnoGet('betting_list_v1?page=1&frequency=-1&is_hot=-1', 
                        (res)=>{
                            if(res.data.status == 1 || res.status == 200){
                                this.all_cp_list = res.data.data.list;
                                sessionStorage.setItem('cp_data_list', JSON.stringify(res.data.data.list));
                            }else if(res.data.status == 0 && res.data.code == -2){
                                el_tip(res.data.msg + ' 请重新登录');
                                sessionStorage.removeItem('user')
                                setTimeout(()=>{
                                    window.location.reload();
                                    this.$root.bus.$emit("sendData",true);
                                },1000)
                            }else {
                                el_tip(res.data.msg)
                            }
                           
                        }, (err)=>{
                            if(err.data){
                                 el_tip(err.data.msg)
                            }
                           
                    })

                    setTimeout(() => {
                        this.define_bo_se('.bo_se_span');
                    }, 60);
                // }
               
            },
            go_lottery(){
                this.$router.push('/lottery')
            },
            go_son_lottery(id,name,code){
                // console.log(window.location.href);
                sessionStorage.setItem('cp_title',name);
                var str = window.location.href;
                let index = str.indexOf('#');
                str = str.substr(0,index+1);
                str += 'lottery' + '/' + id +  '/' + code;
                // console.log(str);
                // console.log(name);
                window.open(str);
            },
            go_trend(id,name,code){
                let str = window.location.href;
                let index = str.indexOf('#');
                str = str.substr(0,index+1);
                str += '/' +  code + '/' + id ;
                // console.log(str);
                window.open(str);
                // this.$router.push('./trendpage')
            },
            go_bet(p_i,c_i,id,code,lotName,is_hot,frequency){

                if(is_hot == 1){
                    p_i = 0;
                }

                if(frequency == 0){
                    p_i = 1;
                }
                if(frequency == 1){
                    p_i = 2;
                }

                if(code.indexOf('28') != -1){
                     p_i = 3;
                }
                let obj = {};
                obj.p_i = p_i;
                obj.c_i = c_i;
                obj.id = id;
                obj.code = code;
                obj.lotName = lotName;
                window.sessionStorage.setItem('lotId', id);
                this.$root.bus.$emit('send_bet_tab_num',obj);
                this.$router.push('/betcenter');
            },
            define_bo_se(className){
                let  hong_bo = ['01', '02','07','08','12', '13' , '18' , '19' , '23' , '24' , '29' , '30' , '34' , '35' , '40' , '45' ,  '46'];
                let lan_bo =  ['03' ,'04' ,'09' ,'10' ,'14' ,'15' ,'20' ,'25' ,'26' ,'31' ,'36' ,'37' ,'41' ,'42' ,'47' ,'48' ];
                let lv_bo = ['05' ,  '06' ,  '11' ,  '16' ,  '17' ,  '21' ,  '22' ,  '27' ,  '28' ,  '32' ,  '33' ,  '38'  ,  '39' ,  '43' ,  '44' ,  '49']
                let $span_s = $(className);
                // console.log($(className));
                for(let i = 0; i < $span_s.length; i++){
                    let text = $span_s[i].innerText.trim();
                //    console.log(text.length);
                    for(let x = 0; x < hong_bo.length; x++){
                        if(text == hong_bo[x]){
                            // console.log('-----111111----------')
                            $span_s[i].classList.add('hong_bo');
                        }
                    }
                    for(let x = 0; x < lan_bo.length; x++){
                        if(text == lan_bo[x]){
                            // console.log('-----22222----------')
                            $span_s[i].classList.add('lan_bo');
                        }
                    }
                    for(let x = 0; x < lv_bo.length; x++){
                        if(text == lv_bo[x]){
                            // console.log('-----3333333----------')
                            $span_s[i].classList.add('lv_bo');
                        }
                    }

                }
            },
        },
        mounted(){
            this.getData();
            setInterval(()=>{
               this.getData();
            },10000)
        },
        filters: {
            transImg: function(val) {
            var imgUrl1 = require("../../image/ks@1.png");
            var imgUrl2 = require("../../image/ks@2.png");
            var imgUrl3 = require("../../image/ks@3.png");
            var imgUrl4 = require("../../image/ks@4.png");
            var imgUrl5 = require("../../image/ks@5.png");
            var imgUrl6 = require("../../image/ks@6.png");
            if (val == 1) {
                val = imgUrl1;
            } else if (val == 2) {
                val = imgUrl2;
            } else if (val == 3) {
                val = imgUrl3;
            } else if (val == 4) {
                val = imgUrl4;
            } else if (val == 5) {
                val = imgUrl5;
            } else if (val == 6) {
                val = imgUrl6;
            }
            return val;
            }
        }
    }

</script>

<style scoped>
    /* 标题 */
    .cont-left-bot{
        width: 100%;
        background: #fff;
        margin-top: 10px;
    }

    .cont-left-bot>h4{
        width: 100%;
        height: 40px;
        border-bottom: 1px solid #0047aa;
        line-height: 40px;
        display: flex;
        justify-content: space-between;
        padding: 0 10px;
        box-sizing: border-box;
    }

    .cont-left-bot>h4> span{
        font-size: 15px;
        font-weight: 900;
        color: #0047aa;
    }
     .cont-left-bot>h4>i{
         font-size: 15px;
         color: #0047aa;
         font-style: normal;
         cursor: pointer;
     }

    /* 内容开始 */

    .cont_main_lot{
        
        height: 320px;
        overflow-y: scroll;
        overflow-X : hidden;
    }

    .main_lot_item p{
        padding: 10px  10px 5px 10px;
        display: flex;
        justify-content: space-between;
    }
    .main_lot_item {
        border-bottom: 1px dashed #ccc;
    }

    .main_lot_item p span{
        font-size: 12px;
        color: #595959;
        font-weight: 900;
    }

    .main_lot_item p i{
        font-size: 12px;
        color: #595959;
        font-style: normal;
    }

    .main_lot_item h5{
        display: flex;
        justify-content: flex-end;
        padding-right: 10px;
        margin-bottom: 5px;
        color: #9a9a9a;
    }
     .main_lot_item h2,  .main_lot_item h3{
         padding-left: 10px;
     }
    .main_lot_item h2 span, .main_lot_item h3 span{
        display: inline-block;
        width: 24px; height: 24px;
        background: #d50000;
        line-height: 24px;
        text-align: center;
        color: #fff;
        border-radius: 50%;
        font-size: 14px;
        margin-bottom: 5px;
    }
    .main_lot_item ul{
        float : right;
        margin: 10px  0;
    }
    .main_lot_item ul li{
        float: left;
        border-left: 1px solid #aaa;
        padding:0 10px;
        font-size: 13px;
        cursor: pointer;
        color:#000;
    }

    .main_lot_item ul li:hover{
        color : #595959;
    }
    .main_lot_item h2{
        font-size:14px;
        font-weight:normal;
    }
    .main_lot_item h2 strong{
        font-size:14px;
    }

    .main_lot_item h2 img{
        width:28px;
        height:28px;
        vertical-align: middle;
        /* box-shadow: 0px 3px 3px rgba(0,0,0,.3);
        border-radius:5px;  */
    }


.loading_kaijiang{
    position:relative;
    height:30px;
    line-height:30px;
}
.loading_kaijiang>strong{
    font-weight: normal;
    position:absolute;
    left :10px;
    top:50%;
    transform: translateY(-50%);
}

    /* 开奖加载图标  */

.loading_kaijiang_i{
        display:flex;
        height: 5px;
        line-height:5px;
        position:absolute;
        left :74px;
        bottom:7px;
        /* transform: translateY(-50%); */
        /* margin: 0 auto; */
        /* margin-top:100px; */
        /* text-align: center; */
        }
.loading_kaijiang_i>i{
    display: inline-block;
    width: 3.2px;
    height: 3.2px;;
    margin-right: 2px;
    border-radius:2px;
    background: #ccc;
    -webkit-animation: load 1.04s ease infinite;
}
.loading_kaijiang_i i:last-child{
    margin-right: 0px; 
}
@-webkit-keyframes load{
    0%{
        background: #feb505;
    }
    100%{
       background: #ccc;
    }
}
.loading_kaijiang i:nth-child(1){
    -webkit-animation-delay:0.2s;
}
.loading_kaijiang i:nth-child(2){
    -webkit-animation-delay:0.4s;
}
.loading_kaijiang i:nth-child(3){
    -webkit-animation-delay:0.6s;
}
.loading_kaijiang i:nth-child(4){
    -webkit-animation-delay:0.8s;
}
.loading_kaijiang i:nth-child(5){
    -webkit-animation-delay:1s;
}



/* 开奖球波色 */
.main_lot_item h2 span.hong_bo, .main_lot_item h3 span.hong_bo{
   background:#df0000;
}
.main_lot_item h2  span.lan_bo, .main_lot_item h3  span.lan_bo{
   background:#0047aa;
}
.main_lot_item h2  span.lv_bo, .main_lot_item h3  span.lv_bo{
   background:#187e00;
}


</style>


