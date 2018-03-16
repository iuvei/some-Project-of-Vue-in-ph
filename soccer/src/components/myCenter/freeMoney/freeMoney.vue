<template>
    <div class="freeMoney">
        <Back :title="head_title"></Back>
        <div class="switch_tab">
            <p @click="switch_tab('1')" :class="{'active' : active_tab==1}">新手任务</p>
            <p @click="switch_tab('2')" :class="{'active' : active_tab==2}">成就奖励</p>
        </div>
        <div class="big_load_more_box">
            <mt-tab-container v-model="active_tab" swipeable>
                <mt-tab-container-item id="1">
                        <div class="cont_tab_1">
                            <p>任务完成：<span> {{ data_list.taskCount}}</span>/{{ data_list.finishCount }}</p>
                            <p>获得奖励：<i>{{ data_list.banlance }}</i></p>
                        </div>
                       <ul>
                           <li v-for="(item,index) in data_list.tasks" :key="index">
                               <span>{{ item.timesType == 0 ? '每天':'单次' }}</span>
                               <p>{{item.name}} <strong>+{{item.banlance}}</strong></p>
                               <i :class="{ 'has_do_it':item.status}" @click="go_bind_account(item,index)" >{{item.status ? '已完成' : '未完成'}}</i>
                           </li>
                       </ul>
                </mt-tab-container-item>
                
                    <mt-tab-container-item id="2" >
                        
                        <div class="load_more_box">
                            <mt-loadmore :top-method="loadTop"  ref="loadmore">  
                            <div class="achieve_data" v-for="(item,index) in achieve_data" :key="index" >
                                <div class="achieve_data_left">
                                    <!-- <img :src="item.imageUrl" alt="" v-if="item.imageUrl"> -->
                                    <img :src="item.imageUrl"   alt="" >
                                </div>
                                <div class="achieve_data_mid">
                                    <h5>{{item.name}}</h5>
                                    <p>{{ item.remark }}</p>
                                </div>
                                <div class="achieve_data_right" :class="{'has_do_it' :  item.status}">
                                    {{ item.status ? '已达标' : '未达标' }}
                                </div>
                            </div>
                            </mt-loadmore>
                        </div>
                    </mt-tab-container-item>
            </mt-tab-container>
        </div>
   		<qiandao v-if="isShow" ref="qiandao" @change="change"></qiandao>
    </div>
</template>

<script>
    import Back from '../../back/back.vue';
    import {requestOpt,getUserInfo} from '../../../api/recommend'
    import Qiandao from '@/components/myCenter/qiandao'
    import { Toast ,Indicator} from 'mint-ui';
    export default{
        components:{
            Back,
            Qiandao
        },
        name : 'Agency',
        data(){
            return{
               head_title: '免费金币',
               active_tab : '1',
               user:'',
               data_list :[],
               achieve_data:[],
               image_arr:[],
               isShow:false,
               index:''
            }
        },
        methods:{
		  change(){
		  	this.$set(this.data_list.tasks[this.index],'status',1)
		  },
          switch_tab(str){
              this.active_tab = str;
          },
          get_data(){
          	Indicator.open();
              this.user = getUserInfo();
              requestOpt.reqTokenGet('userTask/task', this.user.authToken,
              (res)=>{
              	Indicator.close();
                  if(res.data.status){
                      this.data_list = res.data.data;
                  }else{
                      Toast(res.data.msg);
                  }
              },
              (err)=>{
              	Indicator.close();
                  Toast('网络链接失败，请稍后再试');
              })

          },
          achieve_list(){
             this.user = getUserInfo();
              requestOpt.reqTokenGet('achieve/list', this.user.authToken,
              (res)=>{
                  if(res.data.status){
                      this.achieve_data = res.data.data;
                      setTimeout(()=>{
                         this.$refs.loadmore.onTopLoaded();
                      },500)
                  }else{
                      Toast(res.data.msg);
                  }
              },
              (err)=>{
                  Toast('网络链接失败，请稍后再试');
              })
          },
          go_bind_account(item,index){
          	if(item.id == 4){
          		this.$router.push('/bindAccount');
          	}else if(item.id == 2 && !item.status){        		
          		window.isQiandao = false; 
          		this.index = index;
          		if(this.isShow){
          			this.$refs.qiandao.startFn();
          		}
          		this.isShow = true;
          		
          	}
              
          },
        //   加载更多
          loadTop(){
              this.achieve_list();
          }

        },

        mounted(){
            this.get_data();
            this.loadTop();
        }

    }
</script>

<style scoped>
    /* 新手任务 */

    .freeMoney .switch_tab{
        margin-top:0.88rem;
    }
    .switch_tab{
        padding-top:0.1rem;
        width: 100%;
        height: 0.6rem;
        background: #fff;;
        display: flex;
        line-height: 0.6rem;
        justify-content: space-around;
        align-items: center;
    }
    .switch_tab p{
        border-bottom:.08rem solid transparent;
        font-weight: 700;
    }

    .switch_tab p.active{
        /* flex: 1; */
        border-bottom: .08rem solid #54a0fd; 
        color: #54a0fd;
    }

    .cont_tab_1{
        height: 1rem;
        box-sizing: border-box;
        background: #094e93;
        line-height: 0.4rem;
        padding: 0.3rem;
        display: flex;
    }
    .cont_tab_1 p{
        flex:1;
        text-align: center;
        color:#fff;
    }
     .cont_tab_1>p:nth-child(1){
         line-height: .4rem;
     }
    .cont_tab_1 p+p{
        border-left:1px solid #fff;
    }
    .cont_tab_1 i::before{
        content: "";
        display:inline-block;
        width:14px;
        height: 14px;
        background: url('../../../images/a_bet_coin_1@3x.png') no-repeat center / cover;
        margin-right:.05rem;

    }

    .freeMoney .mint-tab-container-item > ul li{
        height:0.7rem;
        line-height: 0.7rem;
        background: #fff;
        display: flex;
        padding:.3rem;
        position: relative;
        border-bottom: 1px solid#d0d0d0;
    }

    .freeMoney .mint-tab-container-item > ul li i{
        display:inline-block;
        width:1.2rem; 
        height:.6rem;
        line-height: .6rem;
        border: 1px solid #094e8e;
        text-align: center;
        position: absolute;
        right: 0.3rem;
        top:50%;
        transform: translateY(-50%);
        color:#094e8e;
        border-radius: .1rem;
    }

    .freeMoney .mint-tab-container-item > ul li i.has_do_it{
        color: #aaa;
        border-color:#aaa;
    }

    .freeMoney .mint-tab-container-item > ul li span{
        display: inline-block;
        width:.7rem;
        height: 0.7rem;
        border : 1px solid #ff2020;
        line-height: 0.7rem;
        text-align: center;
        border-radius: 50%;
        color:#ff8102;
        font-size: 0.2rem;
    }

    .freeMoney .mint-tab-container-item > ul li p{
        font-size: .28rem;
        color:#000;
        padding-left:.2rem;
    }
    .freeMoney .mint-tab-container-item > ul li p strong::before{
        display: inline-block;
       width: .3rem;
       height: .3rem;
       content: "";
       background: url('../../../images/a_bet_coin@2x.png') no-repeat center/cover;
       margin-left: 0.1rem;
       margin-right:0.1rem;
    }
    .freeMoney .mint-tab-container-item > ul li p strong{
        color:#ababab;
        font-weight: normal;
        font-size: 0.24rem;
    }

    /* 成就奖励 */

    .achieve_data{
        height: 1.2rem;
        /* background: pink; */
        display:flex;
        align-items: center;
        padding: 0 .3rem;
        position: relative;
        margin-top:0.02rem;
        border-top:0.0003rem solid #ddd;
        background: #fff;
    }
    .achieve_data_left{
        width:.8rem;
        height: .8rem;
        /* background: red; */
        margin-right: .3rem;
    }
    .achieve_data_left img{
        width:100%;
        height:100%;
    }
    .achieve_data_right{
        position: absolute;
        right: .3rem;
    }

    .achieve_data_mid h5{
        color: #ff5602;
        font-weight: 550;
        /* font-weight: 700; */
        font-size:0.26rem;
        margin-bottom: 0.05rem;
    }

    .achieve_data_mid p{
        font-size: 0.23rem;
    }
    
    .achieve_data_right{
        width:0.8rem;
        height: 0.4rem;
        border: 0.023999rem solid #ff5501;
        padding:.1rem .25rem;
        color: #ff5602;
        text-align: center;
        line-height: 0.4rem;
        font-weight: 550;
        border-radius: 20px;
    }

    .achieve_data_right.has_do_it{
        color: #aaa;
        border-color:#aaa;
    }

    .achieve_data_left{
        /* background-color: #ff5602; */
        background: #ff5602 url('../../../images/h_default_6@2x.png') no-repeat center / cover;
    }

    .load_more_box{
        min-height: 11.75rem;
    }

    .load_more_box .mint-loadmore{
        min-height: 11.75rem;
    }

</style>

