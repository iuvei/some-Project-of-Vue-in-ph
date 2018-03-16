<template>
  <div class="b-card-content">
    <back title="绑定银行卡" go-back="true"></back>
    <div class="b-card">
      <!--<h4>用于提款,户名和身份证信息完全一致,否则影响大奖提取</h4>-->
      <h4>{{user.bankcard_hint}}</h4>
      <dl style="position: relative">
        <dt>持 卡 人 :</dt>
        <dd class="verification1">
          <input type="text" placeholder="请输入开户名" maxlength="24" v-model="username">
        </dd>
        <dd class="center-list1" @click="tanscation('username')"><img src="../../images/prompt@3x.png" alt="warning"></dd>
      </dl>
      <dl>
        <dt>银行名称:</dt>
        <dd class="verification1">
          <!--<select name="" id="" v-model="bank" >-->
            <!--<option v-for="banks in banks" :value="banks.id">{{banks.bank_name}}</option>-->
          <!--</select>-->
          <!--<span v-if="!bank">点击选择开户银行</span>-->
          <input type="text" placeholder="点击选择开户银行" maxlength="24" v-model="bankName" readonly  @click.prevent="showList=true">
        </dd>
        <!--<dd class="center-list2"><img src="../../images/my_more.png" alt="右箭头"></dd>-->
      </dl>
      <dl>
        <dt>银行账号:</dt>
        <dd class="verification1">
          <input type="tel" placeholder="请输入银行账号" maxlength="24" v-model="banknum">
        </dd>
      </dl>
      <dl>
        <dt>开户支行:</dt>
        <dd class="verification1">
          <input type="text" placeholder="请输入开户支行" maxlength="24" v-model="bankaddr">
        </dd>
      </dl>
      <dl style="position: relative">
        <dt>交易密码:</dt>
        <dd class="verification1">
          <input type="text" placeholder="请设置交易密码" maxlength="6" v-model="trailpw">
        </dd>
        <dd class="center-list1" @click="tanscation('tanscation')"><img src="../../images/prompt@3x.png" alt="warning"></dd>
      </dl>
      <dl  class="verification3">
        <input type="button" value="确认提交" @click="bankBindBtn">
      </dl>
    </div>
    <!--define dialog-->
    <def-dialog v-if="showModule" @close="showModule = false" :title="modalTitle" :btn-color="modalColor" :btn-text="modalText">
      <div slot="body" style="padding: 0 .1rem">
        {{modalBody}}
      </div>
    </def-dialog>
    <!--bank-list-->
    <modal-list v-if="showList" @close="showList = false" :width="width" :top="top" :left="left">
      <div slot="body" class="modal-list">
        <div class="modal-item" v-for="(item,i) in banks" @click="chaBank(item.bank_name, item.id)">
          <img  :src="item.bank_logo" alt="">
          {{item.bank_name}}
        </div>
      </div>
    </modal-list>
    <!--define modal @close="closeModal"-->
    <modal v-if="showModale" :to-link="toLink" :body="modal1"></modal>
  </div>
</template>


<script type="text/ecmascript-6">
  import Back from '@/components/back/back'
  import defDialog from '@/components/public/define_dialog'
  import ModalList from '@/components/public/modal-list'
  import modal from '@/components/public/modal_comfire'
  import {alertip, requestOpt, mt_toast} from  'api/recommend'
  import {getProvince, getCity, getArea} from 'api/publicInterface'
  import {mapState, mapActions} from 'vuex'
  import {OF_CARD_NAME, OF_CARD_NUMMBER} from '../../store/user'

  export default {
    components: {
      Back,
      defDialog,
      ModalList,
      modal,
    },
    data() {
      return {
        width: '70%',
        top: '1.3rem',
        left: '.7rem',
        banks: [],
        bank: '',
        bankName:'',
        username: '',
        banknum: '',
        bankaddr: '',
        trailpw: '',
        showModule: false,
        showTitle: false,
        modalTitle: '持卡人说明',
        modalColor: '#11C1F3',
        modalText: '知道了',
        modalBody: '为了您的账号资金安全，只能绑定持卡人本人的银行卡。获取帮助，请联系在线客服',
        showList: false,
        modalFlag: 'username',
        showModale: false,
        modal1: '绑定银行卡成功!',
        toLink: 'bankcard',
        userinfo: JSON.parse(sessionStorage.getItem('userinfo'))
        /*bankcard_hint: this.user.bankcard_hint*/
      }
    },
    computed: mapState({user: state => state.user}),
    methods: {
      ...mapActions([OF_CARD_NAME, OF_CARD_NUMMBER]),

      getBanks() { // 获取银行卡列表
        requestOpt.reqnoGet('banks', (res) => {
          if (res.data.status==1) {
            this.banks = res.data.data.list;
            console.log(this.banks)
          } else {
            mt_toast(res.data.msg)
          }
        }, (err) => {
          mt_toast(err);
        })
      },
      tanscation(modalFlag) {
        this.showModule = true
        if(modalFlag === 'username') {
          this.modalTitle = '持卡人说明'
          this.modalBody = '为了您的账号资金安全，只能绑定持卡人本人的银行卡。获取帮助，请联系在线客服'
        } else {
          this.modalTitle = '温馨提示'
          this.modalBody = '交易密码用于余额提现，可以在个人信息中修改'
        }

      },
      chaBank(name,id) {
        this.bank = id;
        this.bankName = name
//        console.log(this.bank)
      },
      bankBindBtn() { // 完成银行卡绑定确定按钮
        if (!this.username) {
          mt_toast('请输入持卡人姓名');
          return false;
        }
        if (!this.bank) {
          mt_toast('请选择银行');
          return false;
        }
        if (!this.banknum) {
          mt_toast('请输入银行卡账号');
          return false;
        }
        if (!this.bankaddr) {
          mt_toast('请输入开户支行');
          return false;
        }
        if (!this.trailpw) {
          mt_toast('请输入交易密码');
          return false;
        }
        if (this.username.length < 2) {
          mt_toast('错误的姓名');
          return false;
        }
        if (!/^[0-9]{14,}$/.test(this.banknum)) {
          mt_toast('错误的银行卡号');
          return false;
        }
        if (this.bankaddr < 4) {
          mt_toast('银行地址至少4个字符');
          return false;
        }
        if (this.trailpw.length < 6) {
          mt_toast('交易密码不能少于6位');
          return false;
        }
        //  sessionStorage.getItem('token')  this.user.token
        requestOpt.reqPutAuthUser('bank_card', sessionStorage.getItem('token'), {
          bank_id: this.bank,
          province_id: '440000',
          city_id: '440300',
          area_id: '440306',
          real_name: this.username,
          card_number: this.banknum,
          bank_address: this.bankaddr,
          pay_password: this.trailpw
        }, res => {
//          mt_toast(res.data.msg)
          console.log(res.data.status)
          if (res.data.status === 1) {
            this.showModale = true
//            this.$store.state.user.userinfo.bankcard = this.banknum
//            this.OF_CARD_NAME(this.username)
//            this.OF_CARD_NAME(this.banknum)
            // this.$root.bus.
//            var flag = true;
//            this.$root.bus.$emit("sendFlag", flag);
//            this.$router.push('/personals')
            // window.location.reload();
            // this.$router.go(-1)
          };
          if (res.data.code == -1 || res.data.code == -2 || res.data.code == -3 ) {
            window.sessionStorage.removeItem('userinfo')
            window.sessionStorage.removeItem('login')
            window.sessionStorage.removeItem('token')
            this.$router.push('/login')
          }
        }, err => {
          mt_toast(err)
        })
      },
    },
    created() {
      if (!sessionStorage.getItem('token')) {
        this.$router.push('/login')
      }
      this.getBanks();
      getProvince((res) => { // 获取省份
        if (res.data.status === 1) {
          this.provinces = res.data.data.list;
//          console.log(this.provinces)
        } else {
          mt_toast(res.data.msg)
        }
      });

      getCity('440000',(res) => { // 获取城市
        if (res.data.status === 1) {
          this.cities = res.data.data.list;
//          console.log(this.cities)
        } else {
          mt_toast(res.data.msg)
        }
      });

      getArea('440300',(res) => { // 获取地区
        if (res.data.status === 1) {
          this.areas = res.data.data.list;
//          console.log(this.areas)
        } else {
          mt_toast(res.data.msg)
        }
      });
    },
    mounted() {
//      this.getBanks();

    },
    watch: {
      /*bank: function(id) {
        console.log(id)
      }*/
    }
  }

</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .b-card-content{
    width :7.5rem;
    // height: 13.34rem;
    height: 100%;
    display block
    overflow hidden
    background #eeeeee
  }
  .b-card{
    width 7.1rem
    height 8rem
    display block
    margin auto
    margin-top 1.08rem
  }
  .b-card h4{
    font-size 0.24rem
    color: #fc823c;
    display block
    width 7.1rem
    overflow hidden
    line-height 0.4rem
    margin-top 0.2rem
    text-align center
  }
  .b-card dl{
    width 7.1rem
    height 0.98rem
    display block
    background #ffffff
    line-height 0.98rem
    margin-top 0.1rem
  }
  .b-card dl  dt{
    width 1.5rem
    height 0.68rem
    display inline-block
    color #000000
    font-size 0.32rem
    margin-left 0.1rem
    float left
    margin-right 0.2rem;
  }
  .b-card dl  dd.verification1{
    position relative
    width 4rem
    height 0.68rem
    display inline-block
    color #000000
    font-size 0.28rem
    float left
    background #ffffff
  }
  .verification1 select{
       position relative
       top -1px
       z-index 2
       width 5.9rem
       height 0.68rem
       background transparent
       line-height 0.68rem
       color #000000
       font-size 0.28rem
       border none
       outline none
       appearance:none;
       -moz-appearance:none;
       -webkit-appearance:none;
     }
  .verification1 select option{
    width 4rem
    color #000000
    font-size 0.2rem
    border none
    outline none
    appearance:none;
    -moz-appearance:none;
    -webkit-appearance:none;
    text-align center
    display inline-block
  }

  .verification1 input[type=text]{
    position relative
    top -1px
    width 5rem
    height 0.68rem
    line-height 0.68rem
    color #000000
    font-size 0.28rem
    border none
    outline none
  }
  .verification1 span {
    display inline-block
    position absolute
    top 0
    height 100%
    left 0
    color #777
  }


  .b-card dl.verification3{
    line-height 0.68rem
    margin-top 0.4rem
  }
  .b-card dl.verification3 input{
    width 7.1rem
    height 0.68rem
    color #ffffff
    display block
    border:none
    outline:none
    border-radius 0.04rem
    font-size 0.32rem
    background #ff3a3a
  }

.center-list1{
  width 1rem
  height 0.98rem
  position absolute
  right 0
  img {
    position absolute
    right 0.1rem
    top 0.26rem
    width 50%
    height 50%
  }
}

  .center-list2{
    width: 0.8rem;
    float: right;
    display: inline-block;
    text-align: right;
    line-height: 0.68rem;
  }
  .center-list2 img{
    width: 0.18rem;
    height: 0.3rem;
    float: right;
    display: inline-block;
    margin-top: 0.32rem;
    margin-right: 0.1rem;
  }
  .waring{
    width: 0.8rem;
    float: right;
    display: inline-block;
    text-align: right;
    line-height: 0.68rem;
  }
  .waring img{
    width: 0.5rem;
    height: 0.5rem;
    float: right;
    display: inline-block;
    margin-top: 0.09rem;
    margin-right: 0.1rem;
  }

  .modal-list {
    height 7rem
    overflow-y scroll
    .modal-item {
      position relative
      padding 0.5rem
      border-bottom 1px solid #ddd
      /*text-align center*/
      text-indent .8rem
      img {
        position absolute
        left .5rem
        top .4rem
        width .5rem
        height .5rem
        border-radius 50%
      }
    }
  }
</style>










































































