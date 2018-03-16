<template>
  <div class="trendpage">
      <TopNote></TopNote>
      <TopLoginReg></TopLoginReg>
      <TopTab :tabNum="6"></TopTab>
       <div class="trend_wrap" v-loading="loading2" >
           <div class="trend_cont">
               <div class="trend_cont_top">
                   <ul class="clearfix">
                       <li @click="open_tab(0)">全部彩种</li>
                       <li @click="open_tab(1)">时时彩</li>
                       <li @click="open_tab(2)">PK拾</li>
                       <li @click="open_tab(3)">快三</li>
                       <li @click="open_tab(4)">十一选5</li>
                       <li @click="open_tab(5)">低频</li>
                   </ul>

                   <div class="trend_cont_top_wrap">
                       <div class="trend_cont_top_item" v-show="is_show_tab[0]">
                           <ol class="clearfix">
                               <li @click="go_trendPic(items.lot_type_id , items.code)" v-for ="(items,indexs) in cp_data_list" :key="items.code">{{items.name}}</li>
                           </ol>
                       </div>
                       <div class="trend_cont_top_item" v-show="is_show_tab[1]">
                           <ol class="clearfix">
                               <li  @click="go_trendPic(items.lot_type_id, items.code)"  v-for ="(items,indexs) in cp_data_list" :key="items.code" v-if="items.name.indexOf('时时') != -1">{{items.name}}</li>
                           </ol>
                       </div>
                       <div class="trend_cont_top_item" v-show="is_show_tab[2]">
                           <ol class="clearfix">
                               <li  @click="go_trendPic(items.lot_type_id, items.code)" v-for ="(items,indexs) in cp_data_list" :key="items.code" v-if="items.name.indexOf('PK拾') != -1">{{items.name}}</li>
                           </ol>
                       </div>
                       <div class="trend_cont_top_item" v-show="is_show_tab[3]">
                            <ol class="clearfix">
                               <li  @click="go_trendPic(items.lot_type_id, items.code)" v-for ="(items,indexs) in cp_data_list" :key="items.code" v-if="items.name.indexOf('快三') != -1">{{items.name}}</li>
                            </ol>
                       </div>
                       <div class="trend_cont_top_item" v-show="is_show_tab[4]">
                            <ol class="clearfix">
                               <li  @click="go_trendPic(items.lot_type_id, items.code)" v-for ="(items,indexs) in cp_data_list" :key="items.code" v-if="items.name.indexOf('选5') != -1">{{items.name}}</li>
                            </ol>
                       </div>
                       <div class="trend_cont_top_item" v-show="is_show_tab[5]">
                           <ol class="clearfix">
                               <li  @click="go_trendPic(items.lot_type_id, items.code)" v-for ="(items,indexs) in cp_data_list" :key="items.code" v-if="items.frequency == 1">{{items.name}}</li>
                            </ol>
                       </div>
                   </div>
               </div>
               <div class="trend_cont_mid">
                    <div class="trend_cont_mid_item">
                        <h3>时时彩</h3>
                        <ul>
                            <li  @click="go_trendPic(items.lot_type_id,items.code)" v-for="(items, indexs) in cp_data_list" v-if="items.name.indexOf('时时')!= -1">
                                <!-- <img :src="items.pic"> -->
                                 
                                <img src="../../image/cp_icon/chongqinshishicai.png" v-if="items.lot_type_id == 1" :alt="items.name">
                                <img src="../../image/cp_icon/sanfeishishicai.png" v-if="items.lot_type_id == 13" :alt="items.name">
                                <img src="../../image/cp_icon/jing_pk.png" v-if="items.lot_type_id == 5" :alt="items.name">
                                <img src="../../image/cp_icon/san_pk.png" v-if="items.lot_type_id == 14" :alt="items.name">
                                <img src="../../image/cp_icon/liuhecai.png" v-if="items.lot_type_id == 23" :alt="items.name">
                                <img src="../../image/cp_icon/shishile.png" v-if="items.lot_type_id == 19" :alt="items.name">
                                <img src="../../image/cp_icon/xin_shishicai.png" v-if="items.lot_type_id == 7" :alt="items.name">
                                <img src="../../image/cp_icon/tianjinshishicai1.png" v-if="items.lot_type_id == 16" :alt="items.name">
                                <img src="../../image/cp_icon/guangdong.png" v-if="items.lot_type_id == 6" :alt="items.name">
                                <img src="../../image/cp_icon/shandong.png" v-if="items.lot_type_id == 15" :alt="items.name">
                                <img src="../../image/cp_icon/shanghai.png" v-if="items.lot_type_id == 17" :alt="items.name">
                                <img src="../../image/cp_icon/jiangxi.png" v-if="items.lot_type_id == 18" :alt="items.name">
                                <img src="../../image/cp_icon/wan_kuaisan.png" v-if="items.lot_type_id == 8" :alt="items.name">
                                <img src="../../image/cp_icon/su_kuaisan.png" v-if="items.lot_type_id == 9" :alt="items.name">
                                <img src="../../image/cp_icon/gui_kuaisan.png" v-if="items.lot_type_id == 20" :alt="items.name">
                                <img src="../../image/cp_icon/3d.png" v-if="items.lot_type_id == 2" :alt="items.name">
                                <img src="../../image/cp_icon/pailei3.png" v-if="items.lot_type_id == 11" :alt="items.name">
                                <img src="../../image/cp_icon/jing_28.png" v-if="items.lot_type_id == 22" :alt="items.name">
                                <img src="../../image/cp_icon/xing_28.png" v-if="items.lot_type_id == 21" :alt="items.name">
                                <img src="../../image/cp_icon/js_liuhecai.png" v-if="items.lot_type_id == 24" :alt="items.name">
                                <img src="../../image/cp_icon/fenfenshishicai.png" v-if="items.lot_type_id == 25" :alt="items.name">
                                <img src="../../image/cp_icon/js_pk_shi.png" v-if="items.lot_type_id == 26" :alt="items.name">

                                <p> {{items.name}}</p>
                            </li>
                        </ul>
                    </div>

                    <div class="trend_cont_mid_item">
                        <h3>PK拾</h3>
                        <ul>
                            <li  @click="go_trendPic(items.lot_type_id, items.code)" v-for="(items, indexs) in cp_data_list" v-if="items.name.indexOf('PK拾')!= -1">
                                <!-- <img :src="items.pic"> -->

                                <img src="../../image/cp_icon/chongqinshishicai.png" v-if="items.lot_type_id == 1" :alt="items.name">
                                <img src="../../image/cp_icon/sanfeishishicai.png" v-if="items.lot_type_id == 13" :alt="items.name">
                                <img src="../../image/cp_icon/jing_pk.png" v-if="items.lot_type_id == 5" :alt="items.name">
                                <img src="../../image/cp_icon/san_pk.png" v-if="items.lot_type_id == 14" :alt="items.name">
                                <img src="../../image/cp_icon/liuhecai.png" v-if="items.lot_type_id == 23" :alt="items.name">
                                <img src="../../image/cp_icon/shishile.png" v-if="items.lot_type_id == 19" :alt="items.name">
                                <img src="../../image/cp_icon/xin_shishicai.png" v-if="items.lot_type_id == 7" :alt="items.name">
                                <img src="../../image/cp_icon/tianjinshishicai1.png" v-if="items.lot_type_id == 16" :alt="items.name">
                                <img src="../../image/cp_icon/guangdong.png" v-if="items.lot_type_id == 6" :alt="items.name">
                                <img src="../../image/cp_icon/shandong.png" v-if="items.lot_type_id == 15" :alt="items.name">
                                <img src="../../image/cp_icon/shanghai.png" v-if="items.lot_type_id == 17" :alt="items.name">
                                <img src="../../image/cp_icon/jiangxi.png" v-if="items.lot_type_id == 18" :alt="items.name">
                                <img src="../../image/cp_icon/wan_kuaisan.png" v-if="items.lot_type_id == 8" :alt="items.name">
                                <img src="../../image/cp_icon/su_kuaisan.png" v-if="items.lot_type_id == 9" :alt="items.name">
                                <img src="../../image/cp_icon/gui_kuaisan.png" v-if="items.lot_type_id == 20" :alt="items.name">
                                <img src="../../image/cp_icon/3d.png" v-if="items.lot_type_id == 2" :alt="items.name">
                                <img src="../../image/cp_icon/pailei3.png" v-if="items.lot_type_id == 11" :alt="items.name">
                                <img src="../../image/cp_icon/jing_28.png" v-if="items.lot_type_id == 22" :alt="items.name">
                                <img src="../../image/cp_icon/xing_28.png" v-if="items.lot_type_id == 21" :alt="items.name">
                                <img src="../../image/cp_icon/js_liuhecai.png" v-if="items.lot_type_id == 24" :alt="items.name">
                                <img src="../../image/cp_icon/fenfenshishicai.png" v-if="items.lot_type_id == 25" :alt="items.name">
                                <img src="../../image/cp_icon/js_pk_shi.png" v-if="items.lot_type_id == 26" :alt="items.name">
                                <p> {{items.name}}</p>
                            </li>
                        </ul>
                    </div>

                     <div class="trend_cont_mid_item">
                        <h3>快三</h3>
                        <ul>
                            <li  @click="go_trendPic(items.lot_type_id, items.code)" v-for="(items, indexs) in cp_data_list" v-if="items.name.indexOf('快三')!= -1">
                                <!-- <img :src="items.pic"> -->

                                <img src="../../image/cp_icon/chongqinshishicai.png" v-if="items.lot_type_id == 1" :alt="items.name">
                                <img src="../../image/cp_icon/sanfeishishicai.png" v-if="items.lot_type_id == 13" :alt="items.name">
                                <img src="../../image/cp_icon/jing_pk.png" v-if="items.lot_type_id == 5" :alt="items.name">
                                <img src="../../image/cp_icon/san_pk.png" v-if="items.lot_type_id == 14" :alt="items.name">
                                <img src="../../image/cp_icon/liuhecai.png" v-if="items.lot_type_id == 23" :alt="items.name">
                                <img src="../../image/cp_icon/shishile.png" v-if="items.lot_type_id == 19" :alt="items.name">
                                <img src="../../image/cp_icon/xin_shishicai.png" v-if="items.lot_type_id == 7" :alt="items.name">
                                <img src="../../image/cp_icon/tianjinshishicai1.png" v-if="items.lot_type_id == 16" :alt="items.name">
                                <img src="../../image/cp_icon/guangdong.png" v-if="items.lot_type_id == 6" :alt="items.name">
                                <img src="../../image/cp_icon/shandong.png" v-if="items.lot_type_id == 15" :alt="items.name">
                                <img src="../../image/cp_icon/shanghai.png" v-if="items.lot_type_id == 17" :alt="items.name">
                                <img src="../../image/cp_icon/jiangxi.png" v-if="items.lot_type_id == 18" :alt="items.name">
                                <img src="../../image/cp_icon/wan_kuaisan.png" v-if="items.lot_type_id == 8" :alt="items.name">
                                <img src="../../image/cp_icon/su_kuaisan.png" v-if="items.lot_type_id == 9" :alt="items.name">
                                <img src="../../image/cp_icon/gui_kuaisan.png" v-if="items.lot_type_id == 20" :alt="items.name">
                                <img src="../../image/cp_icon/3d.png" v-if="items.lot_type_id == 2" :alt="items.name">
                                <img src="../../image/cp_icon/pailei3.png" v-if="items.lot_type_id == 11" :alt="items.name">
                                <img src="../../image/cp_icon/jing_28.png" v-if="items.lot_type_id == 22" :alt="items.name">
                                <img src="../../image/cp_icon/xing_28.png" v-if="items.lot_type_id == 21" :alt="items.name">
                                <img src="../../image/cp_icon/js_liuhecai.png" v-if="items.lot_type_id == 24" :alt="items.name">
                                <img src="../../image/cp_icon/fenfenshishicai.png" v-if="items.lot_type_id == 25" :alt="items.name">
                                <img src="../../image/cp_icon/js_pk_shi.png" v-if="items.lot_type_id == 26" :alt="items.name">
                                <p> {{items.name}}</p>
                            </li>
                        </ul>
                    </div>

                     <div class="trend_cont_mid_item">
                        <h3>十一选5</h3>
                        <ul>
                            <li  @click="go_trendPic(items.lot_type_id, items.code)" v-for="(items, indexs) in cp_data_list" v-if="items.name.indexOf('选5')!= -1">
                                <!-- <img :src="items.pic"> -->
                                <img src="../../image/cp_icon/chongqinshishicai.png" v-if="items.lot_type_id == 1" :alt="items.name">
                                <img src="../../image/cp_icon/sanfeishishicai.png" v-if="items.lot_type_id == 13" :alt="items.name">
                                <img src="../../image/cp_icon/jing_pk.png" v-if="items.lot_type_id == 5" :alt="items.name">
                                <img src="../../image/cp_icon/san_pk.png" v-if="items.lot_type_id == 14" :alt="items.name">
                                <img src="../../image/cp_icon/liuhecai.png" v-if="items.lot_type_id == 23" :alt="items.name">
                                <img src="../../image/cp_icon/shishile.png" v-if="items.lot_type_id == 19" :alt="items.name">
                                <img src="../../image/cp_icon/xin_shishicai.png" v-if="items.lot_type_id == 7" :alt="items.name">
                                <img src="../../image/cp_icon/tianjinshishicai1.png" v-if="items.lot_type_id == 16" :alt="items.name">
                                <img src="../../image/cp_icon/guangdong.png" v-if="items.lot_type_id == 6" :alt="items.name">
                                <img src="../../image/cp_icon/shandong.png" v-if="items.lot_type_id == 15" :alt="items.name">
                                <img src="../../image/cp_icon/shanghai.png" v-if="items.lot_type_id == 17" :alt="items.name">
                                <img src="../../image/cp_icon/jiangxi.png" v-if="items.lot_type_id == 18" :alt="items.name">
                                <img src="../../image/cp_icon/wan_kuaisan.png" v-if="items.lot_type_id == 8" :alt="items.name">
                                <img src="../../image/cp_icon/su_kuaisan.png" v-if="items.lot_type_id == 9" :alt="items.name">
                                <img src="../../image/cp_icon/gui_kuaisan.png" v-if="items.lot_type_id == 20" :alt="items.name">
                                <img src="../../image/cp_icon/3d.png" v-if="items.lot_type_id == 2" :alt="items.name">
                                <img src="../../image/cp_icon/pailei3.png" v-if="items.lot_type_id == 11" :alt="items.name">
                                <img src="../../image/cp_icon/jing_28.png" v-if="items.lot_type_id == 22" :alt="items.name">
                                <img src="../../image/cp_icon/xing_28.png" v-if="items.lot_type_id == 21" :alt="items.name">
                                <img src="../../image/cp_icon/js_liuhecai.png" v-if="items.lot_type_id == 24" :alt="items.name">
                                <img src="../../image/cp_icon/fenfenshishicai.png" v-if="items.lot_type_id == 25" :alt="items.name">
                                <img src="../../image/cp_icon/js_pk_shi.png" v-if="items.lot_type_id == 26" :alt="items.name">
                                <p> {{items.name}}</p>
                            </li>
                        </ul>
                    </div>

                     <div class="trend_cont_mid_item">
                        <h3>低频</h3>
                        <ul>
                            <li  @click="go_trendPic(items.lot_type_id, items.code)" v-for="(items, indexs) in cp_data_list" v-if="items.frequency == 1">
                                <!-- <img :src="items.pic"> -->
                                <img src="../../image/cp_icon/chongqinshishicai.png" v-if="items.lot_type_id == 1" :alt="items.name">
                                <img src="../../image/cp_icon/sanfeishishicai.png" v-if="items.lot_type_id == 13" :alt="items.name">
                                <img src="../../image/cp_icon/jing_pk.png" v-if="items.lot_type_id == 5" :alt="items.name">
                                <img src="../../image/cp_icon/san_pk.png" v-if="items.lot_type_id == 14" :alt="items.name">
                                <img src="../../image/cp_icon/liuhecai.png" v-if="items.lot_type_id == 23" :alt="items.name">
                                <img src="../../image/cp_icon/shishile.png" v-if="items.lot_type_id == 19" :alt="items.name">
                                <img src="../../image/cp_icon/xin_shishicai.png" v-if="items.lot_type_id == 7" :alt="items.name">
                                <img src="../../image/cp_icon/tianjinshishicai1.png" v-if="items.lot_type_id == 16" :alt="items.name">
                                <img src="../../image/cp_icon/guangdong.png" v-if="items.lot_type_id == 6" :alt="items.name">
                                <img src="../../image/cp_icon/shandong.png" v-if="items.lot_type_id == 15" :alt="items.name">
                                <img src="../../image/cp_icon/shanghai.png" v-if="items.lot_type_id == 17" :alt="items.name">
                                <img src="../../image/cp_icon/jiangxi.png" v-if="items.lot_type_id == 18" :alt="items.name">
                                <img src="../../image/cp_icon/wan_kuaisan.png" v-if="items.lot_type_id == 8" :alt="items.name">
                                <img src="../../image/cp_icon/su_kuaisan.png" v-if="items.lot_type_id == 9" :alt="items.name">
                                <img src="../../image/cp_icon/gui_kuaisan.png" v-if="items.lot_type_id == 20" :alt="items.name">
                                <img src="../../image/cp_icon/3d.png" v-if="items.lot_type_id == 2" :alt="items.name">
                                <img src="../../image/cp_icon/pailei3.png" v-if="items.lot_type_id == 11" :alt="items.name">
                                <img src="../../image/cp_icon/jing_28.png" v-if="items.lot_type_id == 22" :alt="items.name">
                                <img src="../../image/cp_icon/xing_28.png" v-if="items.lot_type_id == 21" :alt="items.name">
                                <img src="../../image/cp_icon/js_liuhecai.png" v-if="items.lot_type_id == 24" :alt="items.name">
                                <img src="../../image/cp_icon/fenfenshishicai.png" v-if="items.lot_type_id == 25" :alt="items.name">
                                <img src="../../image/cp_icon/js_pk_shi.png" v-if="items.lot_type_id == 26" :alt="items.name">
                                <p> {{items.name}}</p>
                            </li>
                        </ul>
                    </div>

                     <div class="trend_cont_mid_item">
                        <h3>PC蛋蛋</h3>
                        <ul>
                            <li  @click="go_trendPic(items.lot_type_id, items.code)" v-for="(items, indexs) in cp_data_list" v-if="items.name.indexOf('28')!= -1">
                                <!-- <img :src="items.pic"> -->
                                <img src="../../image/cp_icon/chongqinshishicai.png" v-if="items.lot_type_id == 1" :alt="items.name">
                                <img src="../../image/cp_icon/sanfeishishicai.png" v-if="items.lot_type_id == 13" :alt="items.name">
                                <img src="../../image/cp_icon/jing_pk.png" v-if="items.lot_type_id == 5" :alt="items.name">
                                <img src="../../image/cp_icon/san_pk.png" v-if="items.lot_type_id == 14" :alt="items.name">
                                <img src="../../image/cp_icon/liuhecai.png" v-if="items.lot_type_id == 23" :alt="items.name">
                                <img src="../../image/cp_icon/shishile.png" v-if="items.lot_type_id == 19" :alt="items.name">
                                <img src="../../image/cp_icon/xin_shishicai.png" v-if="items.lot_type_id == 7" :alt="items.name">
                                <img src="../../image/cp_icon/tianjinshishicai1.png" v-if="items.lot_type_id == 16" :alt="items.name">
                                <img src="../../image/cp_icon/guangdong.png" v-if="items.lot_type_id == 6" :alt="items.name">
                                <img src="../../image/cp_icon/shandong.png" v-if="items.lot_type_id == 15" :alt="items.name">
                                <img src="../../image/cp_icon/shanghai.png" v-if="items.lot_type_id == 17" :alt="items.name">
                                <img src="../../image/cp_icon/jiangxi.png" v-if="items.lot_type_id == 18" :alt="items.name">
                                <img src="../../image/cp_icon/wan_kuaisan.png" v-if="items.lot_type_id == 8" :alt="items.name">
                                <img src="../../image/cp_icon/su_kuaisan.png" v-if="items.lot_type_id == 9" :alt="items.name">
                                <img src="../../image/cp_icon/gui_kuaisan.png" v-if="items.lot_type_id == 20" :alt="items.name">
                                <img src="../../image/cp_icon/3d.png" v-if="items.lot_type_id == 2" :alt="items.name">
                                <img src="../../image/cp_icon/pailei3.png" v-if="items.lot_type_id == 11" :alt="items.name">
                                <img src="../../image/cp_icon/jing_28.png" v-if="items.lot_type_id == 22" :alt="items.name">
                                <img src="../../image/cp_icon/xing_28.png" v-if="items.lot_type_id == 21" :alt="items.name">
                                <img src="../../image/cp_icon/js_liuhecai.png" v-if="items.lot_type_id == 24" :alt="items.name">
                                <img src="../../image/cp_icon/fenfenshishicai.png" v-if="items.lot_type_id == 25" :alt="items.name">
                                <img src="../../image/cp_icon/js_pk_shi.png" v-if="items.lot_type_id == 26" :alt="items.name">
                               <p> {{items.name}}</p>
                            </li>
                        </ul>
                    </div>

               </div>
           </div>
       </div>
       <Qiandao></Qiandao>
      <BotCommon></BotCommon>
      <InfoPanel></InfoPanel>
  </div>
</template>

<script>

import TopNote from '../topCommon/topNote';
import TopLoginReg from '../topCommon/topLoginReg';
import TopTab from '../topCommon/topTab';
import BotCommon from '../topCommon/botCommon';
import Qiandao from '../home/qiandao'
import InfoPanel from '../topCommon/infoPanel'
import { requestOpt, el_tip } from '../../api/recommend' ;  
import { messageBox , Loading } from 'element-ui';


export default {
  name: 'Trendpage',
  components:{
      TopLoginReg,
      TopTab,
      TopNote,
      BotCommon,
      Qiandao,
      InfoPanel

  },
  data () {
    return {
        loading2: false,
        is_show_tab:[true],
        cp_data_list:[]
    }
  },
  methods:{

      open_tab(index){
          this.is_show_tab = [];
          this.is_show_tab[index] = true;
      },
      get_data(){
        this.cp_data_list = JSON.parse(sessionStorage.getItem('cp_data_list'));
        console.log(this.cp_data_list);
        if( !this.cp_data_list){
            this.loading2 = true;
            requestOpt.reqnoGetpara('betting_list_v1',
                {
                    page: '1',
                    frequency:'-1',
                    is_hot : '-1'
                },
                (res)=>{
                    this.cp_data_list = res.data.data.list;
                    sessionStorage.setItem('cp_data_list',JSON.stringify(res.data.data.list));
                    this.loading2 = false;
                },
                (err)=>{
                    // this.$message({
                    //     type: 'info',
                    //     message: err.data.msg
                    // });
                    el_tip(err.data.msg)
                    this.loading2 = false;
            })
        }
            
      },
      go_trendPic(id,code){
            let str = window.location.href;
            let index = str.indexOf('#');
            let subStr = str.substr(0,index+1);
            window.open(subStr + '/' + code + '/' + id)
      }
  },
  mounted(){
      this.get_data();
  }
}
</script>

<style scoped>

.trend_wrap{
    width:100%;
    min-height:100px;
    padding-bottom:0.5px;
    background: #fff;
}

.trend_cont{

    width:1200px;
    margin : 0 auto;
}

/* 顶部tab切换 */

.trend_cont_top>ul{
    border-bottom : 0.5px solid #ccc;
}

.trend_cont_top > ul >li{
    float:left;
    height:37px;
    line-height:37px;
    cursor:pointer;
    margin-right:18px;
    color:#595959;
}

/* 订部tab栏 内容部分 */

.trend_cont_top_item>ol{
    padding-bottom:20px;
   
}

.trend_cont_top_item>ol>li{

    width:auto;
    padding: 7px 16px;
    float : left;
    background: #0047aa;
    border-radius:5px;
    cursor:pointer;
    color: #fff;
    margin-right:10px;
    margin-top:10px;
    font-size:14.5px;
    box-shadow: 0px 2px 3px rgba(0,0,0,0.3);
}

/* 中部内容部分 */
.trend_cont_mid_item{
    padding:10px;
    background:#f2f2f2;
    border-radius : 10px;
    margin-bottom:10px;
}

.trend_cont_mid_item>h3{
    color : #525252;
    border-bottom:0.5px solid #fff;
    padding-bottom:10px;
}

.trend_cont_mid_item >ul {
    display : flex;
    padding-left:20px;
    padding-top:15px;
}

.trend_cont_mid_item >ul >li{
    margin-right:50px;
    cursor :pointer;
}

.trend_cont_mid_item >ul >li:last-child{
    margin-right:0;
}

.trend_cont_mid_item >ul>li>img{
    width:80px;
    height:80px;
    border-radius:50%;
    border:2px solid #fff;
}

.trend_cont_mid_item >ul>li>p{
    text-align: center;
    padding : 10px 0;
}





</style>
