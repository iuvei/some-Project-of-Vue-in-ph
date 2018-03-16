<template>
    
    <div class="reg_contract">
        <div v-html="dataList">
        </div>
    </div>

</template>

<script>
    import { requestOpt ,el_tip} from '../../api/recommend'
    import { messageBox } from 'element-ui';
    export  default{
        name:  'regContract',
        data(){
            return{
                dataList:'',
            }
        },
        mounted(){
            this.getData();
        },
        methods:{
            getData(){
                this.dataList  = JSON.parse(localStorage.getItem('regContract'));
                if(!this.dataList){
                    requestOpt.reqnoGet('registration_contract',
                        (res)=>{
                            if(res.data.status == 1 || res.status == 200){
                                this.dataList = res.data;
                                localStorage.setItem('regContract' , JSON.stringify(this.dataList))
                            }
                            else if(res.data.status == 0 && res.data.code == -2){
                                el_tip(res.data.msg + ' 请重新登录');
                                sessionStorage.removeItem('user')
                                setTimeout(()=>{
                                    window.location.reload();
                                    this.$root.bus.$emit("sendData",true);
                                },1000)
                            }else {
                                el_tip(res.data.msg)
                            }
                           
                        },
                        (err)=>{
                            if(err.data.msg){
                                 el_tip(err.data.msg);
                        }
                     })
                }
                
            }
        }
    }

</script>


<style scoped>

  .reg_contract{
      background:#fff;
  }

</style>

