<template>
   <div class="bottom_help">
        <div class="bottom_help_cont">
            <div class="bottom_help_cont_div">
                <img src="../../image/logo2.488ee720.png" alt="">
                <div>
                    <p>账户安全</p>
                    <p>购彩便捷</p>
                    <p>兑奖简单</p>
                    <p>提款快速</p>
                </div>
            </div>

            <div v-for="(items,indexs) in help_data" :key="indexs" v-if="(indexs !='其他' && indexs!= '常规问题')">
                <h4>{{indexs}}</h4>
                <ul>
                    <!-- <li>如何进行充值？</li>
                    <li>充值要手续费吗？</li>
                    <li>有银行卡就可以充值了吗？</li>
                    <li>使用网上银行安全吗？</li>
                    <li>如何购买彩票</li> -->
                    <li @click="go_help(indexs,index)"  v-for="(item,index) in items" :key="index">{{item.title}}</li>
                </ul>
            </div>

            <div>
                <h4>联系我们</h4>
                <ul class="last_ul">
                    <!-- <li style="cursor:default;">微信: cp106vipcom</li> -->
                    <li style="cursor:default;">QQ: 763222666</li>
                    <li>  <a target="_blank" v-if="this.config_arr" :href="this.config_arr.client_service_url">在线客服</a ></li>
                </ul>
            </div>
        </div>

   </div>
</template>

<script>
    import { requestOpt , dtFormate , el_tip} from '../../api/recommend'
    export default{
        name : 'BottomHelp',
        data(){
            return{
                help_data:[],
                title_arr :[],
                config_arr : []
            }
        },
        methods:{

            get_help_data(){
                // setTimeout(()=>{
                    this.help_data =  JSON.parse(localStorage.getItem('help_data_list'));
                    for(var k in this.help_data){
                        this.title_arr.push(k);
                    }

                    if(!this.help_data  ||  !this.title_arr){
                        requestOpt.reqnoGet('help_list',
                            (res)=>{
                                if(res.data.status == 1 || res.status == 200){
                                    this.help_data = res.data.data.list;

                                    for(var k in res.data.data.list){
                                        this.title_arr.push(k);
                                    }
                                    localStorage.setItem('help_data_list', JSON.stringify(res.data.data.list));
                                    // sessionStorage.setItem('title_arr',JSON.stringify(this.title_arr));
                                }else if(res.data.status == 0 && res.data.code == -2){
                                    el_tip(res.data.msg + ' 请重新登录');
                                    sessionStorage.removeItem('user')
                                    setTimeout(()=>{
                                        window.location.reload();
                                        this.$root.bus.$emit("sendData",true);
                                    },1000)
                                }else{
                                    el_tip(res.data.msg);
                                }
                            },

                            (err)=>{
                                if(err.data){
                                        this.$message({
                                        type: 'info',
                                        message: err.data.msg
                                    });
                                }
                        })
                    }


                // },30)
                // this.title_arr = JSON.parse(localStorage.getItem('title_arr'));


            },

            go_help(str,index){
                for(var i= 0; i < this.title_arr.length; i++){

                    if(str == this.title_arr[i]){
                        this.$root.bus.$emit('send_help_tab', i+''+index)
                        this.$router.push('/helpcenter');

                    }
                }

            },
            get_config(){
                this.config_arr = JSON.parse(sessionStorage.getItem('app_config'));
                if(!this.config_arr){
                    requestOpt.reqnoGet('config',(res)=>{
                        if(res.data.status == 1 || res.status == 200){
                            this.config_arr = res.data.data.config;
                            sessionStorage.setItem('app_config',JSON.stringify(this.config_arr));
                        }else if(res.data.status == 0 && res.data.code == -2){
                            el_tip(res.data.msg + ' 请重新登录');
                            sessionStorage.removeItem('user')
                            setTimeout(()=>{
                                window.location.reload();
                                this.$root.bus.$emit("sendData",true);
                            },1000)
                        }else{
                            el_tip(res.data.msg);
                        }
                    },(err)=>{
                        if(err){
                            el_tip(err.data.msg)
                        }
                    })
                }

            }

        },
        mounted(){
            this.get_config();
            this.get_help_data();
        }
    }
</script>

<style scopd>

    .bottom_help{
        width: 100%;
        background:#fff;

    }

    .bottom_help_cont{
        width: 1200px;
        margin: 0 auto;
        padding-top: 20px;
        display: flex;
    }

    .bottom_help_cont>div{
        flex:1;
        border-right:1px dashed #ccc;
        /* padding:10px 20px; */
    }

    /* logo部分 */
    .bottom_help_cont_div>div{
        display: flex;
        flex-wrap: wrap;
        margin-top: 20px;
    }

    .bottom_help_cont_div>div>p{
        width: 50%;
    }

    .bottom_help_cont_div>div>p:nth-child(2), .bottom_help_cont_div>div>p:nth-child(4){
        margin-left: -20px;
    }

    .bottom_help_cont_div>div>p::before{
        content: "";
        display: inline-block;
        width: 20px;
        height: 20px;
        background: url('../../image/huangse_duigou.png') no-repeat center / cover;
        vertical-align: middle;
        margin-right: 5px;
    }

    /* 帮助列表部分 */

    .bottom_help_cont>div>ul{
        padding: 10px 20px;
    }

    .bottom_help_cont>div>ul>li{
        font-size: 12px;
        color: #000;
        cursor: pointer;
        padding: 3px 0;
        margin-bottom: 5px;
    }

    .bottom_help_cont>div>h4{
        padding-left: 20px;
        font-size: 15px;
        color: #000;
    }

    .bottom_help_cont>div:last-child>ul>li::before{
        content: "";
        display: inline-block;
        width: 20px;
        height: 20px;
        background: url('../../image/wechat_logo.png') no-repeat center / cover;
        vertical-align: middle;
        margin-right: 10px;
    }

    .bottom_help_cont>div:last-child>ul>li:nth-child(2)::before{
        background: url('../../image/qq_logo.png') no-repeat center / cover;
    }

    .bottom_help_cont>div:last-child>ul>li:nth-child(3)::before{
        background: url('../../image/kefu_logo.png') no-repeat center / cover;
    }

</style>


