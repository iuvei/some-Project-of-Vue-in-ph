<template>

    <div class="record-btn"  @click="changeRouter">
      <div  tag="div" class="tab-item" >
        <dl>
          <input type="button" value="立即投注" >
        </dl>
      </div>
      <div class="show_pan" v-show="is_Show_pan">
          <div @click="toPlan(1)">{{recordTitle}}A盘</div>
          <div @click="toPlan(2)">{{recordTitle}}B盘</div>
      </div>
     </div>
</template>

<style scoped lang="stylus">


    .record-btn {
      position: fixed;
      bottom: 0;
      width: 7.5rem;
      height: 1rem;
      background: #ffffff;
    }

    .record-btn dl {
      width: 6.9rem;
      height: 0.8rem;
      color: #fefefe;
      background: #fa3c3c;
      text-align: center;
      line-height: 0.8rem;
      margin: auto;
      display: block;
      border-radius: 4px;
      margin-top: 0.1rem;
    }

    .record-btn input[type=button] {
    width: 6.9rem;
    height: 0.8rem;
    color: #fefefe;
    font-size: 0.36rem;
    background: none;
    text-align: center;
    line-height: 0.8rem;
    margin: auto;
    display: block;
    border: none;
    outline: none;
    }

    /* AB盘 */
    .show_pan{
      position:absolute ;
      bottom:1rem;
      left: 0;
      right: 0;
      margin: auto;
      height: 1.6rem;
      width:6.9rem;

    }
    .show_pan div{
      height:0.8rem;
      border:1px solid #ccc;
      text-align:center;
      line-height: 0.8rem;
      color:#000;
      background:#fff;
      font-size: .3rem;
      &:first-child {
        border-bottom: 0;
       }
    }

</style>

<script>

    export default{

        data(){

            return{
                cp_title: '',
                result:[],
                PC_dandan:[],
                is_Show_pan:false,
                plan_index : 1
            }
        },
        props:['recordTitle'],
        created(){

        },
        methods:{

            changeRouter(){
                this.result = window.All;
                this.PC_dandan = window.PC_dandan;
                this.result = this.result.concat(this.PC_dandan);
                var name = this.recordTitle;
                if (name=='重庆时时彩'
                    ||name=='北京PK拾'
                    ||name=='三分时时彩'
                    ||name=='三分PK拾'
                    ||name=='幸运28'
                    ||name=='北京28'
                    ||name=='新疆时时彩'
                    ||name=='天津时时彩'){
                         this.is_Show_pan = !this.is_Show_pan;
                    }else{
                        this.to_drop_plan(1);
                    }
            },
            toPlan(index){
                this.to_drop_plan(index);
            },
            to_drop_plan(index){
                 for(var i = 0; i < this.result.length; i++){
                    if(this.$route.params.id == this.result[i].lot_type_id){
                      this.$store.commit('LOTTERY_CODE',this.result[i].code)
                      this.$router.push('/gameplay/'+ this.result[i].code +'/'+ this.result[i].lot_type_id +'/'+ index)
                    }
                }
            }
        }

    }

</script>

