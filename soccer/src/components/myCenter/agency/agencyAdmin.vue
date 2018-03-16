<template>
    <div class="agencyAdmin" ref="agencyAdmin">
       <back title="用户管理"></back>
       <div class="agencyAdmin-top">
        	<div>
        		<input type="text" v-model="name" v-on:keyup="change"/>
        		<a @click="getData"></a>
        	</div>
       </div>
       <mt-loadmore :top-method="loadTop" ref="loadmore" v-infinite-scroll="getData" infinite-scroll-disabled="loading">
			<div class="agencyAdmin-content" ref="content">
	       		<table border="0" cellspacing="0" cellpadding="0" >
		       		<tr>
		       			<th>用户名称</th>
			       		<th>用户类型</th>
			       		<th>代理等级</th>
			       		<th>账户余额</th>
			       		<th>充值金额</th>
			       		<th>下线投注</th>
			       		<th>下线人数</th>
			       		<th>提现金额</th>
			       		<th>下线佣金</th>
			       		<th>返点</th>
			       	</tr>
			       	<tr v-for="item in data">
			       		<td>{{item.userName}}</td>
			       		<td>{{item.userType}}</td>
			       		<td>{{item.level}}</td>
			       		<td>{{item.banlance}}</td>
			       		<td>{{item.chargeAmount}}</td>
			       		<td>{{item.userBettingAmount}}</td>
			       		<td>{{item.subUsers}}</td>
			       		<td>{{item.extractAmount}}</td>
			       		<td>{{item.userAgentFee}}</td>
			       		<td>{{item.returnFee}}</td>
			       	</tr>
		        </table>
      		</div>
			<p class="nomore" v-if="!loading">已经全部加载完毕</p>
		</mt-loadmore>
       
    </div>
</template>

<script>
    import Back from '../../back/back.vue';
    import {requestOpt,getUserInfo} from '../../../api/recommend'
    import { Toast , Indicator } from 'mint-ui';
    export default{
        components:{
            Back
        },
        name : 'Agency',
        data(){
            return{
                data:[],
                name:'',
                page:1,
                loading:false,
                date:{
                	banlance:5,
                	chargeAmount:0,
                	extractAmount:0,
                	level:0,
                	returnFee:0,
                	subUsers:0,
                	userAgentFee:0,
                	userBettingAmount:0,
                	userName:"匿名",
                	userType:1
                }
            }
        },
        methods:{
        	loadTop() {
        		this.page = 1;
				this.getData()
			},
			change(){
				this.page = 1;
				if(this.name == ''){
					this.getData();
				}
			},
            getData(){
            	Indicator.open();
            	let url = `user/userManagerCenter?page=${this.page}&count=10&userName=${this.name}`
	            requestOpt.reqTokenGet(url,getUserInfo().authToken,(res)=>{
	            	Indicator.close();
	            	let data = res.data;
	                if(res.data.status){
	                	if(this.page != 1) {
							this.data.push(...data.data);
						} else {
//							for (let i = 0 ;i<30;i++) {
//								this.data.push(this.date)
//							}
							 this.data = data.data;
							 this.$refs.loadmore.onTopLoaded();
						}	  
						if(data.page != data.totalPage) {
							this.page++;
							this.loading = false;
						} else {							
							this.loading = true;						
						}
	                }else{
	                    Toast(res.data.msg);
	                }
	            },(err)=>{
	                Toast('网络链接失败，请稍后再试');
	            })
          }
        },
		destroyed(){
//			window.onscroll = ""
		},
        mounted(){
//      	 window.onscroll =  () => {
//      		let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
//      		this.$refs.table.style.transform = `translate3d(0,${-scrollTop}px,0)`;
//			}
            this.getData();
        }

    }
</script>

<style scoped>

.agencyAdmin{
	/*position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;*/
	padding-top: 2.12rem;
}
.nomore{
	text-align: center;
	margin-top: .2rem;
	color: #B9B9B9;
	padding-bottom: .5rem;
}

.agencyAdmin-top{
	position: fixed;
	top: .88rem;
	left: 0;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 1.24rem;
	box-sizing: border-box;
	border-bottom: 1px solid #e5e5e5;
	background: #f3f4f4;
	z-index: 999;
}
.agencyAdmin-top>div{
	width: 5.28rem;
	display: flex;
	height: .58rem;
}
.agencyAdmin-top>div input{
	width: 4.42rem;
	height: .58rem;
	background: #fff;
	border: 0;
	border-radius: 1.16rem 0 0 1.16rem;
	text-indent: .2rem;
}
.agencyAdmin-top>div a{
	width: .82rem;
	height: .58rem;
	border-radius: 0 1.16rem 1.16rem 0;
	background: url(../../../images/search.png) no-repeat center #25a9e0;
	background-size:.4rem;
}
.agencyAdmin-content{
	overflow-x: auto;
}
.agencyAdmin-content th,.agencyAdmin-content td{
	width: 1.4rem;
	height: 1rem;	
	line-height: 1rem;
	text-align: center;
	font-size: .24rem;
	white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
	
}


.agencyAdmin-content table tr td:first-child{
	background: #def5ff;	
}
.agencyAdmin-content table{
	width: 12.6rem;
}
.agencyAdmin-content td{
	background: #fff;
	border-bottom: 1px solid #e5e5e5;
}
</style>

