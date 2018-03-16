<template>

    <div class="topNoteDetail">
        <div class="topNoteDetail_head"> <span  class="el-icon-arrow-left" @click="go_back"></span> 公告信息</div>
        <div class="detail_content">
            <div class="content_tit"> </div>
            
            <div class="content_main">
                <div class="content_main_item" v-for="(item,index) in dataList" :key="index">
                    <p> {{ item.content }} </p>
                    <h5>{{item.end_time}}</h5>
                </div>
               
            </div>
        </div>
    </div>

</template>

<script>
    import { requestOpt , el_tip } from '../../api/recommend'
    import { messageBox } from 'element-ui';
    export  default{
        name:  'NopNote',
        data(){
            return{
              dataList :[],
            }
        },
        mounted(){
            this.start_all_message();
        },
        methods:{
            getData(){
                this.dataList  = JSON.parse(sessionStorage.getItem('topNotice'));
                if(!this.dataList){
                    requestOpt.reqnoGet('notice',
                        (res)=>{
                            if(res.data.status == 1 || res.status == 200){
                                this.dataList = res.data.data.list;
                                sessionStorage.setItem('topNotice' , JSON.stringify(this.dataList)) 
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
                            if(err.data){
                                el_tip(err.data.msg);
                            }
                     })
                }
            },
            go_back(){
                this.$router.go(-1);
            }

       
        },
        mounted(){
            this.getData();
        }
    }

</script>


<style scoped>

.topNoteDetail{
    min-height: 750px;
    background: #f9f9f9;
}
.topNoteDetail_head{
    height: 30px;
    line-height: 30px;
    background: #0047aa;
    color:#fff;
    text-align: center;
    position: relative;
}
 .topNoteDetail_head span{
     position: absolute;
     left: 0px;
     height: 30px;
     line-height: 30px;
     padding: 0 20px;
     cursor: pointer;
 }

.detail_content{
    background: #f9f9f9;
    height: 100%;
    box-sizing: border-box;
    display: flex;
}

.content_tit {
    width: 5px;
    margin-left : 50px;
    height: auto;
    min-height: 720px;
    background: url('../../image/notice_line.png') repeat-y center ;
    margin-left: 20%;
}



.content_main_item{
    width:650px;
    position: relative;
    margin-left: 10%;
}
.content_main{
   padding: 20px;

}

.content_main_item {
    box-shadow: 1px 1px 5px rgba(0,0,0,.2);
    border-radius: 10px;
    background: #fff;
    margin-bottom: 30px;
}
.content_main_item p{
    padding: 15px;
    position: relative;
}

.content_main_item p::before{
    content: "";
    display: inline-block;
    position: absolute;
    left:-20px;
    top:30px;
    width: 0;
    height: 0;
    border-top:15px solid transparent;
    border-bottom:15px solid transparent;
    border-right:20px solid #fff;
    /* box-shadow: 0px 0px 2px rgba(0,0,0,.2); */
}

.content_main_item p::after{
    content: "";
    display: inline-block;
    width: 40px;
    height: 40px;
    background: url('../../image/notice_news_icon.png') no-repeat center / cover;
    position: absolute;
    left: -16.5%;
    top:30px;
}

.content_main_item h5{
    border-top: 1px solid #ddd;
    height: 35px;
    line-height: 35px;
    padding-left:15px;
    font-weight: normal;
    font-size: 14px;
}

</style>

