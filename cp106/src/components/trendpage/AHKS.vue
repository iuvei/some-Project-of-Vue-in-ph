<template>
    <div class="AHKS">
        <div class="AHKS_wrap AHKS_wrap_1">
            <h3>历史号码走势</h3>
            <div class="check_box" v-show="hide_func_bool">
                <el-checkbox v-model="fu_zhu_xian" >辅助线</el-checkbox>
                <el-checkbox v-model="yi_lou">遗漏</el-checkbox>
                <!-- <el-checkbox v-model="yi_lou_tiao">遗漏条</el-checkbox> -->
                <el-checkbox v-model="zou_shi">走势</el-checkbox>
                <i :class="{'active' : qishu_xuanze[0]}" @click="date_select(0)">最近30期</i>  
                <i :class="{'active' : qishu_xuanze[1]}" @click="date_select(1)">最近60期</i> 
                <i :class="{'active' : qishu_xuanze[2]}" @click="date_select(2)">最近100期</i> 
                <i :class="{'active' : qishu_xuanze[3]}" @click="date_select(3)">最近200期</i>
            </div>
        </div>
       
        <div class="AHKS_wrap AHKS_wrap_2" v-show="is_show_data_1">
            <div class="AHKS_cont" >
                <div class="AHKS_cont_item">
                     <div class="AHKS_cont_head_1" v-if="start_list_box.length > 1">
                        <!-- <h4>期数</h4>
                        <h5>开奖号码</h5>
                        <h6 v-for="item in select_wei"> {{ item }}</h6>
                        <h6>前三</h6>
                        <h6>后三</h6> -->
                        <h4 >{{ start_list_box[0].titles[0]}}</h4>
                        <h5>{{ start_list_box[0].titles[1]}}</h5>
                        <h6>{{ start_list_box[0].titles[2]}}</h6>
                        <!-- <h6 v-for="item in start_list_box[0].titles[2]"> {{ item }}</h6> -->
                        <h6> {{start_list_box[0].titles[3] }} </h6>
                        <h6 style="flex:1.2"> {{ start_list_box[0].titles[4] }} </h6>
                        <h6 v-for="item in start_list_box[0].titles[5]"> {{ item }}</h6>
                        <h6> {{ start_list_box[0].titles[6] }} </h6>
                     </div>
                     <div class="AHKS_cont_data_1">
                         <table>
                             <tbody>
                                 <tr v-for="(items,indexs) in start_list_box" v-if="items.bit_modes">
                                     <td>{{ items.issue_number }}</td>
                                     <td >{{ items.res['0'] }}  {{ items.res['1'] }} {{ items.res['2'] }} {{ items.res['3'] }}  {{ items.res['4'] }}</td>
                                      <td>{{ items.sum }}</td>
                                      <td>{{ items.span }}</td>
                                      <td style="flex:1.2">{{ items.kuai3_form }}</td>
                                     <td v-for="(item,index) in items.bit_modes">{{ item }}</td>
                                     <td>{{ items.duplicate_num }}</td>
                                     <!-- <td>{{ items.post3_form}}</td> -->
                                 </tr>
                             </tbody>
                         </table>
                     </div>
                </div>

                <div class="AHKS_cont_item" v-for="(arr_items,arr_indexs) in arr_data_list.stat" :key="arr_indexs">
                    <div class="AHKS_cont_head_2">
                        <p>{{ select_wei[arr_indexs-1] }}</p>
                        <div>
                            <span v-for="(arr_item, arr_index) in arr_items" :key="arr_index" v-if="!(arr_item instanceof Array)">{{arr_index}}</span> 
                        </div>
                    </div>

                    <div class="AHKS_cont_data_2" :class="'canvas_wrap_' + (arr_indexs-1)">
                        <table>
                            <tbody>
                                <tr v-for="(items, indexs) in trans_late_arr[arr_indexs-1]" :key="indexs">
                                    <td v-for="(item,index) in items" :key="index" v-if="index!==0">  
                                        <i v-if="item == 0" style="background:red;color:#fff;z-index:4;font-style:normal;text-indent:0;"> {{ item == 0 ? index :item  }}</i>
                                        <i v-else v-show="yi_lou"> {{ item  }}</i>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div style="position:absolute;width:100%;height:100%;left:0;top:0;" v-show="zou_shi" :id="'canvas_box_' + (arr_indexs-1)">
                        </div> 
                    </div>
                </div>
                <div class="yi_lou_xian" v-show="fu_zhu_xian">

                </div>
            </div>
            <div class="AHKS_footer">
                <div class="AHKS_footer_1">
                    <p>总共出现</p>
                    <p>最大连出</p>
                    <p>最大遗漏</p>
                    <p>平均遗漏</p>
                    <p>当前遗漏</p>
                </div>
                <div class="AHKS_footer_2" v-for="(items,indexs) in arr_data_list.stat" :key="indexs" >
                    <!-- <table>
                        <tbody>
                            <tr v-for="(item,index) in items" :key="index">
                                <td></td>
                            </tr>
                        </tbody>
                    </table> -->
                    <ul v-for="(item,index) in items" :key="index" v-if="!(item instanceof Array)">
                        <li>{{item.total_appear}}</li>
                        <li>{{item.continue_max}}</li>
                        <li>{{item.omit_max}}</li>
                        <li>{{ item.omit_mean | quzheng }}</li>
                        <li>{{item.omit_current}}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import { requestOpt, el_tip } from '../../api/recommend' ;  
    import { messageBox , Loading , Checkbox} from 'element-ui';
    export default{

        data(){
            return{
                hide_func_text: '隐藏功能区',
                hide_func_bool:true,
                select_wei:['百位' , '十位' , '个位'],
                hide_start_tab : false,
                is_start_tab : [true],
                //多选框
                fu_zhu_xian : true,
                yi_lou    :     true,
                yi_lou_tiao: true,
                zou_shi : true,
                // 期数选择
                start_list_box:[],
                qishu_xuanze : [true],
                list_length : 30,
                arr_data_list :[],
                wan_data_list :[],
                qian_data_list :[],
                bai_data_list :[],
                shi_data_list :[],
                ge_data_list :[],
                trans_late_arr:[],
                omits_arr : [],
                is_show_data_1:false
            }
        },

        methods:{    
            get_data(list_length){
                list_length = list_length || this.list_length;

                requestOpt.reqnoGetpara(
                    "lottery_results_and_forms/" + this.$route.params.lot_type_id,
                    {
                        params: {
                            list_length: list_length
                        }
                    },

                    (res) => {

                     this.start_list_box = res.data.data.list;
                     console.log(this.start_list_box);
                    },

                    (err) => {
                        // this.$message({
                        //     type: 'info',
                        //     message: err.data.msg
                        // });
                        el_tip(err.data.msg)
                    }
                );

                requestOpt.reqnoGet('lottery_trends?'+ 'trend_type_id=1&+lot_type_id'+ '=' + this.$route.params.lot_type_id + '&list_length=' + list_length
                    ,(res)=>{
                        this.arr_data_list  =  res.data.data;
                        // console.log(this.arr_data_list);
                        var arr1 = [];
                        // 把转化后的数组存在arr1中
                        // if(this.arr_data_list.stat.length){
                             for(var i = 0; i < 3; i++){
                              arr1.push(this.translate_arr(this.arr_data_list.stat[i+1].omits, this.list_length));
                             }
                        // }
                       
                       // console.log(arr1);
                        // 每一次点击替换原来的数组
                        this.trans_late_arr = arr1;
                        // console.log(arr1);
                        var that = this;
                                setTimeout(()=> {
                                    this.draw_cvs(
                                        list_length,  ".canvas_wrap_0",  "#my_draw_canvas_0",  "#canvas_box_0", arr1[0]
                                    );
                                    // this.set_bg();
                                }, 50);
                                setTimeout(function() {
                                    that.draw_cvs(
                                        list_length,  ".canvas_wrap_1",  "#my_draw_canvas_1",  "#canvas_box_1", arr1[1]
                                    );
                                }, 50);
                                setTimeout(function() {
                                    that.draw_cvs(
                                        list_length,  ".canvas_wrap_2",  "#my_draw_canvas_2",  "#canvas_box_2", arr1[2]
                                    );
                                }, 50);
                               
                                setTimeout(()=>{

                                    this.draw_yilou('.yi_lou_xian', 'yi_lou_xian');

                                },60)
                        //  }

                            this.is_show_data_1 = true;

                    }, (err)=>{
                        // this.$message({
                        //     type: 'info',
                        //     message: err.data.msg
                        // });
                        el_tip(err.data.msg)
                })

            },
            // 星级选择
            tab_start(index){
                this.is_start_tab = [];
                this.is_start_tab[index] = true
            },

            // 期数选择
            date_select(index){
                if(index == 0){ this.list_length = 30}
                else if(index == 1){ this.list_length = 60}
                else if(index == 2){this.list_length = 100}
                else if(index == 3){this.list_length = 200}
                this.get_data(this.list_length);
                this.qishu_xuanze = [];
                this.qishu_xuanze[index] = true;
            },
              // 把纵向数组变成横向数组
            translate_arr(wei_arr, num) {
                var arr_all_1 = [];
                for (var j = 0; j < num; j++) {
                    var arr = [];
                    for (var i = 0; i < wei_arr.length; i++) {
                    arr.push(wei_arr[i][j]);
                    }
                    arr_all_1.push(arr);
                }
                wei_arr = arr_all_1;
                return wei_arr;
            },

            // canvas画走势图
             draw_cvs(num, className, id, id_box, data) {
                // num = num || 100;
                var myCanvas = document.createElement("canvas");
                myCanvas.setAttribute("width", $(className).width());
                myCanvas.setAttribute("height", $(className).height());
                myCanvas.setAttribute("id", id);
                myCanvas.style.position = "absolute";
                myCanvas.style.top = 0;
                myCanvas.style.left = 0;
                $(id_box).html(myCanvas);
                var width = $(id_box).width();
                var height = $(id_box).height();
                var x_f = width / 6;
                var y_f = height / num;
                var cxt_wan = document.getElementById(id).getContext("2d");
                // cxt_wan.strokeStyle = "#5891db";
                cxt_wan.strokeStyle = "red";
                cxt_wan.lineWidth = 1;
                for (var i = 0; i < data.length; i++) {
                    for (var j = 0; j < data[i].length; j++) {
                    if (data[i][j] == 0) {
                        if (i == 0) {
                        cxt_wan.moveTo(x_f * (j ) - x_f / 2, y_f * 0 + y_f / 2);
                        }
                        cxt_wan.lineTo(x_f * (j) - x_f / 2, y_f * i + y_f / 2);
                    }
                    }
                }
                cxt_wan.stroke();
                
            },

            // canvas画遗漏线
            draw_yilou(className, id){
                var myCanvas = document.createElement("canvas"); 
                myCanvas.setAttribute('width', $(className).width());
                myCanvas.setAttribute("height", $(className).height());
                myCanvas.setAttribute("id", id);
                myCanvas.style.position = "absolute";
                myCanvas.style.top = 0;
                myCanvas.style.left = 0;
                $(className).html(myCanvas);
                var width = $(className).width();
                var height = $(className).height();
                var y_f = height / this.list_length;

                var cxt_wan = document.getElementById(id).getContext("2d");
                cxt_wan.strokeStyle = "#5891db";
                cxt_wan.lineWidth = 1;

                for(var i = 0; i < this.list_length; i++){
                    if(i % 5 == 0 && i  > 0){
                         cxt_wan.moveTo(0, y_f * i);
                        cxt_wan.lineTo(width, y_f * i)
                    }
                }
                 cxt_wan.stroke();
                 
                // console.log(this.list_length);
                // console.log(y_f);
            },

            // 设置遗漏条背景色

            set_bg(){
                // var arr1 = [];
                // var arr2 = [];
                // for(var i = 0; i < this.arr_data_list.stat[1].omits.length;  i++){
                //     var arr = [];
                //     this.arr_data_list.stat[1].omits[i].reverse().forEach((item, index) => {
                //         if(item == 0){
                //             // arr.push(index);
                //             // $('.canvas_wrap_0').children('table').children('tbody').children('tr').eq(index).children('td').css('background-color','red');
                //             // for(var j = index; j>=0; j--){
                //                 // $('.canvas_wrap_0').children('table').children('tbody').children('tr').eq(j).children('td').css('background-color','red');
                //             // }
                //             arr.push(index);
                //         }
                //     });   
                //     arr1.push(arr);
                // }
                // // console.log(arr1);

                // for(let i = 0; i < arr1.length; i++){
                //     if(arr1[i].length <= 0){
                //         arr1[i][0] = null 
                //     }
                //     arr2.push(arr1[i][0]);
                // }
                
                // for(var i = 0; i < arr2.length; i++){
                    
                // }
                // console.log(arr2);
                
            },
            // 隐藏功能区
            hide_func(){
                this.hide_func_bool = !this.hide_func_bool;
                this.hide_func_text =  this.hide_func_bool ?'隐藏功能区': '显示功能区';
            }

        },

        mounted(){
            this.get_data();
        },
        filters :{
            slic: function(value) {
                if (!value) {
                    return "";
                }
                return value.substr(4);
            },
            quzheng:function(value){
                if(!value){ return ""}
                return Math.ceil(value)
            }
        }

    }

</script>

<style >

    .AHKS{

       width:100%;
       background: #fff;
    }

    .AHKS_wrap{

        margin:10px;
        /* overflow-x:scroll; */    
    }

    .AHKS_wrap_1{
        width:100%;
        margin:10;
        margin-bottom:0px;
        position:fixed;
        z-index:999;
        top:0;
        margin-top:0;
        padding-right:20px;
        box-sizing:border-box;
    }
    .AHKS_wrap_2{
        margin-top:74.6px;
    }

    /* 星级位数切换 */

    .AHKS_wrap>h3{

        padding-left:20px;
        background: #5891db;
        height:30px;
        line-height:30px;
        color: #fff;
    }

    .start_tab{
        background: #f4f4f4;
        padding: 10px 0 10px 20px;;
    }

     .start_tab>ul{
         display : flex;
     }

     .start_tab>ul>li{
         padding: 0 5px;
         height:30px;
         background: #ddd;
         text-align: center;
         line-height:30px;
         margin-right:20px;
         font-size:16px;
         color: #fff;
         border-radius: 5px;
         cursor: pointer;
     }

     .start_tab>ul>li.active{
         background: #5891db;
     }

     /* 复选框盒子 */

     .check_box{
         height:45px;
         line-height:45px;
         background: #f4f4f4;
         border-top:1.5px solid #fff;
         padding-left:20px;
     }

     /* 复选框 样式 */

    .el-checkbox__inner{
        width:12px;
        height:12px;
    }

    
  .AHKS_wrap .check_box .el-checkbox__input.is-checked+.el-checkbox__label{
         color : #555555;
     }


   .AHKS_wrap .check_box   .el-checkbox__input.is-checked{
         background: none;
     }
   .AHKS_wrap .check_box  .el-checkbox__label{
        padding-left:5px;
    }

    .AHKS_wrap .check_box  .el-checkbox__input.is-checked .el-checkbox__inner, .AHKS_wrap .el-checkbox__input.is-indeterminate .el-checkbox__inner{
         background-color: #fff;
         border-color: #555555;
     }

     .AHKS_wrap .el-checkbox__input.is-focus .el-checkbox__inner{
         border-color :  #555;
     }

    .AHKS_wrap .el-checkbox__input{
        margin-top:-0.5px;
    }

    .AHKS_wrap .el-checkbox{
        border-color: #666666;
     }

    .AHKS_wrap .el-checkbox__inner{
         border : 1px solid #666666;
     }

    .AHKS_wrap .el-checkbox__input.is-checked .el-checkbox__inner span::after{
        
     }

    .AHKS_wrap .el-checkbox__inner::after{
        top:0px;
        left:3px;
        border: 1px solid  #666;
        border-left:0;
        border-top:0;
    }

    .el-checkbox+.el-checkbox{
        margin-left:10px;
    }

    /* 期数选择 */
    .check_box>i{
         margin-left:10px;
         font-style:normal;
         cursor:pointer;
         color: rgb(204, 204, 204);
         font-size:16px;
    }
    .check_box>i+i{
    }
    .check_box>i.active{
        color : #5891db;
    }


    /* 最左边开奖分析 */

    .AHKS_cont_data_1 table{
        width:100%;
        border-collapse: collapse;
    }

    .AHKS_cont_data_1 table tbody{
        width:100%;
    }

    .AHKS_cont_data_1 table tr{
        width:100%;
        height:30px;
        display : flex;
    }
    .AHKS_cont_data_1 table tr td{
        height:30px; 
        line-height:30px;
        flex:1;
        font-size:11px;
        text-align:center;
    }

    .AHKS_cont_data_1 table tr td:nth-child(2){
        color:red;
    }

     .AHKS_cont_data_1 table tr td:nth-child(1), .AHKS_cont_data_1 table tr td:nth-child(2){
          flex:2;
     }
     .AHKS_cont_data_1 table tr td:nth-child(8), .AHKS_cont_data_1 table tr td:nth-child(9){
         flex:1;
         font-size:11px;
     }


    /* 走势标题 */
    
    .AHKS_cont{
        display : flex;
        border-top:1.5px solid #fff;
        position:relative;
        overflow:hidden;
    }
    .AHKS_cont>div{
        border-bottom:1px solid #fff;
    }
    .AHKS_cont>div+div{
        flex:1;
        border-left: 1px solid #ff0000;
        /* border-left: 1px solid #5891db; */
    }


 .AHKS_cont>div:nth-child(1){
        flex: 1.5;
    }

    .AHKS_cont>div:last-child{
        border:none;
    }

    .AHKS_cont_item .AHKS_cont_head_1{
        height: 60px;
        line-height: 60px;
        background: #e8eced;
        border-bottom:1.5px  solid #fff;
        display: flex;
    }

    .AHKS_cont_item .AHKS_cont_head_1>h4{
        flex: 2;
        text-align: center;
        letter-spacing: 2px;
        font-size: 12px;
         /* border-right: 1.5px solid #fff; */
         color: #555;
         font-weight: normal;
    }

    .AHKS_cont_item .AHKS_cont_head_1>h5{
         flex: 2;
         text-align:center;
         letter-spacing: 1px;
         font-size: 11.5px;
         color: #555;
         font-weight: normal;
    }

    .AHKS_cont_item .AHKS_cont_head_1>h6{
        flex: 1;
        font-size:11.5px;
        text-align: center;
    }

    .AHKS_cont_item .AHKS_cont_head_1 > h6:nth-child(8),.AHKS_cont_item .AHKS_cont_head_1 > h6:nth-child(9){
        flex:1;
    }
    
    .AHKS_cont_head_2{
        background : #e8eced;
        height:60px;
    }

    .AHKS_cont_head_2>p{
        text-align: center;
        height: 29.5px;
        line-height: 29.5px;
        border-bottom: 0.5px solid #fff;
    }

    .AHKS_cont_head_2>div{
        display: flex;
        height:30px;
    }
    .AHKS_cont_head_2>div>span{
        flex: 1;
        line-height: 30px;
        color:#515253;
        text-align: center;
    }
    .AHKS_cont_head_2>div>span+span{
        border-left:0.5px solid #fff;
    }

    /* 走势内容部分 */

    .AHKS_cont_data_1{
        display : flex;
    }
    .AHKS_cont_data_1>ul{
        flex: 2;
    }
    .AHKS_cont_data_1>ol{
        flex: 1;
    }
    .AHKS_cont_data_1>ul:nth-child(2)>li{
        color : #ff0000;
    }
    .AHKS_cont_data_1>ul>li, .AHKS_cont_data_1>ol>li{
        height: 30px;
        line-height: 30px;
        text-align: center;
        font-size: 12px;
    }

    .AHKS_cont_data_1>ul>li:nth-child(odd), .AHKS_cont_data_1>ol>li:nth-child(odd), .AHKS_cont_data_1 table tr:nth-child(odd){
        background:#f3f2f2;;
    }
    .AHKS_cont_data_1>ul>li:nth-child(even), .AHKS_cont_data_1>ol>li:nth-child(even) , .AHKS_cont_data_1 table tr:nth-child(even){
        background:#f3fdfb;
    }

   .AHKS_cont_data_2{
       position: relative;
   }
    .AHKS_cont_data_2 table{
        width:100%;
    }

   .AHKS_cont_data_2 table tr{
       display: flex;
       height:30px;
       line-height:30px;
   }

   .AHKS_cont_data_2 table tr:nth-child(odd){
       background:#f3f2f2;
   }
   .AHKS_cont_data_2 table tr:nth-child(even){
       background:#f3fdfb;
   }

    .AHKS_cont_data_2 table tr td{
        flex: 1;
         font-size: 12px;
         color: #aaa;
         position: relative;
         display: flex;
        text-align: center;
        justify-content: center;
        align-items: center;
    }
    

    .AHKS_cont_data_2 table tr td+td{
        border-left: 0.5px solid #fff;
    }

    .AHKS_cont_data_2 table tr td i{
        display: inline-block;
        width: 18px;
        height: 18px;
        border-radius: 50%;
      
        line-height: 18px;
        text-align: center;
        font-size:11px;
       /* text-indent: -3px; */
    }

    /* 遗漏线 */

    .yi_lou_xian{
        position:absolute;
        width:100%;
        top:60px;
        left:0px;
        bottom:0px;
    }


    /* 走势尾部 */
            /* 标题 */
    .AHKS_footer{
        display : flex;
    }

    .AHKS_footer>div{
        flex:1;
    }

    .AHKS_footer>div+div{
        border-left:1px solid #ff0000;
    }
    .AHKS_footer>div:nth-child(1){
        flex:1.5;
    }

    .AHKS_footer>div:nth-child(1)>p{
        height:30px;
        line-height:30px;
        text-align:center;
    }
    .AHKS_footer>div:nth-child(1)>p:nth-child(odd), .AHKS_footer .AHKS_footer_2 table tbody tr:nth-child(odd){
        background : #00ffff;
    }
    .AHKS_footer>div:nth-child(1)>p:nth-child(even), .AHKS_footer .AHKS_footer_2 table tbody tr:nth-child(even){
         background : #f3f2f2;
    }

    /* 内容 */
    .AHKS_footer_2{
        display:flex;
    }
    .AHKS_footer_2>ul{
        flex:1;
    }

    .AHKS_footer_2>ul>li:nth-child(odd){
        background : #00ffff;
    }
    .AHKS_footer_2>ul>li:nth-child(even){
        background : #f3f2f2;
    }

    .AHKS_footer_2>ul>li{
        height:30px;
        line-height:30px;
        text-align:center;
         font-size:11.5px;
        
    }

    .AHKS_footer_2>ul+ul{
        border-left:0.73px solid #fff;
    }
</style>