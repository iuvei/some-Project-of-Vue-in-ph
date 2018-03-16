<template>
    <div class="detail_promo">   
       <div v-html="data_list" class="son_detail_promo">

       </div>
    </div>
</template>


<script>

    import { requestOpt, el_tip } from '../../api/recommend';

    export default{
        name : 'DropPromo',
        data(){

            return{
                    data_list: ''
            }
        },
        methods:{

            getData(){
          
                    requestOpt.reqnoGet('activity?act_id=' + this.$route.params.id,
                        (res)=>{
                            if(res.status == 200 || res.data.status == 1){
                                this.data_list = res.data;
                                 setTimeout(()=>{
                                    this.setCss();
                                },50)
                                // console.log(res);
                            }else{
                                el_tip(res.data.msg)
                            }
                        },
                        (err)=>{
                            el_tip(err.data.msg)
                    })
            },
            setCss(){
               let son_detail_promo =  document.querySelector('.son_detail_promo');
               let ele_ps = son_detail_promo.getElementsByTagName('p');
            //    console.log(ele_ps);
               for(let i = 0; i < ele_ps.length; i++){
                   ele_ps[i].style.lineHeight = '40px';
                //    ele_ps[i].style.color = 'green';
                   ele_ps[i].style.color = '#0047aa';
               }
                
               for(let i = 0; i < ele_ps.length; i++){
                //    console.log(ele_ps[i].innerHTML == '<br>')
                   if(ele_ps[i].innerHTML == '<br>'){
                       ele_ps[i].style.display = 'none';
                   }else {
                       ele_ps[i].style.display = 'block';
                   }
               }
            }
               
        },
        mounted(){

            this.getData();
          

        }

    }

</script>

<style scoped>
    .detail_promo , .detail_promo>div{
        background:#fff;
    }
    .detail_promo{
        padding: 15px;
        background: #fff;
    }
    .detail_promo > div >p{
        line-height: 50px;
    }
    .son_detail_promo{
        border: 1px solid #ddd;
        border-radius: 20px;
        padding: 15px;
        box-shadow: 0 0 10px rgba(0,0,0, .2);
    }
</style>

