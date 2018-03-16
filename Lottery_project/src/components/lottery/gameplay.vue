<!--购彩页面-->
<template>
  <transition name="fade">
    <div class="playing-content">
        <div class="playing-head">
            <ul>
                <li class="playing-head1">
                <a  @click="goback" >
                    <img src="../../images/Return-@2x.png" alt="">
                </a>
                </li>
                <li class="playing-head2" @click="hideDailog">
                    <span class="playing-span1">玩法</span>
                    <span class="playing-span2">{{keyFirst}}-{{keyLast}}</span>
                    <i class="playing-down"></i>
                </li>
                <li class="playing-head3" @click='open'>
                <img src="../../images/11PxCook.png" alt="">
                </li>
            </ul>
        </div>
        <div class="playing-menu" v-if="showha" @click="showha=false"></div>
        <ul class="playing-menu-list" v-if="showha">
             <li v-for="(item, i) in playExPlain" @click="toTlink(item.to)">{{item.name}}</li>
        </ul>

        <!--下拉显示-->
        <transition name="fade">

        <div v-show="isShow" class="header-is-active" @click="hideDailog">
            <div class="header-modal">
            <dl class="header-modal1">
                <dt>{{keyFirst}}</dt>
                <dd></dd>
            </dl>
            <ul>
                <li v-for="(item1, k) in panPlay" :class="{red:keyFirst===item1.replace(/^\d+\|/,'')}" @click="tabPlay(item1,k)">{{item1.replace(/^\d+\|/,'')}}</li>
            </ul>
            <dl class="header-modal1">
                <dt>{{keyLast}}</dt>
                <dd class="w54"></dd>
            </dl>
            <ul>
                <li
                v-for="(item2, k) in cKey"
                :class="{red:keyLast===item2.type_name}"
                @click="tabPlay2(item2.type_name,item2.id, k)">{{item2.type_name}}</li>
            </ul>
            </div>

        </div>
        </transition>
        <!--玩法-->
        <div class="playing">
            <div class="playing-fixed">
                <div class="playing-fixed1">
                <dl class="fixed-q">
                    <dt>{{rstObj.issue_number?rstObj.issue_number:0}}期</dt>
                    <dd v-if="rstObj.curr_count_down">距{{rstObj.curr_issue_number}}期截止</dd>
                    <dd v-else>距离开盘还有</dd>
                </dl>
                <dl class="fixed-t">
                    <dt>
                    <div v-if="rstObj.code=='BJ28'||rstObj.code=='XY28'">
                        <div class="lot-res-num" v-if="rstObj.number1">
                        <span  v-if="rstObj.number1">{{rstObj.number1}} +</span>
                        <span  v-if="rstObj.number2">{{rstObj.number2}} +</span>
                        <span  v-if="rstObj.number3">{{rstObj.number3}} =</span>
                        <span  v-if="rstObj.number4">{{rstObj.number4}}</span>
                        </div>
                        <div v-else style="color: #fc823c;">{{lottery_wining}}</div>
                    </div>
                    <div v-else-if="rstObj.code=='XGLHC' || rstObj.code=='JSLHC'">
                        <div class="lot-res-num" v-if="rstObj.number1">
                        <span  v-if="rstObj.number1" :class="{blue:lhc_color_farmate(rstObj.number1)==1,green:lhc_color_farmate(rstObj.number1)==2}">{{rstObj.number1}}</span>
                        <span  v-if="rstObj.number2" :class="{blue:lhc_color_farmate(rstObj.number2)==1,green:lhc_color_farmate(rstObj.number2)==2}">{{rstObj.number2}}</span>
                        <span  v-if="rstObj.number3" :class="{blue:lhc_color_farmate(rstObj.number3)==1,green:lhc_color_farmate(rstObj.number3)==2}">{{rstObj.number3}}</span>
                        <span  v-if="rstObj.number4" :class="{blue:lhc_color_farmate(rstObj.number4)==1,green:lhc_color_farmate(rstObj.number4)==2}">{{rstObj.number4}}</span>
                        <span  v-if="rstObj.number5" :class="{blue:lhc_color_farmate(rstObj.number5)==1,green:lhc_color_farmate(rstObj.number5)==2}">{{rstObj.number5}}</span>
                        <span  v-if="rstObj.number6" :class="{blue:lhc_color_farmate(rstObj.number6)==1,green:lhc_color_farmate(rstObj.number6)==2}">{{rstObj.number6}}</span>
                        <span  v-if="rstObj.number7" :class="{blue:lhc_color_farmate(rstObj.number7)==1,green:lhc_color_farmate(rstObj.number7)==2}">{{rstObj.number7}}</span>
                        </div>
                        <div v-else style="color: #fc823c;">{{lottery_wining}}</div>
                    </div>
                    <div v-else>
                        <div class="lot-res-num" v-if="rstObj.number1">
                        <span  v-if="rstObj.number1">{{rstObj.number1}}</span>
                        <span  v-if="rstObj.number2">{{rstObj.number2}}</span>
                        <span  v-if="rstObj.number3">{{rstObj.number3}}</span>
                        <span  v-if="rstObj.number4">{{rstObj.number4}}</span>
                        <span  v-if="rstObj.number5">{{rstObj.number5}}</span>
                        <span  v-if="rstObj.number6" :class="{'b-blue':rstObj.code=='DLT'}">{{rstObj.number6}}</span>
                        <span  v-if="rstObj.number7" :class="{'b-blue':rstObj.code=='SSQ'||rstObj.code=='DLT'}">{{rstObj.number7}}</span>
                        <span  v-if="rstObj.number8">{{rstObj.number8}}</span>
                        <span  v-if="rstObj.number9">{{rstObj.number9}}</span>
                        <span  v-if="rstObj.number10">{{rstObj.number10}}</span>
                        <span  v-if="rstObj.number11">{{rstObj.number11}}</span>
                        </div>
                        <div v-else style="color: #fc823c;">{{lottery_wining}}</div>
                    </div>
                    </dt>
                    <dd>{{rstObj.curr_count_down | transCountTime}}</dd>
                </dl>
                </div>
            </div>

            <!--history list-->
            <div class="lot-history-list" v-if='hitoryflag' @click="toTrend(rstObj.code, rstObj.lot_type_id)">
                <!--双色球-->
                <div class="lot-his-item" v-if="rstObj.code=='SSQ'">
                <div class="lot-his-title">
                    <span class="item1">期数</span>
                    <span class="item2">开奖结果</span>
                    <span class="item3">跨度</span>
                    <span class="item4">重号</span>
                </div>
                <v-scroll :on-refresh="onRefresh" :dataList="scrollData" :enableInfinite="false" style="top: 0.68rem">
                    <div class="lot-history" v-for="(historyList, k) in historyList" v-if="k<100">
                    <span class="item1">{{historyList.issue_number}}</span>
                    <span class="item2"><i v-for="(tiem,index) in historyList.res" :class="{'b-blue': index>5}">{{tiem}}</i></span>
                    <span class="item3">{{historyList.span}}</span>
                    <span class="item4">{{historyList.duplicate_num}}</span>
                    </div>
                </v-scroll>
                </div>
                <!--大乐透-->
                <div class="lot-his-item" v-else-if="rstObj.code=='DLT'">
                <div class="lot-his-title">
                    <span class="item1">期数</span>
                    <span class="item2">开奖结果</span>
                    <span class="item3">跨度</span>
                    <span class="item4">重号</span>
                </div>
                <v-scroll :on-refresh="onRefresh" :dataList="scrollData" :enableInfinite="false" style="top: 0.68rem">
                    <div class="lot-history" v-for="(historyList, k) in historyList" v-if="k<100">
                    <span class="item1">{{historyList.issue_number}}</span>
                    <span class="item2"><i v-for="(tiem,index) in historyList.res" :class="{'b-blue': index>4}">{{tiem}}</i></span>
                    <span class="item3">{{historyList.span}}</span>
                    <span class="item4">{{historyList.duplicate_num}}</span>
                    </div>
                </v-scroll>
                </div>
                <!--北京28-->
                <div class="lot-his-item" v-else-if="rstObj.code=='BJ28'||rstObj.code=='XY28'">
                <div class="lot-his-title">
                    <span class="item1">期数</span>
                    <span class="item2">开奖结果</span>
                    <span class="item3">大小单双</span>
                    <span class="item4">波态</span>
                </div>
                <v-scroll :on-refresh="onRefresh" :dataList="scrollData" :enableInfinite="false" style="top: 0.68rem">
                    <div class="lot-history" v-for="(historyList, k) in historyList" v-if="k<100">
                    <span class="item1">{{historyList.issue_number}}</span>
                    <span class="item2"><i v-for="(tiem,index) in historyList.res" >{{historyList.res.length-1==index?'= '+tiem:index==0?tiem:'+ '+tiem}}</i></span>
                    <span class="item3">{{historyList.dxds}}</span>
                    <span class="item4">{{historyList.wave_form}}</span>
                    </div>
                </v-scroll>
                </div>
                <!--11选5-->
                <div class="lot-his-item"
                    v-else-if="rstObj.code=='SD11X5'
                    ||rstObj.code=='GD11X5'
                    ||rstObj.code=='JX11X5'
                    ||rstObj.code=='SH11X5'">
                <div class="lot-his-title">
                    <span class="item1">期数</span>
                    <span class="item2">开奖结果</span>
                    <span class="item3">跨度</span>
                    <span class="item4">重号</span>
                </div>
                <v-scroll :on-refresh="onRefresh" :dataList="scrollData" :enableInfinite="false" style="top: 0.68rem">
                    <div class="lot-history" v-for="(historyList, k) in historyList" v-if="k<100">
                    <span class="item1">{{historyList.issue_number}}</span>
                    <span class="item2"><i v-for="(tiem,index) in historyList.res">{{tiem}}</i></span>
                    <span class="item3">{{historyList.span}}</span>
                    <span class="item4">{{historyList.duplicate_num}}</span>
                    </div>
                </v-scroll>
                </div>
                <!--PK10-->
                <div class="lot-his-item" v-else-if="rstObj.code=='BJPK10'||rstObj.code=='SFPK10'||rstObj.code=='JSPK10'">
                <div class="lot-his-title">
                    <span class="item1">期数</span>
                    <span class="item2">开奖结果</span>
                </div>
                <v-scroll :on-refresh="onRefresh" :dataList="scrollData" :enableInfinite="false" style="top: 0.68rem">
                    <div class="lot-history" v-for="(historyList, k) in historyList" v-if="k<100">
                    <span class="item1">{{historyList.issue_number.length>6?historyList.issue_number.replace(/^\d{4}/,''):historyList.issue_number}}</span>
                    <span class="item2"><i v-for="(tiem,index) in historyList.res">{{tiem}}</i></span>
                    </div>
                </v-scroll>
                </div>
                <!--排列5 时时彩-->
                <div class="lot-his-item"
                    v-else-if="rstObj.code=='PL5'
                    ||rstObj.code=='SFSSC'
                    ||rstObj.code=='TJSSC'
                    ||rstObj.code=='XJSSC'
                    ||rstObj.code=='CQSSC'
                    ||rstObj.code=='FFSSC'">
                <table>
                    <thead>
                    <tr>
                    <td width="15%">期数</td>
                    <td width="16%">开奖结果</td>
                    <td width="9%">万位</td>
                    <td width="10%">千位</td>
                    <td width="10%">百位</td>
                    <td width="10%">十位</td>
                    <td width="10">个位</td>
                    <td width="10">前三</td>
                    <td width="10%">后三</td>
                    </tr>
                    </thead>
                </table>
                <v-scroll :on-refresh="onRefresh" :dataList="scrollData" :enableInfinite="false" style="top: 0.68rem">
                    <table>
                    <tbody>
                    <tr v-for="(historyList, k) in historyList" v-if="k<100">
                        <td class="pad" width="15%">{{historyList.issue_number.length>6?historyList.issue_number.replace(/^\d{4}/,''):historyList.issue_number}}</td>
                        <td class="pad" width="16%"><span v-for="tiem in historyList.res">{{tiem}}</span></td>
                        <td class="pad" width="9%">{{historyList.bit_modes[0]}}</td>
                        <td class="pad" width="10%">{{historyList.bit_modes[1]}}</td>
                        <td class="pad" width="10%">{{historyList.bit_modes[2]}}</td>
                        <td class="pad" width="10%">{{historyList.bit_modes[3]}}</td>
                        <td class="pad" width="10%">{{historyList.bit_modes[4]}}</td>
                        <td class="pad" width="10%">{{historyList.prev3_form}}</td>
                        <td class="pad" width="10%">{{historyList.post3_form}}</td>
                    </tr>
                    </tbody>
                    </table>
                </v-scroll>
                </div>

                <!--六合彩-->
                <div class="lot-his-item" v-else-if="rstObj.code=='XGLHC'|| rstObj.code=='JSLHC'">
                <ul class="ul-tit">
                    <li class="li1">期数</li>
                    <li class="li2">开奖结果</li>
                    <li class="li3">单双</li>
                    <li class="li4">大小</li>
                    <li class="li5">五行</li>
                    <li class="li6">生肖</li>
                    <li class="li7">头尾数</li>
                    <li class="li8">色波</li>
                </ul>
                <v-scroll :on-refresh="onRefresh" :dataList="scrollData" :enableInfinite="false" style="top: 0.68rem">
                    <ul class="ul-con" v-for="(historyList, k) in historyList" v-if="k<100">
                    <li class="li1">{{rstObj.code=='SHSSL'?historyList.issue_number.replace(/^\d{4}/,''):historyList.issue_number}}</li>
                    <li class="li2"><span v-for="tiem in historyList.res" :class="{blue:lhc_color_farmate(tiem)==1,green:lhc_color_farmate(tiem)==2}">{{tiem}}</span></li>
                    <li class="li3">{{historyList.lhc_tema_ds}}</li>
                    <li class="li4">{{historyList.lhc_tema_dx}}</li>
                    <li class="li5">{{historyList.lhc_tema_wuhang}}</li>
                    <li class="li6">{{historyList.lhc_tema_shengxiao}}</li>
                    <li class="li7">{{historyList.lhc_tema_touweishu}}</li>
                    <li class="li8">{{historyList.lhc_tema_bose}}</li>
                    </ul>
                </v-scroll>
                </div>

                <!--其他-->
                <div class="lot-his-item" v-else>
                <table>
                    <thead>
                    <tr>
                    <td width="15%">期数</td>
                    <td width="15%">开奖结果</td>
                    <td width="10%">和值</td>
                    <td width="10%">跨度</td>
                    <td width="15%">形态</td>
                    <td width="10%">百位</td>
                    <td width="10%">十位</td>
                    <td width="7.5%">个位</td>
                    <td width="7.5%">重号</td>
                    </tr>
                    </thead>
                </table>
                <v-scroll :on-refresh="onRefresh" :dataList="scrollData" :enableInfinite="false" style="top: 0.68rem">
                    <table>
                    <tbody>
                    <tr v-for="(historyList, k) in historyList" v-if="k<100">
                        <td width="15%">
                        {{rstObj.code=='SHSSL'?historyList.issue_number.replace(/^\d{4}/,''):historyList.issue_number}}
                        </td>
                        <td width="15%"><span v-for="tiem in historyList.res">{{tiem}}</span></td>
                        <td width="10%">{{historyList.res | transSum}}</td>
                        <td width="10%">{{historyList.span}}</td>
                        <td width="15%">{{historyList.kuai3_form}}</td>
                        <td width="10%">{{historyList.bit_modes[0]}}</td>
                        <td width="10%">{{historyList.bit_modes[1]}}</td>
                        <td width="7.5%">{{historyList.bit_modes[2]}}</td>
                        <td width="7.5%">{{historyList.duplicate_num}}</td>
                    </tr>
                    </tbody>
                    </table>
                </v-scroll>
                </div>
            </div>

            <div class="playing-fixed2">
                <dl >
                <div @click="selRandow">
                    <dt><img src="../../images/phone@2x.png" alt="shake" class="phone-shake"></dt>
                    <dd>摇一摇随机选</dd>
                </div>

                </dl>
                <div @click="hitoryflag=!hitoryflag">
                <Icon type="chevron-up" color="#555" size="18" v-if="hitoryflag"></Icon>
                <Icon type="chevron-down" color="#555" size="18" v-else></Icon>
                </div>
                <div class="bets-return" v-if="$store.state.user.bets&&$store.state.user.bets.length>0" @click="returnBets">
                <span>返回购物车</span>
                <img src="../../images/buy_Press@2x.png" alt="">
                <span class="badge">{{$store.state.user.bets.length}}</span>
                </div>
            </div>

            <!--位数-->
            <div class="playing-title">
                <!--赔率-->
                <h4 v-if="(keyFirst==='特码'&&keyLast==='特码包三')">赔率:<span>{{parseFloat(lowest_rate.toFixed(3))}}</span></h4>
                <h4 v-else-if="(keyFirst==='合肖'&&keyLast==='合肖')
                || (keyFirst==='自选不中'&&keyLast==='自选不中')
                || keyFirst==='连码'">赔率:
                <span>
                    <span v-if="keyLast==='中二'">{{(userinfo?parseFloat((rates[0]*userinfo.return_ratio_rate).toFixed(3)):parseFloat((rates[0]*proxy_default_rate).toFixed(3)))+'('+keyLast+')'+(userinfo?parseFloat((rates[1]*userinfo.return_ratio_rate).toFixed(3)):parseFloat((rates[1]*proxy_default_rate).toFixed(3)))+'(中三)'}}</span>
                    <span v-else-if="keyLast==='中特'">{{(userinfo?parseFloat((rates[0]*userinfo.return_ratio_rate).toFixed(3)):parseFloat((rates[0]*proxy_default_rate).toFixed(3)))+'('+keyLast+')'+(userinfo?parseFloat((rates[1]*userinfo.return_ratio_rate).toFixed(3)):parseFloat((rates[1]*proxy_default_rate).toFixed(3)))+'(中二)'}}</span>
                    <span v-else-if="keyLast==='三全中'||keyLast==='二全中'||keyLast==='特串'||keyLast==='四全中'">{{(userinfo?parseFloat((rates[0]*userinfo.return_ratio_rate).toFixed(3)):parseFloat((rates[0]*proxy_default_rate).toFixed(3)))+'('+keyLast+')'}}</span>
                    <span v-else>{{lhc_rate}}</span>
                </span>
                </h4>
                <!--号码集合-->
                <dl v-if="(keyFirst==='两面盘')
                    || (keyFirst==='1-5球')
                    || (keyFirst==='前中后')
                    || (keyFirst==='和值B')
                    || (keyFirst==='混合')
                    || (keyFirst==='自选不中')
                    || (keyFirst==='特码'&&keyLast==='特码')
                    || (keyFirst==='波色'&&keyLast==='波色')
                    || (keyFirst==='豹子'&&keyLast==='豹子')
                    || (keyFirst==='特码A'&&keyLast==='选码')
                    || (keyFirst==='特码B'&&keyLast==='选码')
                    || (keyFirst==='正码'&&keyLast==='选码')
                    || (keyFirst==='正码特'&&keyLast==='正一特')
                    || (keyFirst==='正码特'&&keyLast==='正二特')
                    || (keyFirst==='正码特'&&keyLast==='正三特')
                    || (keyFirst==='正码特'&&keyLast==='正四特')
                    || (keyFirst==='正码特'&&keyLast==='正五特')
                    || (keyFirst==='正码特'&&keyLast==='正六特')
                    || (keyFirst==='1-10名'&&keyLast==='1-10名')
                    || (keyFirst==='冠亚军和'&&keyLast==='冠亚军和')
                    || (keyFirst==='顺子')
                    || (keyFirst==='斗牛' && keyLast === '牛牛')"
                            v-for="(lotteryRanges,i) in lotteryRanges"
                            :class="lotteryRanges.className"
                            style="padding-bottom: .6rem">
                    <dt >{{lotteryRanges.type}}</dt>
                    <ol class="dxdsq_btn">
                        <li @click="if_select_number(lotteryRanges.prams,'全',0, lotteryRanges.type)" :class="{'cancel_select' : lotteryRanges.type == '自选不中' || lotteryRanges.type == '选位' }">全</li>
                        <li @click="if_select_number(lotteryRanges.prams,'大',1, lotteryRanges.type)" :class="{'cancel_select' : lotteryRanges.type == '自选不中' || lotteryRanges.type == '前三' || lotteryRanges.type == '中三' || lotteryRanges.type == '后三' || lotteryRanges.type == '选位' || lotteryRanges.type == '龙虎和' || lotteryRanges.type == '波色' || lotteryRanges.type == '豹子' || lotteryRanges.type == '波色豹子' || lotteryRanges.type == '顺子' ||  lotteryRanges.type == '牛牛' || lotteryRanges.type == '前三' || lotteryRanges.type == '中三' || lotteryRanges.type == '后三'}">大</li>
                        <li @click="if_select_number(lotteryRanges.prams,'小',2, lotteryRanges.type)" :class="{'cancel_select' : lotteryRanges.type == '自选不中' || lotteryRanges.type == '前三' || lotteryRanges.type == '中三' || lotteryRanges.type == '后三' || lotteryRanges.type == '选位' || lotteryRanges.type == '龙虎和' || lotteryRanges.type == '波色' || lotteryRanges.type == '豹子' || lotteryRanges.type == '波色豹子' || lotteryRanges.type == '顺子' ||  lotteryRanges.type == '牛牛' || lotteryRanges.type == '前三' || lotteryRanges.type == '中三' || lotteryRanges.type == '后三'}">小</li>
                        <li @click="if_select_number(lotteryRanges.prams,'单',3, lotteryRanges.type)" :class="{'cancel_select' : lotteryRanges.type == '自选不中' || lotteryRanges.type == '前三' || lotteryRanges.type == '中三' || lotteryRanges.type == '后三' || lotteryRanges.type == '选位' || lotteryRanges.type == '龙虎和' || lotteryRanges.type == '波色' || lotteryRanges.type == '豹子' || lotteryRanges.type == '波色豹子' || lotteryRanges.type == '顺子' ||  lotteryRanges.type == '牛牛' || lotteryRanges.type == '前三' || lotteryRanges.type == '中三' || lotteryRanges.type == '后三'}">单</li>
                        <li @click="if_select_number(lotteryRanges.prams,'双',4, lotteryRanges.type)" :class="{'cancel_select' : lotteryRanges.type == '自选不中' || lotteryRanges.type == '前三' || lotteryRanges.type == '中三' || lotteryRanges.type == '后三' || lotteryRanges.type == '选位' || lotteryRanges.type == '龙虎和' || lotteryRanges.type == '波色' || lotteryRanges.type == '豹子' || lotteryRanges.type == '波色豹子' || lotteryRanges.type == '顺子' ||  lotteryRanges.type == '牛牛' || lotteryRanges.type == '前三' || lotteryRanges.type == '中三' || lotteryRanges.type == '后三'}">双</li>
                        <li @click="clear_number(lotteryRanges.prams)">清</li>
                    </ol>
                    <dd style="line-height: 1.3">
                        <ul>
                        <li class="lhc"
                            v-for="(item,k) in lotteryRanges.prams"
                            @click="selNumber(k,item.val,item.active,lotteryRanges,userinfo?parseFloat((rates[k]*userinfo.return_ratio_rate).toFixed(3)):parseFloat((rates[k]*proxy_default_rate).toFixed(3)))">
                            <span class="typename" :class="item.active?item.className+' activeStyle':item.className">{{item.name}}</span>
                            <span v-if="keyFirst!=='自选不中'&&keyFirst!=='连码'">
                            <span v-if="i==1&&($route.params.code=='BJ28'
                            || $route.params.code=='XY28')" :class="{'b-blue':item.name=='蓝波','b-green':item.name=='绿波'}" style="font-size: .24rem;position: relative;top: 0px;">{{userinfo?parseFloat((rates[k+10]*userinfo.return_ratio_rate).toFixed(3)):parseFloat((rates[k+10]*proxy_default_rate).toFixed(3))}}</span>
                            <span v-else-if="keyFirst=='1-5球'" :class="{'b-blue':item.name=='蓝波','b-green':item.name=='绿波'}" style="font-size: .24rem;position: relative;top: 0px;" >
                                <span v-if="i==0">{{userinfo?parseFloat((rates[0]*userinfo.return_ratio_rate).toFixed(3)):parseFloat((rates[0]*proxy_default_rate).toFixed(3))}}</span>
                                <span v-if="i==1">{{userinfo?parseFloat((rates[1]*userinfo.return_ratio_rate).toFixed(3)):parseFloat((rates[1]*proxy_default_rate).toFixed(3))}}</span>
                                <span v-if="i==2">{{userinfo?parseFloat((rates[2]*userinfo.return_ratio_rate).toFixed(3)):parseFloat((rates[2]*proxy_default_rate).toFixed(3))}}</span>
                                <span v-if="i==3">{{userinfo?parseFloat((rates[3]*userinfo.return_ratio_rate).toFixed(3)):parseFloat((rates[3]*proxy_default_rate).toFixed(3))}}</span>
                                <span v-if="i==4">{{userinfo?parseFloat((rates[4]*userinfo.return_ratio_rate).toFixed(3)):parseFloat((rates[4]*proxy_default_rate).toFixed(3))}}</span>
                            </span>
                            <!--两面盘 龙虎-->
                            <span v-else-if="keyFirst==='两面盘'&&keyLast==='龙虎和'">
                                <span v-if="i==1">{{userinfo?parseFloat((rates[k]*userinfo.return_ratio_rate).toFixed(3)):parseFloat((rates[k]*proxy_default_rate).toFixed(3))}}</span>
                            </span>
                            <span v-else :class="{'b-blue':item.name=='蓝波','b-green':item.name=='绿波'}" style="font-size: .24rem;position: relative;top: 0px;">{{userinfo?parseFloat((rates[k]*userinfo.return_ratio_rate).toFixed(3)):parseFloat((rates[k]*proxy_default_rate).toFixed(3))}}</span>
                            </span>

                        </li>
                        </ul>
                    </dd>
                </dl>

                <div class="lottery-numbers"
                    v-else-if="(keyFirst==='色波'&&(keyLast==='色波'||keyLast==='半波'||keyLast==='半半波'))
                    ||(keyFirst==='五行'&&keyLast==='种类')
                    ||(keyLast==='两面'&&(keyFirst==='特码B'||keyFirst==='特码A'))
                    ||(keyFirst==='特肖'&&(keyLast==='特肖'))
                    ||(keyFirst==='合肖'&&(keyLast==='合肖'))
                    ||(keyFirst==='正肖'&&(keyLast==='生肖'))
                    ||(keyFirst==='连肖连尾')
                    ||(keyFirst==='头尾数'&&(keyLast==='头尾数'))
                    ||(keyFirst==='正码'&&(keyLast==='其他'))
                    ||(keyFirst==='正码特'&&keyLast==='正一大小')
                    ||(keyFirst==='正码特'&&keyLast==='正二大小')
                    ||(keyFirst==='正码特'&&keyLast==='正三大小')
                    ||(keyFirst==='正码特'&&keyLast==='正四大小')
                    ||(keyFirst==='正码特'&&keyLast==='正五大小')
                    ||(keyFirst==='正码特'&&keyLast==='正六大小')
                    ||(keyFirst==='正码1-6'&&keyLast==='正码一')
                    ||(keyFirst==='正码1-6'&&keyLast==='正码二')
                    ||(keyFirst==='正码1-6'&&keyLast==='正码三')
                    ||(keyFirst==='正码1-6'&&keyLast==='正码四')
                    ||(keyFirst==='正码1-6'&&keyLast==='正码五')
                    ||(keyFirst==='正码1-6'&&keyLast==='正码六')
                    ||(keyFirst==='平特一肖尾数'&&(keyLast==='一肖'||keyLast==='尾数'))
                    ||(keyFirst==='7色波'&&keyLast==='种类')
                    ||(keyFirst==='总肖'&&keyLast==='种类')"
                    :class="lotteryRanges.className">
                <h5>{{lotteryRanges.type}}</h5>
                <ol class="dxdsq_btn">
                    <li @click="lhc_select_number(lotteryRanges.prams,'全',0,lotteryRanges.type)" :class="{'cancel_select' : lotteryRanges.type == '合肖'}">全</li>
                    <li @click="lhc_select_number(lotteryRanges.prams,'大',1,lotteryRanges.type)" :class="{'cancel_select': lotteryRanges.prams.length <= 3 || lotteryRanges.type == '特肖' || lotteryRanges.type == '合肖' || lotteryRanges.type == '五行' || lotteryRanges.type == '平特一肖' || lotteryRanges.type == '正肖' || lotteryRanges.type == '七色波' || lotteryRanges.type.indexOf('连肖') != -1 }">大</li>
                    <li @click="lhc_select_number(lotteryRanges.prams,'小',2,lotteryRanges.type)" :class="{'cancel_select': lotteryRanges.prams.length <= 3 || lotteryRanges.type == '特肖' || lotteryRanges.type == '合肖' || lotteryRanges.type == '五行' || lotteryRanges.type == '平特一肖' || lotteryRanges.type == '正肖' || lotteryRanges.type == '七色波' || lotteryRanges.type.indexOf('连肖') != -1 }">小</li>
                    <li @click="lhc_select_number(lotteryRanges.prams,'单',3,lotteryRanges.type)" :class="{'cancel_select': lotteryRanges.prams.length <= 3 || lotteryRanges.type == '特肖' || lotteryRanges.type == '合肖' || lotteryRanges.type == '五行' || lotteryRanges.type == '平特一肖' || lotteryRanges.type == '正肖' || lotteryRanges.type == '七色波' || lotteryRanges.type.indexOf('连肖') != -1 }">单</li>
                    <li @click="lhc_select_number(lotteryRanges.prams,'双',4,lotteryRanges.type)" :class="{'cancel_select': lotteryRanges.prams.length <= 3 || lotteryRanges.type == '特肖' || lotteryRanges.type == '合肖' || lotteryRanges.type == '五行' || lotteryRanges.type == '平特一肖' || lotteryRanges.type == '正肖' || lotteryRanges.type == '七色波' || lotteryRanges.type.indexOf('连肖') != -1 }">双</li>
                    <li @click="clear_number(lotteryRanges.prams)">清</li>
                </ol>

                <div class="lottery-number-list">
                    <ul>
                    <li class="numbers-father"
                        v-for="(item,k) in lotteryRanges.prams"
                        @click="selNumber(k,item.val,item.active,lotteryRanges)">

                        <div class="numbers-con" :class="item.active?item.className+' activeStyle':item.className">
                        <p :class="{
                        'number-title': (keyFirst==='色波'&&keyLast==='色波')
                        ||(keyFirst==='特肖'&&keyLast==='特肖')
                        ||(keyFirst==='合肖'&&(keyLast==='合肖'))
                        ||(keyFirst==='正肖'&&(keyLast==='生肖'))
                        ||(keyFirst==='五行'&&keyLast==='种类')
                        ||(keyFirst==='连肖连尾')
                        ||(keyFirst==='平特一肖尾数'&&(keyLast==='一肖'||keyLast==='尾数')),
                        'activeStyle':((keyFirst==='色波'&&keyLast==='色波')
                            ||(keyFirst==='五行'&&keyLast==='种类')
                            ||(keyLast==='两面'&&(keyFirst==='特码B'||keyFirst==='特码A'))
                            ||(keyFirst==='特肖'&&keyLast==='特肖')
                            ||(keyFirst==='合肖'&&(keyLast==='合肖'))
                            ||(keyFirst==='正肖'&&(keyLast==='生肖'))
                            ||(keyFirst==='正码'&&(keyLast==='其他'))
                            ||(keyFirst==='正码特'&&keyLast==='正一大小')
                            ||(keyFirst==='正码特'&&keyLast==='正二大小')
                            ||(keyFirst==='正码特'&&keyLast==='正三大小')
                            ||(keyFirst==='正码特'&&keyLast==='正四大小')
                            ||(keyFirst==='正码特'&&keyLast==='正五大小')
                            ||(keyFirst==='正码特'&&keyLast==='正六大小')
                            ||(keyFirst==='正码1-6'&&keyLast==='正码一')
                            ||(keyFirst==='正码1-6'&&keyLast==='正码二')
                            ||(keyFirst==='正码1-6'&&keyLast==='正码三')
                            ||(keyFirst==='正码1-6'&&keyLast==='正码四')
                            ||(keyFirst==='正码1-6'&&keyLast==='正码五')
                            ||(keyFirst==='正码1-6'&&keyLast==='正码六')
                            ||(keyFirst==='7色波'&&keyLast==='种类')
                            ||(keyFirst==='总肖'&&keyLast==='种类')
                            ||(keyFirst==='平特一肖尾数'&&(keyLast==='一肖'||keyLast==='尾数'))
                            ||(keyFirst==='连肖连尾')  )&&item.active,
                        'b-blue':/蓝/g.test(item.name),
                        'b-green':/绿/g.test(item.name),
                        'b-red':(/红/g.test(item.name)||keyFirst==='头尾数'||(keyFirst==='正码'&&(keyLast==='其他')))}">{{item.name}}</p>
                        <div v-if="item.para">
                            <ul  v-if="(keyFirst==='色波'&&keyLast==='色波')">
                            <li v-for="(item2,i) in item.para">{{item2.name}}</li>
                            </ul>
                            <ul v-else-if="(keyFirst==='五行'&&keyLast==='种类')" class="ulwx">
                            <li v-for="(item2,i) in item.para">{{item2.name}}</li>
                            </ul>
                            <ul v-else class="ult">
                            <li v-for="(item2,i) in item.para">{{item2.name}}</li>
                            </ul>
                        </div>
                        </div>
                        <p class="bottery-rotes"
                        :class="{
                                'b-black':(keyFirst==='色波'&&keyLast==='色波')
                                ||(keyFirst==='正肖'&&keyLast==='生肖')
                                ||(keyFirst==='特肖'&&keyLast==='特肖')
                                ||(keyFirst==='五行'&&keyLast==='种类')
                                ||(keyFirst==='平特一肖尾数'&&(keyLast==='一肖'||keyLast==='尾数'))
                                ||(keyFirst==='连肖连尾'),
                                'b-blue':/蓝/g.test(item.name)&&lotteryRanges.prams.length>3,
                                'b-green':/绿/g.test(item.name)&&lotteryRanges.prams.length>3}">
                        <span v-if="(keyFirst!=='合肖')">{{userinfo?parseFloat((rates[k]*userinfo.return_ratio_rate).toFixed(3)):parseFloat((rates[k]*proxy_default_rate).toFixed(3))}}</span>
                        </p>
                    </li>
                    </ul>
                </div>
                </div>

                <dl v-else  :class="lotteryRanges.className">
                <dt :class="{group24:keyFirst==='任选四'&&(keyLast==='前四组选24'||keyLast==='后四组选24')}">{{lotteryRanges.type}}</dt>
                <ol class="dxdsq_btn">
                    <li @click="select_number(lotteryRanges.prams,'全',0,lotteryRanges.type)" :class="{'cancel_select':lotteryRanges.type == '胆码'  || lotteryRanges.type.indexOf('全中')!= -1 || (lotteryRanges.type.indexOf('中二')!= -1 &&  lotteryRanges.type != '二中二') || lotteryRanges.type.indexOf('中特')!= -1 || lotteryRanges.type.indexOf('特串')!= -1 || lotteryRanges.type == '特码包三'}">全</li>
                    <li @click="select_number(lotteryRanges.prams,'大',1,lotteryRanges.type)" :class="{'cancel_select': lotteryRanges.prams.length <= 1 || lotteryRanges.type == '胆码' || lotteryRanges.type.indexOf('全中')!= -1 || (lotteryRanges.type.indexOf('中二')!= -1 &&  lotteryRanges.type != '二中二') || lotteryRanges.type.indexOf('中特')!= -1 || lotteryRanges.type.indexOf('特串')!= -1 || lotteryRanges.type == '特码包三'}">大</li>
                    <li @click="select_number(lotteryRanges.prams,'小',2,lotteryRanges.type)" :class="{'cancel_select': lotteryRanges.prams.length <= 1 || lotteryRanges.type == '胆码' || lotteryRanges.type.indexOf('全中')!= -1 || (lotteryRanges.type.indexOf('中二')!= -1 &&  lotteryRanges.type != '二中二') || lotteryRanges.type.indexOf('中特')!= -1 || lotteryRanges.type.indexOf('特串')!= -1 || lotteryRanges.type == '特码包三'}">小</li>
                    <li @click="select_number(lotteryRanges.prams,'单',3,lotteryRanges.type)" :class="{'cancel_select': lotteryRanges.prams.length <= 1 || lotteryRanges.type == '胆码' || lotteryRanges.type.indexOf('全中')!= -1 || (lotteryRanges.type.indexOf('中二')!= -1 &&  lotteryRanges.type != '二中二') || lotteryRanges.type.indexOf('中特')!= -1 || lotteryRanges.type.indexOf('特串')!= -1 || lotteryRanges.type == '特码包三'}">单</li>
                    <li @click="select_number(lotteryRanges.prams,'双',4,lotteryRanges.type)" :class="{'cancel_select': lotteryRanges.prams.length <= 1 || lotteryRanges.type == '胆码' || lotteryRanges.type.indexOf('全中')!= -1 || (lotteryRanges.type.indexOf('中二')!= -1 &&  lotteryRanges.type != '二中二') || lotteryRanges.type.indexOf('中特')!= -1 || lotteryRanges.type.indexOf('特串')!= -1 || lotteryRanges.type == '特码包三'}">双</li>
                    <li @click="clear_number(lotteryRanges.prams)">清</li>
                </ol>
                <dd>
                    <ul>
                    <li
                        :class="item.active?item.className+' activeStyle':item.className"
                        v-for="(item,k) in lotteryRanges.prams"
                        @click="selNumber(k,item.val,item.active,lotteryRanges)">{{item.name}}</li>
                    </ul>
                </dd>
                </dl>

            </div>
            </div>

            <!--投注结算-->
            <div class="playing-account">
                <dl>
                    <dt>
                    <div class="playing-account-left" @click="delNumber">
                        <img src="../../images/del_buy.png" alt="">
                        <span>清空</span>
                    </div>
                    <div class="playing-account-m-1" @click="getColdHotPanking(1,'冷热排行')">冷热</div>
                    <div class="playing-account-m-1" @click="getColdHotPanking(2,'遗漏排行')">遗漏</div>
                    <div class="playing-account-right">
                        <span>{{lotteryNum}}</span>注<span>{{lotteryCash}}</span>元
                    </div>
                    </dt>
                    <dd>
                    <input type="button" value="立即投注" @click="orderLottery" v-if="!$store.state.user.shop">
                    <input type="button" value="下一步" @click="orderLottery" v-else>
                    </dd>
                </dl>
            </div>

            <!--冷热 遗漏-->
            <div class="playing-hotcold-bg" v-if="hotFlag" @click="hotFlag=false"></div>
            <div class="playing-hotcold-con" v-if="hotFlag">
            <div class="playing-hotcold-item">
                <h4>{{bTitle}}</h4>
                <div class="playing-hotcold-list">
                <div class="playing-hotcold-list-item" v-for="(item, i) in hotColdList">
                    <div>{{item.type}}</div>
                    <div>已连开{{item.count}}期</div>
                </div>
                </div>
            </div>
            <nop-data v-if="hotColdList.length==0"></nop-data>
        </div>

        <!--弹层 注单设定-->
        <div class="bets-con" v-if="singleLotter">
        <div class="bets-item">
            <div class="bets-title">
            <h4>注单设定</h4>
            </div>
            <div class="bets-setion">
            <div class="bets-rotats" v-if="$route.params.pan==1&&!(/28/g.test($route.params.code))&&$route.params.code!=='XGLHC'&&$route.params.code!=='JSLHC'">
                <div>赔率：{{ratesVal}}</div>
                <div>返利：{{retrun_li}}%</div>
            </div>
            <div class="bets-slide"  v-if="$route.params.pan==1&&!(/28/g.test($route.params.code))&&$route.params.code!=='XGLHC'&&$route.params.code!=='JSLHC'">
                <mt-range
                v-model="value1"
                :min="0"
                :max="(this.highest_rate-this.lowest_rate)/this.highest_rate*100"
                :step="1"
                :bar-height="20" @change="chaSilde">
                </mt-range>

            </div>
            <div class="bets-input">
                <span>单注金额：</span>
                <input type="tel" v-model="unit_price"><span :class="{cashActive:cashFlag === '元'}" @click="cashFormate(unit_price,'元')">元</span><span :class="{cashActive:cashFlag === '角'}" @click="cashFormate(unit_price,'角')">角</span><span :class="{cashActive:cashFlag === '分'}" @click="cashFormate(unit_price,'分')">分</span>
            </div>
            <div class="bets-fetrue">
                <div class="bets-fetrue-item">追&nbsp;
                <div class="b-feture">
                    <input type="button" value="-" @click="mounse1"><input type="text" v-model="future_issues" readonly><input type="button" value="+" @click="plus1">
                </div>
                &nbsp;期</div>
                <div class="bets-fetrue-item">投&nbsp;
                <div class="b-feture">
                    <input type="button" value="-" @click="mounse2"><input type="text" v-model="bet_count" readonly><input type="button" value="+" @click="plus2">&nbsp;
                </div>
                    倍</div>
            </div>
            <div class="bets-count">
                注数：{{lotteryNum}}
            </div>
            <div class="bets-count">
                总额：{{parseFloat((((cashFlag === '角'? unit_price*0.1 : cashFlag === '分' ? unit_price*0.01 : unit_price)*(bet_count*future_issues+bet_count))*lotteryNum).toFixed(3))}}元
            </div>
            <div class="bets-winning">
                <span>若中奖，单注最高中</span>
                <span class="sum" >{{parseFloat((ratesVal*(cashFlag === '角'? unit_price*0.1 : cashFlag === '分' ? unit_price*0.01 : unit_price)).toFixed(3))}}</span>
                <span class="fr">元</span>
            </div>
            </div>
            <div class="bets-foot">
            <input type="button" value="取消" @click="singleLotter=false">
            <input type="button" value="提交" @click='submitOrder'>
            </div>
        </div>
        </div>
    <!--define dialog-->
    <!--<def-dialog v-if="showModule" @close="showModule = false" :title="modalTitle" :btn-color="modalColor" :btn-text="modalText">
      <div slot="body" style="text-indent: 16px;">
        {{modalBody}}
      </div>
    </def-dialog>-->
        <div class="bet-guide" v-if="sure_show_bet_guide && userinfo">
            <div>
                <div class="bet-guide-header" v-if="show_guide_index==0">
                        <span>玩法</span>
                         <i> {{keyFirst}}-{{keyLast}} </i>  
                         <strong>   ▼  </strong>
                </div>
                <div class="bet-guide-header1" v-if="show_guide_index==1">
                    <img  src="../../images/11PxCook.png" alt="">
                </div>
                <div class="bet-guide-last-date" v-if="show_guide_index==2">
                   <div>
                        <p>{{rstObj.issue_number?rstObj.issue_number:0}}期</p>
                        <dl class="fixed-t">
                            <dt>
                                <div v-if="rstObj.code=='BJ28'||rstObj.code=='XY28'">
                                    <div class="lot-res-num" v-if="rstObj.number1">
                                    <span  v-if="rstObj.number1">{{rstObj.number1}} +</span>
                                    <span  v-if="rstObj.number2">{{rstObj.number2}} +</span>
                                    <span  v-if="rstObj.number3">{{rstObj.number3}} =</span>
                                    <span  v-if="rstObj.number4">{{rstObj.number4}}</span>
                                    </div>
                                    <div v-else style="color: #fc823c;">{{lottery_wining}}</div>
                                </div>
                                <div v-else-if="rstObj.code=='XGLHC' || rstObj.code=='JSLHC'">
                                    <div class="lot-res-num" v-if="rstObj.number1">
                                    <span  v-if="rstObj.number1" :class="{blue:lhc_color_farmate(rstObj.number1)==1,green:lhc_color_farmate(rstObj.number1)==2}">{{rstObj.number1}}</span>
                                    <span  v-if="rstObj.number2" :class="{blue:lhc_color_farmate(rstObj.number2)==1,green:lhc_color_farmate(rstObj.number2)==2}">{{rstObj.number2}}</span>
                                    <span  v-if="rstObj.number3" :class="{blue:lhc_color_farmate(rstObj.number3)==1,green:lhc_color_farmate(rstObj.number3)==2}">{{rstObj.number3}}</span>
                                    <span  v-if="rstObj.number4" :class="{blue:lhc_color_farmate(rstObj.number4)==1,green:lhc_color_farmate(rstObj.number4)==2}">{{rstObj.number4}}</span>
                                    <span  v-if="rstObj.number5" :class="{blue:lhc_color_farmate(rstObj.number5)==1,green:lhc_color_farmate(rstObj.number5)==2}">{{rstObj.number5}}</span>
                                    <span  v-if="rstObj.number6" :class="{blue:lhc_color_farmate(rstObj.number6)==1,green:lhc_color_farmate(rstObj.number6)==2}">{{rstObj.number6}}</span>
                                    <span  v-if="rstObj.number7" :class="{blue:lhc_color_farmate(rstObj.number7)==1,green:lhc_color_farmate(rstObj.number7)==2}">{{rstObj.number7}}</span>
                                    </div>
                                    <div v-else style="color: #fc823c;">{{lottery_wining}}</div>
                                </div>
                                <div v-else>
                                    <div class="lot-res-num" v-if="rstObj.number1">
                                    <span  v-if="rstObj.number1">{{rstObj.number1}}</span>
                                    <span  v-if="rstObj.number2">{{rstObj.number2}}</span>
                                    <span  v-if="rstObj.number3">{{rstObj.number3}}</span>
                                    <span  v-if="rstObj.number4">{{rstObj.number4}}</span>
                                    <span  v-if="rstObj.number5">{{rstObj.number5}}</span>
                                    <span  v-if="rstObj.number6" :class="{'b-blue':rstObj.code=='DLT'}">{{rstObj.number6}}</span>
                                    <span  v-if="rstObj.number7" :class="{'b-blue':rstObj.code=='SSQ'||rstObj.code=='DLT'}">{{rstObj.number7}}</span>
                                    <span  v-if="rstObj.number8">{{rstObj.number8}}</span>
                                    <span  v-if="rstObj.number9">{{rstObj.number9}}</span>
                                    <span  v-if="rstObj.number10">{{rstObj.number10}}</span>
                                    <span  v-if="rstObj.number11">{{rstObj.number11}}</span>
                                    </div>
                                    <div v-else style="color: #fc823c;">{{lottery_wining}}</div>
                                </div>
                            </dt>
                        </dl>
                    </div>
                </div>

                <div class="bet-guide-down-icon" v-if="show_guide_index==3">
                    <div>
                        <Icon type="chevron-down" color="#555" size="18" ></Icon>
                    </div>
                </div>
                
                <div class="bet-guide-bet-now"  v-if="show_guide_index == 4">
                    <div>立即投注</div>
                </div>
                <div class="bet-guide-append-box" v-if="show_guide_index == 5">
                    <div class="bet-guide-append">
                        <div class="append-left">
                            追 <div><i>-</i> <strong>0</strong><em>+</em></div> 期
                            
                        </div>
                        <div class="append-right">
                            投 <div><i>-</i> <strong>1</strong><em>+</em></div> 倍
                        </div>
                    </div>
                </div>
                <div class="bet-guide-submit" v-if="show_guide_index == 6">
                    <div>
                        <input  type="button" value="提交">
                    </div>
                </div>
            </div>

            <div class="first-step" @click="show_guide(0)" v-if="show_guide_index==0"> </div>
            <div class="second-step" @click="show_guide(1)" v-if="show_guide_index==1"> </div>
            <div class="third-step" @click="show_guide(2)" v-if="show_guide_index==2"> </div>
            <div class="fourth-step" @click="show_guide(3)" v-if="show_guide_index==3"> </div>
            <div class="fifth-step" @click="show_guide(4)" v-if="show_guide_index==4"> </div>
            <div class="six-step" @click="show_guide(5)" v-if="show_guide_index==5"> </div>
            <div class="seven-step" @click="show_guide(6)" v-if="show_guide_index==6"> </div>
        </div>
   </div>
  </transition>
</template>


<script type="text/ecmascript-6">
  import Back from '@/components/back/back'
  import NopData from '@/components/tab/nop-data'
    //  import defDialog from '@/components/public/define_dialog'
  import {lottery_wining,lotteryTypes, lotteryRanges} from 'api/config'
  import { requestOpt, alertip,array_contain, chaLotteryNumber,mt_confirm,checkArr,getArrayItems,getArrays,isContained,mt_toast} from 'api/recommend'
  import VScroll from "@/components/public/pull-refresh"
  import Shake from 'shake.js'
  import { Toast } from 'mint-ui'

  export default {
    components: {
      Back,
      NopData,
      VScroll,
      //  defDialog,
    },
    data() {
      return {
        islogin: sessionStorage.getItem('login'),
        userinfo: JSON.parse(sessionStorage.getItem('userinfo'))|| null,
        lottery_wining: lottery_wining,
        isShow: false,
        showha:false,
        bTitle: '',// 冷热 遗漏列表标题
        hotFlag: false,
        results: [],
        rstObj: {},
        historyList: [],
        page: 1,
        timer:null,
        scrollData: {
          noFlag: false //暂无更多数据显示
        },
        nodata: false,
        hitoryflag: false,
        lotteryRanges:{},
        paylist: {},
        singlePlay: [], // 包括 A、B盘
        panPlay: [], // A或者B
        panValue:[],
        pKey: [],
        cKey: [],
        keyFirst: this.$store.state.user.lot_play_key.keyFirst || '',
        keyLast: this.$store.state.user.lot_play_key.keyLast || '',
        target: '',
        rates: [], // 赔率
        ratesVal:0, // 赔率值
        highest_rate: 0, // 最高赔率
        lowest_rate: 0, // 最低赔率
        lhc_rate: '----',
        retrun_li: 0, // 返利
        activeNumBool: false,
        activeNum: -1,
        activeArr: [], // 被选中的号码 存储数组
        arrLen: 0, // 记录个数
        unitPirace: 2, // 投注单价
        unit_price: 2, // 单个投注单价
        future_issues:0,// 追期数
        bet_count: 1,// 投注倍数
        lotteryNum: 0, //总投注数
        lotteryCash: 0, // 总金额
        lotteryPosText: [], // 位置数组
        lotteryPosCode: [], // 位置数组 code
        bet_numbers1Text:[],
        hotCold: 1,
        hotColdList: [],
        id:'', // 彩票玩法ID
        value1: 0, // 赔率 slide
        min: 0,
        max: 0,
        singleLotter: false,
        Bbets: [], // B盘每次投注的集合
        Abets: [], // A盘每次投注的集合
        Bretate: '',//B盘赔率

        tong_arr :[],   // 同号arr
        bu_tong_arr : [], // 不同号arr

        dan_ma_arr :[], // 胆码arr
        tuo_ma_arr :[], // 拖码arr

        playExPlain: [{
          name: '玩法说明',val: 1, to: 'explain'
        },{
          name: '投注记录',val: 2, to: 'betting/0'
        },{
          name: '走势图',val: 1, to: 'trend'
        }],
        proxy_default_rate: window.proxy_default_rate || 1,
        specialDial: [],
        cashFlag: '元', // 单价金额默认 元为 单位 角 分
        sure_show_bet_guide : false,
        show_guide_index : 0
      }
    },
    beforeRouteLeave(to, from, next) {
      clearInterval(this.timer)
      this.$store.commit('SHOP', false)
      this.delNumber()
      next()
    },
    mounted() {
      if(!this.userinfo) {
        this.proxy_default_rate = window.proxy_default_rate
      } else if(this.userinfo && (this.$route.params.code==='DLT'|| this.$route.params.code==='SSQ')) {
        this.userinfo.return_ratio_rate = 1
      }
      this.$store.commit('LOGINFLAG','m-center')
      let myShakeEvent = new Shake({
        threshold:15,
        timeout:1000
      })
      myShakeEvent.start()
      window.addEventListener('shake', this.selRandow, false)
      this.delNumber()
      this.getLotterylist();
      this.getHistory();

      let list = /28/g.test(this.$store.state.user.lottery_code)?window.PC_dandan:window.All
      for (let i=0,len=list.length; i<len;i++) {
        if (this.$store.state.user.lottery_code===list[i].code || this.$route.params.code===list[i].code) {
          this.rstObj = list[i];
          this.$store.commit('BET_OBJ',this.rstObj)
          window.stop_sale_span = list[i].stop_sale_span
          window.sessionStorage.setItem('bet_obj',JSON.stringify(this.rstObj))
        }
      }

      this.timer = setInterval(() => {
        let list = /28/g.test(this.$route.params.code)?window.PC_dandan:window.All
        for (let i=0,len=list.length; i<len;i++) {
          if (this.$route.params.code===list[i].code || this.$route.params.code===list[i].code) {
            this.rstObj = list[i];
          }
        }
      },1000)
      setTimeout(()=>{
        window.scrollTo(0,-500);
        console.log(document.querySelector('.playing').scrollTop)
      },100)
     
      this.if_show_bet_guide();
    },
    methods: {
      cashFormate(num, type) {
        this.cashFlag = type
      },
      toTrend(code,id) {
        for (let i=0,len=lotteryTypes.length;i<len;i++){
          if (lotteryTypes[i].lot_type_id == id) {
            this.$router.push('/'+lotteryTypes[i].link+'/'+id)
            break
          }
        }
      },
      lhc_color_farmate(name) { // lhc号码字体颜色格式化
        if(name==='03' ||name==='04' ||name==='09' ||name==='10' ||name==='14' ||name==='15' ||name==='20' ||name==='25' ||name==='26' ||name==='31' ||name==='36' ||name==='37' ||name==='41' ||name==='42' ||name==='47' ||name==='48') {
          return 1
        } else if (name==='05' ||name==='06' ||name==='11' ||name==='16' ||name==='17' ||name==='21' ||name==='22' ||name==='27' ||name==='28' ||name==='32' ||name==='33' ||name==='38' ||name==='39' ||name==='43' ||name==='44' ||name==='49'){
          return 2
        }
        return 0
      },
      goback() { // 返回
        if (this.$store.state.user.shop){
          this.$router.push('/betsDetail/'+this.$route.params.code+'/'+this.$route.params.typeid+'/'+this.$route.params.pan)
        } else {
          if(this.$store.state.user.bets&&this.$store.state.user.bets.length>0) {
            mt_confirm('退出该页面会清空购物篮里的注单!', res => {
              if (res) {
                this.$store.commit('BETS',[])
                if(this.$store.state.user.home_tab === 'home') {
                  this.$router.push('/home')
                } else if (this.$store.state.user.home_tab === 'lottery1') {
                  this.$router.push('/lottery1')
                } else if (this.$store.state.user.home_tab === 'pcdandan') {
                  this.$router.push('/pcdandan')
                } else {this.$router.go(-1)
                }
              }
            })
          } else {
            if(this.$store.state.user.home_tab === 'home') {
              this.$router.push('/home')
            } else if (this.$store.state.user.home_tab === 'lottery1') {
              this.$router.push('/lottery1')
            } else if (this.$store.state.user.home_tab === 'pcdandan') {
              this.$router.push('/pcdandan')
            } else {this.$router.go(-1)
            }
          }
        }
      },
      toTlink(to){
        if(to==='trend') {
          for (let i=0,len=lotteryTypes.length;i<len;i++){
            if (this.$route.params.typeid == lotteryTypes[i].lot_type_id) {
              this.$router.push('/'+lotteryTypes[i].link+'/'+this.$route.params.typeid)
              break
            }
          }
        }else if (to==='explain'){
          if(this.$route.params.pan==2) {
            this.$route.params.pan = 'B'
            this.$router.push('/'+to+'/'+this.$route.params.code+'/'+this.$route.params.pan+'/'+this.rstObj.name)
          } else {
            this.$route.params.pan = 'A'
            this.$router.push('/'+to+'/'+this.$route.params.code+'/'+this.$route.params.pan+'/'+this.rstObj.name)
          }

        }else {
          if(this.islogin) {
            this.$router.push('/'+to)
          } else {
            this.$router.push('/login')
          }

        }

      },

      mounse1() {// 追 减
        if(this.future_issues===0) {
          this.future_issues=0
          return
        }
        --this.future_issues

      },
      mounse2() {// 倍 减
        if(this.bet_count===1) {
          this.bet_count=1
          return
        }
        --this.bet_count

      },
      plus1() {// 追 加
        if (this.future_issues>=100) {
          this.future_issues = 100
          return
        }
        ++this.future_issues
      },
      plus2() {// 倍 加
        ++this.bet_count
      },
      returnBets() {
        this.$store.commit('BET',{})
        this.$router.push('/betsDetail/'+this.$route.params.code+'/'+this.$route.params.typeid+'/'+this.$route.params.pan)
      },
      onRefresh(done) {
        this.page = 1;
        this.getHistory();
        if(done) {
          done();
        }
      },
      open(){
        this.showha=!this.showha
      },
      chaSilde() {
        this.retrun_li = ~~this.value1
        if (~~this.value1===0) {
          this.ratesVal = parseFloat(this.highest_rate)
        } else if (~~this.value1===Math.floor((this.highest_rate-this.lowest_rate)/this.highest_rate*100)) {
          this.ratesVal = parseFloat(this.lowest_rate)
        } else {
          if((this.highest_rate-this.highest_rate*this.retrun_li/100 + '').length>6) {
            this.ratesVal = (this.highest_rate-this.highest_rate*this.retrun_li/100+'').split('.')[1].length<3?(this.highest_rate-this.highest_rate*this.retrun_li/100):(this.highest_rate-this.highest_rate*this.retrun_li/100).toFixed(3)
          } else {
            this.ratesVal = this.highest_rate-this.highest_rate*this.retrun_li/100
          }
        }
      },
      hideDailog(i) {
        this.delNumber()
        event.stopPropagation();
        event.preventDefault();
        this.isShow = !this.isShow;
        if (this.isShow) {
          this.$el.querySelector('.playing-down').style.transform = 'rotate(180deg)'
        } else {
          this.$el.querySelector('.playing-down').style.transform = 'rotate(0)'
        }

      },
      getLotterylist() { // 彩票玩法列表
        /*requestOpt.reqnoGet('play_types', (res) => {
          if (res.data.status===1) {
            let list = res.data.data.list*/
            /**
             *  store
             * */
            //console.log(this.$store.state.user)
            let list = this.$store.state.user.lottery_play_list || JSON.parse(sessionStorage.getItem('lottery_play_list'))
            let o = Object.keys(list)
            let reg = new RegExp(this.$route.params.code)
            for (let i=0,len=o.length; i<len;i++) {
              if (reg.test(o[i])) {

                let k = o[i]; // 1|重庆时时彩|CQSSC
                this.paylist = list[k]
                this.singlePlay = Object.keys(list[k]); // this.KeyFirst 集合
                this.valuePlay = Object.values(list[k]); // this.KeyFirst 集合

                for (let m=0,len=this.valuePlay.length;m<len;m++) {
                  if (this.valuePlay[m][0].pan == this.$route.params.pan) {
                    this.panPlay.push(this.singlePlay[m])
                    this.panValue.push(this.valuePlay[m])
                  }
                }

                let lot_index  = 0;
                let lot_cindex = 0;

                if(this.keyFirst) {
                  for (let i=0;i<this.panPlay.length;i++) {
                      //new RegExp(this.keyFirst).test(this.panPlay[i])
                    if(this.keyFirst === ((this.panPlay[i]).split('|')).slice(1)[0]) {
                      //this.cKey = this.panValue[i]; //获取第二级集合
                      lot_index = i
                    }
                  }
                  for (let i=0;i<this.panValue[lot_index].length;i++) {
                    if(this.keyLast === this.panValue[lot_index][i].type_name) {
                      lot_cindex = i
                    }
                  }
                } else {
                  lot_index  = 0;
                  lot_cindex = 0;
                }
                // ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓以下第一次进来父玩法  key no
                this.pKey = this.panPlay[lot_index].split('|').slice(1) ; //this.pKey = Object.keys(list[k])[0].split('|').slice(1) // arr -> 分割arr -> 去除数字下标0  --  []
                this.keyFirst = this.pKey[0] // 默认显示第一个
                this.cKey = this.panValue[lot_index]; //获取第二级集合
                this.keyLast = this.cKey[lot_cindex].type_name // 下级默认显示第一个

                // 获取选号集合
                this.target = chaLotteryNumber(this.keyFirst, this.keyLast, this.$route.params.code)
                this.lotteryRanges=lotteryRanges[this.target]
                // 区分 A B盘
                if (this.panValue[lot_index][lot_cindex].rates) {
                  this.rates = this.panValue[lot_index][lot_cindex].rates
                }
                this.arrLen = this.panValue[lot_index][lot_cindex].number_count
                this.id = this.panValue[lot_index][lot_cindex].id
                if(this.userinfo) {
                  this.lowest_rate = parseFloat((this.panValue[lot_index][lot_cindex].lowest_rate*this.userinfo.return_ratio_rate).toFixed(3))
                  this.highest_rate = parseFloat((this.panValue[lot_index][lot_cindex].highest_rate*this.userinfo.return_ratio_rate).toFixed(3))
                  if(this.keyLast === '中二') {
                    this.ratesVal = parseFloat((this.panValue[lot_index][lot_cindex].rates[1]*this.userinfo.return_ratio_rate).toFixed(3))
                  } else if(this.keyLast === '三全中') {
                    this.ratesVal = parseFloat((this.panValue[lot_index][lot_cindex].rates[0]*this.userinfo.return_ratio_rate).toFixed(3))
                  } else if(this.keyLast === '二全中') {
                    this.ratesVal = parseFloat((this.panValue[lot_index][lot_cindex].rates[0]*this.userinfo.return_ratio_rate).toFixed(3))
                  } else if(this.keyLast === '中特') {
                    this.ratesVal = parseFloat((this.panValue[lot_index][lot_cindex].rates[1]*this.userinfo.return_ratio_rate).toFixed(3))
                  } else if(this.keyLast === '特串') {
                    this.ratesVal = parseFloat((this.panValue[lot_index][lot_cindex].rates[0]*this.userinfo.return_ratio_rate).toFixed(3))
                  } else if(this.keyLast === '四全中') {
                    this.ratesVal = parseFloat((this.panValue[lot_index][lot_cindex].rates[0]*this.userinfo.return_ratio_rate).toFixed(3))
                  }
                  else {
                    this.ratesVal = this.highest_rate
                  }
                }else {
                  this.lowest_rate = this.panValue[lot_index][lot_cindex].lowest_rate * this.proxy_default_rate
                  this.highest_rate = this.panValue[lot_index][lot_cindex].highest_rate * this.proxy_default_rate
                  if(this.keyLast === '中二') {
                    this.ratesVal = parseFloat((this.panValue[lot_index][lot_cindex].rates[1]*this.proxy_default_rate).toFixed(3))
                  } else if(this.keyLast === '三全中') {
                    this.ratesVal = parseFloat((this.panValue[lot_index][lot_cindex].rates[0]*this.proxy_default_rate).toFixed(3))
                  } else if(this.keyLast === '二全中') {
                    this.ratesVal = parseFloat((this.panValue[lot_index][lot_cindex].rates[0]*this.proxy_default_rate).toFixed(3))
                  } else if(this.keyLast === '中特') {
                    this.ratesVal = parseFloat((this.panValue[lot_index][lot_cindex].rates[1]*this.proxy_default_rate).toFixed(3))
                  } else if(this.keyLast === '特串') {
                    this.ratesVal = parseFloat((this.panValue[lot_index][lot_cindex].rates[0]*this.proxy_default_rate).toFixed(3))
                  } else if(this.keyLast === '四全中') {
                    this.ratesVal = parseFloat((this.panValue[lot_index][lot_cindex].rates[0]*this.proxy_default_rate).toFixed(3))
                  }
                  else {
                    this.ratesVal = this.highest_rate
                  }
                }
                // ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑以上第一次进来父玩法  key no
                this.delNumber()
              }
            }
      },
      tabPlay(name,k) { // 1  this.keyFirst = 合肖  特肖 正肖 this.keyLast = 一肖  /连肖/g.test()
        this.delNumber();event.stopPropagation();event.preventDefault();
        this.keyFirst = name.replace(/^\d+\|/,'')
        this.cKey = this.paylist[name]
        this.keyLast = this.cKey[0].type_name

        if (this.cKey.length<=1) {this.isShow = false;}
        this.rates = this.cKey[0].rates
        this.target = chaLotteryNumber(this.keyFirst, this.keyLast, this.$route.params.code)
        this.arrLen = this.cKey[0].number_count
        this.id  = this.cKey[0].id
        if(this.userinfo) {
          this.lowest_rate = parseFloat((this.cKey[0].lowest_rate*this.userinfo.return_ratio_rate).toFixed(3))
          this.highest_rate =  parseFloat((this.cKey[0].highest_rate*this.userinfo.return_ratio_rate).toFixed(3))
          this.ratesVal = this.highest_rate
        } else {
          this.lowest_rate = this.cKey[0].lowest_rate * this.proxy_default_rate
          this.highest_rate =  this.cKey[0].highest_rate * this.proxy_default_rate
          this.ratesVal = this.cKey[0].highest_rate * this.proxy_default_rate
        }
        let lotplays = lotteryRanges[this.target]
        let lhc_shengxiao_key = Object.keys(window.lhc_shengxiao)
        for(let i=0; i< lotplays[0].prams.length; i++) {
          for(let j=0; j< lhc_shengxiao_key.length; j++) {
            if(lotplays[0].prams[i].name === lhc_shengxiao_key[j]) {
              let p = window.lhc_shengxiao[lhc_shengxiao_key[j]].split(',');
              let tem = [];
              for(let m=0;m<p.length;m++) {
                tem.push({name:p[m]+'',val:p[m]})
              }
              lotplays[0].prams[i].para = tem
            }
          }
        }
        if(this.keyFirst === '合肖' || this.keyFirst === '特肖' || this.keyFirst === '正肖' || this.keyLast === '一肖' ||  /连肖/g.test(this.keyLast)) {
          this.lotteryRanges=lotplays
        } else {
          this.lotteryRanges=lotteryRanges[this.target]
        }
      },
      tabPlay2(name,id,k) { // 2
        this.delNumber();event.stopPropagation();event.preventDefault();this.isShow = false;this.keyLast = name;
        this.target = chaLotteryNumber(this.keyFirst, this.keyLast, this.$route.params.code);
        this.arrLen = this.cKey[k].number_count;
        this.id  = this.cKey[k].id;
        if(this.userinfo) {
          this.lowest_rate = parseFloat((this.cKey[k].lowest_rate*this.userinfo.return_ratio_rate).toFixed(3))
          this.highest_rate = parseFloat((this.cKey[k].highest_rate*this.userinfo.return_ratio_rate).toFixed(3))
          if(this.keyLast === '中二') {this.ratesVal = parseFloat((this.cKey[k].rates[1]*this.userinfo.return_ratio_rate).toFixed(3));
          } else if(this.keyLast === '三全中') {this.ratesVal = parseFloat((this.cKey[k].rates[0]*this.userinfo.return_ratio_rate).toFixed(3));
          } else if(this.keyLast === '二全中') {this.ratesVal = parseFloat((this.cKey[k].rates[0]*this.userinfo.return_ratio_rate).toFixed(3));
          } else if(this.keyLast === '中特') {this.ratesVal = parseFloat((this.cKey[k].rates[1]*this.userinfo.return_ratio_rate).toFixed(3));
          } else if(this.keyLast === '特串') {this.ratesVal = parseFloat((this.cKey[k].rates[0]*this.userinfo.return_ratio_rate).toFixed(3));
          } else if(this.keyLast === '四全中') {this.ratesVal = parseFloat((this.cKey[k].rates[0]*this.userinfo.return_ratio_rate).toFixed(3));
          } else {this.ratesVal = this.highest_rate}
        } else {
          this.lowest_rate = this.cKey[k].lowest_rate * this.proxy_default_rate
          this.highest_rate = this.cKey[k].highest_rate * this.proxy_default_rate
          if(this.keyLast === '中二') {this.ratesVal = parseFloat((this.cKey[k].rates[1]*this.proxy_default_rate).toFixed(3));
          } else if(this.keyLast === '三全中') {this.ratesVal = parseFloat((this.cKey[k].rates[0]*this.proxy_default_rate).toFixed(3));
          } else if(this.keyLast === '二全中') {this.ratesVal = parseFloat((this.cKey[k].rates[0]*this.proxy_default_rate).toFixed(3));
          } else if(this.keyLast === '中特') {this.ratesVal = parseFloat((this.cKey[k].rates[1]*this.proxy_default_rate).toFixed(3));
          } else if(this.keyLast === '特串') {this.ratesVal = parseFloat((this.cKey[k].rates[0]*this.proxy_default_rate).toFixed(3));
          } else if(this.keyLast === '四全中') {this.ratesVal = parseFloat((this.cKey[k].rates[0]*this.proxy_default_rate).toFixed(3));
          } else {this.ratesVal = this.highest_rate
          }
        }

        this.rates = this.cKey[k].rates

        let lotplays = lotteryRanges[this.target]
        let lhc_shengxiao_key = Object.keys(window.lhc_shengxiao)
        for(let i=0; i< lotplays[0].prams.length; i++) {
          for(let j=0; j< lhc_shengxiao_key.length; j++) {
            if(lotplays[0].prams[i].name === lhc_shengxiao_key[j]) {
              let p = window.lhc_shengxiao[lhc_shengxiao_key[j]].split(',');
              let tem = [];
              for(let m=0;m<p.length;m++) {
                tem.push({name:p[m]+'',val:p[m]})
              }
              lotplays[0].prams[i].para = tem
            }
          }
        }
        if(this.keyFirst === '合肖' || this.keyFirst === '特肖' || this.keyFirst === '正肖' || this.keyLast === '一肖' ||  /连肖/g.test(this.keyLast)) {
          this.lotteryRanges=lotplays
        } else {
          this.lotteryRanges=lotteryRanges[this.target]
        }
      },
      getHistory() { // 单个彩票历史记录 lottery_results_and_forms 'lottery_results/'+this.$route.params.typeid+'?page='+this.page
        requestOpt.reqnoGet('lottery_results_and_forms/'+this.$route.params.typeid, (res) => {
          if (res.data.status===1) {
            this.historyList = res.data.data.list;
          } else {
            mt_toast(res.data.msg)
          }
        }, (err) => {
          mt_toast(err)
        });
      },
      getColdHotPanking(type,title) { // this.hotCold
        this.bTitle = title
        this.hotFlag = true
        requestOpt.reqnoGet('lottery_results_form_rank?type='+type+'&lot_type_id='+this.$route.params.typeid, (res) => {
          if (res.data.status===1) {
            this.hotColdList = res.data.data.list;
            console.log(this.hotColdList)
          } else {
            mt_toast(res.data.msg)
          }
        }, (err) => {
          mt_toast(err)
        });
      },
      submitOrder() { // 投注提交
        this.$router.push('/betsDetail/'+this.$route.params.code+'/'+this.$route.params.typeid+'/'+this.$route.params.pan)
        this.$store.commit('SHOP',true)

        if (this.keyLast !=='定位胆') { // 不是定位胆的二维数组才可以将二维替换一维
          if (this.activeArr.length===1) {
            this.activeArr = this.activeArr[0]
          }
        }
        if(this.keyFirst === '连肖连尾' ) {
          if(this.bet_numbers1Text[0].indexOf('鸡') > 0 && /连肖/g.test(this.keyLast)) {
            this.ratesVal = parseFloat((this.rates[9]*this.userinfo.return_ratio_rate).toFixed(3))
          } else {
            this.ratesVal = parseFloat((this.rates[0]*this.userinfo.return_ratio_rate).toFixed(3))
          }
        }
        if (this.lotteryPosText.length>0) {
          for (let m=0;m<this.lotteryPosText.length;m++) {
            if (this.lotteryPosText[m]=='第一位') {this.lotteryPosText[m] = 1;
            } else if (this.lotteryPosText[m]=='第二位') {this.lotteryPosText[m] = 2;
            } else if (this.lotteryPosText[m]=='第三位') {this.lotteryPosText[m] = 3;
            } else if (this.lotteryPosText[m]=='第四位') {this.lotteryPosText[m] = 4;
            } else if (this.lotteryPosText[m]=='第五位') {this.lotteryPosText[m] = 5;
            } else if (this.lotteryPosText[m]=='第六位') {this.lotteryPosText[m] = 6;
            }
          }
        }
        let single_second = {}
        if (this.keyFirst!=='总肖'
          &&this.keyFirst!=='7色波'
          &&this.keyFirst!=='正肖'
          &&this.keyFirst!=='平特一肖尾数'
          &&this.keyFirst!=='五行'
          &&this.keyFirst!=='正码1-6'
          &&this.keyFirst!=='正码特'
          &&this.keyFirst!=='正码'
          &&this.keyFirst!=='头尾数'
          &&this.keyFirst!=='特肖'
          &&this.keyFirst!=='色波'
          &&this.keyFirst!=='特码A'
          &&this.keyFirst!=='特码B'
          &&this.keyFirst!=='混合'
          &&this.keyFirst!=='波色'
          &&this.keyLast!=='特码') {
          let bet_amount =  (this.unit_price*this.bet_count*this.future_issues+this.bet_count*this.unit_price)*this.lotteryNum
          single_second = {
            lot_type_id: this.$route.params.typeid, // 彩票类型ID
            play_type_id:this.id,// 子 彩票玩法ID
            bet_numbers1: /胆拖/g.test(this.keyLast)||/胆拖/g.test(this.keyFirst)||this.keyLast=='普通投注'||(this.keyFirst=='二同号'&&this.keyLast=='单选')||(this.keyFirst=='任选四'&&(this.keyLast=='前四组选12'||this.keyLast=='后四组选12'))||(this.keyFirst==='任选四'&&(this.keyLast==='前四组选4'||this.keyLast==='后四组选4'))?this.activeArr[0]:this.keyLast=='通选'?[]:(this.keyFirst=='前一'&&this.keyLast=='直选复式')?[this.activeArr]:this.activeArr,// 彩票投注号码数组  按位投注二维[[1,2],[3,4]]  一般投注一维[1,2,3]
            bet_numbers2: /胆拖/g.test(this.keyLast)||/胆拖/g.test(this.keyFirst)||this.keyLast=='普通投注'||(this.keyFirst=='二同号'&&this.keyLast=='单选')||(this.keyFirst=='任选四'&&(this.keyLast=='前四组选12'||this.keyLast=='后四组选12'))||(this.keyFirst==='任选四'&&(this.keyLast==='前四组选4'||this.keyLast==='后四组选4'))?this.activeArr[1]:this.keyLast=='通选'?[]:this.lotteryPosCode, // 彩票投注号码数组[拖码数组或位置数组]
            bet_amount: this.cashFlag === '元'? bet_amount : this.cashFlag === '角'? bet_amount* 0.1 : bet_amount * 0.01,//投注金额
            bet_count: this.bet_count,//投注倍数
            bet_rate: (this.keyFirst=='合肖'||this.keyFirst=='自选不中')?this.lhc_rate:this.ratesVal,//投注赔率
            future_issues: this.future_issues,//追期数【范围0-50】
            unit_price: this.cashFlag === '元'? this.unit_price : this.cashFlag === '角'? this.unit_price* 0.1 : this.unit_price * 0.01,//单注彩票金额

            bet_type1: this.keyFirst,
            bet_type2: this.keyLast,
            retrun_li: this.retrun_li,
            lotteryNum: this.lotteryNum,
            lotteryPosText: this.keyLast=='通选'?[this.keyFirst+this.keyLast]:this.lotteryPosText,
            bet_numbers1Text:this.bet_numbers1Text
          }
        } else {
          let bet_amount =  (this.unit_price*this.bet_count*this.future_issues+this.bet_count*this.unit_price)*1
          single_second = this.Abets
          for (let i=0;i<this.Abets.length;i++){
            this.Abets[i].bet_amount = this.cashFlag === '元'? bet_amount : this.cashFlag === '角'? bet_amount* 0.1 : bet_amount * 0.01
            this.Abets[i].bet_count = this.bet_count
            this.Abets[i].future_issues = this.future_issues
            this.Abets[i].unit_price = this.cashFlag === '元'? this.unit_price : this.cashFlag === '角'? this.unit_price* 0.1 : this.unit_price * 0.01
          }
        }
        if (this.$route.params.pan==1) {
          this.$store.commit('BET',single_second)
          window.sessionStorage.setItem('bet',JSON.stringify(single_second))
        } else if (this.$route.params.pan==2) {
          let bet_amount =  (this.unit_price*this.bet_count*this.future_issues+this.bet_count*this.unit_price)*1
          for (let i=0;i<this.Bbets.length;i++){
            this.Bbets[i].bet_amount = this.cashFlag === '元'? bet_amount : this.cashFlag === '角'? bet_amount* 0.1 : bet_amount * 0.01
            this.Bbets[i].bet_count = this.bet_count
            this.Bbets[i].future_issues = this.future_issues
            this.Bbets[i].unit_price = this.cashFlag === '元'? this.unit_price : this.cashFlag === '角'? this.unit_price* 0.1 : this.unit_price * 0.01
            if (this.Bbets[i].bet_numbers2[0]==='第一球') {
              this.Bbets[i].bet_numbers2[0] = 1
            } else if (this.Bbets[i].bet_numbers2[0]==='第二球') {
              this.Bbets[i].bet_numbers2[0] = 2
            } else if (this.Bbets[i].bet_numbers2[0]==='第三球') {
              this.Bbets[i].bet_numbers2[0] = 3
            } else if (this.Bbets[i].bet_numbers2[0]==='第四球') {
              this.Bbets[i].bet_numbers2[0] = 4
            } else if (this.Bbets[i].bet_numbers2[0]==='第五球') {
              this.Bbets[i].bet_numbers2[0] = 5
            }
          }
          this.$store.commit('BET',this.Bbets)
          window.sessionStorage.setItem('bet',JSON.stringify(this.Bbets))
        }
        this.$store.commit('BETNUMMBER',this.lotteryRanges)
        this.$store.commit('BETCOUNT',this.arrLen)
        this.$store.commit('BETRATES',this.rates)
        this.$store.commit('LOTPLAYS',{keyFirst:this.keyFirst, keyLast: this.keyLast })

        window.sessionStorage.setItem('lotteryRanges',JSON.stringify(this.lotteryRanges))
        window.sessionStorage.setItem('arrLen',JSON.stringify(this.arrLen))
        window.sessionStorage.setItem('rates',JSON.stringify(this.rates))
        window.cashFlag = this.cashFlag

      },
      orderLottery() {
        if (!this.islogin) {
          this.$store.commit('updateLotCodeIDpan', {
            code: this.$route.params.code,
            typeid:this.$route.params.typeid,
            pan: this.$route.params.pan
          })
          this.$store.commit('LOGINFLAG','gameplay')
          this.$router.push('/login');
          return;
        }
        if (this.lotteryNum === 0) {
          if(this.activeArr.length!==0) {
            mt_toast('投注的号码不规范')
          } else {
            if(this.specialDial.length !==0) {
              mt_toast('投注的号码不规范')
            } else {
              mt_toast('还未投注')
            }
          }
        } else {
          this.singleLotter = true
        }

      },
      selNumber(k,num,bool, obj,rotate) { // 单一选号
        this.activeNum = num;
        obj.prams[k].active = !bool
        this.Bretate = rotate
        console.log(this.Bretate) // 已经乘以了
        if (this.keyLast ==='特码包三' ) {
          if (this.activeArr.length>0&&this.activeArr[0].length==3) {
            let v= this.activeArr[0][Math.floor(Math.random()*this.activeArr[0].length)]
            for (let i=0;i<obj.prams.length;i++) {
              if (v===obj.prams[i].val){
                obj.prams[i].active = false
              }
            }
          }
        }

        /* 11 选 5*/

        if ((this.keyFirst=='任选胆拖'&&this.keyLast ==='任选二中二')
          ||(this.keyFirst=='二码'&&(this.keyLast ==='前二组选胆拖' || this.keyLast ==='后二组选胆拖') ) ) {
          let arr1 = this.activeArr[0]
          let arr2 = this.activeArr[1]
          if (obj.type=='胆码'){
            if(arr1&&arr1.length>0){
              for (let i=0;i<obj.prams.length;i++) {
                if (arr1[0]===obj.prams[i].val&&num!=arr1[0]){
                  obj.prams[i].active = false
                }
              }
            }
          }

          for (let i=0;i<this.lotteryRanges.length;i++) {
            for (let m=0;m<this.lotteryRanges[i].prams.length;m++) {
              if(obj.type=='胆码'&&num==this.lotteryRanges[0].prams[m].val) {
                this.lotteryRanges[1].prams[m].active = false
                if (this.lotteryRanges[0].prams[m].active){
                  this.lotteryRanges[0].prams[m].active = false
                }else {
                  this.lotteryRanges[0].prams[m].active = true
                }
              }
              if(obj.type=='拖码'&&num==this.lotteryRanges[1].prams[m].val) {
                this.lotteryRanges[0].prams[m].active = false
              }
            }
          }
        }

        if(this.keyFirst == '两面盘' && this.keyLast === '龙虎和'&&obj.type=='选位') { // Bpan   this.specialDial
          let len = this.specialDial.length;
          for (let m=0;m<this.lotteryRanges[0].prams.length;m++) {
            if(len === 2 && num !== this.specialDial[0] && num !== this.specialDial[1]) {
              if(this.specialDial[1] === this.lotteryRanges[0].prams[m].val) {
                this.lotteryRanges[0].prams[m].active = false
              }
            }
          }
        }

        if ((this.keyFirst=='任选胆拖'&&this.keyLast ==='任选三中三')
          ||(this.keyFirst=='三码'
          &&(this.keyLast ==='前三组选胆拖'
          ||this.keyLast ==='中三组选胆拖'
          ||this.keyLast ==='后三组选胆拖'))
          ||(this.keyFirst=='三不同号'&&this.keyLast ==='胆拖') ) {
          let arr1 = this.activeArr[0]
          let arr2 = this.activeArr[1]
          if (obj.type=='胆码'){
            if(arr1&&arr1.length>0){
              for (let i=0;i<obj.prams.length;i++) {
                if (arr1.length===2&&num!=arr1[0]&&num!=arr1[1]){
                  if (arr1[1]===obj.prams[i].val){
                    obj.prams[i].active = false
                  }
                }
              }
            }
          }

          for (let i=0;i<this.lotteryRanges.length;i++) {
            for (let m=0;m<this.lotteryRanges[i].prams.length;m++) {
              if(obj.type=='胆码'&&num==this.lotteryRanges[0].prams[m].val) {
                this.lotteryRanges[1].prams[m].active = false
                if (this.lotteryRanges[0].prams[m].active){
                  this.lotteryRanges[0].prams[m].active = false
                }else {
                  this.lotteryRanges[0].prams[m].active = true
                }
              }
              if(obj.type=='拖码'&&num==this.lotteryRanges[1].prams[m].val) {
                this.lotteryRanges[0].prams[m].active = false
              }
            }

          }

        }

        if (this.keyFirst=='任选胆拖'&&this.keyLast ==='任选四中四' ) {
          let arr1 = this.activeArr[0]
          let arr2 = this.activeArr[1]
          if (obj.type=='胆码'){
            if(arr1&&arr1.length>0){
              for (let i=0;i<obj.prams.length;i++) {
                if (arr1.length===3&&num!=arr1[0]&&num!=arr1[1]&&num!=arr1[2]){
                  if (arr1[2]===obj.prams[i].val){
                    obj.prams[i].active = false
                  }
                }
              }
            }
          }

          for (let i=0;i<this.lotteryRanges.length;i++) {
            for (let m=0;m<this.lotteryRanges[i].prams.length;m++) {
              if(obj.type=='胆码'&&num==this.lotteryRanges[0].prams[m].val) {
                this.lotteryRanges[1].prams[m].active = false
                if (this.lotteryRanges[0].prams[m].active){
                  this.lotteryRanges[0].prams[m].active = false
                }else {
                  this.lotteryRanges[0].prams[m].active = true
                }
              }
              if(obj.type=='拖码'&&num==this.lotteryRanges[1].prams[m].val) {
                this.lotteryRanges[0].prams[m].active = false
              }
            }

          }

        }

        if (this.keyFirst=='任选胆拖'&&this.keyLast ==='任选五中五' ) {
          let arr1 = this.activeArr[0]
          let arr2 = this.activeArr[1]
          if (obj.type=='胆码'){
            if(arr1&&arr1.length>0){
              for (let i=0;i<obj.prams.length;i++) {
                if (arr1.length===4&&num!=arr1[0]&&num!=arr1[1]&&num!=arr1[2]&&num!=arr1[3]){
                  if (arr1[3]===obj.prams[i].val){
                    obj.prams[i].active = false
                  }
                }
              }
            }
          }

          for (let i=0;i<this.lotteryRanges.length;i++) {
            for (let m=0;m<this.lotteryRanges[i].prams.length;m++) {
              if(obj.type=='胆码'&&num==this.lotteryRanges[0].prams[m].val) {
                this.lotteryRanges[1].prams[m].active = false
                if (this.lotteryRanges[0].prams[m].active){
                  this.lotteryRanges[0].prams[m].active = false
                }else {
                  this.lotteryRanges[0].prams[m].active = true
                }
              }
              if(obj.type=='拖码'&&num==this.lotteryRanges[1].prams[m].val) {
                this.lotteryRanges[0].prams[m].active = false
              }
            }

          }

        }

        if (this.keyFirst=='任选胆拖'&&this.keyLast ==='任选六中五' ) {
          let arr1 = this.activeArr[0]
          let arr2 = this.activeArr[1]
          if (obj.type=='胆码'){
            if(arr1&&arr1.length>0){
              for (let i=0;i<obj.prams.length;i++) {
                if (arr1.length===5&&num!=arr1[0]&&num!=arr1[1]&&num!=arr1[2]&&num!=arr1[3]&&num!=arr1[4]){
                  if (arr1[4]===obj.prams[i].val){
                    obj.prams[i].active = false
                  }
                }
              }
            }
          }

          for (let i=0;i<this.lotteryRanges.length;i++) {
            for (let m=0;m<this.lotteryRanges[i].prams.length;m++) {
              if(obj.type=='胆码'&&num==this.lotteryRanges[0].prams[m].val) {
                this.lotteryRanges[1].prams[m].active = false
                if (this.lotteryRanges[0].prams[m].active){
                  this.lotteryRanges[0].prams[m].active = false
                }else {
                  this.lotteryRanges[0].prams[m].active = true
                }

              }
              if(obj.type=='拖码'&&num==this.lotteryRanges[1].prams[m].val) {
                this.lotteryRanges[0].prams[m].active = false
              }
            }

          }

        }

        if (this.keyFirst=='自选不中'&&this.keyLast ==='自选不中' ) {
          let arr1 = this.activeArr[0]
          if(arr1&&arr1.length>0){
            let rom = arr1[Math.floor(Math.random()*arr1.length)]
            for (let i=0;i<obj.prams.length;i++) {
              if (arr1.length===11){
                if (rom===obj.prams[i].val){
                  obj.prams[i].active = false
                }
              }
            }
          }
        }
        if (this.keyFirst==='连码'  ) {
          let arr1 = this.activeArr[0]
          if(arr1&&arr1.length>0){
            let rom = arr1[Math.floor(Math.random()*arr1.length)]
            for (let i=0;i<obj.prams.length;i++) {
              if (arr1.length===7){
                if (rom===obj.prams[i].val){
                  obj.prams[i].active = false
                }
              }
            }
          }
        }

        if (this.keyFirst=='任选胆拖'&&this.keyLast ==='任选七中五' ) {
          let arr1 = this.activeArr[0]
          let arr2 = this.activeArr[1]
          if (obj.type=='胆码'){
            if(arr1&&arr1.length>0){
              for (let i=0;i<obj.prams.length;i++) {
                if (arr1.length===6&&num!=arr1[0]&&num!=arr1[1]&&num!=arr1[2]&&num!=arr1[3]&&num!=arr1[4]&&num!=arr1[5]){
                  if (arr1[5]===obj.prams[i].val){
                    obj.prams[i].active = false
                  }
                }
              }
            }
          }

          for (let i=0;i<this.lotteryRanges.length;i++) {
            for (let m=0;m<this.lotteryRanges[i].prams.length;m++) {
              if(obj.type=='胆码'&&num==this.lotteryRanges[0].prams[m].val) {
                this.lotteryRanges[1].prams[m].active = false
                if (this.lotteryRanges[0].prams[m].active){
                  this.lotteryRanges[0].prams[m].active = false
                }else {
                  this.lotteryRanges[0].prams[m].active = true
                }

              }
              if(obj.type=='拖码'&&num==this.lotteryRanges[1].prams[m].val) {
                this.lotteryRanges[0].prams[m].active = false
              }
            }

          }

        }

        if (this.keyFirst=='任选胆拖'&&this.keyLast ==='任选八中五' ) {
          let arr1 = this.activeArr[0]
          let arr2 = this.activeArr[1]
          if (obj.type=='胆码'){
            if(arr1&&arr1.length>0){
              for (let i=0;i<obj.prams.length;i++) {
                if (arr1.length===7&&num!=arr1[0]&&num!=arr1[1]&&num!=arr1[2]&&num!=arr1[3]&&num!=arr1[4]&&num!=arr1[5]&&num!=arr1[6]){
                  if (arr1[6]===obj.prams[i].val){
                    obj.prams[i].active = false
                  }
                }
              }
            }
          }

          for (let i=0;i<this.lotteryRanges.length;i++) {
            for (let m=0;m<this.lotteryRanges[i].prams.length;m++) {
              if(obj.type=='胆码'&&num==this.lotteryRanges[0].prams[m].val) {
                this.lotteryRanges[1].prams[m].active = false
                if (this.lotteryRanges[0].prams[m].active){
                  this.lotteryRanges[0].prams[m].active = false
                }else {
                  this.lotteryRanges[0].prams[m].active = true
                }

              }
              if(obj.type=='拖码'&&num==this.lotteryRanges[1].prams[m].val) {
                this.lotteryRanges[0].prams[m].active = false
              }
            }

          }

        }

        if (this.keyFirst=='合肖'&&this.keyLast ==='合肖' ) {
          let arr1 = this.activeArr[0]
          if (arr1 && arr1.length > 0&&arr1.length==11) {
            let v= this.activeArr[0][Math.floor(Math.random()*this.activeArr[0].length)]
            for(let i=0,len=obj.prams.length;i<len;i++) {
              if (v === obj.prams[i].val&&!array_contain(arr1,num)) {
                obj.prams[i].active = false
              }
            }
          }
        }

        if (this.keyFirst=='连码'&&(this.keyLast ==='二全中'||this.keyLast ==='中特'||this.keyLast ==='特串' )) {
          let arr1 = this.activeArr[0]
          let v= this.activeArr[0][Math.floor(Math.random()*this.activeArr[0].length)]
          if (arr1 && arr1.length > 0&&arr1.length==7) {
            for(let i=0,len=obj.prams.length;i<len;i++) {console.log(num)
              if (v === obj.prams[i].val&&!array_contain(arr1,num)) {
                obj.prams[i].active = false
              }
            }
          }
        }


        if ((this.keyFirst=='二同号'&&this.keyLast ==='单选')) {// 快三
          let arr1 = this.activeArr[0]
          let arr2 = this.activeArr[1]
        //console.log(this.lotteryRanges[0].prams[0].val.substr(0,1))

          for (let i=0;i<this.lotteryRanges.length;i++) {
            for (let m=0;m<this.lotteryRanges[i].prams.length;m++) {
              if((obj.type=='同号')&&num.substr(0,1)==this.lotteryRanges[0].prams[m].val.substr(0,1)) {
                this.lotteryRanges[1].prams[m].active = false
                if (this.lotteryRanges[0].prams[m].active){
                  this.lotteryRanges[0].prams[m].active = false
                }else {
                  this.lotteryRanges[0].prams[m].active = true
                }

              }
              if((obj.type=='不同号')&&num.substr(0,1)==this.lotteryRanges[1].prams[m].val.substr(0,1)) {
                this.lotteryRanges[0].prams[m].active = false
              }
            }

          }
        }

        if ((this.keyFirst=='二不同号'&&this.keyLast ==='胆拖') ) {// 快三
          let arr1 = this.activeArr[0]
          let arr2 = this.activeArr[1]
          if (obj.type=='胆码'){
            if(arr1&&arr1.length>0){
              for (let i=0;i<obj.prams.length;i++) {
                if (arr1[0]===obj.prams[i].val&&num!=arr1[0]){
                  obj.prams[i].active = false
                }
              }
            }
          }

          for (let i=0;i<this.lotteryRanges.length;i++) {
            for (let m=0;m<this.lotteryRanges[i].prams.length;m++) {
              if((obj.type=='胆码')&&num==this.lotteryRanges[0].prams[m].val) {
                this.lotteryRanges[1].prams[m].active = false
                if (this.lotteryRanges[0].prams[m].active){
                  this.lotteryRanges[0].prams[m].active = false
                }else {
                  this.lotteryRanges[0].prams[m].active = true
                }

              }
              if((obj.type=='拖码')&&num==this.lotteryRanges[1].prams[m].val) {
                this.lotteryRanges[0].prams[m].active = false
              }
            }

          }
        }

      },
      delNumber() {// 清空选号
        if (!this.lotteryRanges) return
        for(let i=0,len=this.lotteryRanges.length;i<len;i++) {
          if(this.lotteryRanges[i].prams) {
            for(let k=0,len= this.lotteryRanges[i].prams.length;k<len;k++) {
              this.lotteryRanges[i].prams[k].active = false
            }
          }
        }
      },
      selRandow(e) { //随机选号
        if(!this.lotteryRanges) return;
        this.delNumber()
        this.$el.querySelector('.phone-shake').classList.add('shaked')
        setTimeout(() => {
          this.$el.querySelector('.phone-shake').classList.remove('shaked')
        },600)
        console.log(this.arrLen)
        // 判断选几个号
        switch (this.arrLen) {
          case 1:
            // 时时彩
            if (this.keyLast === '定位胆' || this.keyLast === '1-5球' || this.keyLast === '前中后') {

              /*if(this.$route.params.code==='BJPK10') {

               } else {*/
                this.lotteryRanges[Math.floor(Math.random()* ( this.lotteryRanges.length))].prams[Math.floor(Math.random()* ( this.lotteryRanges[0].prams.length))].active = true
             //}

            } else if (this.keyLast === '两面盘') {
              if (this.$route.params.code == 'BJPK10' || this.$route.params.code == 'SFPK10'||this.$route.params.code=='JSPK10'){
                let len = Math.floor(Math.random()* ( this.lotteryRanges.length))
                this.lotteryRanges[len].prams[Math.floor(Math.random()* ( 4))].active = true
              }
              else{ // 时时彩
                let len = Math.floor(Math.random()*(this.lotteryRanges.length))
                if (len===0) {
                  this.lotteryRanges[0].prams[Math.floor(Math.random()*(this.lotteryRanges[0].prams.length))].active = true
                } else {
                  this.lotteryRanges[len].prams[Math.floor(Math.random()*(this.lotteryRanges[1].prams.length))].active = true
                }
              }

            } else if (this.keyFirst=='1-10名'&&this.keyLast ==='1-10名') {
              let len = Math.floor(Math.random()*(this.lotteryRanges.length))
              this.lotteryRanges[len].prams[Math.floor(Math.random()*(this.lotteryRanges[0].prams.length))].active =true
            }
            else {
              this.lotteryRanges[0].prams[Math.floor(Math.random()*(this.lotteryRanges[0].prams.length))].active = true
            }
            break
          case 2:
            // 时时彩
            if (this.keyFirst =='任选二'&&this.keyLast ==='直选复式') {
              let newArr = getArrayItems(this.lotteryRanges,2)
              for (let a=0; a< this.lotteryRanges.length; a++) {
                if (
                  this.lotteryRanges[a] == newArr[0] || this.lotteryRanges[a] == newArr[1]) {
                  this.lotteryRanges[a].prams[Math.floor(Math.random()*9)].active = true
                }
              }
            //this.lotteryRanges[Math.floor(Math.random()*(this.lotteryRanges.length))].prams[Math.floor(Math.random()*(this.lotteryRanges[0].prams.length))].active = true
            //this.lotteryRanges[Math.floor(Math.random()*(this.lotteryRanges.length-1))].prams[Math.floor(Math.random()*(this.lotteryRanges[1].prams.length))].active = true
            } else if(this.keyFirst =='任选二'&&(this.keyLast === '前二组选复式'||this.keyLast === '后二组选复式')){
              for (let i=0,len=2; i < len; i++) {
                this.lotteryRanges[0].prams[Math.floor(Math.random()*(this.lotteryRanges[0].prams.length))].active = true
              }
            } else if(this.keyFirst== '任选二'&& this.keyLast === '五选二直选和值') {
              this.lotteryRanges[0].prams[Math.floor(Math.random()*(this.lotteryRanges[0].prams.length))].active = true
            } else if(( this.keyFirst =='任选三'&&(this.keyLast === '前三组三复式'||this.keyLast ==='后三组三复式'))
              || (this.keyFirst== '二码'&&(this.keyLast === '前二组选复式'|| this.keyLast ==='后二组选复式'))
              || (this.keyFirst== '任选复式'&&this.keyLast ==='任选二中二')
              || (this.keyFirst== '三星'&&(this.keyLast ==='组三复式'))
              || (this.keyFirst == '二星' &&(this.keyLast ==='前二组选' || this.keyLast === '后二组选'))
              || (this.keyFirst == '不定位' && (this.keyLast === '二码不定位' || this.keyLast === '一码不定位'))
              || (this.keyFirst == '二不同号' && (this.keyLast === '标准'))
              || (this.keyFirst == '合肖' && (this.keyLast === '合肖'))
              || (this.keyFirst == '连码' && (this.keyLast === '二全中' || this.keyLast === '中特' || this.keyLast === '特串'))
              || (this.keyFirst == '连肖连尾' && (this.keyLast === '二连肖' || this.keyLast === '二连尾'))) { // 1 选 2

              let newArr = getArrayItems(this.lotteryRanges[0].prams, 2)
              for (let a = 0; a < this.lotteryRanges[0].prams.length; a++) {
                if (this.lotteryRanges[0].prams[a] == newArr[0] || this.lotteryRanges[0].prams[a] == newArr[1]) {
                  this.lotteryRanges[0].prams[a].active = true
                }
              }
            } else if ((this.keyFirst == '任选胆拖' && this.keyLast === '任选二中二')
              || (this.keyFirst == '二码' && (this.keyLast === '前二组选胆拖' || this.keyLast === '后二组选胆拖') )
              || (this.keyFirst == '二码' && (this.keyLast === '前二直选复式' || this.keyLast === '后二直选复式'))
              || (this.keyFirst=='前二'&&(this.keyLast ==='直选复式'))) {
              /*number1*/
              let newArr = getArrayItems(this.lotteryRanges[0].prams, 1)
              for (let a = 0; a < this.lotteryRanges[0].prams.length; a++) {
                if (this.lotteryRanges[0].prams[a] == newArr[0]) {
                  this.lotteryRanges[0].prams[a].active = true
                }
              }
              /*number2与number1不能重合*/
              let res2 = []
              for (let a = 0; a < this.lotteryRanges[1].prams.length; a++) {
                if (this.lotteryRanges[1].prams[a].val !== newArr[0].val) {
                  res2.push(this.lotteryRanges[1].prams[a])
                }
              }
              let rom = Math.floor(Math.random() * (res2.length))
              for (let a = 0; a < this.lotteryRanges[1].prams.length; a++) {
                if (this.lotteryRanges[1].prams[a].val == res2[rom].val) {
                  this.lotteryRanges[1].prams[a].active = true
                }
              }

            } else if ((this.keyFirst == '二同号' && this.keyLast === '单选')
              || (this.keyFirst == '二不同号' && this.keyLast === '胆拖')) {
              /*number1*/
              let newArr = getArrayItems(this.lotteryRanges[0].prams, 1)
              for (let a = 0; a < this.lotteryRanges[0].prams.length; a++) {
                if (this.lotteryRanges[0].prams[a] == newArr[0]) {
                  this.lotteryRanges[0].prams[a].active = true
                }
              }
              /*number2与number1不能重合*/
              let res2 = []
              for (let a = 0; a < this.lotteryRanges[1].prams.length; a++) {
                if (this.lotteryRanges[1].prams[a].val !== newArr[0].val.substr(0, 1)) {
                  res2.push(this.lotteryRanges[1].prams[a])
                }
              }
              let rom = Math.floor(Math.random() * (res2.length))
              for (let a = 0; a < this.lotteryRanges[1].prams.length; a++) {
                if (this.lotteryRanges[1].prams[a].val == res2[rom].val.substr(0, 1)) {
                  this.lotteryRanges[1].prams[a].active = true
                }
              }

            }
            else if (this.keyFirst == '任选四' && (this.keyLast === '前四组选6' || this.keyLast === '后四组选6')) {
              let newArr = getArrayItems(this.lotteryRanges[0].prams, 2)
              for (let a = 0; a < this.lotteryRanges[0].prams.length; a++) {
                if (this.lotteryRanges[0].prams[a] == newArr[0] || this.lotteryRanges[0].prams[a] == newArr[1]) {
                  this.lotteryRanges[0].prams[a].active = true
                }
              }
            }
            else {
              this.lotteryRanges[0].prams[Math.floor(Math.random() * (this.lotteryRanges[0].prams.length))].active = true
              this.lotteryRanges[1].prams[Math.floor(Math.random() * (this.lotteryRanges[1].prams.length))].active = true
            }

            break
          case 3:
            if (this.keyLast === '前三组选六'
              || this.keyLast === '后三组选六'
              || this.keyLast === '前三组选复式'
              || this.keyLast === '中三组选复式'
              || this.keyLast === '后三组选复式'
              || (this.keyFirst == '任选复式' && this.keyLast === '任选三中三')
              || (this.keyFirst == '三星' && (this.keyLast === '组六复式'))
              || (this.keyFirst == '任选三' && (this.keyLast === '前三组六复式' || this.keyLast === '后三组六复式'))
              || (this.keyFirst == '三星' && (this.keyLast === '后三组选六' || this.keyLast === '前三组选六' ))
              || (this.keyFirst == '三不同号' && (this.keyLast === '标准' ))
              || (this.keyFirst == '特码' && (this.keyLast === '特码包三' ))
              || (this.keyFirst == '连码' && (this.keyLast === '中二' || this.keyLast === '三全中'))
              || (this.keyFirst == '连肖连尾' && (this.keyLast === '三连肖' || this.keyLast === '三连尾'))) { // 组三 组选 组六 1 选 3

              let newArr = getArrayItems(this.lotteryRanges[0].prams, 3)
              for (let a = 0; a < this.lotteryRanges[0].prams.length; a++) {
                if (this.lotteryRanges[0].prams[a] == newArr[0] || this.lotteryRanges[0].prams[a] == newArr[1] || this.lotteryRanges[0].prams[a] == newArr[2]) {
                  this.lotteryRanges[0].prams[a].active = true
                }
              }

            } else if (this.keyLast === '前三组选三复式'
              || this.keyLast === '后三组选三复式'
              || (this.keyFirst == '三星' && (this.keyLast === '后三组选三' || this.keyLast === '前三组选三' ))) { // 组三 1 选 2
              let newArr = getArrayItems(this.lotteryRanges[0].prams, 2)
              for (let a = 0; a < this.lotteryRanges[0].prams.length; a++) {
                if (this.lotteryRanges[0].prams[a] == newArr[0] || this.lotteryRanges[0].prams[a] == newArr[1]) {
                  this.lotteryRanges[0].prams[a].active = true
                }
              }
            } else if (this.keyFirst == '任选三' && this.keyLast === '直选复式') {
              if (this.$route.params.code === 'CQSSC'
                || this.$route.params.code === 'TJSSC'
                || this.$route.params.code === 'SFSSC'
                || this.$route.params.code === 'XJSSC'
                || this.$route.params.code === 'PL5'
                || this.$route.params.code === 'FFSSC') {
                let newArr = getArrayItems(this.lotteryRanges,3)
                for (let a=0; a< this.lotteryRanges.length; a++) {
                  if (
                    this.lotteryRanges[a] == newArr[0] || this.lotteryRanges[a] == newArr[1]|| this.lotteryRanges[a] == newArr[2]) {
                    this.lotteryRanges[a].prams[Math.floor(Math.random()*9)].active = true
                  }
                }
              } else {
                this.lotteryRanges[0].prams[Math.floor(Math.random()*(this.lotteryRanges[0].prams.length))].active = true
                this.lotteryRanges[1].prams[Math.floor(Math.random()*(this.lotteryRanges[1].prams.length))].active = true
                this.lotteryRanges[2].prams[Math.floor(Math.random()*(this.lotteryRanges[2].prams.length))].active = true
                this.lotteryRanges[3].prams[Math.floor(Math.random()*(this.lotteryRanges[3].prams.length))].active = true
                this.lotteryRanges[4].prams[Math.floor(Math.random()*(this.lotteryRanges[4].prams.length))].active = true
              }
            }
            else if (this.keyFirst == '任选三'&&this.keyLast ==='五选三直选和值'
              || (this.keyFirst == '任选三'&&(this.keyLast === '前四直选和值'||this.keyLast ==='后四直选和值'))) {
              this.lotteryRanges[0].prams[Math.floor(Math.random()*(this.lotteryRanges[0].prams.length))].active = true
            } else if((this.keyFirst== '任选胆拖' &&this.keyLast ==='任选三中三') ||(this.keyFirst=='三码'
              &&(this.keyLast ==='前三组选胆拖'
              || this.keyLast === '中三组选胆拖'
              || this.keyLast === '后三组选胆拖'))
              || (this.keyFirst == '三不同号' && this.keyLast === '胆拖')
              || (this.keyFirst == '两面盘' && this.keyLast === '龙虎和')) {
              /*number1*/
              let newArr = getArrayItems(this.lotteryRanges[0].prams, 2)
              for (let a = 0; a < this.lotteryRanges[0].prams.length; a++) {
                if (this.lotteryRanges[0].prams[a] == newArr[0]
                  || this.lotteryRanges[0].prams[a] == newArr[1]) {
                  this.lotteryRanges[0].prams[a].active = true
                }
              }
              /*number2与number1不能重合*/
              let res2 = []
              for (let a = 0; a < this.lotteryRanges[1].prams.length; a++) {
                if (this.lotteryRanges[1].prams[a].val !== newArr[0].val
                  && this.lotteryRanges[1].prams[a].val !== newArr[1].val) {
                  res2.push(this.lotteryRanges[1].prams[a])
                }
              }
              let rom = Math.floor(Math.random() * (res2.length))
              for (let a = 0; a < this.lotteryRanges[1].prams.length; a++) {
                if (this.lotteryRanges[1].prams[a].val == res2[rom].val) {
                  this.lotteryRanges[1].prams[a].active = true
                }
              }

            } else if ((this.keyFirst == '三码'
              && (this.keyLast === '前三直选复式' || this.keyLast === '中三直选复式' || this.keyLast === '后三直选复式'))
              || (this.keyFirst == '前三' && this.keyLast === '直选复式')) {
              let r1 = Math.floor(Math.random() * (this.lotteryRanges[0].prams.length))
              let a1 = this.lotteryRanges[0].prams[r1].val
              this.lotteryRanges[0].prams[r1].active = true

              /*number2与number1不能重合*/
              let res2 = []
              for (let a = 0; a < this.lotteryRanges[1].prams.length; a++) {
                if (this.lotteryRanges[1].prams[a].val !== a1) {
                  res2.push(this.lotteryRanges[1].prams[a])
                }
              }
              let rom = Math.floor(Math.random() * (res2.length))
              for (let a = 0; a < this.lotteryRanges[1].prams.length; a++) {
                if (this.lotteryRanges[1].prams[a].val == res2[rom].val) {
                  this.lotteryRanges[1].prams[a].active = true
                }
              }
              /*number3与number1,2不能重合*/
              let res3 = []
              for (let a = 0; a < this.lotteryRanges[2].prams.length; a++) {
                if (this.lotteryRanges[2].prams[a].val !== a1 && this.lotteryRanges[2].prams[a].val !== res2[rom].val) {
                  res3.push(this.lotteryRanges[2].prams[a])
                }
              }
              let rom1 = Math.floor(Math.random() * (res3.length))
              for (let a = 0; a < this.lotteryRanges[2].prams.length; a++) {
                if (this.lotteryRanges[2].prams[a].val == res3[rom1].val) {
                  this.lotteryRanges[2].prams[a].active = true
                }
              }
            }
            else {
              this.lotteryRanges[0].prams[Math.floor(Math.random() * (this.lotteryRanges[0].prams.length))].active = true
              this.lotteryRanges[1].prams[Math.floor(Math.random() * (this.lotteryRanges[1].prams.length))].active = true
              this.lotteryRanges[2].prams[Math.floor(Math.random() * (this.lotteryRanges[2].prams.length))].active = true
            }
            break
          case 4:
            if ((this.keyFirst == '任选复式' && this.keyLast === '任选四中四')
              || (this.keyFirst == '连码' && (this.keyLast === '四全中'))
              || (this.keyFirst == '连肖连尾' && (this.keyLast === '四连肖' || this.keyLast === '四连尾'))
              || (this.keyFirst === '任选四' && (this.keyLast === '前四组选24' || this.keyLast === '后四组选24'))) {
              let newArr = getArrayItems(this.lotteryRanges[0].prams, 4)
              for (let a = 0; a < this.lotteryRanges[0].prams.length; a++) {
                if (this.lotteryRanges[0].prams[a] == newArr[0]
                  || this.lotteryRanges[0].prams[a] == newArr[1]
                  || this.lotteryRanges[0].prams[a] == newArr[2]
                  || this.lotteryRanges[0].prams[a] == newArr[3]) {
                  this.lotteryRanges[0].prams[a].active = true
                }
              }
            } else if (this.keyFirst == '任选四' && this.keyLast === '直选复式') {
              let newArr = getArrayItems(this.lotteryRanges, 4)
              for (let a = 0; a < this.lotteryRanges.length; a++) {
                if (this.lotteryRanges[a] == newArr[0] || this.lotteryRanges[a] == newArr[1] || this.lotteryRanges[a] == newArr[2] || this.lotteryRanges[a] == newArr[3]) {
                  this.lotteryRanges[a].prams[Math.floor(Math.random() * 9)].active = true
                }
              }
            } else if (this.keyFirst == '任选胆拖' && this.keyLast === '任选四中四') {
              /*number1*/
              let newArr = getArrayItems(this.lotteryRanges[0].prams, 3)
              for (let a = 0; a < this.lotteryRanges[0].prams.length; a++) {
                if (this.lotteryRanges[0].prams[a] == newArr[0]
                  || this.lotteryRanges[0].prams[a] == newArr[1]
                  || this.lotteryRanges[0].prams[a] == newArr[2]) {
                  this.lotteryRanges[0].prams[a].active = true
                }
              }
              /*number2与number1不能重合*/
              let res2 = []
              for (let a = 0; a < this.lotteryRanges[1].prams.length; a++) {
                if (this.lotteryRanges[1].prams[a].val !== newArr[0].val
                  && this.lotteryRanges[1].prams[a].val !== newArr[1].val
                  && this.lotteryRanges[1].prams[a].val !== newArr[2].val) {
                  res2.push(this.lotteryRanges[1].prams[a])
                }
              }
              let rom = Math.floor(Math.random() * (res2.length))
              for (let a = 0; a < this.lotteryRanges[1].prams.length; a++) {
                if (this.lotteryRanges[1].prams[a].val == res2[rom].val) {
                  this.lotteryRanges[1].prams[a].active = true
                }
              }

            } else if (this.keyFirst === '任选四' && (this.keyLast === '前四组选12' || this.keyLast === '后四组选12')) {
              this.lotteryRanges[0].prams[Math.floor(Math.random() * (this.lotteryRanges[0].prams.length))].active = true
              let newArr = getArrayItems(this.lotteryRanges[1].prams, 2)
              for (let a = 0; a < this.lotteryRanges[1].prams.length; a++) {
                if (this.lotteryRanges[1].prams[a] == newArr[0]
                  || this.lotteryRanges[1].prams[a] == newArr[1]) {
                  this.lotteryRanges[1].prams[a].active = true
                }
              }
            }
            else if (this.keyFirst === '任选四' && (this.keyLast === '前四组选4' || this.keyLast === '后四组选4')) {
              this.lotteryRanges[0].prams[Math.floor(Math.random() * (this.lotteryRanges[0].prams.length))].active = true
              this.lotteryRanges[1].prams[Math.floor(Math.random() * (this.lotteryRanges[1].prams.length))].active = true
            }
            else {
              this.lotteryRanges[0].prams[Math.floor(Math.random() * (this.lotteryRanges[0].prams.length))].active = true
              this.lotteryRanges[1].prams[Math.floor(Math.random() * (this.lotteryRanges[1].prams.length))].active = true
              this.lotteryRanges[2].prams[Math.floor(Math.random() * (this.lotteryRanges[2].prams.length))].active = true
              this.lotteryRanges[3].prams[Math.floor(Math.random() * (this.lotteryRanges[3].prams.length))].active = true
            }

            break
          case 5:
            if ((this.keyFirst == '任选复式' && this.keyLast === '任选五中五')
              || (this.keyFirst == '连肖连尾' && (this.keyLast === '五连肖' || this.keyLast === '五连尾'))) {
              let newArr = getArrayItems(this.lotteryRanges[0].prams, 5)
              for (let a = 0; a < this.lotteryRanges[0].prams.length; a++) {
                if (this.lotteryRanges[0].prams[a] == newArr[0]
                  || this.lotteryRanges[0].prams[a] == newArr[1]
                  || this.lotteryRanges[0].prams[a] == newArr[2]
                  || this.lotteryRanges[0].prams[a] == newArr[3]
                  || this.lotteryRanges[0].prams[a] == newArr[4]) {
                  this.lotteryRanges[0].prams[a].active = true
                }
              }
            } else if (this.keyFirst == '任选胆拖' && this.keyLast === '任选五中五') {
              /*number1*/
              let newArr = getArrayItems(this.lotteryRanges[0].prams, 4)
              for (let a = 0; a < this.lotteryRanges[0].prams.length; a++) {
                if (this.lotteryRanges[0].prams[a] == newArr[0]
                  || this.lotteryRanges[0].prams[a] == newArr[1]
                  || this.lotteryRanges[0].prams[a] == newArr[2]
                  || this.lotteryRanges[0].prams[a] == newArr[3]) {
                  this.lotteryRanges[0].prams[a].active = true
                }
              }
              /*number2与number1不能重合*/
              let res2 = []
              for (let a = 0; a < this.lotteryRanges[1].prams.length; a++) {
                if (this.lotteryRanges[1].prams[a].val !== newArr[0].val
                  && this.lotteryRanges[1].prams[a].val !== newArr[1].val
                  && this.lotteryRanges[1].prams[a].val !== newArr[2].val
                  && this.lotteryRanges[1].prams[a].val !== newArr[3].val) {
                  res2.push(this.lotteryRanges[1].prams[a])
                }
              }
              let rom = Math.floor(Math.random() * (res2.length))
              for (let a = 0; a < this.lotteryRanges[1].prams.length; a++) {
                if (this.lotteryRanges[1].prams[a].val == res2[rom].val) {
                  this.lotteryRanges[1].prams[a].active = true
                }
              }

            } else {
              this.lotteryRanges[0].prams[Math.floor(Math.random() * (this.lotteryRanges[0].prams.length))].active = true
              this.lotteryRanges[1].prams[Math.floor(Math.random() * (this.lotteryRanges[1].prams.length))].active = true
              this.lotteryRanges[2].prams[Math.floor(Math.random() * (this.lotteryRanges[2].prams.length))].active = true
              this.lotteryRanges[3].prams[Math.floor(Math.random() * (this.lotteryRanges[3].prams.length))].active = true
              this.lotteryRanges[4].prams[Math.floor(Math.random() * (this.lotteryRanges[4].prams.length))].active = true
            }

            break
          case 6:
            if ((this.keyFirst == '任选复式' && this.keyLast === '任选六中五')
              || this.keyLast === '自选不中') {
              let newArr = getArrayItems(this.lotteryRanges[0].prams, 6)
              for (let a = 0; a < this.lotteryRanges[0].prams.length; a++) {
                if (this.lotteryRanges[0].prams[a] == newArr[0]
                  || this.lotteryRanges[0].prams[a] == newArr[1]
                  || this.lotteryRanges[0].prams[a] == newArr[2]
                  || this.lotteryRanges[0].prams[a] == newArr[3]
                  || this.lotteryRanges[0].prams[a] == newArr[4]
                  || this.lotteryRanges[0].prams[a] == newArr[5]) {
                  this.lotteryRanges[0].prams[a].active = true
                }
              }
            } else if (this.keyFirst == '任选胆拖' && this.keyLast === '任选六中五') {
              /*number1*/
              let newArr = getArrayItems(this.lotteryRanges[0].prams, 5)
              for (let a = 0; a < this.lotteryRanges[0].prams.length; a++) {
                if (this.lotteryRanges[0].prams[a] == newArr[0]
                  || this.lotteryRanges[0].prams[a] == newArr[1]
                  || this.lotteryRanges[0].prams[a] == newArr[2]
                  || this.lotteryRanges[0].prams[a] == newArr[3]
                  || this.lotteryRanges[0].prams[a] == newArr[4]) {
                  this.lotteryRanges[0].prams[a].active = true
                }
              }
              /*number2与number1不能重合*/
              let res2 = []
              for (let a = 0; a < this.lotteryRanges[1].prams.length; a++) {
                if (this.lotteryRanges[1].prams[a].val !== newArr[0].val
                  && this.lotteryRanges[1].prams[a].val !== newArr[1].val
                  && this.lotteryRanges[1].prams[a].val !== newArr[2].val
                  && this.lotteryRanges[1].prams[a].val !== newArr[3].val
                  && this.lotteryRanges[1].prams[a].val !== newArr[4].val) {
                  res2.push(this.lotteryRanges[1].prams[a])
                }
              }
              let rom = Math.floor(Math.random() * (res2.length))
              for (let a = 0; a < this.lotteryRanges[1].prams.length; a++) {
                if (this.lotteryRanges[1].prams[a].val == res2[rom].val) {
                  this.lotteryRanges[1].prams[a].active = true
                }
              }

            }
            else {
              this.lotteryRanges[0].prams[Math.floor(Math.random() * (this.lotteryRanges[0].prams.length))].active = true
              this.lotteryRanges[1].prams[Math.floor(Math.random() * (this.lotteryRanges[1].prams.length))].active = true
              this.lotteryRanges[2].prams[Math.floor(Math.random() * (this.lotteryRanges[2].prams.length))].active = true
              this.lotteryRanges[3].prams[Math.floor(Math.random() * (this.lotteryRanges[3].prams.length))].active = true
              this.lotteryRanges[4].prams[Math.floor(Math.random() * (this.lotteryRanges[4].prams.length))].active = true
              this.lotteryRanges[5].prams[Math.floor(Math.random() * (this.lotteryRanges[5].prams.length))].active = true
            }

            break
          case 7:
            if ((this.keyFirst == '任选复式' && this.keyLast === '任选七中五')) {
              let newArr = getArrayItems(this.lotteryRanges[0].prams, 7)
              for (let a = 0; a < this.lotteryRanges[0].prams.length; a++) {
                if (this.lotteryRanges[0].prams[a] == newArr[0]
                  || this.lotteryRanges[0].prams[a] == newArr[1]
                  || this.lotteryRanges[0].prams[a] == newArr[2]
                  || this.lotteryRanges[0].prams[a] == newArr[3]
                  || this.lotteryRanges[0].prams[a] == newArr[4]
                  || this.lotteryRanges[0].prams[a] == newArr[5]
                  || this.lotteryRanges[0].prams[a] == newArr[6]) {
                  this.lotteryRanges[0].prams[a].active = true
                }
              }
            } else if (this.keyFirst == '任选胆拖' && this.keyLast === '任选七中五') {
              /*number1*/
              let newArr = getArrayItems(this.lotteryRanges[0].prams, 6)
              for (let a = 0; a < this.lotteryRanges[0].prams.length; a++) {
                if (this.lotteryRanges[0].prams[a] == newArr[0]
                  || this.lotteryRanges[0].prams[a] == newArr[1]
                  || this.lotteryRanges[0].prams[a] == newArr[2]
                  || this.lotteryRanges[0].prams[a] == newArr[3]
                  || this.lotteryRanges[0].prams[a] == newArr[4]
                  || this.lotteryRanges[0].prams[a] == newArr[5]) {
                  this.lotteryRanges[0].prams[a].active = true
                }
              }
              /*number2与number1不能重合*/
              let res2 = []
              for (let a = 0; a < this.lotteryRanges[1].prams.length; a++) {
                if (this.lotteryRanges[1].prams[a].val !== newArr[0].val
                  && this.lotteryRanges[1].prams[a].val !== newArr[1].val
                  && this.lotteryRanges[1].prams[a].val !== newArr[2].val
                  && this.lotteryRanges[1].prams[a].val !== newArr[3].val
                  && this.lotteryRanges[1].prams[a].val !== newArr[4].val
                  && this.lotteryRanges[1].prams[a].val !== newArr[5].val) {
                  res2.push(this.lotteryRanges[1].prams[a])
                }
              }
              let rom = Math.floor(Math.random() * (res2.length))
              for (let a = 0; a < this.lotteryRanges[1].prams.length; a++) {
                if (this.lotteryRanges[1].prams[a].val == res2[rom].val) {
                  this.lotteryRanges[1].prams[a].active = true
                }
              }

            } else if (this.keyLast === '普通投注') {
              if (this.$route.params.code == 'SSQ') {
                let newArr = getArrayItems(this.lotteryRanges[0].prams, 6)
                for (let a = 0; a < this.lotteryRanges[0].prams.length; a++) {
                  if (this.lotteryRanges[0].prams[a] == newArr[0]
                    || this.lotteryRanges[0].prams[a] == newArr[1]
                    || this.lotteryRanges[0].prams[a] == newArr[2]
                    || this.lotteryRanges[0].prams[a] == newArr[3]
                    || this.lotteryRanges[0].prams[a] == newArr[4]
                    || this.lotteryRanges[0].prams[a] == newArr[5]) {
                    this.lotteryRanges[0].prams[a].active = true
                  }
                }
                this.lotteryRanges[1].prams[Math.floor(Math.random() * (this.lotteryRanges[1].prams.length))].active = true
              }
              else if (this.$route.params.code == 'DLT') {
                let newArr = getArrayItems(this.lotteryRanges[0].prams, 5)
                for (let a = 0; a < this.lotteryRanges[0].prams.length; a++) {
                  if (this.lotteryRanges[0].prams[a] == newArr[0]
                    || this.lotteryRanges[0].prams[a] == newArr[1]
                    || this.lotteryRanges[0].prams[a] == newArr[2]
                    || this.lotteryRanges[0].prams[a] == newArr[3]
                    || this.lotteryRanges[0].prams[a] == newArr[4]) {
                    this.lotteryRanges[0].prams[a].active = true
                  }
                }

                let newArr1 = getArrayItems(this.lotteryRanges[1].prams, 2)
                for (let a = 0; a < this.lotteryRanges[1].prams.length; a++) {
                  if (this.lotteryRanges[1].prams[a] == newArr1[0]
                    || this.lotteryRanges[1].prams[a] == newArr1[1]) {
                    this.lotteryRanges[1].prams[a].active = true
                  }
                }
              }

            }
            else {
              this.lotteryRanges[0].prams[Math.floor(Math.random() * (this.lotteryRanges[0].prams.length))].active = true
              this.lotteryRanges[1].prams[Math.floor(Math.random() * (this.lotteryRanges[1].prams.length))].active = true
              this.lotteryRanges[2].prams[Math.floor(Math.random() * (this.lotteryRanges[2].prams.length))].active = true
              this.lotteryRanges[3].prams[Math.floor(Math.random() * (this.lotteryRanges[3].prams.length))].active = true
              this.lotteryRanges[4].prams[Math.floor(Math.random() * (this.lotteryRanges[4].prams.length))].active = true
              this.lotteryRanges[5].prams[Math.floor(Math.random() * (this.lotteryRanges[5].prams.length))].active = true
              this.lotteryRanges[6].prams[Math.floor(Math.random() * (this.lotteryRanges[6].prams.length))].active = true
            }

            break
          case 8:
            if ((this.keyFirst == '任选复式' && this.keyLast === '任选八中五')) {
              let newArr = getArrayItems(this.lotteryRanges[0].prams, 8)
              for (let a = 0; a < this.lotteryRanges[0].prams.length; a++) {
                if (this.lotteryRanges[0].prams[a] == newArr[0]
                  || this.lotteryRanges[0].prams[a] == newArr[1]
                  || this.lotteryRanges[0].prams[a] == newArr[2]
                  || this.lotteryRanges[0].prams[a] == newArr[3]
                  || this.lotteryRanges[0].prams[a] == newArr[4]
                  || this.lotteryRanges[0].prams[a] == newArr[5]
                  || this.lotteryRanges[0].prams[a] == newArr[6]
                  || this.lotteryRanges[0].prams[a] == newArr[7]) {
                  this.lotteryRanges[0].prams[a].active = true
                }
              }
            } else if (this.keyFirst == '任选胆拖' && this.keyLast === '任选八中五') {
              /*number1*/
              let newArr = getArrayItems(this.lotteryRanges[0].prams, 7)
              for (let a = 0; a < this.lotteryRanges[0].prams.length; a++) {
                if (this.lotteryRanges[0].prams[a] == newArr[0]
                  || this.lotteryRanges[0].prams[a] == newArr[1]
                  || this.lotteryRanges[0].prams[a] == newArr[2]
                  || this.lotteryRanges[0].prams[a] == newArr[3]
                  || this.lotteryRanges[0].prams[a] == newArr[4]
                  || this.lotteryRanges[0].prams[a] == newArr[5]
                  || this.lotteryRanges[0].prams[a] == newArr[6]) {
                  this.lotteryRanges[0].prams[a].active = true
                }
              }
              /*number2与number1不能重合*/
              let res2 = []
              for (let a = 0; a < this.lotteryRanges[1].prams.length; a++) {
                if (this.lotteryRanges[1].prams[a].val !== newArr[0].val
                  && this.lotteryRanges[1].prams[a].val !== newArr[1].val
                  && this.lotteryRanges[1].prams[a].val !== newArr[2].val
                  && this.lotteryRanges[1].prams[a].val !== newArr[3].val
                  && this.lotteryRanges[1].prams[a].val !== newArr[4].val
                  && this.lotteryRanges[1].prams[a].val !== newArr[5].val
                  && this.lotteryRanges[1].prams[a].val !== newArr[6].val) {
                  res2.push(this.lotteryRanges[1].prams[a])
                }
              }
              let rom = Math.floor(Math.random() * (res2.length))
              for (let a = 0; a < this.lotteryRanges[1].prams.length; a++) {
                if (this.lotteryRanges[1].prams[a].val == res2[rom].val) {
                  this.lotteryRanges[1].prams[a].active = true
                }
              }

            } else {
              this.lotteryRanges[0].prams[Math.floor(Math.random() * (this.lotteryRanges[0].prams.length))].active = true
              this.lotteryRanges[1].prams[Math.floor(Math.random() * (this.lotteryRanges[1].prams.length))].active = true
              this.lotteryRanges[2].prams[Math.floor(Math.random() * (this.lotteryRanges[2].prams.length))].active = true
              this.lotteryRanges[3].prams[Math.floor(Math.random() * (this.lotteryRanges[3].prams.length))].active = true
              this.lotteryRanges[4].prams[Math.floor(Math.random() * (this.lotteryRanges[4].prams.length))].active = true
              this.lotteryRanges[5].prams[Math.floor(Math.random() * (this.lotteryRanges[5].prams.length))].active = true
              this.lotteryRanges[6].prams[Math.floor(Math.random() * (this.lotteryRanges[6].prams.length))].active = true
              this.lotteryRanges[7].prams[Math.floor(Math.random() * (this.lotteryRanges[7].prams.length))].active = true
            }

            break
          case 9:
            this.lotteryRanges[0].prams[Math.floor(Math.random() * (this.lotteryRanges[0].prams.length))].active = true
            this.lotteryRanges[1].prams[Math.floor(Math.random() * (this.lotteryRanges[1].prams.length))].active = true
            this.lotteryRanges[2].prams[Math.floor(Math.random() * (this.lotteryRanges[2].prams.length))].active = true
            this.lotteryRanges[3].prams[Math.floor(Math.random() * (this.lotteryRanges[3].prams.length))].active = true
            this.lotteryRanges[4].prams[Math.floor(Math.random() * (this.lotteryRanges[4].prams.length))].active = true
            this.lotteryRanges[5].prams[Math.floor(Math.random() * (this.lotteryRanges[5].prams.length))].active = true
            this.lotteryRanges[6].prams[Math.floor(Math.random() * (this.lotteryRanges[6].prams.length))].active = true
            this.lotteryRanges[7].prams[Math.floor(Math.random() * (this.lotteryRanges[7].prams.length))].active = true
            this.lotteryRanges[8].prams[Math.floor(Math.random() * (this.lotteryRanges[8].prams.length))].active = true
            break
          default:
            this.lotteryRanges[0].prams[Math.floor(Math.random() * (this.lotteryRanges[0].prams.length))].active = true
            this.lotteryRanges[1].prams[Math.floor(Math.random() * (this.lotteryRanges[1].prams.length))].active = true
            this.lotteryRanges[2].prams[Math.floor(Math.random() * (this.lotteryRanges[2].prams.length))].active = true
            this.lotteryRanges[3].prams[Math.floor(Math.random() * (this.lotteryRanges[3].prams.length))].active = true
            this.lotteryRanges[4].prams[Math.floor(Math.random() * (this.lotteryRanges[4].prams.length))].active = true
            this.lotteryRanges[5].prams[Math.floor(Math.random() * (this.lotteryRanges[5].prams.length))].active = true
            this.lotteryRanges[6].prams[Math.floor(Math.random() * (this.lotteryRanges[6].prams.length))].active = true
            this.lotteryRanges[7].prams[Math.floor(Math.random() * (this.lotteryRanges[7].prams.length))].active = true
            this.lotteryRanges[8].prams[Math.floor(Math.random() * (this.lotteryRanges[8].prams.length))].active = true
            this.lotteryRanges[9].prams[Math.floor(Math.random() * (this.lotteryRanges[9].prams.length))].active = true
            break
        }
      },
    //   else选择大小单双
      select_number(arr,str,index,type){
        if((arr.length <= 1 && str != '全') || type == '胆码' || type == '特码包三' || ( type.indexOf('全中')!= -1 || (type.indexOf('中二')!= -1 &&  type != '二中二') || type.indexOf('中特')!= -1 || type.indexOf('特串')!= -1)){return;}

        for(let i = 0; i < arr.length; i++){
          arr[i].active =  false;
        }
        console.log(arr,str,index,type);
        // 排除快三同号和不同号
        if( str =='全' && type != '同号' && type != '不同号' && type != '拖码'){
          for(let i=0; i < arr.length; i++){
              arr[i].active = true;
          }
        }

        if(str =='大' && type != '同号' && type != '不同号' && type != '拖码'){
          for(let i=0; i < arr.length; i++){
            if(i >= Math.floor(arr.length/2) && arr[0].name != '大'){
                arr[i].active = true;
            }
            if(arr[0].name == '大'){
                arr[index-1].active = true;
            }
          }
        }

        if(str =='小' && type != '同号' && type != '不同号' && type != '拖码'){
          for(let i=0; i < arr.length; i++){
            if(i < Math.floor(arr.length/2) && arr[1].name != '小'){
                arr[i].active = true;
            }

            if(arr[1].name == '小'){
                arr[index-1].active = true;
            }
          }
        }
        if( str =='单' && type != '同号' && type != '不同号' && type != '拖码'){
          for(let i=0; i < arr.length; i++){
            //   数组第一项值为0时
            if(i % 2 != 0 && arr[2].name != '单' && arr[0].name == 0 ){
                arr[i].active = true;
            }
            //   数组第一项值为1时
            if( i % 2 != 0 && arr[2].name != '单' && arr[0].name != 0 ){
                arr[i-1].active = true;
                // 数组最后一项为偶数时
                if(arr.length % 2 != 0){
                  arr[arr.length-1].active = true;
                }
            }


            if(arr[2].name == '单'){
                arr[index-1].active = true;
            }
          }
        }
        if(str =='双'  && type != '同号' && type != '不同号' && type != '拖码'){
          for(let i=0; i < arr.length; i++){
            //   数组第一项值为0时
            if(i % 2 == 0 && arr[3].name != '双' && arr[0].name == 0 ){
                arr[i].active = true;
            }
            //   数组第一项值为1时
            if(i % 2 == 0 && arr[3].name != '双' && arr[0].name != 0 ){
                if(i != arr.length-1){
                    arr[i+1].active = true;
                }
                // 数组最后一项为偶数时
                if(arr.length % 2 != 0){
                    arr[arr.length-2].active = true;
                }

            }
            if(arr[3].name == '双'){
                arr[index-1].active = true;
            }
          }
        }

        // 当点快三同号时
        if(str == '全' && type == '同号'){
            this.tong_arr = arr;
            for(let i = 0; i < this.tong_arr.length; i++){

                if( this.bu_tong_arr[i] && this.bu_tong_arr[i].active == true ){
                    this.tong_arr[i].active = this.bu_tong_arr[i].active;
                    this.bu_tong_arr[i].active = !this.tong_arr[i].active;
                }else{
                    this.tong_arr[i].active = true;
                }
            }
        }
        if(str == '全' && type == '不同号'){
            this.bu_tong_arr = arr;
            for(let i = 0; i < this.bu_tong_arr.length; i++){
                if( this.tong_arr[i] && this.tong_arr[i].active == true ){
                    this.bu_tong_arr[i].active = this.tong_arr[i].active;
                    this.tong_arr[i].active = !this.bu_tong_arr[i].active;
                }else{
                    this.bu_tong_arr[i].active = true;
                }
            }
        }

        if(str =='大' && type == '同号'){
            this.tong_arr = arr;
          for(let i=0; i < this.tong_arr.length; i++){
            if(i >= Math.floor(this.tong_arr.length/2) ){
                this.tong_arr[i].active = true;
                if(this.bu_tong_arr[i]){
                  this.bu_tong_arr[i].active = !this.tong_arr[i].active;
                }
            }

          }
        }
        if(str =='大' && type == '不同号'){
            this.bu_tong_arr = arr;
          for(let i=0; i < this.bu_tong_arr.length; i++){
            if(i >= Math.floor(this.bu_tong_arr.length/2) ){
                this.bu_tong_arr[i].active = true;
                if(this.tong_arr[i]){
                  this.tong_arr[i].active = !this.bu_tong_arr[i].active;
                }
           }

          }
        }


        if(str =='小' && type == '同号'){
            this.tong_arr = arr;
          for(let i=0; i < this.tong_arr.length; i++){
            if(i < Math.floor(this.tong_arr.length/2) ){
                this.tong_arr[i].active = true;
                if(this.bu_tong_arr[i]){
                   this.bu_tong_arr[i].active = !this.tong_arr[i].active;
                }
            }

          }
        }

        if(str =='小' && type == '不同号'){
            this.bu_tong_arr = arr;
          for(let i=0; i < this.bu_tong_arr.length; i++){
            if(i < Math.floor(this.bu_tong_arr.length/2) ){
                this.bu_tong_arr[i].active = true;
                if(this.tong_arr[i]){
                   this.tong_arr[i].active = !this.bu_tong_arr[i].active;
                }
            }

          }
        }

        if(str == '单' && type == '同号'){
            this.tong_arr = arr;
            for(let i =0 ; i < this.tong_arr.length; i++){
                if(Number(this.tong_arr[i].name) % 2 != 0){
                    this.tong_arr[i].active = true;
                    if(this.bu_tong_arr[i]){
                        this.bu_tong_arr[i].active = !this.tong_arr[i].active;
                    }
                }
            }
        }

        if(str == '单' && type == '不同号'){
            this.bu_tong_arr = arr;
            for(let i =0 ; i < this.bu_tong_arr.length; i++){
                if(Number(this.bu_tong_arr[i].name) % 2 != 0){
                    this.bu_tong_arr[i].active = true;
                    if(this.tong_arr[i]){
                       this.tong_arr[i].active = !this.bu_tong_arr[i].active;
                    }
                }
            }
        }
        if(str == '双' && type == '同号'){
            this.tong_arr = arr;
            for(let i =0 ; i < this.tong_arr.length; i++){
                if(Number(this.tong_arr[i].name) % 2 == 0){
                    this.tong_arr[i].active = true;
                    if(this.bu_tong_arr[i]){
                        this.bu_tong_arr[i].active = !this.tong_arr[i].active;
                    }
                }
            }
        }

        if(str == '双' && type == '不同号'){
            this.bu_tong_arr = arr;
            for(let i =0 ; i < this.bu_tong_arr.length; i++){
                if(Number(this.bu_tong_arr[i].name) % 2 == 0){
                    this.bu_tong_arr[i].active = true;
                    if(this.tong_arr[i]){
                       this.tong_arr[i].active = !this.bu_tong_arr[i].active;
                    }
                }
            }
        }

        // 点胆拖时

        if(str == '全' && type == '拖码'){
            this.dan_ma_arr = this.lotteryRanges[0].prams;
            this.tuo_ma_arr = this.lotteryRanges[1].prams;
            for(var i = 0; i < this.tuo_ma_arr.length; i++){
                this.tuo_ma_arr[i].active = true;
                this.dan_ma_arr[i].active = !this.tuo_ma_arr[i].active;
            }
        }

        if(str == '大' && type == '拖码'){
            this.dan_ma_arr = this.lotteryRanges[0].prams;
            this.tuo_ma_arr = this.lotteryRanges[1].prams;
            for(var i = 0; i < this.tuo_ma_arr.length; i++){
                 if(i >= Math.floor(this.tuo_ma_arr.length/2) ){
                     this.tuo_ma_arr[i].active = true;
                     this.dan_ma_arr[i].active = !this.tuo_ma_arr[i].active;
                 }
            }
        }
        if(str == '小' && type == '拖码'){
            this.dan_ma_arr = this.lotteryRanges[0].prams;
            this.tuo_ma_arr = this.lotteryRanges[1].prams;
            for(var i = 0; i < this.tuo_ma_arr.length; i++){
                 if(i < Math.floor(this.tuo_ma_arr.length/2) ){
                     this.tuo_ma_arr[i].active = true;
                     this.dan_ma_arr[i].active = !this.tuo_ma_arr[i].active;
                 }
            }
        }
        if(str == '单' && type == '拖码'){
            this.dan_ma_arr = this.lotteryRanges[0].prams;
            this.tuo_ma_arr = this.lotteryRanges[1].prams;
            for(var i = 0; i < this.tuo_ma_arr.length; i++){
                 if( Number(this.tuo_ma_arr[i].name) %2 != 0 ){
                     this.tuo_ma_arr[i].active = true;
                     this.dan_ma_arr[i].active = !this.tuo_ma_arr[i].active;
                 }
            }
        }
        if(str == '双' && type == '拖码'){
            this.dan_ma_arr = this.lotteryRanges[0].prams;
            this.tuo_ma_arr = this.lotteryRanges[1].prams;
            for(var i = 0; i < this.tuo_ma_arr.length; i++){
                 if( Number(this.tuo_ma_arr[i].name) %2 == 0 ){
                     this.tuo_ma_arr[i].active = true;
                     this.dan_ma_arr[i].active = !this.tuo_ma_arr[i].active;
                 }
            }
        }
      },
      clear_number(arr){
        for(let i = 0; i < arr.length; i++){
            arr[i].active =  false;
        }
      },
    //   else if 选择大小单双
      lhc_select_number(arr,str,index,type){
          if(type == '色波' && str != '全' && arr.length <= 3){return}
          if(type == '特肖' && str != '全'){ return }
          if(type == '合肖'){ return }
          if(type == '五行' && str != '全'){ return }
          if(type == '平特一肖' && str != '全'){ return }
          if(type == '正肖' && str != '全'){ return }
          if(type == '七色波' && str != '全'){ return }
          if(type.indexOf('连肖') != -1 && str != '全'){ return }
          for(let i = 0; i < arr.length; i++){
            arr[i].active =  false;
          }
          console.log(arr,str,index,type);
          if(str == '全'){
              for(let i = 0; i < arr.length; i++){
                  arr[i].active = true;
              }
          }
        //   不是头尾数
          if((str == '大' && (type != '头尾数' && type != '总肖')) || (type != '平特尾数' && type != '总肖'   && str == '大' )){
              for(let i = 0; i < arr.length; i++){
                  if(arr[i].name.indexOf('大') != -1){
                      arr[i].active = true;
                  }
              }
          }
          if((str == '小' && (type != '头尾数' && type != '总肖')) || (type != '平特尾数' && type != '总肖'   && str == '小' )){
              for(let i = 0; i < arr.length; i++){
                  if(arr[i].name.indexOf('小') != -1){
                      arr[i].active = true;
                  }
              }
          }
          if((str == '单' && (type != '头尾数' && type != '总肖')) || (type != '平特尾数' && type != '总肖'   && str == '单' )){
              for(let i = 0; i < arr.length; i++){
                  if(arr[i].name.indexOf('单') != -1){
                      arr[i].active = true;
                  }
              }
          }
          if((str == '双' && (type != '头尾数' && type != '总肖')) || (type != '平特尾数' && type != '总肖'   && str == '双' )){
              for(let i = 0; i < arr.length; i++){
                  if(arr[i].name.indexOf('双') != -1){
                      arr[i].active = true;
                  }
              }
          }

        //   头尾数
         if((str == '大' && type == '头尾数') || (str == '大' && type == '平特尾数')){
             let tws_arr = [];
             for(let i = 0; i < arr.length; i++){
                 if( Number(arr[i].name.substr(0,1)) >= 5 ){
                     arr[i].active = true;
                 }
             }
         }

         if((str == '小' && type == '头尾数') || (str == '小' && type == '平特尾数')){
             let tws_arr = [];
             for(let i = 0; i < arr.length; i++){
                 if( Number(arr[i].name.substr(0,1)) < 5 ){
                     arr[i].active = true;
                 }
             }
         }

         if((str == '单' && type == '头尾数') || (str == '单' && type == '平特尾数')){
             let tws_arr = [];
             for(let i = 0; i < arr.length; i++){
                 if( Number(arr[i].name.substr(0,1)) % 2 != 0 ){
                     arr[i].active = true;
                 }
             }
         }
         if((str == '双' && type == '头尾数') || (str == '双' && type == '平特尾数')){
             let tws_arr = [];
             for(let i = 0; i < arr.length; i++){
                 if( Number(arr[i].name.substr(0,1)) % 2 == 0 ){
                     arr[i].active = true;
                 }
             }
         }

        //  总肖

         if((str == '大' && type == '总肖') || (str == '大') && type.indexOf('连尾') != -1){
             for(let i = 0; i < arr.length; i++){
                 if( Number(arr[i].name.substr(0,1)) >= 5 ){
                     arr[i].active = true;
                 }
             }
         }

         if((str == '小' && type == '总肖') || (str == '小') && type.indexOf('连尾') != -1){
             for(let i = 0; i < arr.length; i++){
                 if( Number(arr[i].name.substr(0,1)) < 5 ){
                     arr[i].active = true;
                 }
             }
         }

         if((str == '单' && type == '总肖') || (str == '单') && type.indexOf('连尾') != -1){
             for(let i = 0; i < arr.length; i++){
                 if(  arr[i].name.indexOf('单') != -1 || (Number(arr[i].name.substr(0,1)) % 2 != 0 && Number(arr[i].name.substr(0,1))) ){
                     console.log(arr[i].name.substr(0,1));
                     arr[i].active = true;
                 }
             }
         }
         if((str == '双' && type == '总肖') || (str == '双') && type.indexOf('连尾') != -1){
             for(let i = 0; i < arr.length; i++){
                 if(  arr[i].name.indexOf('双') != -1 || Number(arr[i].name.substr(0,1)) % 2 == 0  ){
                     console.log(arr[i].name.substr(0,1));
                     arr[i].active = true;
                 }
             }
         }
      },
    //   if 选择大小单双
      if_select_number(arr,str,index,type){
          if(type == '自选不中'){ return }
          if(type == '前三' && str != '全'|| type == '中三' && str != '全'  || type == '后三' && str != '全'){ return }
          if(type == '选位' || type == '龙虎和' && str != '全'){return}
          if(type == '波色' && str != '全' || type == '豹子' && str != '全'){ return }
          if(type == '波色豹子' && str != '全'){ return }
          console.log(arr,str,index,type)
          for(let i = 0; i < arr.length; i++){
              arr[i].active = false;
          }
          if(str == '全'){
              for(let i = 0; i < arr.length; i++){
                  arr[i].active = true;
              }
          }

          if(str == '大'){
              for(let i = 0; i < arr.length; i++){
                  if(Number(arr[i].name) || arr[i].name){
                      if( Number(arr[i].name) > Math.floor(arr.length / 2) || arr[i].name.indexOf('大') != -1){
                           arr[i].active = true;
                      }
                  }

              }
          }

          if(str == '小'){
              for(let i = 0; i < arr.length; i++){
                  if(Number(arr[i].name) || arr[i].name){
                      if( Number(arr[i].name) <= Math.floor(arr.length / 2) || arr[i].name.indexOf('小') != -1){
                           arr[i].active = true;
                      }
                  }

                  if(Number(arr[i].name) == '0'){
                      arr[i].active = true;
                  }

              }
          }

          if(str == '单'){
              for(let i = 0; i < arr.length; i++){
                  if(arr[i].name.indexOf('单') != -1 || (Number(arr[i].name) % 2 != 0) && Number(arr[i].name) % 2 ) {
                      arr[i].active = true;
                  }

              }
          }

          if(str == '双'){
              for(let i = 0; i < arr.length; i++){
                  if(arr[i].name.indexOf('双') != -1 || Number(arr[i].name) % 2 == 0) {
                      arr[i].active = true;
                  }

              }
          }

      },
      
      show_guide(index){
            this.show_guide_index = index;
            this.show_guide_index++;
            if(index == 4){
                document.body.style.overflow = 'auto';
                this.sure_show_bet_guide = false;
                this.singleLotter = true
                document.body.style.overflow = 'hidden';
                this.sure_show_bet_guide = true;
            }

            if(index >= 6){
                document.body.style.overflow = 'auto';
                this.sure_show_bet_guide = false;
                this.singleLotter = false;
            }
      },

      if_show_bet_guide(){
        // let code = this.$route.params.code;
        // console.log(code);
        document.body.style.overflow = 'auto'
        
        let flag = localStorage.getItem('show_bet_guide_flag')
          if(!flag && this.userinfo ){
            localStorage.setItem('show_bet_guide_flag',true)
            this.sure_show_bet_guide = true;
            let that = this;
            $(document).on('touchmove',function (e){
                if(that.sure_show_bet_guide && that.userinfo){
                    e.preventDefault();
                }
            });
          }
          if(flag){
             document.body.style.overflow = 'auto'
            //  sessionStorage.setItem('guide_difine_notice', true);
          }
      },
    },
    watch: {
        lotteryRanges:{
          handler:function(val,oldval){
            // 检验集合是否存在，防止越权
            if (!val) return

            if (this.$route.params.pan==1) { // A 盘
              let arr=[]  // val
              let arrNumText = [] // name

              let sumA=0 // 总投注数
              let tem_obj = {}
              let tem_arr = []

              // 判断有几位
              switch (this.arrLen) {
                case 1:
                  if (this.keyLast ==='定位胆'|| this.keyLast ==='1-5球') { // 时时彩
                    if(this.$route.params.code==='BJPK10'||this.$route.params.code=='SFPK10'||this.$route.params.code=='JSPK10') {
                      arr[0]=[];arr[1]=[];arr[2]=[];arr[3]=[];arr[4]=[];arr[5]=[];
                      arr[6]=[]
                      arr[7]=[]
                      arr[8]=[]
                      arr[9]=[]

                      arrNumText[0]=[]
                      arrNumText[1]=[]
                      arrNumText[2]=[]
                      arrNumText[3]=[]
                      arrNumText[4]=[]
                      arrNumText[5]=[]
                      arrNumText[6]=[]
                      arrNumText[7]=[]
                      arrNumText[8]=[]
                      arrNumText[9]=[]
                    }
                    else if (this.$route.params.code==='SHSSL'
                      ||this.$route.params.code==='FC3D'
                      ||this.$route.params.code==='PL3') {
                      arr[0]=[]
                      arr[1]=[]
                      arr[2]=[]

                      arrNumText[0]=[]
                      arrNumText[1]=[]
                      arrNumText[2]=[]
                    }
                    else {
                      arr[0]=[]
                      arr[1]=[]
                      arr[2]=[]
                      arr[3]=[]
                      arr[4]=[]

                      arrNumText[0]=[]
                      arrNumText[1]=[]
                      arrNumText[2]=[]
                      arrNumText[3]=[]
                      arrNumText[4]=[]
                    }

                  } else if (this.keyLast ==='前中后') {
                    arr[0]=[]
                    arr[1]=[]
                    arr[2]=[]

                    arrNumText[0]=[]
                    arrNumText[1]=[]
                    arrNumText[2]=[]
                  } else if (this.keyLast ==='两面盘') {
                    if(this.$route.params.code==='BJPK10'||this.$route.params.code=='SFPK10'||this.$route.params.code=='JSPK10') {
                      arr[0]=[]
                      arr[1]=[]
                      arr[2]=[]
                      arr[3]=[]
                      arr[4]=[]
                      arr[5]=[]
                      arr[6]=[]
                      arr[7]=[]
                      arr[8]=[]
                      arr[9]=[]

                      arrNumText[0]=[];
                      arrNumText[1]=[];
                      arrNumText[2]=[];
                      arrNumText[3]=[];
                      arrNumText[4]=[];
                      arrNumText[5]=[];
                      arrNumText[6]=[];
                      arrNumText[7]=[];
                      arrNumText[8]=[];
                      arrNumText[9]=[];
                    } else {
                      arr[0]=[];arr[1]=[];arr[2]=[];arr[3]=[];arr[4]=[];arr[5]=[];
                      arrNumText[0]=[];arrNumText[1]=[];arrNumText[2]=[];arrNumText[3]=[];arrNumText[4]=[];arrNumText[5]=[];
                    }

                  } else {
                    arr[0]=[];
                    arrNumText[0]=[];
                  }
                  break
                case 2:
                  // 时时彩
                  if (this.keyFirst=='任选二'&&this.keyLast ==='直选复式') {
                    arr[0]=[];arr[1]=[];arr[2]=[];arr[3]=[];arr[4]=[];
                    arrNumText[0]=[];arrNumText[1]=[];arrNumText[2]=[];arrNumText[3]=[];arrNumText[4]=[];
                  } else if((this.keyFirst=='任选二'
                      &&(this.keyLast ==='前二组选复式'||this.keyLast ==='后二组选复式'||this.keyLast ==='五选二直选和值'))
                    || (this.keyFirst=='任选三'&&(this.keyLast ==='前三组三复式'||this.keyLast ==='后三组三复式'))
                    || (this.keyFirst=='二码'&&(this.keyLast ==='前二组选复式'||this.keyLast ==='后二组选复式'))
                    || (this.keyFirst=='任选复式'&&this.keyLast ==='任选二中二')
                    ||(this.keyFirst=='三星'&&(this.keyLast ==='组三复式'|| this.keyLast ==='组六复式'))
                    ||(this.keyFirst=='二星'&&(this.keyLast ==='前二组选'|| this.keyLast ==='后二组选'))
                    || (this.keyFirst=='不定位'&&(this.keyLast ==='二码不定位'|| this.keyLast ==='一码不定位'))
                    || (this.keyFirst=='二不同号'&&(this.keyLast ==='标准'))
                    || (this.keyFirst=='合肖'&&(this.keyLast ==='合肖'))
                    || (this.keyFirst=='连码')
                    || (this.keyFirst=='连肖连尾')
                    || (this.keyFirst=='任选四'&&(this.keyLast ==='前四组选6' || this.keyLast ==='后四组选6'))){
                    arr[0]=[];
                    arrNumText[0]=[];
                  } else {
                    arr[0]=[];arr[1]=[];
                    arrNumText[0]=[];arrNumText[1]=[];
                  }
                  break
                case 3:
                  if(this.keyLast==='前三组选三复式'
                    || this.keyLast==='后三组选三复式'
                    || this.keyLast==='前三组选六'
                    || this.keyLast==='后三组选六'
                    || this.keyLast ==='前三组选复式'
                    || this.keyLast ==='中三组选复式'
                    || this.keyLast ==='后三组选复式'
                    || (this.keyFirst=='三星'&&(this.keyLast ==='组六复式'))
                    || (this.keyFirst=='任选三'&&(this.keyLast ==='五选三直选和值' ))
                    || (this.keyFirst=='任选三'&&(this.keyLast ==='前三组六复式'||this.keyLast ==='后三组六复式'))
                    || (this.keyFirst=='任选三'&&(this.keyLast ==='前四直选和值'||this.keyLast ==='后四直选和值'))
                    || (this.keyFirst=='三星'&&(this.keyLast ==='后三组选三'|| this.keyLast ==='前三组选三' ))
                    || (this.keyFirst=='三星'&&(this.keyLast ==='后三组选六'|| this.keyLast ==='前三组选六' ))
                    || (this.keyFirst=='三不同号'&&(this.keyLast ==='标准' ))
                    || (this.keyFirst=='特码'&&(this.keyLast ==='特码包三' ))
                    || (this.keyFirst=='连码')
                    || (this.keyFirst=='连肖连尾')
                    ||(this.keyFirst=='任选复式'&&this.keyLast ==='任选三中三')) { // 组三
                    arr[0]=[];
                    arrNumText[0]=[];
                  } else if (this.keyFirst=='任选三'&&this.keyLast ==='直选复式') {
                    arr[0]=[];arr[1]=[];arr[2]=[];arr[3]=[];arr[4]=[];
                    arrNumText[0]=[];arrNumText[1]=[];arrNumText[2]=[];arrNumText[3]=[];arrNumText[4]=[];
                  } else if ((this.keyFirst=='三码'&&(this.keyLast ==='前三组选胆拖'
                      ||this.keyLast ==='中三组选胆拖'
                      ||this.keyLast ==='后三组选胆拖'))
                    ||(this.keyFirst=='任选胆拖'&&this.keyLast ==='任选三中三')
                    ||(this.keyFirst == '两面盘' && this.keyLast === '龙虎和')) { // 胆拖
                    arr[0]=[];arr[1]=[];
                    arrNumText[0]=[];arrNumText[1]=[];
                  }
                  else {
                    arr[0]=[];arr[1]=[];arr[2]=[];
                    arrNumText[0]=[];arrNumText[1]=[];arrNumText[2]=[];
                  }
                  break
                case 4:
                  if ((this.keyFirst=='任选复式'&&this.keyLast ==='任选四中四')
                    || (this.keyFirst=='连码')
                    || (this.keyFirst=='连肖连尾')
                    || (this.keyFirst==='任选四'&&(this.keyLast==='前四组选24'||this.keyLast==='后四组选24'))) {
                    arr[0]=[];
                    arrNumText[0]=[];
                  } else if (this.keyFirst=='任选四'&&this.keyLast ==='直选复式') {
                    arr[0]=[];arr[1]=[];arr[2]=[];arr[3]=[];arr[4]=[];
                    arrNumText[0]=[];arrNumText[1]=[];arrNumText[2]=[];arrNumText[3]=[];arrNumText[4]=[];
                  } else if ((this.keyFirst=='任选胆拖'&&this.keyLast ==='任选四中四')
                    ||(this.keyFirst==='任选四'&&(this.keyLast==='前四组选12'||this.keyLast==='后四组选12'))
                    ||(this.keyFirst==='任选四'&&(this.keyLast==='前四组选4'||this.keyLast==='后四组选4'))) {
                    arr[0]=[];arr[1]=[];
                    arrNumText[0]=[];arrNumText[1]=[];
                  } else {
                    arr[0]=[];arr[1]=[];arr[2]=[];arr[3]=[];
                    arrNumText[0]=[];arrNumText[1]=[];arrNumText[2]=[];arrNumText[3]=[];
                  }
                  break
                case 5:
                  if ((this.keyFirst=='任选复式'&&this.keyLast ==='任选五中五')
                    || (this.keyFirst=='连肖连尾')) {
                    arr[0]=[];
                    arrNumText[0]=[];
                  } else if ((this.keyFirst=='任选胆拖'&&this.keyLast ==='任选五中五')) {
                    arr[0]=[];arr[1]=[];
                    arrNumText[0]=[];arrNumText[1]=[];
                  } else {
                    arr[0]=[];arr[1]=[];arr[2]=[];arr[3]=[];arr[4]=[];
                    arrNumText[0]=[];arrNumText[1]=[];arrNumText[2]=[];arrNumText[3]=[];arrNumText[4]=[];
                  }
                  break
                case 6:
                  if ((this.keyFirst=='任选复式'&&this.keyLast ==='任选六中五')
                    || this.keyLast ==='自选不中') {
                    arr[0]=[];
                    arrNumText[0]=[];
                  } else if ((this.keyFirst=='任选胆拖'&&this.keyLast ==='任选六中五')) {
                    arr[0]=[];arr[1]=[];
                    arrNumText[0]=[];arrNumText[1]=[];
                  } else {
                    arr[0]=[];arr[1]=[];arr[2]=[];arr[3]=[];arr[4]=[];arr[5]=[];
                    arrNumText[0]=[];arrNumText[1]=[];arrNumText[2]=[];arrNumText[3]=[];arrNumText[4]=[];arrNumText[5]=[];
                  }
                  break
                case 7:
                  if ((this.keyFirst=='任选复式'&&this.keyLast ==='任选七中五')) {
                    arr[0]=[];
                    arrNumText[0]=[];
                  } else if ((this.keyFirst=='任选胆拖'&&this.keyLast ==='任选七中五') || this.keyLast ==='普通投注') {
                    arr[0]=[];arr[1]=[];
                    arrNumText[0]=[];arrNumText[1]=[];
                  }
                  else {
                    arr[0]=[];arr[1]=[];arr[2]=[];arr[3]=[];arr[4]=[];arr[5]=[];arr[6]=[];
                    arrNumText[0]=[];arrNumText[1]=[];arrNumText[2]=[];arrNumText[3]=[];arrNumText[4]=[];arrNumText[5]=[];arrNumText[6]=[];
                  }
                  break
                case 8:
                  if ((this.keyFirst=='任选复式'&&this.keyLast ==='任选八中五')) {
                    arr[0]=[];
                    arrNumText[0]=[];
                  } else if ((this.keyFirst=='任选胆拖'&&this.keyLast ==='任选八中五')) {
                    arr[0]=[];arr[1]=[];
                    arrNumText[0]=[];arrNumText[1]=[];
                  } else {
                    arr[0]=[];arr[1]=[];arr[2]=[];arr[3]=[];arr[4]=[];arr[5]=[];arr[6]=[];arr[7]=[];
                    arrNumText[0]=[];arrNumText[1]=[];arrNumText[2]=[];arrNumText[3]=[];arrNumText[4]=[];arrNumText[5]=[];arrNumText[6]=[];arrNumText[7]=[];
                  }
                  break
                case 9:
                  arr[0]=[];arr[1]=[];arr[2]=[];arr[3]=[];arr[4]=[];arr[5]=[];arr[6]=[];arr[7]=[];arr[8]=[];
                  arrNumText[0]=[];arrNumText[1]=[];arrNumText[2]=[];arrNumText[3]=[];arrNumText[4]=[];arrNumText[5]=[];arrNumText[6]=[];arrNumText[7]=[];arrNumText[8]=[];
                  break
                case 10:
                  arr[0]=[];arr[1]=[];arr[2]=[];arr[3]=[];arr[4]=[];arr[5]=[];arr[6]=[];arr[7]=[];arr[8]=[];arr[9]=[];
                  arrNumText[0]=[];arrNumText[1]=[];arrNumText[2]=[];arrNumText[3]=[];arrNumText[4]=[];arrNumText[5]=[];arrNumText[6]=[];arrNumText[7]=[];arrNumText[8]=[];arrNumText[9]=[];
                  break
              }
              this.lotteryPosText=[];// 类型文本
              this.lotteryPosCode=[];// 类型代码
              for (let m=0,len=val.length; m<len;m++) {
                if (val[m].prams) {
                  for (let n=0,l=val[m].prams.length;n<l;n++) {
                    if (val[m].prams[n].active) { // 去重
                      if (!array_contain(this.lotteryPosText,val[m].type)) {
                        this.lotteryPosText.push(val[m].type)
                      }
                      //let num2 = []
                      if (val[m].code) {
                      //this.lotteryPosCode=[]
                        if (!array_contain(this.lotteryPosCode,val[m].code)) {
                          this.lotteryPosCode.push(val[m].code)
                        }
                      }
                      switch (m) {
                        case 0:
                          arr[0].push(val[m].prams[n].val);arrNumText[0].push(val[m].prams[n].name);
                          break
                        case 1:
                          arr[1].push(val[m].prams[n].val);arrNumText[1].push(val[m].prams[n].name);
                          break
                        case 2:
                          arr[2].push(val[m].prams[n].val);arrNumText[2].push(val[m].prams[n].name);
                          break
                        case 3:
                          arr[3].push(val[m].prams[n].val);arrNumText[3].push(val[m].prams[n].name);
                          break
                        case 4:
                          arr[4].push(val[m].prams[n].val);arrNumText[4].push(val[m].prams[n].name);
                          break
                        case 5:
                          arr[5].push(val[m].prams[n].val);arrNumText[5].push(val[m].prams[n].name);
                          break
                        case 6:
                          arr[6].push(val[m].prams[n].val);arrNumText[6].push(val[m].prams[n].name);
                          break
                        case 7:
                          arr[7].push(val[m].prams[n].val);arrNumText[7].push(val[m].prams[n].name);
                          break
                        case 8:
                          arr[8].push(val[m].prams[n].val);arrNumText[8].push(val[m].prams[n].name);
                          break
                        case 9:
                          arr[9].push(val[m].prams[n].val);arrNumText[9].push(val[m].prams[n].name);
                          break
                        default:
                          arr[10].push(val[m].prams[n].val);arrNumText[10].push(val[m].prams[n].name);
                          break
                      }

                      /**
                       * 每选一个号作为一条记录
                       * */
                      if(this.rates){
                        if(this.userinfo) {
                          this.Bretate =  parseFloat((this.rates[n]*this.userinfo.return_ratio_rate).toFixed(3))
                        } else {
                          this.Bretate = this.rates[n] * this.proxy_default_rate
                        }
                      }

                      this.Abets = [];
                      let num3 = [] // bet_numbers2
                        //console.log(val[m].code)
                      if (val[m].code!== undefined&&val[m].code!== null&&val[m].code!== '') {
                        num3 = [val[m].code]
                      }
                      sumA++
                      let bet_amount =  (this.unit_price*this.bet_count*this.future_issues+this.bet_count*this.unit_price)*1
                      tem_obj = {
                        lot_type_id: this.$route.params.typeid, // 彩票类型ID
                        play_type_id:this.id,// 子 彩票玩法ID
                        bet_numbers1: [val[m].prams[n].val],// 彩票投注号码数组  按位投注二维[[1,2],[3,4]]  一般投注一维[1,2,3]
                        bet_numbers1Text:[val[m].prams[n].name],
                        bet_numbers2: num3, // 彩票投注号码数组[拖码数组或位置数组]
                        bet_amount:this.cashFlag === '元'? bet_amount : this.cashFlag === '角'? bet_amount* 0.1 : bet_amount * 0.01,//投注金额
                        bet_count: this.bet_count,//投注倍数
                        //bet_rate: this.lowest_rate,//投注赔率
                        bet_rate: this.Bretate,//投注赔率
                        future_issues: this.future_issues,//追期数【范围0-50】
                        unit_price: this.cashFlag === '元'? this.unit_price : this.cashFlag === '角'? this.unit_price* 0.1 : this.unit_price * 0.01,//单注彩票金额

                        bet_type1: this.keyFirst,
                        bet_type2: this.keyLast,
                        retrun_li: this.retrun_li,
                        lotteryNum: 1, // 注数
                        bet_name: [val[m].prams[n].name],
                        lotteryPosText: [val[m].type]

                      }
                      //console.log(sumA)
                      tem_arr.unshift(tem_obj)
                    }
                  }
                }
              }


              if (this.keyFirst!=='总肖'
                &&this.keyFirst!=='7色波'
                &&this.keyFirst!=='正肖'
                &&this.keyFirst!=='平特一肖尾数'
                &&this.keyFirst!=='五行'
                &&this.keyFirst!=='正码1-6'
                &&this.keyFirst!=='正码特'
                &&this.keyFirst!=='正码'
                &&this.keyFirst!=='头尾数'
                &&this.keyFirst!=='特肖'
                &&this.keyFirst!=='色波'
                &&this.keyFirst!=='特码A'
                &&this.keyFirst!=='特码B'
                &&this.keyFirst!=='混合'
                &&this.keyFirst!=='波色'
                &&this.keyLast!=='特码') {
                /*
                 *  计算总投注数
                 * */
                switch (this.arrLen) {
                  case 1:
                    // 时时彩
                    if (this.keyLast ==='定位胆'|| this.keyLast ==='1-5球' ) {
                      if(this.$route.params.code==='BJPK10'||this.$route.params.code=='SFPK10'||this.$route.params.code=='JSPK10') {
                        this.lotteryNum = (arr[0].length)+(arr[1].length)+(arr[2].length)+(arr[3].length)+(arr[4].length)+(arr[5].length)+(arr[6].length)+(arr[7].length)+(arr[8].length)+(arr[9].length)
                      }
                      else if (this.$route.params.code==='SHSSL'
                        ||this.$route.params.code==='FC3D'
                        ||this.$route.params.code==='PL3') {
                        this.lotteryNum = (arr[0].length)+(arr[1].length)+(arr[2].length)
                      }
                        else {
                        this.lotteryNum = (arr[0].length)+(arr[1].length)+(arr[2].length)+(arr[3].length)+(arr[4].length)
                      }

                    } else if (this.keyLast ==='前中后') {
                      this.lotteryNum = (arr[0].length)+(arr[1].length)+(arr[2].length)
                    } else if (this.keyLast ==='两面盘') {
                      if(this.$route.params.code==='BJPK10'||this.$route.params.code=='SFPK10' ||this.$route.params.code=='JSPK10') {
                        this.lotteryNum = (arr[0].length)+(arr[1].length)+(arr[2].length)+(arr[3].length)+(arr[4].length)+(arr[5].length)+(arr[6].length)+(arr[7].length)+(arr[8].length)+(arr[9].length)
                      }else {
                        this.lotteryNum = (arr[0].length)+(arr[1].length)+(arr[2].length)+(arr[3].length)+(arr[4].length)+(arr[5].length)
                      }
                    } else if (this.keyLast ==='前三直选和值' || this.keyLast ==='后三直选和值'
                      ||(this.keyFirst=='三星'&& this.keyLast ==='直选和值')) { // 3 和值
                      let sum = 0;
                      for (let i=0;i<arr[0].length;i++) {
                        for (let m=0;m<10;m++) {
                          for (let n=0;n<10;n++) {
                            let k = arr[0][i]-m-n
                            if (k>=0&&k<=9) {
                              sum++
                            }
                          }
                        }
                      }

                      this.lotteryNum =sum
                    }else if (this.keyFirst ==='三星' && this.keyLast=='组三和值') { // 3 和值 与顺序无关
                      let sum = 0
                      let tem = [0, 1, 2, 1, 3, 3, 3, 4, 5, 4, 5, 5, 4, 5]
                      for (let i=0;i<arr[0].length;i++) {
                        if(arr[0][i] <= 13) {
                          sum += tem[arr[0][i]]
                        } else if(arr[0][i] > 13) {
                          sum += tem[26 - arr[0][i] + 1]
                        }
                      }
                      this.lotteryNum =sum
                    }else if (this.keyFirst ==='三星' && this.keyLast=='组六和值') { // 3 和值 与顺序无关
                      let sum = 0
                      let tem = [0, 0, 0, 1, 1, 2, 3, 4, 5, 7, 8, 9, 10, 10]
                      for (let i=0;i<arr[0].length;i++) {
                        if(arr[0][i] <= 13) {
                          sum += tem[arr[0][i]]
                        } else if(arr[0][i] > 13) {
                          sum += tem[24 - arr[0][i] + 3]
                        }
                      }
                      this.lotteryNum =sum
                    }
                    else if (this.keyFirst=='任选二'&&
                      (this.keyLast ==='前二直选和值'||this.keyLast ==='后二直选和值')){
                      this.lotteryNum = 0
                      for (let i=0,len=arr[0].length;i<len;i++) {
                        if (arr[0][i]<10) {
                          this.lotteryNum += arr[0][i]+1
                        } else {
                          this.lotteryNum += 20-arr[0][i]-1
                        }
                      }
                    } else if (this.keyFirst=='任选二'&&
                      (this.keyLast ==='前二组选和值'||this.keyLast ==='后二组选和值')){
                      this.lotteryNum = 0
                      for (let i=0,len=arr[0].length;i<len;i++) {
                        if (arr[0][i]<10) {
                          this.lotteryNum += Math.floor((arr[0][i]+1)/2)
                        } else {
                          this.lotteryNum += Math.floor((20-arr[0][i]-1)/2)
                        }
                      }
                    } else if (this.keyFirst=='任选三'&&(this.keyLast ==='前三组选和值'||this.keyLast ==='后三组选和值')) {
                      let sum = 0
                      let tem = [0, 1, 2, 2, 4, 5, 6, 8, 10, 11, 13, 14, 14, 15]

                      for (let i=0;i<arr[0].length;i++){
                        if(arr[0][i] <= 13) {
                          sum += tem[arr[0][i]]
                        } else if(arr[0][i] > 13) {
                          sum += tem[26 - arr[0][i] + 1]
                        }
                      }
                      this.lotteryNum = sum
                    } else if(this.keyFirst=='和值'&&this.keyLast ==='和值') {
                      let sum = 0
                      let tem = [0, 0, 0, 1, 3, 6, 10, 15, 21, 25, 27 ]

                      for (let i=0;i<arr[0].length;i++) {
                        if (arr[0][i] <= 10) {
                          sum += tem[arr[0][i]]
                        } else if (arr[0][i] > 10) {
                          sum += tem[20 - arr[0][i] + 1]
                        }
                      }
                      this.lotteryNum = sum
                    }
                    else {
                      this.lotteryNum = (arr[0].length)
                    }
                    this.lotteryCash = (this.lotteryNum) * (this.unitPirace)
                    break
                  case 2:
                    //  时时彩
                    if (this.keyFirst=='任选二'&&this.keyLast ==='直选复式') {
                      this.lotteryNum = (arr[0].length)*(arr[1].length+arr[2].length+arr[3].length+arr[4].length)
                        + (arr[1].length)*(arr[2].length+arr[3].length+arr[4].length)
                        + (arr[2].length)*(length+arr[3].length+arr[4].length)
                        + (arr[3].length)*(arr[4].length)
                    } else if((this.keyFirst=='任选二'&&(this.keyLast ==='前二组选复式'||this.keyLast ==='后二组选复式') )
                      || (this.keyFirst=='二星'&&(this.keyLast ==='前二组选'||this.keyLast ==='后二组选'))
                      || (this.keyFirst=='不定位'&&(this.keyLast ==='二码不定位'|| this.keyLast ==='一码不定位'))
                      || (this.keyFirst=='二不同号'&&(this.keyLast ==='标准'))
                      || (this.keyFirst=='连码'&&(this.keyLast ==='二全中'||this.keyLast ==='中特'||this.keyLast ==='特串'))
                      || (this.keyFirst=='连肖连尾'&&(this.keyLast ==='二连肖'||this.keyLast ==='二连尾'))){ // 1 选 2
                      this.lotteryNum = (arr[0].length)*(arr[0].length-1)/2
                    }  else if((this.keyFirst=='三星'&&this.keyLast ==='组三复式') ){ // 组三
                      this.lotteryNum = (arr[0].length)*(arr[0].length-1)/(1*2)*2
                    }
                    else if(this.keyFirst=='任选二'&&(this.keyLast ==='五选二直选和值')){
                      this.lotteryNum=0
                      for (let i=0,len=arr[0].length;i<len;i++) {
                        if (arr[0][i]<10) {
                          this.lotteryNum += (~~arr[0][i]+1)*10
                        } else {
                          this.lotteryNum += (20-arr[0][i]-1)*10
                        }
                      }
                    } else if((this.keyFirst=='二码'&&(this.keyLast ==='前二组选复式'|| this.keyLast ==='后二组选复式'))
                      || (this.keyFirst=='任选四'&&(this.keyLast ==='前四组选6' || this.keyLast ==='后四组选6'))) {
                    //this.lotteryNum = (arr[0].length-1)>=0?(arr[0].length-1):0
                      this.lotteryNum = (arr[0].length*(arr[0].length-1))/2
                    } else if( this.keyFirst=='任选三'&&(this.keyLast ==='前三组三复式'||this.keyLast ==='后三组三复式') ) { // 组三
                      this.lotteryNum = (arr[0].length*(arr[0].length-1))/2*2
                    }
                    else if(this.keyFirst=='二码'&&(this.keyLast ==='前二组选胆拖' || this.keyLast ==='后二组选胆拖') ) {
                      this.lotteryNum = arr[0].length*arr[1].length
                    }
                    else if (this.keyFirst=='任选复式'&&this.keyLast ==='任选二中二') {
                      this.lotteryNum = (arr[0].length*(arr[0].length-1))/2
                    } else if(this.keyFirst=='合肖'&&(this.keyLast ==='合肖')) {
                      this.lotteryNum = 1
                      if(arr[0].length<2) {
                        this.lhc_rate = '----'
                        this.lotteryNum = 0
                      } else if (arr[0].length===2) {
                        this.lhc_rate = this.userinfo?parseFloat((this.rates[0]*this.userinfo.return_ratio_rate).toFixed(3)):parseFloat((this.rates[0]*this.proxy_default_rate).toFixed(3))
                      } else if (arr[0].length===3) {
                        this.lhc_rate = this.userinfo?parseFloat((this.rates[1]*this.userinfo.return_ratio_rate).toFixed(3)):parseFloat((this.rates[1]*this.proxy_default_rate).toFixed(3))
                      } else if (arr[0].length===4) {
                        this.lhc_rate = this.userinfo?parseFloat((this.rates[2]*this.userinfo.return_ratio_rate).toFixed(3)):parseFloat((this.rates[2]*this.proxy_default_rate).toFixed(3))
                      } else if (arr[0].length===5) {
                        this.lhc_rate = this.userinfo?parseFloat((this.rates[3]*this.userinfo.return_ratio_rate).toFixed(3)):parseFloat((this.rates[3]*this.proxy_default_rate).toFixed(3))
                      } else if (arr[0].length===6) {
                        this.lhc_rate = this.userinfo?parseFloat((this.rates[4]*this.userinfo.return_ratio_rate).toFixed(3)):parseFloat((this.rates[4]*this.proxy_default_rate).toFixed(3))
                      } else if (arr[0].length===7) {
                        this.lhc_rate = this.userinfo?parseFloat((this.rates[5]*this.userinfo.return_ratio_rate).toFixed(3)):parseFloat((this.rates[5]*this.proxy_default_rate).toFixed(3))
                      } else if (arr[0].length===8) {
                        this.lhc_rate = this.userinfo?parseFloat((this.rates[6]*this.userinfo.return_ratio_rate).toFixed(3)):parseFloat((this.rates[6]*this.proxy_default_rate).toFixed(3))
                      } else if (arr[0].length===9) {
                        this.lhc_rate = this.userinfo?parseFloat((this.rates[7]*this.userinfo.return_ratio_rate).toFixed(3)):parseFloat((this.rates[7]*this.proxy_default_rate).toFixed(3))
                      } else if (arr[0].length===10) {
                        this.lhc_rate = this.userinfo?parseFloat((this.rates[8]*this.userinfo.return_ratio_rate).toFixed(3)):parseFloat((this.rates[8]*this.proxy_default_rate).toFixed(3))
                      } else if (arr[0].length===11) {
                        this.lhc_rate = this.userinfo?parseFloat((this.rates[9]*this.userinfo.return_ratio_rate).toFixed(3)):parseFloat((this.rates[9]*this.proxy_default_rate).toFixed(3))
                      }
                    } else if((this.keyFirst=='二码'&&(this.keyLast ==='前二直选复式'|| this.keyLast ==='后二直选复式'))
                      ||(this.keyFirst=='前二'&&(this.keyLast ==='直选复式'))) {
                      let sum=0
                      for(let m=0;m<arr[0].length;m++){
                        for(let n=0;n<arr[1].length;n++) {
                          if (arr[0][m]===arr[1][n]){
                            sum--
                          }
                        }
                      }
                      this.lotteryNum = (arr[0].length)*(arr[1].length)+sum
                    }
                    else {
                      this.lotteryNum = (arr[0].length)*(arr[1].length)
                    }
                    this.lotteryCash = (this.lotteryNum) * (this.unitPirace)
                    break
                  case 3:
                    if(this.keyLast==='前三组选六'
                      || this.keyLast==='后三组选六'
                      || (this.keyFirst=='三星'&&this.keyLast ==='组六复式')
                      || (this.keyFirst=='任选三'&&(this.keyLast ==='前三组六复式'||this.keyLast ==='后三组六复式'))
                      || (this.keyFirst=='三星'&&(this.keyLast ==='后三组选六'|| this.keyLast ==='前三组选六' ))
                      || (this.keyFirst=='连码'&&(this.keyLast ==='中二'||this.keyLast ==='三全中'))
                      || (this.keyFirst=='连肖连尾'&&(this.keyLast ==='三连肖'||this.keyLast ==='三连尾'))) { // 组六
                      this.lotteryNum = ((arr[0].length)*(arr[0].length-1)*(arr[0].length-2))/(1*2*3)
                    } else if (this.keyLast==='前三组选三复式'
                      || this.keyLast==='后三组选三复式'
                      || (this.keyFirst=='三星'&&(this.keyLast ==='后三组选三'|| this.keyLast ==='前三组选三' ))) {
                      this.lotteryNum = ((arr[0].length)*(arr[0].length-1))/(1*2)*2
                    } else if (this.keyFirst=='三不同号'&&(this.keyLast ==='标准' )) {// 快三
                      this.lotteryNum = ((arr[0].length)*(arr[0].length-1)*(arr[0].length-2))/(1*2*3)
                    }
                    else if (this.keyFirst=='任选三'&&this.keyLast ==='直选复式') {
                      if (this.$route.params.code==='CQSSC'
                        ||this.$route.params.code==='TJSSC'
                        ||this.$route.params.code==='SFSSC'
                        ||this.$route.params.code==='XJSSC'
                        ||this.$route.params.code==='PL5'
                        || this.$route.params.code === 'FFSSC') {
                        this.lotteryNum =(arr[0].length)*(arr[1].length)*((arr[2].length)+(arr[3].length)+(arr[4].length)) +
                          (arr[0].length)*(arr[2].length)*((arr[3].length)+(arr[4].length)) +
                          (arr[0].length)*(arr[3].length)*((arr[4].length)) +
                          (arr[1].length)*(arr[2].length)*((arr[3].length)+(arr[4].length)) +
                          (arr[1].length)*(arr[3].length)*((arr[4].length)) +
                          (arr[2].length)*(arr[3].length)*((arr[4].length))
                      }else {
                        this.lotteryNum = (arr[0].length)*(arr[1].length)*(arr[2].length)*(arr[3].length)*(arr[4].length)
                      }

                    }  else if ((this.keyFirst=='任选三'&&(this.keyLast ==='前四直选和值'||this.keyLast ==='后四直选和值'))) {
                      let sum = 0;
                      for (let i=0;i<arr[0].length;i++) {
                        for (let m=0;m<10;m++) {
                          for (let n=0;n<10;n++) {
                            let k = arr[0][i]-m-n
                            if (k>=0&&k<=9) {
                              sum++
                            }
                          }
                        }
                      }
                      this.lotteryNum =sum*4
                    }  else if (this.keyFirst=='特码'&&(this.keyLast ==='特码包三' )) {
                      this.lotteryNum =1
                    }
                    else if ((this.keyFirst=='三码'
                      &&(this.keyLast ==='前三组选复式'|| this.keyLast ==='中三组选复式'
                      || this.keyLast ==='后三组选复式'))|| (this.keyFirst=='任选复式'&&this.keyLast ==='任选三中三')){ // 组选
                      this.lotteryNum = arr[0].length*(arr[0].length-1)*(arr[0].length-2)/1/2/3
                    } else if ((this.keyFirst=='三码'&&(this.keyLast ==='前三组选胆拖'
                      ||this.keyLast ==='中三组选胆拖'
                      ||this.keyLast ==='后三组选胆拖'))
                      ||(this.keyFirst=='三不同号'&&this.keyLast ==='胆拖')
                      ||(this.keyFirst=='任选胆拖'&&this.keyLast ==='任选三中三')) { // 胆拖
                      if(arr[0].length===1) {
                        this.lotteryNum = (arr[1].length*(arr[1].length-1))/2
                      } else if (arr[0].length===2) {
                        this.lotteryNum = arr[1].length
                      } else {
                        if(arr[0].length===0) {
                          this.lotteryNum = 0
                        } else {
                          mt_toast('胆码最多选两个号码')
                        }
                      }
                    } else if (this.keyFirst=='任选复式'&&this.keyLast ==='任选三中三'){
                      this.lotteryNum = arr[1].length*(arr[1].length-1)/2
                    }
                    else if (this.keyFirst=='三码'
                      &&(this.keyLast ==='前三直选复式' ||this.keyLast ==='中三直选复式' ||this.keyLast ==='后三直选复式') || (this.keyFirst == '前三' && this.keyLast === '直选复式') ){
                      let sum=0
                      for (let i=0,len=arr[0].length;i<len;i++) {
                        for (let m=0,len=arr[1].length;m<len;m++) {
                          for (let n=0,len=arr[2].length;n<len;n++) {
                            if(arr[0][i]!=arr[1][m]&&arr[0][i]!=arr[2][n]&&arr[1][m]!=arr[2][n]) {
                              sum++
                            }
                          }
                        }
                      }
                      this.lotteryNum = sum
                    } else if (this.keyFirst=='任选三'&&this.keyLast ==='五选三直选和值') {
                      let tem = [10, 30, 60, 100, 150, 210, 280, 360, 450, 550, 630, 690, 730, 750]
                      let sum=0
                      for (let n=0,len=arr[0].length;n<len;n++) {
                        if(arr[0][n] <= 13) {
                          sum += tem[arr[0][n]]
                        } else if(arr[0][n] > 13) {
                          sum += tem[27 - arr[0][n]]
                        }
                      }
                      this.lotteryNum = sum
                    } else if (this.keyFirst == '两面盘' && this.keyLast === '龙虎和') {
                      this.lotteryNum = arr[1].length
                    }
                    else {
                      this.lotteryNum = (arr[0].length)*(arr[1].length)*(arr[2].length)
                    }

                    this.lotteryCash = (this.lotteryNum) * (this.unitPirace)
                    break
                  case 4:
                    if ((this.keyFirst=='任选复式'&&this.keyLast ==='任选四中四')
                      || (this.keyFirst=='连码'&&(this.keyLast ==='四全中'))
                      || (this.keyFirst=='连肖连尾'&&(this.keyLast ==='四连肖'||this.keyLast ==='四连尾'))
                      || (this.keyFirst==='任选四'&&(this.keyLast==='前四组选24'||this.keyLast==='后四组选24'))) {
                      this.lotteryNum = arr[0].length*(arr[0].length-1)*(arr[0].length-2)*(arr[0].length-3)/1/2/3/4
                    } else if(this.keyFirst=='任选四'&&this.keyLast ==='直选复式'){
                      this.lotteryNum =(arr[0].length)*(arr[1].length)*(arr[2].length)*((arr[3].length)+(arr[4].length)) +
                        (arr[0].length)*(arr[1].length)*(arr[3].length)*(arr[4].length) +
                        (arr[0].length)*(arr[2].length)*(arr[3].length)*(arr[4].length) +
                        (arr[1].length)*(arr[2].length)*((arr[3].length)*(arr[4].length))
                    } else if(this.keyFirst=='任选胆拖'&&this.keyLast ==='任选四中四'){
                      if ((arr[0].length===1)){
                        this.lotteryNum = arr[1].length<3?0:arr[1].length===3?1:arr[1].length
                      } else if(arr[0].length===3){
                        this.lotteryNum = arr[1].length
                      } else if(arr[0].length===2){
                        this.lotteryNum = (arr[1].length)*(arr[1].length-1)/2
                      } else {
                        this.lotteryNum = 0
                      }

                    } else if (this.keyFirst==='任选四'&&(this.keyLast==='前四组选12'||this.keyLast==='后四组选12')){

                      let sum=0
                      for(let m=0;m<arr[0].length;m++){
                        if (array_contain(arr[1],arr[0][m])){
                          sum += (arr[1].length-1)*(arr[1].length-2)/2
                        }else {
                          sum += (arr[1].length-1)*(arr[1].length)/2
                        }
                      }
                      this.lotteryNum = sum
                    }
                    else if (this.keyFirst==='任选四'&&(this.keyLast==='前四组选4'||this.keyLast==='后四组选4')){
                      let sum=0
                      for(let m=0;m<arr[0].length;m++){
                        if (array_contain(arr[1],arr[0][m])){
                          sum++
                        }
                      }
                      this.lotteryNum = (arr[0].length)*(arr[1].length)-sum
                    }
                    else {
                      this.lotteryNum = (arr[0].length)*(arr[1].length)*(arr[2].length)*(arr[3].length)
                    }

                    this.lotteryCash = (this.lotteryNum) * (this.unitPirace)
                    break
                  case 5:
                    if ((this.keyFirst=='任选复式'&&this.keyLast ==='任选五中五')
                      || (this.keyFirst=='连肖连尾'&&(this.keyLast ==='五连肖'||this.keyLast ==='五连尾'))) {
                      this.lotteryNum = arr[0].length*(arr[0].length-1)*(arr[0].length-2)*(arr[0].length-3)*(arr[0].length-4)/1/2/3/4/5
                    } else if (this.keyFirst=='任选胆拖'&&this.keyLast ==='任选五中五'){
                      if ((arr[0].length===1)){
                        this.lotteryNum = arr[1].length<4?0:(arr[1].length)*(arr[1].length-1)*(arr[1].length-2)*(arr[1].length-3)/(4*3*2*1)
                      } else if(arr[0].length===4){
                        this.lotteryNum = arr[1].length
                      } else if(arr[0].length===3){
                        this.lotteryNum = (arr[1].length)*(arr[1].length-1)/2
                      } else if(arr[0].length===2){
                        this.lotteryNum = (arr[1].length)*(arr[1].length-1)*(arr[1].length-2)/(3*2*1)
                      } else {
                        this.lotteryNum = 0
                      }
                    }
                    else {
                      this.lotteryNum = (arr[0].length)*(arr[1].length)*(arr[2].length)*(arr[3].length)*(arr[4].length)
                    }

                    this.lotteryCash = (this.lotteryNum) * (this.unitPirace)
                    break
                  case 6:
                    if ((this.keyFirst=='任选复式'&&this.keyLast ==='任选六中五')) {
                      this.lotteryNum = arr[0].length*(arr[0].length-1)*(arr[0].length-2)*(arr[0].length-3)*(arr[0].length-4)*(arr[0].length-5)/1/2/3/4/5/6
                    } else if (this.keyFirst=='任选胆拖'&&this.keyLast ==='任选六中五'){
                      if ((arr[0].length===1)){
                        this.lotteryNum = arr[1].length<5?0:(arr[1].length)*(arr[1].length-1)*(arr[1].length-2)*(arr[1].length-3)*(arr[1].length-4)/(5*4*3*2*1)
                      } else if(arr[0].length===5){
                        this.lotteryNum = arr[1].length
                      } else if(arr[0].length===2){
                        this.lotteryNum = (arr[1].length)*(arr[1].length-1)*(arr[1].length-2)*(arr[1].length-3)/(4*3*2*1)
                      } else if(arr[0].length===3){
                        this.lotteryNum = (arr[1].length)*(arr[1].length-1)*(arr[1].length-2)/(3*2*1)
                      } else if(arr[0].length===4){
                        this.lotteryNum = (arr[1].length)*(arr[1].length-1)/2
                      } else {
                        this.lotteryNum = 0
                      }
                    } else if(this.keyLast ==='自选不中') {
                      this.lotteryNum = 1
                      if(arr[0].length<6) {
                        this.lhc_rate = '----'
                        this.lotteryNum = 0
                      } else if (arr[0].length===6) {
                        this.lhc_rate = this.userinfo?parseFloat((this.rates[0]*this.userinfo.return_ratio_rate).toFixed(3)):parseFloat((this.rates[0]*this.proxy_default_rate).toFixed(3))
                      } else if (arr[0].length===7) {
                        this.lhc_rate = this.userinfo?parseFloat((this.rates[1]*this.userinfo.return_ratio_rate).toFixed(3)):parseFloat((this.rates[1]*this.proxy_default_rate).toFixed(3))
                      } else if (arr[0].length===8) {
                        this.lhc_rate = this.userinfo?parseFloat((this.rates[2]*this.userinfo.return_ratio_rate).toFixed(3)):parseFloat((this.rates[2]*this.proxy_default_rate).toFixed(3))
                      } else if (arr[0].length===9) {
                        this.lhc_rate = this.userinfo?parseFloat((this.rates[3]*this.userinfo.return_ratio_rate).toFixed(3)):parseFloat((this.rates[3]*this.proxy_default_rate).toFixed(3))
                      } else if (arr[0].length===10) {
                        this.lhc_rate = this.userinfo?parseFloat((this.rates[4]*this.userinfo.return_ratio_rate).toFixed(3)):parseFloat((this.rates[4]*this.proxy_default_rate).toFixed(3))
                      } else if (arr[0].length===11) {
                        this.lhc_rate = this.userinfo?parseFloat((this.rates[5]*this.userinfo.return_ratio_rate).toFixed(3)):parseFloat((this.rates[5]*this.proxy_default_rate).toFixed(3))
                      }
                    }
                    else {
                      this.lotteryNum = (arr[0].length)*(arr[1].length)*(arr[2].length)*(arr[3].length)*(arr[4].length)*(arr[5].length)
                    }

                    this.lotteryCash = (this.lotteryNum) * (this.unitPirace)
                    break
                  case 7:
                    if ((this.keyFirst=='任选复式'&&this.keyLast ==='任选七中五')) {
                      this.lotteryNum = arr[0].length*(arr[0].length-1)*(arr[0].length-2)*(arr[0].length-3)*(arr[0].length-4)*(arr[0].length-5)*(arr[0].length-6)/1/2/3/4/5/6/7
                    } else if (this.keyFirst=='任选胆拖'&&this.keyLast ==='任选七中五'){
                      if ((arr[0].length===1)){
                        this.lotteryNum = arr[1].length<6?0:(arr[1].length)*(arr[1].length-1)*(arr[1].length-2)*(arr[1].length-3)*(arr[1].length-4)*(arr[1].length-5)/(6*5*4*3*2*1)
                      } else if(arr[0].length===6){
                        this.lotteryNum = arr[1].length
                      } else if(arr[0].length===2){
                        this.lotteryNum = (arr[1].length)*(arr[1].length-1)*(arr[1].length-2)*(arr[1].length-3)*(arr[1].length-4)/(5*4*3*2*1)
                      } else if(arr[0].length===3){
                        this.lotteryNum = (arr[1].length)*(arr[1].length-1)*(arr[1].length-2)*(arr[1].length-3)/(4*3*2*1)
                      } else if(arr[0].length===4){
                        this.lotteryNum = (arr[1].length)*(arr[1].length-1)*(arr[1].length-2)/(3*2*1)
                      } else if(arr[0].length===5){
                        this.lotteryNum = (arr[1].length)*(arr[1].length-1)/(2*1)
                      } else {
                        this.lotteryNum = 0
                      }
                    } else if (this.keyLast ==='普通投注') {
                      if(this.$route.params.code == 'SSQ') {
                        this.lotteryNum = arr[0].length*(arr[0].length-1)*(arr[0].length-2)*(arr[0].length-3)*(arr[0].length-4)*(arr[0].length-5)/(1*2*3*4*5*6)*(arr[1].length)
                      } else if(this.$route.params.code == 'DLT') {
                        this.lotteryNum = arr[0].length*(arr[0].length-1)*(arr[0].length-2)*(arr[0].length-3)*(arr[0].length-4)/(1*2*3*4*5)*(arr[1].length)*(arr[1].length-1)/(1*2)
                      }

                    }
                    else {
                      this.lotteryNum = (arr[0].length)*(arr[1].length)*(arr[2].length)*(arr[3].length)*(arr[4].length)*(arr[5].length)*(arr[6].length)
                    }

                    this.lotteryCash = (this.lotteryNum) * (this.unitPirace)
                    break
                  case 8:
                    if ((this.keyFirst=='任选复式'&&this.keyLast ==='任选八中五')) {
                      this.lotteryNum = arr[0].length*(arr[0].length-1)*(arr[0].length-2)*(arr[0].length-3)*(arr[0].length-4)*(arr[0].length-5)*(arr[0].length-6)*(arr[0].length-7)/1/2/3/4/5/6/7/8
                    } else if (this.keyFirst=='任选胆拖'&&this.keyLast ==='任选八中五'){
                      if ((arr[0].length===1)){
                        this.lotteryNum = arr[1].length<7?0:(arr[1].length)*(arr[1].length-1)*(arr[1].length-2)*(arr[1].length-3)*(arr[1].length-4)*(arr[1].length-5)*(arr[1].length-6)/(7*6*5*4*3*2*1)
                      } else if(arr[0].length===7){
                        this.lotteryNum = arr[1].length
                      } else if(arr[0].length===2){
                        this.lotteryNum = (arr[1].length)*(arr[1].length-1)*(arr[1].length-2)*(arr[1].length-3)*(arr[1].length-4)*(arr[1].length-5)/(6*5*4*3*2*1)
                      } else if(arr[0].length===3){
                        this.lotteryNum = (arr[1].length)*(arr[1].length-1)*(arr[1].length-2)*(arr[1].length-3)*(arr[1].length-4)/(5*4*3*2*1)
                      } else if(arr[0].length===4){
                        this.lotteryNum = (arr[1].length)*(arr[1].length-1)*(arr[1].length-2)*(arr[1].length-3)/(4*3*2*1)
                      } else if(arr[0].length===5){
                        this.lotteryNum = (arr[1].length)*(arr[1].length-1)*(arr[1].length-2)/(3*2*1)
                      } else if(arr[0].length===6){
                        this.lotteryNum = (arr[1].length)*(arr[1].length-1)/(2*1)
                      } else {
                        this.lotteryNum = 0
                      }
                    } else {
                      this.lotteryNum = (arr[0].length)*(arr[1].length)*(arr[2].length)*(arr[3].length)*(arr[4].length)*(arr[5].length)*(arr[6].length)*(arr[7].length)
                    }

                    this.lotteryCash = (this.lotteryNum) * (this.unitPirace)
                    break
                  case 9:
                    this.lotteryNum = (arr[0].length)*(arr[1].length)*(arr[2].length)*(arr[3].length)*(arr[4].length)*(arr[5].length)*(arr[6].length)*(arr[7].length)*(arr[8].length)
                    this.lotteryCash = (this.lotteryNum) * (this.unitPirace)
                    break
                  default:
                    this.lotteryNum = (arr[0].length)*(arr[1].length)*(arr[2].length)*(arr[3].length)*(arr[4].length)*(arr[5].length)*(arr[6].length)*(arr[7].length)*(arr[8].length)*(arr[9].length)
                    this.lotteryCash = (this.lotteryNum) * (this.unitPirace)
                    break
                }

                /*
                * 清空空数组
                * */
                if (arr.length>0) {
                  this.activeArr=[]
                  for (let m=0;m<arr.length;m++) {
                    if (arr[m].length!==0) {
                      this.activeArr.push(arr[m])
                    }
                  }
                }

                this.bet_numbers1Text = arrNumText;

                //console.log(this.activeArr)
               /* console.log(this.bet_numbers1Text)
                console.log(this.lotteryPosText)
                console.log(this.lotteryPosCode)*/
              } else{
                this.lotteryNum = sumA
                this.lotteryCash = (this.lotteryNum) * (this.unitPirace)
                this.Abets = tem_arr // lhc

                /*console.log(this.lotteryNum)
                console.log(this.lotteryCash)*/
                //console.log(this.Abets)

              }
            } else if (this.$route.params.pan==2) { // B盘
              this.specialDial = []; // update 20180115
              this.specialDialTxt = []; // update 20180115
              let sum=0 // 总投注数
              let tem_obj = {}
              let tem_arr = []
              let arrVal = [];// 选号
              let arrName = [];// 选号对应的文本
              this.lotteryPosText=[];// 类型文本
              //console.log(this.bet_count)
              for (let m=0,len=val.length; m<len;m++) { // 二维数组最外层 m
                if (val[m].prams) {
                  for (let n=0,l=val[m].prams.length;n<l;n++) {
                    if (val[m].prams[n].active) { // down selected
                      this.Bretate =this.userinfo ? this.keyLast=='1-5球'? parseFloat((this.rates[m]*this.userinfo.return_ratio_rate).toFixed(3)) : (this.$route.params.code=='XY28' || this.$route.params.code=='BJ28')&&this.keyLast ==='两面盘'&&m===1 ? parseFloat((this.rates[n+10]*this.userinfo.return_ratio_rate).toFixed(3)) : parseFloat((this.rates[n] * this.userinfo.return_ratio_rate).toFixed(3)) : this.keyLast=='1-5球'?parseFloat((this.rates[m]*this.proxy_default_rate).toFixed(3)) : (this.$route.params.code=='XY28' || this.$route.params.code=='BJ28')&&this.keyLast ==='两面盘'&&m===1 ? parseFloat((this.rates[n+10]*this.proxy_default_rate).toFixed(3)) :parseFloat((this.rates[n] * this.proxy_default_rate).toFixed(3))
                      this.Bbets = [];
                      this.lotteryPosText =[val[m].type]
                      if(this.keyLast=='前中后') {
                        arrVal = [val[m].prams[n].val];
                      } else {
                        arrVal = val[m].prams[n].name=='豹子'?[]:[val[m].prams[n].val];
                      }

                      arrName= [val[m].prams[n].name];
                      let num2 = []

                      if (val[m].code!== undefined&&val[m].code!== null&&val[m].code!== '') {
                        if(this.keyLast=='前中后') {
                          num2 = [val[m].code];
                        } else {
                          num2 = val[m].prams[n].name=='豹子'?[3]:[val[m].code]
                        }
                      }
                      if(val[m].prams[n].code) {
                        num2 = [val[m].prams[n].code]
                      }
                      sum++
                      if(this.keyFirst == '两面盘' && this.keyLast === '龙虎和' && m===0) {  // update 20180115
                        sum--
                        this.specialDial.push(val[0].prams[n].val)
                        this.specialDialTxt.push(val[0].prams[n].name)
                      }
                      /*
                      * 临时赔率数组
                      * */
                      let bet_amount =  (this.unit_price*this.bet_count*this.future_issues+this.bet_count*this.unit_price)*this.lotteryNum
                      tem_obj = {
                        lot_type_id: this.$route.params.typeid, // 彩票类型ID
                        play_type_id:this.id,// 子 彩票玩法ID
                        bet_numbers1: arrVal,// 彩票投注号码数组  按位投注二维[[1,2],[3,4]]  一般投注一维[1,2,3]
                        bet_numbers1Text:this.bet_numbers1Text,
                        bet_numbers2: (this.keyFirst == '两面盘' && this.keyLast === '龙虎和') ? this.specialDial : num2, // 彩票投注号码数组[拖码数组或位置数组]
                        bet_amount:this.cashFlag === '元'? bet_amount : this.cashFlag === '角'? bet_amount* 0.1 : bet_amount * 0.01,//投注金额
                        bet_count: this.bet_count,//投注倍数
                        bet_rate: this.Bretate,//投注赔率
                        future_issues: this.future_issues,//追期数【范围0-50】
                        unit_price: this.cashFlag === '元'? this.unit_price : this.cashFlag === '角'? this.unit_price* 0.1 : this.unit_price * 0.01 ,//单注彩票金额

                        bet_type1: this.keyFirst,
                        bet_type2: this.keyLast,
                        retrun_li: this.retrun_li,
                        lotteryNum: 1, // 注数
                        bet_name: arrName,
                        lotteryPosText: (this.keyFirst == '两面盘' && this.keyLast === '龙虎和') ? [this.specialDialTxt.join('')]:this.lotteryPosText

                      }
                      //console.log(this.specialDialTxt)
                      tem_arr.unshift(tem_obj)
                      if(this.keyFirst == '两面盘' && this.keyLast === '龙虎和' && m===0) {  // update 20180115
                        tem_arr.shift(tem_obj)
                      }

                    }
                  }
                }
              }
              /*
              *  计算总投注数
              * */
              this.lotteryNum = sum
              this.lotteryCash = (this.lotteryNum) * (this.unitPirace)

              this.Bbets = tem_arr

             //console.log(this.Bbets)
            }
          },
          deep:true
        },
      }
  }
</script>

<style scoped lang="stylus">
    @import "~components/stylus/gameplay"
    // 投注引导
    .bet-guide{
        position: fixed;
        top:0;
        left:0;
        right:0;
        bottom:0;
        background: rgba(0,0,0, .6);
        z-index: 100;
        overflow:hidden;
    }

     .bet-guide-header{
         height:0.88rem;
         width:3.3rem;
         line-height: 0.8rem;
         margin-right:0.24rem;
         position:relative;
         left: 2.1rem;
         top: 0;
         border: 1.5px dashed #fff;
         border-radius: 20px;
         background: #ff3a3b;
     }
    .bet-guide-header span{
        width: 0.2rem;
        font-size:0.28rem;
        writing-mode : vertical-lr;
        color: #fff;
        line-height: 0.24rem;
        margin-top: 0.13rem;
        margin-left:0.1rem;
    }

    .bet-guide-header i{
        display: inline-block;
        font-style: normal;
        color: #fff;
        font-size: 0.36rem;
        height:0.8rem;
        line-height: 0.8rem;
         position:absolute;
         top:0;
         margin-left: 0.24rem;
    }

     .bet-guide-header strong{
         font-size: 0.25rem;
         color: #fff;
         position: absolute;
         right: 0.05rem;
         top:0.05rem;
     }

    //  玩法

    .first-step{
        // position:fixed;
        margin-left:10%;
        width:80%;
        min-height: 5rem;
        background: url('../../images/bet_guide/guide_play_rule1.png') no-repeat center / 100% ;
        margin-top:-0.5rem;
    }

    .bet-guide-header1{
        width: 1rem;
        height:0.88rem;
        background: #ff3a3b;
        position: fixed;
        right: 0;
        border: 1.5px dashed #fff;
        border-radius: 20px;
    }
    .bet-guide-header1 img{
        width: 0.46rem;
        height:0.46rem;
        margin-top: 0.25rem;
        margin-left: 0.2rem;
    }

    .second-step{
        margin-left:20%;
        width:80%;
        min-height: 5rem;
        background: url('../../images/bet_guide/guide_history2.png') no-repeat center / 100% ;
        margin-top: 0.4rem;
    }

    // 最近一期
    .bet-guide-last-date{
         width: 51%;
         padding: 0.03rem;
         border-radius: 20px;
         border: 1.5px dashed  #fff;
         position: fixed;
         top:0.87rem;
    }
    .bet-guide-last-date > div > p{
        font-size: 0.3rem;
        color: #000;
        
    }
    .bet-guide-last-date > div{
        background: #f5f4f9;
        min-height:1rem;
        width: 99.8%;
        padding-top: 0.1rem;
        border-radius: 20px;
        padding-left: 0.1rem;
        padding-bottom: 0.1rem;
    }

    .bet-guide-last-date > div > dl {
        font-size: 0.3rem;
        margin-top: 0.15rem;
    }
    .bet-guide-last-date > div > dl .lot-res-num  span{
        font-size: 0.36rem;
        color: #fa3c3c;
        margin-right: 0.1rem;
    }

    .third-step{
        margin-left:10%;
        width:80%;
        min-height: 5rem;
        background: url('../../images/bet_guide/guide_date3.png') no-repeat center / 100% ;
        margin-top: 1.6rem;
    }

    // 下滑图表
    .bet-guide-down-icon{
        padding:0.05rem;
        
        border: 1.5px dashed #fff;
        position: fixed;
        top: 1.9rem;
        left:44%;
        border-radius: 10px;
    }
    .bet-guide-down-icon > div{
        width: 0.8rem;
        height:0.7rem
        background: #eee;
        border-radius: 5px;
        
    }
    .bet-guide-down-icon i {
        display:block;
        text-align: center;
    }

    .fourth-step{
        margin-left:18%;
        width:80%;
        min-height: 5rem;
        background: url('../../images/bet_guide/guide_down_icon4.png') no-repeat center / 100% ;
        margin-top: 2rem;
    }

    // 立即投注
    .bet-guide-bet-now{
        width: 1.88rem;
        padding-top: 0.03rem;
        padding-left: 0.05rem;
        border-radius: 10px;
        border: 1.5px dashed #fff;
        position: fixed;
        right: -0.05rem;
        bottom: 0;
    }

    .bet-guide-bet-now > div{
        width: 1.74rem;
        height: 0.76rem;
        background: #ff3a3b;
        line-height: 0.76rem;
        text-align: center;
        color: #fff;
        font-size: 0.32rem;
    }

    .fifth-step{
        position: absolute;
        bottom: 0.7rem;
        margin-left:10%;
        width:80%;
        min-height: 5rem;
        background: url('../../images/bet_guide/guide_ok_bet5.png') no-repeat center / 100% ;
        margin-top: 2rem;
    }

    // 增加倍数

    .bet-guide-append-box{
        position:fixed;
        width: 100%;
        padding:0.1rem;
        border: 1.5px dashed #fff;
        border-radius: 20px;
        padding-left: 0.18rem;
        top:4.2rem;
    }
    .bet-guide-append{
        width:94.2%;
        display:flex;
        justify-content: space-around;
        background: #fff;
        font-size: 0.34rem;
        margin-left:0.18rem;
       
    }

    .bet-guide-append> div{
        width:50%;
        padding-left: 0.12rem;
        
    }

    .bet-guide-append> div > div{
        width: 70%;
        display: inline-block;
        border: 1px solid #ccc;
        border-radius: 5px;
    }
    .bet-guide-append > div em , .bet-guide-append > div i, .bet-guide-append > div strong{
        display:inline-block;
        font-style: normal;
        font-weight:normal;
    }
     .bet-guide-append > div strong{
        width: 0.6rem;
        padding: 0.11rem;
        text-align: center;
    }
     .bet-guide-append > div i{
       padding: 0.18rem;
       border-right: 1px solid #ccc;
    }
     .bet-guide-append > div em{
        padding: 0.18rem;
       border-left: 1px solid #ccc;
    }

    .six-step{
        position: fixed;
        top: 5.5rem;
        margin-left:10%;
        width:80%;
        min-height: 5rem;
        background: url('../../images/bet_guide/guide_append7.png') no-repeat center / 100% ;
    }

    .seven-step{
        position: absolute;
        bottom: 3rem;
        margin-left:10%;
        width:80%;
        min-height: 5rem;
        background: url('../../images/bet_guide/guide_sumbit8.png') no-repeat center / 100% ;
    }

    // 提交

    .bet-guide-submit{
        min-width: 45%;
        padding: 0.1rem;
        border: 1.5px dashed #fff;
        border-radius:20px;
        position: fixed;
        bottom: 2.13rem;
        right: 5%;
    }
    .bet-guide-submit > div  input{
        color: #fff;
        background: #ff3a3b;
        width: 100%;
        padding: 0.2rem;
        font-size: 0.3rem;
    }
</style>
