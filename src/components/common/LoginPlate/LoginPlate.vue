<template>
  <div id="LP" class="L_Ani" :style="{height:height+'px',width:width+'px'}">
    <div id="L_title" class="L_Ani">{{title}}</div>
    <div id="L_input">
      <input-bar></input-bar>
      <input-bar></input-bar>
    </div>
    <div id="L_option">
      <div id="LO_rem">
        <input type="checkbox" v-model="checked">
        记住我
      </div>
      <a id="LO_fgt" :href="fgtUrl">忘记密码</a>
    </div>
    <div id="L_btn">
      <span id="L_login">登录</span>
      <span id="L_register">注册</span>
    </div>
  </div>

</template>

<script>
import InputBar from "@/components/InputBar/InputBar";
export default {
  name: "LoginPlate",
  components: {InputBar},
  props:{
    title:{
      type:String,
      default:'登录'
    },
    fgtUrl:{
      type:String,
      default: '#'
    }
  },
  data:()=>{
    return{
      height:300,
      width:360,
      checked:false
    }
  }
}
</script>

<style scoped>
.L_Ani{
  transition: all 1s linear;
}
#LP{
  background: rgba(255,255,255,0.5);
  border-radius: 6px;
  overflow: hidden;

}
#LP:hover{
  background: rgba(255,255,255,1);;
  box-shadow: 0px 0px 20px 3px rgb(36, 35, 35);
}
#L_title{
  background: rgba(0,0,0,0.6);
  height: 38px;
  line-height: 38px;
  display: flex;
  text-align: left;
  box-sizing: border-box;
  padding-left: 16px;
  color: white;
  font-size: 18px;
}
#LP:hover>#L_title{
  background: rgba(0,0,0,0.75);
}
/*账号密码输入区域*/
#L_input{
  margin-top: 8px;
  width: 100%;
  height: 128px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: space-evenly;
}

/*选项区域*/
#L_option{
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  padding: 0 16px 0 16px;
  line-height: 40px;
  font-size: 12px;
  font-weight: 600;
}
#L_option::after{
  content: "";
  display: block;
  clear: both;
}
#LO_rem{
  float: left;
}
#LO_fgt{
  float: right;
}
/*按钮区域*/
#L_btn{
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  text-align: center;
}
#LP:hover #L_btn > span {
  background: rgba(0,0,0,0.75);
}
#L_btn > span {
  display: inline-block;
  width: 145px;
  height: 45px;
  line-height: 45px;
  padding: 0px;
  margin: 5px;
  border-radius: 4px;
  color: white;
  background: rgba(0,0,0,0.6);
  transition: all 1s linear;
  font-size: 20px;
  cursor: pointer;
}
</style>