<template>
	<div class="agencyCode">
		<div class="back">
		  <a class="back-btn" @click="$router.goBack()" ></a>
		  <div class="back-title">
		  	<a :class="{ active: 1 == scoreIndex}" @click="toggleTab('1')">生成邀请码</a>
		  	<a :class="{ active: 2 == scoreIndex}" @click="toggleTab('2')">查看邀请码</a>
		  </div>
		  <div class="back-title-right"></div>
 		 </div>
 		 <div class="agencyCode-content">		 	
				<mt-tab-container v-model="scoreIndex" ref="tab" swipeable>
					<mt-tab-container-item id="1">
						<div class="agencyCode-warp">
							<div>
								<p>邀请码：{{code}}</p>
								<span @click="newCode">随机选码</span>
							</div>
							<a  @click="apendCode">生成邀请码</a>
						</div>
					</mt-tab-container-item>
					<mt-tab-container-item id="2">
						<mt-loadmore :top-method="loadTop" ref="loadmore" style="min-height: 12rem;"> 
							
							<div class="agencyCode-title">
								<span style="width: 2.1rem;">邀请码</span>
								<span style="width: 1.1rem;">类型</span>
								<span style="width: 1.3rem;">佣金</span>
								<span style="width: 1.1rem;">状态</span>
								<span style="width: 1.9rem;">操作</span>
							</div>
							<div class="no-data" v-if="!listData">
								<img src="../../../images/no_data.png"/>
							</div>
							<ul class="agencyCode-list">
								<li v-for="list in listData">
									<span style="width: 2.1rem;;">{{list.code}}</span>
									<span style="width: 1.1rem;">代理</span>
									<span style="width: 1.3rem;">{{list.fee}}</span>
									<span style="width: 1.1rem;">{{list.status | agencyStatus}}</span>
									<a class="xiugai" @click="showSetCode(list.code,list.status,list.id)">修改</a>
									<a class="shanchu" @click="delCode(list.id)">删除</a>
								</li>
							</ul>
						</mt-loadmore>
					</mt-tab-container-item>
				</mt-tab-container>	
				<mt-popup
				  v-model="popupVisible"
				  position="bottom">
				  <slot>
				  	<div class="setCode-warp">
				  		<div><span>邀请码:</span>{{setCode}}</div>
				  		<div><span>类型:</span>生成邀请码</div>
				  		<div><span>状态</span>:
				  			<mt-radio
						        v-model="radiovalue"
						        :options="options"
						        class="mt-dt-picker">
						    </mt-radio>
				  		</div>
				  		<a @click="setCodeBtn">确定修改</a>
				  	</div>
				  </slot>
				</mt-popup>
 		 </div>
	</div>
</template>

<script type="text/ecmascript-6">
import { requestOpt ,getUserInfo ,setUserInfo} from 'api/recommend'
import { Indicator, Toast,MessageBox} from "mint-ui";
export default {
	components: {
		
	},
	data() {
		return {
			scoreIndex: "1",
			code:"",
			listData:'',
			popupVisible:false,
			setCode:'',
			options: [
		          {
		            label: '启动',
		            value: '1'
		          },
		          {
		            label: '禁用',
		            value: '0'
		          }
		        ],
		    radiovalue:"0",
		    codeId:''
		}
	},
	computed: {

	},
	mounted() {
		this.getData();
	},
	methods: {
		
		delCode(code){
			MessageBox.confirm('确定删除改邀请码?').then(action => {
			  	Indicator.open();
				let url = `agent/code/del/${code}`;
				requestOpt.reqTokenGet(url, getUserInfo().authToken, res => {
					Indicator.close();
					if(res.data.status){
						Toast('删除成功');
						this.popupVisible = false;
						this.getData();
					}else{
						Toast('删除失败');
					}
				}, err => {
					Indicator.close();
					Toast('删除失败');
				})
			});
			
		},
		showSetCode(code,state,id){
			this.setCode = code;
			this.codeId = id;
			this.radiovalue = state;
			this.popupVisible = true;
		},
		setCodeBtn(){
			Indicator.open();
			requestOpt.reqTokenPost('agent/code/msg', getUserInfo().authToken,{
				id:this.codeId,
				code:this.setCode,
				status:parseInt(this.radiovalue)
			}, res => {
				Indicator.close();
				if(res.data.status){
					Toast('修改成功');
					this.popupVisible = false;
					this.getData();
				}else{
					Toast('修改失败')
				}
			}, err => {
				Indicator.close();
				Toast('修改失败')
			})
		},
		newCode(){
			Indicator.open();
			requestOpt.reqTokenGet('agent/code/create', getUserInfo().authToken, res => {
				Indicator.close();
				if(res.data.status){
					this.code = res.data.data;
				}
			}, err => {
				Indicator.close();
			})
		},
		apendCode(){
			if(this.code == ''){
				Toast('请随机选码');
				return false;
			}
			Indicator.open();
			let url = `agent/code/create/${this.code}`;
			requestOpt.reqTokenGet(url, getUserInfo().authToken, res => {
				Indicator.close();
				if(res.data.status){
					this.code = '';
					this.scoreIndex = '2';
					this.getData();
				}
			}, err => {
				Indicator.close();
			})
		},
		toggleTab(index) {
			this.scoreIndex = index;
		},
		getData(){
			Indicator.open();
			requestOpt.reqTokenGet('agent/code', getUserInfo().authToken, res => {
				Indicator.close();
				if(res.data.status){
					this.listData = res.data.data;
					this.$refs.loadmore.onTopLoaded();
				}
			}, err => {
				Indicator.close();
			})
		},
		loadTop(){
			this.getData();
		}
	}
}</script>

<style scoped>
.agencyCode .no-data {
	height: 10rem;
	display: flex;
	justify-content: center;
	align-items: center;
}
.agencyCode .no-data img{
	width: 5rem;
}
.setCode-warp{
	width: 7.5rem;
	height: 7rem;
}
.setCode-warp>a{
	display: block;
	background: #24a8de;
	height: .7rem;
	line-height: .7rem;
	text-align: center;
	border-radius: .06rem;
	margin-top: 3rem;
	width: 6.9rem;
	margin-left: .3rem;
	color: #fff;
}
.setCode-warp>div{
	display: flex;
	height: .9rem;
	border-bottom: 1px solid #9a9a9a;
	align-items: center;
	overflow: hidden;
	padding-left: .3rem;
	color: #9A9A9A;
}
.setCode-warp>div span{
	letter-spacing: .3rem;
	color: #000;
}
.agencyCode-title{
	background: #fff;
	display: flex;
	height: .9rem;
	align-items: center;
	text-align: center;
	border-bottom: 1px solid #9a9a9a;
}
.agencyCode-list{
	background: #fff;	
	text-align: center;
	color: #9a9a9a;	
}
.agencyCode-list li {
	display: flex;
	height: .9rem;
	align-items: center;
	border-bottom: 1px solid #9a9a9a;
}
.agencyCode-list a{
	height: .52rem;
	width: .8rem;
	line-height: .52rem;
	color: #fff;
	margin-right: .16rem;
	border-radius: .04rem;
}
.agencyCode-list .xiugai{
	background: #3db6fb;
}
.agencyCode-list .shanchu{
	background: #ff0000;
}
.back{
	position: fixed;
	top: 0;
	left: 0;
	display: flex;
	height: .88rem;
	overflow: hidden;
	width: 6.9rem;
	padding: 0 .3rem;
	align-items:center;
	justify-content:space-between;
	font-size: .36rem;
	background-color: #24a8de;
	color: #fff;
	z-index: 9999;
}
.back-btn{
	height: .34rem;
    width: .34rem;
	background: url(../../../images/return.png) no-repeat center;
	background-size: contain;
}
.back-title-right{
	font-size: .36rem;
}
.back-title{
	font-size: .26rem;
	display: flex;
}
.back-title a{
	color: #fff;
	height: .5rem;
	line-height: .5rem;
	padding: 0 .1rem;
	overflow: hidden;
	border: 1px solid #fff;
}
.back-title a:first-child{
	border-radius: .04rem 0 0 .04rem;
}
.back-title a:last-child{
	border-radius: 0 .04rem .04rem 0;
}
.back-title a.active{
	background: #fff;
	color: #24a8de;
}
.agencyCode-content{
	padding-top: 0.88rem;
}
.agencyCode-warp>div{
	height: 1rem;
	display: flex;
	justify-content: space-between;
	padding: 0 .3rem;
	align-items: center;
	background: #fff;
	margin-top: 1rem;
}
.agencyCode-warp>div span{
	border: 1px solid #24a8de;
	padding: .04rem .06rem;
	color: #24a8de;
	border-radius: .04rem;
}
.agencyCode-warp>a{
	width: 6.9rem;
	margin-left: .3rem;
	height: .76rem;
	line-height: .76rem;
	background: #24a8de;
	color: #fff;
	text-align: center;
	display: block;
	margin-top: .8rem;
	border-radius: .06rem;
}
</style>
