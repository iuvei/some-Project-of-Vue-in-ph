<template>
    <div class="inst_tab">
        <ul>
            <li id="return-top">全部彩票</li>
          <li v-for="(item,i) in lotList"  @click="swit_li(item.code,item.pan)" :class="{'active': code === item.code}">{{item.name}}</li>
          <!--
            <li   @click="swit_li(0)" :class="{'active': show_swit_li[0]}">极速6合彩</li>
            <li   @click="swit_li(1)" :class="{'active': show_swit_li[1]}">幸运扑克</li>
            <li   @click="swit_li(2)" :class="{'active': show_swit_li[2]}">上海时时乐</li>
            <li   @click="swit_li(3)" :class="{'active': show_swit_li[3]}">排列三</li>
            <li   @click="swit_li(4)" :class="{'active': show_swit_li[4]}">福彩3D</li>
            <li   @click="swit_li(5)" :class="{'active': show_swit_li[5]}">香港六合彩</li>
            <li   @click="swit_li(6)" :class="{'active': show_swit_li[6]}">吉林快3</li>
            <li   @click="swit_li(7)" :class="{'active': show_swit_li[7]}">北京快3</li>
            <li   @click="swit_li(8)" :class="{'active': show_swit_li[8]}">安徽快3</li>
            <li   @click="swit_li(9)" :class="{'active': show_swit_li[9]}">二分快3</li>
            <li   @click="swit_li(10)" :class="{'active': show_swit_li[10]}">广西快3</li>
            <li   @click="swit_li(11)" :class="{'active': show_swit_li[11]}">江苏快3</li>
            <li   @click="swit_li(12)" :class="{'active': show_swit_li[12]}">天津时时彩</li>
            <li   @click="swit_li(13)" :class="{'active': show_swit_li[13]}">新疆时时彩</li>
            <li   @click="swit_li(14)" :class="{'active': show_swit_li[14]}">重庆时时彩</li>
            <li   @click="swit_li(15)" :class="{'active': show_swit_li[15]}">二分时时彩</li>
            <li   @click="swit_li(16)" :class="{'active': show_swit_li[16]}">上海11选5</li>
            <li   @click="swit_li(17)" :class="{'active': show_swit_li[17]}">安徽11选5</li>
            <li   @click="swit_li(18)" :class="{'active': show_swit_li[18]}">山东11选5</li>
            <li   @click="swit_li(19)" :class="{'active': show_swit_li[19]}">广东11选5</li>
            <li   @click="swit_li(20)" :class="{'active': show_swit_li[20]}">江西11选5</li>
            <li   @click="swit_li(21)" :class="{'active': show_swit_li[21]}">重庆快乐十分</li>
            <li   @click="swit_li(22)" :class="{'active': show_swit_li[22]}">天津快乐十分</li>
            <li   @click="swit_li(23)" :class="{'active': show_swit_li[23]}">广东快乐十分</li>
            <li   @click="swit_li(24)" :class="{'active': show_swit_li[24]}">北京28</li>
            <li   @click="swit_li(25)" :class="{'active': show_swit_li[25]}" >幸运28</li>
            <li   @click="swit_li(26)" :class="{'active': show_swit_li[26]}" >幸运赛马</li>
            <li   @click="swit_li(27)" :class="{'active': show_swit_li[27]}">幸运飞艇</li>
            <li   @click="swit_li(28)" :class="{'active': show_swit_li[28]}">北京PK拾</li>
            <li   @click="swit_li(29)" :class="{'active': show_swit_li[29]}">二分PK拾</li>-->
        </ul>
      <div  class="inst_tab_item" >
        <iframe :src="url+code+'&pan='+ (pan==1?'A':'B')" frameborder="0" width="100%" height="100%"></iframe>
      </div>
<!--
        <div  class="inst_tab_item" v-if="show_swit_li[0]">
             <h2>极速六合彩 <span>游戏规则</span></h2>
             <div class="kuaijie_daohang">
                 <span>快捷导航：</span>
                  <a href="#shortcut_1">连码</a>
                  <a href="#shortcut_2">对碰</a>
                  <a href="#shortcut_3">合肖</a>
                  <a href="#shortcut_4">自选不中</a>
                  <a href="#shortcut_5">正码</a>
                  <a href="#shortcut_6">生肖</a>
                  <a href="#shortcut_7">特码</a>
                  <a href="#shortcut_8">五行</a>
                  <a href="#shortcut_9">总肖</a>
                  <a href="#shortcut_10">特码AB盘</a>
                  <a href="#shortcut_11">三连尾</a>
                  <a href="#shortcut_12">四连肖</a>
                  <a href="#shortcut_13">自选五不中</a>
             </div>

             <h6>一、简介</h6>
             <p>极速六合彩是从1至49个号码中选出六个为中奖号码的奖券，由本站管理中心负责承销。</p>
             <h6 style="margin-top:40px;"> 二、购彩方式 </h6>
             <ol>
                <li>1) 用户可通过本站投注，对选定的号码进行投注，或返点投注，返点越高投注赔率则越低。单注金额1元。</li>
                <li>2) 用户可选择机选号码投注和自选号码投注。机选号码投注是指对投注机随机产生号码进行投注，自选号码投注是指将用户选定的号码输入投注机进行投注。</li>
                <li>3)追号：追号指将一注或一组号码进行两期或两期以上的投注。追号可分为连续追号和间隔追号，连续追号指追号的期数是连续的，间隔追号指追号的期数不连续。</li>
             </ol>

             <h6> 三、开奖及返奖 </h6>
             <strong>1）开奖</strong>
             <table>
                 <tbody>
                     <tr>
                         <td>彩种名称</td>
                         <td>开奖时间</td>
                         <td>每周期数</td>
                         <td>开奖频率</td>
                     </tr>
                     <tr>
                         <td>极速六合彩</td>
                         <td>每周二、周四、周六（或周日）21:30（北京时间）</td>
                         <td>3</td>
                     </tr>
                     <tr>
                         <td></td>
                     </tr>
                 </tbody>
             </table>
             <strong> 2）返奖：奖金自动返还至用户在本站账户中，可继续投注或提款，永无弃奖。 </strong>

             <h6 style="margin-top:40px;"> 五、玩法说明 </h6>
             <p>每期六合彩搅珠均从01～49个号码中搅出七个号码作为开奖号码，首六个号码称为「搅出号码」，而第七个号码称为「特別号码」（如图一），<em>开奖号码包括搅出号码和特别码。</em> </p>
             <p>
               <img src="../../image/six.png" alt="" style="margin : 15px auto;">
                <i>图一</i>
             </p>
             <h6 style="margin-top:20px;" id="shortcut_7">1、 特码</h6>
             <div class="inst_tab_item_1">
                <p style="margin-top:30px;" id="shortcut_10"> &lt;1&gt; 特码AB盘 </p>
                <p>香港六合彩公司当期开出的第七个号码为特码或特别码。特码A盘是一种含有10%返水（不计输赢）的竞猜特码的玩法，特码B盘是一种不含返水、竞猜特码的玩法。从01～49中选择1个号码组成1注，所选号码与开奖号码的特码一致，即为中奖。例：</p>
                <p> 开奖号码： <b> 18 31 11 17 01 26 47 </b></p>
                <p> 投注组合： <b> 47 </b> </p>
                <p style="margin-left:25px;"> 状态： <b>中奖</b> </p>
             </div>

             <div class="inst_tab_item_1">
                <p style="margin-top:30px;">&lt;2&gt; 特码大小</p>
                <table>
                    <tbody>
                        <tr>
                            <td rowspan="2">特大</td>
                            <td style="background:#e2efd9">当期开出的特别码大于或等于25，小于或等于48</td>
                        </tr>
                        <tr>
                            <td >25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48</td>
                        </tr>
                        <tr>
                            <td rowspan="2">特小</td>
                            <td style="background:#e2efd9">当期开出的特别码大于或等于1，小于或等于24</td>
                        </tr>

                        <tr>
                            <td > 01 02 03 04 05 06 07 08 09 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 </td>
                        </tr>

                        <tr>
                            <td>和局</td>
                            <td style="color:red;background:#e2efd9">当期开出的特别码为49时，视为和局，自动返还投注组合本金。</td>
                        </tr>
                    </tbody>
                </table>

                <p>所选投注组合与开奖号码的特别码的型态一致，即为中奖。例：</p>
                <p> 开奖号码： <b> 18 31 11 17 01 26 47 </b></p>
                <p> 投注组合： <b> 特大 </b> </p>
                <p style="margin-left:25px;"> 状态： <b>中奖</b> </p>
             </div>
             <div class="inst_tab_item_1">
                <p style="margin-top:30px;">&lt;3&gt; 特码单双</p>
                <table>
                    <tbody>
                        <tr>
                            <td rowspan="2">特双</td>
                            <td style="background:#e2efd9">当期开出的特别码为偶数</td>
                        </tr>
                        <tr>
                            <td>
                                <span class="highlight_red">02</span>
                                <span class="highlight_blue">04</span>
                                <span class="highlight_green">06</span>
                                <span class="highlight_red">08</span>
                                <span class="highlight_blue">10</span>
                                <span class="highlight_red">12</span>
                                <span class="highlight_blue">14</span>
                                <span class="highlight_green">16</span>
                                <span class="highlight_red">18</span>
                                <span class="highlight_blue">20</span>
                                <span class="highlight_green">22</span>
                                <span class="highlight_red">24</span>
                                <span class="highlight_blue">26</span>
                                <span class="highlight_green">28</span>
                                <span class="highlight_red">30</span>
                                <span class="highlight_green">32</span>
                                <span class="highlight_red">34</span>
                                <span class="highlight_blue">36</span>
                                <span class="highlight_green">38</span>
                                <span class="highlight_red">40</span>
                                <span class="highlight_blue">42</span>
                                <span class="highlight_green">44</span>
                                <span class="highlight_red">46</span>
                                <span class="highlight_blue">48</span>
                            </td>
                        </tr>
                        <tr>
                            <td rowspan="2">特单</td>
                            <td style="background:#e2efd9">当期开出的特别码大于或等于1，小于或等于24</td>
                        </tr>
                        <tr>
                            <td>
                                <span class="highlight_red">01</span>
                                <span class="highlight_blue">03</span>
                                <span class="highlight_green">05</span>
                                <span class="highlight_red">07</span>
                                <span class="highlight_blue">09</span>
                                <span class="highlight_red">11</span>
                                <span class="highlight_blue">13</span>
                                <span class="highlight_green">15</span>
                                <span class="highlight_red">17</span>
                                <span class="highlight_blue">19</span>
                                <span class="highlight_green">21</span>
                                <span class="highlight_red">23</span>
                                <span class="highlight_blue">25</span>
                                <span class="highlight_green">27</span>
                                <span class="highlight_red">29</span>
                                <span class="highlight_green">31</span>
                                <span class="highlight_red">33</span>
                                <span class="highlight_blue">35</span>
                                <span class="highlight_green">37</span>
                                <span class="highlight_red">39</span>
                                <span class="highlight_blue">41</span>
                                <span class="highlight_green">43</span>
                                <span class="highlight_red">45</span>
                                <span class="highlight_blue">47</span>
                            </td>
                        </tr>

                        <tr>
                            <td>和局</td>
                            <td style="color:red;background:#e2efd9">当期开出的特别码为49时，视为和局，自动返还投注组合本金。</td>
                        </tr>
                    </tbody>
                </table>

                <p>所选投注组合与开奖号码的特别码的型态一致，即为中奖。例：</p>
                <p> 开奖号码： <b> 18 31 11 17 01 26 47 </b></p>
                <p> 投注组合： <b> 特单 </b> </p>
                <p style="margin-left:25px;"> 状态： <b>中奖</b> </p>
                <p> 注：特别码为47；个位为7，十位为4，个位与十位的和值为11，故为特合单。 </p>
             </div>

             <div class="inst_tab_item_1">
                <p style="margin-top:30px;">&lt;4&gt; 特码合数单双</p>
                <table>
                    <tbody>
                        <tr>
                            <td rowspan="2">特合双</td>
                            <td style="background:#e2efd9">当期开出的特别码的个位加上十位之和为“偶数”</td>
                        </tr>
                        <tr>
                            <td>
                                <span class="highlight_red">02</span>
                                <span class="highlight_blue">04</span>
                                <span class="highlight_green">06</span>
                                <span class="highlight_red">08</span>
                                <span class="highlight_blue">10</span>
                                <span class="highlight_red">12</span>
                                <span class="highlight_blue">14</span>
                                <span class="highlight_green">16</span>
                                <span class="highlight_red">18</span>
                                <span class="highlight_blue">20</span>
                                <span class="highlight_green">22</span>
                                <span class="highlight_red">24</span>
                                <span class="highlight_blue">26</span>
                                <span class="highlight_green">28</span>
                                <span class="highlight_red">30</span>
                                <span class="highlight_green">32</span>
                                <span class="highlight_red">34</span>
                                <span class="highlight_blue">36</span>
                                <span class="highlight_green">38</span>
                                <span class="highlight_red">40</span>
                                <span class="highlight_blue">42</span>
                                <span class="highlight_green">44</span>
                                <span class="highlight_red">46</span>
                                <span class="highlight_blue">48</span>
                            </td>
                        </tr>
                        <tr>
                            <td rowspan="2">特合单</td>
                            <td style="background:#e2efd9">当期开出的特别码的个位加上十位之和为“奇数”</td>
                        </tr>
                        <tr>
                            <td>
                                <span class="highlight_red">01</span>
                                <span class="highlight_blue">03</span>
                                <span class="highlight_green">05</span>
                                <span class="highlight_red">07</span>
                                <span class="highlight_blue">09</span>
                                <span class="highlight_red">11</span>
                                <span class="highlight_blue">13</span>
                                <span class="highlight_green">15</span>
                                <span class="highlight_red">17</span>
                                <span class="highlight_blue">19</span>
                                <span class="highlight_green">21</span>
                                <span class="highlight_red">23</span>
                                <span class="highlight_blue">25</span>
                                <span class="highlight_green">27</span>
                                <span class="highlight_red">29</span>
                                <span class="highlight_green">31</span>
                                <span class="highlight_red">33</span>
                                <span class="highlight_blue">35</span>
                                <span class="highlight_green">37</span>
                                <span class="highlight_red">39</span>
                                <span class="highlight_blue">41</span>
                                <span class="highlight_green">43</span>
                                <span class="highlight_red">45</span>
                                <span class="highlight_blue">47</span>
                            </td>
                        </tr>

                        <tr>
                            <td>和局</td>
                            <td style="color:red; background:#e2efd9;">当期开出的特别码为49时，投注特合单、特合双本金自动返还至账户</td>
                        </tr>
                    </tbody>
                </table>

                <p>所选投注组合与开奖号码的特别码的型态一致，即为中奖。例：</p>
                <p> 开奖号码： <b> 18 31 11 17 01 26 47 </b></p>
                <p> 投注组合： <b> 特合单 </b> </p>
                <p style="margin-left:25px;"> 状态： <b>中奖</b> </p>
                <p> 注：特别码为47；个位为7，十位为4，个位与十位的和值为11，故为特合单。 </p>
             </div>

             <div class="inst_tab_item_1">
                <p style="margin-top:30px;">&lt;5&gt; 特码合数大小</p>
                <table>
                    <tbody>
                        <tr>
                            <td rowspan="2">特合大</td>
                            <td style="background:#e2efd9">当期开出的特码的个位加上十位之和大于等于7为特合大</td>
                        </tr>
                        <tr>
                            <td >如： &nbsp;08、09、43、45、36、27</td>
                        </tr>
                        <tr>
                            <td rowspan="2">特合小</td>
                            <td style="background:#e2efd9">当期开出的特码的个位加上十位之和小于等于6为特合小</td>
                        </tr>

                        <tr>
                            <td >如：&nbsp;30、10、21、22、14、32 </td>
                        </tr>

                        <tr>
                            <td>和局</td>
                            <td style="color:red;background:#e2efd9;">当期开出的特别码为49时，视为和局，自动返还投注组合本金。</td>
                        </tr>
                    </tbody>
                </table>
                <p>所选投注组合与开奖号码的特别码的型态一致，即为中奖。例：</p>
                <p> 开奖号码： <b> 18 31 11 17 01 26 47 </b></p>
                <p> 投注组合： <b> 特合大 </b> </p>
                <p style="margin-left:25px;"> 状态： <b>中奖</b> </p>
                <p>注：特码为47；个位为7，十位为4，个位与十位的和值为11，故为特合大。 </p>
             </div>

              <div class="inst_tab_item_1">
                <p style="margin-top:30px;">&lt;6&gt; 特码尾数大小</p>
                <table>
                    <tbody>
                        <tr>
                            <td rowspan="2">特尾大</td>
                            <td style="background:#e2efd9">当期开出的特码的个位数大于等于5为特尾大</td>
                        </tr>
                        <tr>
                            <td > 5尾、6尾、7尾、8尾、9尾</td>
                        </tr>
                        <tr>
                            <td rowspan="2">特尾小</td>
                            <td style="background:#e2efd9">当期开出的特码的个位数小于等于4为特尾小</td>
                        </tr>

                        <tr>
                            <td > 0尾、1尾、2尾、3尾、4尾 </td>
                        </tr>

                        <tr>
                            <td>和局</td>
                            <td style="color:red;background:#e2efd9;">当期开出的特别码为49时，视为和局，自动返还投注组合本金。</td>
                        </tr>
                    </tbody>
                </table>
                <p>所选投注组合与开奖号码的特别码的型态一致，即为中奖。例：</p>
                <p> 开奖号码： <b> 18 31 11 17 01 26 47 </b></p>
                <p> 投注组合： <b> 特尾大 </b> </p>
                <p style="margin-left:25px;"> 状态： <b>中奖</b> </p>
                <p>注：特码为47；个位为7，故为特尾大。 </p>
              </div>

              <div class="inst_tab_item_1">
                <p style="margin-top:30px;">&lt;7&gt; 特码半特</p>
                <p> 以特码大小与特码单双为一个投注组合，所选投注组合与开奖号码的特别码的型态一致，即为中奖。若当期开出的特别码为49，则视为和局；其余情形视为不中奖。</p>
                <table>
                    <tbody>
                        <tr>
                            <td>特大单</td>
                            <td style="background:#e2efd9"> 25 27 29 31 33 35 37 39 41 43 45 47 </td>
                        </tr>
                        <tr>
                            <td>特大双</td>
                            <td > 26 28 30 32 34 36 38 40 42 44 46 48 </td>
                        </tr>
                        <tr>
                            <td > 特小单 </td>
                            <td style="background:#e2efd9"> 01 03 05 07 09 11 13 15 17 19 21 23 </td>
                        </tr>

                        <tr>
                            <td> 特小双 </td>
                            <td > 02 04 06 08 10 12 14 16 18 20 22 24 </td>
                        </tr>

                        <tr>
                            <td>和局</td>
                            <td style="color:red;background:#e2efd9;">当期开出的特别码为49时，视为和局，自动返还投注组合本金。</td>
                        </tr>
                    </tbody>
                </table>
                &lt;!&ndash; <p>所选投注组合与开奖号码的特别码的型态一致，即为中奖。例：</p> &ndash;&gt;
                <p> 开奖号码： <b> 18 31 11 17 01 26 47 </b></p>
                <p> 投注组合： <b> 特大单 </b> </p>
                <p style="margin-left:25px;"> 状态： <b>中奖</b> </p>
                &lt;!&ndash; <p>注：特码为47；个位为7，故为特尾大。 </p> &ndash;&gt;
              </div>


              <div class="inst_tab_item_1">
                <p style="margin-top:30px;">&lt;8&gt; 特码色波</p>
                <p>香港六合彩49个号码有红、绿、蓝三种颜色，所选波色与开奖号码的特别号码的颜色一致，视为中奖。</p>
                <table>
                    <tbody>
                        <tr style="background:#e2efd9;">
                            <td style="color:red;">红波</td>
                            <td style="color:red;">01, 02, 07, 08, 12, 13, 18, 19, 23, 24, 29, 30, 34, 35, 40, 45, 46</td>
                        </tr>

                        <tr>
                            <td style="color:#4472C4"> 蓝波 </td>
                            <td style="color:#4472C4;"> 03, 04, 09, 10, 14, 15, 20, 25, 26, 31, 36, 37, 41, 42, 47, 48 </td>
                        </tr>
                        <tr style="background:#e2efd9;">
                            <td style="color:#00B050;">绿波</td>
                            <td style="background:#e2efd9;color:#00B050;">05, 06, 11, 16, 17, 21, 22, 27, 28, 32, 33, 38, 39, 43, 44, 49</td>
                        </tr>
                    </tbody>
                </table>
                <p>所选投注组合与开奖号码的特别码的型态一致，即为中奖。例：</p>
                <p> 开奖号码： <b> 18 31 11 17 01 26 47 </b></p>
                <p> 投注组合： <b> 蓝波 </b> </p>
                <p style="margin-left:25px;"> 状态： <b>中奖</b> </p>
              </div>

              <div class="inst_tab_item_1">
                <p style="margin-top:30px;">&lt;9&gt; 半波</p>
                <p>以特码色波和特单、特双、特大、特小为一个投注组合，所选投注组合与开奖号码的特别码的型态一致，即为中奖。若当期开出的特别码为49，则视为和局；其余情形视为不中奖</p>
                <table>
                    <tbody>

                        <tr style="background:#e2efd9;">
                            <td style="color:red;">红单</td>
                            <td style="color:red;">01,07,13,19,23,29,35,45</td>
                            <td style="color:red;">红双</td>
                            <td style="color:red;">02, 08,12,18,24,30,34,40,46</td>
                        </tr>

                        <tr >
                            <td style="color:red;">红大</td>
                            <td style="color:red;"> 29,30,34,35,40,45,46 </td>
                            <td style="color:red;"> 红小 </td>
                            <td style="color:red;"> 01,02,07,08,12,13,18,19,23,24 </td>
                        </tr>


                        <tr style="background:#e2efd9;">
                            <td style="color:#4472C4"> 蓝单 </td>
                            <td style="color:#4472C4;"> 03,09,15,25,31,37,47  </td>
                            <td style="color:#4472C4"> 蓝双 </td>
                            <td style="color:#4472C4"> 04,10,14,20,26,36,42,48  </td>
                        </tr>
                            <tr >
                            <td style="color:#4472C4;">蓝大</td>
                            <td style="color:#4472C4;"> 25,26,31,36,37,41,42,47,48 </td>
                            <td style="color:#4472C4;"> 蓝小 </td>
                            <td style="color:#4472C4;">03,04,09,10,14,15,20 </td>
                        </tr>

                        <tr style="background:#e2efd9;">
                            <td style="color:#00B050"> 绿单 </td>
                            <td style="color:#00B050;"> 05,11,17,21,27,33,39,43 </td>
                            <td style="color:#00B050"> 绿双 </td>
                            <td style="color:#00B050"> 06,16,22,28,32,38,44 </td>
                        </tr>

                            <tr>
                            <td style="color:#00B050;">蓝大</td>
                            <td style="color:#00B050;"> 27,28,32,33,38,39,43,44 </td>
                            <td style="color:#00B050;"> 蓝小 </td>
                            <td style="color:#00B050;"> 05,06,11,16,17,21,22 </td>
                        </tr>

                        <tr style="background:#e2efd9;" >
                            <td colspan="4" style="color:red">当期开出的特别码为49时，视为和局，自动返还投注组合本金。</td>
                        </tr>

                    </tbody>
                </table>
                    <p>所选投注组合与开奖号码的特别码的型态一致，即为中奖。例：</p>
                    <p> 开奖号码： <b> 18 31 11 17 01 26 47 </b></p>
                    <p> 投注组合： <b> 蓝大 </b> </p>
                    <p style="margin-left:25px;"> 状态： <b>中奖</b> </p>
              </div>

               <div class="inst_tab_item_1">
                <p style="margin-top:30px;">&lt;10&gt; 半半波</p>
                <p>以特码色波和特单双及特大小等为一个投注组合，所选投注组合与开奖号码的特别码的型态一致，即为中奖；若当期开出的特别码为49，则视为和局；其余情形视为不中奖。</p>
                <table>
                    <tbody>

                        <tr style="background:#e2efd9;">
                            <td style="color:red;">红大单</td>
                            <td style="color:red;"> 29,35,45 </td>
                            <td style="color:red;"> 红大双 </td>
                            <td style="color:red;"> 30,34,40,46 </td>
                        </tr>

                        <tr>
                            <td style="color:red;"> 红小单 </td>
                            <td style="color:red;"> 01,07,13,19,23 </td>
                            <td style="color:red;"> 红小双 </td>
                            <td style="color:red;"> 02,08,12,18,24 </td>
                        </tr>


                        <tr style="background:#e2efd9;">
                            <td style="color:#4472C4"> 蓝大单 </td>
                            <td style="color:#4472C4;"> 25,31,37,41,47  </td>
                            <td style="color:#4472C4"> 蓝大双 </td>
                            <td style="color:#4472C4"> 26,36,42,48 </td>
                        </tr>
                            <tr >
                            <td style="color:#4472C4;">蓝小单</td>
                            <td style="color:#4472C4;"> 03,09,15 </td>
                            <td style="color:#4472C4;"> 蓝小双 </td>
                            <td style="color:#4472C4;"> 04,10,14,20 </td>
                        </tr>

                        <tr style="background:#e2efd9;">
                            <td style="color:#00B050"> 绿大单 </td>
                            <td style="color:#00B050;"> 27,33,39,43 </td>
                            <td style="color:#00B050"> 绿大双 </td>
                            <td style="color:#00B050"> 28,32,38,44 </td>
                        </tr>

                            <tr>
                            <td style="color:#00B050;"> 绿小单 </td>
                            <td style="color:#00B050;"> 05,11,17,21 </td>
                            <td style="color:#00B050;"> 绿小双 </td>
                            <td style="color:#00B050;"> 06,16,22 </td>
                        </tr>

                        <tr style="background:#e2efd9;" >
                            <td colspan="4" style="color:red">当期开出的特别码为49时，视为和局，自动返还投注组合本金。</td>
                        </tr>

                    </tbody>
                </table>
                    <p>所选投注组合与开奖号码的特别码的型态一致，即为中奖。例：</p>
                    <p> 开奖号码： <b> 18 31 11 17 01 26 47 </b></p>
                    <p> 投注组合： <b> 蓝大单 </b> </p>
                    <p style="margin-left:25px;"> 状态： <b>中奖</b> </p>
              </div>

               <div class="inst_tab_item_1">
                <p style="margin-top:30px;">&lt;11&gt; 头尾数-特码头数</p>
                <p>特码头数：是指特码属头数的号码；所选投注组合与开奖号码的特别码的型态一致，视为中奖。</p>
                <table>
                    <tbody>

                        <tr style="background:#e2efd9;">
                            <td> “0”头 </td>
                            <td > 01&nbsp; 02&nbsp; 03&nbsp; 04&nbsp;  05&nbsp;  06&nbsp;  07&nbsp;  08&nbsp;  09 </td>
                        </tr>

                        <tr>
                            <td> “1”头 </td>
                            <td> 10&nbsp; 11&nbsp; 12&nbsp; 13&nbsp; 14&nbsp; 15&nbsp; 16&nbsp; 17&nbsp; 18&nbsp; 19&nbsp; </td>
                        </tr>


                        <tr style="background:#e2efd9;">
                            <td > “2”头	 </td>
                            <td > 20&nbsp; 21&nbsp; 22&nbsp; 23&nbsp; 24&nbsp; 25&nbsp; 26&nbsp; 27&nbsp; 28&nbsp; 29  </td>
                        </tr>

                        <tr >
                            <td >“3”头</td>
                            <td > 30&nbsp; 31&nbsp; 32&nbsp; 33&nbsp; 34&nbsp; 35&nbsp; 36&nbsp; 37&nbsp; 38&nbsp; 39 </td>

                        </tr>

                        <tr style="background:#e2efd9;">
                            <td > “4”头 </td>
                            <td > 40&nbsp; 41&nbsp; 42&nbsp; 43&nbsp; 44&nbsp; 45&nbsp; 46&nbsp; 47&nbsp; 48&nbsp; 49 </td>
                        </tr>
                    </tbody>
                </table>
                    <p>所选投注组合与开奖号码的特别码的型态一致，即为中奖。例：</p>
                    <p> 开奖号码： <b> 18 31 11 17 01 26 47 </b></p>
                    <p> 投注组合： <b>  “4”头 </b> </p>
                    <p style="margin-left:25px;"> 状态： <b>中奖</b> </p>
               </div>
               <div class="inst_tab_item_1">
                <p style="margin-top:30px;">&lt;12&gt;  头尾数-特码尾数</p>
                <p>特码尾数：是指特码属尾数的号码；所选投注组合与开奖号码的特别码的型态一致，视为中奖。</p>
                <table>
                    <tbody>

                        <tr style="background:#e2efd9;">
                            <td> “0”尾 </td>
                            <td > 10&nbsp; 20&nbsp; 30&nbsp; 40 </td>
                        </tr>

                        <tr>
                            <td> “1”尾 </td>
                            <td> 01&nbsp; 11&nbsp; 21&nbsp; 31&nbsp; 41</td>
                        </tr>


                        <tr style="background:#e2efd9;">
                            <td > “2”尾	 </td>
                            <td > 02&nbsp; 12&nbsp; 22&nbsp; 32&nbsp; 42</td>
                        </tr>

                        <tr >
                            <td >“3”尾</td>
                            <td > 03&nbsp; 13&nbsp; 23&nbsp; 33&nbsp; 43&nbsp;</td>

                        </tr>

                        <tr style="background:#e2efd9;">
                            <td > “4”尾 </td>
                            <td > 04&nbsp; 14&nbsp; 24&nbsp; 34&nbsp; 44</td>
                        </tr>

                        <tr >
                            <td > “5”尾 </td>
                            <td > 05&nbsp; 15&nbsp; 25&nbsp; 35&nbsp; 45</td>
                        </tr>

                        <tr style="background:#e2efd9;">
                            <td > “6”尾 </td>
                            <td > 06&nbsp; 16&nbsp; 26&nbsp; 36&nbsp; 46</td>
                        </tr>

                        <tr>
                            <td > “7”尾 </td>
                            <td > 07&nbsp; 17&nbsp; 27&nbsp; 37&nbsp; 47</td>
                        </tr>

                        <tr style="background:#e2efd9;">
                            <td > “8”尾 </td>
                            <td > 08&nbsp; 18&nbsp; 28&nbsp; 38&nbsp; 48</td>
                        </tr>

                        <tr >
                            <td > “9”尾 </td>
                            <td > 09&nbsp; 19&nbsp; 29&nbsp; 39&nbsp; 49</td>
                        </tr>

                    </tbody>
                </table>
                    <p>所选投注组合与开奖号码的特别码的型态一致，即为中奖。例：</p>
                    <p> 开奖号码： <b> 18 31 11 17 01 26 47 </b></p>
                    <p> 投注组合： <b>  “7”尾 </b> </p>
                    <p style="margin-left:25px;"> 状态： <b>中奖</b> </p>
               </div>
               <h6 style="margin-top:20px;" id="shortcut_5"> 2、 正码 </h6>
               <div class="only_p">
                    <p> 香港六合彩每期搅珠出的前六个号码为正码。 </p>
                    <p> <1> 总和大小 </p>
                    <p> 总和大：七个开奖号码的分数总和大于或等于175； </p>
                    <p> 总和小：七个开奖号码的分数总和小于或等于174。 </p>
               </div>
               <div class="only_p">
                    <p> <2>总和单双 </p>
                    <p> 总和单：七个开奖号码的分数总和为奇数； </p>
                    <p> 总和双：七个开奖号码的分数总和为偶数 </p>
               </div>

               <div class="inst_tab_item_1">
                    <p style="margin-top:30px;"><3> 正码特</p>
                    <p>香港六合彩当期搅珠出的前6个号码，按开奖出来的先后顺序依次为：正1特、正2特、正3特、正4特、正5特、正6特。从01～49中选择1个号码组成1注，所选投注组合与当期开奖号码指定位置的号码一致，视为中奖。例：</p>
                    <p>所选投注组合与开奖号码的特别码的型态一致，即为中奖。例：</p>
                    <p style="margin-left:25px;"> 位置：  <b>正1特</b> </p>
                    <p> 开奖号码： <b> 18 31 11 17 01 26 47 </b></p>
                    <p> 投注组合： <b>  18 </b> </p>
                    <p style="margin-left:25px;"> 状态： <b>中奖</b> </p>
               </div>

               <div class="inst_tab_item_1">
                    <p style="margin-top:30px;"> <4> 正码1-6</p>
                    <p>香港六合彩当期搅珠出的前6个号码，按开奖出来的先后顺序依次为：正码1、正码2、正码3、正码4、正码5、正码6。正码1～6的大小单双、合单合双合大合小与特别码的大小单双、合单合双合大合小规则一致。如：正码1为28，则正码1为为双码，大码，为合双，为合大，为尾大；正码2为01，则正码2为单码，为小码，为合单，为合小，为尾小；号码49为和。正码1-6色波下注之颜色与开奖之球色，视为中奖。例</p>
                    &lt;!&ndash; <p>所选投注组合与开奖号码的特别码的型态一致，即为中奖。例：</p> &ndash;&gt;
                    <p style="margin-left:25px;"> 位置：  <b>正码1</b> </p>
                    <p> 开奖号码： <b> 18 31 11 17 01 26 47 </b></p>
                    <p> 投注组合： <b>  双码 </b> </p>
                    <p style="margin-left:25px;margin-bottom:20px;"> 状态： <b>中奖</b> </p>


                    <p style="margin-left:25px;"> 位置：  <b>正码1</b> </p>
                    <p> 开奖号码： <b> 49 31 11 17 01 26 47 </b></p>
                    <p> 投注组合： <b>  单码 </b> </p>
                    <p style="margin-left:25px;"> 状态： <b> 和局（退还投注组合本金）</b> </p>
               </div>

                <div class="inst_tab_item_1">
                    <p style="margin-top:30px;"><5> 尾数</p>
                    <p>从“0”尾～“9”尾中选择1个组成1注，当期开奖号码的任意一个尾数与所选投注组合一致，即为中奖。若多个尾数与所选投注组合一致，即为中奖；奖金不倍增，且只派彩一次。</p>
                    <p> 开奖号码： <b> 18 31 11 17 01 26 47 </b></p>
                    <p> 投注组合： <b>  “1”尾 </b> </p>
                    <p style="margin-left:25px;"> 状态： <b>中奖</b> </p>
                    <p> 注：中奖金额=投注金额*赔率*1 </p>
               </div>
               <h6 style="margin-top:40px;" id="shortcut_1">3、 连码</h6>

               <div class="inst_tab_item_1">
                    <p style="margin-top:30px;"><1> 三中二</p>
                    <p>从01～49中选3个号码组成1注，所选投注组合中的任意2个是开奖号码的正码，即为三中二，视为中奖；所选投注组合都是开奖号码的正码，即为三中三，视为中奖。例：</p>
                    <p> 开奖号码： <b> 18 31 11 17 01 26 47 </b></p>
                    <p> 投注组合： <b> 18 31 </b> 25  </p>
                    <p style="margin-left:25px;"> 状态： <b> 三中二</b> </p>
                    <p> 注：中奖金额=投注金额*赔率*1 </p>
                    <p> 开奖号码： <b> 18 31 11 17 01 26 47 </b></p>
                    <p> 投注组合： <b> 18 31 11 </b>   </p>
                    <p style="margin-left:25px;"> 状态： <b> 三中二之中三</b> </p>
               </div>

               <div class="inst_tab_item_1">
                    <p style="margin-top:30px;"><2> 四全中</p>
                    <p>从01～49中选4个号码组成1注，所选投注组合都是开奖号码的正码，视为中奖。例：</p>
                    <p> 开奖号码： <b> 18 31 11 17 01 26 47 </b></p>
                    <p> 投注组合： <b> 18 31 11 17 </b>  </p>
                    <p style="margin-left:25px;"> 状态： <b> 四全中</b> </p>
               </div>

               <div class="inst_tab_item_1">
                    <p style="margin-top:30px;"><3> 三全中</p>
                    <p>从01～49中选3个号码组成1注，所选投注组合都是开奖号码的正码，视为中奖。例：</p>
                    <p> 开奖号码： <b> 18 31 11 17 01 26 47 </b></p>
                    <p> 投注组合： <b> 18 31 01 </b>  </p>
                    <p style="margin-left:25px;"> 状态： <b>  三全中 </b> </p>
                    <p> 注：两个正码和一个特码视为不中奖 </p>
               </div>
               <div class="inst_tab_item_1">
                    <p style="margin-top:30px;"><4> 二全中 </p>
                    <p>从01～49中选2个号码组成1注，所选投注组合都是开奖号码的正码，视为中奖。例：</p>
                    <p> 开奖号码： <b> 18 31 11 17 01 26 47 </b></p>
                    <p> 投注组合： <b>  18 31 </b>  </p>
                    <p style="margin-left:25px;"> 状态： <b>   二全中 </b> </p>
                    注：一个正码和一个特码视为不中奖
               </div>

               <div class="inst_tab_item_1">
                    <p style="margin-top:30px;"><5> 二中特 </p>
                    <p>从01～49中选2个号码组成1注，所选投注组合都是开奖号码的正码，即为二中特之中二，视为中奖；若其中一个是正码，一个是特别码，即为二中特之中特，视为中奖。例：</p>
                    <p> 开奖号码： <b> 18 31 11 17 01 26 47 </b></p>
                    <p> 投注组合： <b>  18 31 </b>  </p>
                    <p style="margin-left:25px;margin-bottom:30px;"> 状态： <b>    二中特之中二 </b> </p>

                    <p> 开奖号码： <b> 18 31 11 17 01 26 47 </b></p>
                    <p> 投注组合： <b>  18 47 </b>  </p>
                    <p style="margin-left:25px;margin-bottom:30px;"> 状态： <b>    二中特之中特 </b> </p>
               </div>
               <div class="inst_tab_item_1">
                    <p style="margin-top:30px;"><6> 特串 </p>
                    <p>从01～49中选2个号码组成1注，开奖号码的特别码与所选投注组合的其中1个号码相同，且正码中包含所选投注组合的另外1个号码，视为二中特之特串。例：</p>
                    <p> 开奖号码： <b> 18 31 11 17 01 26 47 </b></p>
                    <p> 投注组合： <b>  18 47 </b>  </p>
                    <p style="margin-left:25px;margin-bottom:30px;"> 状态： <b> 二中特之特串 </b> </p>
               </div>

              <h6 id="shortcut_6">4、生肖</h6>
              <div class="inst_tab_item_1">
                    <p style="margin-top:30px;"><1> 特码生肖</p>
                    <table>
                        <tbody>
                            <tr style="background:#e2efd9;">
                                <td>  天肖 </td>
                                <td > 兔马猴猪牛龙 </td>
                            </tr>

                            <tr>
                                <td> 地肖 </td>
                                <td> 鼠虎蛇羊鸡狗 </td>
                            </tr>


                            <tr style="background:#e2efd9;">
                                <td > 家肖 </td>
                                <td > 羊马牛猪狗鸡 </td>
                            </tr>

                            <tr >
                                <td > 野肖 </td>
                                <td > 猴蛇龙兔虎鼠 </td>
                            </tr>

                            <tr style="background:#e2efd9;">
                                <td > 前肖 </td>
                                <td > 鼠牛虎兔龙蛇 </td>
                            </tr>

                            <tr >
                                <td > 后肖 </td>
                                <td > 马羊猴鸡狗猪 </td>
                            </tr>
                        </tbody>
                    </table>
               </div>
              <div class="inst_tab_item_1">
                    <p style="margin-top:30px;"><2> 特码生肖</p>
                    <p > 十二生肖顺序依次为：鼠、牛、虎、兔、龙、蛇、马、羊、猴、鸡、狗、猪</p>
                    <table>
                        <tbody>

                            <tr style="background:#e2efd9;">
                                <td>  鸡  </td>
                                <td > 01 13 25 37 49 </td>
                            </tr>

                            <tr>
                                <td> 猴 </td>
                                <td> 02 14 26 38 </td>
                            </tr>

                            <tr style="background:#e2efd9;">
                                <td > 羊 </td>
                                <td > 03 15 27 39 </td>
                            </tr>

                            <tr>
                                <td > 马 </td>
                                <td > 04 16 28 40 </td>
                            </tr>

                            <tr style="background:#e2efd9;">
                                <td > 蛇 </td>
                                <td > 05 17 29 41 </td>
                            </tr>

                            <tr>
                                <td > 龙 </td>
                                <td > 06 18 30 42 </td>
                            </tr>


                            <tr style="background:#e2efd9;">
                                <td > 兔 </td>
                                <td > 07 19 31 43 </td>
                            </tr>

                            <tr >
                                <td > 虎 </td>
                                <td > 08 20 32 44 </td>
                            </tr>


                            <tr style="background:#e2efd9;">
                                <td > 牛 </td>
                                <td >09 21 33 45 </td>
                            </tr>

                            <tr >
                                <td > 鼠 </td>
                                <td > 10 22 34 46 </td>
                            </tr>

                            <tr style="background:#e2efd9;">
                                <td > 猪 </td>
                                <td > 11 23 35 47 </td>
                            </tr>

                            <tr >
                                <td > 狗 </td>
                                <td > 12 24 36 48 </td>
                            </tr>

                        </tbody>
                    </table>
                    <p>从十二生肖中选择1个生肖组成1注，开奖号码的特别号在所选生肖范围内，视为中奖。例：</p>
                    <p> 开奖号码： <b> 18 31 11 17 01 26 47 </b></p>
                    <p> 投注组合： <b>  猪 </b>  </p>
                    <p style="margin-left:25px;margin-bottom:30px;"> 状态： <b>  中奖 </b> </p>
              </div>
              <div class="inst_tab_item_1">
                    <p style="margin-top:30px;"> <3> 正肖 </p>
                    <p > 从十二生肖中选择1个生肖组成1注，当期开奖的前6个号码(不含特码，不分先后顺序)，其中有一个号码在所选生肖范围内即为中奖，中奖金额=投注金额*赔率*1。 如果有N个号码在所选生肖范围内，中奖金额=投注金额*赔率*N。例：</p>
                    <p> 开奖号码： <b> 18 31 11 17 01 26 47 </b></p>
                    <p> 投注组合： <b>  猪 </b>  </p>
                    <p style="margin-left:25px;"> 状态： <b>  中奖 </b> </p>
                    <p>注：中奖金额=投注金额*赔率*2</p>
              </div>
              <div class="inst_tab_item_1">
                    <p style="margin-top:30px;"> <4>一肖 </p>
                    <p > 从十二生肖中选择1个生肖组成1注，当期开奖号码的全部号码，其中任意一个号码对应的生肖在所选生肖范围内即为中奖；多个号码对应的生肖在所选生肖范围内视为中奖；奖金不倍增，且只派彩一次，即不论同生肖的号码出现一个或多个号码都仅派彩一次。</p>
                    <p> 开奖号码： <b> 18 31 11 17 01 26 47 </b></p>
                    <p> 投注组合： <b>  猪 </b>  </p>
                    <p style="margin-left:25px;"> 状态： <b>  中奖 </b> </p>
                    <p>注：中奖金额=投注金额*赔率*1</p>
              </div>

              <h6 id="shortcut_2"> 5、对碰 </h6>

              <div class="inst_tab_item_1">
                    <p> 生肖（尾数）所对应的号码和特码生肖（尾数）规则一致；若单个生肖（尾数）对应多个号码，不管同生肖（尾数）的号码出现一个或多个，都派彩一次。每个生肖（尾数）都有自己的赔率，投注组合的总赔率为该组合生肖（尾数）中的最低赔率。</p>
                    <p style="margin-top:20px;"> <1> 二连肖 </p>
                    <p>从十二生肖中选2个生肖组成1注，所选投注组合在当期开奖号码所对应的生肖中，视为中奖。例：</p>
                    <p> 开奖号码： <b> 01 02 03 04 05 06 07 </b></p>
                    <p> 投注组合： <b> 鸡 猴 </b>  </p>
                    <p style="margin-left:25px;"> 状态： <b>  中奖 </b> </p>
                    <p>注：中奖金额=投注金额*赔率*1</p>
              </div>


              <div class="inst_tab_item_1">
                    <p style="margin-top:40px;"> <2> 三连肖 </p>
                    <p>从十二生肖中选3个生肖组成1注，所选投注组合在当期开奖号码所对应的生肖中，视为中奖。例：</p>
                    <p> 开奖号码： <b> 01 02 03 04 05 06 07 </b></p>
                    <p> 投注组合： <b> 羊 鸡 猴 </b>  </p>
                    <p style="margin-left:25px;"> 状态： <b>  中奖 </b> </p>
              </div>

              <div class="inst_tab_item_1" id="shortcut_12">
                    <p style="margin-top:40px;"> <3> 四连肖 </p>
                    <p>从十二生肖中选4个生肖组成1注，所选投注组合在当期开奖号码所对应的生肖中，视为中奖。例：</p>
                    <p> 开奖号码： <b> 01 02 03 04 05 06 07 </b></p>
                    <p> 投注组合： <b> 鸡 猴 马 羊 </b>  </p>
                    <p style="margin-left:25px;"> 状态： <b>  中奖 </b> </p>
              </div>

              <div class="inst_tab_item_1">
                    <p style="margin-top:40px;"><4> 五连肖 </p>
                    <p>从十二生肖中选5个生肖组成1注，所选投注组合在当期开奖号码所对应的生肖中，视为中奖。例：</p>
                    <p> 开奖号码： <b> 01 02 03 04 05 06 07 </b></p>
                    <p> 投注组合： <b> 鸡 猴 马 羊 蛇 </b>  </p>
                    <p style="margin-left:25px;"> 状态： <b>  中奖 </b> </p>
              </div>

              <div class="inst_tab_item_1">
                    <p style="margin-top:40px;"><4> 五连肖 </p>
                    <p>从十二生肖中选5个生肖组成1注，所选投注组合在当期开奖号码所对应的生肖中，视为中奖。例：</p>
                    <p> 开奖号码： <b> 01 02 03 04 05 06 07 </b></p>
                    <p> 投注组合： <b> 鸡 猴 马 羊 蛇 </b>  </p>
                    <p style="margin-left:25px;"> 状态： <b>  中奖 </b> </p>
              </div>

              <div class="inst_tab_item_1">
                    <p style="margin-top:40px;"> <5> 二连尾 </p>
                    <p>从“0”尾～“9”尾中选2个组成1注，所选投注组合在当期开奖号码所对应的尾数中，视为中奖。例：</p>
                    <p> 开奖号码： <b>  18 31 22 17 01 07 47 </b></p>
                    <p> 投注组合： <b> “8”尾 “7”尾 </b>  </p>
                    <p style="margin-left:25px;"> 状态： <b>  中奖 </b> </p>
              </div>
              <div class="inst_tab_item_1" id="shortcut_11">
                    <p style="margin-top:40px;"> <6> 三连尾 </p>
                    <p>从“0”尾～“9”尾中选3个组成1注，所选投注组合在当期开奖号码所对应的尾数中，视为中奖。例：</p>
                    <p> 开奖号码： <b>  18 31 22 17 01 08 47 </b></p>
                    <p> 投注组合： <b> “8”尾 “7”尾 “1”尾</b>  </p>
                    <p style="margin-left:25px;"> 状态： <b>  中奖 </b> </p>
              </div>

              <div class="inst_tab_item_1">
                    <p style="margin-top:40px;"> <7> 四连尾 </p>
                    <p>从“0”尾～“9”尾中选4个组成1注，所选投注组合在当期开奖号码所对应的尾数中，视为中奖。例：</p>
                    <p> 开奖号码： <b>  18 31 22 17 01 06 47 </b></p>
                    <p> 投注组合： <b>  “8”尾 “7”尾 “1”尾 “6”尾  </b>  </p>
                    <p style="margin-left:25px;"> 状态： <b>  中奖 </b> </p>
              </div>

              <div class="inst_tab_item_1">
                    <p style="margin-top:40px;"> <8> 五连尾</p>
                    <p>从“0”尾～“9”尾中选5个组成1注，所选投注组合在当期开奖号码所对应的尾数中，视为中奖。例：</p>
                    <p> 开奖号码： <b>  18 31 22 17 01 06 47 </b></p>
                    <p> 投注组合： <b>  “8”尾 “7”尾 “1”尾 “6”尾 “3”尾 </b>  </p>
                    <p style="margin-left:25px;"> 状态： <b>  中奖 </b> </p>
              </div>

              <h6 id="shortcut_3"> 6、合肖 </h6>
              <div class="inst_tab_item_1">
                    <p>从十二生肖中选择2个生肖（至多11个）组成1注，若开奖号码（特码为49号除外）对应生肖都在所选生肖范围内，视为中奖；若当期开奖号码的特别码为49时，所选投注组合皆视为和局（和局时，退还投注组合的本金）。</p>
                    <p> 开奖号码： <b> 01  02  03  04  05  06  07  </b></p>
                    <p> 投注组合： <b>  鸡、猴、羊、马、蛇、龙、兔 </b>  </p>
                    <p style="margin-left:25px;"> 状态： <b>  中奖 </b> </p>
              </div>

              <h6 id="shortcut_4"> 7、自选不中 </h6>

              <div class="inst_tab_item_1" id="shortcut_13">
                    <p style="margin-top:40px;"> <1>自选五不中 </p>
                    <p>从01～49中选5个号码组成1注，所选投注组合都不在开奖号码范围内，视为中奖。例：</p>
                    <p> 开奖号码： <b> 01  02  03  04  05  06  07  </b></p>
                    <p> 投注组合： <b>  10 11 12 13 14 </b>  </p>
                    <p style="margin-left:25px;"> 状态： <b>  中奖 </b> </p>
              </div>

              <div class="inst_tab_item_1">
                    <p style="margin-top:40px;"> <2>自选六不中 </p>
                    <p>从01～49中选6个号码组成1注，所选投注组合都不在开奖号码范围内，视为中奖。例：</p>
                    <p> 开奖号码： <b> 01  02  03  04  05  06  07  </b></p>
                    <p> 投注组合： <b>  10 11 12 13 14 15 </b>  </p>
                    <p style="margin-left:25px;"> 状态： <b>  中奖 </b> </p>
              </div>

              <div class="inst_tab_item_1">
                    <p style="margin-top:40px;"> <3>自选七不中 </p>
                    <p>从01～49中选7个号码组成1注，所选投注组合都不在开奖号码范围内，视为中奖。例：</p>
                    <p> 开奖号码： <b> 01  02  03  04  05  06  07  </b></p>
                    <p> 投注组合： <b>  10 11 12 13 14 15 16 </b>  </p>
                    <p style="margin-left:25px;"> 状态： <b>  中奖 </b> </p>
              </div>

              <div class="inst_tab_item_1">
                    <p style="margin-top:40px;"> <4> 自选八不中 </p>
                    <p>从01～49中选8个号码组成1注，所选投注组合都不在开奖号码范围内，视为中奖。例：</p>
                    <p> 开奖号码： <b> 01  02  03  04  05  06  07  </b></p>
                    <p> 投注组合： <b> 10 11 12 13 14 15 16 17 </b>  </p>
                    <p style="margin-left:25px;"> 状态： <b>  中奖 </b> </p>
              </div>

              <div class="inst_tab_item_1">
                    <p style="margin-top:40px;"> <5> 自选九不中 </p>
                    <p>从01～49中选9个号码组成1注，所选投注组合都不在开奖号码范围内，视为中奖。例：</p>
                    <p> 开奖号码： <b> 01 02 03 04 05 06 07 </b></p>
                    <p> 投注组合： <b> 10 11 12 13 14 15 16 17 18 </b>  </p>
                    <p style="margin-left:25px;"> 状态： <b>  中奖 </b> </p>
              </div>

              <div class="inst_tab_item_1">
                    <p style="margin-top:40px;"> <6> 自选十不中 </p>
                    <p>从01～49中选10个号码组成1注，所选投注组合都不在开奖号码范围内，视为中奖。例：</p>
                    <p> 开奖号码： <b> 01 02 03 04 05 06 07 </b></p>
                    <p> 投注组合： <b> 10 11 12 13 14 15 16 17 18 19 </b>  </p>
                    <p style="margin-left:25px;"> 状态： <b>  中奖 </b> </p>
              </div>
              <div class="inst_tab_item_1">
                    <p style="margin-top:40px;"> <7> 自选十一不中 </p>
                    <p>从01～49中选11个号码组成1注，所选投注组合都不在开奖号码范围内，视为中奖。例：</p>
                    <p> 开奖号码： <b> 01 02 03 04 05 06 07 </b></p>
                    <p> 投注组合： <b>  10 11 12 13 14 15 16 17 18 19 20 </b>  </p>
                    <p style="margin-left:25px;"> 状态： <b>  中奖 </b> </p>
              </div>

              <div class="inst_tab_item_1">
                    <p style="margin-top:40px;"> <7> 自选十二不中 </p>
                    <p>从01～49中选12个号码组成1注，所选投注组合都不在开奖号码范围内，视为中奖。例：</p>
                    <p> 开奖号码： <b>  01 02 03 04 05 06 07 </b></p>
                    <p> 投注组合： <b>  10 11 12 13 14 15 16 17 18 19 20 21 </b>  </p>
                    <p style="margin-left:25px;"> 状态： <b>  中奖 </b> </p>
              </div>

              <h6> 8、七色波 </h6>
              <div class="inst_tab_item_1">
                    <p>当期开出的七色波，颜色个数最多的中奖。开出的6个正码各以1个色波统计，特别号以1.5个色波统计。而以下3种结果视为和局。</p>
                     <table>
                         <tbody>

                            <tr style="background:#e2efd9;">
                                <td > 6个正码开出3蓝3绿，特别码是1.5红 </td>
                            </tr>

                            <tr>
                                <td> 6个正码开出3蓝3红，特别码是1.5绿 </td>
                            </tr>

                            <tr style="background:#e2efd9;">
                                <td > 6个正码开出3绿3红，特别码是1.5蓝 </td>
                            </tr>

                            <tr>
                                <td style="color:red;"> 和局时，退还投注红波、绿波、蓝波的金额 </td>
                            </tr>

                        </tbody>
                     </table>
                    <p> 开奖号码： <b>  18 31 22 17 01 07 47 </b></p>
                    <p> 投注组合： <b>  红波 </b>  </p>
                    <p style="margin-left:25px;"> 状态： <b>  中奖 </b> </p>
              </div>
              <h6 id="shortcut_8">9、五行</h6>
              <div class="inst_tab_item_1">
                    <p>当期开出的七色波，颜色个数最多的中奖。开出的6个正码各以1个色波统计，特别号以1.5个色波统计。而以下3种结果视为和局。</p>
                     <table>
                         <tbody>

                            <tr style="background:#e2efd9;">
                                <td>金</td>
                                <td > 03 04 17 18 25 26 33 34 47 48 </td>
                            </tr>
                            <tr>
                                <td>木</td>
                                <td> 07 08 15 16 29 30 37 38 45 46 </td>
                            </tr>

                            <tr style="background:#e2efd9;">
                                <td>水</td>
                                <td > 05 06 13 14 21 22 35 36 43 44 </td>
                            </tr>

                            <tr>
                                <td>火</td>
                                <td > 01 02 09 10 23 24 31 32 39 40 </td>
                            </tr>

                            <tr style="background:#e2efd9;">
                                <td>土</td>
                                <td > 11 12 19 20 27 28 41 42 49 </td>
                            </tr>
                        </tbody>
                     </table>
                     <p>从金、木、水、火、土中选择1个组成1注，开奖号码的特别码在所选投注组合内，视为中奖。例：</p>
                    <p> 开奖号码： <b>  18 31 22 17 01 07 47 </b></p>
                    <p> 投注组合： <b>  金 </b>  </p>
                    <p style="margin-left:25px;"> 状态： <b>  中奖 </b> </p>
              </div>
              <h6 >10、总肖</h6>
               <div class="inst_tab_item_1" id="shortcut_9">
                    <p> <1>总肖 </p>
                    <p>从2肖～7肖中选1个组成1注，所选投注组合与开奖号码对应的生肖总数相同，视为中奖。例：</p>
                    <p>从金、木、水、火、土中选择1个组成1注，开奖号码的特别码在所选投注组合内，视为中奖。例：</p>
                    <p> 开奖号码： <b>  01 02 03 04 05 06 07 </b></p>
                    <p> 投注组合： <b>  7肖 </b>  </p>
                    <p style="margin-left:25px;"> 状态： <b>  中奖 </b> </p>


                    <p> <2>总肖单双 </p>
                    <p>当期开奖号码对应的生肖总数为单则为总肖单，生肖总数为双则为总肖双。例：</p>
                    <p>从金、木、水、火、土中选择1个组成1注，开奖号码的特别码在所选投注组合内，视为中奖。例：</p>
                    <p> 开奖号码： <b>  01 02 03 04 05 06 07 </b></p>
                    <p> 投注组合： <b>  总肖单 </b>  </p>
                    <p style="margin-left:25px;"> 状态： <b>  中奖 </b> </p>
              </div>
        </div>

        <div class="inst_tab_item" v-if="show_swit_li[1]">
             <h2>幸运扑克 <span>游戏规则</span></h2>
             <div class="kuaijie_daohang">
                  <span>快捷导航：</span>
                  <a href="#shortcut_1">花色投注</a>
                  <a href="#shortcut_2">同号投注</a>
                  <a href="#shortcut_3">连号投注</a>
                  <a href="#shortcut_4">任选</a>
             </div>
             <h6 style="margin-top:30px;">一、玩法类型及承销</h6>
             <p>幸运扑克是一种在线视开型彩票玩法，属于基诺型彩票范畴，由本站管理中心负责承销。</p>
             <h6 style="margin-top:30px;">二、购彩方式</h6>
             <ol>
                 <li>1) 用户可通过本站投注，对选定的号码进行投注，或返点投注，返点越高投注赔率则越低。单注金额1元。</li>
                 <li>2) 用户可选择机选号码投注和自选号码投注。机选号码投注是指对投注机随机产生号码进行投注，自选号码投注是指将用户选定的号码输入投注机进行投注。</li>
                 <li>3)追号：追号指将一注或一组号码进行两期或两期以上的投注。追号可分为连续追号和间隔追号，连续追号指追号的期数是连续的，间隔追号指追号的期数不连续。</li>
             </ol>
             <h6> 三、开奖及返奖 </h6>
             <p> 1）开奖 </p>
             <table>
                 <tr>
                     <td>彩种名称</td>
                     <td>开奖时间</td>
                     <td>每日期数</td>
                     <td>开奖频率</td>
                 </tr>

                 <tr>
                     <td rowspan="2">幸运扑克</td>
                     <td>09:00～24:00(北京时间)</td>
                     <td>001～450</td>
                     <td rowspan="2">每2分钟</td>
                 </tr>

                 <tr>
                     <td>00:02～05:58(北京时间)</td>
                     <td>451～630</td>
                 </tr>
             </table>
             <p> 2）返奖：奖金自动返还至用户在本站账户中，可继续投注或提款，永无弃奖。 </p>

             <h6 style="margin-top:30px;">
                四、玩法说明
             </h6>
             <p>幸运扑克是从52张（黑桃、红桃、梅花、方块A～K各13张）扑克牌中随机开出3个号码作为开奖号码（如图一）。快乐扑克分为”花色投注”、“连号投注”、“同号投注”、“任选投注”四种投注方式。</p>
             <p> <img src="../../image/puke.png" alt="扑克" style=""> <i>图一</i></p>

             <h6 style="margin-top:40px;" id="shortcut_1">1、花色投注</h6>
             <div class="inst_tab_item_1">
                <p style="margin-top:30px;"> 花色投注是对所有三个相同花色的号码进行投注。</p>
                <p><1> 同花包选 </p>
                <p>同花包选是对所有花色相同的号码组合进行投注，若开奖号码的三个号码花色一致，视为中奖。例：：</p>
                <p> 开奖号码： <b> 梅花K 梅花5 梅花8 </b></p>
                <p> 投注组合： <b> 同花包选 </b> </p>
                <p style="margin-left:25px;"> 状态： <b>中奖</b> </p>

                <p style="margin-top:30px;"><2>同花单选</p>
                <p>同花单选是对某一种（如梅花）花色相同的号码进行投注，从“黑桃、红桃、梅花、方块”中选择1个组成1注，所选投注组合与开奖号码的三个号码花色都一致，视为中奖。例：</p>
                <p> 开奖号码： <b> 梅花K 梅花5 梅花8 </b></p>
                <p> 投注组合： <b> 梅花 </b> </p>
                <p style="margin-left:25px;"> 状态： <b>中奖</b> </p>
             </div>

             <h6 style="margin-top:40px;" id="shortcut_3">2、连号投注</h6>
              <div class="inst_tab_item_1">
                <p style="margin-top:30px;"> 连号投注是指对所有三个相连的号码（仅限：A23、234、345、456、567、678、789、89<10>、9<10>J、<10>JQ、JQK、QKA）进行投注，具体可分为同花顺包选、同花顺单选、顺子包选、顺子单选。</p>
                <p><1>同花顺包选 </p>
                <p>同花顺包选是所有花色相同的三连号进行投注。若开奖号码的三个号码相连，花色一致，顺序不限。例：</p>
                <p> 开奖号码： <b>  梅花A 梅花2 梅花3 </b></p>
                <p> 投注组合： <b> 同花顺包选 </b> </p>
                <p style="margin-left:25px;"> 状态： <b>中奖</b> </p>

                <p style="margin-top:30px;"><2>同花顺单选</p>
                <p>同花顺单选是某一种花色相同的三连号进行投注。从“红桃顺子、黑桃顺子、梅花顺子、方块顺子”中选择1个组成1注，所选投注组合与开奖号码的三个号码的型态一致（如：红桃K、红桃Q、红桃J），顺序不限。例：</p>
                <p> 开奖号码： <b> 红桃K 红桃Q 红桃J </b></p>
                <p> 投注组合： <b> 红桃顺子 </b> </p>
                <p style="margin-left:25px;"> 状态： <b>中奖</b> </p>

                <p style="margin-top:30px;"> <3>顺子包选 </p>
                <p>顺子包选是所有三连号（不分花色）进行投注。若开奖号码的三个号码相连，顺序不限。例：</p>
                <p> 开奖号码： <b> 红桃K 黑桃Q 麻花J </b></p>
                <p> 投注组合： <b> 顺子包选 </b> </p>
                <p style="margin-left:25px;"> 状态： <b>中奖</b> </p>

                <p style="margin-top:30px;"> <4>顺子单选 </p>
                <p>顺子单选是对某一个三连号（不分花色）进行投注。从三连号（仅限：A23、234、345、456、567、678、789、89<10>、9<10>J、<10>JQ、JQK、QKA）中选择1个组成1注，所选投注组合与开奖号码的数字相同，不分花色，不限顺序，视为中奖。例：</p>
                <p> 开奖号码： <b> 红桃K 黑桃Q 麻花J </b></p>
                <p> 投注组合： <b>  JQK </b> </p>
                <p style="margin-left:25px;"> 状态： <b>中奖</b> </p>
             </div>

             <h6 style="margin-top:40px;" id="shortcut_2">3、同号投注</h6>
              <div class="inst_tab_item_1">
                <p style="margin-top:30px;"> 同号投注是指对包含三个或两个相同号码的组合进行投注，具体分为： </p>
                <p> <1> 豹子包选 </p>
                <p>豹子包选是指对所有“豹子号码”（3个号码均相同）进行投注。若开奖号码的3个数字相同，视为中奖。例：</p>
                <p> 开奖号码： <b> 红桃K 黑桃K 麻花K </b></p>
                <p> 投注组合： <b> 豹子包选 </b> </p>
                <p style="margin-left:25px;"> 状态： <b>中奖</b> </p>

                <p style="margin-top:30px;"><2> 豹子单选</p>
                <p>豹子单选是指对某一个“豹子号码”进行投注。从“豹子号码”（AAA、222、333、444、555、666、777、888、999、<10><10><10>、JJJ、QQQ、KKK）中选择1个组成1注，所选投注组合与开奖号码的号码全部相同，不分花色，视为中奖。例：</p>
                <p> 开奖号码： <b> 红桃K 黑桃K 麻花K </b></p>
                <p> 投注组合： <b>  KKK </b> </p>
                <p style="margin-left:25px;"> 状态： <b>中奖</b> </p>

                <p style="margin-top:30px;"> <3>对子包选 </p>
                <p>对子包选是对所有“对子号码”（3个号码中有且只有2个号码相同）的组合进行投注。若开奖号码中3个号码有且只有2个号码相同，不分花色，视为中奖。例：</p>
                <p> 开奖号码： <b> 红桃K 黑桃K 麻花J </b></p>
                <p> 投注组合： <b> 对子包选 </b> </p>
                <p style="margin-left:25px;"> 状态： <b>中奖</b> </p>

                <p style="margin-top:30px;"> <4> 对子单选 </p>
                <p> 对子单选是对包含某两个相同号码的所有“对子号码”的组合进行投注。从“对子号码”（AA、22、33、44、55、66、77、88、99、<10><10>、JJ、QQ、KK）选择1个组成1注，所选投注组合与开奖号码中任意两个号码相同，不分花色，视为中奖。例：  </p>
                <p> 开奖号码： <b> 红桃K 黑桃K 麻花J </b></p>
                <p> 投注组合： <b>  KK </b> </p>
                <p style="margin-left:25px;"> 状态： <b>中奖</b> </p>
             </div>


             <h6 style="margin-top:40px;" id="shortcut_4">4、任选</h6>
              <div class="inst_tab_item_1">
                <p style="margin-top:30px;"> 任选投注：是指从A-K（不分花色）共13个号码中任选1-6个进行投注，具体分为 </p>
                <p> <1> 任选一 </p>
                <p>从A～K中共13个号码选1个号码组成1注，所选号码与开奖号码中任意1个号码相同，不分花色，视为中奖。例：</p>
                <p> 开奖号码： <b> 红桃K 黑桃K 麻花J </b></p>
                <p> 投注组合： <b> K </b> </p>
                <p style="margin-left:25px;"> 状态： <b>中奖</b> </p>

                <p style="margin-top:30px;"><2> 任选二 </p>
                <p>从A～K中共13个号码选2个号码组成1注，所选号码与开奖号码中任意2个号码相同，不分花色，不限顺序，视为中奖。例：</p>
                <p> 开奖号码： <b> 红桃K 黑桃K 麻花J </b></p>
                <p> 投注组合： <b>  KJ </b> </p>
                <p style="margin-left:25px;"> 状态： <b>中奖</b> </p>

                <p style="margin-top:30px;"> <3>任选三 </p>
                <p>从A～K中共13个号码选3个号码组成1注，所选号码与开奖号码相同，不分花色，视为中奖，不限顺序。例：</p>
                <p> 开奖号码： <b> 红桃K 黑桃9 麻花J </b></p>
                <p> 投注组合： <b> 9KJ </b> </p>
                <p style="margin-left:25px;"> 状态： <b>中奖</b> </p>

                <p style="margin-top:30px;"> <4> 任选四 </p>
                <p> 从A～K中共13个号码选4个号码组成1注，若开奖号码全部在所选号码中出现，不分花色，不限顺序，视为中奖。例：  </p>
                <p> 开奖号码： <b> 红桃K 黑桃9 麻花J </b></p>
                <p> 投注组合： <b>  9KJA </b> </p>
                <p style="margin-left:25px;"> 状态： <b>中奖</b> </p>

                <p style="margin-top:30px;"> <5> 任选五 </p>
                <p> 从A～K中共13个号码选5个号码组成1注，若开奖号码全部在所选号码中出现，不分花色，不限顺序，视为中奖。例：  </p>
                <p> 开奖号码： <b> 红桃K 黑桃9 麻花J </b></p>
                <p> 投注组合： <b>  9KJA2 </b> </p>
                <p style="margin-left:25px;"> 状态： <b>中奖</b> </p>

                <p style="margin-top:30px;"> <6>任选六 </p>
                <p> 从A～K中共13个号码选6个号码组成1注，若开奖号码全部在所选号码中出现，不分花色，不限顺序，视为中奖。例：  </p>
                <p> 开奖号码： <b> 红桃K 黑桃9 麻花J </b></p>
                <p> 投注组合： <b>  9KJA23 </b> </p>
                <p style="margin-left:25px;"> 状态： <b>中奖</b> </p>

             </div>


        </div>
        <div  class="inst_tab_item" v-if="show_swit_li[2]">
             <h2>上海时时乐 <span>游戏规则</span></h2>
              <div class="kuaijie_daohang">
                  <span>快捷导航：</span>
                  <a href="#shortcut_1">前二大小单双</a>
                  <a href="#shortcut_2">后二大小单双</a>
                  <a href="#shortcut_3">前二直选</a>
                  <a href="#shortcut_4">后二直选</a>
                  <a href="#shortcut_5">三星直选</a>
                  <a href="#shortcut_6">后二组选</a>
                  <a href="#shortcut_7">前二组选</a>
                  <a href="#shortcut_8">三星组三</a>
                  <a href="#shortcut_9">三星组六</a>
                  <a href="#shortcut_10">三星组三和值</a>
                  <a href="#shortcut_11">三星组六和值</a>
                  <a href="#shortcut_12">三星直选和值</a>
                  <a href="#shortcut_13">定位胆</a>
                  <a href="#shortcut_14">一码不定位</a>
                  <a href="#shortcut_15">二码不定位</a>
             </div>
             <h6>一、玩法类型及承销</h6>
             <p>上海时时乐是一种小盘玩法游戏，属数字型彩票范畴，由中国福利彩票发行管理中心统一组织发行，在全国范围内销售。</p>
             <h6 style="margin-top:50px;">二、购彩方式</h6>
             <ol>
                 <li>1) 用户可通过本站投注，对选定的号码进行投注，或返点投注，返点越高投注赔率则越低。单注金额1元。</li>
                 <li>2) 用户可选择机选号码投注和自选号码投注。机选号码投注是指对投注机随机产生号码进行投注，自选号码投注是指将用户选定的号码输入投注机进行投注。</li>
                 <li>3)追号：追号指将一注或一组号码进行两期或两期以上的投注。追号可分为连续追号和间隔追号，连续追号指追号的期数是连续的，间隔追号指追号的期数不连续。</li>
             </ol>
             <h6> 三、开奖及返奖 </h6>
             <strong>1）开奖</strong>
             <table>
                 <tbody>
                     <tr>
                         <td>彩种名称</td>
                         <td>开奖时间</td>
                         <td>每周期数</td>
                         <td>开奖频率</td>
                     </tr>
                     <tr>
                         <td> 上海时时乐 </td>
                         <td> 10:30～22:00(北京时间) </td>
                         <td> 001～023 </td>
                         <td> 30分钟 </td>
                     </tr>
                 </tbody>
             </table>
             <strong> 2）返奖：奖金自动返还至用户在本站账户中，可继续投注或提款，永无弃奖。 </strong>
             <h6> 四、玩法说明 </h6>
             <p>上海时时乐投注区分为百位、十位和个位，各位号码范围为0～9，每期从各位上开出1个号码组成中奖号码（如图一）。上海时时乐玩法即是竞猜3位开奖号码的全部或部分号码。</p>
             <p> <img src="../../image/6_3_9.png" alt=""> </p>

             <h6 style="margin-top:40px;" id="shortcut_13">1、定位胆</h6>
             <div class="inst_tab_item_1">
                <p style="margin-top:30px;"> 从百位、十位、个位中选择1个位置，从0～9中选择1个号码组成1注，所选投注组合与开奖号码对应位置的号码一致，视为中奖。例：</p>
                <p style="margin-left:25px;"> 位置： <b> 百位 </b> </p>
                <p> 开奖号码： <b>  1  2  3 </b></p>
                <p> 投注组合： <b> 1 </b> </p>
                <p style="margin-left:25px;"> 状态： <b> 中定位胆 </b> </p>
             </div>

             <h6 style="margin-top:40px;" id="shortcut_14">2、一码不定位</h6>
             <div class="inst_tab_item_1">
                <p style="margin-top:30px;"> 从0～9中选择1个号码组成1注，所选投注组合与开奖号码的任意1位相同，视为中奖。例：</p>
                <p> 开奖号码： <b>  1  2  3 </b></p>
                <p> 投注组合： <b> 1 </b> </p>
                <p style="margin-left:25px;"> 状态： <b> 中一码不定位 </b> </p>
             </div>


             <h6 style="margin-top:40px;" id="shortcut_15">3、二码不定位</h6>
             <div class="inst_tab_item_1">
                <p style="margin-top:30px;"> 从0～9中选择2个号码组成1注，所选投注组合与开奖号码的任意2位相同，不限顺序，视为中奖。例：</p>
                <p> 开奖号码： <b>  1  2  3 </b></p>
                <p> 投注组合： <b> 1 2 </b> </p>
                <p style="margin-left:25px;"> 状态： <b> 中二码不定位 </b> </p>
             </div>


             <h6 style="margin-top:40px;" id="shortcut_5">4、三星直选复式</h6>
             <div class="inst_tab_item_1">
                <p style="margin-top:30px;"> 从百位、十位和个位各选1个号码组成1注，所选投注组合与开奖号码全部相同，且顺序一致，视为中奖。例：</p>
                <p> 开奖号码： <b>  3 4 5 </b></p>
                <p> 投注组合： <b> 3 4 5 </b> </p>
                <p style="margin-left:25px;"> 状态： <b> 中三星直选复式 </b> </p>
             </div>


             <h6 style="margin-top:40px;" id="shortcut_8">5、三星组三复式</h6>
             <div class="inst_tab_item_1">
                <p style="margin-top:30px;"> 组三是指开奖号码的任意两个号码相同。从0～9中选2个号码组成多注，所选投注组合与开奖号码全部相同，顺序不限，视为中奖。例：</p>
                <p> 开奖号码： <b>  3 4 4 </b></p>
                <p style="margin-left:25px;"> 选号： 4 3 </p>
                <p> 实际选号：  <b> 3 4 4 </b> </p>
                <p style="margin-left:68px;"> 3  3  4</p>
                <p style="margin-left:25px;"> 状态： <b>  中三星组三复式 </b> </p>
             </div>


             <h6 style="margin-top:40px;" id="shortcut_9">6、三星组六复式</h6>
             <div class="inst_tab_item_1">
                <p style="margin-top:30px;"> 组六是指开奖号码的三个号码各不相同。从0～9中选择3个号码组成1注，所选投注组合与开奖号码全部相同，顺序不限，视为中奖。例：</p>
                <p> 开奖号码： <b>  3 4 5 </b></p>
                <p> 投注组合： <b> 3 4 5 </b> </p>
                <p style="margin-left:25px;"> 状态： <b>  中三星组六复式 </b> </p>
             </div>


             <h6 style="margin-top:40px;" id="shortcut_10">7、三星组三和值</h6>
             <div class="inst_tab_item_1">
                <p style="margin-top:30px;"> 从1～26中选择1个和值号码组成1注或多注，所选投注组合与开奖号码（组三型）全部相同，不限顺序，视为中奖。例：</p>
                <p> 开奖号码： <b>  1 1 0 </b></p>
                <p style="margin-left:25px;"> 选号： 2 </p>
                <p> 投注组合：  <b> 0 0 1 </b> </p>
                <p style="margin-left:68px;">  0 0 2 </p>
                <p style="margin-left:25px;"> 状态： <b>  中三星组三和值 </b> </p>
             </div>


             <h6 style="margin-top:40px;" id="shortcut_11">8、三星组六和值</h6>
             <div class="inst_tab_item_1">
                <p style="margin-top:30px;"> 从3～24中选择1个和值号码组成1注或多注，所选投注组合与开奖号码（组六型）全部相同，不限顺序，视为中奖。例：</p>
                <p> 开奖号码： <b>  0 1 2 </b></p>
                <p style="margin-left:25px;"> 选号： 3 </p>
                <p> 投注组合：  <b> 0 1 2 </b> </p>
                <p style="margin-left:25px;"> 状态： <b>  中三星组六和值 </b> </p>
             </div>


             <h6 style="margin-top:40px;" id="shortcut_12">9、三星直选和值</h6>
             <div class="inst_tab_item_1">
                <p style="margin-top:30px;"> 从0～27中选择1个和值号码组成1注或多注，所选投注组合与开奖号码全部相同，且顺序一致，视为中奖。例：</p>
                <p> 开奖号码： <b>  0 0 1 </b></p>
                <p style="margin-left:25px;"> 选号： 1 </p>
                <p> 实际选号：  <b> 0 0 1 </b> </p>
                <p style="margin-left:68px;"> 0 1 0 </p>
                <p style="margin-left:68px;"> 1 0 0 </p>
                <p style="margin-left:25px;"> 状态： <b>  中三星直选和值 </b> </p>
             </div>


             <h6 style="margin-top:40px;" id="shortcut_3">10、前二直选</h6>
             <div class="inst_tab_item_1">
                <p style="margin-top:30px;"> 从百位、十位上各选1个号码组成1注，所选投注组合与相同位置的开奖号码的相同，且顺序一致，视为中奖。例：</p>
                <p style="margin-left:25px;"> 位置： <b>  百位和十位 </b></p>
                <p> 开奖号码： <b>  0 1 2 </b></p>
                <p> 投注组合：  <b> 0 1 </b> </p>
                <p style="margin-left:25px;"> 状态： <b>  中前二直选 </b> </p>
             </div>


             <h6 style="margin-top:40px;" id="shortcut_4">11、后二直选</h6>
             <div class="inst_tab_item_1">
                <p style="margin-top:30px;"> 从十位、个位上各选1个号码组成1注，所选投注组合与相同位置的开奖号码的相同，且顺序一致，视为中奖。例：</p>
                <p style="margin-left:25px;"> 位置： <b>  十位和个位 </b></p>
                <p> 开奖号码： <b>  0 1 2 </b></p>
                <p> 投注组合：  <b> 0 1 </b> </p>
                <p style="margin-left:25px;"> 状态： <b>  中后二直选 </b> </p>
             </div>


             <h6 style="margin-top:40px;" id="shortcut_7">12、前二组选</h6>
             <div class="inst_tab_item_1">
                <p style="margin-top:30px;"> 从0～9选2个号码组成1注，所选投注组合与开奖号码的指定位置号码相同，不限顺序，视为中奖。例：</p>
                &lt;!&ndash; <p style="margin-left:25px;"> 位置： <b>  十位和个位 </b></p> &ndash;&gt;
                <p> 开奖号码： <b>  0 1 2 </b></p>
                <p> 投注组合：  <b> 0 1 </b> </p>
                <p style="margin-left:25px;"> 状态： <b>  中前二组选 </b> </p>
             </div>


             <h6 style="margin-top:40px;" id="shortcut_6">13、后二组选</h6>
             <div class="inst_tab_item_1">
                <p style="margin-top:30px;"> 从0～9选2个号码组成1注，所选投注组合与开奖号码的指定位置号码相同，不限顺序，即为中奖。例：</p>
                &lt;!&ndash; <p style="margin-left:25px;"> 位置： <b>  十位和个位 </b></p> &ndash;&gt;
                <p> 开奖号码： <b>  0 1 2 </b></p>
                <p> 投注组合：  <b style="margin-left:12px;">   2 1 </b> </p>
                <p style="margin-left:25px;"> 状态： <b>  中前二组选 </b> </p>
             </div>


             <h6 style="margin-top:40px;">14、大小单双</h6>
             <div class="inst_tab_item_1">
                 <p> 大：5～9；小：0～4；单：1,3,5,7,9；双：0,2,4,6,8。 </p>
                 <p id="shortcut_1"> <1> 前二大小单双 </p>
                 <p> 从万位、千位中的“大、小、单、双”各选1个组成1注。对万位、千位中的“大、小、单、双”型态进行购彩，所选号码的位置、型态与开奖号码的位置、型态相同，即为中奖。 </p>
                 <p> 开奖号码： <b>  9 8 7 </b></p>
                 <p> 开奖号码： <b> 大双</b></p>
                 <p style="margin-left:25px;"> 状态： <b>  中前二大小单双 </b> </p>

                 <p id="shortcut_2"> <2> 后二大小单双</p>
                 <p> 从十位、个位中的“大、小、单、双”各选1个组成1注。对十位、个位中的“大、小、单、双”型态进行购彩，所选号码的位置、型态与开奖号码的位置、型态相同，即为中奖。 </p>
                 <p> 开奖号码： <b>  9 8 7 </b></p>
                 <p> 开奖号码： <b> 大大 </b></p>
                 <p style="margin-left:25px;"> 状态： <b>  中后二大小单双 </b> </p>
             </div>

        </div>

        <div  class="inst_tab_item" v-if="show_swit_li[3]">
             <h2>排列三 <span>游戏规则</span></h2>
              <div class="kuaijie_daohang">
                  <span>快捷导航：</span>
                  <a href="#shortcut_1">前二大小单双</a>
                  <a href="#shortcut_2">后二大小单双</a>
                  <a href="#shortcut_3">前二直选</a>
                  <a href="#shortcut_4">后二直选</a>
                  <a href="#shortcut_5">三星直选</a>
                  <a href="#shortcut_6">后二组选</a>
                  <a href="#shortcut_7">前二组选</a>
                  <a href="#shortcut_8">三星组三</a>
                  <a href="#shortcut_9">三星组六</a>
                  <a href="#shortcut_10">三星组三和值</a>
                  <a href="#shortcut_11">三星组六和值</a>
                  <a href="#shortcut_12">三星直选和值</a>
                  <a href="#shortcut_13">定位胆</a>
                  <a href="#shortcut_14">一码不定位</a>
                  <a href="#shortcut_15">二码不定位</a>
             </div>
             <h6>一、玩法类型及承销</h6>
             <p>上海时时乐是一种小盘玩法游戏，属数字型彩票范畴，由中国福利彩票发行管理中心统一组织发行，在全国范围内销售。</p>
             <h6 style="margin-top:50px;">二、购彩方式</h6>
             <ol>
                 <li>1) 用户可通过本站投注，对选定的号码进行投注，或返点投注，返点越高投注赔率则越低。单注金额1元。</li>
                 <li>2) 用户可选择机选号码投注和自选号码投注。机选号码投注是指对投注机随机产生号码进行投注，自选号码投注是指将用户选定的号码输入投注机进行投注。</li>
                 <li>3)追号：追号指将一注或一组号码进行两期或两期以上的投注。追号可分为连续追号和间隔追号，连续追号指追号的期数是连续的，间隔追号指追号的期数不连续。</li>
             </ol>
             <h6> 三、开奖及返奖 </h6>
             <strong>1）开奖</strong>
             <table>
                 <tbody>
                     <tr>
                         <td>彩种名称</td>
                         <td>开奖时间</td>
                         <td>每周期数</td>
                         <td>开奖频率</td>
                     </tr>
                     <tr>
                         <td> 排列三 </td>
                         <td> 每晚20:30(北京时间) </td>
                         <td> 1 </td>
                         <td> 24小时 </td>
                     </tr>
                 </tbody>
             </table>
             <strong> 2）返奖：奖金自动返还至用户在本站账户中，可继续投注或提款，永无弃奖。 </strong>
             <h6> 四、玩法说明 </h6>
             <p>排列三投注区分为百位、十位和个位，各位号码范围为0～9，每期从各位上开出1个号码组成中奖号码（如图一）。上海时时乐玩法即是竞猜3位开奖号码的全部或部分号码。</p>
             <p> <img src="../../image/6_3_9.png" alt=""> </p>

             <h6 style="margin-top:40px;" id="shortcut_13">1、定位胆</h6>
             <div class="inst_tab_item_1">
                <p style="margin-top:30px;"> 从百位、十位、个位中选择1个位置，从0～9中选择1个号码组成1注，所选投注组合与开奖号码对应位置的号码一致，视为中奖。例：</p>
                <p style="margin-left:25px;"> 位置： <b> 百位 </b> </p>
                <p> 开奖号码： <b>  1  2  3 </b></p>
                <p> 投注组合： <b> 1 </b> </p>
                <p style="margin-left:25px;"> 状态： <b> 中定位胆 </b> </p>
             </div>

             <h6 style="margin-top:40px;" id="shortcut_14">2、一码不定位</h6>
             <div class="inst_tab_item_1">
                <p style="margin-top:30px;"> 从0～9中选择1个号码组成1注，所选投注组合与开奖号码的任意1位相同，视为中奖。例：</p>
                <p> 开奖号码： <b>  1  2  3 </b></p>
                <p> 投注组合： <b> 1 </b> </p>
                <p style="margin-left:25px;"> 状态： <b> 中一码不定位 </b> </p>
             </div>


             <h6 style="margin-top:40px;" id="shortcut_15">3、二码不定位</h6>
             <div class="inst_tab_item_1">
                <p style="margin-top:30px;"> 从0～9中选择2个号码组成1注，所选投注组合与开奖号码的任意2位相同，不限顺序，视为中奖。例：</p>
                <p> 开奖号码： <b>  1  2  3 </b></p>
                <p> 投注组合： <b> 1 2 </b> </p>
                <p style="margin-left:25px;"> 状态： <b> 中二码不定位 </b> </p>
             </div>


             <h6 style="margin-top:40px;" id="shortcut_5">4、三星直选复式</h6>
             <div class="inst_tab_item_1">
                <p style="margin-top:30px;"> 从百位、十位和个位各选1个号码组成1注，所选投注组合与开奖号码全部相同，且顺序一致，视为中奖。例：</p>
                <p> 开奖号码： <b>  3 4 5 </b></p>
                <p> 投注组合： <b> 3 4 5 </b> </p>
                <p style="margin-left:25px;"> 状态： <b> 中三星直选复式 </b> </p>
             </div>


             <h6 style="margin-top:40px;" id="shortcut_8">5、三星组三复式</h6>
             <div class="inst_tab_item_1">
                <p style="margin-top:30px;"> 组三是指开奖号码的任意两个号码相同。从0～9中选2个号码组成多注，所选投注组合与开奖号码全部相同，顺序不限，视为中奖。例：</p>
                <p> 开奖号码： <b>  3 4 4 </b></p>
                <p style="margin-left:25px;"> 选号： 4 3 </p>
                <p> 实际选号：  <b> 3 4 4 </b> </p>
                <p style="margin-left:68px;"> 3  3  4</p>
                <p style="margin-left:25px;"> 状态： <b>  中三星组三复式 </b> </p>
             </div>


             <h6 style="margin-top:40px;" id="shortcut_9">6、三星组六复式</h6>
             <div class="inst_tab_item_1">
                <p style="margin-top:30px;"> 组六是指开奖号码的三个号码各不相同。从0～9中选择3个号码组成1注，所选投注组合与开奖号码全部相同，顺序不限，视为中奖。例：</p>
                <p> 开奖号码： <b>  3 4 5 </b></p>
                <p> 投注组合： <b> 3 4 5 </b> </p>
                <p style="margin-left:25px;"> 状态： <b>  中三星组六复式 </b> </p>
             </div>


             <h6 style="margin-top:40px;" id="shortcut_10">7、三星组三和值</h6>
             <div class="inst_tab_item_1">
                <p style="margin-top:30px;"> 从1～26中选择1个和值号码组成1注或多注，所选投注组合与开奖号码（组三型）全部相同，不限顺序，视为中奖。例：</p>
                <p> 开奖号码： <b>  1 1 0 </b></p>
                <p style="margin-left:25px;"> 选号： 2 </p>
                <p> 投注组合：  <b> 0 0 1 </b> </p>
                <p style="margin-left:68px;">  0 0 2 </p>
                <p style="margin-left:25px;"> 状态： <b>  中三星组三和值 </b> </p>
             </div>


             <h6 style="margin-top:40px;" id="shortcut_11">8、三星组六和值</h6>
             <div class="inst_tab_item_1">
                <p style="margin-top:30px;"> 从3～24中选择1个和值号码组成1注或多注，所选投注组合与开奖号码（组六型）全部相同，不限顺序，视为中奖。例：</p>
                <p> 开奖号码： <b>  0 1 2 </b></p>
                <p style="margin-left:25px;"> 选号： 3 </p>
                <p> 投注组合：  <b> 0 1 2 </b> </p>
                <p style="margin-left:25px;"> 状态： <b>  中三星组六和值 </b> </p>
             </div>


             <h6 style="margin-top:40px;" id="shortcut_12">9、三星直选和值</h6>
             <div class="inst_tab_item_1">
                <p style="margin-top:30px;"> 从0～27中选择1个和值号码组成1注或多注，所选投注组合与开奖号码全部相同，且顺序一致，视为中奖。例：</p>
                <p> 开奖号码： <b>  0 0 1 </b></p>
                <p style="margin-left:25px;"> 选号： 1 </p>
                <p> 实际选号：  <b> 0 0 1 </b> </p>
                <p style="margin-left:68px;"> 0 1 0 </p>
                <p style="margin-left:68px;"> 1 0 0 </p>
                <p style="margin-left:25px;"> 状态： <b>  中三星直选和值 </b> </p>
             </div>


             <h6 style="margin-top:40px;" id="shortcut_3">10、前二直选</h6>
             <div class="inst_tab_item_1">
                <p style="margin-top:30px;"> 从百位、十位上各选1个号码组成1注，所选投注组合与相同位置的开奖号码的相同，且顺序一致，视为中奖。例：</p>
                <p style="margin-left:25px;"> 位置： <b>  百位和十位 </b></p>
                <p> 开奖号码： <b>  0 1 2 </b></p>
                <p> 投注组合：  <b> 0 1 </b> </p>
                <p style="margin-left:25px;"> 状态： <b>  中前二直选 </b> </p>
             </div>


             <h6 style="margin-top:40px;" id="shortcut_4">11、后二直选</h6>
             <div class="inst_tab_item_1">
                <p style="margin-top:30px;"> 从十位、个位上各选1个号码组成1注，所选投注组合与相同位置的开奖号码的相同，且顺序一致，视为中奖。例：</p>
                <p style="margin-left:25px;"> 位置： <b>  十位和个位 </b></p>
                <p> 开奖号码： <b>  0 1 2 </b></p>
                <p> 投注组合：  <b> 0 1 </b> </p>
                <p style="margin-left:25px;"> 状态： <b>  中后二直选 </b> </p>
             </div>


             <h6 style="margin-top:40px;" id="shortcut_7">12、前二组选</h6>
             <div class="inst_tab_item_1">
                <p style="margin-top:30px;"> 从0～9选2个号码组成1注，所选投注组合与开奖号码的指定位置号码相同，不限顺序，视为中奖。例：</p>
                &lt;!&ndash; <p style="margin-left:25px;"> 位置： <b>  十位和个位 </b></p> &ndash;&gt;
                <p> 开奖号码： <b>  0 1 2 </b></p>
                <p> 投注组合：  <b> 0 1 </b> </p>
                <p style="margin-left:25px;"> 状态： <b>  中前二组选 </b> </p>
             </div>


             <h6 style="margin-top:40px;" id="shortcut_6">13、后二组选</h6>
             <div class="inst_tab_item_1">
                <p style="margin-top:30px;"> 从0～9选2个号码组成1注，所选投注组合与开奖号码的指定位置号码相同，不限顺序，即为中奖。例：</p>
                &lt;!&ndash; <p style="margin-left:25px;"> 位置： <b>  十位和个位 </b></p> &ndash;&gt;
                <p> 开奖号码： <b>  0 1 2 </b></p>
                <p> 投注组合：  <b style="margin-left:12px;">   2 1 </b> </p>
                <p style="margin-left:25px;"> 状态： <b>  中前二组选 </b> </p>
             </div>


             <h6 style="margin-top:40px;">14、大小单双</h6>
             <div class="inst_tab_item_1">
                 <p> 大：5～9；小：0～4；单：1,3,5,7,9；双：0,2,4,6,8。 </p>
                 <p id="shortcut_1"> <1> 前二大小单双 </p>
                 <p> 从万位、千位中的“大、小、单、双”各选1个组成1注。对万位、千位中的“大、小、单、双”型态进行购彩，所选号码的位置、型态与开奖号码的位置、型态相同，即为中奖。 </p>
                 <p> 开奖号码： <b>  9 8 7 </b></p>
                 <p> 开奖号码： <b> 大双</b></p>
                 <p style="margin-left:25px;"> 状态： <b>  中前二大小单双 </b> </p>

                 <p id="shortcut_2"> <2> 后二大小单双</p>
                 <p> 从十位、个位中的“大、小、单、双”各选1个组成1注。对十位、个位中的“大、小、单、双”型态进行购彩，所选号码的位置、型态与开奖号码的位置、型态相同，即为中奖。 </p>
                 <p> 开奖号码： <b>  9 8 7 </b></p>
                 <p> 开奖号码： <b> 大大 </b></p>
                 <p style="margin-left:25px;"> 状态： <b>  中后二大小单双 </b> </p>
             </div>

        </div>
        <div  class="inst_tab_item" v-if="show_swit_li[4]">
             <h2>福彩3D <span>游戏规则</span></h2>
                <div class="kuaijie_daohang">
                  <span>快捷导航：</span>
                  <a href="#shortcut_1">前二大小单双</a>
                  <a href="#shortcut_2">后二大小单双</a>
                  <a href="#shortcut_3">前二直选</a>
                  <a href="#shortcut_4">后二直选</a>
                  <a href="#shortcut_5">三星直选</a>
                  <a href="#shortcut_6">后二组选</a>
                  <a href="#shortcut_7">前二组选</a>
                  <a href="#shortcut_8">三星组三</a>
                  <a href="#shortcut_9">三星组六</a>
                  <a href="#shortcut_10">三星组三和值</a>
                  <a href="#shortcut_11">三星组六和值</a>
                  <a href="#shortcut_12">三星直选和值</a>
                  <a href="#shortcut_13">定位胆</a>
                  <a href="#shortcut_14">一码不定位</a>
                  <a href="#shortcut_15">二码不定位</a>
                </div>
             <h6>一、玩法类型及承销</h6>
             <p>上海时时乐是一种小盘玩法游戏，属数字型彩票范畴，由中国福利彩票发行管理中心统一组织发行，在全国范围内销售。</p>
             <h6 style="margin-top:50px;">二、购彩方式</h6>
             <ol>
                 <li>1) 用户可通过本站投注，对选定的号码进行投注，或返点投注，返点越高投注赔率则越低。单注金额1元。</li>
                 <li>2) 用户可选择机选号码投注和自选号码投注。机选号码投注是指对投注机随机产生号码进行投注，自选号码投注是指将用户选定的号码输入投注机进行投注。</li>
                 <li>3)追号：追号指将一注或一组号码进行两期或两期以上的投注。追号可分为连续追号和间隔追号，连续追号指追号的期数是连续的，间隔追号指追号的期数不连续。</li>
             </ol>
             <h6> 三、开奖及返奖 </h6>
             <strong>1）开奖</strong>
             <table>
                 <tbody>
                     <tr>
                         <td>彩种名称</td>
                         <td>开奖时间</td>
                         <td>每周期数</td>
                         <td>开奖频率</td>
                     </tr>
                     <tr>
                         <td> 福彩3D </td>
                         <td> 每晚21:15(北京时间)</td>
                         <td> 1 </td>
                         <td> 24小时 </td>
                     </tr>
                 </tbody>
             </table>
             <strong> 2）返奖：奖金自动返还至用户在本站账户中，可继续投注或提款，永无弃奖。 </strong>
             <h6> 四、玩法说明 </h6>
             <p>福彩3D投注区分为百位、十位和个位，各位号码范围为0～9，每期从各位上开出1个号码组成中奖号码（如图一）。上海时时乐玩法即是竞猜3位开奖号码的全部或部分号码。</p>
             <p> <img src="../../image/6_3_9.png" alt=""> </p>

             <h6 style="margin-top:40px;" id="shortcut_13">1、定位胆</h6>
             <div class="inst_tab_item_1">
                <p style="margin-top:30px;"> 从百位、十位、个位中选择1个位置，从0～9中选择1个号码组成1注，所选投注组合与开奖号码对应位置的号码一致，视为中奖。例：</p>
                <p style="margin-left:25px;"> 位置： <b> 百位 </b> </p>
                <p> 开奖号码： <b>  1  2  3 </b></p>
                <p> 投注组合： <b> 1 </b> </p>
                <p style="margin-left:25px;"> 状态： <b> 中定位胆 </b> </p>
             </div>

             <h6 style="margin-top:40px;" id="shortcut_14">2、一码不定位</h6>
             <div class="inst_tab_item_1">
                <p style="margin-top:30px;"> 从0～9中选择1个号码组成1注，所选投注组合与开奖号码的任意1位相同，视为中奖。例：</p>
                <p> 开奖号码： <b>  1  2  3 </b></p>
                <p> 投注组合： <b> 1 </b> </p>
                <p style="margin-left:25px;"> 状态： <b> 中一码不定位 </b> </p>
             </div>


             <h6 style="margin-top:40px;" id="shortcut_15">3、二码不定位</h6>
             <div class="inst_tab_item_1">
                <p style="margin-top:30px;"> 从0～9中选择2个号码组成1注，所选投注组合与开奖号码的任意2位相同，不限顺序，视为中奖。例：</p>
                <p> 开奖号码： <b>  1  2  3 </b></p>
                <p> 投注组合： <b> 1 2 </b> </p>
                <p style="margin-left:25px;"> 状态： <b> 中二码不定位 </b> </p>
             </div>


             <h6 style="margin-top:40px;" id="shortcut_5">4、三星直选复式</h6>
             <div class="inst_tab_item_1">
                <p style="margin-top:30px;"> 从百位、十位和个位各选1个号码组成1注，所选投注组合与开奖号码全部相同，且顺序一致，视为中奖。例：</p>
                <p> 开奖号码： <b>  3 4 5 </b></p>
                <p> 投注组合： <b> 3 4 5 </b> </p>
                <p style="margin-left:25px;"> 状态： <b> 中三星直选复式 </b> </p>
             </div>


             <h6 style="margin-top:40px;" id="shortcut_8">5、三星组三复式</h6>
             <div class="inst_tab_item_1">
                <p style="margin-top:30px;"> 组三是指开奖号码的任意两个号码相同。从0～9中选2个号码组成多注，所选投注组合与开奖号码全部相同，顺序不限，视为中奖。例：</p>
                <p> 开奖号码： <b>  3 4 4 </b></p>
                <p style="margin-left:25px;"> 选号： 4 3 </p>
                <p> 实际选号：  <b> 3 4 4 </b> </p>
                <p style="margin-left:68px;"> 3  3  4</p>
                <p style="margin-left:25px;"> 状态： <b>  中三星组三复式 </b> </p>
             </div>


             <h6 style="margin-top:40px;" id="shortcut_9">6、三星组六复式</h6>
             <div class="inst_tab_item_1">
                <p style="margin-top:30px;"> 组六是指开奖号码的三个号码各不相同。从0～9中选择3个号码组成1注，所选投注组合与开奖号码全部相同，顺序不限，视为中奖。例：</p>
                <p> 开奖号码： <b>  3 4 5 </b></p>
                <p> 投注组合： <b> 3 4 5 </b> </p>
                <p style="margin-left:25px;"> 状态： <b>  中三星组六复式 </b> </p>
             </div>


             <h6 style="margin-top:40px;" id="shortcut_10">7、三星组三和值</h6>
             <div class="inst_tab_item_1">
                <p style="margin-top:30px;"> 从1～26中选择1个和值号码组成1注或多注，所选投注组合与开奖号码（组三型）全部相同，不限顺序，视为中奖。例：</p>
                <p> 开奖号码： <b>  1 1 0 </b></p>
                <p style="margin-left:25px;"> 选号： 2 </p>
                <p> 投注组合：  <b> 0 0 1 </b> </p>
                <p style="margin-left:68px;">  0 0 2 </p>
                <p style="margin-left:25px;"> 状态： <b>  中三星组三和值 </b> </p>
             </div>


             <h6 style="margin-top:40px;" id="shortcut_11">8、三星组六和值</h6>
             <div class="inst_tab_item_1">
                <p style="margin-top:30px;"> 从3～24中选择1个和值号码组成1注或多注，所选投注组合与开奖号码（组六型）全部相同，不限顺序，视为中奖。例：</p>
                <p> 开奖号码： <b>  0 1 2 </b></p>
                <p style="margin-left:25px;"> 选号： 3 </p>
                <p> 投注组合：  <b> 0 1 2 </b> </p>
                <p style="margin-left:25px;"> 状态： <b>  中三星组六和值 </b> </p>
             </div>


             <h6 style="margin-top:40px;" id="shortcut_12">9、三星直选和值</h6>
             <div class="inst_tab_item_1">
                <p style="margin-top:30px;"> 从0～27中选择1个和值号码组成1注或多注，所选投注组合与开奖号码全部相同，且顺序一致，视为中奖。例：</p>
                <p> 开奖号码： <b>  0 0 1 </b></p>
                <p style="margin-left:25px;"> 选号： 1 </p>
                <p> 实际选号：  <b> 0 0 1 </b> </p>
                <p style="margin-left:68px;"> 0 1 0 </p>
                <p style="margin-left:68px;"> 1 0 0 </p>
                <p style="margin-left:25px;"> 状态： <b>  中三星直选和值 </b> </p>
             </div>


             <h6 style="margin-top:40px;" id="shortcut_3">10、前二直选</h6>
             <div class="inst_tab_item_1">
                <p style="margin-top:30px;"> 从百位、十位上各选1个号码组成1注，所选投注组合与相同位置的开奖号码的相同，且顺序一致，视为中奖。例：</p>
                <p style="margin-left:25px;"> 位置： <b>  百位和十位 </b></p>
                <p> 开奖号码： <b>  0 1 2 </b></p>
                <p> 投注组合：  <b> 0 1 </b> </p>
                <p style="margin-left:25px;"> 状态： <b>  中前二直选 </b> </p>
             </div>


             <h6 style="margin-top:40px;" id="shortcut_4">11、后二直选</h6>
             <div class="inst_tab_item_1">
                <p style="margin-top:30px;"> 从十位、个位上各选1个号码组成1注，所选投注组合与相同位置的开奖号码的相同，且顺序一致，视为中奖。例：</p>
                <p style="margin-left:25px;"> 位置： <b>  十位和个位 </b></p>
                <p> 开奖号码： <b>  0 1 2 </b></p>
                <p> 投注组合：  <b> 0 1 </b> </p>
                <p style="margin-left:25px;"> 状态： <b>  中后二直选 </b> </p>
             </div>


             <h6 style="margin-top:40px;" id="shortcut_7">12、前二组选</h6>
             <div class="inst_tab_item_1">
                <p style="margin-top:30px;"> 从0～9选2个号码组成1注，所选投注组合与开奖号码的指定位置号码相同，不限顺序，视为中奖。例：</p>
                &lt;!&ndash; <p style="margin-left:25px;"> 位置： <b>  十位和个位 </b></p> &ndash;&gt;
                <p> 开奖号码： <b>  0 1 2 </b></p>
                <p> 投注组合：  <b> 0 1 </b> </p>
                <p style="margin-left:25px;"> 状态： <b>  中前二组选 </b> </p>
             </div>


             <h6 style="margin-top:40px;" id="shortcut_6">13、后二组选</h6>
             <div class="inst_tab_item_1">
                <p style="margin-top:30px;"> 从0～9选2个号码组成1注，所选投注组合与开奖号码的指定位置号码相同，不限顺序，即为中奖。例：</p>
                &lt;!&ndash; <p style="margin-left:25px;"> 位置： <b>  十位和个位 </b></p> &ndash;&gt;
                <p> 开奖号码： <b>  0 1 2 </b></p>
                <p> 投注组合：  <b style="margin-left:12px;">   2 1 </b> </p>
                <p style="margin-left:25px;"> 状态： <b>  中前二组选 </b> </p>
             </div>


             <h6 style="margin-top:40px;">14、大小单双</h6>
             <div class="inst_tab_item_1">
                 <p> 大：5～9；小：0～4；单：1,3,5,7,9；双：0,2,4,6,8。 </p>
                 <p id="shortcut_1"> <1> 前二大小单双 </p>
                 <p> 从万位、千位中的“大、小、单、双”各选1个组成1注。对万位、千位中的“大、小、单、双”型态进行购彩，所选号码的位置、型态与开奖号码的位置、型态相同，即为中奖。 </p>
                 <p> 开奖号码： <b>  9 8 7 </b></p>
                 <p> 开奖号码： <b> 大双</b></p>
                 <p style="margin-left:25px;"> 状态： <b>  中前二大小单双 </b> </p>

                 <p id="shortcut_2"> <2> 后二大小单双</p>
                 <p> 从十位、个位中的“大、小、单、双”各选1个组成1注。对十位、个位中的“大、小、单、双”型态进行购彩，所选号码的位置、型态与开奖号码的位置、型态相同，即为中奖。 </p>
                 <p> 开奖号码： <b>  9 8 7 </b></p>
                 <p> 开奖号码： <b> 大大 </b></p>
                 <p style="margin-left:25px;"> 状态： <b>  中后二大小单双 </b> </p>
             </div>
        </div>
        <div  class="inst_tab_item" v-if="show_swit_li[5]">
             <h2>极速六合彩 <span>游戏规则</span></h2>
             <div class="kuaijie_daohang">
                 <span>快捷导航：</span>
                  <a href="#shortcut_1">连码</a>
                  <a href="#shortcut_2">对碰</a>
                  <a href="#shortcut_3">合肖</a>
                  <a href="#shortcut_4">自选不中</a>
                  <a href="#shortcut_5">正码</a>
                  <a href="#shortcut_6">生肖</a>
                  <a href="#shortcut_7">特码</a>
                  <a href="#shortcut_8">五行</a>
                  <a href="#shortcut_9">总肖</a>
                  <a href="#shortcut_10">特码AB盘</a>
                  <a href="#shortcut_11">三连尾</a>
                  <a href="#shortcut_12">四连肖</a>
                  <a href="#shortcut_13">自选五不中</a>
             </div>

             <h6>一、简介</h6>
             <p>六合彩是从1至49个号码中选出六个为中奖号码的奖券，由香港赛马会的附属公司「香港马会奖券有限公司」经办 。六合彩每星期搅珠三次，通常于星期二、星期四及非赛马日之星期六或日晚上举行，并由电视台现场直播。</p>
             <h6 style="margin-top:40px;"> 二、重要申明 </h6>
             <ol>
                <li>1、如果客户怀疑自己的资料被盗用，应立即通知本公司，并更改个人详细资料，且之前所使用的使用者名称及密码将全部无效。</li>
                <li>2、客户有责任确保自己的帐户及登入资料的保密性。在本网站上以个人的使用者名称及密码进行的任何网上投注将被视为有效。</li>
                <li>3、为了避免出现争议，请务必在下注之后检查“ 下注状况 ”。</li>
                <li>4、开奖后接受的投注，将被视为无效。</li>
                <li>5、任何的投诉必须在开奖之前提出，本公司将不会受理任何开奖之后的投诉。</li>
                <li>6、公布赔率时出现的任何打字错误或非故意人为失误，本公司将保留改正错误和按正确赔率结算注单的权力。</li>
                <li>7、公布之所有赔率为浮动赔率，派彩时的赔率将以本公司确认投注时之赔率为准。</li>
                <li>8、如本公司察觉客户投注状况异常时，有权即时中止客户投注；在本公司中止下注前，客户之所有投注仍属有效，不得要求取消或延迟交收，以及不得有任何异议。</li>
             </ol>

             <h6 style="margin-top:40px;">三、购彩方式</h6>
             <ol>
                 <li>1) 用户可通过本站投注，对选定的号码进行投注，或返点投注，返点越高投注赔率则越低。单注金额1元。</li>
                 <li>2) 用户可选择机选号码投注和自选号码投注。机选号码投注是指对投注机随机产生号码进行投注，自选号码投注是指将用户选定的号码输入投注机进行投注。</li>
                 <li>3)追号：追号指将一注或一组号码进行两期或两期以上的投注。追号可分为连续追号和间隔追号，连续追号指追号的期数是连续的，间隔追号指追号的期数不连续。</li>
             </ol>

             <h6> 四、开奖及返奖 </h6>
             <strong>1）开奖</strong>
             <table>
                 <tbody>
                     <tr>
                         <td>彩种名称</td>
                         <td>开奖时间</td>
                         <td>每周期数</td>
                     </tr>
                     <tr>
                         <td>香港六合彩</td>
                         <td>每周二、周四、周六（或周日）21:30（北京时间）</td>
                         <td>3</td>
                     </tr>
                 </tbody>
             </table>
             <strong> 2）返奖：奖金自动返还至用户在本站账户中，可继续投注或提款，永无弃奖。 </strong>

             <h6 style="margin-top:40px;"> 五、玩法说明 </h6>
             <p>每期六合彩搅珠均从01～49个号码中搅出七个号码作为开奖号码，首六个号码称为「搅出号码」，而第七个号码称为「特別号码」（如图一），<em>开奖号码包括搅出号码和特别码。</em> </p>
             <p>
               <img src="../../image/six.png" alt="" style="margin : 15px auto;">
                <i>图一</i>
             </p>
             <h6 style="margin-top:20px;" id="shortcut_7">1、 特码</h6>
             <div class="inst_tab_item_1">
                <p style="margin-top:30px;" id="shortcut_10"> &lt;1&gt; 特码AB盘 </p>
                <p>香港六合彩公司当期开出的第七个号码为特码或特别码。特码A盘是一种含有10%返水（不计输赢）的竞猜特码的玩法，特码B盘是一种不含返水、竞猜特码的玩法。从01～49中选择1个号码组成1注，所选号码与开奖号码的特码一致，即为中奖。例：</p>
                <p> 开奖号码： <b> 18 31 11 17 01 26 47 </b></p>
                <p> 投注组合： <b> 47 </b> </p>
                <p style="margin-left:25px;"> 状态： <b>中奖</b> </p>
             </div>

             <div class="inst_tab_item_1">
                <p style="margin-top:30px;">&lt;2&gt; 特码大小</p>
                <table>
                    <tbody>
                        <tr>
                            <td rowspan="2">特大</td>
                            <td style="background:#e2efd9">当期开出的特别码大于或等于25，小于或等于48</td>
                        </tr>
                        <tr>
                            <td >25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48</td>
                        </tr>
                        <tr>
                            <td rowspan="2">特小</td>
                            <td style="background:#e2efd9">当期开出的特别码大于或等于1，小于或等于24</td>
                        </tr>

                        <tr>
                            <td > 01 02 03 04 05 06 07 08 09 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 </td>
                        </tr>

                        <tr>
                            <td>和局</td>
                            <td style="color:red;background:#e2efd9">当期开出的特别码为49时，视为和局，自动返还投注组合本金。</td>
                        </tr>
                    </tbody>
                </table>

                <p>所选投注组合与开奖号码的特别码的型态一致，即为中奖。例：</p>
                <p> 开奖号码： <b> 18 31 11 17 01 26 47 </b></p>
                <p> 投注组合： <b> 特大 </b> </p>
                <p style="margin-left:25px;"> 状态： <b>中奖</b> </p>
             </div>
             <div class="inst_tab_item_1">
                <p style="margin-top:30px;">&lt;3&gt; 特码单双</p>
                <table>
                    <tbody>
                        <tr>
                            <td rowspan="2">特双</td>
                            <td style="background:#e2efd9">当期开出的特别码为偶数</td>
                        </tr>
                        <tr>
                            <td>
                                <span class="highlight_red">02</span>
                                <span class="highlight_blue">04</span>
                                <span class="highlight_green">06</span>
                                <span class="highlight_red">08</span>
                                <span class="highlight_blue">10</span>
                                <span class="highlight_red">12</span>
                                <span class="highlight_blue">14</span>
                                <span class="highlight_green">16</span>
                                <span class="highlight_red">18</span>
                                <span class="highlight_blue">20</span>
                                <span class="highlight_green">22</span>
                                <span class="highlight_red">24</span>
                                <span class="highlight_blue">26</span>
                                <span class="highlight_green">28</span>
                                <span class="highlight_red">30</span>
                                <span class="highlight_green">32</span>
                                <span class="highlight_red">34</span>
                                <span class="highlight_blue">36</span>
                                <span class="highlight_green">38</span>
                                <span class="highlight_red">40</span>
                                <span class="highlight_blue">42</span>
                                <span class="highlight_green">44</span>
                                <span class="highlight_red">46</span>
                                <span class="highlight_blue">48</span>
                            </td>
                        </tr>
                        <tr>
                            <td rowspan="2">特单</td>
                            <td style="background:#e2efd9">当期开出的特别码大于或等于1，小于或等于24</td>
                        </tr>
                        <tr>
                            <td>
                                <span class="highlight_red">01</span>
                                <span class="highlight_blue">03</span>
                                <span class="highlight_green">05</span>
                                <span class="highlight_red">07</span>
                                <span class="highlight_blue">09</span>
                                <span class="highlight_red">11</span>
                                <span class="highlight_blue">13</span>
                                <span class="highlight_green">15</span>
                                <span class="highlight_red">17</span>
                                <span class="highlight_blue">19</span>
                                <span class="highlight_green">21</span>
                                <span class="highlight_red">23</span>
                                <span class="highlight_blue">25</span>
                                <span class="highlight_green">27</span>
                                <span class="highlight_red">29</span>
                                <span class="highlight_green">31</span>
                                <span class="highlight_red">33</span>
                                <span class="highlight_blue">35</span>
                                <span class="highlight_green">37</span>
                                <span class="highlight_red">39</span>
                                <span class="highlight_blue">41</span>
                                <span class="highlight_green">43</span>
                                <span class="highlight_red">45</span>
                                <span class="highlight_blue">47</span>
                            </td>
                        </tr>

                        <tr>
                            <td>和局</td>
                            <td style="color:red;background:#e2efd9">当期开出的特别码为49时，视为和局，自动返还投注组合本金。</td>
                        </tr>
                    </tbody>
                </table>

                <p>所选投注组合与开奖号码的特别码的型态一致，即为中奖。例：</p>
                <p> 开奖号码： <b> 18 31 11 17 01 26 47 </b></p>
                <p> 投注组合： <b> 特单 </b> </p>
                <p style="margin-left:25px;"> 状态： <b>中奖</b> </p>
                <p> 注：特别码为47；个位为7，十位为4，个位与十位的和值为11，故为特合单。 </p>
             </div>

             <div class="inst_tab_item_1">
                <p style="margin-top:30px;">&lt;4&gt; 特码合数单双</p>
                <table>
                    <tbody>
                        <tr>
                            <td rowspan="2">特合双</td>
                            <td style="background:#e2efd9">当期开出的特别码的个位加上十位之和为“偶数”</td>
                        </tr>
                        <tr>
                            <td>
                                <span class="highlight_red">02</span>
                                <span class="highlight_blue">04</span>
                                <span class="highlight_green">06</span>
                                <span class="highlight_red">08</span>
                                <span class="highlight_blue">10</span>
                                <span class="highlight_red">12</span>
                                <span class="highlight_blue">14</span>
                                <span class="highlight_green">16</span>
                                <span class="highlight_red">18</span>
                                <span class="highlight_blue">20</span>
                                <span class="highlight_green">22</span>
                                <span class="highlight_red">24</span>
                                <span class="highlight_blue">26</span>
                                <span class="highlight_green">28</span>
                                <span class="highlight_red">30</span>
                                <span class="highlight_green">32</span>
                                <span class="highlight_red">34</span>
                                <span class="highlight_blue">36</span>
                                <span class="highlight_green">38</span>
                                <span class="highlight_red">40</span>
                                <span class="highlight_blue">42</span>
                                <span class="highlight_green">44</span>
                                <span class="highlight_red">46</span>
                                <span class="highlight_blue">48</span>
                            </td>
                        </tr>
                        <tr>
                            <td rowspan="2">特合单</td>
                            <td style="background:#e2efd9">当期开出的特别码的个位加上十位之和为“奇数”</td>
                        </tr>
                        <tr>
                            <td>
                                <span class="highlight_red">01</span>
                                <span class="highlight_blue">03</span>
                                <span class="highlight_green">05</span>
                                <span class="highlight_red">07</span>
                                <span class="highlight_blue">09</span>
                                <span class="highlight_red">11</span>
                                <span class="highlight_blue">13</span>
                                <span class="highlight_green">15</span>
                                <span class="highlight_red">17</span>
                                <span class="highlight_blue">19</span>
                                <span class="highlight_green">21</span>
                                <span class="highlight_red">23</span>
                                <span class="highlight_blue">25</span>
                                <span class="highlight_green">27</span>
                                <span class="highlight_red">29</span>
                                <span class="highlight_green">31</span>
                                <span class="highlight_red">33</span>
                                <span class="highlight_blue">35</span>
                                <span class="highlight_green">37</span>
                                <span class="highlight_red">39</span>
                                <span class="highlight_blue">41</span>
                                <span class="highlight_green">43</span>
                                <span class="highlight_red">45</span>
                                <span class="highlight_blue">47</span>
                            </td>
                        </tr>

                        <tr>
                            <td>和局</td>
                            <td style="color:red; background:#e2efd9;">当期开出的特别码为49时，投注特合单、特合双本金自动返还至账户</td>
                        </tr>
                    </tbody>
                </table>

                <p>所选投注组合与开奖号码的特别码的型态一致，即为中奖。例：</p>
                <p> 开奖号码： <b> 18 31 11 17 01 26 47 </b></p>
                <p> 投注组合： <b> 特合单 </b> </p>
                <p style="margin-left:25px;"> 状态： <b>中奖</b> </p>
                <p> 注：特别码为47；个位为7，十位为4，个位与十位的和值为11，故为特合单。 </p>
             </div>

             <div class="inst_tab_item_1">
                <p style="margin-top:30px;">&lt;5&gt; 特码合数大小</p>
                <table>
                    <tbody>
                        <tr>
                            <td rowspan="2">特合大</td>
                            <td style="background:#e2efd9">当期开出的特码的个位加上十位之和大于等于7为特合大</td>
                        </tr>
                        <tr>
                            <td >如： &nbsp;08、09、43、45、36、27</td>
                        </tr>
                        <tr>
                            <td rowspan="2">特合小</td>
                            <td style="background:#e2efd9">当期开出的特码的个位加上十位之和小于等于6为特合小</td>
                        </tr>

                        <tr>
                            <td >如：&nbsp;30、10、21、22、14、32 </td>
                        </tr>

                        <tr>
                            <td>和局</td>
                            <td style="color:red;background:#e2efd9;">当期开出的特别码为49时，视为和局，自动返还投注组合本金。</td>
                        </tr>
                    </tbody>
                </table>
                <p>所选投注组合与开奖号码的特别码的型态一致，即为中奖。例：</p>
                <p> 开奖号码： <b> 18 31 11 17 01 26 47 </b></p>
                <p> 投注组合： <b> 特合大 </b> </p>
                <p style="margin-left:25px;"> 状态： <b>中奖</b> </p>
                <p>注：特码为47；个位为7，十位为4，个位与十位的和值为11，故为特合大。 </p>
             </div>

              <div class="inst_tab_item_1">
                <p style="margin-top:30px;">&lt;6&gt; 特码尾数大小</p>
                <table>
                    <tbody>
                        <tr>
                            <td rowspan="2">特尾大</td>
                            <td style="background:#e2efd9">当期开出的特码的个位数大于等于5为特尾大</td>
                        </tr>
                        <tr>
                            <td > 5尾、6尾、7尾、8尾、9尾</td>
                        </tr>
                        <tr>
                            <td rowspan="2">特尾小</td>
                            <td style="background:#e2efd9">当期开出的特码的个位数小于等于4为特尾小</td>
                        </tr>

                        <tr>
                            <td > 0尾、1尾、2尾、3尾、4尾 </td>
                        </tr>

                        <tr>
                            <td>和局</td>
                            <td style="color:red;background:#e2efd9;">当期开出的特别码为49时，视为和局，自动返还投注组合本金。</td>
                        </tr>
                    </tbody>
                </table>
                <p>所选投注组合与开奖号码的特别码的型态一致，即为中奖。例：</p>
                <p> 开奖号码： <b> 18 31 11 17 01 26 47 </b></p>
                <p> 投注组合： <b> 特尾大 </b> </p>
                <p style="margin-left:25px;"> 状态： <b>中奖</b> </p>
                <p>注：特码为47；个位为7，故为特尾大。 </p>
              </div>

              <div class="inst_tab_item_1">
                <p style="margin-top:30px;">&lt;7&gt; 特码半特</p>
                <p> 以特码大小与特码单双为一个投注组合，所选投注组合与开奖号码的特别码的型态一致，即为中奖。若当期开出的特别码为49，则视为和局；其余情形视为不中奖。</p>
                <table>
                    <tbody>
                        <tr>
                            <td>特大单</td>
                            <td style="background:#e2efd9"> 25 27 29 31 33 35 37 39 41 43 45 47 </td>
                        </tr>
                        <tr>
                            <td>特大双</td>
                            <td > 26 28 30 32 34 36 38 40 42 44 46 48 </td>
                        </tr>
                        <tr>
                            <td > 特小单 </td>
                            <td style="background:#e2efd9"> 01 03 05 07 09 11 13 15 17 19 21 23 </td>
                        </tr>

                        <tr>
                            <td> 特小双 </td>
                            <td > 02 04 06 08 10 12 14 16 18 20 22 24 </td>
                        </tr>

                        <tr>
                            <td>和局</td>
                            <td style="color:red;background:#e2efd9;">当期开出的特别码为49时，视为和局，自动返还投注组合本金。</td>
                        </tr>
                    </tbody>
                </table>
                &lt;!&ndash; <p>所选投注组合与开奖号码的特别码的型态一致，即为中奖。例：</p> &ndash;&gt;
                <p> 开奖号码： <b> 18 31 11 17 01 26 47 </b></p>
                <p> 投注组合： <b> 特大单 </b> </p>
                <p style="margin-left:25px;"> 状态： <b>中奖</b> </p>
                &lt;!&ndash; <p>注：特码为47；个位为7，故为特尾大。 </p> &ndash;&gt;
              </div>


              <div class="inst_tab_item_1">
                <p style="margin-top:30px;">&lt;8&gt; 特码色波</p>
                <p>香港六合彩49个号码有红、绿、蓝三种颜色，所选波色与开奖号码的特别号码的颜色一致，视为中奖。</p>
                <table>
                    <tbody>
                        <tr style="background:#e2efd9;">
                            <td style="color:red;">红波</td>
                            <td style="color:red;">01, 02, 07, 08, 12, 13, 18, 19, 23, 24, 29, 30, 34, 35, 40, 45, 46</td>
                        </tr>

                        <tr>
                            <td style="color:#4472C4"> 蓝波 </td>
                            <td style="color:#4472C4;"> 03, 04, 09, 10, 14, 15, 20, 25, 26, 31, 36, 37, 41, 42, 47, 48 </td>
                        </tr>
                        <tr style="background:#e2efd9;">
                            <td style="color:#00B050;">绿波</td>
                            <td style="background:#e2efd9;color:#00B050;">05, 06, 11, 16, 17, 21, 22, 27, 28, 32, 33, 38, 39, 43, 44, 49</td>
                        </tr>
                    </tbody>
                </table>
                <p>所选投注组合与开奖号码的特别码的型态一致，即为中奖。例：</p>
                <p> 开奖号码： <b> 18 31 11 17 01 26 47 </b></p>
                <p> 投注组合： <b> 蓝波 </b> </p>
                <p style="margin-left:25px;"> 状态： <b>中奖</b> </p>
              </div>

              <div class="inst_tab_item_1">
                <p style="margin-top:30px;">&lt;9&gt; 半波</p>
                <p>以特码色波和特单、特双、特大、特小为一个投注组合，所选投注组合与开奖号码的特别码的型态一致，即为中奖。若当期开出的特别码为49，则视为和局；其余情形视为不中奖</p>
                <table>
                    <tbody>

                        <tr style="background:#e2efd9;">
                            <td style="color:red;">红单</td>
                            <td style="color:red;">01,07,13,19,23,29,35,45</td>
                            <td style="color:red;">红双</td>
                            <td style="color:red;">02, 08,12,18,24,30,34,40,46</td>
                        </tr>

                        <tr >
                            <td style="color:red;">红大</td>
                            <td style="color:red;"> 29,30,34,35,40,45,46 </td>
                            <td style="color:red;"> 红小 </td>
                            <td style="color:red;"> 01,02,07,08,12,13,18,19,23,24 </td>
                        </tr>


                        <tr style="background:#e2efd9;">
                            <td style="color:#4472C4"> 蓝单 </td>
                            <td style="color:#4472C4;"> 03,09,15,25,31,37,47  </td>
                            <td style="color:#4472C4"> 蓝双 </td>
                            <td style="color:#4472C4"> 04,10,14,20,26,36,42,48  </td>
                        </tr>
                            <tr >
                            <td style="color:#4472C4;">蓝大</td>
                            <td style="color:#4472C4;"> 25,26,31,36,37,41,42,47,48 </td>
                            <td style="color:#4472C4;"> 蓝小 </td>
                            <td style="color:#4472C4;">03,04,09,10,14,15,20 </td>
                        </tr>

                        <tr style="background:#e2efd9;">
                            <td style="color:#00B050"> 绿单 </td>
                            <td style="color:#00B050;"> 05,11,17,21,27,33,39,43 </td>
                            <td style="color:#00B050"> 绿双 </td>
                            <td style="color:#00B050"> 06,16,22,28,32,38,44 </td>
                        </tr>

                            <tr>
                            <td style="color:#00B050;">蓝大</td>
                            <td style="color:#00B050;"> 27,28,32,33,38,39,43,44 </td>
                            <td style="color:#00B050;"> 蓝小 </td>
                            <td style="color:#00B050;"> 05,06,11,16,17,21,22 </td>
                        </tr>

                        <tr style="background:#e2efd9;" >
                            <td colspan="4" style="color:red">当期开出的特别码为49时，视为和局，自动返还投注组合本金。</td>
                        </tr>

                    </tbody>
                </table>
                    <p>所选投注组合与开奖号码的特别码的型态一致，即为中奖。例：</p>
                    <p> 开奖号码： <b> 18 31 11 17 01 26 47 </b></p>
                    <p> 投注组合： <b> 蓝大 </b> </p>
                    <p style="margin-left:25px;"> 状态： <b>中奖</b> </p>
              </div>

               <div class="inst_tab_item_1">
                <p style="margin-top:30px;">&lt;10&gt; 半半波</p>
                <p>以特码色波和特单双及特大小等为一个投注组合，所选投注组合与开奖号码的特别码的型态一致，即为中奖；若当期开出的特别码为49，则视为和局；其余情形视为不中奖。</p>
                <table>
                    <tbody>

                        <tr style="background:#e2efd9;">
                            <td style="color:red;">红大单</td>
                            <td style="color:red;"> 29,35,45 </td>
                            <td style="color:red;"> 红大双 </td>
                            <td style="color:red;"> 30,34,40,46 </td>
                        </tr>

                        <tr>
                            <td style="color:red;"> 红小单 </td>
                            <td style="color:red;"> 01,07,13,19,23 </td>
                            <td style="color:red;"> 红小双 </td>
                            <td style="color:red;"> 02,08,12,18,24 </td>
                        </tr>


                        <tr style="background:#e2efd9;">
                            <td style="color:#4472C4"> 蓝大单 </td>
                            <td style="color:#4472C4;"> 25,31,37,41,47  </td>
                            <td style="color:#4472C4"> 蓝大双 </td>
                            <td style="color:#4472C4"> 26,36,42,48 </td>
                        </tr>
                            <tr >
                            <td style="color:#4472C4;">蓝小单</td>
                            <td style="color:#4472C4;"> 03,09,15 </td>
                            <td style="color:#4472C4;"> 蓝小双 </td>
                            <td style="color:#4472C4;"> 04,10,14,20 </td>
                        </tr>

                        <tr style="background:#e2efd9;">
                            <td style="color:#00B050"> 绿大单 </td>
                            <td style="color:#00B050;"> 27,33,39,43 </td>
                            <td style="color:#00B050"> 绿大双 </td>
                            <td style="color:#00B050"> 28,32,38,44 </td>
                        </tr>

                            <tr>
                            <td style="color:#00B050;"> 绿小单 </td>
                            <td style="color:#00B050;"> 05,11,17,21 </td>
                            <td style="color:#00B050;"> 绿小双 </td>
                            <td style="color:#00B050;"> 06,16,22 </td>
                        </tr>

                        <tr style="background:#e2efd9;" >
                            <td colspan="4" style="color:red">当期开出的特别码为49时，视为和局，自动返还投注组合本金。</td>
                        </tr>

                    </tbody>
                </table>
                    <p>所选投注组合与开奖号码的特别码的型态一致，即为中奖。例：</p>
                    <p> 开奖号码： <b> 18 31 11 17 01 26 47 </b></p>
                    <p> 投注组合： <b> 蓝大单 </b> </p>
                    <p style="margin-left:25px;"> 状态： <b>中奖</b> </p>
              </div>

               <div class="inst_tab_item_1">
                <p style="margin-top:30px;">&lt;11&gt; 头尾数-特码头数</p>
                <p>特码头数：是指特码属头数的号码；所选投注组合与开奖号码的特别码的型态一致，视为中奖。</p>
                <table>
                    <tbody>

                        <tr style="background:#e2efd9;">
                            <td> “0”头 </td>
                            <td > 01&nbsp; 02&nbsp; 03&nbsp; 04&nbsp;  05&nbsp;  06&nbsp;  07&nbsp;  08&nbsp;  09 </td>
                        </tr>

                        <tr>
                            <td> “1”头 </td>
                            <td> 10&nbsp; 11&nbsp; 12&nbsp; 13&nbsp; 14&nbsp; 15&nbsp; 16&nbsp; 17&nbsp; 18&nbsp; 19&nbsp; </td>
                        </tr>


                        <tr style="background:#e2efd9;">
                            <td > “2”头	 </td>
                            <td > 20&nbsp; 21&nbsp; 22&nbsp; 23&nbsp; 24&nbsp; 25&nbsp; 26&nbsp; 27&nbsp; 28&nbsp; 29  </td>
                        </tr>

                        <tr >
                            <td >“3”头</td>
                            <td > 30&nbsp; 31&nbsp; 32&nbsp; 33&nbsp; 34&nbsp; 35&nbsp; 36&nbsp; 37&nbsp; 38&nbsp; 39 </td>

                        </tr>

                        <tr style="background:#e2efd9;">
                            <td > “4”头 </td>
                            <td > 40&nbsp; 41&nbsp; 42&nbsp; 43&nbsp; 44&nbsp; 45&nbsp; 46&nbsp; 47&nbsp; 48&nbsp; 49 </td>
                        </tr>
                    </tbody>
                </table>
                    <p>所选投注组合与开奖号码的特别码的型态一致，即为中奖。例：</p>
                    <p> 开奖号码： <b> 18 31 11 17 01 26 47 </b></p>
                    <p> 投注组合： <b>  “4”头 </b> </p>
                    <p style="margin-left:25px;"> 状态： <b>中奖</b> </p>
               </div>
               <div class="inst_tab_item_1">
                <p style="margin-top:30px;">&lt;12&gt;  头尾数-特码尾数</p>
                <p>特码尾数：是指特码属尾数的号码；所选投注组合与开奖号码的特别码的型态一致，视为中奖。</p>
                <table>
                    <tbody>

                        <tr style="background:#e2efd9;">
                            <td> “0”尾 </td>
                            <td > 10&nbsp; 20&nbsp; 30&nbsp; 40 </td>
                        </tr>

                        <tr>
                            <td> “1”尾 </td>
                            <td> 01&nbsp; 11&nbsp; 21&nbsp; 31&nbsp; 41</td>
                        </tr>


                        <tr style="background:#e2efd9;">
                            <td > “2”尾	 </td>
                            <td > 02&nbsp; 12&nbsp; 22&nbsp; 32&nbsp; 42</td>
                        </tr>

                        <tr >
                            <td >“3”尾</td>
                            <td > 03&nbsp; 13&nbsp; 23&nbsp; 33&nbsp; 43&nbsp;</td>

                        </tr>

                        <tr style="background:#e2efd9;">
                            <td > “4”尾 </td>
                            <td > 04&nbsp; 14&nbsp; 24&nbsp; 34&nbsp; 44</td>
                        </tr>

                        <tr >
                            <td > “5”尾 </td>
                            <td > 05&nbsp; 15&nbsp; 25&nbsp; 35&nbsp; 45</td>
                        </tr>

                        <tr style="background:#e2efd9;">
                            <td > “6”尾 </td>
                            <td > 06&nbsp; 16&nbsp; 26&nbsp; 36&nbsp; 46</td>
                        </tr>

                        <tr>
                            <td > “7”尾 </td>
                            <td > 07&nbsp; 17&nbsp; 27&nbsp; 37&nbsp; 47</td>
                        </tr>

                        <tr style="background:#e2efd9;">
                            <td > “8”尾 </td>
                            <td > 08&nbsp; 18&nbsp; 28&nbsp; 38&nbsp; 48</td>
                        </tr>

                        <tr >
                            <td > “9”尾 </td>
                            <td > 09&nbsp; 19&nbsp; 29&nbsp; 39&nbsp; 49</td>
                        </tr>

                    </tbody>
                </table>
                    <p>所选投注组合与开奖号码的特别码的型态一致，即为中奖。例：</p>
                    <p> 开奖号码： <b> 18 31 11 17 01 26 47 </b></p>
                    <p> 投注组合： <b>  “7”尾 </b> </p>
                    <p style="margin-left:25px;"> 状态： <b>中奖</b> </p>
               </div>
               <h6 style="margin-top:20px;" id="shortcut_5"> 2、 正码 </h6>
               <div class="only_p">
                    <p> 香港六合彩每期搅珠出的前六个号码为正码。 </p>
                    <p> <1> 总和大小 </p>
                    <p> 总和大：七个开奖号码的分数总和大于或等于175； </p>
                    <p> 总和小：七个开奖号码的分数总和小于或等于174。 </p>
               </div>
               <div class="only_p">
                    <p> <2>总和单双 </p>
                    <p> 总和单：七个开奖号码的分数总和为奇数； </p>
                    <p> 总和双：七个开奖号码的分数总和为偶数 </p>
               </div>

               <div class="inst_tab_item_1">
                    <p style="margin-top:30px;"><3> 正码特</p>
                    <p>香港六合彩当期搅珠出的前6个号码，按开奖出来的先后顺序依次为：正1特、正2特、正3特、正4特、正5特、正6特。从01～49中选择1个号码组成1注，所选投注组合与当期开奖号码指定位置的号码一致，视为中奖。例：</p>
                    <p>所选投注组合与开奖号码的特别码的型态一致，即为中奖。例：</p>
                    <p style="margin-left:25px;"> 位置：  <b>正1特</b> </p>
                    <p> 开奖号码： <b> 18 31 11 17 01 26 47 </b></p>
                    <p> 投注组合： <b>  18 </b> </p>
                    <p style="margin-left:25px;"> 状态： <b>中奖</b> </p>
               </div>

               <div class="inst_tab_item_1">
                    <p style="margin-top:30px;"> <4> 正码1-6</p>
                    <p>香港六合彩当期搅珠出的前6个号码，按开奖出来的先后顺序依次为：正码1、正码2、正码3、正码4、正码5、正码6。正码1～6的大小单双、合单合双合大合小与特别码的大小单双、合单合双合大合小规则一致。如：正码1为28，则正码1为为双码，大码，为合双，为合大，为尾大；正码2为01，则正码2为单码，为小码，为合单，为合小，为尾小；号码49为和。正码1-6色波下注之颜色与开奖之球色，视为中奖。例</p>
                    &lt;!&ndash; <p>所选投注组合与开奖号码的特别码的型态一致，即为中奖。例：</p> &ndash;&gt;
                    <p style="margin-left:25px;"> 位置：  <b>正码1</b> </p>
                    <p> 开奖号码： <b> 18 31 11 17 01 26 47 </b></p>
                    <p> 投注组合： <b>  双码 </b> </p>
                    <p style="margin-left:25px;margin-bottom:20px;"> 状态： <b>中奖</b> </p>


                    <p style="margin-left:25px;"> 位置：  <b>正码1</b> </p>
                    <p> 开奖号码： <b> 49 31 11 17 01 26 47 </b></p>
                    <p> 投注组合： <b>  单码 </b> </p>
                    <p style="margin-left:25px;"> 状态： <b> 和局（退还投注组合本金）</b> </p>
               </div>

                <div class="inst_tab_item_1">
                    <p style="margin-top:30px;"><5> 尾数</p>
                    <p>从“0”尾～“9”尾中选择1个组成1注，当期开奖号码的任意一个尾数与所选投注组合一致，即为中奖。若多个尾数与所选投注组合一致，即为中奖；奖金不倍增，且只派彩一次。</p>
                    <p> 开奖号码： <b> 18 31 11 17 01 26 47 </b></p>
                    <p> 投注组合： <b>  “1”尾 </b> </p>
                    <p style="margin-left:25px;"> 状态： <b>中奖</b> </p>
                    <p> 注：中奖金额=投注金额*赔率*1 </p>
               </div>
               <h6 style="margin-top:40px;" id="shortcut_1">3、 连码</h6>

               <div class="inst_tab_item_1">
                    <p style="margin-top:30px;"><1> 三中二</p>
                    <p>从01～49中选3个号码组成1注，所选投注组合中的任意2个是开奖号码的正码，即为三中二，视为中奖；所选投注组合都是开奖号码的正码，即为三中三，视为中奖。例：</p>
                    <p> 开奖号码： <b> 18 31 11 17 01 26 47 </b></p>
                    <p> 投注组合： <b> 18 31 </b> 25  </p>
                    <p style="margin-left:25px;"> 状态： <b> 三中二</b> </p>
                    <p> 注：中奖金额=投注金额*赔率*1 </p>
                    <p> 开奖号码： <b> 18 31 11 17 01 26 47 </b></p>
                    <p> 投注组合： <b> 18 31 11 </b>   </p>
                    <p style="margin-left:25px;"> 状态： <b> 三中二之中三</b> </p>
               </div>

               <div class="inst_tab_item_1">
                    <p style="margin-top:30px;"><2> 四全中</p>
                    <p>从01～49中选4个号码组成1注，所选投注组合都是开奖号码的正码，视为中奖。例：</p>
                    <p> 开奖号码： <b> 18 31 11 17 01 26 47 </b></p>
                    <p> 投注组合： <b> 18 31 11 17 </b>  </p>
                    <p style="margin-left:25px;"> 状态： <b> 四全中</b> </p>
               </div>

               <div class="inst_tab_item_1">
                    <p style="margin-top:30px;"><3> 三全中</p>
                    <p>从01～49中选3个号码组成1注，所选投注组合都是开奖号码的正码，视为中奖。例：</p>
                    <p> 开奖号码： <b> 18 31 11 17 01 26 47 </b></p>
                    <p> 投注组合： <b> 18 31 01 </b>  </p>
                    <p style="margin-left:25px;"> 状态： <b>  三全中 </b> </p>
                    <p> 注：两个正码和一个特码视为不中奖 </p>
               </div>
               <div class="inst_tab_item_1">
                    <p style="margin-top:30px;"><4> 二全中 </p>
                    <p>从01～49中选2个号码组成1注，所选投注组合都是开奖号码的正码，视为中奖。例：</p>
                    <p> 开奖号码： <b> 18 31 11 17 01 26 47 </b></p>
                    <p> 投注组合： <b>  18 31 </b>  </p>
                    <p style="margin-left:25px;"> 状态： <b>   二全中 </b> </p>
                    注：一个正码和一个特码视为不中奖
               </div>

               <div class="inst_tab_item_1">
                    <p style="margin-top:30px;"><5> 二中特 </p>
                    <p>从01～49中选2个号码组成1注，所选投注组合都是开奖号码的正码，即为二中特之中二，视为中奖；若其中一个是正码，一个是特别码，即为二中特之中特，视为中奖。例：</p>
                    <p> 开奖号码： <b> 18 31 11 17 01 26 47 </b></p>
                    <p> 投注组合： <b>  18 31 </b>  </p>
                    <p style="margin-left:25px;margin-bottom:30px;"> 状态： <b>    二中特之中二 </b> </p>

                    <p> 开奖号码： <b> 18 31 11 17 01 26 47 </b></p>
                    <p> 投注组合： <b>  18 47 </b>  </p>
                    <p style="margin-left:25px;margin-bottom:30px;"> 状态： <b>    二中特之中特 </b> </p>
               </div>
               <div class="inst_tab_item_1">
                    <p style="margin-top:30px;"><6> 特串 </p>
                    <p>从01～49中选2个号码组成1注，开奖号码的特别码与所选投注组合的其中1个号码相同，且正码中包含所选投注组合的另外1个号码，视为二中特之特串。例：</p>
                    <p> 开奖号码： <b> 18 31 11 17 01 26 47 </b></p>
                    <p> 投注组合： <b>  18 47 </b>  </p>
                    <p style="margin-left:25px;margin-bottom:30px;"> 状态： <b> 二中特之特串 </b> </p>
               </div>

              <h6 id="shortcut_6">4、生肖</h6>
              <div class="inst_tab_item_1">
                    <p style="margin-top:30px;"><1> 特码生肖</p>
                    <table>
                        <tbody>
                            <tr style="background:#e2efd9;">
                                <td>  天肖 </td>
                                <td > 兔马猴猪牛龙 </td>
                            </tr>

                            <tr>
                                <td> 地肖 </td>
                                <td> 鼠虎蛇羊鸡狗 </td>
                            </tr>


                            <tr style="background:#e2efd9;">
                                <td > 家肖 </td>
                                <td > 羊马牛猪狗鸡 </td>
                            </tr>

                            <tr >
                                <td > 野肖 </td>
                                <td > 猴蛇龙兔虎鼠 </td>
                            </tr>

                            <tr style="background:#e2efd9;">
                                <td > 前肖 </td>
                                <td > 鼠牛虎兔龙蛇 </td>
                            </tr>

                            <tr >
                                <td > 后肖 </td>
                                <td > 马羊猴鸡狗猪 </td>
                            </tr>
                        </tbody>
                    </table>
               </div>
              <div class="inst_tab_item_1">
                    <p style="margin-top:30px;"><2> 特码生肖</p>
                    <p > 十二生肖顺序依次为：鼠、牛、虎、兔、龙、蛇、马、羊、猴、鸡、狗、猪</p>
                    <table>
                        <tbody>

                            <tr style="background:#e2efd9;">
                                <td>  鸡  </td>
                                <td > 01 13 25 37 49 </td>
                            </tr>

                            <tr>
                                <td> 猴 </td>
                                <td> 02 14 26 38 </td>
                            </tr>

                            <tr style="background:#e2efd9;">
                                <td > 羊 </td>
                                <td > 03 15 27 39 </td>
                            </tr>

                            <tr>
                                <td > 马 </td>
                                <td > 04 16 28 40 </td>
                            </tr>

                            <tr style="background:#e2efd9;">
                                <td > 蛇 </td>
                                <td > 05 17 29 41 </td>
                            </tr>

                            <tr>
                                <td > 龙 </td>
                                <td > 06 18 30 42 </td>
                            </tr>


                            <tr style="background:#e2efd9;">
                                <td > 兔 </td>
                                <td > 07 19 31 43 </td>
                            </tr>

                            <tr >
                                <td > 虎 </td>
                                <td > 08 20 32 44 </td>
                            </tr>


                            <tr style="background:#e2efd9;">
                                <td > 牛 </td>
                                <td >09 21 33 45 </td>
                            </tr>

                            <tr >
                                <td > 鼠 </td>
                                <td > 10 22 34 46 </td>
                            </tr>

                            <tr style="background:#e2efd9;">
                                <td > 猪 </td>
                                <td > 11 23 35 47 </td>
                            </tr>

                            <tr >
                                <td > 狗 </td>
                                <td > 12 24 36 48 </td>
                            </tr>

                        </tbody>
                    </table>
                    <p>从十二生肖中选择1个生肖组成1注，开奖号码的特别号在所选生肖范围内，视为中奖。例：</p>
                    <p> 开奖号码： <b> 18 31 11 17 01 26 47 </b></p>
                    <p> 投注组合： <b>  猪 </b>  </p>
                    <p style="margin-left:25px;margin-bottom:30px;"> 状态： <b>  中奖 </b> </p>
              </div>
              <div class="inst_tab_item_1">
                    <p style="margin-top:30px;"> <3> 正肖 </p>
                    <p > 从十二生肖中选择1个生肖组成1注，当期开奖的前6个号码(不含特码，不分先后顺序)，其中有一个号码在所选生肖范围内即为中奖，中奖金额=投注金额*赔率*1。 如果有N个号码在所选生肖范围内，中奖金额=投注金额*赔率*N。例：</p>
                    <p> 开奖号码： <b> 18 31 11 17 01 26 47 </b></p>
                    <p> 投注组合： <b>  猪 </b>  </p>
                    <p style="margin-left:25px;"> 状态： <b>  中奖 </b> </p>
                    <p>注：中奖金额=投注金额*赔率*2</p>
              </div>
              <div class="inst_tab_item_1">
                    <p style="margin-top:30px;"> <4>一肖 </p>
                    <p > 从十二生肖中选择1个生肖组成1注，当期开奖号码的全部号码，其中任意一个号码对应的生肖在所选生肖范围内即为中奖；多个号码对应的生肖在所选生肖范围内视为中奖；奖金不倍增，且只派彩一次，即不论同生肖的号码出现一个或多个号码都仅派彩一次。</p>
                    <p> 开奖号码： <b> 18 31 11 17 01 26 47 </b></p>
                    <p> 投注组合： <b>  猪 </b>  </p>
                    <p style="margin-left:25px;"> 状态： <b>  中奖 </b> </p>
                    <p>注：中奖金额=投注金额*赔率*1</p>
              </div>

              <h6 id="shortcut_2"> 5、对碰 </h6>

              <div class="inst_tab_item_1">
                    <p> 生肖（尾数）所对应的号码和特码生肖（尾数）规则一致；若单个生肖（尾数）对应多个号码，不管同生肖（尾数）的号码出现一个或多个，都派彩一次。每个生肖（尾数）都有自己的赔率，投注组合的总赔率为该组合生肖（尾数）中的最低赔率。</p>
                    <p style="margin-top:20px;"> <1> 二连肖 </p>
                    <p>从十二生肖中选2个生肖组成1注，所选投注组合在当期开奖号码所对应的生肖中，视为中奖。例：</p>
                    <p> 开奖号码： <b> 01 02 03 04 05 06 07 </b></p>
                    <p> 投注组合： <b> 鸡 猴 </b>  </p>
                    <p style="margin-left:25px;"> 状态： <b>  中奖 </b> </p>
                    <p>注：中奖金额=投注金额*赔率*1</p>
              </div>


              <div class="inst_tab_item_1">
                    <p style="margin-top:40px;"> <2> 三连肖 </p>
                    <p>从十二生肖中选3个生肖组成1注，所选投注组合在当期开奖号码所对应的生肖中，视为中奖。例：</p>
                    <p> 开奖号码： <b> 01 02 03 04 05 06 07 </b></p>
                    <p> 投注组合： <b> 羊 鸡 猴 </b>  </p>
                    <p style="margin-left:25px;"> 状态： <b>  中奖 </b> </p>
              </div>

              <div class="inst_tab_item_1" id="shortcut_12">
                    <p style="margin-top:40px;"> <3> 四连肖 </p>
                    <p>从十二生肖中选4个生肖组成1注，所选投注组合在当期开奖号码所对应的生肖中，视为中奖。例：</p>
                    <p> 开奖号码： <b> 01 02 03 04 05 06 07 </b></p>
                    <p> 投注组合： <b> 鸡 猴 马 羊 </b>  </p>
                    <p style="margin-left:25px;"> 状态： <b>  中奖 </b> </p>
              </div>

              <div class="inst_tab_item_1">
                    <p style="margin-top:40px;"><4> 五连肖 </p>
                    <p>从十二生肖中选5个生肖组成1注，所选投注组合在当期开奖号码所对应的生肖中，视为中奖。例：</p>
                    <p> 开奖号码： <b> 01 02 03 04 05 06 07 </b></p>
                    <p> 投注组合： <b> 鸡 猴 马 羊 蛇 </b>  </p>
                    <p style="margin-left:25px;"> 状态： <b>  中奖 </b> </p>
              </div>

              <div class="inst_tab_item_1">
                    <p style="margin-top:40px;"><4> 五连肖 </p>
                    <p>从十二生肖中选5个生肖组成1注，所选投注组合在当期开奖号码所对应的生肖中，视为中奖。例：</p>
                    <p> 开奖号码： <b> 01 02 03 04 05 06 07 </b></p>
                    <p> 投注组合： <b> 鸡 猴 马 羊 蛇 </b>  </p>
                    <p style="margin-left:25px;"> 状态： <b>  中奖 </b> </p>
              </div>

              <div class="inst_tab_item_1">
                    <p style="margin-top:40px;"> <5> 二连尾 </p>
                    <p>从“0”尾～“9”尾中选2个组成1注，所选投注组合在当期开奖号码所对应的尾数中，视为中奖。例：</p>
                    <p> 开奖号码： <b>  18 31 22 17 01 07 47 </b></p>
                    <p> 投注组合： <b> “8”尾 “7”尾 </b>  </p>
                    <p style="margin-left:25px;"> 状态： <b>  中奖 </b> </p>
              </div>
              <div class="inst_tab_item_1" id="shortcut_11">
                    <p style="margin-top:40px;"> <6> 三连尾 </p>
                    <p>从“0”尾～“9”尾中选3个组成1注，所选投注组合在当期开奖号码所对应的尾数中，视为中奖。例：</p>
                    <p> 开奖号码： <b>  18 31 22 17 01 08 47 </b></p>
                    <p> 投注组合： <b> “8”尾 “7”尾 “1”尾</b>  </p>
                    <p style="margin-left:25px;"> 状态： <b>  中奖 </b> </p>
              </div>

              <div class="inst_tab_item_1">
                    <p style="margin-top:40px;"> <7> 四连尾 </p>
                    <p>从“0”尾～“9”尾中选4个组成1注，所选投注组合在当期开奖号码所对应的尾数中，视为中奖。例：</p>
                    <p> 开奖号码： <b>  18 31 22 17 01 06 47 </b></p>
                    <p> 投注组合： <b>  “8”尾 “7”尾 “1”尾 “6”尾  </b>  </p>
                    <p style="margin-left:25px;"> 状态： <b>  中奖 </b> </p>
              </div>

              <div class="inst_tab_item_1">
                    <p style="margin-top:40px;"> <8> 五连尾</p>
                    <p>从“0”尾～“9”尾中选5个组成1注，所选投注组合在当期开奖号码所对应的尾数中，视为中奖。例：</p>
                    <p> 开奖号码： <b>  18 31 22 17 01 06 47 </b></p>
                    <p> 投注组合： <b>  “8”尾 “7”尾 “1”尾 “6”尾 “3”尾 </b>  </p>
                    <p style="margin-left:25px;"> 状态： <b>  中奖 </b> </p>
              </div>

              <h6 id="shortcut_3"> 6、合肖 </h6>
              <div class="inst_tab_item_1">
                    <p>从十二生肖中选择2个生肖（至多11个）组成1注，若开奖号码（特码为49号除外）对应生肖都在所选生肖范围内，视为中奖；若当期开奖号码的特别码为49时，所选投注组合皆视为和局（和局时，退还投注组合的本金）。</p>
                    <p> 开奖号码： <b> 01  02  03  04  05  06  07  </b></p>
                    <p> 投注组合： <b>  鸡、猴、羊、马、蛇、龙、兔 </b>  </p>
                    <p style="margin-left:25px;"> 状态： <b>  中奖 </b> </p>
              </div>

              <h6 id="shortcut_4"> 7、自选不中 </h6>

              <div class="inst_tab_item_1" id="shortcut_13">
                    <p style="margin-top:40px;"> <1>自选五不中 </p>
                    <p>从01～49中选5个号码组成1注，所选投注组合都不在开奖号码范围内，视为中奖。例：</p>
                    <p> 开奖号码： <b> 01  02  03  04  05  06  07  </b></p>
                    <p> 投注组合： <b>  10 11 12 13 14 </b>  </p>
                    <p style="margin-left:25px;"> 状态： <b>  中奖 </b> </p>
              </div>

              <div class="inst_tab_item_1">
                    <p style="margin-top:40px;"> <2>自选六不中 </p>
                    <p>从01～49中选6个号码组成1注，所选投注组合都不在开奖号码范围内，视为中奖。例：</p>
                    <p> 开奖号码： <b> 01  02  03  04  05  06  07  </b></p>
                    <p> 投注组合： <b>  10 11 12 13 14 15 </b>  </p>
                    <p style="margin-left:25px;"> 状态： <b>  中奖 </b> </p>
              </div>

              <div class="inst_tab_item_1">
                    <p style="margin-top:40px;"> <3>自选七不中 </p>
                    <p>从01～49中选7个号码组成1注，所选投注组合都不在开奖号码范围内，视为中奖。例：</p>
                    <p> 开奖号码： <b> 01  02  03  04  05  06  07  </b></p>
                    <p> 投注组合： <b>  10 11 12 13 14 15 16 </b>  </p>
                    <p style="margin-left:25px;"> 状态： <b>  中奖 </b> </p>
              </div>

              <div class="inst_tab_item_1">
                    <p style="margin-top:40px;"> <4> 自选八不中 </p>
                    <p>从01～49中选8个号码组成1注，所选投注组合都不在开奖号码范围内，视为中奖。例：</p>
                    <p> 开奖号码： <b> 01  02  03  04  05  06  07  </b></p>
                    <p> 投注组合： <b> 10 11 12 13 14 15 16 17 </b>  </p>
                    <p style="margin-left:25px;"> 状态： <b>  中奖 </b> </p>
              </div>

              <div class="inst_tab_item_1">
                    <p style="margin-top:40px;"> <5> 自选九不中 </p>
                    <p>从01～49中选9个号码组成1注，所选投注组合都不在开奖号码范围内，视为中奖。例：</p>
                    <p> 开奖号码： <b> 01 02 03 04 05 06 07 </b></p>
                    <p> 投注组合： <b> 10 11 12 13 14 15 16 17 18 </b>  </p>
                    <p style="margin-left:25px;"> 状态： <b>  中奖 </b> </p>
              </div>

              <div class="inst_tab_item_1">
                    <p style="margin-top:40px;"> <6> 自选十不中 </p>
                    <p>从01～49中选10个号码组成1注，所选投注组合都不在开奖号码范围内，视为中奖。例：</p>
                    <p> 开奖号码： <b> 01 02 03 04 05 06 07 </b></p>
                    <p> 投注组合： <b> 10 11 12 13 14 15 16 17 18 19 </b>  </p>
                    <p style="margin-left:25px;"> 状态： <b>  中奖 </b> </p>
              </div>
              <div class="inst_tab_item_1">
                    <p style="margin-top:40px;"> <7> 自选十一不中 </p>
                    <p>从01～49中选11个号码组成1注，所选投注组合都不在开奖号码范围内，视为中奖。例：</p>
                    <p> 开奖号码： <b> 01 02 03 04 05 06 07 </b></p>
                    <p> 投注组合： <b>  10 11 12 13 14 15 16 17 18 19 20 </b>  </p>
                    <p style="margin-left:25px;"> 状态： <b>  中奖 </b> </p>
              </div>

              <div class="inst_tab_item_1">
                    <p style="margin-top:40px;"> <7> 自选十二不中 </p>
                    <p>从01～49中选12个号码组成1注，所选投注组合都不在开奖号码范围内，视为中奖。例：</p>
                    <p> 开奖号码： <b>  01 02 03 04 05 06 07 </b></p>
                    <p> 投注组合： <b>  10 11 12 13 14 15 16 17 18 19 20 21 </b>  </p>
                    <p style="margin-left:25px;"> 状态： <b>  中奖 </b> </p>
              </div>

              <h6> 8、七色波 </h6>
              <div class="inst_tab_item_1">
                    <p>当期开出的七色波，颜色个数最多的中奖。开出的6个正码各以1个色波统计，特别号以1.5个色波统计。而以下3种结果视为和局。</p>
                     <table>
                         <tbody>

                            <tr style="background:#e2efd9;">
                                <td > 6个正码开出3蓝3绿，特别码是1.5红 </td>
                            </tr>

                            <tr>
                                <td> 6个正码开出3蓝3红，特别码是1.5绿 </td>
                            </tr>

                            <tr style="background:#e2efd9;">
                                <td > 6个正码开出3绿3红，特别码是1.5蓝 </td>
                            </tr>

                            <tr>
                                <td style="color:red;"> 和局时，退还投注红波、绿波、蓝波的金额 </td>
                            </tr>

                        </tbody>
                     </table>
                    <p> 开奖号码： <b>  18 31 22 17 01 07 47 </b></p>
                    <p> 投注组合： <b>  红波 </b>  </p>
                    <p style="margin-left:25px;"> 状态： <b>  中奖 </b> </p>
              </div>
              <h6 id="shortcut_8">9、五行</h6>
              <div class="inst_tab_item_1">
                    <p>当期开出的七色波，颜色个数最多的中奖。开出的6个正码各以1个色波统计，特别号以1.5个色波统计。而以下3种结果视为和局。</p>
                     <table>
                         <tbody>

                            <tr style="background:#e2efd9;">
                                <td>金</td>
                                <td > 03 04 17 18 25 26 33 34 47 48 </td>
                            </tr>
                            <tr>
                                <td>木</td>
                                <td> 07 08 15 16 29 30 37 38 45 46 </td>
                            </tr>

                            <tr style="background:#e2efd9;">
                                <td>水</td>
                                <td > 05 06 13 14 21 22 35 36 43 44 </td>
                            </tr>

                            <tr>
                                <td>火</td>
                                <td > 01 02 09 10 23 24 31 32 39 40 </td>
                            </tr>

                            <tr style="background:#e2efd9;">
                                <td>土</td>
                                <td > 11 12 19 20 27 28 41 42 49 </td>
                            </tr>
                        </tbody>
                     </table>
                     <p>从金、木、水、火、土中选择1个组成1注，开奖号码的特别码在所选投注组合内，视为中奖。例：</p>
                    <p> 开奖号码： <b>  18 31 22 17 01 07 47 </b></p>
                    <p> 投注组合： <b>  金 </b>  </p>
                    <p style="margin-left:25px;"> 状态： <b>  中奖 </b> </p>
              </div>
              <h6 >10、总肖</h6>
               <div class="inst_tab_item_1" id="shortcut_9">
                    <p> <1>总肖 </p>
                    <p>从2肖～7肖中选1个组成1注，所选投注组合与开奖号码对应的生肖总数相同，视为中奖。例：</p>
                    <p>从金、木、水、火、土中选择1个组成1注，开奖号码的特别码在所选投注组合内，视为中奖。例：</p>
                    <p> 开奖号码： <b>  01 02 03 04 05 06 07 </b></p>
                    <p> 投注组合： <b>  7肖 </b>  </p>
                    <p style="margin-left:25px;"> 状态： <b>  中奖 </b> </p>


                    <p> <2>总肖单双 </p>
                    <p>当期开奖号码对应的生肖总数为单则为总肖单，生肖总数为双则为总肖双。例：</p>
                    <p>从金、木、水、火、土中选择1个组成1注，开奖号码的特别码在所选投注组合内，视为中奖。例：</p>
                    <p> 开奖号码： <b>  01 02 03 04 05 06 07 </b></p>
                    <p> 投注组合： <b>  总肖单 </b>  </p>
                    <p style="margin-left:25px;"> 状态： <b>  中奖 </b> </p>
              </div>
        </div>
        <div  v-if="show_swit_li[6]">  </div>
        <div  v-if="show_swit_li[7]">  </div>
        <div  v-if="show_swit_li[8]">  </div>
        <div  v-if="show_swit_li[9]">  </div>
        <div  v-if="show_swit_li[10]"> </div>
        <div  v-if="show_swit_li[11]"> </div>
        <div  v-if="show_swit_li[12]"> </div>
        <div  v-if="show_swit_li[13]"> </div>
        <div  v-if="show_swit_li[14]"> </div>
        <div  v-if="show_swit_li[15]"> </div>
        <div  v-if="show_swit_li[16]"> </div>
        <div  v-if="show_swit_li[17]"> </div>
        <div  v-if="show_swit_li[18]"> </div>
        <div  v-if="show_swit_li[19]"> </div>
        <div  v-if="show_swit_li[20]"> </div>
        <div  v-if="show_swit_li[21]"> </div>
        <div  v-if="show_swit_li[22]"> </div>
        <div  v-if="show_swit_li[23]"> </div>
        <div  v-if="show_swit_li[24]"> </div>
        <div  v-if="show_swit_li[25]"> </div>
        <div  v-if="show_swit_li[26]"> </div>
        <div  v-if="show_swit_li[27]"> </div>
        <div  v-if="show_swit_li[28]"> </div>
        <div  v-if="show_swit_li[29]"> </div>-->
    </div>

</template>

<script>

    export default{

        name: 'InstTab',
        data(){
            return{
                show_swit_li:[true],
              lotList: JSON.parse(sessionStorage.getItem('lot_list')) || [],
              url: JSON.parse(sessionStorage.getItem('app_config')).play_instruction_url
            }
        },
      props: ['code','pan'],
        methods:{
            swit_li(code,pan){
//                this.show_swit_li = [];
//                this.show_swit_li[index] = true;
              this.code = code
//              this.pan = pan
            }
        },
      mounted() {
        console.log(this.url)
      }
    }

</script>

<style scoped>
    a:visited {
        color:#0b0080;
    }
    /* 左边tab栏 */
    .inst_tab{
        border: 1px solid #aaa;
        margin-top: 15px;
        display: flex;
        background: #fff;
    }

    .inst_tab>ul{
        border-right: 1px solid #ddd;
        flex:1;
      max-width: 10rem;
    }
    .inst_tab>ul>li{
        width: 100%;
        box-sizing: border-box;
        height: 40px;
        color: #0047aa;
        text-align: left;
        padding-left: 40px;
        line-height: 40px;
        border-bottom: 1px solid #ddd;
        cursor: pointer;
    }

    .inst_tab>ul>li:nth-child(1){
        color: #000;
        cursor: default;
    }

    .inst_tab>ul>li.active{
        background: #0047aa;
        color: #fff;
    }

    .inst_tab>div{
        flex:4;
    }
    /* 右边内容 */

     .inst_tab_item {
         padding: 20px;
     }
    .inst_tab_item>h2{

        font-size: 13px;
        font-weight: 700;
        color: red;
        word-spacing: 3px;
        letter-spacing:3px;
        margin-bottom: 20px;
    }
    .inst_tab_item>h2>span{
        color:#000;
    }

    /* 快捷导航 */

    .kuaijie_daohang{
        /* margin-bottom: 20px; */
    }
    .kuaijie_daohang>span{
        color: #000;
        font-size: 13px;
        font-weight: 700;
    }

    .kuaijie_daohang>a{

        color:#538135;
        font-size: 13px;
    }

    .inst_tab_item>h6{

        font-size: 15px;
        font-weight: 700;
        margin-bottom: 20px;
        margin-top: 20px;
        letter-spacing: 1px;
    }

    .inst_tab_item>p{
        font-size: 13px;
        line-height: 20px;
        color: #444;
    }

    .inst_tab_item>ol>li{
        color: #444;
        font-size: 13px;
        line-height: 25px;
    }
    .inst_tab_item>table{
        border-collapse:collapse;
        width: 90%;
        /* margin: 0 auto; */
        margin: 10px auto;
    }

    .inst_tab_item>table tr:nth-child(odd){
        background: #e2efd9;
    }
    .inst_tab_item>table tr:nth-child(even){
        background: #FEFEFE;
    }
    .inst_tab_item>table tr td{
        border: solid #70ad47 1pt;
        padding: 5px;
        text-align: center;
        font-size: 13px;
    }

    .inst_tab_item>strong{
        font-weight: normal;
        font-size: 13px;
    }

    .inst_tab_item>p>em{
        font-weight: 700;
        font-style: normal;
    }

    .inst_tab_item>p>img{
        display: block;
        margin: 15px auto;
    }
    .inst_tab_item>p>i{
        display: block;
        text-align: center;
        font-style: normal;
    }

    .inst_tab_item_1>p{
        font-size: 13px;
        line-height: 20px;
        margin: 10px 0;
    }
    .inst_tab_item_1>p>b{
        font-weight: normal;
        color: red;
    }

    /* 表格 */

    .inst_tab_item_1>table{
        width: 90%;
        margin: 0 auto;
        border-collapse: collapse;
        margin: 10px 0;
    }
    .inst_tab_item_1>table tr td{

        border: solid #70ad47 1pt;
        padding: 10px;
        text-align: center;
        font-size: 13px;
        color: #444;
    }

    .inst_tab_item_1>table tr td>span{
        margin-right: 3px;
    }
    .highlight_red{
        color: red;
    }
    .highlight_blue{
        color: #4472C4;
    }
    .highlight_green{
        color: #00B050;
    }

    .only_p{
        margin-bottom: 20px;
    }
    .only_p>p{
        line-height: 30px;
        font-size: 13px;
    }
   .inst_tab .inst_tab_item{
       position: relative;
       padding-bottom: 50px;
   }
    /* 回到顶部 */



</style>

