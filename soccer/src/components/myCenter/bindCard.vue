<template>
	<div class="bindCard">
		<back title="绑定银行卡" ></back>
		<p>用于提款,用户和身份证名称保存一致,否则影响大奖领取</p>
		<div class="picker-btn" v-show="showPicker">
			<a></a>
			<p>选择银行</p>
			<a @click="choseBank">确定</a>
		</div>
		<mt-picker @change="onValuesChange" :slots="slots" value-key="name" v-show="showPicker" class="bind-picker"></mt-picker>
		<mt-field label="姓名：" placeholder="请输入真实姓名" v-model="userName" ></mt-field>
		<mt-field label="银行" disableClear placeholder="点击选择银行" readonly v-model="bankName" ref="choseBank"></mt-field>
		<mt-field label="银行账号" placeholder="请输入银行账户号码" type="number" v-model="bankCard"></mt-field>
		<mt-field label="开户支行" placeholder="请输入开户支行" v-model="branch"></mt-field>
		<mt-field label="交易密码" placeholder="请输入交易密码(6位)" type="number" v-model="password"></mt-field>
		<a class="yes-btn" @click="bankBindBtn">确定</a>
	</div>
</template>

<script type="text/ecmascript-6">
import Back from '@/components/back/back'
import { requestOpt ,getUserInfo ,setUserInfo} from 'api/recommend'
import { Indicator, Toast } from "mint-ui";
export default {
	components: {
		Back
	},
	data() {
		return {
			slots: [{
				flex: 1,
				values: [],
				className: 'slot',
				textAlign: 'center'
			}],
			showPicker: false,
			userName: "",
			bankName: "",
			bankID: "",
			bankCard: "",
			branch: "",
			password: "",
			beginChange: false,
			isFrist:true
		}
	},
	computed: {

	},
	mounted() {
		
		requestOpt.reqTokenGet('bank', getUserInfo().authToken, res => {
			this.slots[0].values = res.data.data;
			let data  = res.data.data
			this.$refs.choseBank.$el.onclick = res => {
				this.showPicker = !this.showPicker;
				this.beginChange = true;
				if(this.isFrist){
					this.bankID = data[0].id;
					this.bankName = data[0].name;
					this.isFrist = false;
				}
			}
		}, err => {

		})
	},
	methods: {
		choseBank() {
			this.showPicker = false;
		},
		onValuesChange(picker, values) {
			if(this.beginChange) {
				this.bankID = values[0].id;
				this.bankName = values[0].name;
			}
		},
		bankBindBtn() {
			if(!this.userName || !this.password || !this.bankID || !this.bankCard || !this.branch ) {
				Toast('请填写完表格');
				return false;
			}
			if( /^[\u4E00-\u9FA5]+$/.test(this.userName) && this.userName.length < 2 ) {
				Toast('错误的姓名');
				return false;
			}
			if(this.bankCard.length < 16 || this.bankCard.length > 19) {
				Toast('错误的银行卡号');
				return false;
			}
			if(this.branch.length < 4) {
				Toast('银行地址至少4个字符');
				return false;
			}
			if(!/^\d{6}$/.test(this.password)) {
				Toast('交易密码只能是6位数字');
				return false;
			}
			Indicator.open();
			requestOpt.reqTokenPost('extract/msg',  getUserInfo().authToken, {
					userName: this.userName,
					bankID: this.bankID,
					bankCard: this.bankCard,
					branch: this.branch,
					password: this.password
				}, res => {
				if(res.data.status){
					Indicator.close();
					Toast("保存成功");
					let userInfo = getUserInfo();
					userInfo.isBindCard = true;
					setUserInfo(userInfo)
					 this.$router.push('/myCenter')
				}else{
					Indicator.close();
					Toast(res.data.msg)
				}
			}, err => {
				Toast('网络链接失败，请稍后再试')
			})}
	}
}</script>

<style scoped>.bindCard {
	padding: 80px .2rem 0 .2rem;
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	width: 7.1rem;
	background: #efeff4;
}
.bindCard>p{
	font-size: .18rem;
	color: #FC823C;
	margin-bottom: .2rem;
}
.bind-picker {
	position: absolute;
	bottom: 0;
	right: 0;
	z-index: 99;
	background: #fff;
	width: 100%;
}

.picker-btn {
	font-size: .28rem;
	position: absolute;
	bottom: 180px;
	left: 0;
	background: #fff;
	line-height: 1rem;
	height: 1rem;
	padding: 0 .3rem;
	width: 6.9rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.yes-btn{
	display: block;
	margin-top: .5rem;
	width: 100%;
	text-align: center;
	height: 1rem;
	line-height: 1rem;
	background: #009BDB;
	color: #fff;
	border-radius: .1rem;
	font-size: .3rem;
}

</style>