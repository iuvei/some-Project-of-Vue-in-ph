<template>
  <div class="lottery">
      <Fixmid></Fixmid>
      <TopNote></TopNote>
      <TopLoginReg></TopLoginReg>
      <TopTab :tabNum="5"></TopTab>
      <div class="lottery_wrap">
          <div class="lottery_cont" v-loading="loading2" style="min-height:200px;">
              <h3>开奖历史</h3>
              <table>
                  <thead>
                      <tr>
                          <th>彩种</th>
                          <th>期号</th>
                          <th>开奖号码</th>
                          <th>开奖时间</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr v-for="(items, indexs) in cp_data_list" v-if="items.lot_type_id == 1"   :key="items.code"  @click="go_son_lott(items.lot_type_id,items.name, items.code)">
                          <td>{{ items.name }}</td>
                          <td>第{{items.issue_number}}期</td>
                          <td>
                            <div v-if="items.number1">
                                <span v-show="items.number1"> {{items.number1}} </span>
                                <span v-show="items.number2"> {{items.number2}} </span>
                                <span v-show="items.number3"> {{items.number3}} </span>
                                <span v-show="items.number4"> {{items.number4}} </span>
                                <span v-show="items.number5"> {{items.number5}} </span>
                                <span v-show="items.number6"> {{items.number6}} </span>
                                <span v-show="items.number7"> {{items.number7}} </span>
                                <span v-show="items.number8"> {{items.number8}} </span>
                                <span v-show="items.number9"> {{items.number9}} </span>
                                <span v-show="items.number10">{{items.number10}} </span>
                            </div>
                            <div v-else class="loading_kaijiang">
                                <strong>正在开奖</strong>
                                <i class="loading_kaijiang_i">
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                </i>
                            </div>
                          </td>
                          <td>
                            {{items.draw_time}}
                          </td>
                      </tr>
                      <tr v-for="(items, indexs) in cp_data_list" v-if="items.lot_type_id == 2"   :key="items.code"  @click="go_son_lott(items.lot_type_id, items.name, items.code)">
                          <td>{{ items.name }}</td>
                          <td>第{{items.issue_number}}期</td>
                          <td>
                            <div v-if="items.number1">
                                <span v-show="items.number1"> {{items.number1}} </span>
                                <span v-show="items.number2"> {{items.number2}} </span>
                                <span v-show="items.number3"> {{items.number3}} </span>
                                <span v-show="items.number4"> {{items.number4}} </span>
                                <span v-show="items.number5"> {{items.number5}} </span>
                                <span v-show="items.number6"> {{items.number6}} </span>
                                <span v-show="items.number7"> {{items.number7}} </span>
                                <span v-show="items.number8"> {{items.number8}} </span>
                                <span v-show="items.number9"> {{items.number9}} </span>
                                <span v-show="items.number10">{{items.number10}} </span>
                            </div>
                            <div v-else class="loading_kaijiang">
                                <strong>正在开奖</strong>
                                <i class="loading_kaijiang_i">
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                </i>
                            </div>
                          </td>
                          <td>
                            {{items.draw_time}}
                          </td>
                      </tr>
                      <tr v-for="(items, indexs) in cp_data_list" v-if="items.lot_type_id == 3"   :key="items.code"  @click="go_son_lott(items.lot_type_id, items.name, items.code)">
                          <td>{{ items.name }}</td>
                          <td>第{{items.issue_number}}期</td>
                          <td>
                            <div v-if="items.number1">
                                <span v-show="items.number1"> {{items.number1}} </span>
                                <span v-show="items.number2"> {{items.number2}} </span>
                                <span v-show="items.number3"> {{items.number3}} </span>
                                <span v-show="items.number4"> {{items.number4}} </span>
                                <span v-show="items.number5"> {{items.number5}} </span>
                                <span v-show="items.number6"> {{items.number6}} </span>
                                <span v-show="items.number7"> {{items.number7}} </span>
                                <span v-show="items.number8"> {{items.number8}} </span>
                                <span v-show="items.number9"> {{items.number9}} </span>
                                <span v-show="items.number10">{{items.number10}} </span>
                            </div>
                            <div v-else class="loading_kaijiang">
                                <strong>正在开奖</strong>
                                <i class="loading_kaijiang_i">
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                </i>
                            </div>
                          </td>
                          <td>
                            {{items.draw_time}}
                          </td>
                      </tr>
                      <tr v-for="(items, indexs) in cp_data_list" v-if="items.lot_type_id == 4"   :key="items.code"  @click="go_son_lott(items.lot_type_id, items.name, items.code)">
                          <td>{{ items.name }}</td>
                          <td>第{{items.issue_number}}期</td>
                          <td>
                            <div v-if="items.number1">
                                <span v-show="items.number1"> {{items.number1}} </span>
                                <span v-show="items.number2"> {{items.number2}} </span>
                                <span v-show="items.number3"> {{items.number3}} </span>
                                <span v-show="items.number4"> {{items.number4}} </span>
                                <span v-show="items.number5"> {{items.number5}} </span>
                               <span v-show="items.number6" style="background:#0047aa"> 02 </span>
                                <span v-show="items.number7" style="background:#0047aa"> 07 </span>
                                <span v-show="items.number8"> {{items.number8}} </span>
                                <span v-show="items.number9"> {{items.number9}} </span>
                                <span v-show="items.number10">{{items.number10}} </span>
                            </div>
                            <div v-else class="loading_kaijiang">
                                <strong>正在开奖</strong>
                                <i class="loading_kaijiang_i">
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                </i>
                            </div>
                          </td>
                          <td>
                            {{items.draw_time}}
                          </td>
                      </tr>
                      <tr v-for="(items, indexs) in cp_data_list" v-if="items.lot_type_id == 5"   :key="items.code"  @click="go_son_lott(items.lot_type_id, items.name, items.code)">
                          <td>{{ items.name }}</td>
                          <td>第{{items.issue_number}}期</td>
                          <td>
                            <div v-if="items.number1">
                                 <span v-show="items.number1"> {{items.number1}} </span>
                                <span v-show="items.number2"> {{items.number2}} </span>
                                <span v-show="items.number3"> {{items.number3}} </span>
                                <span v-show="items.number4"> {{items.number4}} </span>
                                <span v-show="items.number5"> {{items.number5}} </span>
                                <span v-show="items.number6"> {{items.number6}} </span>
                                <span v-show="items.number7"> {{items.number7}} </span>
                                <span v-show="items.number8"> {{items.number8}} </span>
                                <span v-show="items.number9"> {{items.number9}} </span>
                                <span v-show="items.number10">{{items.number10}} </span>
                            </div>
                            <div v-else class="loading_kaijiang">
                                <strong>正在开奖</strong>
                                <i class="loading_kaijiang_i">
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                </i>
                            </div>
                          </td>
                          <td>
                            {{items.draw_time}}
                          </td>
                      </tr>
                      <tr v-for="(items, indexs) in cp_data_list" v-if="items.lot_type_id == 6"   :key="items.code"  @click="go_son_lott(items.lot_type_id, items.name, items.code)">
                          <td>{{ items.name }}</td>
                          <td>第{{items.issue_number}}期</td>
                          <td>
                            <div v-if="items.number1">
                                <span v-show="items.number1"> {{items.number1}} </span>
                                <span v-show="items.number2"> {{items.number2}} </span>
                                <span v-show="items.number3"> {{items.number3}} </span>
                                <span v-show="items.number4"> {{items.number4}} </span>
                                <span v-show="items.number5"> {{items.number5}} </span>
                                <span v-show="items.number6"> {{items.number6}} </span>
                                <span v-show="items.number7"> {{items.number7}} </span>
                                <span v-show="items.number8"> {{items.number8}} </span>
                                <span v-show="items.number9"> {{items.number9}} </span>
                                <span v-show="items.number10">{{items.number10}} </span>
                            </div>
                            <div v-else class="loading_kaijiang">
                                <strong>正在开奖</strong>
                                <i class="loading_kaijiang_i">
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                </i>
                            </div>
                          </td>
                          <td>
                            {{items.draw_time}}
                          </td>
                      </tr>
                      <tr v-for="(items, indexs) in cp_data_list" v-if="items.lot_type_id == 7"   :key="items.code"  @click="go_son_lott(items.lot_type_id, items.name, items.code)">
                          <td>{{ items.name }}</td>
                          <td>第{{items.issue_number}}期</td>
                          <td>
                            <div v-if="items.number1">
                                <span v-show="items.number1"> {{items.number1}} </span>
                                <span v-show="items.number2"> {{items.number2}} </span>
                                <span v-show="items.number3"> {{items.number3}} </span>
                                <span v-show="items.number4"> {{items.number4}} </span>
                                <span v-show="items.number5"> {{items.number5}} </span>
                                <span v-show="items.number6"> {{items.number6}} </span>
                                <span v-show="items.number7"> {{items.number7}} </span>
                                <span v-show="items.number8"> {{items.number8}} </span>
                                <span v-show="items.number9"> {{items.number9}} </span>
                                <span v-show="items.number10">{{items.number10}} </span>
                            </div>
                            <div v-else class="loading_kaijiang">
                                <strong>正在开奖</strong>
                                <i class="loading_kaijiang_i">
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                </i>
                            </div>
                          </td>
                          <td>
                            {{items.draw_time}}
                          </td>
                      </tr>
                      <tr v-for="(items, indexs) in cp_data_list" v-if="items.lot_type_id == 8"   :key="items.code"  @click="go_son_lott(items.lot_type_id, items.name, items.code)">
                          <td>{{ items.name }}</td>
                          <td>第{{items.issue_number}}期</td>
                          <td>
                            <div v-if="items.number1">
                                 <img v-show="items.number1" :src="items.number1 | transImg">
                                 <img v-show="items.number2" :src="items.number2 | transImg">
                                 <img v-show="items.number3" :src="items.number3 | transImg">
                            </div>
                            <div v-else class="loading_kaijiang">
                                <strong>正在开奖</strong>
                                <i class="loading_kaijiang_i">
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                </i>
                            </div>
                          </td>
                          <td>
                            {{items.draw_time}}
                          </td>
                      </tr>
                      <tr v-for="(items, indexs) in cp_data_list" v-if="items.lot_type_id == 9"   :key="items.code"  @click="go_son_lott(items.lot_type_id, items.name, items.code)">
                          <td>{{ items.name }}</td>
                          <td>第{{items.issue_number}}期</td>
                          <td>
                            <div v-if="items.number1">
                                 <img v-show="items.number1" :src="items.number1 | transImg">
                                 <img v-show="items.number2" :src="items.number2 | transImg">
                                 <img v-show="items.number3" :src="items.number3 | transImg">
                            </div>
                            <div v-else class="loading_kaijiang">
                                <strong>正在开奖</strong>
                                <i class="loading_kaijiang_i">
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                </i>
                            </div>
                          </td>
                          <td>
                            {{items.draw_time}}
                          </td>
                      </tr>
                      <tr v-for="(items, indexs) in cp_data_list" v-if="items.lot_type_id == 10"   :key="items.code"  @click="go_son_lott(items.lot_type_id, items.name, items.code)">
                          <td>{{ items.name }}</td>
                          <td>第{{items.issue_number}}期</td>
                          <td>
                            <div v-if="items.number1">
                                <span v-show="items.number1"> {{items.number1}} </span>
                                <span v-show="items.number2"> {{items.number2}} </span>
                                <span v-show="items.number3"> {{items.number3}} </span>
                                <span v-show="items.number4"> {{items.number4}} </span>
                                <span v-show="items.number5"> {{items.number5}} </span>
                                <span v-show="items.number6"> {{items.number6}} </span>
                                <span v-show="items.number7" style="background:#0047aa;"> {{items.number7}} </span>
                            </div>
                            <div v-else class="loading_kaijiang">
                                <strong>正在开奖</strong>
                                <i class="loading_kaijiang_i">
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                </i>
                            </div>
                          </td>
                          <td>
                            {{items.draw_time}}
                          </td>
                      </tr>
                      <tr v-for="(items, indexs) in cp_data_list" v-if="items.lot_type_id == 11"   :key="items.code"  @click="go_son_lott(items.lot_type_id, items.name, items.code)">
                          <td>{{ items.name }}</td>
                          <td>第{{items.issue_number}}期</td>
                          <td>
                            <div v-if="items.number1">
                                <span v-show="items.number1"> {{items.number1}} </span>
                                <span v-show="items.number2"> {{items.number2}} </span>
                                <span v-show="items.number3"> {{items.number3}} </span>
                                <span v-show="items.number4"> {{items.number4}} </span>
                                <span v-show="items.number5"> {{items.number5}} </span>
                                <span v-show="items.number6"> {{items.number6}} </span>
                                <span v-show="items.number7"> {{items.number7}} </span>
                            </div>
                            <div v-else class="loading_kaijiang">
                                <strong>正在开奖</strong>
                                <i class="loading_kaijiang_i">
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                </i>
                            </div>
                          </td>
                          <td>
                            {{items.draw_time}}
                          </td>
                      </tr>

                      <tr v-for="(items, indexs) in cp_data_list" v-if="items.lot_type_id == 12"   :key="items.code"  @click="go_son_lott(items.lot_type_id, items.name, items.code)">
                          <td>{{ items.name }}</td>
                          <td>第{{items.issue_number}}期</td>
                          <td>
                            <div v-if="items.number1">
                                 <span v-show="items.number1"> {{items.number1}} </span>
                                <span v-show="items.number2"> {{items.number2}} </span>
                                <span v-show="items.number3"> {{items.number3}} </span>
                                <span v-show="items.number4"> {{items.number4}} </span>
                                <span v-show="items.number5"> {{items.number5}} </span>
                                <span v-show="items.number6"> {{items.number6}} </span>
                                <span v-show="items.number7"> {{items.number7}} </span>
                                <span v-show="items.number8"> {{items.number8}} </span>
                                <span v-show="items.number9"> {{items.number9}} </span>
                                <span v-show="items.number10">{{items.number10}} </span>
                            </div>
                            <div v-else class="loading_kaijiang">
                                <strong>正在开奖</strong>
                                <i class="loading_kaijiang_i">
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                </i>
                            </div>
                          </td>
                          <td>
                            {{items.draw_time}}
                          </td>
                      </tr>
                      <tr v-for="(items, indexs) in cp_data_list" v-if="items.lot_type_id == 13"   :key="items.code"  @click="go_son_lott(items.lot_type_id, items.name, items.code)">
                          <td>{{ items.name }}</td>
                          <td>第{{items.issue_number}}期</td>
                          <td>
                            <div v-if="items.number1">
                                <span v-show="items.number1"> {{items.number1}} </span>
                                <span v-show="items.number2"> {{items.number2}} </span>
                                <span v-show="items.number3"> {{items.number3}} </span>
                                <span v-show="items.number4"> {{items.number4}} </span>
                                <span v-show="items.number5"> {{items.number5}} </span>
                                <span v-show="items.number6"> {{items.number6}} </span>
                                <span v-show="items.number7"> {{items.number7}} </span>
                                <span v-show="items.number8"> {{items.number8}} </span>
                                <span v-show="items.number9"> {{items.number9}} </span>
                                <span v-show="items.number10">{{items.number10}} </span>
                            </div>
                            <div v-else class="loading_kaijiang">
                                <strong>正在开奖</strong>
                                <i class="loading_kaijiang_i">
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                </i>
                            </div>
                          </td>
                          <td>
                            {{items.draw_time}}
                          </td>
                      </tr>
                      <tr v-for="(items, indexs) in cp_data_list" v-if="items.lot_type_id == 14"   :key="items.code"  @click="go_son_lott(items.lot_type_id, items.name, items.code)">
                          <td>{{ items.name }}</td>
                          <td>第{{items.issue_number}}期</td>
                          <td>
                            <div v-if="items.number1">
                                <span v-show="items.number1"> {{items.number1}} </span>
                                <span v-show="items.number2"> {{items.number2}} </span>
                                <span v-show="items.number3"> {{items.number3}} </span>
                                <span v-show="items.number4"> {{items.number4}} </span>
                                <span v-show="items.number5"> {{items.number5}} </span>
                                <span v-show="items.number6"> {{items.number6}} </span>
                                <span v-show="items.number7"> {{items.number7}} </span>
                                <span v-show="items.number8"> {{items.number8}} </span>
                                <span v-show="items.number9"> {{items.number9}} </span>
                                <span v-show="items.number10">{{items.number10}} </span>
                            </div>
                            <div v-else class="loading_kaijiang">
                                <strong>正在开奖</strong>
                                <i class="loading_kaijiang_i">
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                </i>
                            </div>
                          </td>
                          <td>
                            {{items.draw_time}}
                          </td>
                      </tr>
                      <tr v-for="(items, indexs) in cp_data_list" v-if="items.lot_type_id == 15"   :key="items.code"  @click="go_son_lott(items.lot_type_id, items.name, items.code)">
                          <td>{{ items.name }}</td>
                          <td>第{{items.issue_number}}期</td>
                          <td>
                            <div v-if="items.number1">
                               <span v-show="items.number1"> {{items.number1}} </span>
                                <span v-show="items.number2"> {{items.number2}} </span>
                                <span v-show="items.number3"> {{items.number3}} </span>
                                <span v-show="items.number4"> {{items.number4}} </span>
                                <span v-show="items.number5"> {{items.number5}} </span>
                                <span v-show="items.number6"> {{items.number6}} </span>
                                <span v-show="items.number7"> {{items.number7}} </span>
                                <span v-show="items.number8"> {{items.number8}} </span>
                                <span v-show="items.number9"> {{items.number9}} </span>
                                <span v-show="items.number10">{{items.number10}} </span>
                            </div>
                            <div v-else class="loading_kaijiang">
                                <strong>正在开奖</strong>
                                <i class="loading_kaijiang_i">
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                </i>
                            </div>
                          </td>
                          <td>
                            {{items.draw_time}}
                          </td>
                      </tr>
                      <tr v-for="(items, indexs) in cp_data_list" v-if="items.lot_type_id == 16"   :key="items.code"  @click="go_son_lott(items.lot_type_id, items.name, items.code)">
                          <td>{{ items.name }}</td>
                          <td>第{{items.issue_number}}期</td>
                          <td>
                            <div v-if="items.number1">
                                <span v-show="items.number1"> {{items.number1}} </span>
                                <span v-show="items.number2"> {{items.number2}} </span>
                                <span v-show="items.number3"> {{items.number3}} </span>
                                <span v-show="items.number4"> {{items.number4}} </span>
                                <span v-show="items.number5"> {{items.number5}} </span>
                                <span v-show="items.number6"> {{items.number6}} </span>
                                <span v-show="items.number7"> {{items.number7}} </span>
                                <span v-show="items.number8"> {{items.number8}} </span>
                                <span v-show="items.number9"> {{items.number9}} </span>
                                <span v-show="items.number10">{{items.number10}} </span>
                            </div>
                            <div v-else class="loading_kaijiang">
                                <strong>正在开奖</strong>
                                <i class="loading_kaijiang_i">
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                </i>
                            </div>
                          </td>
                          <td>
                            {{items.draw_time}}
                          </td>
                      </tr>
                      <tr v-for="(items, indexs) in cp_data_list" v-if="items.lot_type_id == 17"   :key="items.code"  @click="go_son_lott(items.lot_type_id, items.name, items.code)">
                          <td>{{ items.name }}</td>
                          <td>第{{items.issue_number}}期</td>
                          <td>
                            <div v-if="items.number1">
                                <span v-show="items.number1"> {{items.number1}} </span>
                                <span v-show="items.number2"> {{items.number2}} </span>
                                <span v-show="items.number3"> {{items.number3}} </span>
                                <span v-show="items.number4"> {{items.number4}} </span>
                                <span v-show="items.number5"> {{items.number5}} </span>
                                <span v-show="items.number6"> {{items.number6}} </span>
                                <span v-show="items.number7"> {{items.number7}} </span>
                                <span v-show="items.number8"> {{items.number8}} </span>
                                <span v-show="items.number9"> {{items.number9}} </span>
                                <span v-show="items.number10">{{items.number10}} </span>
                            </div>
                            <div v-else class="loading_kaijiang">
                                <strong>正在开奖</strong>
                                <i class="loading_kaijiang_i">
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                </i>
                            </div>
                          </td>
                          <td>
                            {{items.draw_time}}
                          </td>
                      </tr>
                      <tr v-for="(items, indexs) in cp_data_list" v-if="items.lot_type_id == 18"   :key="items.code"  @click="go_son_lott(items.lot_type_id, items.name, items.code)">
                          <td>{{ items.name }}</td>
                          <td>第{{items.issue_number}}期</td>
                          <td>
                            <div v-if="items.number1">
                                <span v-show="items.number1"> {{items.number1}} </span>
                                <span v-show="items.number2"> {{items.number2}} </span>
                                <span v-show="items.number3"> {{items.number3}} </span>
                                <span v-show="items.number4"> {{items.number4}} </span>
                                <span v-show="items.number5"> {{items.number5}} </span>
                                <span v-show="items.number6"> {{items.number6}} </span>
                                <span v-show="items.number7"> {{items.number7}} </span>
                                <span v-show="items.number8"> {{items.number8}} </span>
                                <span v-show="items.number9"> {{items.number9}} </span>
                                <span v-show="items.number10">{{items.number10}} </span>
                            </div>
                            <div v-else class="loading_kaijiang">
                                <strong>正在开奖</strong>
                                <i class="loading_kaijiang_i">
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                </i>
                            </div>
                          </td>
                          <td>
                            {{items.draw_time}}
                          </td>
                      </tr>
                      <tr v-for="(items, indexs) in cp_data_list" v-if="items.lot_type_id == 19"   :key="items.code"  @click="go_son_lott(items.lot_type_id, items.name, items.code)">
                          <td>{{ items.name }}</td>
                          <td>第{{items.issue_number}}期</td>
                          <td>
                            <div v-if="items.number1">
                                <span v-show="items.number1"> {{items.number1}} </span>
                                <span v-show="items.number2"> {{items.number2}} </span>
                                <span v-show="items.number3"> {{items.number3}} </span>
                                <span v-show="items.number4"> {{items.number4}} </span>
                                <span v-show="items.number5"> {{items.number5}} </span>
                                <span v-show="items.number6"> {{items.number6}} </span>
                                <span v-show="items.number7"> {{items.number7}} </span>
                                <span v-show="items.number8"> {{items.number8}} </span>
                                <span v-show="items.number9"> {{items.number9}} </span>
                                <span v-show="items.number10">{{items.number10}} </span>
                            </div>
                            <div v-else class="loading_kaijiang">
                                <strong>正在开奖</strong>
                                <i class="loading_kaijiang_i">
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                </i>
                            </div>
                          </td>
                          <td>
                            {{items.draw_time}}
                          </td>
                      </tr>
                      <tr v-for="(items, indexs) in cp_data_list" v-if="items.lot_type_id == 20"   :key="items.code"  @click="go_son_lott(items.lot_type_id, items.name, items.code)">
                          <td>{{ items.name }}</td>
                          <td>第{{items.issue_number}}期</td>
                          <td>
                            <div v-if="items.number1">
                                 <img v-show="items.number1" :src="items.number1 | transImg">
                                 <img v-show="items.number2" :src="items.number2 | transImg">
                                 <img v-show="items.number3" :src="items.number3 | transImg">
                            </div>
                            <div v-else class="loading_kaijiang">
                                <strong>正在开奖</strong>
                                <i class="loading_kaijiang_i">
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                </i>
                            </div>
                          </td>
                          <td>
                            {{items.draw_time}}
                          </td>
                      </tr>
                      <tr v-for="(items, indexs) in cp_data_list" v-if="items.lot_type_id == 21"   :key="items.code"  @click="go_son_lott(items.lot_type_id, items.name, items.code)">
                          <td>{{ items.name }}</td>
                          <td>第{{items.issue_number}}期</td>
                          <td>
                            <div v-if="items.number1">

                                <span v-show="items.number1"> {{ items.number1 }} </span> 
                                 + 
                                <span v-show="items.number2"> {{ items.number2 }} </span> 
                                 + 
                                <span v-show="items.number3"> {{ items.number3 }} </span>
                                 =
                                <span v-show="items.number4"> {{ items.number4 }} </span>

                            </div>
                            <div v-else class="loading_kaijiang">
                                <strong>正在开奖</strong>
                                <i class="loading_kaijiang_i">
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                </i>
                            </div>
                          </td>
                          <td>
                            {{items.draw_time}}
                          </td>
                      </tr>
                      <tr v-for="(items, indexs) in cp_data_list" v-if="items.lot_type_id == 22"   :key="items.code"  @click="go_son_lott(items.lot_type_id, items.name, items.code)">
                          <td>{{ items.name }}</td>
                          <td>第{{items.issue_number}}期</td>
                          <td>
                            <div v-if="items.number1">
                                <span v-show="items.number1"> {{ items.number1 }} </span> 
                                 + 
                                <span v-show="items.number2"> {{ items.number2 }} </span> 
                                 + 
                                <span v-show="items.number3"> {{ items.number3 }} </span>
                                 =
                                <span v-show="items.number4"> {{ items.number4 }} </span>
                            </div>
                            <div v-else class="loading_kaijiang">
                                <strong>正在开奖</strong>
                                <i class="loading_kaijiang_i">
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                </i>
                            </div>
                          </td>
                          <td>
                            {{items.draw_time}}
                          </td>
                      </tr>
                      <tr class="lhc_tr_data" v-for="(items, indexs) in cp_data_list" v-if="items.lot_type_id == 23"   :key="items.code"  @click="go_son_lott(items.lot_type_id,items.name, items.code)">
                          <td>{{ items.name }}</td>
                          <td>第{{items.issue_number}}期</td>
                          <td>
                            <div v-if="items.number1">
                                <p>
                                    <span v-show="items.number1" class="bo_se_span"> {{items.number1}} </span>
                                    <span v-show="items.number2" class="bo_se_span"> {{items.number2}} </span>
                                    <span v-show="items.number3" class="bo_se_span"> {{items.number3}} </span>
                                    <span v-show="items.number4" class="bo_se_span"> {{items.number4}} </span>
                                    <span v-show="items.number5" class="bo_se_span"> {{items.number5}} </span>
                                    <span v-show="items.number6" class="bo_se_span"> {{items.number6}} </span>
                                    <span v-show="items.number7" class="bo_se_span"> {{items.number7}} </span>
                                </p>
                                <p>
                                    <i v-if="items.number1">  {{ lhc_color_formate(items.number1).text }} </i>
                                    <i v-if="items.number2">  {{ lhc_color_formate(items.number2).text }} </i>
                                    <i v-if="items.number3">  {{ lhc_color_formate(items.number3).text }} </i>
                                    <i v-if="items.number4">  {{ lhc_color_formate(items.number4).text }} </i>
                                    <i v-if="items.number5">  {{ lhc_color_formate(items.number5).text }} </i>
                                    <i v-if="items.number6">  {{ lhc_color_formate(items.number6).text }} </i>
                                    <i v-if="items.number7">  {{ lhc_color_formate(items.number7).text }} </i>
                                </p>
                            </div>
                            <div v-else class="loading_kaijiang">
                                <strong>正在开奖</strong>
                                <i class="loading_kaijiang_i">
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                </i>
                            </div>
                          </td>
                          <td>
                            {{items.draw_time}}
                          </td>
                      </tr>
                      <tr class="lhc_tr_data" v-for="(items, indexs) in cp_data_list" v-if="items.lot_type_id == 24"   :key="items.code"  @click="go_son_lott(items.lot_type_id,items.name, items.code)">
                          <td>{{ items.name }}</td>
                          <td>第{{items.issue_number}}期</td>
                          <td>
                            <div v-if="items.number1">
                                <p>
                                    <span v-show="items.number1" class="bo_se_span"> {{items.number1}} </span>
                                    <span v-show="items.number2" class="bo_se_span"> {{items.number2}} </span>
                                    <span v-show="items.number3" class="bo_se_span"> {{items.number3}} </span>
                                    <span v-show="items.number4" class="bo_se_span"> {{items.number4}} </span>
                                    <span v-show="items.number5" class="bo_se_span"> {{items.number5}} </span>
                                    <span v-show="items.number6" class="bo_se_span"> {{items.number6}} </span>
                                    <span v-show="items.number7" class="bo_se_span"> {{items.number7}} </span>

                                </p>
                                
                                 <p>
                                    <i v-if="items.number1">  {{ lhc_color_formate(items.number1).text }} </i>
                                    <i v-if="items.number2">  {{ lhc_color_formate(items.number2).text }} </i>
                                    <i v-if="items.number3">  {{ lhc_color_formate(items.number3).text }} </i>
                                    <i v-if="items.number4">  {{ lhc_color_formate(items.number4).text }} </i>
                                    <i v-if="items.number5">  {{ lhc_color_formate(items.number5).text }} </i>
                                    <i v-if="items.number6">  {{ lhc_color_formate(items.number6).text }} </i>
                                    <i v-if="items.number7">  {{ lhc_color_formate(items.number7).text }} </i>
                                </p>
                            </div>
                            <div v-else class="loading_kaijiang">
                                <strong>正在开奖</strong>
                                <i class="loading_kaijiang_i">
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                </i>
                            </div>
                          </td>
                          <td>
                            {{items.draw_time}}
                          </td>
                      </tr>
                      
                      <tr v-for="(items, indexs) in cp_data_list" v-if="items.lot_type_id == 25"   :key="items.code"  @click="go_son_lott(items.lot_type_id,items.name, items.code)">
                          <td>{{ items.name }}</td>
                          <td>第{{items.issue_number}}期</td>
                          <td>
                            <div v-if="items.number1">
                                <span v-show="items.number1"> {{items.number1}} </span>
                                <span v-show="items.number2"> {{items.number2}} </span>
                                <span v-show="items.number3"> {{items.number3}} </span>
                                <span v-show="items.number4"> {{items.number4}} </span>
                                <span v-show="items.number5"> {{items.number5}} </span>
                                <span v-show="items.number6"> {{items.number6}} </span>
                                <span v-show="items.number7"> {{items.number7}} </span>
                                <span v-show="items.number8"> {{items.number8}} </span>
                                <span v-show="items.number9"> {{items.number9}} </span>
                                <span v-show="items.number10">{{items.number10}} </span>
                            </div>
                            <div v-else class="loading_kaijiang">
                                <strong>正在开奖</strong>
                                <i class="loading_kaijiang_i">
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                </i>
                            </div>
                          </td>
                          <td>
                            {{items.draw_time}}
                          </td>
                      </tr>
                      
                      <tr v-for="(items, indexs) in cp_data_list" v-if="items.lot_type_id == 26"   :key="items.code"  @click="go_son_lott(items.lot_type_id, items.name, items.code)">
                          <td>{{ items.name }}</td>
                          <td>第{{items.issue_number}}期</td>
                          <td>
                            <div v-if="items.number1">
                                <span v-show="items.number1"> {{items.number1}} </span>
                                <span v-show="items.number2"> {{items.number2}} </span>
                                <span v-show="items.number3"> {{items.number3}} </span>
                                <span v-show="items.number4"> {{items.number4}} </span>
                                <span v-show="items.number5"> {{items.number5}} </span>
                                <span v-show="items.number6"> {{items.number6}} </span>
                                <span v-show="items.number7"> {{items.number7}} </span>
                                <span v-show="items.number8"> {{items.number8}} </span>
                                <span v-show="items.number9"> {{items.number9}} </span>
                                <span v-show="items.number10">{{items.number10}} </span>
                            </div>
                            <div v-else class="loading_kaijiang">
                                <strong>正在开奖</strong>
                                <i class="loading_kaijiang_i">
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                </i>
                            </div>
                          </td>
                          <td>
                            {{items.draw_time}}
                          </td>
                      </tr>

                      
                  </tbody>

              </table>
          </div>
      </div>

      <BotCommon></BotCommon>
      <Qiandao></Qiandao>
      <InfoPanel></InfoPanel>
  </div>
</template>

<script>

import TopLoginReg from '../topCommon/topLoginReg'
import TopTab from '../topCommon/topTab'
import TopNote from '../topCommon/topNote'
import Fixmid from '../common/fixmid'
import  BotCommon from '../topCommon/botCommon'
import Qiandao from '../home/qiandao'
import InfoPanel from '../topCommon/infoPanel'
import { lhc_lot_data_formate } from '../../api/config'

import { messageBox , Loading } from 'element-ui';
import { requestOpt , el_tip} from '../../api/recommend'
export default {
  name: 'Lottery',
  components:{
      TopLoginReg,
      TopTab,
      TopNote,
      Fixmid,
      BotCommon,
      Qiandao,
      InfoPanel
  },
  data () {
    return {
        cp_data_list : [],
        loading2:false,
        app_config : ''
    }
  },

  methods :{
        getData() {// 所有彩票列表集合
            this.cp_data_list = JSON.parse(sessionStorage.getItem('cp_data_list'));
            if(!this.cp_data_list){
                 this.loading2 = true;
                  requestOpt.reqnoGet('betting_list_v1?page=1&frequency=-1&is_hot=-1', 
                            (res)=>{
                                this.cp_data_list = res.data.data.list;
                                sessionStorage.setItem('cp_data_list',JSON.stringify(res.data.data.list));
                                this.loading2 = false;
                            }, (err)=>{
                                if(err.data){
                                      el_tip(err.data.msg)
                                }
                    })
            }

             setTimeout(() => {
                 this.define_bo_se('.bo_se_span');
             }, 60);
          
        },
        go_son_lott(id, title, code){
            sessionStorage.setItem('cp_title',title);
            this.$router.push('/lottery/' + id  + '/' + code);
        },
        // 区别开奖结果的波色
        define_lhc_sx(){
            let config_arr = JSON.parse(sessionStorage.getItem('app_config'));
            let old_sx = config_arr.lhc_shengxiao;
            let arr_all = [];
            for(let k in old_sx){
                let arr_key = old_sx[k].split(',');
                for(let i = 0; i < arr_key.length; i++){
                    arr_all.push({
                        text : k,
                        val : arr_key[i]
                    })
                }
            }
            let  red = ['01', '02','07','08','12', '13' , '18' , '19' , '23' , '24' , '29' , '30' , '34' , '35' , '40' , '45' ,  '46'];
            let blue =  ['03' ,'04' ,'09' ,'10' ,'14' ,'15' ,'20' ,'25' ,'26' ,'31' ,'36' ,'37' ,'41' ,'42' ,'47' ,'48' ];
            let green = ['05' ,  '06' ,  '11' ,  '16' ,  '17' ,  '21' ,  '22' ,  '27' ,  '28' ,  '32' ,  '33' ,  '38'  ,  '39' ,  '43' ,  '44' ,  '49']
            for(let i = 0; i < red.length; i++){
                for(let j = 0; j < arr_all.length; j++){
                    if(arr_all[j].val == red[i]){
                        arr_all[j].color = 'red'
                    }
                }
            }
            for(let i = 0; i < blue.length; i++){
                for(let j = 0; j < arr_all.length; j++){
                    if(arr_all[j].val == blue[i]){
                        arr_all[j].color = 'blue'
                    }
                }
            }
            for(let i = 0; i < green.length; i++){
                for(let j = 0; j < arr_all.length; j++){
                    if(arr_all[j].val == green[i]){
                        arr_all[j].color = 'green'
                    }
                }
            }

            for(let i = 0; i < arr_all.length; i ++){
                lhc_lot_data_formate[i] = arr_all[i];
            }
            // console.log(lhc_lot_data_formate);
            return lhc_lot_data_formate;

        },
        define_bo_se(className){
            let  hong_bo = ['01', '02','07','08','12', '13' , '18' , '19' , '23' , '24' , '29' , '30' , '34' , '35' , '40' , '45' ,  '46'];
            let lan_bo =  ['03' ,'04' ,'09' ,'10' ,'14' ,'15' ,'20' ,'25' ,'26' ,'31' ,'36' ,'37' ,'41' ,'42' ,'47' ,'48' ];
            let lv_bo = ['05' ,  '06' ,  '11' ,  '16' ,  '17' ,  '21' ,  '22' ,  '27' ,  '28' ,  '32' ,  '33' ,  '38'  ,  '39' ,  '43' ,  '44' ,  '49']
            let $span_s = $(className);

            if($span_s.length > 0){
                for(let i =0; i< $span_s.length; i++){
                    $span_s[i].classList.remove('hong_bo');
                    $span_s[i].classList.remove('lan_bo');
                    $span_s[i].classList.remove('lv_bo');
                }
            }
            
        
            for(let i = 0; i < $span_s.length; i++){
                
                let text = $span_s[i].innerText.trim();
                text = text.substr(0,2);
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

        lhc_color_formate(name) {
            for(let i=0;i<lhc_lot_data_formate.length;i++) {
                if (name === lhc_lot_data_formate[i].val) {
                return lhc_lot_data_formate[i]
                }
            }
        },
        getConfig_data(){
            this.app_config = JSON.parse(sessionStorage.getItem('app_config'));
            if(!this.app_config){
                requestOpt.reqnoGet('config',
                (res)=>{
                    if(res.data.status == 1 || res.status == 200){
                        this.app_config = res.data.data.config;
                        sessionStorage.setItem('app_config',JSON.stringify(res.data.data.config));
                        this.define_lhc_sx();
                    }else if(res.data.status == 0 && res.data.code == -2){
                        el_tip(res.data.msg + ' 请重新登录');
                        sessionStorage.removeItem('user')
                        setTimeout(()=>{
                            window.location.reload();
                            this.$root.bus.$emit("sendData",true);
                        },1000)
                    }
                    else{
                            el_tip(res.data.msg)
                    }
                },
                (err)=>{
                    el_tip(err.data.msg)
                })
            }
            this.define_lhc_sx();
        }
  },
 
  mounted(){

    // var that = this;
    this.getData();
    setInterval(()=>{
         this.getData();
    },3000)
  },
  created(){
      this.getConfig_data();
  },
  filters: {
    transImg: function(val) {
      var imgUrl1 = require("../../image/ks@1.png");
      var imgUrl2 = require("../../image/ks@2.png");
      var imgUrl3 = require("../../image/ks@3.png");
      var imgUrl4 = require("../../image/ks@4.png");
      var imgUrl5 = require("../../image/ks@5.png");
      var imgUrl6 = require("../../image/ks@6.png");
      if (val == 1) {
        val = imgUrl1;
      } else if (val == 2) {
        val = imgUrl2;
      } else if (val == 3) {
        val = imgUrl3;
      } else if (val == 4) {
        val = imgUrl4;
      } else if (val == 5) {
        val = imgUrl5;
      } else if (val == 6) {
        val = imgUrl6;
      }
      return val;
    }
  }
}
</script>

<style scoped>

.lottery_wrap{
    width:100%;
    background : #f2f2f2;
}

.lottery_cont{
    width:1200px;
    margin:0 auto;
}

.lottery_cont>h3{
    padding:20px 0 10px 0;
    color: #000;
    font-size:17px;
    border-bottom:1.5px solid #fff;
}

/* 内容表格部分 */

.lottery_cont>table{
    width:100%;
    padding-top:20px;
    border-collapse:collapse;
}
    /* 表头 */
.lottery_cont>table>thead>tr{
    display: flex;
    padding : 0 10px;
    margin-bottom:15px;
    margin-top:20px;
}
.lottery_cont>table>thead>tr>th{
    color:#545454;
    font-size:17px;
    font-weight:normal;
}
.lottery_cont>table>thead>tr>th:nth-child(1), .lottery_cont>table>tbody>tr>td:nth-child(1){
    text-align : left;
    flex: 1;
}
.lottery_cont>table>thead>tr>th:nth-child(2), .lottery_cont>table>tbody>tr>td:nth-child(2){
    text-align : left;
    flex: 1;
}
.lottery_cont>table>thead>tr>th:nth-child(3), .lottery_cont>table>tbody>tr>td:nth-child(3){
    text-align : left;
    flex: 2.5;
}
.lottery_cont>table>thead>tr>th:nth-child(4), .lottery_cont>table>tbody>tr>td:nth-child(4){
    text-align : right;
    flex: 1;
}

    /* 表身体 */
 .lottery_cont>table>tbody>tr{
     margin-bottom:15px;
     height:36px;
     padding : 2px 10px;
     line-height:36px;
     border-radius : 10px;
     box-shadow: 2px 3px 3px rgba(0,0,0,.2);
 }
 .lottery_cont>table>tbody>tr:hover td{
     color : #0047aa;
 }
.lottery_cont>table>tbody>tr{
    background : #fff;
    display:flex;
}

.lottery_cont>table>tbody>tr>td div img{
    width:28px;
    height:28px;
    margin-top:3px;
}

.lottery_cont>table>tbody>tr>td{
    font-weight:normal;
    font-size:15px;
    color: #545454;
    cursor : pointer;
    line-height: 32px;
}

.lottery_cont>table>tbody>tr>td span{
    display: inline-block;
    width:24px;
    height: 24px;
    background: #d50000;
    color : #fff;
    border-radius : 50%;
    text-align : center;
    line-height : 24px;
    background-image: linear-gradient(145deg,#feb505,#f26921 30%,#ef0000 60%,#d50000);
}

  /* 开奖加载图标 */
  .loading_kaijiang>strong{
    font-weight: normal;
}
  .loading_kaijiang{
     
    position:relative;
    /* height:30px; */
    /* line-height:30px; */

  }
    /* 开奖加载图标  */

.loading_kaijiang_i{
        display:flex;
        height: 5px;
        line-height:5px;
        position:absolute;
        left :70px;
        bottom:10px;
        /* transform: translateY(-50%); */
        /* margin: 0 auto; */
        /* margin-top:100px; */
        /* text-align: center; */
        }
.loading_kaijiang_i>i{
    display: inline-block;
    width: 3.2px;
    height: 3.2px;;
    margin-right: 2px;
    border-radius:2px;
    background: #ccc;
    -webkit-animation: load 1.04s ease infinite;
}
.loading_kaijiang_i i:last-child{
    margin-right: 0px; 
}
@-webkit-keyframes load{
    0%{
        background: #feb505;
    }
    100%{
       background: #ccc;
    }
}
.loading_kaijiang i:nth-child(1){
    -webkit-animation-delay:0.2s;
}
.loading_kaijiang i:nth-child(2){
    -webkit-animation-delay:0.4s;
}
.loading_kaijiang i:nth-child(3){
    -webkit-animation-delay:0.6s;
}
.loading_kaijiang i:nth-child(4){
    -webkit-animation-delay:0.8s;
}
.loading_kaijiang i:nth-child(5){
    -webkit-animation-delay:1s;
}


/* 开奖球波色 */
.lottery_cont>table>tbody>tr>td span.hong_bo{
   background:#df0000;
   background-image: linear-gradient(145deg,#feb505,#f26921 30%,#ef0000 60%,#d50000);
}
.lottery_cont>table>tbody>tr>td span.lan_bo{
   background:#0047aa;
   background-image : linear-gradient(145deg, #4492ff, #1174ff 30%,#005cdd 60%, #0047aa);
}
.lottery_cont>table>tbody>tr>td span.lv_bo{
   background:#187e00;
   background-image: linear-gradient(145deg, #27cb00, #22b100 30%, #1d9800 60%, #187e00);
}

.lottery_cont>table>tbody tr.lhc_tr_data{
    height:70px;
}
.lottery_cont>table>tbody tr.lhc_tr_data > td{
    line-height:70px;
}
.lottery_cont>table>tbody tr.lhc_tr_data > td:nth-child(3){
    line-height:0;
    /* display: flex; */
    position: relative;
}

.lottery_cont>table>tbody tr.lhc_tr_data > td:nth-child(3)>div>p{
    margin-top:10px;
    margin-bottom:5px;
}
.lottery_cont>table>tbody tr.lhc_tr_data > td:nth-child(3)>div>p:nth-child(2){
    /* padding: 5px 0; */
    margin-top:0;
}
.lottery_cont>table>tbody tr.lhc_tr_data > td:nth-child(3)>div>p:nth-child(2) i{
    display: inline-block;
    width:24px;
    height:24px;
    line-height: 24px;
    font-weight:700;
    text-align: center;
    font-style: normal;
    color : #4c4c4c;
    font-size : 1rem;
}

.lottery_cont>table>tbody tr.lhc_tr_data > td:nth-child(3) .loading_kaijiang{
    position: absolute;
    left: 0;
    top:50%;
}
.lottery_cont>table>tbody tr.lhc_tr_data > td:nth-child(3) .loading_kaijiang .loading_kaijiang_i{
    bottom: 0;
}

</style>
