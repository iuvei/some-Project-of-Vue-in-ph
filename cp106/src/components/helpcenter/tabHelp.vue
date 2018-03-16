<template>
   <div class="tabHelp" id="tabHelp">
       <ul :class="{heng_lei: is_heng_lei == true}">
           <li :id="'help_tab_'+index" @click="open_li(index)" :class="{'active' : is_show_li[index]}" v-for="(item,index) in title_arr" :key="index">{{item}}</li>
       </ul>

       <div class="tabHelp_main"  style="padding-bottom:100px;">
           <div v-show="is_show_li[indexss]" v-for="(itemss,indexss) in title_arr" :key="indexss" style="padding-bottom:50px;">
                <h2>{{itemss}}</h2>
                <el-collapse v-model="activeName" accordion v-for="(items,indexs) in help_data" :key="indexs" v-if="indexs == itemss" >
                    <el-collapse-item :name="index"  v-for="(item,index) in items" :key="index" :id="'son_help_tab_' + index"> 
                        <template slot="title">
                          <h4>  {{index + 1 }}.  {{ item.title }} </h4>
                        </template>
                        <ol>
                            
                            <li class="clearfix" v-html="item.content">
                            </li> 
                         
                        </ol>
                    </el-collapse-item>
                </el-collapse>
           </div>
       </div>
   </div>
</template>

<script>
    import { requestOpt } from '../../api/recommend'
    export default{

        name : 'TopHelp',
        data(){
            return{
                is_show_li : [true],
                is_heng_lei : false,
                activeName: '0',
                help_data:[],
                title_arr:[],
            }
        },
        methods:{
            open_li(index){
                 this.is_show_li = [];
                 this.is_show_li[index] = true;
                 this.is_heng_lei = index == 0 ? 'false' : true;
            },
            // 获取帮助中心数据
            get_help_data(){
                // this.help_data =  JSON.parse(sessionStorage.getItem('help_data_list'));
                // this.title_arr = JSON.parse(sessionStorage.getItem('title_arr'));
                // if(!this.help_data || !this.title_arr){

                    setTimeout(()=>{
                        this.help_data = JSON.parse(localStorage.getItem('help_data_list') );
                         for(var k in this.help_data){
                            this.title_arr.push(k);
                         }
                        // console.log(this.help_data);
                    },30);
                    // requestOpt.reqnoGet('help_list',
                    //     (res)=>{
                    //         if(res.data.status == 1){
                    //             this.help_data = res.data.data.list;
                    //             for(var k in res.data.data.list){
                    //                 this.title_arr.push(k);
                    //             }
                    //             sessionStorage.setItem('help_data_list', JSON.stringify(res.data.data.list));
                    //         }
                    //     }, 
                        
                    //     (err)=>{
                    //         if(err.data){
                    //                 this.$message({
                    //                 type: 'info',
                    //                 message: err.data.msg
                    //             });
                    //         }
                    // })
              
            },
            // 提取帮助中心标题
            get_help_title(obj){
            
            },
            get_help_tab(){
                this.$root.bus.$on('send_help_tab',(index)=>{
                    if(typeof index == 'number'){
                        setTimeout(()=>{
                            $('#help_tab_' + index).trigger('click');
                            this.open_li(index);
                        },100);
                    }else{
                        let i = index.substr(0,1);
                        var title = index.substr(1);
                        setTimeout(()=>{
                            $('#help_tab_' + i).trigger('click');
                            this.open_li(i);
                            $('#son_help_tab_'+ title).trigger('click');
                            this.activeName = title;
                            console.log(title);
                        },100);

                    }
                    
                   
                })

            }

        },
        mounted(){
            this.get_help_data();
            this.get_help_tab();
        }

    }

</script>

<style >


    .tabHelp{
        padding-top: 14px;
        display: flex;
    }

    /* 左边tab栏 */
    .tabHelp>ul{
        margin-right: 20px;
    }
    .tabHelp>ul>li{
        width: 35px;
        padding: 20px 5px;
        /* width:  */
        /* height: 100px; */
        cursor: pointer;
        font-size: 14px;
        color: #0047aa;
        background: #fff;
        border-radius: 8px;
        text-align: center;
        margin-bottom: 8px; 
        box-shadow: 0px 5px 5px rgba(0,0,0,0.2);
    }

    .tabHelp>ul>li.active{
        background: #0047aa;
        color: #fff;
    }

    .tabHelp>ul.heng_lei>li{
        width: 200px;
        /* height: 30px; */
        padding: 12px;
        text-align: left;
    }

    .tabHelp_main>div{
        background: #fff;
    }

    /* 右边面板切换 */
    .tabHelp_main{
        width: 95%;
    }

    #tabHelp .el-collapse, #tabHelp div.el-collapse-item__header,  #tabHelp div.el-collapse-item__wrap{
        border: none;
    }

    #tabHelp .el-collapse-item__arrow {
        display: none;
    }

    .tabHelp_main>div{
        padding: 10px 20px;
    }
    .tabHelp_main>div>h2{
       border-bottom: 1px solid #ccc;
       padding: 10px  0px;
       font-size: 20px;
       color: #000;
    }


    #tabHelp .el-collapse-item__header h4{
        font-weight: 900;
        color: #000;
        font-size: 17px;
    }


    #tabHelp .el-collapse-item__content  ol li{

        font-size: 15px;
    }

     #tabHelp  .el-collapse-item__content{
         padding-bottom: 20px;
     }

     #tabHelp  .el-collapse-item__content {
         overflow-y: scroll;
     }
</style>
