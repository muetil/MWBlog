<template>
  <div id="backPlate">
    <div class="backGround" :style="{backgroundImage:'url('+imgPath_0+')',opacity:showIndex===0?0.8:0}"></div>
    <div class="backGround" :style="{backgroundImage:'url('+imgPath_1+')',opacity:showIndex===1?0.8:0}"></div>
  </div>
</template>

<script>

export default {
  name: "ImBackground",
  props:{
    imgPath:{
      type:Array,
      default:()=>[require("@/assets/img/testImg/bk-0.jpg"),
        require("@/assets/img/testImg/bk-1.jpg"),
        require("@/assets/img/testImg/bk-2.jpg"),
        require("@/assets/img/testImg/bk-3.jpg")]
    },
    time:{
      type:Number,
      default:5000
    }
  },
  data:()=>{
    return{
      imgPath_0:'',
      imgPath_1:'',
      imgNum:0,
      imgIndex:0,
      showIndex:0,
      bks:[null,null]
    }
  },
  mounted() {
    this.imgNum=this.imgPath.length;
    if(this.imgNum==1){
      this.imgPath_0=this.imgPath_1=this.imgPath[0];
      return
    }
    if(this.time<2000){
      this.time=2000;
    }
    this.imgPath_0=this.imgPath[0];
    this.imgPath_1=this.imgPath[1];
    setInterval(()=>{
      this.imgIndex=(this.imgIndex+1)%this.imgNum;

      /*let this.showIndex===0?1:0;
      this.showIndex=this.showIndex===0?1:0;*/
      if(this.showIndex===0){
        this.imgPath_1=this.imgPath[this.imgIndex];
        this.showIndex=1;
      }else {
        this.imgPath_0=this.imgPath[this.imgIndex];
        this.showIndex=0;
      }

    },this.time)

  }

}
</script>

<style scoped>
#backPlate{
  height: 100%;
  width: 100%;
  overflow: hidden;
}

@keyframes rollBG {
  100%{transform: scale(1.05); }
}

.back_img{

}
.backGround{
  position: fixed;
  left: 0;
  top:0;
  height: 100vh;
  width: 100vw;
  transition:all 3s ease-in;
  animation: rollBG 5s linear 0s infinite alternate;
  opacity: 0.8;
  background-size: cover;
  background-attachment: fixed;
}
</style>