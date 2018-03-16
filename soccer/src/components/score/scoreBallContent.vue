<template>
	<div class="scoreBallContent" ref="scorewarp">
		<div class="scoreBallContent-top">
			<div class="back">
			  <a class="back-btn"  @click="$router.goBack()" ></a>
			  <p class="back-title">{{info.leagueName}}</p>
			  <div class="back-title-right"></div>
		  	</div>
		  	<p class="info-home">{{info.home}}</p>
		  	<p class="info-vs" v-if="!info.protime">VS</p>
		  	<p class="info-vs" v-if="info.protime" :class="{red:info.isOver,green:!info.isOver}">{{info.hScore}}:{{info.aScore}}</p>
		  	<p class="info-away">{{info.away}}</p>
		  	<div class="content">
		  		<p class="content-time">{{info.openTime}}</p>
		  		<div class="content-text">
		  			<div>
		  				<img src="../../images/image_not_white.png" v-if="!info.hImageUrl"/>
		  				<img :src="info.hImageUrl" v-if="info.hImageUrl" :onerror="orrImg"/>
		  				<p><span>{{info.leagueName}}</span>[{{info.hOrder || 0}}]</p>
		  			</div>
		  			<div>		  				
		  				<p><span>{{info.leagueName}}</span>[{{info.aOrder || 0}}]</p>
		  				<img src="../../images/image_not_white.png" v-if="!info.aImageUrl"/>
		  				<img :src="info.aImageUrl" v-if="info.aImageUrl" :onerror="orrImg"/>
		  			</div>
		  		</div>
		  		<p style="text-align: center;">
		  			<span class="score-state" v-if="info.isOver">{{info.isOver | isOver}}</span>
					<span class="score-state" v-if="!info.isOver&&info.protime">{{info.protime}}<i></i></span>
					<span class="score-state" v-if="!info.isOver&&!info.protime">赛前</span>
		  		</p>
		  	</div>
		</div>
		<ul class="scoreBallContent-tab">
			<li :class="{ active: 1 == scoreIndex}" @click="toggleTab('1')">聊球</li>
			<li :class="{ active: 2 == scoreIndex}" @click="toggleTab('2')">竞猜</li>
		</ul>
		<div class="scoreBallContent-bottom" @touchstart="touchstart" ref="touch" @touchend="touchend">			
			<mt-tab-container v-model="scoreIndex">
				<mt-tab-container-item id="1">
						<mt-loadmore :top-method="loadTop" ref="loadmore">
							<div class="chat-warp">
								<div class="chat-warp-list" v-for="list in chatArr" :class="{isSelf: list.isSelf}">
									<div class="chat-img">
										<img :src="list.avatar" v-if="list.avatar"/>
										<img src="../../images/user_no.png" v-if="!list.avatar"/>
									</div>
									<div>
										<p class="chat-title">{{list.createDate}}</p>
										<p class="chat-content">{{list.content}}</p>
									</div>
								</div>
							</div>
						</mt-loadmore>
						<div class="input-warp">
							<input type="text" v-model="chatInput"/>
							<a :class="{active : chatInput}" @click="sendMsg">发送</a>
						</div>
				</mt-tab-container-item>
				<mt-tab-container-item id="2">
					<div class="main-item-warp"  @click="bet($event)" v-if="obj">
						<div class="main-item"  v-if="obj[1]">
							<div class="main-item-title"><div class="yuan"><span>vs</span></div><p>全场赛果·<span>猜两队90分钟内（含补时）的比赛结果</span></p></div>
							<div class="main-item-content">
								<div v-for="i in obj[1]" class="main-item-list">
									<div class="list-real" :data-data="[i.id,i.realRate1,'主胜',1]">										
										<p><span>{{info.home}}</span><span class="pay">{{i.realRate1}}</span></p>
									</div>
									<div class="list-real" :data-data="[i.id,i.realRate3,'客胜',2]">										
										<p><span>{{info.away}}</span><span class="pay">{{i.realRate3}}</span></p>
									</div>
								</div>
							</div>
						</div>
						<div class="main-item"  v-if="obj[2]">
							<div class="main-item-title"><div class="yuan"><span>vs</span></div><p>当前让球·<span>猜两队90分钟内（含补时）的比赛结果</span></p></div>
							<div class="main-item-content">
								<div v-for="i in obj[2]" class="main-item-list">
									<div class="list-real" :data-data="[i.id,i.realRate1,'让球-主胜',1]">										
										<p><span>{{info.home}}</span><span>{{i.realRate2 | scoreHome}}</span><span class="pay">{{i.realRate1}}</span></p>
									</div>
									<div class="list-real" :data-data="[i.id,i.realRate3,'让球-客胜',2]">										
										<p><span>{{info.away}}</span><span>{{i.realRate2 | scoreAway}}</span><span class="pay">{{i.realRate3}}</span></p>
									</div>
								</div>
							</div>
						</div>
						<div class="main-item" v-if="obj[3]">
							<div class="main-item-title"><div class="yuan"><span>vs</span></div><p>总分：大/小·<span>猜两队90分钟内（含补时）的比赛结果</span></p></div>
							<div class="main-item-content">
								<div v-for="i in obj[3]" class="main-item-list">
									<div class="list-real" :data-data="[i.id,i.realRate1,'总分-大',1]">
										
										<p><span>大</span><span>{{i.realRate2 }}</span><span class="pay">{{i.realRate1}}</span></p>
									</div>
									<div class="list-real" :data-data="[i.id,i.realRate3,'总分-小',2]">
										
										<p><span>小</span><span>{{i.realRate2 }}</span><span class="pay">{{i.realRate3}}</span></p>
									</div>
								</div>
							</div>
						</div>
						<div class="main-item" v-if="obj[13]">
							<div class="main-item-title"><div class="yuan"><span>vs</span></div><p>总分：单/双·<span>猜两队90分钟内（含补时）的比赛结果</span></p></div>
							<div class="main-item-content">
								<div class="main-item-list">
									<div class="list-real" :data-data="[obj[13][0].id,obj[13][0].realRate1,'总分-单',1]">
										
										<p><span>单</span><span class="pay">{{obj[13][0].realRate1}}</span></p>
									</div>
									<div class="list-real" :data-data="[obj[13][0].id,obj[13][0].realRate3,'总分-双',2]">
										
										<p><span>双</span><span class="pay">{{obj[13][0].realRate3}}</span></p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div v-if="!obj" >
						<img src="../../images/no_data.png" style="width: 50%;margin-left: 25%;margin-top: 25%;"/>
					</div>
				</mt-tab-container-item>
			</mt-tab-container>
		</div>
		<div class="betting" v-if="betArr.length>0" style="bottom: 0;">
			<div class="betting-content" v-if="setBet" @click="closeSet($event)" style="bottom: .82rem;"> 
				<div>
					<div class="betting-tab">
						<div class="active">投注单</div>
						<div>最新十笔交易</div>
					</div>
					<div class="betting-item-warp">
						<p>篮球-赛节投注</p>
						<div class="betting-item-content">
							<div class="betting-item" v-for="(item,index) in betArr">
								<ul>
									<li class="team"><span>{{info.home}}</span><i>vs</i><span>{{info.away}}</span></li>
									<li class="num"><span>{{item.text}}</span><i>@</i><span>{{item.num}}</span></li>
									<li class="set" :class="{active : index == inputIndex}"><span>下注金额：</span><input @click="choseInput(index)" readonly="readonly" placeholder="点击设置" maxlength="9" v-model="item.money"/></li>
									<li class="money">预计奖金：<span v-if="item.money">{{ (item.money*item.num).toFixed(2)}}元</span ><span v-if="!item.money">0元</span></li>
								</ul>
								<i @click="dleBetItem(item,index)"></i>
							</div>
						</div>
						<div class="num-box">
							<div class="num-box-top">
								<a v-for="i in [1,2,3,4,5,6,7,8,9,0]" @click="setMoney(i)">{{i}}</a>
							</div>
							<div class="num-box-bottom">
								<a @click="clearNum(true)">清除</a>
								<a @click="clearNum" class="tuige"></a>
								<a @click="toPay">完成</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="betting-bottom">
				<a class="trash" @click="dleBetAll"></a>
				<span>已选{{betArr.length}}单</span>
				<a class="btn" @click="showSet">提交</a>
			</div>
		</div>
	</div>
</template>

<script>
	import { Indicator ,Toast} from "mint-ui";
	import { requestOpt, getUserInfo ,getToday} from 'api/recommend'
	export default {

		data() {
			return {
				info:JSON.parse(this.$route.query.info),
				scoreIndex: "2",
				obj:null,
				betArr:[],
				setBet:false,
				inputIndex:0,
				pageY:0,
				chatInput:"",
				orrImg:'this.src="' + require('../../images/image_not_white.png') + '"',
				chatArr:[]
			}
		},
		mounted(){
			this.getData();
		},
		methods: {
			loadTop(){
				this.getMSg();
				this.getMSg();
			},
			sendMsg(){
				let val = this.chatInput;
				this.chatInput = ''
				requestOpt.reqTokenPost('matchMessage/save', getUserInfo().authToken,{
					content:val,
					matchID:this.info.id
				}, res => {				
					if (res.data.status) {
						this.getMSg();
					}else{
						Toast('发送失败')
					}					
				}, err => {
					Indicator.close();
					Toast('连接服务器失败')
				})
			},
			getMSg(){
				let url = `matchMessage/matchID/${this.info.id}`
				requestOpt.reqGet(url, res => {
					if(res.data.status&&res.data.data) {
						this.chatArr = res.data.data.items;
						this.$refs.loadmore.onTopLoaded();
					}
				}, err => {
					Toast('网络链接失败，请稍后再试')
					Indicator.close();
				})
			},
			touchstart(e){
  				this.pageY = e.touches[0].pageY; 
  				this.$refs.touch.addEventListener('touchmove',this.fnBind)
			},
			touchend(){
				this.$refs.touch.removeEventListener('touchmove',this.fnBind)
			},
			fnBind(e){
				let h = e.touches[0].pageY - this.pageY; 
				if(this.$refs.scorewarp.classList.length != 2 || h>0){
					e.preventDefault();
				}			   			
      			if(h>30){
      				this.$refs.scorewarp.classList.remove('active');
      			}else if(h<-30){
      				this.$refs.scorewarp.classList.add('active');
      			}
			},
			hasClass(element, cls) {
			 return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
			},
			toggleTab(index) {
				this.scoreIndex = index;				
			},
			getData(){
				let id = this.info.id;
				Indicator.open();
				let url = `pay/ball/matchID/${id}/statue/0`;
				requestOpt.reqGet(url, res => {
					Indicator.close();
					if(res.data.status&&res.data.data.length>0) {
						let data = res.data.data;
						let obj = {};						
						for(let i = 0;i < data.length; i++){
							let type = data[i].payTypeID;
							if(!obj[type]){
								obj[type] = [data[i]];
							}else{
								obj[type].push(data[i])
							}
						}
						this.obj = obj;
					}
				}, err => {
					Toast('网络链接失败，请稍后再试')
					Indicator.close();
				})
			},
			toPay(){
				let arr = [];
				for(let i = 0;i < this.betArr.length; i++){					
					if(!this.betArr[i].money){
						Toast('请完成所有投注');
						return false;
					}else {
						let data = this.betArr[i];
						arr.push({
							matchID:parseInt(data.matchID),
							amount:parseInt(data.money),
							payRateID:parseInt(data.id),
							selected:data.type ? parseInt(data.type):'',
							type:data.type ? 2 : 3
						})
					}
				}
				Indicator.open();
				requestOpt.reqTokenPost('payBall', getUserInfo().authToken,arr, res => {
						Indicator.close();				
						if (res.data.status) {
							Toast('投注成功')						
							this.dleBetAll();
						}else{
							Toast(res.data.msg)
						}					
					}, err => {
						Indicator.close();
						Toast('连接服务器失败')
					})
			},
			clearNum(all){
				let num = this.betArr[this.inputIndex].money;
				if(num){
					if(all === true){
						this.betArr[this.inputIndex].money = '';
					}else{
						this.betArr[this.inputIndex].money = num.substring(0, num.length - 1);
					}					
				}
			},
			setMoney(num){
				let newNum = this.betArr[this.inputIndex].money;
				if(newNum){
					if(newNum.length==9){
						return false;
					}
					num =  '' + newNum + num 
				}else{
					num = num+''
				}
				this.$set(this.betArr[this.inputIndex],'money',num)
			},
			choseInput(index){
				this.inputIndex = index;
			},
			dleBetAll(){
				this.betArr = [];
				let arr = document.querySelectorAll('.list-real.active');
				for(let i = 0;i < arr.length; i++){
					arr[i].classList.remove('active');
				}
				this.setBet = false;
				this.inputIndex = 0;
			},
			dleBetItem(item,index){
				this.betArr.splice(index,1);
				let str = `[data-data="${item.id},${item.num},${item.text},${item.type}"].active`;
				let dom = document.querySelector(str);
				if(dom){
					dom.classList.remove('active');
				}		
				if(this.betArr.length == 0){
					this.setBet = false;
				}
			},
			showSet(){
				if(this.setBet){
					this.toPay();
					return false;
				}
				this.setBet = true;				
			},
			closeSet(event){
				if(event.target.className == 'betting-content'){
					this.setBet = false;
					if(this.isNow){
						this.betArr = [];
					}
				}				
			},
			bet(event){
				let target = event.target;
				let matchID = this.info.id;
				if(!getUserInfo()){
					this.$router.push('/login');
					return false;
				}				
				while(!this.hasClass(target, 'main-item-warp')){
		            if(this.hasClass(target, 'list-real')){		            	
							if(target.getAttribute("data-data") && target.getAttribute("data-data")[0] !== ','){
								let arr = target.getAttribute("data-data").split(',');
								this.isNow = false;																
								if(false){
									this.betArr = [];
									let arr = document.querySelectorAll('list-real.active');
									for(let i = 0;i < arr.length; i++){
										arr[i].classList.remove('active');
									}									
								}
								if(this.hasClass(target,'active')){
									target.classList.remove('active');
									for (let i = 0;i < this.betArr.length; i++) {
										if(this.betArr[i].id == arr[0] && this.betArr[i].type == arr[3]){
											this.betArr.splice(i,1);
											return false;
										}
									}
								}else{
									target.classList.add('active');	
									this.betArr.push({
										matchID:matchID,
										id:arr[0],
										num:arr[1],
										text:arr[2],
										type:arr[3]
									})
								}								
							}
		                break;
		            }
		            target = target.parentNode;
		        }
			
			},
		}
	}
</script>

<style scoped>
	.input-warp{
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 1rem;
		box-sizing: border-box;
		border-top: 1px solid #b5b5b5;
		padding: .18rem;
		background: #fff;
		display: flex;
	}
	.input-warp input{
		width: 5.66rem;
		background: #dde2e6;
		border: 1px solid #b5b5b5;
		border-radius: .06rem;
		text-indent: .5em;
	}
	.input-warp a{
		background: #ccc;
		width: 1.2rem;
		color: #fff;
		line-height: .6rem;
		text-align: center;
		margin-left: .2rem;
		border-radius: .06rem;
	}
	.input-warp a.active{
		background: #ff5b06;
	}
	.score-state i{
		margin-left: .06rem;
		width: .02rem;
		height: .04rem;
		border-radius: .02rem;
		background: red;
		animation: shan 1s infinite ;
	}
	@keyframes shan {
	    0%{
	        transform: scale(.5);
	    }
	
	    100%{
	        transform: scale(1.5);
	    }
	}
	.score-state {
		display: flex;
		color: #ff7a7d;
		justify-content: center;
	}
	.main-item{
		margin-bottom: .34rem;
	}
	.main-item-warp{
		padding: .8rem .2rem 0 .2rem;
	}
	.main-item-list{
		background: #fff;
		display: flex;
	}
	.main-item-title{
		display: flex;
		height: .3rem;
		margin-bottom: .16rem;
		align-items: center;
	}
	.main-item-title .yuan{
		height: .3rem;
		width: .3rem;
		background: #1198ea;
		border-radius: 50%;
		color: #fff;
		line-height: .3rem;		
		margin:0 .14rem ;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.main-item-title p{
		color: #0b0e13;
	}
	.main-item-title p span{
		color: #7c7f84;
	}
	.list-real{
		width: 50%;
		height: .76rem;
		line-height: .76rem;
		box-sizing: border-box;
		border-right:1px solid #f3f4f4;
		border-bottom:1px solid #f3f4f4;
		text-align: center;
	}
	.list-real.active{
		background: #ff9600;
		color: #fff;
	}
	.list-real.active .pay{
		color: #fff;
	}
	.back{		
		display: flex;
		height: .88rem;
		width: 6.9rem;
		padding: 0 .3rem;
		align-items:center;
		justify-content:space-between;
		font-size: .3rem;
		color: #feffff;
		z-index: 9999;
	}
	.back-btn{
		height: .34rem;
	    width: .34rem;
		background: url(../../images/return.png) no-repeat center;
		background-size: contain;
	}
	.back-title-right{
		width: .3rem;
	}
	.pay{
		color: #ed1f11;
		margin-left: .1rem;
	}
	.scoreBallContent{
		/*position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;*/
	}
	.scoreBallContent-top{
		background: url(../../images/basketball_bg.png) no-repeat center ;
		background-size: 7.5rem 3.66rem;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 9999;
		-webkit-backface-visibility: hidden;
		-webkit-transform-style: preserve-3d;
	}
	.scoreBallContent-top .content{
		height: 2.78rem;
		transition: height 1s;
		 overflow: hidden;
	}
	.scoreBallContent-top .content-time{
		color: #acacae;
		text-align: center;
		height: .8rem;
		line-height: .8rem;
	}
	.scoreBallContent-top .content-text{
		display: flex;
		justify-content: space-between;
		
		padding: 0 .18rem;
		height: .6rem;
	}
	.scoreBallContent-top .content-text div{
		display: flex;
		align-items: flex-end;
		color: #bebab9;
		font-size: .19rem;
	}
	.scoreBallContent-top .content-text div p{
		margin-bottom: .03rem;
		margin-left: .1rem;
		display: flex;
	}
	.scoreBallContent-top .content-text div p span{
		max-width: 2rem;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
	}
	.scoreBallContent-top .content-text div:last-child p{
		margin-right: .1rem;
	}
	.scoreBallContent-top .content-text img{
		width: .66rem;
		height: .59rem;
	}
	.list-real p{
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.list-real p span:first-child{
		max-width: 2rem;
		display: inline-block;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
	}
	.info-home,.info-away{
		position: absolute;
		top: 1.66rem;
		color: #feffff;
		font-size: .23rem;
		transition: all 1s;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
	}
	.info-home{		
		left: .94rem;
		width: 1.9rem;
	}
	.info-vs{
		position: absolute;
		top: 1.8rem;
		left: 2.86rem;
		color: #fff;
		font-size: .28rem;
		width: 1.8rem;
		text-align: center;
		transition: all 1s;
	}
	.info-vs .red{
		color: #fe001e;
	}
	.info-vs .green{
		color: #309f0e;
	}
	.info-away{
		right: .94rem;
		width: 1.9rem;
		text-align: right;
	}
	.scoreBallContent-bottom{
		margin-top: 4.26rem;
		min-height: 5rem;
		transition: all .8s;
		
	}
	.scoreBallContent-tab {
		position: fixed;
		top: 3.66rem;
		left: 0;
		display: flex;
		justify-content: space-around;
		width: 100%;
		background: #fff;
		height: .6rem;
		border-bottom: 1px solid #f6f6f6;
		z-index: 9999;
		transition: all 1s;
		-webkit-backface-visibility: hidden;
		-webkit-transform-style: preserve-3d;
	}
	.scoreBallContent-tab li {
		padding: .13rem 0;
		background: #fff;		
		color: #ababab;
		font-size: .3rem;
		text-align: center;
		height: .3rem;
	}
	
	.scoreBallContent-tab li.active {
		color: #ee7f49;
		border-bottom: 2px solid #ee7f49;
	}
	.scoreBallContent.active .scoreBallContent-top .content{
		height: 0;		
	}
	.scoreBallContent.active .scoreBallContent-top .info-home{
		top: .3rem;
		left: 1.2rem;
		text-align: right;
	}	
	.scoreBallContent.active .scoreBallContent-top .info-away{
		text-align: left;
		top: .3rem;
		right: 1.1rem;
	}
	.scoreBallContent.active .scoreBallContent-top .info-vs{
		top: .3rem;
	}
	.scoreBallContent.active .scoreBallContent-top .back-title{
		display: none;
	}
	.scoreBallContent.active .scoreBallContent-tab{
		top: .88rem;
	}	
	.scoreBallContent.active .scoreBallContent-bottom{
		margin-top: 1.48rem;
		padding-bottom: .5rem;
	}
	
	.betting{
		position: fixed;
		bottom: 1rem;
		left: 0;
		width: 100%;
		z-index: 9999;
	}
	.betting-item-warp >p{
		background: #fff;
		height: .6rem;
		line-height: .6rem;
		padding-left: .3rem;
	}
	.betting-content{
		position: fixed;
		bottom: 1.82rem;
		left: 0;
		top: 0;
		right: 0;
		background: rgba(0,0,0,.7);	
		width: 100%;		
		
	}
	.betting-content>div{
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
	}
	.betting-item-content{
		background: #f5f4f9;
		position: relative;
		max-height: 4.12rem;
		overflow: auto;
	}
	.betting-item{
		position: relative;
	}
	.betting-item>i{
		position: absolute;
		top: .3rem;
		right: .3rem;
		height: .32rem;
		width: .32rem;
		background: url(../../images/del.png) no-repeat ;
		background-size: contain;
	}
	.betting-item{
		background: #e9f9ff;
		margin-bottom: .2rem;
		padding:.2rem .3rem;
	}
	.betting-item ul{
		display: flex;
		flex-wrap: wrap;
		width: 100%;
	}
	.betting-item-content .betting-item:last-child{
		margin-bottom: 0;
	}
	.betting-item li{
		box-sizing: border-box;
		height: .32rem;
		line-height: .32rem;
		width: 3.45rem;
		display: flex;
	}
	.betting-item .team{
		
		margin-bottom: .2rem;
		border-right: 1px solid #009bdb;
	}
	.betting-item .team i{
		font-style: normal;
		margin: 0 .2rem;
		color: red;		
	}
	.betting-item .team span{
		width: 1.28rem;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
	}
	.betting-item .num{
		padding-left: .3rem;
	}
	.betting-item .num span{
		color: red;
		width: 1.28rem;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
	}
	.betting-item .num i{
		margin: 0 .2rem;
	}
	.betting-item .set {
		border-right: 1px solid #009bdb;
	}
	.betting-item .set span{
		margin-top: .05rem;
	}
	.betting-item .set input{
		width: 1.65rem;
		border: 1px solid #7E8C8D;
		height: .36rem;
		line-height: .36rem;
		font-size: .24rem;
		text-indent: .06rem;
		border-radius: .05rem;
		
	}
	.betting-item .set.active input{
		border: 1px solid #009bdb;
		box-shadow: 0 0 .02rem .02rem #009bdb;
	}
	.betting-item .money{
		padding-left: .3rem;
	}
	.betting-item .money span{
		color: red;
	}
	.betting-content .betting-tab{
		display: flex;
	}
	.betting-content .betting-tab div{
		margin-top: .1rem;
		height: .52rem;
		line-height: .52rem;
		text-align: center;
		width: 100%;
		background: #009bdb;
		color: #fff;
		font-size: .28rem;
		border-bottom: 1px solid #009bdb;
	}
	.betting-content .betting-tab div.active{
		margin-top: 0;
		height: .62rem;
		line-height: .62rem;
		color: #009bdb;
		background: #fff;
		border-radius:.06rem  .06rem 0 0;
	}
	.num-box{
		padding-bottom: .1rem ;
		
		background: #fff;
	}
	.num-box a{
		color: #fff;
		background: #009bdb;
		margin-right: .1rem;
		height: .56rem;
		line-height: .56rem;
		text-align: center;
		border-radius: .06rem;
	}
	.num-box .num-box-top,.num-box .num-box-bottom{
		display: flex;
		margin-left: .46rem;
	}
	.num-box .num-box-top{
		padding-top: .1rem;
		margin-bottom: .1rem;
	}
	.num-box .num-box-top a:last-child,.num-box .num-box-bottom a:last-child{
		margin-right: 0;
	}
	.num-box .num-box-top a{
		width: .56rem;
	}
		.num-box .num-box-bottom a:first-child{
		width:2rem;
	}
	.num-box .num-box-bottom a:last-child{
		width: 3.2rem;
	}
	.num-box .tuige{
		width: 1.2rem;
		background: url(../../images/tuige.png) #009bdb no-repeat center ;
		background-size: .5rem .3rem;
	}
	.betting-bottom{
		height: .82rem;
		padding-left: .4rem;
		padding-right: .2rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: rgba(0,0,0,.7);
		color: #fff;
		z-index: 9999;
	}
	.betting-bottom .trash{
		height: .68rem;
		width: .68rem;
		background: url(../../images/trash.png) no-repeat center;
		background-size: contain;
	}
	.betting-bottom .btn{
		height: .6rem;
		width: 1.3rem;
		color: #fff;
		text-align: center;
		line-height: .62rem;
		background: #ff9600;
		border-radius: .04rem;
	}
</style>