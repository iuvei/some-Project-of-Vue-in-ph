<template>
	<div class="presentRecord" >
		<back title="提现记录"></back>
            <div class="present_tab">
                <ul>
                    <li v-for="(item,index) in switch_tab_text" :key="index" @click="switch_tab(index+1)" :class="{'active': active_index == String(index+1)}">{{item}}</li>
                </ul>
            </div>
            <div class="presentRecord-content" >
                <mt-loadmore :top-method="loadTop" v-infinite-scroll="loadBottom" infinite-scroll-distance="40"  infinite-scroll-disabled="allLoaded" infinite-scroll-immediate-check="false" ref="loadmore">
                    <div class="presentRecord_mid" >
                        <mt-tab-container v-model="active_index" swipeable >
                            <mt-tab-container-item id="1">
                                <div class="present_cont_item" v-if="concat_list" v-for="(item,index) in concat_list" :key="index" >
                                    <p><span>提款金额 <i>{{ item.orderID }}</i></span> <strong>提款到{{item.bankName}}</strong></p>
                                    <h3><span style="color:#4fb3ff">-{{item.money}}</span> <strong><i>{{item.state == 0 ? '待审核' : item.state == 1 ? '成功' : '失败' }}</i>{{item.createDate}}</strong></h3>
                                </div>
                                <div class="score-loading" v-if="isShow && active_index == '1'">
									<mt-spinner type="triple-bounce"></mt-spinner>
								</div>
                                <h6 class="no_data" v-if="is_show_nodata">已经全部加载完毕</h6>
                            </mt-tab-container-item>

                            <mt-tab-container-item id="2" >
                                 <div class="present_cont_item" v-if="concat_list" v-for="(item,index) in concat_list" :key="index" >
                                    <p><span>提款金额 <i>{{ item.orderID }}</i></span> <strong>提款到{{item.bankName}}</strong></p>
                                    <h3><span style="color:#4fb3ff">-{{item.money}}</span> <strong><i>{{item.state == 0 ? '待审核' : item.state == 1 ? '成功' : '失败' }}</i>{{item.createDate}}</strong></h3>
                                </div>
                                <div class="score-loading" v-if="isShow && active_index == '2'">
									<mt-spinner type="triple-bounce"></mt-spinner>
								</div>
                                <h6 class="no_data" v-if="is_show_nodata">已经全部加载完毕</h6>
                            </mt-tab-container-item>

                            <mt-tab-container-item id="3" >
                                <div class="present_cont_item" v-if="concat_list" v-for="(item,index) in concat_list" :key="index" >
                                    <p><span>提款金额 <i>{{ item.orderID }}</i></span> <strong>提款到{{item.bankName}}</strong></p>
                                    <h3><span style="color:#4fb3ff">-{{item.money}}</span> <strong><i>{{item.state == 0 ? '待审核' : item.state == 1 ? '成功' : '失败' }}</i>{{item.createDate}}</strong></h3>
                                </div>
                                <div class="score-loading" v-if="isShow && active_index == '3'">
									<mt-spinner type="triple-bounce"></mt-spinner>
								</div>
                                <h6 class="no_data" v-if="is_show_nodata">已经全部加载完毕</h6>
                            </mt-tab-container-item>

                            <mt-tab-container-item id="4" >
                               <div class="present_cont_item" v-if="concat_list" v-for="(item,index) in concat_list" :key="index" >
                                    <p><span>提款金额 <i>{{ item.orderID }}</i></span> <strong>提款到{{item.bankName}}</strong></p>
                                    <h3><span style="color:#4fb3ff">-{{item.money}}</span> <strong><i>{{item.state == 0 ? '待审核' : item.state == 1 ? '成功' : '失败' }}</i>{{item.createDate}}</strong></h3>
                                </div>
                                <div class="score-loading" v-if="isShow && active_index == '4'">
									<mt-spinner type="triple-bounce"></mt-spinner>
								</div>
                                <h6 class="no_data" v-if="is_show_nodata">已经全部加载完毕</h6>
                            </mt-tab-container-item>
                        </mt-tab-container>
                    </div>
                </mt-loadmore>
            </div>
		</div>
</template>


<script type="text/ecmascript-6">
	import Back from '@/components/back/back'
	import { Indicator, Toast } from "mint-ui";
	import { requestOpt, getUserInfo, setUserInfo ,dtFormate } from 'api/recommend'
	export default {

		components: {
			Back
		},
		data() {
			return {
                switch_tab_text:['全部', '提现成功', '失败' , '待审核'],
                active_index: '1',
                allLoaded:false,
                curr_page : 1,
                total_page : 1,
                user:{},
                data_list:[],
                concat_list :[],
                scrollMode : 'auto',
                isShow: true,
                is_show_nodata:false
			}
		},
		computed: {

		},
		mounted() {
            Indicator.open();
            this.get_data();
		},
		methods: {
			switch_tab(index){
                if(this.active_index == index){ return };
                this.active_index = String(index);
                this.data_list=[];
            },
            loadTop(){
                this.curr_page = 1;
                this.is_show_nodata = false;
                this.get_data();
                setTimeout(()=>{
                     this.$refs.loadmore.onTopLoaded();
                },500)
            },

            loadBottom(){
                this.isShow = true;
                this.allLoaded = true;
                if( this.curr_page >= this.total_page){ 
                    this.isShow = false;
                    this.is_show_nodata = true;
                    return
                }
                this.curr_page++;
                requestOpt.reqTokenGet('extract/record/type/' + this.active_index +'/page/' + this.curr_page +'/count/10',this.user.authToken,
                        (res)=>{
                            if(res.data.status){
                                this.allLoaded = false
                                this.data_list = res.data.data.items;
                                this.concat_list = this.concat_list.concat(this.data_list)
                                this.data_list = this.data_list.concat(res.data.data.items);
                                this.isShow = false;
                                this.curr_page = res.data.data.totalPage;
                                this.total_page = res.data.data.totalCount;
                                Indicator.close();
                                
                            }else{
                                if(res.data){
                                    Toast(res.data.msg);
                                }
                                this.isShow = false;
                                this.is_show_nodata = true;
                                Indicator.close();
                            }
                        },(err)=>{
                           Toast('网络链接失败，请稍后再试');
                            this.isShow = false;
                            this.is_show_nodata = true;
                            Indicator.close();
                    })
            },
            get_data(){
                if(this.curr_page>1){
                     this.isShow = true;
                }
               
                Indicator.open();
                this.user = getUserInfo();
                requestOpt.reqTokenGet('extract/record/type/' + this.active_index +'/page/' + this.curr_page +'/count/10',this.user.authToken,
                    (res)=>{
                        if(res.data.status){
                            this.allLoaded = false
                            this.curr_page = res.data.data.totalPage;
                            this.total_page = res.data.data.totalCount;
                            this.data_list = res.data.data.items;
                            this.concat_list = (this.data_list)
                            if(this.curr_page >= this.total_page){
                                this.isShow = false;
                                this.is_show_nodata = true;
                                Indicator.close();
                            }
                          
                            Indicator.close();
                            
                        }else{
                            if(res.data){
                                Toast(res.data.msg);
                            }
                            this.isShow = false;
                            this.is_show_nodata = true;
                            Indicator.close();
                        }
                    },(err)=>{
                        Toast('网络链接失败，请稍后再试');
                        this.isShow = false;
                        this.is_show_nodata = true;
                        Indicator.close();
                })
            }


        },
        
      
		watch: {
            active_index(index){
                this.curr_page = 1;
                this.data_list = [];
                this.concat_list = [];
                this.isShow = true;
                this.is_show_nodata = false;
                this.get_data();
            }
		}
	}
</script>

<style>
    .present_tab{
        width: 100%;
        height: 0.8rem;
        line-height: 0.8rem;
        position: fixed;
        top:0.88rem;
        z-index: 100;
    }
    .present_tab ul{
        width:100%;
        display: flex;
        justify-content: space-around;
        border: 0.01rem solid #eee;
        background: #fff;
    }
    .present_tab ul li{
        font-size: 0.3rem;
    }
    .present_tab ul li.active{
        border-bottom: 2px solid #ee7f49;
        color:#ee7f49;
        font-size: 0.3rem;
    }
    .presentRecord-content .mint-tab-container .mint-tab-container-item{
        min-height: 11.6rem;
    }
    .presentRecord-content{
        margin-top:1.68rem;
    }
    .present_cont_item{
        padding: 0 .3rem;
        height: 1.14rem;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        border-bottom: 1px solid #ddd;
        background: #fff;
    }
    .present_cont_item p{
        box-sizing: border-box;
        width: 100%;
        display: flex;
        justify-content: space-between;
        /* padding: 0.1rem 0; */
    }
    .present_cont_item p span{
        color: #000;
        font-size: 0.28rem;
    }

    .present_cont_item p span i{
        font-size: 0.25rem;
        color: #929292;
    }
    .present_cont_item p strong{
        font-size: 0.28rem;
        color: #000;
        font-weight: normal;
    }

    .present_cont_item h3{
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    .present_cont_item h3 span{
        font-size: 0.28rem;
        color: #fd0000;
    }

    .present_cont_item h3 strong {

        font-weight: normal;
        color:#929292;
    }
    .present_cont_item h3 strong i{
        font-size: 0.25rem;
        margin-right: 0.3rem;
        /* color:#929292; */
    }
    .no_data{
        font-size: 0.25rem;
        color:#929292;
        text-align: center;
        padding-top: 0.2rem;
        padding-bottom: 0.2rem;
    }

    .presentRecord_mid{
        -webkit-overflow-scrolling: auto;
    }

    .score-loading {
		height: 1rem;
		line-height: 1rem;
		background: #fff;
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>