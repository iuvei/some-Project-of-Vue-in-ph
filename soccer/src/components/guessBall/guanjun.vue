<template>
	<div class="guess-duying guanjun">
		<guess-title :date="date" @filters="filters" :totalCount="totalCount" @changeGage="changeGage" @changeOrder="changeOrder" :orderType="orderType" @refresh="refresh" ref="title" noFilter="true"></guess-title>
		<mt-loadmore :top-method="loadTop" ref="loadmore">
			<div class="no-data" v-if="JSON.stringify(obj) == '{}'">
				<img src="../../images/no_data.png"/>
			</div>
			<div class="guess-load" v-if="JSON.stringify(obj) != '{}'">
				<div class="guess-item" v-for="item in obj">
					<div class="guess-item-heard" @click="toggleHeard(item)">
						<div class="heard-icon">
							<i :class="{active : item.isShow}"></i>
						</div>
						<p>{{item.leagueName}}</p>
					</div>
					<transition-group name="fade">
					<div class="guess-item-content"  v-for="(list,index) in item.items" v-show="item.isShow" :key="index"> 
						<div class="guess-item-list" >
							<div class="guess-list-title">
								{{list.matchName}}
							</div>
							<div class="guess-list-content" >
								<div v-for="i in list.team" @click="bet(i,$event)" ><span>{{i.teamName}}</span><span>{{i.payRate}}</span></div>
							</div>
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
						<p>冠军</p>
						<div class="betting-item-content">
							<div class="betting-item" v-for="(item,index) in betArr">
								<ul>
									<li class="team"><span>{{item.home}}</span></li>
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
	import { Indicator, Toast } from "mint-ui";
	import { requestOpt, getUserInfo  } from 'api/recommend'
	export default {
		components: {
			GuessTitle
		},
		props: ['orderType'],
		data() {
			return {
				page:1,
				totalCount:1,
				obj:{},
				id:0,
				betArr:[],
				order:0,
				setBet:false,
				isNow:true,
				inputIndex:0,
				date:''
			}
		},
		activated(){
			
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
							amount:parseInt(data.money),
							itemID:parseInt(data.id),
							type:3
						})
					}
				}
				Indicator.open();
				requestOpt.reqTokenPost('payBall/score', getUserInfo().authToken,arr, res => {
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
				let arr = document.querySelectorAll('.guess-list-content .active');
				for(let i = 0;i < arr.length; i++){
					arr[i].classList.remove('active');
				}
				this.setBet = false;
				this.inputIndex = 0;
			},
			dleBetItem(item,index){
				this.betArr.splice(index,1);
				let str = `[data-data="${item.id},${item.num},${item.text}"]`;
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
			bet(item,event){
				if(!getUserInfo()){
					 this.$router.push('/login');
					 return false;
				}
				this.isNow = false;	
				let target = event.target;
				while(true){
		            if(target.tagName.toLowerCase() == 'div'){
							if(this.betArr.length>0 && item.leagueId != this.betArr[0].leagueId){
								this.betArr = [];
								let arr = document.querySelectorAll('.guess-list-content .active');
								for(let i = 0;i < arr.length; i++){
									arr[i].classList.remove('active');
								}	
							}
							
							if(this.hasClass(target,'active')){
								target.classList.remove('active');	
								for (let i = 0;i < this.betArr.length; i++) {
									if(this.betArr[i].id == item.teamId){
										this.betArr.splice(i,1);
										return false;
									}
								}
							}else{
								target.classList.add('active');	
								this.betArr.push({
									home:item.leagueName,
									id:item.teamId,
									num:item.payRate,
									text:item.teamName,
									leagueId:item.leagueId
								})
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
				if(item.isShow){
					item.isShow = !item.isShow
				}else{
					this.$set(item, 'isShow', true);
				}
				
	
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
			
			},
			getTitleData(){
				Indicator.open();
				let url = `pay/champions/type/${this.orderType}/stype/${this.order}/page/${this.page}/count/20`;
				requestOpt.reqGet(url, res => {
					Indicator.close();
					if(res.data.status) {
						this.totalCount = res.data.data.totalCount;
						let items = res.data.data.items[0];
						let obj = {};

						
						for(let i = 0;i < items.listLeague.length; i++){
							obj[items.listLeague[i].leagueId] = items.listLeague[i];					
						}
						for(let i = 0;i < items.listSeason.length; i++){
							if(!obj[items.listSeason[i].leagueId].items){
								obj[items.listSeason[i].leagueId].items = {};
								obj[items.listSeason[i].leagueId].items[items.listSeason[i].matchName] = items.listSeason[i];
							}else{
								obj[items.listSeason[i].leagueId].items[items.listSeason[i].matchName] = items.listSeason[i]; 
							}
								
						}
						for(let i = 0;i < items.listTeamRate.length; i++){
							if(!obj[items.listTeamRate[i].leagueId].items[items.listTeamRate[i].matchName].team){
								obj[items.listTeamRate[i].leagueId].items[items.listTeamRate[i].matchName].team = [];
								obj[items.listTeamRate[i].leagueId].items[items.listTeamRate[i].matchName].team[0] = items.listTeamRate[i]
							}else{
								obj[items.listTeamRate[i].leagueId].items[items.listTeamRate[i].matchName].team.push(items.listTeamRate[i])
							}
							
						}

						this.obj = obj;
						this.$refs.loadmore.onTopLoaded();
					}
				}, err => {
					Indicator.close();
				})
			}
		}
	}
</script>

<style scoped>
	


	.guanjun .guess-item-list{
		text-indent: .2rem;
	}
	.guanjun .guess-list-title {
		background: #fffadc;
		color: #74490d;
		height: .6rem;
		line-height: .6rem;
		position: relative;
		font-size: .26rem;
		border-bottom: 1px solid #e7e7e7;
		text-align: left;
		
	}

	.guanjun .guess-list-content{
		display: flex;
		flex-wrap: wrap;
	}
	.guanjun .guess-list-content>div{
		box-sizing: border-box;
		height: .6rem;
		line-height: .6rem;
		width: 50%;
		border-bottom: 1px solid #e7e7e7;	
		background: #fff;	
		display: flex;
		justify-content: space-between;
		padding-right:.2rem;
	}
	.guanjun .guess-list-content>div:nth-child(odd){
		border-right: 1px solid #e7e7e7;
	}
	.guanjun .guess-list-content>div span:last-child{
		color:  #ff9600;
	}
	.guanjun .guess-list-content>div.active {
		background:#ff9600 ;
		color: #fff;
	}
	.guanjun .guess-list-content>div.active span:last-child{
		color: #fff;
	}
	
	

</style>