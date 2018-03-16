<template>
    
    <div class="son_promo">
        <div v-for="(item,index) in data_list" :key="index" class="active_item">
            <h2>{{ item.title}}</h2>
            <p style="margin-bottom:5px;color:#929292;"> 活动时间：{{item.start_time}}  &nbsp;至&nbsp;  {{item.end_time}} </p>
            <img :src="item.icon" alt="">
            <p style="color:#929292;">{{item.sub_title}}</p>
            <p class="clearfix"><span class="fr look_detail" @click="look_detail(item.id)">查看详情 >></span></p>
        </div>
        <div class="pro_fen_ye" v-show="is_show_promo_fenye">
            <el-pagination
                background
                layout="prev, pager, next"
                @current-change="select_fenye"
                :total="this.total_page * 10">
            </el-pagination>
        </div>      
    </div>

</template>

<script>
    import { requestOpt, el_tip } from '../../api/recommend';
    export default{

        name : 'sonPromo',
        data(){
            return{
                data_list:[],
                total_page: 1,
                curr_page : 1,
                is_show_promo_fenye : true,
                all_data_list :[]
            }
        },
        methods:{

            get_data(){
                this.all_data_list  = JSON.parse(sessionStorage.getItem('all_active_data'));
                if(this.all_data_list ){
                    this.data_list =  this.all_data_list.list;
                    this.total_page =  this.all_data_list.paging_arr.total_pages;
                }
               
                if(!this.all_data_list){
                    requestOpt.reqnoGetpara('activities',
                        {
                            page : this.curr_page
                        },
                        
                        (res)=>{
                            if(res.data.status == 1){
                            this.data_list = res.data.data.list;
                            this.total_page = res.data.data.paging_arr.total_pages;
                            sessionStorage.setItem('all_active_data' ,JSON.stringify(res.data.data));
                            //   this.is_show_promo_fenye = this.total_page <= 1 ? false : true;  
                            //   console.log(res);
                            }else{
                                el_tip(res.data.msg);
                            }
                        },
                        
                        (err)=>{
                            el_tip(err.data.msg);
                    })
                }
              
            },
            // 查看详情
            look_detail(id){
                console.log(id);
                sessionStorage.setItem('act_id',id);
                this.$router.push('/detail_poromo/' + id);
            },
            // 选择分页
            select_fenye(index){
                this.curr_page = index;
                this.get_data();
            }
        },

        mounted(){
            this.get_data();
        }
    }

</script>

<style>
    .active_item{
        width:60%;
        margin: 0px auto 20px auto;
        border: 1px solid #ddd;
        padding: 5px;
    }
    .active_item>img{
        width:100%;
        min-height:232px;
        background:#f2f2f2;
    }
    .active_item h2{
        font-size : 20px;
        color: #000;
        margin-bottom: 5px;

    }

    .pro_fen_ye{
        width:62%;
        margin: 0 auto;
        margin-top:40px;
    }
    .look_detail{
        color: #2091ff;
        margin-bottom:5px;
        cursor: pointer;
        
    }
    
</style>

