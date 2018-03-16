<template>
<div class="myData">
	<back title="个人资料"></back>
	<div class="myData-list big border" @click="setImg">
		<div class="touxiang-warp">
			<span>头像</span>
			<div>
				<img :src="data.avatar" v-if="data.avatar"/>
				<img src="../../../images/user_no.png" v-if="!data.avatar"/>
			</div>
		</div>
		<p>点击可操作头像</p>
	</div>
	<!--<div class="myData-list border" @click="setName">
		<div>昵称</div>
		<p>{{data.username}}</p>
	</div>-->
	<router-link tag="div" to="/setAutograph"  class="myData-list border">
		<div>签名</div>
		<p class="signature">{{data.signature}}</p>
	</router-link>
	<div class="myData-list">
		<div>性别</div>
		<ul>
			<li :class="{active : data.sex == 1}" class="nan" @click="choseSex(1)">男</li>
			<li :class="{active : data.sex == 2}" class="nv" @click="choseSex(2)">女</li>
			<li :class="{active : data.sex == 3}" class="chai" @click="choseSex(3)">你猜</li>
		</ul>
	</div>
	<router-link tag="div" to="/level"  class="myData-list  grade-warp">
		<div>等级</div>
		<div class="grade">
			<span>LV{{data.level}}</span>
			<p>{{data.points}}分</p>
		</div>
	</router-link>
 </div>
</template>

<script type="text/ecmascript-6">
import Back from '@/components/back/back'
import { Indicator ,Toast} from "mint-ui";
import { getUserInfo ,requestOpt ,setUserInfo} from 'api/recommend';
	export default {
		components: {
			Back
		},
		data() {
			return {
				data:getUserInfo()
			}
		},
		computed: {

		},
		mounted() {
			requestOpt.reqTokenGet('user/getUser',getUserInfo().authToken,res => {
			if(res.data.status){
				this.data = res.data.data;
				setUserInfo(res.data.data);
			}         	
	        }, err => {
	          Toast('网络链接失败，请稍后再试')
	        })			
		},
		methods: {
//			setName(){
//				if(this.data.isEdit==1){
//					Toast('已经修改过名称')
//				}else{
//					this.$router.push('/setName');
//				}
//			},
			setImg(){
				this.$router.push({ path: '/setImg', query: { src : this.data.avatar } });
			},
			choseSex(num){
				if(num == this.data.sex){
					return false
				}
				Indicator.open();
				requestOpt.reqTokenPost('user', getUserInfo().authToken,{
					sex:num
				}, res => {
					Indicator.close();
					if (res.data.status) {
						this.$set(this.data,'sex',num)
					}else{
						Toast(res.data.msg)
					}					
				}, err => {
					Indicator.close();
					Toast('连接服务器失败')
				})
			}
		}
	}
</script>

<style scoped>
	.myData{
		padding-top:.88rem;
	}
	.myData-list .signature{
		max-width: 5rem;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
	}
	.myData .grade-warp{
		margin-top: .4rem;
		background: url(../../../images/arrow_right.png) no-repeat right .3rem center #fff;
		background-size: .2rem .3rem;
	}
	.myData-list .grade{
		display: flex;
		align-items: center;
		margin-right: .4rem;
		color: #848484;
	}
	.myData-list .grade span{
		padding: .08rem .12rem;
		background: #f8cb55;
		color: #fa6626;
		border-radius: .05rem;
		margin-right: .2rem;
	}
	.myData-list{
		padding-left: .4rem;
		padding-right: .4rem;
		height: 1rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: #fff;
	}
	.myData-list .touxiang-warp {
		display: flex;
		align-items: center;
	}
	.myData-list .touxiang-warp div{
		margin-left: .4rem;
		height: 1.2rem;
		width: 1.2rem;
	}
	.myData-list .touxiang-warp div img{
		height: 100%;
		width: 100%;
		border-radius: 50%;
	}
	.myData-list>p{
		color: #848484;
	}
	.myData-list.border{
		border-bottom: 1px solid #f2f3f3;
	}
	.myData-list.big{
		height: 1.58rem;
	}
	.myData-list ul{
		display: flex;
		align-items: center;
		color: #848484;
	}
	.myData-list li{
		padding-left: .45rem;
		margin-left: .36rem;
		height: .38rem;
		line-height: .38rem;
	}
	.myData-list li.nan{
		background: url(../../../images/l_nan_h.png) no-repeat left center;
		background-size: contain;
	}
	.myData-list li.nan.active{
		background: url(../../../images/l_nan.png) no-repeat left center;
		background-size: contain;
	}
	.myData-list li.nv{
		background: url(../../../images/l_nv_h.png) no-repeat left center;
		background-size: contain;
	}
	.myData-list li.nv.active{
		background: url(../../../images/l_nv.png) no-repeat left center;
		background-size: contain;
	}
	.myData-list li.chai{
		background: url(../../../images/l_cai_h.png) no-repeat left center;
		background-size: contain;
	}
	.myData-list li.chai.active{
		background: url(../../../images/l_cai.png) no-repeat left center;
		background-size: contain;
	}
</style>