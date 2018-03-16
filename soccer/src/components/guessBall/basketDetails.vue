<template>
	<div class="basketDetails" :class="{active:betArr.length>0}">	
		<back title="赛节投注"></back>		
		<div class="basketDetails-top">
			<div class="basketDetails-top-title">
				<p>{{name}}</p>
				<a class="basketDetails-title-time" @click="refresh"><img src="../../images/shuaxin.png"/>{{time}}</a>
			</div>
			<div class="basketDetails-top-content">
				<table>
					<tr>
						<th style="width:2rem;color: #ff9600;"><span>{{score.protime}}</span></th>
						<th style="width:.52rem">1</th>
						<th style="width:.52rem">2</th>
						<th style="width:.52rem">3</th>
						<th style="width:.52rem">4</th>
						<th style="width:.6rem">加时</th>
						<th style="width:.8rem">上半场</th>
						<th style="width:.8rem">下半场</th>
						<th style="width:.6rem">总计</th>
					</tr>
					<tr>
						<td>{{home}}</td>
						<td class="yello">{{score.part1HScore}}</td>
						<td>{{score.part2HScore}}</td>
						<td class="yello">{{score.part3HScore}}</td>
						<td>{{score.part4HScore}}</td>
						<td class="yello">{{score.hOverTimeScore}}</td>
						<td class="bg">{{score.hHalfScore}}</td>
						<td class="yello bg">{{score.hSHalfScore}}</td>
						<td class="bg">{{score.homeScore}}</td>
					</tr>
					<tr>
						<td>{{away}}</td>
						<td class="yello">{{score.part1AScore}}</td>
						<td>{{score.part2AScore}}</td>
						<td class="yello">{{score.part3AScore}}</td>
						<td>{{score.part4AScore}}</td>
						<td class="yello">{{score.aOverTimeScore}}</td>
						<td class="bg">{{score.aHalfScore}}</td>
						<td class="yello bg">{{score.aSHalfScore}}</td>
						<td class="bg">{{score.awayScore}}</td>
					</tr>
				</table>
			</div>
		</div>
		<div class="guess-item" >
			<div class="guess-item-heard me" @click="toggleHeard(meObj)">
				<div class="heard-icon">
					<i :class="{active : meObj.show}"></i>
				</div>
				<p><span>我的关注</span><span>{{starLen}}</span></p>
			</div>
			<transition name="fade">
				<div class="main-content" v-show="meObj.show" v-if="obj[2]" @click="bet($event)">
					<div class="main-item"  v-for="(item, key, index) in obj" :key=key v-if="starObj[key]">
						<div class="main-item-title" v-if="key!='show'"><span>{{item[0].payTypeName}}</span><i :data-num='[key,item[0].id]' :class="{active : starObj[key]}"></i></div>
						<div class="main-item-content" v-if="key==1">
							<div v-for="i in item" class="main-item-list">
								<div class="list-real" :data-data="[i.id,i.realRate1,i.payTypeName,1]">
									<span>{{home}}</span>
									<p><span>{{i.realRate1}}</span></p>
								</div>
								<div class="list-real" :data-data="[i.id,i.realRate3,i.payTypeName,2]">
									<span>{{away}}</span>
									<p><span>{{i.realRate3}}</span></p>
								</div>
							</div>
						</div>
						<div class="main-item-content" v-if="key==13||key==36||key==37||key==38||key==39||key==40||key==41">
							<div class="main-item-list">
								<div class="list-real" :data-data="[item[0].id,item[0].realRate1,item[0].payTypeName,1]">
									<span>单</span>
									<p><span>{{item[0].realRate1}}</span></p>
								</div>
								<div class="list-real" :data-data="[item[0].id,item[0].realRate3,item[0].payTypeName,2]">
									<span>双</span>
									<p><span>{{item[0].realRate3}}</span></p>
								</div>
							</div>
						</div>
						<div class="main-item-content" v-if="key==3||key==34||key==35||key==48||key==49||key==43||key==44||key==45||key==46||key==50||key==51||key==52||key==53||key==19||key==20||key==21||key==22">
							<div v-for="i in item" class="main-item-list">
								<div class="list-real" :data-data="[i.id,i.realRate1,i.payTypeName,1]">
									<span>大</span>
									<p><span>{{i.realRate2 }}</span><span>{{i.realRate1}}</span></p>
								</div>
								<div class="list-real" :data-data="[i.id,i.realRate3,i.payTypeName,2]">
									<span>小</span>
									<p><span>{{i.realRate2 }}</span><span>{{i.realRate3}}</span></p>
								</div>
							</div>
						</div>
						<div class="main-item-content" v-if="key==2">
							<div v-for="i in item" class="main-item-list">
								<div class="list-real" :data-data="[i.id,i.realRate1,i.payTypeName,1]">
									<span>{{home}}</span>
									<p><span>{{i.realRate2 | scoreHome}}</span><span>{{i.realRate1}}</span></p>
								</div>
								<div class="list-real" :data-data="[i.id,i.realRate3,i.payTypeName,2]">
									<span>{{away}}</span>
									<p><span>{{i.realRate2 | scoreAway}}</span><span>{{i.realRate3}}</span></p>
								</div>
							</div>
						</div>
					</div>
					<div class="main-item" v-if="starObj[29]">
						<div class="main-item-title"><span>球队得分：{{home}}-最后一位</span><i :data-num='[29,zhuArr[0].id]' :class="{active : starObj[29]}"></i></div>
						<div class="main-item-content">
							<div class="main-item-list">
								<div class="list-real last" v-for="i in zhuArr" :data-data="[i.id,i.payRate,i.name]">
									<span>{{i.name}}</span>
									<p><span>{{i.payRate}}</span></p>
								</div>
							</div>
						</div>
					</div>
					<div class="main-item" v-if="starObj[29]">
						<div class="main-item-title"><span>球队得分：{{away}}-最后一位</span><i :data-num='[29,keArr[0].id]' :class="{active : starObj[29]}"></i></div>
						<div class="main-item-content">
							<div class="main-item-list">
								<div class="list-real last" v-for="i in keArr" :data-data="[i.id,i.payRate,i.name]">
									<span>{{i.name}}</span>
									<p><span>{{i.payRate}}</span></p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</transition>	
		</div>
		<div class="guess-item" >
			<div class="guess-item-heard" @click="toggleHeard(obj)">
				<div class="heard-icon">
					<i :class="{active : obj.show}"></i>
				</div>
				<p><span>主盘口</span><span>{{len}}</span></p>
			</div>
			<transition name="fade" >
				<div class="main-content" v-show="obj.show"  @click="bet($event)">
					<div class="main-item"  v-for="(item, key, index) in obj" :key=key>
						<div class="main-item-title" v-if="key!='show'"><span>{{item[0].payTypeName}}</span><i :data-num='[key,item[0].id]' :class="{active : starObj[key]}"></i></div>
						<div class="main-item-content" v-if="key==1">
							<div v-for="i in item" class="main-item-list">
								<div class="list-real" :data-data="[i.id,i.realRate1,i.payTypeName,1]">
									<span>{{home}}</span>
									<p><span>{{i.realRate1}}</span></p>
								</div>
								<div class="list-real" :data-data="[i.id,i.realRate3,i.payTypeName,2]">
									<span>{{away}}</span>
									<p><span>{{i.realRate3}}</span></p>
								</div>
							</div>
						</div>
						<div class="main-item-content" v-if="key==13||key==36||key==37||key==38||key==39||key==40||key==41">
							<div class="main-item-list">
								<div class="list-real" :data-data="[item[0].id,item[0].realRate1,item[0].payTypeName,1]">
									<span>单</span>
									<p><span>{{item[0].realRate1}}</span></p>
								</div>
								<div class="list-real" :data-data="[item[0].id,item[0].realRate3,item[0].payTypeName,2]">
									<span>双</span>
									<p><span>{{item[0].realRate3}}</span></p>
								</div>
							</div>
						</div>
						<div class="main-item-content" v-if="key==3||key==34||key==35||key==48||key==49||key==43||key==44||key==45||key==46||key==50||key==51||key==52||key==53||key==19||key==20||key==21||key==22">
							<div v-for="i in item" class="main-item-list">
								<div class="list-real" :data-data="[i.id,i.realRate1,i.payTypeName,1]">
									<span>大</span>
									<p><span>{{i.realRate2 }}</span><span>{{i.realRate1}}</span></p>
								</div>
								<div class="list-real" :data-data="[i.id,i.realRate3,i.payTypeName,2]">
									<span>小</span>
									<p><span>{{i.realRate2 }}</span><span>{{i.realRate3}}</span></p>
								</div>
							</div>
						</div>
						<div class="main-item-content" v-if="key==2">
							<div v-for="i in item" class="main-item-list">
								<div class="list-real" :data-data="[i.id,i.realRate1,i.payTypeName,1]">
									<span>{{home}}</span>
									<p><span>{{i.realRate2 | scoreHome}}</span><span>{{i.realRate1}}</span></p>
								</div>
								<div class="list-real" :data-data="[i.id,i.realRate3,i.payTypeName,2]">
									<span>{{away}}</span>
									<p><span>{{i.realRate2 | scoreAway}}</span><span>{{i.realRate3}}</span></p>
								</div>
							</div>
						</div>
					</div>
					<div class="main-item" v-if="zhuArr.length>0">
						<div class="main-item-title"><span>球队得分：{{home}}-最后一位</span><i :data-num='[29,zhuArr[0].id]' :class="{active : starObj[29]}"></i></div>
						<div class="main-item-content">
							<div class="main-item-list">
								<div class="list-real last" v-for="i in zhuArr" :data-data="[i.id,i.payRate,i.name]">
									<span>{{i.name}}</span>
									<p><span>{{i.payRate}}</span></p>
								</div>
							</div>
						</div>
					</div>
					<div class="main-item" v-if="keArr.length>0">
						<div class="main-item-title"><span>球队得分：{{away}}-最后一位</span><i :data-num='[29,keArr[0].id]' :class="{active : starObj[29]}"></i></div>
						<div class="main-item-content">
							<div class="main-item-list">
								<div class="list-real last" v-for="i in keArr" :data-data="[i.id,i.payRate,i.name]">
									<span>{{i.name}}</span>
									<p><span>{{i.payRate}}</span></p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</transition>	
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
									<li class="team"><span>{{home}}</span><i>vs</i><span>{{away}}</span></li>
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

<script type="text/ecmascript-6">
	import Back from '@/components/back/back'
	import { Indicator ,Toast} from "mint-ui";
	import { requestOpt, getUserInfo } from 'api/recommend'
	export default {
		 components: {
	      Back
	    },
		data() {
			return {
				name:this.$route.query.name,
				home:this.$route.query.home,
				away:this.$route.query.away,
				obj:{},
				meObj:{},
				starObj:{},
				zhuArr:[],
				keArr:[],
				betArr:[],
				setBet:false,
				inputIndex:0,
				starLen:0,
				score:{},
				len:0,
				time:30,
				timer:''
			}
		},
		
		mounted() {
			this.getData();
			if(getUserInfo()){
				let matchID = this.$route.query.id;
				let url = `pay/fouce/matchID/${matchID}/statue/1`
				requestOpt.reqTokenGet(url,getUserInfo().authToken, res => {
					Indicator.close();
					if(res.data.status) {
						let data = res.data.data;
						let obj = {};
						let num = 0;
						for(let i = 0;i < data.length ; i++){
							obj[data[i].payTypeID] = true;
							num++;
						}
						this.starLen = num;
						this.starObj = obj;
					}
				}, err => {
					Toast('网络链接失败，请稍后再试')
					Indicator.close();
				})
			}
	
			this.timer = setInterval(res=>{
				this.time--;
				if(!this.$route.query.id){
					window.clearInterval(this.timer)
				}
				if(this.time==0){
					this.refresh();
				}
			},1000)
		},

		methods: {	
			hasClass(element, cls) {
			 return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
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
				let matchID = this.$route.query.id;
				if(!getUserInfo()){
					this.$router.push('/login');
					return false;
				}
				if(target.tagName.toLowerCase() == 'i'){
					
					let arr = target.getAttribute("data-num").split(',');
					
					Indicator.open();
					if(this.hasClass(target,'active')){						
						requestOpt.reqTokenPost('fouceMatch/payRateball', getUserInfo().authToken,{
							payRateBallID:arr[1],
							payTypeID:arr[0],
							status:0,
							type:2
						}, res => {
							Indicator.close();				
							if (res.data.status) {
								Toast('取消成功');		
								this.starLen--;
								target.classList.remove('active');
								this.$delete(this.starObj,arr[0])
							}else{
								Toast(res.data.msg)
							}					
						}, err => {
							Indicator.close();
							Toast('连接服务器失败')
						})
						
					}else{						
						requestOpt.reqTokenPost('fouceMatch/payRateball', getUserInfo().authToken,{
							payRateBallID:arr[1],
							payTypeID:arr[0],
							status:1,
							type:2
						}, res => {
							Indicator.close();				
							if (res.data.status) {
								Toast('关注成功');
								this.starLen++;
								target.classList.add('active');	
								this.$set(this.starObj,arr[0],true)
							}else{
								Toast(res.data.msg)
							}					
						}, err => {
							Indicator.close();
							Toast('连接服务器失败')
						})
					}												
					return false;
				}else{
						while(!this.hasClass(target, 'main-content')){
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
			
				}
			
			},
			toggleHeard(item){
				if(!item.show){
					this.$set(item,'show',true)
				}else{
					item.show = !item.show;
				}
			},
			refresh(){
				this.getData();
				this.time = 30;
			},
			getData(){
				let len = 0;	
				let id = this.$route.query.id;
				Indicator.open();
				let url = `pay/ball/matchID/${id}/statue/0`;
				let url2 = `pay/score/ball/matchID/${id}/statue/0`;
				let url3 = `match/ball/part/matchID/${id}`;
				requestOpt.reqGet(url, res => {
					Indicator.close();
					if(res.data.status&&res.data.data) {
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
										
						for(let i in obj){
							len++;
						}
						this.len = len;
						
						if(this.obj&&this.obj.show){
							obj.show = true;
						}
						this.obj = obj;
						
					}
				}, err => {
					Toast('网络链接失败，请稍后再试')
					Indicator.close();
				})
				requestOpt.reqGet(url2, res => {
					Indicator.close();
					if(res.data.status&&res.data.data) {
						let data = res.data.data[0].list[0].items;
						let zhuArr = [];
						let keArr = [];
						let home = this.$route.query.home;
						for(let i = 0;i < data.length; i++){
							len++
							if(home == data[i].teamName){
								zhuArr.push(data[i])
							}else{
								keArr.push(data[i])
							}
						}
						this.len = len;
						this.zhuArr = zhuArr;
						this.keArr = keArr;
					}
				}, err => {
					Toast('网络链接失败，请稍后再试')
					Indicator.close();
				})
				requestOpt.reqGet(url3, res => {
					Indicator.close();
					if(res.data.status&&res.data.data) {					
						this.score = res.data.data;
					}
				}, err => {
					
					Indicator.close();
				})
			}
		}
	}
</script>

<style scoped>
	.main-item{
		margin-bottom: .2rem;
	}
	.main-item-title{
		background: #673221;
		color: #fff;
		padding: 0 .32rem;
		height: .5rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.main-item-title i{
		width: .5rem;
		height: .5rem;
		background: url(../../images/unstar.png) no-repeat center;
		background-size: .28rem .28rem;
	}
	.main-item-title i.active{
		background: url(../../images/star.png) no-repeat center;
		background-size: .28rem .28rem;
	}
	.main-item-content>div{
		background: #fff;
	}
	.main-item-content>div:nth-child(2n){
		background: #fffbdf;
	}
	.main-item-list{
		display: flex;
	}
	.main-item-list .list-real{
		width: 50%;
		box-sizing: border-box;
		padding:0 .32rem;
		height: .52rem;
		display: flex;
		justify-content: space-between;
		align-items: center;		
		border-right: 1px solid #e7e7e7;
		border-bottom: 1px solid #e7e7e7;
	}
	.main-item-list .list-real.last{
		width: 20%;
		padding: 0 .1rem;
		
	}
	.main-item-list .list-real p{
		white-space: nowrap;
	}
	.main-item-list .list-real>span{
		width: 2rem;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
	}
	.main-item-list .list-real>p span:first-child{
		color: #653020;
		margin-right: .12rem;
	}
	.main-item-list .list-real>p span:last-child{
		color: #ff9600;
	}
	.main-item-list .list-real.active{
		background: #ff9600;
		color: #fff;
	}
	.main-item-list .list-real.active>p span{
		color: #fff;
	}
	.fade-enter-active, .fade-leave-active {
  	 transition: opacity .4s
	}
	.fade-enter, .fade-leave-active {
	   opacity: 0;
	}
	.guess-item{
		margin-bottom: .06rem;
		border: none;
	}
	.guess-item-heard {
		height: .5rem;
		padding:0 .36rem;
		display: flex;
		align-items: center;
		
		background: #e19716;
		color: #fff;
	}	
	.guess-item-heard.me{
		background: #cf570e;
	}
	.guess-item-heard .heard-icon {
		height: .28rem;
		width: .28rem;
		display: flex;
		justify-content: center;
		align-items: center;
		background: #ffae1c;
		margin-right: .16rem;
	}
	.guess-item-heard p{
		width: 6.4rem;
		height: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.guess-item-heard p span:last-child{
		width: .48rem;
		height: 100%;
		background: #861c00;
		text-align: center;
		line-height: .5rem;
	}
	.guess-item-heard.me .heard-icon{
		background: #f8e627;
	}
	.guess-item-heard .heard-icon i {
		font-size: 0;
		width: 0;
		height: 0;
		border-width: .1rem .1rem 0;
	    border-style: solid dashed;
	    border-color: #fff transparent transparent;
		transition: all .4s ease 0s;
	}
	.guess-item-heard .heard-icon i.active{
		transform: rotate(-90deg);
   		animation-fill-mode: forwards;
	}
	.basketDetails{
		padding-top: 2.98rem;
	}
	.basketDetails.active{
		padding-bottom: .82rem;
	}
	.basketDetails-top{
		position: fixed;
		top: .88rem;
		left: 0;
		width: 100%;
		z-index: 99;
	}
	.basketDetails-top-title{
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: .52rem;
		padding: 0 .36rem;
		color: #fff;
		background-color: #841f00;
	}
	.basketDetails-title-time{
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: #fff000;
		width: .6rem;
		padding: 0 .2rem;
		background-color: #b52b00;
	}
	.basketDetails-title-time img{
		width: .28rem;
		height: .28rem;
		margin-right: .06rem;
	}
	.basketDetails-top-content{
		height: 1.36rem;
		padding: .14rem .36rem 0 .36rem;
		background: url(../../images/basket-bg.png);
		background-size: contain;
		margin-top: -1px;
	}
	.basketDetails-top-content table{
		color: #fff;
		text-align: center;
		 border-collapse:collapse;
		 border-spacing:0;
		 font-size: .22rem;
		 padding-left: .12rem;
	}
	.basketDetails-top-content table th{
		background: #330c00;
		height: .35rem;
	}
	.basketDetails-top-content table td{
		padding: .04rem 0;
		background-color:rgba(162,94,74,.5);
	}
	.basketDetails-top-content table td.bg{
		background-color:rgba(190,149,124,.5);
	}

	
</style>