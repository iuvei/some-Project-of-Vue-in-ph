<template>
	<div class="guess-duying">
		<guess-title :date="date" isBall="true" @filters="filters" :totalCount="totalCount" @changeGage="changeGage" @changeOrder="changeOrder" :orderType="orderType" @refresh="refresh" ref="title"></guess-title>
		<guess-date @choseTime="choseTime" v-if="orderType==1"></guess-date>
		<mt-loadmore :top-method="loadTop" ref="loadmore">
			<div class="no-data" v-if="titleArr.length==0">
				<img src="../../images/no_data.png"/>
			</div>
			<div class="guess-load" v-if="titleArr.length>0">
				<div class="guess-item" v-for="item in titleArr">
					<div class="guess-item-heard" @click="toggleHeard(item)">
						<div class="heard-icon">
							<i :class="{active : item.isShow}"></i>
						</div>
						<p>{{item.name}}</p>
					</div>
					<transition-group name="fade">
					<div class="guess-item-content" v-if="item.data" v-for="list in item.data" v-show="item.isShow" :key="list.matchID"> 
						<div class="guess-item-list" >
							<div class="guess-list-title">
								<p class="title-time">{{nameObj[list.matchID].openTime | scoreTime}}</p>
								<div class="title-name">
									<span>{{list.home}}</span>
									<b class="vs">VS</b>
									<span>{{list.away}}</span>
								</div>
								
								<p class="title-btn" @click="goDetails(list.matchID,item.name,list.home,list.away)">
									<span>所有玩法</span>
									<i></i>
								</p>
							</div>
							<table width="100%" @click="bet($event,list.home,list.away,list.matchID)">
								<tr class="table-heard">
									<th width="18%">实时比分</th>
									<th width="18%">独赢</th>
									<th width="18%">让球</th>
									<th width="24%">大小</th>
									<th width="22%">球队得分<br>大/小</th>
								</tr>
								<tr>
									<td rowspan="2" class="table-title">
										<div @click.stop="goDetails(list.matchID,item.name,list.home,list.away)">
											<div>{{nameObj[list.matchID].protime}}</div>
											<p><span :class="{active: nameObj[list.matchID].hScore>nameObj[list.matchID].aScore}">{{nameObj[list.matchID].hScore}}</span>-
												<span :class="{active: nameObj[list.matchID].aScore>nameObj[list.matchID].hScore}">{{nameObj[list.matchID].aScore}}</span>
												</p>
										</div>									
									</td>
									<td class="yello" :data-data="[list.id1,list.realRate11,'主胜',1]">{{list.realRate11}}</td>
									<td class="big" :data-data="[list.id2,list.realRate12,'让球主',1]"><span>{{list.realRate22 | scoreHome}}</span><span class="yello">{{list.realRate12}}</span></td>
									<td class="big" :data-data="[list.id3,list.realRate13,'总分大',1]"><span><span v-if="list.realRate23">大</span>{{list.realRate23}}</span><span class="yello">{{list.realRate13}}</span></td>
									<td class="big" :data-data="[list.id48,list.realRate148,'主队得分大',1]"><span><span v-if="list.realRate248">大</span>{{list.realRate248}}</span><span class="yello">{{list.realRate148}}</span></td>
								</tr>
								<tr>
									<td class="yello" :data-data="[list.id1,list.realRate31,'客胜',2]">{{list.realRate31}}</td>
									<td class="big" :data-data="[list.id2,list.realRate32,'让球客',2]"><span>{{list.realRate22 | scoreAway}}</span><span class="yello">{{list.realRate32}}</span></td>
									<td class="big" :data-data="[list.id3,list.realRate33,'总分小',2]"><span><span v-if="list.realRate23">小</span>{{list.realRate23}}</span><span class="yello">{{list.realRate33}}</span></td>
									<td class="big" :data-data="[list.id48,list.realRate348,'主队得分小',2]"><span><span v-if="list.realRate248">小</span>{{list.realRate248}}</span><span class="yello">{{list.realRate348}}</span></td>
								</tr>
								<tr>
									<td rowspan="2"></td>
									<td></td>
									<td class="big" :data-data="[list.id2a,list.realRate12a,'让球主',1]"><span>{{list.realRate22a | scoreHome}}</span><span class="yello">{{list.realRate12a}}</span></td>
									<td class="big" :data-data="[list.id3a,list.realRate13a,'总分大',1]"><span><span v-if="list.realRate23a">大</span>{{list.realRate23a}}</span><span class="yello">{{list.realRate13a}}</span></td>
									<td class="big" :data-data="[list.id49,list.realRate149,'客队得分大',1]"><span><span v-if="list.realRate249">大</span>{{list.realRate249}}</span><span class="yello">{{list.realRate149}}</span></td>
								</tr>
								<tr>
									<td></td>
									<td class="big" :data-data="[list.id2a,list.realRate32a,'让球客',2]"><span>{{list.realRate22a | scoreAway}}</span><span class="yello">{{list.realRate32a}}</span></td>
									<td class="big" :data-data="[list.id3a,list.realRate33a,'总分小',2]"><span><span v-if="list.realRate23a">小</span>{{list.realRate23a}}</span><span class="yello">{{list.realRate33a}}</span></td>
									<td class="big" :data-data="[list.id49,list.realRate349,'客队得分小',2]"><span><span v-if="list.realRate249">小</span>{{list.realRate249}}</span><span class="yello">{{list.realRate349}}</span></td>
								</tr>
							</table>
						</div>
					</div>
					</transition-group>	
				</div>
			</div>
		</mt-loadmore>
		<div class="betting" v-if="betArr.length>0">
			<div class="betting-content" v-if="setBet" @click="closeSet($event)">
				<div>
					<div class="betting-tab">
						<div class="active">投注单</div>
						<div>最新十笔交易</div>
					</div>
					<div class="betting-item-warp">
						<p>篮球-{{orderType | orderName}}-独赢</p>
						<div class="betting-item-content">
							<div class="betting-item" v-for="(item,index) in betArr">
								<ul>
									<li class="team"><span>{{item.home}}</span><i>vs</i><span>{{item.away}}</span></li>
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
				<span>已选1场</span>
				<a class="btn" @click="showSet">提交</a>
			</div>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import GuessTitle from '@/components/guessBall/guessTitle'
	import GuessDate from '@/components/guessBall/guessdate'
	import { Indicator, Toast } from "mint-ui";
	import { requestOpt, getUserInfo ,getToday } from 'api/recommend'
	export default {
		components: {
			GuessTitle,
			GuessDate
		},
		props: ['orderType'],
		data() {
			return {
				page:1,
				totalCount:1,
				titleArr:[],
				nameObj:{},
				id:0,
				betArr:[],
				order:0,
				setBet:false,
				isNow:true,
				inputIndex:0,
				date:getToday()
			}
		},
		destroy () {
		 Indicator.close();
		},
		mounted() {
			this.getTitleData();	
		},
		methods: {
			filters(id){
				this.id = id;
				this.page = 1;
				this.$refs.title.page();
				this.getTitleData();
			},
			goDetails(id,name,home,away){
				this.$router.push({ path: '/basketDetails', query: { id: id ,name:name,home:home,away:away}})
			},
			choseTime(time){
				this.date = time;
				this.page = 1;
				this.id = 0;
				this.$refs.title.page();
				this.getTitleData();
				this.$emit('choseTime',time);
			},
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
							selected:parseInt(data.type),
							type:2
						})
					}
				}
				Indicator.open();
				requestOpt.reqTokenPost('payBall', getUserInfo().authToken,arr, res => {
					Indicator.close();
					if (res.data.status) {
						Toast('投注成功');
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
				let arr = document.querySelectorAll('td.active');
				for(let i = 0;i < arr.length; i++){
					arr[i].classList.remove('active');
				}
				this.setBet = false;
				this.inputIndex = 0;
			},
			dleBetItem(item,index){
				this.betArr.splice(index,1);
				let str = `[data-data="${item.id},${item.num},${item.text},${item.type}"]`;
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
			bet(event,home,away,matchID){
				let target = event.target;
				if(!getUserInfo()){
					 this.$router.push('/login');
					 return false;
				}
				
				while(target.tagName.toLowerCase() !== 'table' ){
		            if(target.tagName.toLowerCase() == 'td'){
							if(target.getAttribute("data-data") && target.getAttribute("data-data")[0] !== ','){
								this.isNow = false;
								let arr = target.getAttribute("data-data").split(',');
								
								
								if(this.betArr.length>0 && matchID != this.betArr[0].matchID){
									this.betArr = [];
									let arr = document.querySelectorAll('td.active');
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
										home:home,
										away:away,
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
			changeOrder(order){
				this.order = order;
				this.getTitleData();
			},
			changeGage(page){
				this.page = page;
				this.getTitleData();
			},
			toggleHeard(item){
				if(item.data){
					item.isShow = !item.isShow
					return false;
				}
				this.$set(item, 'isShow', true);
				let str = item.id.join(',');
								

				this.getItemData(str,item)
			},
			loadTop() {
				this.id = 0;
				this.isNow = true;
				this.$refs.title.refresh(true);

			},
			refresh(){
				this.isNow = true;
				if(!this.setBet){
					this.betArr = [];
				}
				this.getTitleData();
				this.$emit('refresh');
			},
			clearInput() {
				this.$emit('inputVal', this.inputText);
			},
			getItemData(id,item){
				Indicator.open();
				let url = `pay/ball/matchID/${id}/statue/0`;				
				requestOpt.reqGet(url, res => {
					Indicator.close();
					if(res.data.status&&res.data.data) {
						let data = res.data.data;
						let arr = [];
						let obj = {};
						for(let i = 0;i < data.length; i++){
							if(obj.matchID && obj.matchID != data[i].matchID){
								arr.push(obj);
								obj = {};
								obj.matchID = data[i].matchID;	
								obj.home = data[i].home;
								obj.away = data[i].away;
								let type = data[i].payTypeID;
								obj['realRate1'+type] = data[i].realRate1;
								obj['realRate2'+type] = data[i].realRate2;
								obj['realRate3'+type] = data[i].realRate3;	
								obj['id'+type] = data[i].id;
							}else{
								 if(!obj.matchID){
									obj.matchID = data[i].matchID;						
								}
								let type = data[i].payTypeID;
								if(obj['realRate1'+type]){
									obj['realRate1'+type+'a'] = data[i].realRate1;
									obj['realRate2'+type+'a'] = data[i].realRate2;
									obj['realRate3'+type+'a'] = data[i].realRate3;
									obj['id'+type+'a'] = data[i].id;
								}else{
									obj['realRate1'+type] = data[i].realRate1;
									obj['realRate2'+type] = data[i].realRate2;
									obj['realRate3'+type] = data[i].realRate3;
									obj['id'+type] = data[i].id;
								}																
								obj.home = data[i].home;
								obj.away = data[i].away;								
							}		
							if(i == data.length-1){
								arr.push(obj);
							}
						}
						this.$set(item, 'data', arr);
					}
				}, err => {
					Toast('网络链接失败，请稍后再试')
					Indicator.close();
				})
			},
			getTitleData(){
				Indicator.open();
				let url = '';
				url = `match/roll/ball/subType/0/leagueIDs/${this.id}/stype/${this.order}/page/${this.page}/count/20`;
					requestOpt.reqGet(url, res => {
					Indicator.close();
					if(res.data.status) {
						this.totalCount = res.data.data.totalCount;
						let items = res.data.data.items;
						let obj = {};
						let arr = [];
						let nameObj = {};
						
						for(let i = 0;i < items.length; i++){

							nameObj[items[i].id] = {
								openTime:items[i].openTime,
								hScore:items[i].hScore,
								aScore:items[i].aScore,
								protime:items[i].protime
							};
							if(obj[items[i].leagueName]){
								obj[items[i].leagueName].push(items[i].id)
							}else{
								obj[items[i].leagueName] = [items[i].id];
							}
						}
						this.nameObj = nameObj;
						for(let n in obj){							
							arr.push({
								name:n,
								id:obj[n]
							})
							
						}
						this.titleArr = arr;
						
					}
					this.$refs.loadmore.onTopLoaded();
				}, err => {
					Indicator.close();
					this.$refs.loadmore.onTopLoaded();
				})
				
			}
		}
	}
</script>

<style scoped>

	.table-title>div{
		width: 80%;
		margin-left: 10%;
	}
	.table-title>div>div{
		height: .6rem;
		line-height: .3rem;
		background: #623b03;
		color: #ffd200;
	}
	.table-title>div>p{
		height: .45rem;
		line-height: .45rem;
		background: #ffdfb0;
		color: #80510d;
	}
	.table-title>div>p span.active{
		color: #e91313;
	}
	
	
	
	/*.guess-list-title {
		color: #626262;
		height: .6rem;
		line-height: .6rem;
		position: relative;
		font-size: .3rem;
		text-align: center;
	}
	.guess-item-list{
		background: #fff;
		margin-bottom: .1rem;
	}*/
	
	/*.guess-list-title .title-time {
		position: absolute;
		left: .5rem;
		top: 0;
		font-size: .26rem;
		color: #b9b9b9;
	}
	.guess-list-title .title-name{
		display: flex;
		justify-content: center;
	}
	.guess-list-title .title-name span{
		max-width: 2rem;
		 white-space: nowrap;
         overflow: hidden;
         text-overflow: ellipsis;
	}
	.guess-list-title .title-name .vs{
		margin: 0 .1rem;
		font-weight: normal;
	}*/
	.guess-item-content td {
		height: .6rem;
		border-left: 1px solid #e7e7e7;
		border-bottom: 1px solid #e7e7e7;
	}
	
</style>