<template>
    <div class="agentInstruction">
        <Back :title="head_title"></Back>
        <div class="agentInstruction_img">
          <img :src="html_data.imageUrl" alt="">
        </div>
        <div class="agentInstruction_cont">
            <div v-html="html_data.content">
            </div>
        </div>
    </div>
</template>

<script>
    import Back from '../../back/back.vue';
    import {requestOpt,getUserInfo} from 'api/recommend'
    import { Toast } from 'mint-ui';
    export default{
        components:{
            Back
        },
        name : 'Agency',
        data(){
            return{
                head_title : '代理说明',
                html_data:'',
                user : ''
            }
        },
        methods:{
            get_data(){
                requestOpt.reqTokenGet('agent/remark',this.user.authToken,
                    (res)=>{

                        if(res.data.status){
                            this.html_data = res.data.data;
                        }else{
                            Toast(res.data.msg);
                        }
                    },
                    
                    (err)=>{
                       Toast('网络链接失败，请稍后再试');;
                    })
                }

        },

        mounted(){
            this.user = getUserInfo();
            this.get_data();
        }
}
</script>

<style scoped>

  .agentInstruction_img{
      margin-top:0.88rem;
      width:100%;
      min-height: 3rem;
      background: #f3f3f3;
  }
  .agentInstruction_img>img{
    
  }
  .agentInstruction{
      min-height: 12.45rem;
      background: #fff;
  }
  .agentInstruction_cont{
      padding: 0.15rem;
  }
</style>

