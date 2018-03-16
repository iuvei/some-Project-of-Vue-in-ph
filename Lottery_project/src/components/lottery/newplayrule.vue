<template>
    <div id="newplayrule" ref="newplayrule">
        <div class="play_rule_head">
            <i onclick="history.go(-1)"> </i>
            <span>玩法说明</span>
        </div>
         <div class="rule-wrap">
            <div class="select_list_wrap">
                <ul class="select_list">
                    <li class="active">时时彩</li>
                    <li>快3</li>
                    <li>11选5</li>
                    <li>低频彩</li>
                    <li>PK10</li>
                    <li>PC蛋蛋</li>
                    <li>六合彩</li>
                </ul>
            </div>

            <div class="cont_wrap">
                <!-- 时时彩 -->
                <div class="active">
                    <div class="switch_tab_swiper">
                        <button class="current">彩种介绍</button>
                        <button>玩法规则</button>
                        <i class="switch_tab_swiper_i"></i>
                    </div>
                    <div class="cont_main">
                        <div class="cont_left active">
                            <div class="timing">
                                <h2 class="topic"> <span class="fa fa-clock-o"></span>开奖时间</h2>
                                <div class="time">
                                    重庆时时彩:
                                    <p>10:00-22:00（73期），每10分钟一期，22:00-02:00（47期），每5分钟一期，全天120期</p>
                                </div>
                                <div class="time">
                                    天津时时彩:
                                    <p>09:10-22:55，每10分钟一期，全天84期</p>
                                </div>
                                <div class="time">
                                    分分时时彩:
                                    <p>00:00-00:00（次日），每1分钟一期，全天1440期</p>
                                </div>
                                <div class="time">
                                    三分时时彩:
                                    <p>00:00-00:00（次日），每3分钟一期，全天480期</p>
                                </div>
                                <div class="time">
                                    新疆时时彩:
                                    <p>10:10-02:00，每10分钟一期，全天96期</p>
                                </div>
                                <div class="time">
                                    北京时时彩:
                                    <p>09:05-23:55，每5分钟一期，全天179期</p>
                                </div>
                            </div>
                            <div class="intro">
                                <h2>
                                    <span class="fa fa-file-text"> </span>玩法简介</h2>
                                <div class="list">
                                    <div class="item">
                                        <span>1.</span>
                                        <p>时时彩投注区分为万位、千位、百位、十位和个位，各位号码范围为0～9。每期从各位上开出1个号码作为中奖号码，即开奖号码为5位数。时时彩玩法即是竞猜5位开奖号码的全部号码、部分号码或部分号码特征。</p>
                                    </div>
                                </div>
                                <div class="list">
                                    <div class="item">
                                        <span>2.</span>
                                        <p>时时彩中“复式”和“单式”的玩法规则相同，区别于单式需手动勾选位置、输入号码。</p>
                                    </div>
                                </div>
                                <div class="list">
                                    <div class="item">
                                        <span>3.</span>
                                        <p>时时彩分星彩玩法和大小单双玩法。星彩玩法包括五星、三星、二星和一星。</p>
                                    </div>
                                    <div class="children">
                                        <div class="item">
                                                <span>
                                                    <i class="fa fa-hand-o-right"></i>
                                                </span>
                                            <p>直选: 将投注号码以唯一的排列方式进行投注。</p>
                                        </div>
                                        <!---->
                                    </div>
                                    <div class="children">
                                        <div class="item">
                                                <span>
                                                    <i class="fa fa-hand-o-right"></i>
                                                </span>
                                            <p>组选: 将投注号码的所有排列方式作为一注投注号码进行投注。示例：123，排列方式有123、132、213、231、312、321，共计6种。</p>
                                        </div>
                                        <!---->
                                    </div>
                                    <div class="children">
                                        <div class="item">
                                                <span>
                                                    <i class="fa fa-hand-o-right"></i>
                                                </span>
                                            <p>组选三: 在三星组选中，如果一注组选号码的3个数字有两个数字相同，则有3种不同的排列方式，因而就有3个中奖机会，这种组选投注方式简称组选三。示例：112，排列方式有112、121、211。</p>
                                        </div>
                                        <!---->
                                    </div>
                                    <div class="children">
                                        <div class="item">
                                                <span>
                                                    <i class="fa fa-hand-o-right"></i>
                                                </span>
                                            <p>组选六: 在三星组选中，如果一注组选号码的3个数字各不相同，则有6种不同的排列方式，因而就有6个中奖机会，这种组选投注方式简称组选六。示例：123，排列方式有123、132、213、231、312、321，共计6种。</p>
                                        </div>
                                        <!---->
                                    </div>
                                    <div class="children">
                                        <div class="item">
                                                <span>
                                                    <i class="fa fa-hand-o-right"></i>
                                                </span>
                                            <p>大小单双: 号码0～9中，0～4为小，5～9为大，1、3、5、7、9为单，0、2、4、6、8为双。</p>
                                        </div>
                                        <!---->
                                    </div>
                                    <div class="children">
                                        <div class="item">
                                                <span>
                                                    <i class="fa fa-hand-o-right"></i>
                                                </span>
                                            <p>龙虎: 根据指定位置上的号码数值比大小，首选号大于后选号为龙，小则为虎。</p>
                                        </div>
                                        <!---->
                                    </div>
                                    <div class="children">
                                        <div class="item">
                                                <span>
                                                    <i class="fa fa-hand-o-right"></i>
                                                </span>
                                            <p>跨度: 对指定位置上的号码的最大最小数字差值进行投注。</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="cont_right">
                            <h3 class="title_n"> 五星 </h3>
                            <div class="right_item">
                                <h4 class="right_item_h4">五星直选 <span class="fa fa-angle-down"></span> </h4>
                                <div class="content_box">
                                    <div class="content">
                                        <span>复式</span>
                                        <p>从万千百十个位各选1个号码，所选号与开奖号相同，且顺序一致，即为中奖。</p>
                                    </div>
                                    <div class="content">
                                        <span>单式</span>
                                        <p>手动输入1个五位数号码，所选号与开奖号相同，且顺序一致，即为中奖。</p>
                                    </div>
                                    <div class="content">
                                        <span>组合</span>
                                        <p>从万、千、百、十、个位中各选1个号码组成1-5星组合，共5注。所选号的个位与开奖号个位相同，则中1个5等奖；所选号的十、个位与开奖号十、个位相同，则中1个5等奖和4等奖，以此类推，最高可中5个奖。如所选号个位不中奖，则余号均视为不中奖。</p>
                                    </div>
                                </div>
                            </div>

                            <div class="right_item">
                                <h4 class="right_item_h4">五星组选 <span class="fa fa-angle-down"></span> </h4>
                                <div class="content_box">
                                    <div class="content">
                                        <span>组选120</span>
                                        <p>从0-9中任选5个号码组成一注。不限顺序，开奖号中包含全部所选号，即为中奖。</p>
                                    </div>
                                    <div class="content">
                                        <span>组选60</span>
                                        <p>选1个二重号，3个单号组成一注。不限顺序，开奖号中包含全部所选号，且二重号出现2次，即为中奖。</p>
                                    </div>
                                    <div class="content">
                                        <span>组选30</span>
                                        <p>从万、千、百、十、个位中各选1个号码组成1-选2个二重号，1个单号组成一注。不限顺序，开奖号中包含全部所选号，且2个二重号各出现2次，即为中奖。</p>
                                    </div>
                                    <div class="content">
                                        <span>组选20</span>
                                        <p>选1个三重号，2个单号组成一注。不限顺序，开奖号中包含全部所选号，且三重号出现3次，即为中奖。</p>
                                    </div>
                                    <div class="content">
                                        <span>组选10</span>
                                        <p>从三重号和二重号中各选1个号码组成一注。不限顺序，开奖号中所选的三重号出现3次，二重号出现2次，即为中奖。</p>
                                    </div>
                                    <div class="content">
                                        <span>组选5</span>
                                        <p>选1个四重号，1个单号组成一注。不限顺序，开奖号中包含全部所选号，且四重号出现4次，即为中奖。</p>
                                    </div>
                                </div>
                            </div>

                            <h3 class="title_n"> 四星 </h3>

                            <div class="right_item">
                                <h4 class="right_item_h4">后四直选 <span class="fa fa-angle-down"></span> </h4>
                                <div class="content_box">
                                    <div class="content">
                                        <span>复式</span>
                                        <p>从千、百、十、个位中各选1个号码，所选号与开奖号后四位号码相同，且顺序一致，即为中奖。</p>
                                    </div>
                                    <div class="content">
                                        <span>单式</span>
                                        <p>手动输入1个四位数号码，所选号与开奖号后四位号码相同，且顺序一致，即为中奖。</p>
                                    </div>
                                    <div class="content">
                                        <span>组合</span>
                                        <p>从千、百、十、个位中各选1个号码组成1-4星组合，共4注。所选号的个位与开奖号个位相同，则中1个4等奖；所选号的十、个位与开奖号十、个位相同，则中1个4等奖和3等奖，以此类推，最高可中4个奖。如所选号个位不中奖，则余号均视为不中奖。</p>
                                    </div>
                                </div>
                            </div>

                            <div class="right_item">
                                <h4 class="right_item_h4">后四组选 <span class="fa fa-angle-down"></span> </h4>
                                <div class="content_box">
                                    <div class="content">
                                        <span>组选24</span>
                                        <p>从0-9中任选4个号码组成一注。不限顺序，开奖号后四位中包含全部所选号，即为中奖。</p>
                                    </div>
                                    <div class="content">
                                        <span>组选12</span>
                                        <p>选1个二重号，2个单号组成一注。不限顺序，开奖号后四位中包含全部所选号，且二重号出现2次，即为中奖。</p>
                                    </div>
                                    <div class="content">
                                        <span>组选6</span>
                                        <p>选1个三重号，1个单号组成一注。不限顺序，开奖号后四位中包含全部所选号，且三重号出现3次，即为中奖。</p>
                                    </div>

                                    <div class="content">
                                        <span>组选4</span>
                                        <p>选1个三重号，1个单号组成一注。不限顺序，开奖号后四位中包含全部所选号，且三重号出现3次，即为中奖。</p>
                                    </div>
                                </div>
                            </div>

                            <div class="right_item">
                                <h4 class="right_item_h4">前四直选 <span class="fa fa-angle-down"></span> </h4>
                                <div class="content_box">
                                    <div class="content">
                                        <span>复式</span>
                                        <p>从万、千、百、十位中各选1个号码，所选号与开奖号前四位相同，且顺序一致，即为中奖。</p>
                                    </div>
                                    <div class="content">
                                        <span>单式</span>
                                        <p>手动输入1个四位数号码，所选号与开奖号前四位相同，且顺序一致，即为中奖。</p>
                                    </div>
                                    <div class="content">
                                        <span>组合</span>
                                        <p>从万、千、百、十位中各选1个号码组成1-4星组合，共4注。所选号的十位与开奖号十位相同，则中1个4等奖； 所选号的百、十位与开奖号百、十位相同，则中1个4等奖和3等奖，以此类推，最高可中4个奖。</p>
                                    </div>

                                </div>
                            </div>

                            <div class="right_item">
                                <h4 class="right_item_h4">前四组选 <span class="fa fa-angle-down"></span> </h4>
                                <div class="content_box">
                                    <div class="content">
                                        <span>组选24</span>
                                        <p>从0-9中任选4个号码组成一注。不限顺序，开奖号前四位中包含全部所选号，即为中奖。</p>
                                    </div>
                                    <div class="content">
                                        <span>组选12</span>
                                        <p>选1个二重号，2个单号组成一注。不限顺序，开奖号前四位中包含全部所选号，且二重号出现2次，即为中奖。</p>
                                    </div>
                                    <div class="content">
                                        <span>组选6</span>
                                        <p>选2个二重号组成一注。不限顺序，开奖号前四位中2个二重号各出现2次，即为中奖。</p>
                                    </div>

                                    <div class="content">
                                        <span>组选4</span>
                                        <p>选1个三重号，1个单号组成一注。不限顺序，开奖号前四位中包含全部所选号，且三重号出现3次，即为中奖。</p>
                                    </div>
                                </div>
                            </div>

                            <h3 class="title_n"> 三星 </h3>
                            <div class="right_item">
                                <h4 class="right_item_h4">后三直选 <span class="fa fa-angle-down"></span> </h4>
                                <div class="content_box">
                                    <div class="content">
                                        <span>复式</span>
                                        <p>从百、十、个位中各选1个号码，所选号与开奖号后三位相同，且顺序一致，即为中奖。</p>
                                    </div>
                                    <div class="content">
                                        <span>单式</span>
                                        <p>手动输入1个三位数号码，所选号与开奖号后三位相同，且顺序一致，即为中奖。</p>
                                    </div>
                                    <div class="content">
                                        <span>直选和值</span>
                                        <p>从0-27中任选一个号，所选号数值等于开奖号后三位数相加之和，即为中奖。</p>
                                    </div>

                                    <div class="content">
                                        <span>直选跨度</span>
                                        <p>从0-9中任选1个号码组成一注。所选号数值等于开奖号后三位的最大最小数字差值，即为中奖。</p>
                                    </div>
                                    <div class="content">
                                        <span>和值尾数</span>
                                        <p>对开奖号后三位号码相加之和的尾数进行投注，从0-9中任选1个号码为一注。开奖号后三位号码相加之和的尾数与所选号相同，即为中奖。</p>
                                    </div>
                                </div>
                            </div>

                            <div class="right_item">
                                <h4 class="right_item_h4">后三组选 <span class="fa fa-angle-down"></span> </h4>
                                <div class="content_box">
                                    <div class="content">
                                        <span>组三</span>
                                        <p>从0-9中任选2个号码组成两注。不限顺序，开奖号后三位中包含全部所选号，且其中一个所选号出现2次，即为中奖。</p>
                                    </div>
                                    <div class="content">
                                        <span>组六</span>
                                        <p>任选3个不同的号码组成一注。开奖号后三位中包含全部所选号，即为中奖。</p>
                                    </div>
                                    <div class="content">
                                        <span>混合组选</span>
                                        <p>手动输入一个3位数号码（不含豹子号）组成一注。其中1个所选号在开奖号后三位中出现2次， 则中组三奖；开奖号后三位中包含全部所选号，且无重复号码出现，则中组六奖。</p>
                                    </div>

                                    <div class="content">
                                        <span>组选包胆</span>
                                        <p>从0-9中任选1个包胆号码为一注。不限顺序，开奖号后三位中包含所选的包胆号（不含豹子号），即为中奖。</p>
                                    </div>

                                </div>
                            </div>

                            <div class="right_item">
                                <h4 class="right_item_h4">中三直选 <span class="fa fa-angle-down"></span> </h4>
                                <div class="content_box">
                                    <div class="content">
                                        <span>复式</span>
                                        <p>从千、百、十位中各选1个号码，所选号与开奖号中间三位号码相同，且顺序一致，即为中奖。</p>
                                    </div>
                                    <div class="content">
                                        <span>单式</span>
                                        <p>手动输入1个三位数号码，所选号与开奖号中间三位号码相同，且顺序一致，即为中奖。</p>
                                    </div>
                                    <div class="content">
                                        <span>直选和值</span>
                                        <p> 从0-27中任选一个号，所选号数值等于开奖号中间三位数相加之和，即为中奖。</p>
                                    </div>

                                    <div class="content">
                                        <span>直选跨度</span>
                                        <p>从0-9中任选1个号码组成一注。所选号数值等于开奖号中间三位的最大最小数字差值，即为中奖。</p>
                                    </div>

                                    <div class="content">
                                        <span>和值尾数</span>
                                        <p>从对开奖号中间三位号码相加之和的尾数进行投注，从0-9中任选1个号码为一注。开奖号中间三位号码相加之和的尾数与所选号相同，即为中奖。</p>
                                    </div>

                                </div>
                            </div>

                            <div class="right_item">
                                <h4 class="right_item_h4">中三组选 <span class="fa fa-angle-down"></span> </h4>
                                <div class="content_box">
                                    <div class="content">
                                        <span>组三</span>
                                        <p>从0-9中任选2个号码组成两注。不限顺序，开奖号中间三位中包含全部所选号，且其中一个所选号出现2次，即为中奖。</p>
                                    </div>
                                    <div class="content">
                                        <span>组六</span>
                                        <p>任选3个不同的号码组成一注。开奖号中间三位中包含全部所选号，即为中奖。</p>
                                    </div>
                                    <div class="content">
                                        <span>混合组选</span>
                                        <p> 手动输入一个3位数号码（不含豹子号），其中1个所选号在开奖号中间三位里出现2次，则中组三奖； 开奖号中间三位中包含全部所选号，且无重复号码出现，则中组六奖。 </p>
                                    </div>

                                    <div class="content">
                                        <span>组选包胆</span>
                                        <p>从0-9中任选1个包胆号码为一注。不限顺序，开奖号中间三位中包含所选的包胆号（不含豹子号），即为中奖。</p>
                                    </div>

                                </div>
                            </div>

                            <div class="right_item">
                                <h4 class="right_item_h4">前三直选 <span class="fa fa-angle-down"></span> </h4>
                                <div class="content_box">
                                    <div class="content">
                                        <span>复式</span>
                                        <p>从万、千、百位中各选1个号码，所选号与开奖号前三位号码相同，且顺序一致，即为中奖。</p>
                                    </div>
                                    <div class="content">
                                        <span>单式</span>
                                        <p>手动输入1个三位数号码，所选号与开奖号前三位号码相同，且顺序一致，即为中奖。</p>
                                    </div>
                                    <div class="content">
                                        <span>直选和值</span>
                                        <p> 从0-27中任选一个号，所选号数值等于开奖号前三位数相加之和，即为中奖。</p>
                                    </div>

                                    <div class="content">
                                        <span>直选跨度</span>
                                        <p>从0-9中任选1个号码组成一注。所选号数值等于开奖号前三位的最大最小数字差值，即为中奖。</p>
                                    </div>

                                    <div class="content">
                                        <span>和值尾数</span>
                                        <p>对开奖号前三位号码相加之和的尾数进行投注，从0-9中任选1个号码为一注。开奖号前三位号码相加之和的尾数与所选号相同，即为中奖。</p>
                                    </div>

                                </div>
                            </div>

                            <div class="right_item">
                                <h4 class="right_item_h4">前三组选 <span class="fa fa-angle-down"></span> </h4>
                                <div class="content_box">
                                    <div class="content">
                                        <span>组三</span>
                                        <p>从0-9中任选2个号码组成两注。不限顺序，开奖号前三位中包含全部所选号，且其中一个所选号出现2次，即为中奖。</p>
                                    </div>
                                    <div class="content">
                                        <span>组六</span>
                                        <p>任选3个不同的号码组成一注。开奖号前三位中包含全部所选号，即为中奖。</p>
                                    </div>
                                    <div class="content">
                                        <span>混合组选</span>
                                        <p>  手动输入一个3位数号码（不含豹子号），其中1个所选号在开奖号前三位中出现2次， 则中组三奖；开奖号前三位中包含全部所选号，且无重复号码出现，则中组六奖。  </p>
                                    </div>

                                    <div class="content">
                                        <span>组选包胆</span>
                                        <p>从0-9中任选1个包胆号码为一注。不限顺序，开奖号前三位中包含所选的包胆号（不含豹子号），即为中奖。</p>
                                    </div>

                                </div>
                            </div>


                            <h3 class="title_n"> 二星 </h3>

                            <div class="right_item">
                                <h4 class="right_item_h4">后二直选 <span class="fa fa-angle-down"></span> </h4>
                                <div class="content_box">
                                    <div class="content">
                                        <span>复式</span>
                                        <p>从十、个位中各选1个号码，所选号与开奖号后二位号码相同，且顺序一致，即为中奖。</p>
                                    </div>
                                    <div class="content">
                                        <span>单式</span>
                                        <p>手动输入1个两位数号码，所选号与开奖号后二位号码相同，且顺序一致，即为中奖。</p>
                                    </div>
                                    <div class="content">
                                        <span>直选和值</span>
                                        <p>从0-18中任选一个号，所选号数值等于开奖号后两位数相加之和，即为中奖。</p>
                                    </div>

                                    <div class="content">
                                        <span>直选跨度</span>
                                        <p>从0-9中任选1个号码组成一注。所选号数值等于开奖号后两位的最大最小数字差值，即为中奖。</p>
                                    </div>
                                    <div class="content">
                                        <span>和值尾数</span>
                                        <p>对开奖号后两位号码相加之和的尾数进行投注，从0-9中任选1个号码为一注。开奖号后两位号码相加之和的尾数与所选号相同，即为中奖。</p>
                                    </div>
                                </div>
                            </div>

                            <div class="right_item">
                                <h4 class="right_item_h4">后二组选 <span class="fa fa-angle-down"></span> </h4>
                                <div class="content_box">
                                    <div class="content">
                                        <span>复式</span>
                                        <p>从0-9中任选2个号码，不限顺序，开奖号后两位数中包含所选号，即为中奖。</p>
                                    </div>
                                    <div class="content">
                                        <span>单式</span>
                                        <p>手动输入1个两位数号码，不限顺序，开奖号后两位数中包含所选号即为中奖。</p>
                                    </div>
                                    <div class="content">
                                        <span>组选包胆</span>
                                        <p>从0-9中任选1个包胆号码为一注。不限顺序，开奖号后两位中包含所选的包胆号（不含对子号），即为中奖。</p>
                                    </div>

                                </div>
                            </div>

                            <div class="right_item">
                                <h4 class="right_item_h4">前二直选 <span class="fa fa-angle-down"></span> </h4>
                                <div class="content_box">
                                    <div class="content">
                                        <span>复式</span>
                                        <p>从万、千位中各选1个号码，所选号与开奖号前二位号码相同，且顺序一致，即为中奖。</p>
                                    </div>
                                    <div class="content">
                                        <span>单式</span>
                                        <p>手动输入1个两位数号码，所选号与开奖号前二位号码相同，且顺序一致，即为中奖。</p>
                                    </div>
                                    <div class="content">
                                        <span>直选和值</span>
                                        <p> 从0-18中任选1个号码，所选号数值等于开奖号前两位数相加之和，即为中奖。 </p>
                                    </div>

                                    <div class="content">
                                        <span>直选跨度</span>
                                        <p>从0-9中任选1个号码组成一注。所选号数值等于开奖号前两位的最大最小数字差值，即为中奖。</p>
                                    </div>

                                    <div class="content">
                                        <span>和值尾数</span>
                                        <p>对开奖号前两位号码相加之和的尾数进行投注，从0-9中任选1个号码为一注。开奖号前两位号码相加之和的尾数与所选号相同，即为中奖。</p>
                                    </div>

                                </div>
                            </div>

                            <div class="right_item">
                                <h4 class="right_item_h4">前二组选 <span class="fa fa-angle-down"></span> </h4>
                                <div class="content_box">
                                    <div class="content">
                                        <span>复式</span>
                                        <p>从0-9中任选2个号码，不限顺序，开奖号前两位数中包含所选号，即为中奖。</p>
                                    </div>
                                    <div class="content">
                                        <span>单式</span>
                                        <p>手动输入1个两位数号码，不限顺序，开奖号前两位数中包含所选号，即为中奖。</p>
                                    </div>

                                    <div class="content">
                                        <span>组选包胆</span>
                                        <p>从0-9中任选1个包胆号码为一注。不限顺序，开奖号前两位中包含所选的包胆号（不含对子号），即为中奖。</p>
                                    </div>

                                </div>
                            </div>

                            <h3 class="title_n"> 不定位 </h3>

                            <div class="right_item">
                                <h4 class="right_item_h4">三星不定位 <span class="fa fa-angle-down"></span> </h4>
                                <div class="content_box">
                                    <div class="content">
                                        <span>后三一码</span>
                                        <p>从0-9中任选1个号码为一注。不限顺序，开奖号后三位号码中包含所选号，即为中奖。</p>
                                    </div>
                                    <div class="content">
                                        <span>中三一码</span>
                                        <p>从0-9中任选1个号码为一注。不限顺序，开奖号中间三位号码中包含所选号，即为中奖。</p>
                                    </div>

                                    <div class="content">
                                        <span>前三一码</span>
                                        <p>从0-9中任选1个号码为一注。不限顺序，开奖号前三位号码中包含所选号，即为中奖。</p>
                                    </div>
                                    <div class="content">
                                        <span>后三二码</span>
                                        <p>从0-9中任选2个号码为一注。不限顺序，开奖号后三位号码中包含所选的2个号码，即为中奖。</p>
                                    </div>
                                    <div class="content">
                                        <span>中三二码</span>
                                        <p>从0-9中任选2个号码为一注。不限顺序，开奖号中间三位号码中包含所选的2个号码，即为中奖。</p>
                                    </div>

                                    <div class="content">
                                        <span>前三二码</span>
                                        <p>从0-9中任选2个号码为一注。不限顺序，开奖号前三位号码中包含所选的2个号码，即为中奖。</p>
                                    </div>

                                </div>
                            </div>

                            <div class="right_item">
                                <h4 class="right_item_h4">四星不定位 <span class="fa fa-angle-down"></span> </h4>
                                <div class="content_box">
                                    <div class="content">
                                        <span>前四一码</span>
                                        <p>从0-9中任选1个号码为一注。不限顺序，开奖号前四位中包含所选号，即为中奖。</p>
                                    </div>
                                    <div class="content">
                                        <span>后四一码</span>
                                        <p>从0-9中任选1个号码为一注。不限顺序，开奖号后四位中包含所选号，即为中奖。</p>
                                    </div>

                                    <div class="content">
                                        <span>前四二码</span>
                                        <p>从0-9中任选2个号码为一注。不限顺序，开奖号前四位中包含所选的二码，即为中奖。</p>
                                    </div>
                                    <div class="content">
                                        <span>后四二码</span>
                                        <p>从0-9中任选2个号码为一注。不限顺序，开奖号后四位中包含所选的二码，即为中奖。</p>
                                    </div>
                                    <div class="content">
                                        <span>前四三码</span>
                                        <p>从0-9中任选3个号码为一注。不限顺序，开奖号前四位中包含所选的三码，即为中奖。</p>
                                    </div>

                                    <div class="content">
                                        <span>后四三码</span>
                                        <p>从0-9中任选3个号码为一注。不限顺序，开奖号前四位中包含所选的三码，即为中奖。</p>
                                    </div>

                                </div>
                            </div>

                            <div class="right_item">
                                <h4 class="right_item_h4">五星不定位 <span class="fa fa-angle-down"></span> </h4>
                                <div class="content_box">
                                    <div class="content">
                                        <span>五星一码</span>
                                        <p>从0-9中任选1个号码为一注。不限顺序，开奖号中包含所选号，即为中奖。</p>
                                    </div>
                                    <div class="content">
                                        <span>五星二码</span>
                                        <p>从0-9中任选2个号码为一注。不限顺序，开奖号中包含所选的二码，即为中奖。</p>
                                    </div>

                                    <div class="content">
                                        <span>五星三码</span>
                                        <p>从0-9中任选3个号码为一注。不限顺序，开奖号中包含所选的三码，即为中奖。</p>
                                    </div>
                                    <div class="content">
                                        <span>五星四码</span>
                                        <p>从0-9中任选4个号码为一注。不限顺序，开奖号中包含所选的四码，即为中奖。</p>
                                    </div>
                                </div>
                            </div>

                            <h3 class="title_n"> 任选 </h3>
                            <div class="right_item">
                                <h4 class="right_item_h4">任二 <span class="fa fa-angle-down"></span> </h4>
                                <div class="content_box">
                                    <div class="content">
                                        <span>复式</span>
                                        <p>从万、千、百、十、个位中的任意两个位置上各选1个号码，所选2个位置上的开奖号与全部所选号相同，且顺序一致，即为中奖。</p>
                                    </div>
                                    <div class="content">
                                        <span>单式</span>
                                        <p>手动勾选任意两个位置，并输入1个两位数号码，所选2个位置上的开奖号与全部输入号相同，且顺序一致，即为中奖。</p>
                                    </div>

                                    <div class="content">
                                        <span>组选</span>
                                        <p>从万、千、百、十、个位中的任意两个位置上各选1个号码，不限顺序，所选2个位置上的开奖号中包含全部所选号，即为中奖。</p>
                                    </div>
                                </div>
                            </div>

                            <div class="right_item">
                                <h4 class="right_item_h4">任三 <span class="fa fa-angle-down"></span> </h4>
                                <div class="content_box">
                                    <div class="content">
                                        <span>复式</span>
                                        <p>从万、千、百、十、个位中的任意三个位置上各选1个号码，所选3个位置上的开奖号与所选号相同，且顺序一致，即为中奖。</p>
                                    </div>
                                    <div class="content">
                                        <span>单式</span>
                                        <p>手动勾选任意三个位置，并输入1个三位数号码，所选3个位置上的开奖号与全部输入号相同，且顺序一致，即为中奖。</p>
                                    </div>

                                    <div class="content">
                                        <span>组三</span>
                                        <p>手动勾选任意三个位置，并从0-9中任选2个号码为两注。不限顺序，所选3个位置上的开奖号中包含全部所选号，且其中一个号码出现两次，即为中奖。</p>
                                    </div>

                                    <div class="content">
                                        <span>组六</span>
                                        <p>手动勾选任意三个位置，并从0-9中任选3个不同的号码为一注。不限顺序，所选3个位置上的开奖号中包含全部所选号，即为中奖。</p>
                                    </div>
                                    <div class="content">
                                        <span>混合组选</span>
                                        <p>勾选任意三个位置，并手动输入1个三位数号码（不含豹子号）为一注。不限顺序，所选3个位置上的开奖号中包含全部输入号，且其中一个号码出现2次，则中组三奖；不限顺序，所选3个位置上的开奖号与全部输入号相同，则中组六奖。</p>
                                    </div>
                                </div>
                            </div>

                            <div class="right_item">
                                <h4 class="right_item_h4">任四 <span class="fa fa-angle-down"></span> </h4>
                                <div class="content_box">
                                    <div class="content">
                                        <span>复式</span>
                                        <p>从万、千、百、十、个位中任意4个位置上各选1个号码，所选4个位置上的开奖号与全部所选号相同，且顺序一致，即为中奖。</p>
                                    </div>
                                    <div class="content">
                                        <span>单式</span>
                                        <p>手动输入1位四位数号码，并勾选4个位置，所选4个位置上的开奖号与全部输入号相同，且顺序一致，即为中奖。</p>
                                    </div>
                                </div>
                            </div>

                            <h3 class="title_n"> 趣味 </h3>

                            <div class="right_item">
                                <h4 class="right_item_h4">特殊 <span class="fa fa-angle-down"></span> </h4>
                                <div class="content_box">
                                    <div class="content">
                                        <span>一帆风顺</span>
                                        <p>从0-9中任选1个号码，不限顺序，开奖号中包含所选号，即为中奖。</p>
                                    </div>
                                    <div class="content">
                                        <span>好事成双</span>
                                        <p>从0-9中任选1个二重号，所选号在开奖号中出现2次，即为中奖。</p>
                                    </div>

                                    <div class="content">
                                        <span>三星报喜</span>
                                        <p>从0-9中任选1个三重号，所选号在开奖号中出现3次，即为中奖。</p>
                                    </div>

                                    <div class="content">
                                        <span>四季发财</span>
                                        <p>从0-9中任选1个四重号，所选号在开奖号中出现4次，即为中奖。</p>
                                    </div>

                                </div>
                            </div>

                            <div class="right_item">
                                <h4 class="right_item_h4">龙虎 <span class="fa fa-angle-down"></span> </h4>
                                <div class="content_box">
                                    <div class="content">
                                        <span>万千</span>
                                        <p>根据万位和千位的数字比大小，万位号码大于千位号码则为龙，小于则为虎，相同则为和。</p>
                                    </div>
                                    <div class="content">
                                        <span>万百</span>
                                        <p>根据万位和百位的数字比大小，万位号码大于百位号码则为龙，小于则为虎，相同则为和。</p>
                                    </div>
                                    <div class="content">
                                        <span>万十</span>
                                        <p>根据万位和十位的数字比大小，万位号码大于十位号码则为龙，小于则为虎，相同则为和。</p>
                                    </div>

                                    <div class="content">
                                        <span>万个</span>
                                        <p>根据万位和个位的数字比大小，万位号码大于个位号码则为龙，小于则为虎，相同则为和。</p>
                                    </div>
                                    <div class="content">
                                        <span>千百</span>
                                        <p>根据千位和百位的数字比大小，千位号码大于百位号码则为龙，小于则为虎，相同则为和。</p>
                                    </div>
                                    <div class="content">
                                        <span>千十</span>
                                        <p>根据千位和十位的数字比大小，千位号码大于十位号码则为龙，小于则为虎，相同则为和。</p>
                                    </div>
                                    <div class="content">
                                        <span>千个</span>
                                        <p>根据千位和个位的数字比大小，千位号码大于个位号码则为龙，小于则为虎，相同则为和。</p>
                                    </div>
                                    <div class="content">
                                        <span>百十</span>
                                        <p>根据百位和十位的数字比大小，百位号码大于十位号码则为龙，小于则为虎，相同则为和。</p>
                                    </div>
                                    <div class="content">
                                        <span>百个</span>
                                        <p>根据百位和个位的数字比大小，百位号码大于个位号码则为龙，小于则为虎，相同则为和。</p>
                                    </div>
                                    <div class="content">
                                        <span>十个</span>
                                        <p>根据十位和个位的数字比大小，十位号码大于个位号码则为龙，小于则为虎，相同则为和。</p>
                                    </div>


                                </div>
                            </div>

                            <h3 class="title_n"> 大小单双 </h3>
                            <div class="right_item">
                                <h4 class="right_item_h4">总和<span class="fa fa-angle-down"></span> </h4>
                                <div class="content_box">
                                    <div class="content">
                                        <span>总和</span>
                                        <p>对5个开奖号相加之和的大（0~23）、小（0~22）、单（总和值为单）、双（总和值为双）进行投注，任选1个形态为一注。所选形态与开奖号5个号码相加之和相同，即为中奖。</p>
                                    </div>
                                </div>
                            </div>
                            <div class="right_item">
                                <h4 class="right_item_h4">定位<span class="fa fa-angle-down"></span> </h4>
                                <div class="content_box">
                                    <div class="content">
                                        <span>万位</span>
                                        <p>对开奖号的万位进行大（5~9）、小（0~4）、单、双进行投注，任选1个形态为一注。所选形态与开奖号的万位号码形态相同，即为中奖。</p>
                                    </div>

                                    <div class="content">
                                        <span>千位</span>
                                        <p>对开奖号的千位进行大（5~9）、小（0~4）、单、双进行投注，任选1个形态为一注。所选形态与开奖号的千位号码形态相同，即为中奖。</p>
                                    </div>

                                    <div class="content">
                                        <span>百位</span>
                                        <p>对开奖号的百位进行大（5~9）、小（0~4）、单、双进行投注，任选1个形态为一注。所选形态与开奖号的百位号码形态相同，即为中奖。</p>
                                    </div>

                                    <div class="content">
                                        <span>十位</span>
                                        <p>对开奖号的十位进行大（5~9）、小（0~4）、单、双进行投注，任选1个形态为一注。所选形态与开奖号的十位号码形态相同，即为中奖。</p>
                                    </div>

                                    <div class="content">
                                        <span>个位</span>
                                        <p>对开奖号的个位进行大（5~9）、小（0~4）、单、双进行投注，任选1个形态为一注。所选形态与开奖号的个位号码形态相同，即为中奖。</p>
                                    </div>

                                </div>
                            </div>

                            <div class="right_item">
                                <h4 class="right_item_h4">串关<span class="fa fa-angle-down"></span> </h4>
                                <div class="content_box">
                                    <div class="content">
                                        <span>串关</span>
                                        <p>对5个开奖号的大（5~9）、小（0~4）、单、双进行投注，任选1个形态为一注。所选位置及形态与开奖号的位置及形态相同，即为中奖。注：如当次所选的位置及形态有多个，则须与开奖号位置及形态全部相同，只中任意一个位置或形态均不算中奖。</p>
                                    </div>
                                </div>
                            </div>

                            <h3 class="title_n"> 特殊号 </h3>
                            <div class="right_item">
                                <h4 class="right_item_h4">特殊号<span class="fa fa-angle-down"></span> </h4>
                                <div class="content_box">
                                    <div class="content">
                                        <span>前三</span>
                                        <p>对开奖号前三位的号码形态进行投注，任选1个形态组成一注。不限顺序，开奖号前三位的号码形态与所选形态相同，即为中奖。
                                            中奖顺序：豹子（3个号码相同）&gt;顺子（3个号码相连）&gt;对子（3个号码中任意2个号码相同）&gt;半顺（3个号码中任意2个号码相连）&gt;杂六（不含豹子、顺子、对子、半顺的号码，即3个号码之间无关联性）</p>
                                    </div>

                                    <div class="content">
                                        <span>中三</span>
                                        <p>
                                            对开奖号中间三位号码的形态进行投注，任选1个形态组成一注。不限顺序，开奖号中间三位的号码形态与所选形态相同，即为中奖。
                                            中奖顺序：豹子（3个号码相同）&gt;顺子（3个号码相连）&gt;对子（3个号码中任意2个号码相同）&gt;半顺（3个号码中任意2个号码相连）&gt;杂六（不含豹子、顺子、对子、半顺的号码，即3个号码之间无关联性）</p>
                                    </div>

                                    <div class="content">
                                        <span>后三</span>
                                        <p> 对开奖号后三位号码的形态进行投注，任选1个形态组成一注。不限顺序，开奖号后三位的号码形态与所选形态相同，即为中奖。
                                            中奖顺序：豹子（3个号码相同）&gt;顺子（3个号码相连）&gt;对子（3个号码中任意2个号码相同）&gt;半顺（3个号码中任意2个号码相连）&gt;杂六（不含豹子、顺子、对子、半顺的号码，即3个号码之间无关联性）</p>
                                    </div>
                                </div>
                            </div>

                            <h3 class="title_n"> 定位胆 </h3>
                            <div class="right_item">
                                <h4 class="right_item_h4">定位胆<span class="fa fa-angle-down"></span> </h4>
                                <div class="content_box">
                                    <div class="content">
                                        <span>定位胆</span>
                                        <p> 从十、个位中各选1个号码，所选号与开奖号后二位号码相同，且顺序一致，即为中奖。</p>
                                    </div>
                                </div>
                            </div>

                            <h3 class="title_n"> 斗牛 </h3>
                            <div class="right_item">
                                <h4 class="right_item_h4">斗牛<span class="fa fa-angle-down"></span> </h4>
                                <div class="content_box">
                                    <div class="content">
                                        <span>斗牛</span>
                                        <p> 从牛牛、无牛、牛一~牛九中任选1个为一注。5个开奖号任意3个号码相加为10的整数或倍数（0为10）即为有牛，剩余2个号码相加的和值数即为牛几。所选形态与开奖形态相同，即为中奖。
                                            如，开奖号：5 6 9 3 7, 5个号码相加之和为10的倍数，为牛牛；开奖号：2 2 3 8 1, 开奖号任意3个号码相加无法组成10的倍数，即无牛；开奖号：9 9 2 5 3，任意3个号码（2+8+5或9+9+2）为10的整数，任意2个号码（9+9或5+3）相加为8，即为牛八。 </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
                <!-- 快3 -->
                <div>
                    <div class="switch_tab_swiper_1">
                        <button class="current">彩种介绍</button>
                        <button>玩法规则</button>
                        <i class="switch_tab_swiper_i_1"></i>
                    </div>

                    <div class="cont_main_1">
                        <div class="cont_left active">
                            <div class="timing">
                                <h2 class="topic"> <span class="fa fa-clock-o"></span>开奖时间</h2>
                                <div class="time">
                                    安徽快三:
                                    <p>8:50-22:00，每10分钟一期，全天80期</p>
                                </div>
                                <div class="time">
                                    吉林快三:
                                    <p>8:33-21:30，每9分钟一期，全天87期</p>
                                </div>
                                <div class="time">
                                    广西快三:
                                    <p>9:38-22:28，每10分钟一期，全天78期</p>
                                </div>
                                <div class="time">
                                    湖北快三:
                                    <p>9:10-22:00，每10分钟一期，全天78期</p>
                                </div>

                            </div>
                            <div class="intro">
                                <h2>  <span class="fa fa-file-text"> </span>玩法简介</h2>

                                <div class="list">
                                    <div class="item">
                                        <span>1.</span>
                                        <p>快3投注是指以三个号码组合为一注进行单式投注，每个投注号码为1-6共六个自然数中的任意一个，一组三个号码的组合称为一注。</p>
                                    </div>
                                </div>
                                <div class="list">
                                    <div class="item">
                                        <span>2.</span>
                                        <p>每期从3粒骰子的点数中随机开出3个号码作为开奖号。</p>
                                    </div>
                                </div>
                                <div class="list">
                                    <div class="item">
                                        <span>3.</span>
                                        <p>快3根据号码组合共分为“和值”、“三同号”、“二同号”、“三不同号”、“二不同号”、“三连号通选”投注方式，具体规定如下：</p>
                                    </div>
                                    <div class="children">
                                        <div class="item">
                                                <span>
                                                    <i class="fa fa-hand-o-right"></i>
                                                </span>
                                            <p> 和值投注：是指对三个号码的和值进行投注，包括“和值4”至“和值17”投注。</p>
                                        </div>
                                        <!---->
                                    </div>
                                    <div class="children">
                                        <div class="item">
                                                <span>
                                                    <i class="fa fa-hand-o-right"></i>
                                                </span>
                                            <p> 三同号投注：是指对三个相同的号码进行投注，具体分为：</p>

                                        </div>
                                        <div style="padding-left:0.5rem; font-size:0.27rem;line-height:0.4rem;color:#333;margin-bottom:0.2rem;">○  三同号通选：是指对所有相同的三个号码（111、222、…、666）进行投注；</div>
                                        <div style="padding-left:0.5rem; font-size:0.27rem;line-height:0.4rem;color:#333;margin-bottom:0.2rem;">○  三同号单选：是指从所有相同的三个号码（111、222、…、666）中任意选择一组号码进行投注。</div>
                                        <!---->
                                    </div>
                                    <div class="children">
                                        <div class="item">
                                                <span>
                                                    <i class="fa fa-hand-o-right"></i>
                                                </span>
                                            <p> 二同号投注：是指对两个指定的相同号码进行投注，具体分为：</p>
                                        </div>
                                        <div style="padding-left:0.5rem; font-size:0.27rem;line-height:0.4rem;color:#333;margin-bottom:0.2rem;">○  二同号复选：是指对三个号码中两个指定的相同号码和一个任意号码进行投注；</div>
                                        <div style="padding-left:0.5rem; font-size:0.27rem;line-height:0.4rem;color:#333;margin-bottom:0.2rem;">○  二同号单选：是指对三个号码中两个指定的相同号码和一个指定的不同号码进行投注。</div>
                                        <!---->
                                    </div>
                                    <div class="children">
                                        <div class="item">
                                                <span>
                                                    <i class="fa fa-hand-o-right"></i>
                                                </span>
                                            <p> 三不同号投注：是指对三个各不相同的号码进行投注。</p>
                                        </div>
                                        <!---->
                                    </div>
                                    <div class="children">
                                        <div class="item">
                                                <span>
                                                    <i class="fa fa-hand-o-right"></i>
                                                </span>
                                            <p> 二不同号投注：是指对三个号码中两个指定的不同号码和一个任意号码进行投注。</p>

                                        </div>
                                        <!---->
                                    </div>
                                    <div class="children">
                                        <div class="item">
                                                <span>
                                                    <i class="fa fa-hand-o-right"></i>
                                                </span>
                                            <p> 三连号通选投注：是指对所有三个相连的号码（仅限：123、234、345、456）进行投注。</p>
                                        </div>
                                        <!---->
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div class="cont_right">
                            <h3 class="title_n"> 二不同号 </h3>
                            <div class="right_item">
                                <h4 class="right_item_h4">二不同号 <span class="fa fa-angle-down"></span> </h4>
                                <div class="content_box">
                                    <div class="content">
                                        <span>二不同号</span>
                                        <p>从二同号和不同号中各选1个号码组成一注。不限顺序，开奖号中包含全部所选号，即为中奖。</p>
                                    </div>
                                </div>
                            </div>
                            <h3 class="title_n"> 二同号 </h3>
                            <div class="right_item">
                                <h4 class="right_item_h4">二同号 <span class="fa fa-angle-down"></span> </h4>
                                <div class="content_box">
                                    <div class="content">
                                        <span>单选</span>
                                        <p>从二同号和不同号中各选1个号码组成一注。不限顺序，开奖号中包含全部所选号，即为中奖。</p>
                                    </div>

                                    <div class="content">
                                        <span>复选</span>
                                        <p>从6组对子中任选1个对子号码组成一注。不含豹子，开奖号中包含所选对子，即为中奖。</p>
                                    </div>
                                </div>
                            </div>
                            <h3 class="title_n"> 三不同号 </h3>
                            <div class="right_item">
                                <h4 class="right_item_h4">三不同号 <span class="fa fa-angle-down"></span> </h4>
                                <div class="content_box">
                                    <div class="content">
                                        <span>三不同号</span>
                                        <p>从1-6中任选3个不相同的号码组成一注。不限顺序，所选号与开奖号相同，即为中奖。</p>
                                    </div>
                                </div>
                            </div>
                            <h3 class="title_n"> 三同号 </h3>
                            <div class="right_item">
                                <h4 class="right_item_h4">三同号 <span class="fa fa-angle-down"></span> </h4>
                                <div class="content_box">
                                    <div class="content">
                                        <span>单选</span>
                                        <p>选任意一组号码组成一注。所选号与开奖号相同，即为中奖。</p>
                                    </div>

                                    <div class="content">
                                        <span>复选</span>
                                        <p>对6组豹子号码进行通选投注。开奖号与6组豹子号中任意一组号码相同，即为中奖。</p>
                                    </div>
                                </div>
                            </div>
                            <h3 class="title_n"> 三连号-通选 </h3>
                            <div class="right_item">
                                <h4 class="right_item_h4">三连号-通选 <span class="fa fa-angle-down"></span> </h4>
                                <div class="content_box">
                                    <div class="content">
                                        <span>三连号-通选</span>
                                        <p>对4组三连号进行通选投注。开奖号与4组三连号中任意一组号码相同，即为中奖。</p>
                                    </div>
                                </div>
                            </div>

                            <h3 class="title_n">和值 </h3>
                            <div class="right_item">
                                <h4 class="right_item_h4">和值 <span class="fa fa-angle-down"></span> </h4>
                                <div class="content_box">
                                    <div class="content">
                                        <span>和值</span>
                                        <p>从3-18中任选1个号码组成一注。所选号等于开奖号的3个号码相加之和，即为中奖。</p>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
                <!-- 11选5 -->
                <div>
                    <div class="switch_tab_swiper_2">
                        <button class="current">彩种介绍</button>
                        <button>玩法规则</button>
                        <i class="switch_tab_swiper_i_2"></i>
                    </div>

                    <div class="cont_main_2">
                        <div class="cont_left active">
                            <div class="timing">
                                <h2 class="topic"> <span class="fa fa-clock-o"></span>开奖时间</h2>
                                <div class="time">
                                    山东11选5:
                                    <p>8:31-22:11，每10分钟一期，全天78期</p>
                                </div>
                                <div class="time">
                                    上海11选5:
                                    <p>9:00-23:50，每10分钟一期，全天90期</p>
                                </div>
                                <div class="time">
                                    江西11选5:
                                    <p>9:10-23:00，每10分钟一期，全天84期</p>
                                </div>
                                <div class="time">
                                    广东11选5:
                                    <p>9:11-23:01，每10分钟一期，全天84期</p>
                                </div>
                                <div class="time">
                                    安徽11选5:
                                    <p>8:42-22:02，每10分钟一期，全天81期</p>
                                </div>
                            </div>
                            <div class="intro">
                                <h2>  <span class="fa fa-file-text"> </span>玩法简介</h2>

                                <div class="list">
                                    <div class="item">
                                        <span>1.</span>
                                        <p>11选5号码投注范围01-11，每期开出5个号码作为开奖号，顺序从左至右。</p>
                                    </div>
                                </div>
                                <div class="list">
                                    <div class="item">
                                        <span>2.</span>
                                        <p>11选5玩法即竞猜5位开奖号码的全部或部分号码。</p>
                                    </div>
                                </div>
                                <div class="list">
                                    <div class="item">
                                        <span>3.</span>
                                        <p>直选：将投注号码以惟一的排列方式进行投注。</p>
                                    </div>
                                </div>
                                <div class="list">
                                    <div class="item">
                                        <span>4.</span>
                                        <p>组选：将投注号码的所有排列方式作为一注投注号码进行投注，即号码顺序不限，开奖号中包含投注号码则中奖。示例：前三组选01 02 03，排列方式有01 02 03、01 03 02、02 01 03、02 03 01、03
                                            01 02、03 02 01，共计6种。</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="cont_right">
                            <h3 class="title_n"> 三码 </h3>
                            <div class="right_item">
                                <h4 class="right_item_h4">前三直选 <span class="fa fa-angle-down"></span> </h4>
                                <div class="content_box">
                                    <div class="content">
                                        <span>复式</span>
                                        <p>从第一、二、三位中各选1个不同的号码组成一注。所选号与开奖号前三位号码相同，且顺序一致，即为中奖。</p>
                                    </div>
                                    <div class="content">
                                        <span>单式</span>
                                        <p>手动输入1个三位不同的号码组成一注。输入号与开奖号前三位号码相同，且顺序一致，即为中奖。</p>
                                    </div>
                                </div>
                            </div>
                            <div class="right_item">
                                <h4 class="right_item_h4">前三组选 <span class="fa fa-angle-down"></span> </h4>
                                <div class="content_box">
                                    <div class="content">
                                        <span>复式</span>
                                        <p>从01-11中任选3个不同的号码组成一注。不限顺序，开奖号前三位中包含全部所选号，即为中奖。</p>
                                    </div>
                                    <div class="content">
                                        <span>单式</span>
                                        <p>手动输入1个三位不同的号码组成一注。不限顺序，开奖号前三位号码中包含3个输入号，即为中奖。</p>
                                    </div>
                                </div>
                            </div>

                            <h3 class="title_n"> 二码 </h3>
                            <div class="right_item">
                                <h4 class="right_item_h4">前二直选 <span class="fa fa-angle-down"></span> </h4>
                                <div class="content_box">
                                    <div class="content">
                                        <span>复式</span>
                                        <p>从第一、二位中各选1个不同的号码组成一注。所选号与开奖号前两位号码相同，且顺序一致，即为中奖。</p>
                                    </div>
                                    <div class="content">
                                        <span>单式</span>
                                        <p>手动输入1个两位不同的号码组成一注。输入号与开奖号前两位号码相同，且顺序一致，即为中奖。</p>
                                    </div>
                                </div>
                            </div>
                            <div class="right_item">
                                <h4 class="right_item_h4">前二组选 <span class="fa fa-angle-down"></span> </h4>
                                <div class="content_box">
                                    <div class="content">
                                        <span>复式</span>
                                        <p>从01-11中任选2个不同的号码组成一注。不限顺序，开奖号前两位中包含全部所选号，即为中奖。</p>
                                    </div>
                                    <div class="content">
                                        <span>单式</span>
                                        <p>手动输入1个两位不同的号码组成一注。不限顺序，开奖号前两位中包含2个输入号，即为中奖。</p>
                                    </div>
                                </div>
                            </div>

                            <h3 class="title_n"> 不定胆 </h3>
                            <div class="right_item">
                                <h4 class="right_item_h4">不定胆 <span class="fa fa-angle-down"></span> </h4>
                                <div class="content_box">
                                    <div class="content">
                                        <span>前三位</span>
                                        <p>从01-11中任选1个号码组成一注。不限顺序，开奖号前三位任意一位中包含所选号，即为中奖。</p>
                                    </div>
                                </div>
                            </div>

                            <h3 class="title_n"> 定位胆 </h3>
                            <div class="right_item">
                                <h4 class="right_item_h4">定位胆 <span class="fa fa-angle-down"></span> </h4>
                                <div class="content_box">
                                    <div class="content">
                                        <span>定位胆</span>
                                        <p>从第一位至第五位中任选1个位置，并选1个号码组成一注。投注号与开奖号位置及号码相同，即为中奖。</p>
                                    </div>
                                </div>
                            </div>
                            <h3 class="title_n"> 任选 </h3>
                            <div class="right_item">
                                <h4 class="right_item_h4">任选复式 <span class="fa fa-angle-down"></span> </h4>
                                <div class="content_box">
                                    <div class="content">
                                        <span>一中一</span>
                                        <p>从01-11中任选1个号码组成一注。不限顺序，开奖号中包含1个所选号，即为中奖。</p>
                                    </div>

                                    <div class="content">
                                        <span>二中二</span>
                                        <p>从01-11中任选2个号码组成一注。不限顺序，开奖号中包含2个所选号，即为中奖。</p>
                                    </div>
                                    <div class="content">
                                        <span>三中三</span>
                                        <p>从01-11中任选3个号码组成一注。不限顺序，开奖号中包含3个所选号，即为中奖。</p>
                                    </div>
                                    <div class="content">
                                        <span>四中四</span>
                                        <p>从01-11中任选4个号码组成一注。不限顺序，开奖号中包含4个所选号，即为中奖。</p>
                                    </div>
                                    <div class="content">
                                        <span>五中五</span>
                                        <p>从01-11中任选5个号码组成一注。不限顺序，开奖号中包含全部所选号，即为中奖。</p>
                                    </div>
                                    <div class="content">
                                        <span>六中五</span>
                                        <p>从01-11中任选6个号码组成一注。不限顺序，开奖号中包含6个所选号中的任意5个号码，即为中奖。</p>
                                    </div>

                                    <div class="content">
                                        <span>七中五</span>
                                        <p>从01-11中任选7个号码组成一注。不限顺序，开奖号中包含7个所选号中的任意5个号码，即为中奖。</p>
                                    </div>
                                    <div class="content">
                                        <span>八中五</span>
                                        <p>从01-11中任选8个号码组成一注。不限顺序，开奖号中包含8个所选号中的任意5个号码，即为中奖。</p>
                                    </div>
                                </div>
                            </div>

                            <div class="right_item">
                                <h4 class="right_item_h4">任选单式 <span class="fa fa-angle-down"></span> </h4>
                                <div class="content_box">
                                    <div class="content">
                                        <span>一中一</span>
                                        <p>从01-11中手动输入1个号码组成一注。不限顺序，开奖号中包含1个输入号，即为中奖。</p>
                                    </div>

                                    <div class="content">
                                        <span>二中二</span>
                                        <p>从01-11中手动输入2个号码组成一注。不限顺序，开奖号中包含2个输入号，即为中奖。</p>
                                    </div>
                                    <div class="content">
                                        <span>三中三</span>
                                        <p>从01-11中手动输入3个号码组成一注。不限顺序，开奖号中包含3个输入号，即为中奖。</p>
                                    </div>
                                    <div class="content">
                                        <span>四中四</span>
                                        <p>从01-11中手动输入4个号码组成一注。不限顺序，开奖号中包含4个输入号，即为中奖。</p>
                                    </div>
                                    <div class="content">
                                        <span>五中五</span>
                                        <p>从01-11中手动输入5个号码组成一注。不限顺序，开奖号中包含全部输入号，即为中奖。</p>
                                    </div>
                                    <div class="content">
                                        <span>六中五</span>
                                        <p>从01-11中手动输入6个号码组成一注。不限顺序，开奖号中包含6个输入号中的任意5个号码，即为中奖。</p>
                                    </div>

                                    <div class="content">
                                        <span>七中五</span>
                                        <p>从01-11中手动输入7个号码组成一注。不限顺序，开奖号中包含7个输入号中的任意5个号码，即为中奖。</p>
                                    </div>
                                    <div class="content">
                                        <span>八中五</span>
                                        <p>从01-11中手动输入8个号码组成一注。不限顺序，开奖号中包含8个输入号中的任意5个号码，即为中奖。</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>


                </div>

                <!-- 低频彩 -->
                <div>
                    <div class="switch_tab_swiper_3">
                        <button class="current">彩种介绍</button>
                        <button>玩法规则</button>
                        <i class="switch_tab_swiper_i_3"></i>
                    </div>

                    <div class="cont_main_3">
                        <div class="cont_left active">
                            <div class="timing">
                                <h2 class="topic"> <span class="fa fa-clock-o"></span>开奖时间</h2>
                                <div class="time">
                                    排列三:
                                    <p>一天一期，每天20:30开奖</p>
                                </div>
                                <div class="time">
                                    福彩3D:
                                    <p>一天一期，每天21:15开奖</p>
                                </div>
                            </div>

                            <div class="intro">
                                <h2>  <span class="fa fa-file-text"> </span>玩法简介</h2>

                                <div class="list">
                                    <div class="item">
                                        <span>1.</span>
                                        <p>每期从0-9中随机开出3个号码作为开奖号。</p>
                                    </div>
                                </div>
                                <div class="list">
                                    <div class="item">
                                        <span>2.</span>
                                        <p>玩法分为定位胆、不定胆和排列三，具体玩法说明如下：</p>
                                    </div>
                                    <div class="children">
                                        <div class="item">
                                                <span>
                                                    <i class="fa fa-hand-o-right"></i>
                                                </span>
                                            <p>  定位胆：在任意位置上选1个号码</p>
                                        </div>
                                        <!---->
                                    </div>
                                    <div class="children">
                                        <div class="item">
                                                <span>
                                                    <i class="fa fa-hand-o-right"></i>
                                                </span>
                                            <p>  不定胆 </p>

                                        </div>
                                        <div style="padding-left:0.5rem; font-size:0.27rem;line-height:0.4rem;color:#333;margin-bottom:0.2rem;">○  直选：选择三个数字投注，顺序一致。将投注号码以唯一的排列方式进行投注。</div>
                                        <div style="padding-left:0.5rem; font-size:0.27rem;line-height:0.4rem;color:#333;margin-bottom:0.2rem;">○  组选三：选择三个数字投注，顺序不限，但投注的三位号码有两位相同（对子）。有2个数字相同的3个数字有3种不同的排列方式，即1次投注有3个中奖机会，这种投注方式为组选三。示例：112，排列方式有112、121、211。</div>
                                        <div style="padding-left:0.5rem; font-size:0.27rem;line-height:0.4rem;color:#333;margin-bottom:0.2rem;">○  组选六：选择三个数字投注，顺序不限，且投注的三位号码各不相同。3个不同的数字有6种不同的排列方式，即1次投注有6个中奖机会，这种投注方式为组选六。示例：123，排列方式有123、132、213、231、312、321。</div>
                                        <!---->
                                    </div>


                                </div>
                            </div>
                        </div>

                        <div class="cont_right">
                            <h3 class="title_n"> 三码 </h3>
                            <div class="right_item">
                                <h4 class="right_item_h4">直选 <span class="fa fa-angle-down"></span> </h4>
                                <div class="content_box">
                                    <div class="content">
                                        <span>直选-复式</span>
                                        <p>从第一、二、三位中各选1个不同的号码组成一注。所选号与开奖号前三位号码相同，且顺序一致，即为中奖。</p>
                                    </div>
                                    <div class="content">
                                        <span>直选-和值</span>
                                        <p>从0-27中任选1个号码组成一注。所选号等于开奖号的三个号码相加之和，即为中奖。</p>
                                    </div>
                                </div>
                            </div>
                            <div class="right_item">
                                <h4 class="right_item_h4">组选 <span class="fa fa-angle-down"></span> </h4>
                                <div class="content_box">
                                    <div class="content">
                                        <span>组选-组三</span>
                                        <p>从0-9中任选2个号码组成两注。不限顺序，开奖号中包含全部所选号，且其中一个号码出现2次，即为中奖。</p>
                                    </div>
                                    <div class="content">
                                        <span>组选-组六</span>
                                        <p>从0-9中任选3个号码组成一注。不限顺序，开奖号中包含全部所选号，即为中奖。</p>
                                    </div>

                                    <div class="content">
                                        <span>组选-混合</span>
                                        <p>从第一、二、三位中各选1个不同的号码组成一注。所选号与开奖号前三位号码相同，且顺序一致，即为中奖。</p>
                                    </div>
                                </div>
                            </div>

                            <h3 class="title_n"> 二码 </h3>
                            <div class="right_item">
                                <h4 class="right_item_h4">后二码直选 <span class="fa fa-angle-down"></span> </h4>
                                <div class="content_box">
                                    <div class="content">
                                        <span>复式</span>
                                        <p>从十、个位中各选1个号码组成一注。所选号与开奖号十、个位号码相同，且顺序一致，即为中奖。</p>
                                    </div>
                                    <div class="content">
                                        <span>和值</span>
                                        <p>从0-18中任选1个号码组成一注。所选号等于开奖号十、个位两个号码相加之和，即为中奖。</p>
                                    </div>
                                </div>
                            </div>

                            <div class="right_item">
                                <h4 class="right_item_h4">后二码组选 <span class="fa fa-angle-down"></span> </h4>
                                <div class="content_box">
                                    <div class="content">
                                        <span>复式</span>
                                        <p>从0-9中任选2个号码组成一注。不限顺序，所选号与开奖号十、个位相同，即为中奖。</p>
                                    </div>
                                </div>
                            </div>

                            <div class="right_item">
                                <h4 class="right_item_h4">前二码直选 <span class="fa fa-angle-down"></span> </h4>
                                <div class="content_box">
                                    <div class="content">
                                        <span>复式</span>
                                        <p>从百、十位中各选1个号码组成一注。所选号与开奖号百、十位号码相同，且顺序一致，即为中奖。</p>
                                    </div>
                                    <div class="content">
                                        <span>和值</span>
                                        <p>从0-18中任选1个号码组成一注。所选号等于开奖号百、十位两个号码相加之和，即为中奖。</p>
                                    </div>
                                </div>
                            </div>

                            <div class="right_item">
                                <h4 class="right_item_h4">前二码组选 <span class="fa fa-angle-down"></span> </h4>
                                <div class="content_box">
                                    <div class="content">
                                        <span>复式</span>
                                        <p>从0-9中任选2个号码组成一注。不限顺序，开奖号百、十位中包含全部所选号，即为中奖。</p>
                                    </div>
                                </div>
                            </div>

                            <h3 class="title_n"> 定位胆 </h3>
                            <div class="right_item">
                                <h4 class="right_item_h4">定位胆 <span class="fa fa-angle-down"></span> </h4>
                                <div class="content_box">
                                    <div class="content">
                                        <span>定位胆</span>
                                        <p>任选1个位置并选1个号码组成一注。所选号与相同位置上的开奖号一致，即为中奖。</p>
                                    </div>
                                </div>
                            </div>
                            <h3 class="title_n"> 不定胆 </h3>
                            <div class="right_item">
                                <h4 class="right_item_h4">定位胆 <span class="fa fa-angle-down"></span> </h4>
                                <div class="content_box">
                                    <div class="content">
                                        <span>一码不定胆</span>
                                        <p>从0-9中任选1个号码组成一注。不限顺序，开奖号中包含全部所选号，即为中奖。</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <!-- pk10 -->
                <div>
                    <div class="switch_tab_swiper_4">
                        <button class="current">彩种介绍</button>
                        <button>玩法规则</button>
                        <i class="switch_tab_swiper_i_4"></i>
                    </div>

                    <div class="cont_main_4">
                        <div class="cont_left active">
                            <div class="timing">
                                <h2 class="topic"> <span class="fa fa-clock-o"></span>开奖时间</h2>
                                <div class="time">
                                    北京PK拾:
                                    <p>9:02-23:57，每5分钟一期，全天179期</p>
                                </div>

                                <div class="time">
                                    极速PK拾:
                                    <p>全天24小时不间断开奖，每1分钟一期，全天1440期</p>
                                </div>
                            </div>

                            <div class="intro">
                                <h2>  <span class="fa fa-file-text"> </span>玩法简介</h2>

                                <div class="list">
                                    <div class="item">
                                        <span>1.</span>
                                        <p>每期从01-10中随机开出10个号码作为当期开奖车号，顺序从左至右。</p>
                                    </div>
                                </div>
                                <div class="list">
                                    <div class="item">
                                        <span>2.</span>
                                        <p>PK拾采用排列式玩法。从左至右共有十个投注位置，排列顺序分别为一至十号位置，每个位置可从01-10的自然数中选择一个号码。</p>
                                    </div>
                                </div>
                                <div class="list">
                                    <div class="item">
                                        <span>3.</span>
                                        <p>先选择投注位置个数，投注位置个数最少一个、最多十个，在所选位置上从01-10的自然数中选择一个号码进行投注。</p>
                                    </div>
                                </div>
                                <div class="list">
                                    <div class="item">
                                        <span>4.</span>
                                        <p>若投注位置个数超过两个的，后选位置的投注号码不能与前面所有已选位置的投注号码相同。</p>
                                    </div>
                                </div>

                                <div class="list">
                                    <div class="item">
                                        <span>5.</span>
                                        <p>所选号码按位置顺序排序组成一组号码，该组号码即为一注PK拾投注号码。</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="cont_right">
                            <h3 class="title_n"> 前一 </h3>
                            <div class="right_item">
                                <h4 class="right_item_h4">前一 <span class="fa fa-angle-down"></span> </h4>
                                <div class="content_box">
                                    <div class="content">
                                        <span>前一</span>
                                        <p>从01-10中任选1个号码组成一注。所选号与开奖号第一位相同，即为中奖。</p>
                                    </div>
                                </div>
                            </div>
                            <h3 class="title_n"> 前二 </h3>
                            <div class="right_item">
                                <h4 class="right_item_h4">前二 <span class="fa fa-angle-down"></span> </h4>
                                <div class="content_box">
                                    <div class="content">
                                        <span>前二</span>
                                        <p>从第一位、第二位中各选1个不同的号码组成一注。所选号与开奖号前两位号码相同，且顺序一致，即为中奖。</p>
                                    </div>
                                </div>
                            </div>
                            <h3 class="title_n"> 前三 </h3>
                            <div class="right_item">
                                <h4 class="right_item_h4">前三 <span class="fa fa-angle-down"></span> </h4>
                                <div class="content_box">
                                    <div class="content">
                                        <span>前三</span>
                                        <p>从第一位至第三位中各选1个不同的号码组成一注。所选号与开奖号前三位号码相同，且顺序一致，即为中奖。</p>
                                    </div>
                                </div>
                            </div>

                            <h3 class="title_n"> 定位胆 </h3>
                            <div class="right_item">
                                <h4 class="right_item_h4">定位胆 <span class="fa fa-angle-down"></span> </h4>
                                <div class="content_box">
                                    <div class="content">
                                        <span>定位胆</span>
                                        <p>从任意位置上选1个号码进行投注。所选号与相同位置上的开奖号一致，即为中奖。</p>
                                    </div>
                                </div>
                            </div>

                            <h3 class="title_n"> 冠军和 </h3>
                            <div class="right_item">
                                <h4 class="right_item_h4">冠军和 <span class="fa fa-angle-down"></span> </h4>
                                <div class="content_box">
                                    <div class="content">
                                        <span>和值</span>
                                        <p>从3-19中任选1个号码组成一注。所选号等于开奖号冠、亚军车号相加之和，即为中奖。</p>
                                    </div>
                                </div>
                            </div>

                            <h3 class="title_n"> 龙虎 </h3>
                            <div class="right_item">
                                <h4 class="right_item_h4">龙虎 <span class="fa fa-angle-down"></span> </h4>
                                <div class="content_box">
                                    <div class="content">
                                        <span>冠军</span>
                                        <p>对冠军车号大于第十名车号为龙，小则为虎进行投注，任选1个形态为一注。所选形态与开奖号的冠军车号大于或小于第十名的形态相同，即为中奖。</p>
                                    </div>
                                    <div class="content">
                                        <span>亚军</span>
                                        <p>对亚军车号大于第九名车号为龙，小则为虎进行投注，任选1个形态为一注。所选形态与开奖号的亚军车号大于或小于第九名的形态相同，即为中奖。</p>
                                    </div>
                                    <div class="content">
                                        <span>季军</span>
                                        <p>对季军车号大于第八名车号为龙，小则为虎进行投注，任选1个形态为一注。所选形态与开奖号的季军车号大于或小于第八名的形态相同，即为中奖。</p>
                                    </div>
                                    <div class="content">
                                        <span>第四名</span>
                                        <p>对第四名车号大于第七名车号为龙，小则为虎进行投注，任选1个形态为一注。所选形态与开奖号的第四名车号大于或小于第七名的形态相同，即为中奖。</p>
                                    </div>
                                    <div class="content">
                                        <span>第五名</span>
                                        <p>对第五名车号大于第六名车号为龙，小则为虎进行投注，任选1个形态为一注。所选形态与开奖号的第五名车号大于或小于第六名的形态相同，即为中奖。</p>
                                    </div>
                                </div>
                            </div>

                            <h3 class="title_n"> 五行 </h3>
                            <div class="right_item">
                                <h4 class="right_item_h4">五行 <span class="fa fa-angle-down"></span> </h4>
                                <div class="content_box">
                                    <div class="content">
                                        <span>冠军</span>
                                        <p>对开奖号冠军号码所属的五行进行投注，任选一个组合为一注。开奖号冠军号码在所选五行的范围内，即为中奖。金：01 02，木：03 04，水：05 06，火：07 08，土：09 10。</p>
                                    </div>
                                    <div class="content">
                                        <span>亚军</span>
                                        <p>对开奖号亚军号码所属的五行进行投注，任选一个组合为一注。开奖号亚军号码在所选五行的范围内，即为中奖。金：01 02，木：03 04，水：05 06，火：07 08，土：09 10。</p>
                                    </div>
                                    <div class="content">
                                        <span>季军</span>
                                        <p>对开奖号季军号码所属的五行进行投注，任选一个组合为一注。开奖号季军号码在所选五行的范围内，即为中奖。金：01 02，木：03 04，水：05 06，火：07 08，土：09 10。</p>
                                    </div>
                                </div>
                            </div>
                            <h3 class="title_n"> 大小单双 </h3>
                            <div class="right_item">
                                <h4 class="right_item_h4">大小单双 <span class="fa fa-angle-down"></span> </h4>
                                <div class="content_box">
                                    <div class="content">
                                        <span>冠亚季军</span>
                                        <p>对开奖号冠、亚、季军的车号大（06~10）小（01~05）单双进行投注。所选形态与相同位置上的开奖号形态一致，即为中奖。</p>
                                    </div>
                                    <div class="content">
                                        <span>冠亚和</span>
                                        <p>对冠、亚军车号相加之和的大（12~19）小（3~11）单双进行投注，任选一个形态为一注。所选形态符合开奖号冠、亚军车号相加之和的形态，即为中奖。</p>
                                    </div>

                                </div>
                            </div>



                        </div>
                    </div>
                </div>
                <!-- PC蛋蛋 -->
                <div>
                    <div class="switch_tab_swiper_5">
                        <button class="current">彩种介绍</button>
                        <button>玩法规则</button>
                        <i class="switch_tab_swiper_i_5"></i>
                    </div>

                    <div class="cont_main_5">
                        <div class="cont_left active">
                            <div class="timing">
                                <h2 class="topic"> <span class="fa fa-clock-o"></span>开奖时间</h2>
                                <div class="time">
                                    北京28:
                                    <p>9:05-23:55，每5分钟一期，全天179期</p>
                                </div>

                                <div class="time">
                                    幸运28:
                                    <p>08:00-06:00（次日），每2分钟一期，全天660期（06:00-08:00期间不开奖）</p>
                                </div>

                            </div>

                            <div class="intro">
                                <h2>  <span class="fa fa-file-text"> </span>玩法简介</h2>

                                <div class="list">
                                    <div class="item">
                                        <span>1.</span>
                                        <p>投注号码竞猜范围为0-27，共28个号码。每期开出3个号码作为开奖号码，3个号码之和即为特码。</p>
                                    </div>
                                </div>
                                <div class="list">
                                    <div class="item">
                                        <span>2.</span>
                                        <p>玩法分为：豹子、混合、波色、特码和特码包三。</p>
                                    </div>
                                </div>
                                <div class="list">
                                    <div class="item">
                                        <span>3.</span>
                                        <p>混合：指对开奖特码的形态进行投注，形态号码如下</p>
                                    </div>
                                    <div class="children">
                                        <div class="item">
                                                <span>
                                                    <i class="fa fa-hand-o-right"></i>
                                                </span>
                                            <p>大小: 14~21为大，6~13为小</p>
                                        </div>
                                    </div>
                                    <div class="children">
                                        <div class="item">
                                                <span>
                                                    <i class="fa fa-hand-o-right"></i>
                                                </span>
                                            <p>极大小: 22~27为极大，0~5为极小</p>
                                        </div>
                                    </div>
                                    <div class="children">
                                        <div class="item">
                                                <span>
                                                    <i class="fa fa-hand-o-right"></i>
                                                </span>
                                            <p>大单: 15、17、19、21、23、25、27</p>
                                        </div>
                                    </div>
                                    <div class="children">
                                        <div class="item">
                                                <span>
                                                    <i class="fa fa-hand-o-right"></i>
                                                </span>
                                            <p>大双: 14、16、18、20、22、24、26</p>
                                        </div>
                                    </div>
                                    <div class="children">
                                        <div class="item">
                                                <span>
                                                    <i class="fa fa-hand-o-right"></i>
                                                </span>
                                            <p>小单: 1、3、5、7、9、11、13</p>
                                        </div>
                                    </div>
                                    <div class="children">
                                        <div class="item">
                                                <span>
                                                    <i class="fa fa-hand-o-right"></i>
                                                </span>
                                            <p>小双: 0、2、4、6、8、10、12</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="list">
                                    <div class="item">
                                        <span>4.</span>
                                        <p>波色：指对开奖特码的波色进行投注，波色号码如下：</p>
                                    </div>
                                    <div class="children">
                                        <div class="item">
                                                <span>
                                                    <i class="fa fa-hand-o-right"></i>
                                                </span>
                                            <p>绿波号码: 1、4、7、10、16、19、22、25</p>
                                        </div>
                                    </div>
                                    <div class="children">
                                        <div class="item">
                                                <span>
                                                    <i class="fa fa-hand-o-right"></i>
                                                </span>
                                            <p>蓝波号码: 2、5、8、11、17、20、23、26</p>
                                        </div>
                                    </div>
                                    <div class="children">
                                        <div class="item">
                                                <span>
                                                    <i class="fa fa-hand-o-right"></i>
                                                </span>
                                            <p>红波号码: 3、6、9、12、15、18、21、24</p>
                                        </div>
                                    </div>
                                    <div class="children">
                                        <div class="item">
                                                <span>
                                                    <i class="fa fa-hand-o-right"></i>
                                                </span>
                                            <p>灰波号码: 0、13、14、27（若开出灰波号码，则投注任何波色均视为不中奖。）</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div class="cont_right">
                            <h3 class="title_n"> 混色 </h3>
                            <div class="right_item">
                                <h4 class="right_item_h4">混色 <span class="fa fa-angle-down"></span> </h4>
                                <div class="content_box">
                                    <div class="content">
                                        <span>混色</span>
                                        <p>对特码的大（14-27）、小（0-13）、单、双、极大（22-27）、极小（0-5）形态进行投注，任选1个形态组成一注。所选形态与开奖特码的形态相同，即为中奖。</p>
                                    </div>
                                </div>
                            </div>

                            <h3 class="title_n"> 波色 </h3>
                            <div class="right_item">
                                <h4 class="right_item_h4">波色 <span class="fa fa-angle-down"></span> </h4>
                                <div class="content_box">
                                    <div class="content">
                                        <span>波色</span>
                                        <p>对开奖特码的波色进行投注，任选1个波色组成一注。所选波色与开奖特码波色相同，即为中奖。如开出灰波（0、13、14、27）则投注任何波色均视为不中奖。</p>
                                    </div>
                                </div>
                            </div>
                            <h3 class="title_n"> 豹子 </h3>
                            <div class="right_item">
                                <h4 class="right_item_h4">豹子 <span class="fa fa-angle-down"></span> </h4>
                                <div class="content_box">
                                    <div class="content">
                                        <span>豹子</span>
                                        <p>投注当期的3个开奖号为豹子号码。3个开奖号码为同一号码，即为中奖。</p>
                                    </div>
                                </div>
                            </div>
                            <h3 class="title_n"> 特码包三 </h3>
                            <div class="right_item">
                                <h4 class="right_item_h4">特码包三 <span class="fa fa-angle-down"></span> </h4>
                                <div class="content_box">
                                    <div class="content">
                                        <span>特码包三</span>
                                        <p>对开奖特码进行投注，任选3个号码组成一注。所选的3个号码中任一号码与开奖特码相同，即为中奖。</p>
                                    </div>
                                </div>
                            </div>
                            <h3 class="title_n"> 特码 </h3>
                            <div class="right_item">
                                <h4 class="right_item_h4">特码 <span class="fa fa-angle-down"></span> </h4>
                                <div class="content_box">
                                    <div class="content">
                                        <span>特码</span>
                                        <p>对开奖特码进行投注，任选1个号码组成一注。所选号与开奖特码相同，即为中奖。</p>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
                <!-- 六合彩 -->
                <div>
                    <div class="switch_tab_swiper_6">
                        <button class="current">彩种介绍</button>
                        <button>玩法规则</button>
                        <i class="switch_tab_swiper_i_6"></i>
                    </div>

                    <div class="cont_main_6">
                        <div class="cont_left active">
                            <div class="timing">
                                <h2 class="topic"> <span class="fa fa-clock-o"></span>开奖时间</h2>
                                <div class="time">
                                    香港六合彩:
                                    <p>每周开奖3期，通常于周二、周四及非赛马日的周六或周日21:35开奖</p>
                                </div>

                                <div class="time">
                                    极速六合彩:
                                    <p>每5分钟一期，24小时不间断开奖，全天开奖288期</p>
                                </div>

                            </div>

                            <div class="intro">
                                <h2>  <span class="fa fa-file-text"> </span>玩法简介</h2>

                                <div class="list">
                                    <div class="item">
                                        <span>1.</span>
                                        <p>每期从01-49中随机开出7个号码，首6个号码为：正码，第7个号码为：特码。</p>
                                    </div>
                                </div>

                                <div class="list">
                                    <div class="item">
                                        <span>2.</span>
                                        <p>具体规则说明如下：</p>
                                    </div>

                                    <div class="children">
                                        <div class="item">
                                                <span>
                                                    <i class="fa fa-hand-o-right"></i>
                                                </span>
                                            <p>  特码大小单双 </p>

                                        </div>
                                        <div style="padding-left:0.5rem; font-size:0.27rem;line-height:0.4rem;color:#333;margin-bottom:0.2rem;">○  特大:开出的特码在25~48范围内。</div>
                                        <div style="padding-left:0.5rem; font-size:0.27rem;line-height:0.4rem;color:#333;margin-bottom:0.2rem;">○  特小:开出的特码在01~24范围内。</div>
                                        <div style="padding-left:0.5rem; font-size:0.27rem;line-height:0.4rem;color:#333;margin-bottom:0.2rem;">○  特双:特码为双数，如18、20、34、42。</div>
                                        <div style="padding-left:0.5rem; font-size:0.27rem;line-height:0.4rem;color:#333;margin-bottom:0.2rem;">○  特单:特码为单数，如01、11、35、47。</div>
                                        <div style="padding-left:0.5rem; font-size:0.27rem;line-height:0.4rem;color:#333;margin-bottom:0.2rem;">○  和局:特码为49。</div>
                                        <!---->
                                    </div>
                                    <div class="children">
                                        <div class="item">
                                                <span>
                                                    <i class="fa fa-hand-o-right"></i>
                                                </span>
                                            <p>   特码合数大小单双 </p>

                                        </div>
                                        <div style="padding-left:0.5rem; font-size:0.27rem;line-height:0.4rem;color:#333;margin-bottom:0.2rem;">○  合大:指特码的个位加上十位之和大于等于7，如26、45、36。</div>
                                        <div style="padding-left:0.5rem; font-size:0.27rem;line-height:0.4rem;color:#333;margin-bottom:0.2rem;">○  合小:指特码的个位与十位相加之和小于等于6，如30、14、22。</div>
                                        <div style="padding-left:0.5rem; font-size:0.27rem;line-height:0.4rem;color:#333;margin-bottom:0.2rem;">○  合双:指指特码的个位加上十位之和为“双数”，如02、11、33、44。</div>
                                        <div style="padding-left:0.5rem; font-size:0.27rem;line-height:0.4rem;color:#333;margin-bottom:0.2rem;">○  合单:指特码的个位加上十位之和为“单数”，如01、14、36、47。</div>
                                        <div style="padding-left:0.5rem; font-size:0.27rem;line-height:0.4rem;color:#333;margin-bottom:0.2rem;">○  和局:当期开出的特码为49时，视为和局，自动返还投注本金。</div>
                                        <!---->
                                    </div>
                                    <div class="children">
                                        <div class="item">
                                                <span>
                                                    <i class="fa fa-hand-o-right"></i>
                                                </span>
                                            <p>    特码尾数大小 </p>

                                        </div>
                                        <div style="padding-left:0.5rem; font-size:0.27rem;line-height:0.4rem;color:#333;margin-bottom:0.2rem;">○  特尾大:5尾~9尾为大，如05、18、19。</div>
                                        <div style="padding-left:0.5rem; font-size:0.27rem;line-height:0.4rem;color:#333;margin-bottom:0.2rem;">○  特尾小:0尾~4尾为小，如01、32、44。</div>
                                        <div style="padding-left:0.5rem; font-size:0.27rem;line-height:0.4rem;color:#333;margin-bottom:0.2rem;">○  和局:当期开出的特码为49时，视为和局，自动返还投注本金。</div>
                                    </div>

                                    <div class="children">
                                        <div class="item">
                                                <span>
                                                    <i class="fa fa-hand-o-right"></i>
                                                </span>
                                            <p>     总和大小单双 </p>

                                        </div>
                                        <div style="padding-left:0.5rem; font-size:0.27rem;line-height:0.4rem;color:#333;margin-bottom:0.2rem;">○  总和大:当期开奖号码的7个号码相加之和大于或等于175。</div>
                                        <div style="padding-left:0.5rem; font-size:0.27rem;line-height:0.4rem;color:#333;margin-bottom:0.2rem;">○  总和小:当期开奖号码的7个号码相加之和小于或等于174。</div>
                                        <div style="padding-left:0.5rem; font-size:0.27rem;line-height:0.4rem;color:#333;margin-bottom:0.2rem;">○  总和单:当期开奖号码的7个号码相加之和为奇数。</div>
                                        <div style="padding-left:0.5rem; font-size:0.27rem;line-height:0.4rem;color:#333;margin-bottom:0.2rem;">○  总和双:当期开奖号码的7个号码相加之和为偶数。</div>
                                    </div>
                                    <div class="children">
                                        <div class="item">
                                                <span>
                                                    <i class="fa fa-hand-o-right"></i>
                                                </span>
                                            <p>      生肖，顺序为 鼠 &gt;牛 &gt;虎 &gt;兔 &gt;龙 &gt;蛇 &gt;马 &gt;羊 &gt;猴 &gt;鸡 &gt;狗 &gt;猪 ，如今年是鸡年，则以鸡开始，依顺序将49个号码分为12个生肖，具体如下： </p>

                                        </div>
                                        <div style="padding-left:0.5rem; font-size:0.27rem;line-height:0.4rem;color:#333;margin-bottom:0.2rem;">○  鸡:01、13、25、37、49</div>
                                        <div style="padding-left:0.5rem; font-size:0.27rem;line-height:0.4rem;color:#333;margin-bottom:0.2rem;">○  猴:02、14、26、38</div>
                                        <div style="padding-left:0.5rem; font-size:0.27rem;line-height:0.4rem;color:#333;margin-bottom:0.2rem;">○  羊:03、15、27、39</div>
                                        <div style="padding-left:0.5rem; font-size:0.27rem;line-height:0.4rem;color:#333;margin-bottom:0.2rem;">○  马:04、16、28、40</div>
                                        <div style="padding-left:0.5rem; font-size:0.27rem;line-height:0.4rem;color:#333;margin-bottom:0.2rem;">○  蛇:05、17、29、41</div>
                                        <div style="padding-left:0.5rem; font-size:0.27rem;line-height:0.4rem;color:#333;margin-bottom:0.2rem;">○  龙:06、18、30、42</div>
                                        <div style="padding-left:0.5rem; font-size:0.27rem;line-height:0.4rem;color:#333;margin-bottom:0.2rem;">○  兔:07、19、31、43</div>
                                        <div style="padding-left:0.5rem; font-size:0.27rem;line-height:0.4rem;color:#333;margin-bottom:0.2rem;">○  虎:08、20、32、44</div>
                                        <div style="padding-left:0.5rem; font-size:0.27rem;line-height:0.4rem;color:#333;margin-bottom:0.2rem;">○  牛:09、21、33、45</div>
                                        <div style="padding-left:0.5rem; font-size:0.27rem;line-height:0.4rem;color:#333;margin-bottom:0.2rem;">○  鼠:10、22、34、46</div>
                                        <div style="padding-left:0.5rem; font-size:0.27rem;line-height:0.4rem;color:#333;margin-bottom:0.2rem;">○  豬:11、23、35、47</div>
                                        <div style="padding-left:0.5rem; font-size:0.27rem;line-height:0.4rem;color:#333;margin-bottom:0.2rem;">○  狗:12、24、36、48</div>
                                        <div style="padding-left:0.4rem; font-size:0.27rem;line-height:0.4rem;color:#333;margin-bottom:0.2rem;">
                                            注：生肖中49亦算输赢，不为和；十二生肖属性会根据每年的农历年而变更。
                                        </div>
                                    </div>

                                    <div class="children">
                                        <div class="item">
                                                <span>
                                                    <i class="fa fa-hand-o-right"></i>
                                                </span>
                                            <p>      色波，指49个号码球分别有红、蓝、绿三种颜色，以特码开出的颜色和投注的颜色相同视为中奖，颜色代表如下： </p>

                                        </div>
                                        <div style="padding-left:0.5rem; font-size:0.27rem;line-height:0.4rem;color:#333;margin-bottom:0.2rem;">○  红波:01、02、07、08、12、13、18、19、23、24、29、30、34、35、40、45、46</div>
                                        <div style="padding-left:0.5rem; font-size:0.27rem;line-height:0.4rem;color:#333;margin-bottom:0.2rem;">○  蓝波:03、04、09、10、14、15、20、25、26、31、36、37、41、42、47、48</div>
                                        <div style="padding-left:0.5rem; font-size:0.27rem;line-height:0.4rem;color:#333;margin-bottom:0.2rem;">○  绿波:05、06、11、16、17、21、22、27、28、32、33、38、39、43、44、49</div>
                                    </div>

                                    <div class="children">
                                        <div class="item">
                                                <span>
                                                    <i class="fa fa-hand-o-right"></i>
                                                </span>
                                            <p>       特码头数 </p>
                                        </div>
                                        <div style="padding-left:0.5rem; font-size:0.27rem;line-height:0.4rem;color:#333;margin-bottom:0.2rem;">○  '0'头:01、02、03、04、05、06、07、08、09</div>
                                        <div style="padding-left:0.5rem; font-size:0.27rem;line-height:0.4rem;color:#333;margin-bottom:0.2rem;">○  '1'头:10、11、12、13、14、15、16、17、18、19</div>
                                        <div style="padding-left:0.5rem; font-size:0.27rem;line-height:0.4rem;color:#333;margin-bottom:0.2rem;">○  '2'头:20、21、22、23、24、25、26、27、28、29</div>
                                        <div style="padding-left:0.5rem; font-size:0.27rem;line-height:0.4rem;color:#333;margin-bottom:0.2rem;">○  '3'头:30、31、32、33、34、35、36、37、38、39</div>
                                        <div style="padding-left:0.5rem; font-size:0.27rem;line-height:0.4rem;color:#333;margin-bottom:0.2rem;">○  '4'头:40、41、42、43、44、45、46、47、48、49</div>
                                    </div>


                                    <div class="children">
                                        <div class="item">
                                                <span>
                                                    <i class="fa fa-hand-o-right"></i>
                                                </span>
                                            <p>        特码尾数 </p>
                                        </div>
                                        <div style="padding-left:0.5rem; font-size:0.27rem;line-height:0.4rem;color:#333;margin-bottom:0.2rem;">○  '0'尾:10、20、30、40</div>
                                        <div style="padding-left:0.5rem; font-size:0.27rem;line-height:0.4rem;color:#333;margin-bottom:0.2rem;">○  '1'尾:01、11、21、31、41</div>
                                        <div style="padding-left:0.5rem; font-size:0.27rem;line-height:0.4rem;color:#333;margin-bottom:0.2rem;">○  '2'尾:02、12、22、32、42</div>
                                        <div style="padding-left:0.5rem; font-size:0.27rem;line-height:0.4rem;color:#333;margin-bottom:0.2rem;">○  '3'尾:03、13、23、33、43</div>
                                        <div style="padding-left:0.5rem; font-size:0.27rem;line-height:0.4rem;color:#333;margin-bottom:0.2rem;">○  '4'尾:04、14、24、34、44</div>
                                        <div style="padding-left:0.5rem; font-size:0.27rem;line-height:0.4rem;color:#333;margin-bottom:0.2rem;">○  '5'尾:05、15、25、35、45</div>
                                        <div style="padding-left:0.5rem; font-size:0.27rem;line-height:0.4rem;color:#333;margin-bottom:0.2rem;">○  '6'尾:06、16、26、36、46</div>
                                        <div style="padding-left:0.5rem; font-size:0.27rem;line-height:0.4rem;color:#333;margin-bottom:0.2rem;">○  '7'尾:07、17、27、37、47</div>
                                        <div style="padding-left:0.5rem; font-size:0.27rem;line-height:0.4rem;color:#333;margin-bottom:0.2rem;">○  '8'尾:08、18、28、38、48</div>
                                        <div style="padding-left:0.5rem; font-size:0.27rem;line-height:0.4rem;color:#333;margin-bottom:0.2rem;">○  '9'尾:09、19、29、39、49</div>
                                    </div>
                                    <div class="children">
                                        <div class="item">
                                                <span>
                                                    <i class="fa fa-hand-o-right"></i>
                                                </span>
                                            <p>   五行 </p>
                                        </div>
                                        <div style="padding-left:0.5rem; font-size:0.27rem;line-height:0.4rem;color:#333;margin-bottom:0.2rem;">○  金:03、04、17、18、25、26、33、34、47、48</div>
                                        <div style="padding-left:0.5rem; font-size:0.27rem;line-height:0.4rem;color:#333;margin-bottom:0.2rem;">○  木:07、08、15、16、29、30、37、38、45、46</div>
                                        <div style="padding-left:0.5rem; font-size:0.27rem;line-height:0.4rem;color:#333;margin-bottom:0.2rem;">○  水:05、06、13、14、21、22、35、36、43、44</div>
                                        <div style="padding-left:0.5rem; font-size:0.27rem;line-height:0.4rem;color:#333;margin-bottom:0.2rem;">○  火:01、02、09、10、23、24、31、32、39、40</div>
                                        <div style="padding-left:0.5rem; font-size:0.27rem;line-height:0.4rem;color:#333;margin-bottom:0.2rem;">○  土:11、12、19、20、27、28、41、42、49</div>
                                    </div>
                                </div>


                            </div>
                        </div>

                        <div class="cont_right">
                            <h3 class="title_n"> 两面 </h3>
                            <div class="right_item">
                                <h4 class="right_item_h4">两面 <span class="fa fa-angle-down"></span> </h4>
                                <div class="content_box">
                                    <div class="content">
                                        <span>两面</span>
                                        <p>指大小单双。对特码的总和及形态或正码1-6的合数及形态进行投注。所选号与开奖号的位置、形态相同，即为中奖。</p>
                                    </div>
                                </div>
                            </div>
                            <h3 class="title_n"> 特码 </h3>
                            <div class="right_item">
                                <h4 class="right_item_h4">特码 <span class="fa fa-angle-down"></span> </h4>
                                <div class="content_box">
                                    <div class="content">
                                        <span>特码</span>
                                        <p>当期开出的第七个号码为特码，从01-49中任选1个号码组成一注。所选号码与开奖特码相同，即为中奖。</p>
                                    </div>
                                </div>
                            </div>
                            <h3 class="title_n"> 正码 </h3>
                            <div class="right_item">
                                <h4 class="right_item_h4">正码 <span class="fa fa-angle-down"></span> </h4>
                                <div class="content_box">
                                    <div class="content">
                                        <span>正码</span>
                                        <p>从01-49中任选1个号码组成一注。不限顺序，开奖的正码中包含投注号，即为中奖。</p>
                                    </div>
                                </div>
                            </div>
                            <h3 class="title_n"> 正码特 </h3>
                            <div class="right_item">
                                <h4 class="right_item_h4">正码特 <span class="fa fa-angle-down"></span> </h4>
                                <div class="content_box">
                                    <div class="content">
                                        <span>正码特</span>
                                        <p>从01-49中任选1个号码组成一注。不限顺序，开奖的正码中包含投注号，即为中奖。</p>
                                    </div>
                                </div>
                            </div>

                            <h3 class="title_n"> 正码1-6 </h3>
                            <div class="right_item">
                                <h4 class="right_item_h4">正码1-6 <span class="fa fa-angle-down"></span> </h4>
                                <div class="content_box">
                                    <div class="content">
                                        <span>正码1-6</span>
                                        <p>任选1个形态组成一注。投注号与开奖号的正码位置、形态相同，即为中奖。</p>
                                    </div>
                                    <div class="content">
                                        <span>大小</span>
                                        <p>指定出现正码的位置与号码大于或等于25为大，小于或等于24为小，开出49为和。</p>
                                    </div>
                                    <div class="content">
                                        <span>单双</span>
                                        <p>以指定出现正码的位置与号码为单数或双数下注，开出49为和。</p>
                                    </div>
                                    <div class="content">
                                        <span>合数大小</span>
                                        <p>以指定出现正码的位置与号码个位和十位的数字和值来判断大小，和数大于或等于7为大，小于或等于6为小。</p>
                                    </div>
                                    <div class="content">
                                        <span>合数单双</span>
                                        <p>以指定出现正码的位置与号码个位和十位数字和值来判断单双。</p>
                                    </div>
                                    <div class="content">
                                        <span>色波</span>
                                        <p>以指定出现正码的位置的球色下注，开奖的球色与下注的颜色相同，即为中奖。</p>
                                    </div>
                                    <div class="content">
                                        <span>尾数大小</span>
                                        <p>以指定出现正码的位置与号码尾数大小下注，0尾~4尾为小、5尾~9尾为大。</p>
                                    </div>
                                </div>
                            </div>

                            <h3 class="title_n"> 正码过关 </h3>
                            <div class="right_item">
                                <h4 class="right_item_h4">正码过关 <span class="fa fa-angle-down"></span> </h4>
                                <div class="content_box">
                                    <div class="content">
                                        <span>正码过关</span>
                                        <p>从正一至正六中任选2个位置，并各选1个形态组成一注。所选形态与相同位置上的开奖形态一致，即为中奖。可同时选投多个正码形态，串联成投注组合，赔率为所选串联赔率的总乘积。</p>
                                    </div>
                                </div>
                            </div>

                            <h3 class="title_n"> 连码</h3>
                            <div class="right_item">
                                <h4 class="right_item_h4">连码<span class="fa fa-angle-down"></span> </h4>
                                <div class="content_box">
                                    <div class="content">
                                        <span>四全中 </span>
                                        <p>对开奖正码进行投注，任选4个号码为一注。不限顺序，开奖正码中包含4个所选号，即为中奖。</p>
                                    </div>
                                    <div class="content">
                                        <span>三全中</span>
                                        <p>对开奖正码进行投注，任选3个号码为一注。不限顺序，开奖正码中包含3个所选号，即为中奖。</p>
                                    </div>
                                    <div class="content">
                                        <span>三中二</span>
                                        <p>对开奖正码进行投注，任选3个号码为一 注。不限顺序，开奖正码中包含所选号中的任意2个号码，即中“三中二”；正码中包含3个所选号，即中“三中二之中三。</p>
                                    </div>
                                    <div class="content">
                                        <span>二全中</span>
                                        <p>对开奖正码进行投注，任选2个号码为一注。不限顺序，开奖正码中包含2个所选号，即为中奖。</p>
                                    </div>
                                    <div class="content">
                                        <span>二中特</span>
                                        <p>从01-49中任选2个号码为一注。开奖正码中包含2个所选号，则中“二中特之中二”；若所选号中1个是正码，1个是特码，则中“二全中之中特”。</p>
                                    </div>
                                    <div class="content">
                                        <span>特串</span>
                                        <p>从01-49中任选2个号码为一注。2个所选号一个出现在开奖正码中，一个出现在开奖特码中，即为中奖。</p>
                                    </div>
                                </div>
                            </div>

                            <h3 class="title_n"> 连肖连尾 </h3>
                            <div class="right_item">
                                <h4 class="right_item_h4">连肖连尾 <span class="fa fa-angle-down"></span> </h4>
                                <div class="content_box">
                                    <div class="content">
                                        <span>连肖连尾</span>
                                        <p>对7个开奖号码所属的生肖或尾数进行投注。不限顺序，7个开奖号中包含全部所选生肖或尾数，即为中奖。</p>
                                    </div>
                                </div>
                            </div>

                            <h3 class="title_n"> 自选不中 </h3>
                            <div class="right_item">
                                <h4 class="right_item_h4">自选不中 <span class="fa fa-angle-down"></span> </h4>
                                <div class="content_box">
                                    <div class="content">
                                        <span>自选不中</span>
                                        <p>7个开奖号中均不包含全部所选号，即为中奖。</p>
                                    </div>
                                </div>
                            </div>
                            <h3 class="title_n"> 生肖 </h3>
                            <div class="right_item">
                                <h4 class="right_item_h4">生肖 <span class="fa fa-angle-down"></span> </h4>
                                <div class="content_box">
                                    <div class="content">
                                        <span>特肖</span>
                                        <p>对开奖特码所属的生肖进行投注，任选1个生肖为一注。开奖特码在所选生肖范围内，即为中奖。</p>
                                    </div>
                                    <div class="content">
                                        <span>生肖</span>
                                        <p>对6个开奖正码所属的生肖进行投注，任选1个生肖组成一注。不限顺序，6个开奖正码中任意1个号码在所选生肖范围内，即为中奖。若有N个开奖正码在所选生肖范围内，中奖金额=本金*（赔率-1）*中奖次数+本金。</p>
                                    </div>
                                    <div class="content">
                                        <span>一肖</span>
                                        <p>对7个开奖号码所属的生肖范围进行投注，任选1个生肖为一注。7个开奖号中任意一个号码在所选生肖的范围内，即为中奖。。</p>
                                    </div>
                                    <div class="content">
                                        <span>总肖</span>
                                        <p>对7个开奖号的不同生肖总数及总肖的单双形态进行投注，任选1个组成一注。总肖单双指7个开奖号所属的生肖总数为单数或双数。投注类型与7个开奖号类型相符，即为中奖。</p>
                                    </div>
                                </div>
                            </div>

                            <h3 class="title_n"> 合肖 </h3>
                            <div class="right_item">
                                <h4 class="right_item_h4">合肖 <span class="fa fa-angle-down"></span> </h4>
                                <div class="content_box">
                                    <div class="content">
                                        <span>合肖</span>
                                        <p>对开奖特码所属生肖进行投注，任选1个生肖为一注。开奖特码在所选生肖范围内，即为中奖。</p>
                                    </div>
                                    <div class="content">
                                        <span>野兽</span>
                                        <p>鼠（10 22 34 46）、虎（08 20 32 44）、兔（07 19 31 43）、龙（06 18 30 42）、蛇（05 17 29 41）、猴（02 14 26 38）</p>
                                    </div>
                                    <div class="content">
                                        <span>家禽</span>
                                        <p>牛（09 21 33 45）、马（04 16 28 40）、羊（03 15 27 39）、鸡（01 13 25 37 49）、狗（12 24 36 48）、猪（11 23 35 47）</p>
                                    </div>
                                    <div class="content">
                                        <span>天肖</span>
                                        <p>牛（09 21 33 45）、兔（07 19 31 43）、龙（06 18 30 42）、马（04 16 28 40）、猴（02 14 26 38）、猪（11 23 35 47）</p>
                                    </div>
                                    <div class="content">
                                        <span>地肖</span>
                                        <p>鼠（10 22 34 46）、虎（08 20 32 44）、蛇（05 17 29 41）、羊（03 15 27 39）、鸡（01 13 25 37 49）、狗（12 24 36 48）</p>
                                    </div>
                                    <div class="content">
                                        <span>前肖</span>
                                        <p>鼠（10 22 34 46）、牛（09 21 33 45）、虎（08 20 32 44）、兔（07 19 31 43）、龙（06 18 30 42）、蛇（05 17 29 41）</p>
                                    </div>
                                    <div class="content">
                                        <span>后肖</span>
                                        <p>马（04 16 28 40）、羊（03 15 27 39）、猴（02 14 26 38）、鸡（01 13 25 37 49）、狗（12 24 36 48）、猪（11 23 35 47）</p>
                                    </div>
                                </div>
                            </div>


                            <h3 class="title_n"> 色波 </h3>
                            <div class="right_item">
                                <h4 class="right_item_h4">色波 <span class="fa fa-angle-down"></span> </h4>
                                <div class="content_box">
                                    <div class="content">
                                        <span>三色波</span>
                                        <p>对开奖特码的色波进行投注，任选1个色波为一注。所选波色与开奖特码的色波相同，即为中奖。</p>
                                    </div>
                                    <div class="content">
                                        <span>半波</span>
                                        <p>以开奖特码的色波和大小单双为一个组合，任选1个组合为一注。所选组合与开奖特码相符，即为中奖。如开奖特码为49，则为和局，系统自动退还投注金额。</p>
                                    </div>
                                    <div class="content">
                                        <span>半半波</span>
                                        <p>以开奖特码的色波和大单大双小单小双为一个组合，任选1个组合为一注。所选组合与开奖特码相符，即为中奖。如开奖号特码为49，则为和局，系统自动退还投注金额。</p>
                                    </div>
                                    <div class="content">
                                        <span>七色波</span>
                                        <p>以7个开奖号的色波，哪个颜色最多为中奖色波。7个开奖号最多的色波与所选色波相同，即为中奖。以下3种结果视为和局：6个正码开出3蓝3绿，特码是1.5红 6个正码开出3蓝3红，特码是1.5绿 6个正码开出3绿3红，特码是1.5蓝 如投注红、蓝、绿波时开出和局，则系统自动退还投注金额；会员也可以下注“和局”。</p>
                                    </div>
                                </div>
                            </div>


                            <h3 class="title_n"> 尾数 </h3>
                            <div class="right_item">
                                <h4 class="right_item_h4">尾数 <span class="fa fa-angle-down"></span> </h4>
                                <div class="content_box">
                                    <div class="content">
                                        <span>头尾数</span>
                                        <p>对开奖特码头（十位）或尾（个位）数进行投注，任选1个类型为一注。所选的头数或尾数与开奖特码位置、号码相同，即为中奖。</p>
                                    </div>
                                    <div class="content">
                                        <span>正特尾数</span>
                                        <p>对6个正码和特码的尾数进行投注，任选1个类型为一注。6个正码或特码中任意一个尾数与所选尾数相同，即为中奖。</p>
                                    </div>

                                </div>
                            </div>

                            <h3 class="title_n"> 七码五行 </h3>
                            <div class="right_item">
                                <h4 class="right_item_h4">七码五行 <span class="fa fa-angle-down"></span> </h4>
                                <div class="content_box">
                                    <div class="content">
                                        <span>七码</span>
                                        <p>对7个开奖号中大小单双各有多少个进行投注，任选1个类型为一注。所选的大小单双数量与7个开奖号的大小单双数量相同，即为中奖。</p>
                                    </div>
                                    <div class="content">
                                        <span>五行</span>
                                        <p>对开奖特码所属的五行进行投注，任选1个为一注。开奖特码在所选的五行范围内，即为中奖。</p>
                                    </div>

                                </div>
                            </div>

                            <h3 class="title_n"> 中一 </h3>
                            <div class="right_item">
                                <h4 class="right_item_h4">中一 <span class="fa fa-angle-down"></span> </h4>
                                <div class="content_box">
                                    <div class="content">
                                        <span>中一</span>
                                        <p>对7个开奖号中大小单双各有多少个进行投注，任选1个类型为一注。所选的大小单双数量与7个开奖号的大小单双数量相同，即为中奖。</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
         </div>
    </div>
</template>

<script>
import Goback from "components/back/back";
import { Indicator } from "mint-ui";
import {
  mt_loading_open,
  mt_loading_close,
  requestOpt,
  dtFormate,
  alertip
} from "api/recommend";
export default {
  data() {
    return {
      datahtml: ""
    };
  },
  components: {
    Goback
  },
  created() {},
  mounted() {
    mt_loading_open();
    setTimeout(() => {
      mt_loading_close();
    }, 500);
    // this.getData();
    this.implement();
  },
  methods: {
    getData() {
      this.datahtml = JSON.parse(localStorage.getItem("newplayrule"));
      if (!this.datahtml) {
        requestOpt.req_host(
          "play_instruction?type=ALL",
          res => {
            // console.log(res)
            this.datahtml = res.data;
            localStorage.setItem("newplayrule", JSON.stringify(res.data));
            window.location.reload();
          },
          err => {
            if (err) {
              alertip(err.data.msg);
            }
          }
        );
      }
      if (this.datahtml) {
        // this.$refs.newplayrule.innerHTML = this.datahtml;
      }
    },
    implement() {
      const play_rule = {};
      // play_rule.go_back = document.querySelector('.go_back');
      play_rule.show_drop_lis = document.querySelector("#show_drop_lis");
      // play_rule.box_show_drop_lis = document.querySelector('.box_show_drop_lis');
      play_rule.select_list_wrap = document.querySelector(".select_list_wrap");
      play_rule.show_drop_lis_em = document.querySelector(".show_drop_lis_em");
      //   获取每个彩种元素
      play_rule.cont_wrap = document.querySelector(".cont_wrap");
      // 返回上一页
      // play_rule.go_back.onclick = function () {
      //     console.log(-1);
      //     window.history.go(-1);
      // }
      // 显示和影藏tab栏
      // play_rule.is_show_drop_lis = true;
      // play_rule.box_show_drop_lis.onclick = function () {
      //     if (play_rule.is_show_drop_lis == true) {
      //         // play_rule.show_drop_lis.classList.add('active');
      //         // play_rule.is_show_drop_lis = false;
      //         play_rule.select_list_wrap.classList.add('active');
      //         // document.body.style.overflow = 'hidden';
      //     } else {
      //         // play_rule.show_drop_lis.classList.remove('active');
      //         // play_rule.is_show_drop_lis = true;
      //         play_rule.select_list_wrap.classList.remove('active');
      //         // document.body.style.overflow = 'auto';
      //     }
      // }

      // tab栏切换
      play_rule.select_list = document.querySelector(".select_list");
      for (let i = 0; i < play_rule.select_list.children.length; i++) {
        play_rule.select_list.children[i].addEventListener(
          "click",
          function() {
            for (let j = 0; j < play_rule.select_list.children.length; j++) {
              play_rule.select_list.children[j].classList.remove("active");
              // 显示当前彩种
              play_rule.cont_wrap.children[j].classList.remove("active");
            }

            play_rule.select_list.children[i].classList.add("active");
            // play_rule.show_drop_lis_em.innerText = play_rule.select_list.children[i].innerText;
            // play_rule.show_drop_lis.classList.remove('active');
            // play_rule.is_show_drop_lis = true;
            play_rule.select_list_wrap.classList.remove("active");
            // 显示当前彩种
            play_rule.cont_wrap.children[i].classList.add("active");
            // document.body.style.overflow = 'auto';
          },
          false
        );
      }

      // play_rule.select_list_wrap.onclick = function () {
      //     play_rule.show_drop_lis.classList.remove('active');
      //     play_rule.is_show_drop_lis = true;
      //     play_rule.select_list_wrap.classList.remove('active')
      //     document.body.style.overflow = 'auto';
      // }
      //时时彩种介绍和玩法规则切换
      play_rule.cont_main = document.querySelector(".cont_main");
      play_rule.switch_tab_swiper = document.querySelector(
        ".switch_tab_swiper"
      );
      play_rule.switch_tab_swiper_i = document.querySelector(
        ".switch_tab_swiper_i"
      );
      for (
        let i = 0;
        i < play_rule.switch_tab_swiper.children.length - 1;
        i++
      ) {
        play_rule.switch_tab_swiper.children[i].addEventListener(
          "click",
          function(e) {
            for (
              let j = 0;
              j < play_rule.switch_tab_swiper.children.length - 1;
              j++
            ) {
              play_rule.switch_tab_swiper.children[j].classList.remove(
                "current"
              );
              play_rule.cont_main.children[j].classList.remove("active");
            }
            play_rule.switch_tab_swiper.children[i].classList.add("current");
            if (i == 0) {
              play_rule.switch_tab_swiper_i.classList.remove("active");
            } else if (i == 1) {
              play_rule.switch_tab_swiper_i.classList.add("active");
            }
            play_rule.cont_main.children[i].classList.add("active");
          },
          false
        );
      }
      //快三介绍和玩法规则切换

      play_rule.cont_main_1 = document.querySelector(".cont_main_1");
      play_rule.switch_tab_swiper_1 = document.querySelector(
        ".switch_tab_swiper_1"
      );
      play_rule.switch_tab_swiper_i_1 = document.querySelector(
        ".switch_tab_swiper_i_1"
      );
      for (
        let i = 0;
        i < play_rule.switch_tab_swiper_1.children.length - 1;
        i++
      ) {
        play_rule.switch_tab_swiper_1.children[i].addEventListener(
          "click",
          function(e) {
            for (
              let j = 0;
              j < play_rule.switch_tab_swiper_1.children.length - 1;
              j++
            ) {
              play_rule.switch_tab_swiper_1.children[j].classList.remove(
                "current"
              );
              play_rule.cont_main_1.children[j].classList.remove("active");
            }
            play_rule.switch_tab_swiper_1.children[i].classList.add("current");
            if (i == 0) {
              play_rule.switch_tab_swiper_i_1.classList.remove("active");
            } else if (i == 1) {
              play_rule.switch_tab_swiper_i_1.classList.add("active");
            }
            play_rule.cont_main_1.children[i].classList.add("active");
          },
          false
        );
      }

      //11选5介绍和玩法规则切换

      play_rule.cont_main_2 = document.querySelector(".cont_main_2");
      play_rule.switch_tab_swiper_2 = document.querySelector(
        ".switch_tab_swiper_2"
      );
      play_rule.switch_tab_swiper_i_2 = document.querySelector(
        ".switch_tab_swiper_i_2"
      );
      for (
        let i = 0;
        i < play_rule.switch_tab_swiper_2.children.length - 1;
        i++
      ) {
        play_rule.switch_tab_swiper_2.children[i].addEventListener(
          "click",
          function(e) {
            for (
              let j = 0;
              j < play_rule.switch_tab_swiper_2.children.length - 1;
              j++
            ) {
              play_rule.switch_tab_swiper_2.children[j].classList.remove(
                "current"
              );
              play_rule.cont_main_2.children[j].classList.remove("active");
            }
            play_rule.switch_tab_swiper_2.children[i].classList.add("current");
            if (i == 0) {
              play_rule.switch_tab_swiper_i_2.classList.remove("active");
            } else if (i == 1) {
              play_rule.switch_tab_swiper_i_2.classList.add("active");
            }
            play_rule.cont_main_2.children[i].classList.add("active");
          },
          false
        );
      }

      // 低频彩介绍和玩法规则切换

      play_rule.cont_main_3 = document.querySelector(".cont_main_3");
      play_rule.switch_tab_swiper_3 = document.querySelector(
        ".switch_tab_swiper_3"
      );
      play_rule.switch_tab_swiper_i_3 = document.querySelector(
        ".switch_tab_swiper_i_3"
      );
      for (
        let i = 0;
        i < play_rule.switch_tab_swiper_3.children.length - 1;
        i++
      ) {
        play_rule.switch_tab_swiper_3.children[i].addEventListener(
          "click",
          function(e) {
            for (
              let j = 0;
              j < play_rule.switch_tab_swiper_3.children.length - 1;
              j++
            ) {
              play_rule.switch_tab_swiper_3.children[j].classList.remove(
                "current"
              );
              play_rule.cont_main_3.children[j].classList.remove("active");
            }
            play_rule.switch_tab_swiper_3.children[i].classList.add("current");
            if (i == 0) {
              play_rule.switch_tab_swiper_i_3.classList.remove("active");
            } else if (i == 1) {
              play_rule.switch_tab_swiper_i_3.classList.add("active");
            }
            play_rule.cont_main_3.children[i].classList.add("active");
          },
          false
        );
      }

      //PK10介绍和玩法规则切换

      play_rule.cont_main_4 = document.querySelector(".cont_main_4");
      play_rule.switch_tab_swiper_4 = document.querySelector(
        ".switch_tab_swiper_4"
      );
      play_rule.switch_tab_swiper_i_4 = document.querySelector(
        ".switch_tab_swiper_i_4"
      );
      for (
        let i = 0;
        i < play_rule.switch_tab_swiper_4.children.length - 1;
        i++
      ) {
        play_rule.switch_tab_swiper_4.children[i].addEventListener(
          "click",
          function(e) {
            for (
              let j = 0;
              j < play_rule.switch_tab_swiper_4.children.length - 1;
              j++
            ) {
              play_rule.switch_tab_swiper_4.children[j].classList.remove(
                "current"
              );
              play_rule.cont_main_4.children[j].classList.remove("active");
            }
            play_rule.switch_tab_swiper_4.children[i].classList.add("current");
            if (i == 0) {
              play_rule.switch_tab_swiper_i_4.classList.remove("active");
            } else if (i == 1) {
              play_rule.switch_tab_swiper_i_4.classList.add("active");
            }
            play_rule.cont_main_4.children[i].classList.add("active");
          },
          false
        );
      }

      //PC蛋蛋介绍和玩法规则切换

      play_rule.cont_main_5 = document.querySelector(".cont_main_5");
      play_rule.switch_tab_swiper_5 = document.querySelector(
        ".switch_tab_swiper_5"
      );
      play_rule.switch_tab_swiper_i_5 = document.querySelector(
        ".switch_tab_swiper_i_5"
      );
      for (
        let i = 0;
        i < play_rule.switch_tab_swiper_5.children.length - 1;
        i++
      ) {
        play_rule.switch_tab_swiper_5.children[i].addEventListener(
          "click",
          function(e) {
            for (
              let j = 0;
              j < play_rule.switch_tab_swiper_5.children.length - 1;
              j++
            ) {
              play_rule.switch_tab_swiper_5.children[j].classList.remove(
                "current"
              );
              play_rule.cont_main_5.children[j].classList.remove("active");
            }
            play_rule.switch_tab_swiper_5.children[i].classList.add("current");
            if (i == 0) {
              play_rule.switch_tab_swiper_i_5.classList.remove("active");
            } else if (i == 1) {
              play_rule.switch_tab_swiper_i_5.classList.add("active");
            }
            play_rule.cont_main_5.children[i].classList.add("active");
          },
          false
        );
      }

      //六合彩介绍和玩法规则切换

      play_rule.cont_main_6 = document.querySelector(".cont_main_6");
      play_rule.switch_tab_swiper_6 = document.querySelector(
        ".switch_tab_swiper_6"
      );
      play_rule.switch_tab_swiper_i_6 = document.querySelector(
        ".switch_tab_swiper_i_6"
      );
      for (
        let i = 0;
        i < play_rule.switch_tab_swiper_6.children.length - 1;
        i++
      ) {
        play_rule.switch_tab_swiper_6.children[i].addEventListener(
          "click",
          function(e) {
            for (
              let j = 0;
              j < play_rule.switch_tab_swiper_6.children.length - 1;
              j++
            ) {
              play_rule.switch_tab_swiper_6.children[j].classList.remove(
                "current"
              );
              play_rule.cont_main_6.children[j].classList.remove("active");
            }
            play_rule.switch_tab_swiper_6.children[i].classList.add("current");
            if (i == 0) {
              play_rule.switch_tab_swiper_i_6.classList.remove("active");
            } else if (i == 1) {
              play_rule.switch_tab_swiper_i_6.classList.add("active");
            }
            play_rule.cont_main_6.children[i].classList.add("active");
          },
          false
        );
      }

      // 右边玩法规则
      play_rule.right_item = document.querySelectorAll(".right_item");
      play_rule.right_item_h4 = document.querySelectorAll(".right_item_h4");
      play_rule.content_box = document.querySelectorAll(".content_box");
      for (let i = 0; i < play_rule.right_item_h4.length; i++) {
        play_rule.right_item_h4[i].addEventListener(
          "click",
          function(e) {
            e.target.classList.toggle("active");
            play_rule.content_box[i].classList.toggle("active");
          },
          false
        );
      }
    }
  }
};
</script>

<style >
body {
  width: 7.5rem;
  height: 100%;
  /* overflow: hidden; */
}

/* 基础样式及媒体查询 */
#newplayrule .play_rule_head {
  height: 0.88rem;
  width: 100%;
  background: #fd0000;
  position: fixed;
  top: 0;
  height: 0.88rem;
  z-index: 1000;
}

#newplayrule .play_rule_head > i {
  display: inline-block;
  width: 1rem;
  height: 100%;
  background: url(../../images/Return-@2x.png) no-repeat center / 30% 50%;
}
#newplayrule .play_rule_head > span {
  display: inline-block;
  height: 100%;
  color: #fff;
  font-size: 0.38rem;
  position: absolute;
  left: 40%;
  top: 0;
  line-height: 0.88rem;
}

* {
  margin: 0;
  padding: 0;
}

/* 顶部tab切换 */

#newplayrule ._header {
  height: 1rem;
  background: rgba(250, 250, 250, 0.8);
  line-height: 1rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
}

#newplayrule ._header i {
  color: #fff;
  height: 80%;
  line-height: 100%;
  font-size: 0.8rem;
  display: inline-block;
  padding: 0rem 0.2rem;
  font-style: normal;
  font-weight: normal;
  position: absolute;
  left: 0;
  top: 10%;
}

#newplayrule ._header span {
  height: 0.5rem;
  text-align: center;
  line-height: 0.5rem;
  font-size: 0.4rem;
  padding: 0.1rem 0.15rem;
  border-radius: 10px;
  color: #ec0909;
  border: 1px solid #ec0909;
  position: absolute;
  left: 40%;
  top: 15%;
}

#newplayrule ._header span::before {
}

#newplayrule #show_drop_lis {
  transition: all 0.5s;
}

#newplayrule #show_drop_lis.active {
  transform: rotateZ(-180deg);
}

#newplayrule .show_drop_lis_em {
  font-style: normal;
  font-weight: 400;
}

#newplayrule .select_list_wrap {
  width: 100%;
  position: fixed;
  top: 0.88rem;
  height: 1rem;

  /* background: rgba(0, 0, 0, 0.3); */
  /* display: none; */
  /* transform: translateY(50px); */
  /* transition: all .5s; */
  z-index: 1000;
}

#newplayrule .select_list_wrap.active {
  /* transform: translateY(0px);
                display: block; */
  /* opacity: 0.3; */
  /* background: rgba(0, 0, 0, 0.4); */
}

ul,
li,
ol {
  list-style: none;
}

#newplayrule .select_list {
  height: 100%;
  width: 100%;
  background: silver;
  display: flex;
  justify-content: space-around;
  line-height: 1rem;
  z-index: 1000;
}

#newplayrule .select_list li {
  font-size: 0.28rem;
  text-align: center;
  color: #fff;
  font-style: normal;
  border-bottom: 2px solid transparent;
}

#newplayrule .select_list li.active {
  border-color: #ec0909;
  color: #ec0909;
}

/* .select_list li.active::after {
                width: 20px;
                height: 20px;
                display: inline-block;
                content: "√";
                color: #ec0909;
                text-align: right;
                border-radius: 5px;
                position: absolute;
                right: 0;
                bottom: 0;
                z-index: 12;
            } */

#newplayrule .select_list li:nth-child(3n) {
  margin-right: 0;
}

/* 每个彩种的样式 */

#newplayrule .cont_wrap {
  margin-top: 1rem;
  /* position: relative;
                z-index: 990; */
}

#newplayrule .cont_main,
.cont_main_1,
.cont_main_2,
.cont_main_3,
.cont_main_4,
.cont_main_5,
.cont_main_6 {
  margin-top: 2.88rem;
}

#newplayrule .cont_wrap > div {
  display: none;
}

#newplayrule .cont_wrap > div.active {
  display: block;
}

#newplayrule .switch_tab_swiper > i,
.switch_tab_swiper_1 > i,
.switch_tab_swiper_2 > i,
.switch_tab_swiper_3 > i,
.switch_tab_swiper_4 > i,
.switch_tab_swiper_5 > i,
.switch_tab_swiper_6 > i {
  display: inline-block;
  width: 50%;
  height: 0.9px;
  background: #ec0909;
  position: absolute;
  bottom: 0;
  transition: all 0.2s;
  transform: translateX(0);
}

#newplayrule .switch_tab_swiper > i.active,
.switch_tab_swiper_1 > i.active,
.switch_tab_swiper_2 > i.active,
.switch_tab_swiper_3 > i.active,
.switch_tab_swiper_4 > i.active,
.switch_tab_swiper_5 > i.active,
.switch_tab_swiper_6 > i.active {
  transform: translateX(100%);
}

#newplayrule .switch_tab_swiper,
.switch_tab_swiper_1,
.switch_tab_swiper_2,
.switch_tab_swiper_3,
.switch_tab_swiper_4,
.switch_tab_swiper_5,
.switch_tab_swiper_6 {
  height: 1rem;
  line-height: 1rem;
  display: flex;
  line-height: 1rem;
  position: fixed;
  z-index: 999;
  top: 1.88rem;
  right: 0;
  left: 0;
}

#newplayrule .switch_tab_swiper > button,
.switch_tab_swiper_1 > button,
.switch_tab_swiper_2 > button,
.switch_tab_swiper_3 > button,
.switch_tab_swiper_4 > button,
.switch_tab_swiper_5 > button,
.switch_tab_swiper_6 > button {
  outline: none;
  background: #fff;
  border: none;
  flex: 1;
  text-align: center;
  border-bottom: 1px solid #ededed;
  font-size: 0.3rem;
}

#newplayrule .switch_tab_swiper button.current,
.switch_tab_swiper_1 > button.current,
.switch_tab_swiper_2 > button.current,
.switch_tab_swiper_3 > button.current,
.switch_tab_swiper_4 > button.current,
.switch_tab_swiper_5 > button.current,
.switch_tab_swiper_6 > button.current {
  color: #ec0909;
}

#newplayrule .cont_main > div,
.cont_main_1 > div,
.cont_main_2 > div,
.cont_main_3 > div,
.cont_main_4 > div,
.cont_main_5 > div,
.cont_main_6 > div {
  display: none;
}

#newplayrule .cont_main > div.active,
.cont_main_1 > div.active,
.cont_main_2 > div.active,
.cont_main_3 > div.active,
.cont_main_4 > div.active,
.cont_main_5 > div.active,
.cont_main_6 > div.active {
  display: block;
}

/* 时时彩样式 */

#newplayrule .cont_left {
  padding: 0.3rem;
}

#newplayrule .cont_left > .timing > h2,
#newplayrule .cont_left > .intro > h2 {
  font-weight: normal;
  font-size: 0.3rem;
  color: #000;
  margin-bottom: 0.3rem;
}

#newplayrule .cont_left > .timing > h2 > span,
#newplayrule .cont_left > .intro > h2 > span {
  color: #ec0909;
  padding-right: 0.15rem;
}

#newplayrule .cont_left .time,
#newplayrule .cont_left .item {
  font-size: 0.27rem;
  padding-left: 0.5rem;
  margin-bottom: 0.3rem;
}
#newplayrule .cont_left .intro .item {
  padding-left: 0.1rem;
}

#newplayrule .cont_left .time > p,
#newplayrule .cont_left .intro > p {
  margin-top: 0.1rem;
  /* white-space: pre-wrap; */
}

#newplayrule .cont_left .item {
  display: flex;
}

#newplayrule .cont_left .item > span {
  padding-right: 0.1rem;
}
#newplayrule .list > .children {
  padding-left: 0.4rem;
}
#newplayrule .cont_right > h3 {
  font-size: 0.28rem;
  color: #666;
  font-weight: normal;
  padding-left: 0.3rem;
  background: #f5f5f9;
  height: 0.8rem;
  line-height: 0.8rem;
  border-bottom: 1px solid #ededed;
}

#newplayrule .cont_right .right_item > h4 {
  margin: 0 0.3rem;
  height: 0.8rem;
  line-height: 0.8rem;
  border-bottom: 1px solid #ededed;
  font-size: 0.28rem;
  color: #333;
  font-weight: normal;
  position: relative;
  z-index: 2;
}

#newplayrule .cont_right .right_item > h4 > span {
  position: absolute;
  right: 10px;
  font-size: 0.6rem;
  top: 10%;
  color: #d6d6d6;
  /* transform: rotateZ(); */
  transition: all 0.2s;
}

#newplayrule .cont_right .right_item > h4.active span {
  transform: rotateZ(-180deg);
}
#newplayrule .content_box {
  padding: 0 0.3rem;
}
#newplayrule .content_box .content {
  font-size: 0.28rem;
  color: #666;
  display: flex;
  padding: 0.15rem 0;
  border-bottom: 1px solid #ededed;
  /* flex-wrap: wrap; */
}
#newplayrule .content_box .content span {
  display: inline-block;
  height: 100%;
  color: #0090ff;
  min-width: 1rem;
  margin-top: 0.1rem;
}
#newplayrule .content_box .content p {
  flex: 1;
  padding-left: 0.1rem;
  line-height: 0.45rem;
}

#newplayrule .right_item .content_box {
  display: none;
}

#newplayrule .right_item .content_box.active {
  display: block;
}

#newplayrule .cont_right .right_item {
  background: #fff;
}
#newplayrule .list .item p {
  line-height: 0.39rem;
}
</style>

