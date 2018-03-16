<template>
    <div class="public-notice" v-if="is_show_notice"  >
        <div class="p-notice-cont" ref="p_public_notice">
            <p>平台公告<span @click="close_notice" > × </span></p>
            <div>
                <p v-if="dataList">{{dataList.content}}</p>
            </div>
            <h3><span v-if="dataList">日期：{{dataList.end_time}}</span></h3>
        </div>
    </div>
</template>

<script>
    import { requestOpt , dtFormate , el_tip } from '../../api/recommend'
    export default{
        watch:{

        },

        methods: {
            get_data(){
                this.dataList = JSON.parse(sessionStorage.getItem('sys_notice'));
                if(!this.dataList ){
                    requestOpt.reqnoGet('sysnotice',(res)=>{
                        if(res.data.status == 1){
                            document.body.style.overflow = 'hidden';
                            this.dataList = res.data.data.list;
                            sessionStorage.setItem('sys_notice',JSON.stringify(res.data.data.list));

                            if(this.dataList.length <= 0){
                                this.is_show_notice = false;
                            }else{
                                this.is_show_notice = true;
                                setTimeout(() => {
                                    this.$refs.p_public_notice.style.transform = 'translateY(0)';
                                    this.$refs.p_public_notice.style.transition = 'all 0.5s';
                                    this.$refs.p_public_notice.style.opacity = '1';
                                }, 100);
                            }

                        }
                    },(err)=>{

                    })

                }
            },
            close_notice(){
                document.body.style.overflow = 'auto';
                this.is_show_notice = false;
            },
            receive_statuse(){
                let guide_flag = localStorage.getItem('show_guide_flag');
                this.$root.bus.$on('showPublicNotice', (flag)=>{
                    if(flag){
                        this.get_data();
                    }
                })
            },
            begin_show_notice(){
                let flag = sessionStorage.getItem('guide_difine_notice');
                if(flag){
                    this.get_data();
                }
            }
        },

        created(){

        },

        mounted(){
            setTimeout(()=>{
              this.receive_statuse();
              this.begin_show_notice();
            },50)
        },

        data(){
            return{
                dataList : '',
                is_show_notice: false,
            }
        }

    }
    
</script>


<style>
    .public-notice{

        position: fixed;
        left: 0;
        top:0;
        bottom: 0;
        right:0;
        background: rgba(0,0,0,.5);
        z-index: 999;
    }

    .p-notice-cont{
        width: 80%;
        margin : 0 auto ;
        margin-top:15vh;
        background: #fff;
        border-radius: 20px;
        min-height: 5rem;
        transform: translateY(-100%);
        transition: all .5s;
        opacity: 0;
        /* padding: 0 20px; */
    }

    /* .p-notice-cont.active{
        transform: translateY(0%);
    } */

    .p-notice-cont>p{
        height: 0.8rem;
        background: #f2f2f2;
        line-height: 0.8rem;
        text-align: center;
        /* border-radius-right-t: 20px; */
        position:relative;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        font-weight: 700;
        font-size:0.35rem;;
    }
    
    .p-notice-cont>p span{
        position: absolute;
        font-size: 20px;
        right: 10px;
        padding: 0 10px;
        cursor: pointer;
    }

     .p-notice-cont>div{
         padding:0.2rem;
     }
     .p-notice-cont>div > p{
         word-spacing: 0.5px;
         letter-spacing: 0.5px;
         font-size:16px;
         height:30px;
         line-height: 30px;
     }

     .p-notice-cont > h3{
         font-weight: normal;
         position: relative;
         margin-top:10px;
         height:35px;
     }
     .p-notice-cont > h3 > span{
         position: absolute;
         right: 0;
         padding-right:10px;
         
     }
    
</style>
