<template>
    <div class="DLT">
        <div class="DLT_wrap DLT_wrap_1">
            <h3>历史号码走势</h3>
            <div class="check_box">
                <el-checkbox v-model="fu_zhu_xian" >辅助线</el-checkbox>
                <el-checkbox v-model="yi_lou">遗漏</el-checkbox>
                <!-- <el-checkbox v-model="yi_lou_tiao">遗漏条</el-checkbox> -->
                <el-checkbox v-model="zou_shi">走势</el-checkbox>
                <i :class="{'active' : qishu_xuanze[0]}" @click="date_select(0)" v-if="start_list_box.length>=30">最近30期</i>  
                <i :class="{'active' : qishu_xuanze[1]}" @click="date_select(1)" v-if="start_list_box.length>=60">最近60期</i> 
                <i :class="{'active' : qishu_xuanze[2]}" @click="date_select(2)" v-if="start_list_box.length>=100">最近100期</i> 
                <i :class="{'active' : qishu_xuanze[3]}" @click="date_select(3)" v-if="start_list_box.length>=200">最近200期</i>
            </div>
             <div class="start_tab" style="border-top:1.5px solid #fff;">
                <ul>
                    <li @click="tab_start(0)" :class="{'active' : is_start_tab[0] == true}">开奖结果</li>
                    <li @click="tab_start(1)" :class="{'active' : is_start_tab[1] == true}">正码一</li>
                    <li @click="tab_start(2)" :class="{'active' : is_start_tab[2] == true}">正码二</li>
                    <li @click="tab_start(3)" :class="{'active' : is_start_tab[3] == true}">正码三</li>
                    <li @click="tab_start(4)" :class="{'active' : is_start_tab[4] == true}">正码四</li>
                    <li @click="tab_start(5)" :class="{'active' : is_start_tab[5] == true}">正码五</li>
                    <li @click="tab_start(6)" :class="{'active' : is_start_tab[6] == true}">正码六</li>
                    <li @click="tab_start(7)" :class="{'active' : is_start_tab[7] == true}">特码</li>
                </ul>
            </div>
        </div>
       
        <div class="DLT_wrap DLT_wrap_2" v-show="is_show_data_1">
            <div class="DLT_cont" >
                <div class="DLT_cont_item" v-show="is_start_tab[0]" style="padding-bottom:150px;">
                     <div class="DLT_cont_head_1" v-if="start_list_box.length > 1">
                        <h4 >{{ start_list_box[0].titles[0]}}</h4>
                        <h5>{{ start_list_box[0].titles[1]}}</h5>
                        <h6>{{ start_list_box[0].titles[2]}}</h6>
                        <h6> {{start_list_box[0].titles[3] }} </h6>
                        <h6> {{start_list_box[0].titles[4] }} </h6>
                        <h6> {{start_list_box[0].titles[5] }} </h6>
                        <h6> {{start_list_box[0].titles[6] }} </h6>
                        <h6> {{start_list_box[0].titles[7] }} </h6>
                        <!-- <h6> {{start_list_box[0].titles[3] }} </h6> -->
                     </div>
                     <div class="DLT_cont_data_1">
                         <table>
                             <tbody>
                                 <tr v-for="(items,indexs) in start_list_box" v-if="items.bit_modes">
                                     <td>{{ items.issue_number }}</td>
                                     <td >
                                         <span v-for="(item,index) in items.res" class="bo_se_span"> {{ item }}</span>
                                          <!-- <span v-for="(item,index) in items.res"  style="color:#d50000" >  {{ item }} </span>
                                          <span v-for="(item,index) in items.res" style="color:#0047aa">  {{ item }} </span>
                                          <span v-for="(item,index) in items.res" style="color:#187e00">  {{ item }} </span> -->
                                    </td>
                                    <td>{{ items.lhc_tema_ds }}</td>
                                    <td>{{ items.lhc_tema_dx }}</td>
                                    <td>{{ items.lhc_tema_wuhang }}</td>
                                    <td>{{ items.lhc_tema_shengxiao }}</td>
                                    <td>{{ items.lhc_tema_touweishu }}</td>
                                    <td>{{ items.lhc_tema_bose }}</td>
                                 </tr>
                             </tbody>
                         </table>
                     </div>
                </div>

                <div class="DLT_cont_item" v-show="is_start_tab[arr_indexs]" v-for="(arr_items,arr_indexs) in arr_data_list.stat" :key="arr_indexs">
                    <div class="DLT_cont_head_2">
                        <p>{{ select_wei[arr_indexs-1] }}</p>
                        <div>
                            <span style="flex:2;"> 期数 </span>
                            <span v-for="(arr_item, arr_index) in arr_items" :key="arr_index" v-if="!(arr_item instanceof Array)">{{arr_index}}</span> 
                        </div>
                    </div>

                    <div class="DLT_cont_data_2" :class="'canvas_wrap_' + (arr_indexs-1)">
                        <table>
                            <tbody>
                                <tr v-for="(items, indexs) in trans_late_arr[arr_indexs-1]" :key="indexs">
                                    <td style="flex:2;color:#666;"> {{ arr_data_list.list[indexs].IssueNumber }} </td>
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
                    <div class="DLT_footer" v-show=" is_start_tab[arr_indexs]">
                        <div class="DLT_footer_1">
                            <p>总共出现</p>
                            <p>最大连出</p>
                            <p>最大遗漏</p>
                            <p>平均遗漏</p>
                            <p>当前遗漏</p>
                        </div>
                        <div class="DLT_footer_2" v-for="(items,indexs) in arr_data_list.stat" :key="indexs"   v-show=" is_start_tab[indexs]">
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
                <div class="yi_lou_xian" v-show="fu_zhu_xian">

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
                select_wei:['正码一', '正码二' , '正码三' , '正码四' , '正码五', '正码六' , '特码'],
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
                     setTimeout(() => {
                         this.define_bo_se('.bo_se_span');
                     }, 60);

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
                             for(var i = 0; i < 7; i++){
                              arr1.push(this.translate_arr(this.arr_data_list.stat[i+1].omits, this.list_length));
                             }
                        // }
                       
                    //    console.log(arr1);
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
                                setTimeout(function() {
                                    that.draw_cvs(
                                        list_length,  ".canvas_wrap_3",  "#my_draw_canvas_3",  "#canvas_box_3", arr1[3]
                                    );
                                }, 50);
                                setTimeout(function() {
                                    that.draw_cvs(
                                        list_length,  ".canvas_wrap_4",  "#my_draw_canvas_4",  "#canvas_box_4", arr1[4]
                                    );
                                }, 50);
                                setTimeout(function() {
                                    that.draw_cvs(
                                        list_length,  ".canvas_wrap_5",  "#my_draw_canvas_5",  "#canvas_box_5", arr1[5]
                                    );
                                }, 50);
                                setTimeout(function() {
                                    that.draw_cvs(
                                        list_length,  ".canvas_wrap_6",  "#my_draw_canvas_6",  "#canvas_box_6", arr1[6]
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
                this.is_start_tab[index] = true;
                this.get_data();
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
                var x_f = width / 51;
                var y_f = height / num;
                var cxt_wan = document.getElementById(id).getContext("2d");
                // cxt_wan.strokeStyle = "#5891db";
                cxt_wan.strokeStyle = "red";
                cxt_wan.lineWidth = 1;
                for (var i = 0; i < data.length; i++) {
                    for (var j = 0; j < data[i].length; j++) {
                    if (data[i][j] == 0) {
                        if (i == 0) {
                        cxt_wan.moveTo(x_f * (j + 1) + x_f / 2 , y_f * 0 + y_f / 2);
                        }
                        cxt_wan.lineTo(x_f * (j + 1) + x_f / 2, y_f * i + y_f / 2);
                    }
                    }
                }
                cxt_wan.stroke();
                
            },

            // canvas画遗漏线
            draw_yilou(className, id){
                var myCanvas = document.createElement("canvas"); 
                myCanvas.setAttribute('width', $(className).width());
                myCanvas.setAttribute("height", $(className).height()-150);
                myCanvas.setAttribute("id", id);
                myCanvas.style.position = "absolute";
                myCanvas.style.top = 0;
                myCanvas.style.left = 0;
                $(className).html(myCanvas);
                var width = $(className).width();
                var height = $(className).height();
                var y_f = (height-150) / this.list_length;

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
            // 区别开奖结果的波色
            define_bo_se(className){
                let  hong_bo = ['01', '02','07','08','12', '13' , '18' , '19' , '23' , '24' , '29' , '30' , '34' , '35' , '40' , '45' ,  '46'];
                let lan_bo =  ['03' ,'04' ,'09' ,'10' ,'14' ,'15' ,'20' ,'25' ,'26' ,'31' ,'36' ,'37' ,'41' ,'42' ,'47' ,'48' ];
                let lv_bo = ['05' ,  '06' ,  '11' ,  '16' ,  '17' ,  '21' ,  '22' ,  '27' ,  '28' ,  '32' ,  '33' ,  '38'  ,  '39' ,  '43' ,  '44' ,  '49']
               let $span_s = $(className);
               for(let i = 0; i < $span_s.length; i++){
                   let text = $span_s[i].innerText.trim();
                //    console.log(text.length);
                    for(let x = 0; x < hong_bo.length; x++){
                        if(text == hong_bo[x]){
                            // console.log('-----111111----------')
                            $span_s[i].classList.add('hong_bo');
                        }
                    }
                    for(let x = 0; x < lan_bo.length; x++){
                        if(text == lan_bo[x]){
                            // console.log('-----22222----------')
                            $span_s[i].classList.add('lan_bo');
                        }
                    }
                    for(let x = 0; x < lv_bo.length; x++){
                        if(text == lv_bo[x]){
                            // console.log('-----3333333----------')
                            $span_s[i].classList.add('lv_bo');
                        }
                    }

               }
            },
            // 设置遗漏条背景色
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

    .DLT{

       width:100%;
       background: #fff;
    }

    .DLT_wrap{

        margin:10px;
        /* overflow-x:scroll; */    
    }

    .DLT_wrap_1{
        /* margin-bottom:0px; */
        position:fixed;
        /* top:15px; */
        z-index:40;
        width:100%;
        top:0;
        margin-top:0;
        margin-bottom:0;
        padding-right:20px;
        /* margin-right:15px; */
        box-sizing:border-box;
    }
    .DLT_wrap_2{
        margin-top:0px;
        /* overflow-x:scroll; */
        margin-top:128px;
    }

    /* 星级位数切换 */

    .DLT_wrap>h3{

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

    
  .DLT_wrap .check_box .el-checkbox__input.is-checked+.el-checkbox__label{
         color : #555555;
     }


   .DLT_wrap .check_box   .el-checkbox__input.is-checked{
         background: none;
     }
   .DLT_wrap .check_box  .el-checkbox__label{
        padding-left:5px;
    }

    .DLT_wrap .check_box  .el-checkbox__input.is-checked .el-checkbox__inner, .DLT_wrap .el-checkbox__input.is-indeterminate .el-checkbox__inner{
         background-color: #fff;
         border-color: #555555;
     }

     .DLT_wrap .el-checkbox__input.is-focus .el-checkbox__inner{
         border-color :  #555;
     }

    .DLT_wrap .el-checkbox__input{
        margin-top:-0.5px;
    }

    .DLT_wrap .el-checkbox{
        border-color: #666666;
     }

    .DLT_wrap .el-checkbox__inner{
         border : 1px solid #666666;
     }

    .DLT_wrap .el-checkbox__input.is-checked .el-checkbox__inner span::after{
        
     }

    .DLT_wrap .el-checkbox__inner::after{
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

    .DLT_cont_data_1 table{
        width:100%;
        border-collapse: collapse;
    }

    .DLT_cont_data_1 table tbody{
        width:100%;
    }

    .DLT_cont_data_1 table tr{
        width:100%;
        height:30px;
        display : flex;
    }
    .DLT_cont_data_1 table tr td{
        height:30px; 
        line-height:30px;
        flex:1;
        font-size:11px;
        text-align:center;
    }

    .DLT_cont_data_1 table tr td:nth-child(2){
        /* color:red; */
    }

     .DLT_cont_data_1 table tr td:nth-child(1), .DLT_cont_data_1 table tr td:nth-child(2){
          flex:2;
     }
     .DLT_cont_data_1 table tr td:nth-child(8), .DLT_cont_data_1 table tr td:nth-child(9){
         flex:1;
         font-size:11px;
     }


    /* 走势标题 */
    
    .DLT_cont{
        display : flex;
        border-top:1.5px solid #fff;
        position:relative;
        overflow:hidden;
    }
    .DLT_cont>div{
        border-bottom:1px solid #fff;
    }
    .DLT_cont>div+div{
        flex:1;
        /* border-left: 1px solid #ff0000; */
        /* border-left: 1px solid #5891db; */
    }


   .DLT_cont>div:nth-child(1){
        flex: 1.5;
    }

    .DLT_cont>div:last-child{
        border:none;
    }

    .DLT_cont_item .DLT_cont_head_1{
        height: 60px;
        line-height: 60px;
        background: #e8eced;
        border-bottom:1.5px  solid #fff;
        display: flex;
    }

    .DLT_cont_item .DLT_cont_head_1>h4{
        flex: 2;
        text-align: center;
        letter-spacing: 2px;
        font-size: 12px;
         /* border-right: 1.5px solid #fff; */
         color: #555;
         font-weight: normal;
    }

    .DLT_cont_item .DLT_cont_head_1>h5{
         flex: 2;
         text-align:center;
         letter-spacing: 1px;
         font-size: 11.5px;
         color: #555;
         font-weight: normal;
    }

    .DLT_cont_item .DLT_cont_head_1>h6{
        flex: 1;
        font-size:11.5px;
        text-align: center;
    }

    .DLT_cont_item .DLT_cont_head_1 > h6:nth-child(8),.DLT_cont_item .DLT_cont_head_1 > h6:nth-child(9){
        flex:1;
    }
    
    .DLT_cont_head_2{
        background : #e8eced;
        height:60px;
    }

    .DLT_cont_head_2>p{
        text-align: center;
        height: 29.5px;
        line-height: 29.5px;
        border-bottom: 0.5px solid #fff;
    }

    .DLT_cont_head_2>div{
        display: flex;
        height:30px;
    }
    .DLT_cont_head_2>div>span{
        flex: 1;
        line-height: 30px;
        color:#515253;
        text-align: center;
    }
    .DLT_cont_head_2>div>span+span{
        border-left:0.5px solid #fff;
    }

    /* 走势内容部分 */

    .DLT_cont_data_1{
        display : flex;
    }
    .DLT_cont_data_1>ul{
        flex: 2;
    }
    .DLT_cont_data_1>ol{
        flex: 1;
    }
    .DLT_cont_data_1>ul:nth-child(2)>li{
        /* color : #ff0000; */
    }
    .DLT_cont_data_1>ul>li, .DLT_cont_data_1>ol>li{
        height: 30px;
        line-height: 30px;
        text-align: center;
        font-size: 12px;
    }

    .DLT_cont_data_1>ul>li:nth-child(odd), .DLT_cont_data_1>ol>li:nth-child(odd), .DLT_cont_data_1 table tr:nth-child(odd){
        background:#f3f2f2;;
    }
    .DLT_cont_data_1>ul>li:nth-child(even), .DLT_cont_data_1>ol>li:nth-child(even) , .DLT_cont_data_1 table tr:nth-child(even){
        background:#f3fdfb;
    }

   .DLT_cont_data_2{
       position: relative;
   }
    .DLT_cont_data_2 table{
        width:100.15%;
    }

   .DLT_cont_data_2 table tr{
       display: flex;
       height:30px;
       line-height:30px;
   }

   .DLT_cont_data_2 table tr:nth-child(odd){
       background:#f3f2f2;
   }
   .DLT_cont_data_2 table tr:nth-child(even){
       background:#f3fdfb;
   }

    .DLT_cont_data_2 table tr td{
        flex: 1;
         font-size: 12px;
         color: #aaa;
         position: relative;
         display: flex;
        text-align: center;
        justify-content: center;
        align-items: center;
    }
    

    .DLT_cont_data_2 table tr td+td{
        border-left: 0.5px solid #fff;
    }

    .DLT_cont_data_2 table tr td i{
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
    .DLT_footer{
        display : flex;
    }

    .DLT_footer>div{
        flex:49;
    }

    .DLT_footer>div+div{
        /* border-left:1px solid #ff0000; */
    }
    .DLT_footer>div:nth-child(1){
        flex:2;
    }

    .DLT_footer>div:nth-child(1)>p{
        height:30px;
        line-height:30px;
        text-align:center;
    }
    .DLT_footer>div:nth-child(1)>p:nth-child(odd), .DLT_footer .DLT_footer_2 table tbody tr:nth-child(odd){
        background : #00ffff;
    }
    .DLT_footer>div:nth-child(1)>p:nth-child(even), .DLT_footer .DLT_footer_2 table tbody tr:nth-child(even){
         background : #f3f2f2;
    }

    /* 内容 */
    .DLT_footer_2{
        display:flex;
    }
    .DLT_footer_2>ul{
        flex:1;
    }

    .DLT_footer_2>ul>li:nth-child(odd){
        background : #00ffff;
    }
    .DLT_footer_2>ul>li:nth-child(even){
        background : #f3f2f2;
    }

    .DLT_footer_2>ul>li{
        height:30px;
        line-height:30px;
        text-align:center;
         font-size:11.5px;
        
    }

    .DLT_footer_2>ul{
        border-left:0.73px solid #fff;
    }

    /* 红绿蓝文字波色 */

    .hong_bo{
        color:#df0000;
    }
    .lan_bo{
        color:#0047aa;
    }
    .lv_bo{
        color:#187e00;
    }

    /* 字体设置大一点 */

   .DLT .DLT_wrap .DLT_cont .DLT_cont_head_1 h4, .DLT .DLT_wrap .DLT_cont .DLT_cont_head_1 h5, .DLT .DLT_wrap .DLT_cont .DLT_cont_head_1 h6 , .DLT .DLT_wrap .DLT_cont  .DLT_cont_data_1 tr td{
        font-size: 13px;
    }
</style>