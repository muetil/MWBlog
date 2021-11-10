<template>
    <div id="viewPort" :style="{height:high+'px',width:width+'px'}">
      <div id="imgContent" :style="{height:high+'px',width:(imgPath.length+2)*width+'px',left:nowPosition+'px'}" >
        <img v-for="img in imgQuery" :src="img['path']" :key="img['path']" :style="{height:high+'px',width:width+'px'}" alt="">
      </div>
      <slot name="lArrow">
        <span v-if="!arrowsHide" id="lArrow" class='arrow' @click="beforeImg">  </span>
      </slot>
      <slot name="rArrow">
        <span v-if="!arrowsHide" id="rArrow" class='arrow' @click="nextImg">  </span>
      </slot>
      <div id="pointPlate" v-if="!pointHide" :style="{marginLeft:-pPLength/2+'px'}">
        <a v-for="(_,index) in imgPath" :class="{'point':true,'nowIndex':index==nowIndex}" :key="index" @click="moveTo(index)"></a>
      </div>
    </div>
</template>

<script>

export default {
  name: "RotationPlot",
  props:{
    //轮播图片路径
    imgPath:{
      type:Array,
      default:()=>[require("../../assets/testImgs/1.jpg"),
        require("../../assets/testImgs/2.jpg"),
        require("../../assets/testImgs/3.jpg"),
        require("../../assets/testImgs/4.jpg")
      ]
    },
    //轮播窗口大小
    width:{
      type:Number,
      default: 800
    },
    high:{
      type:Number,
      default: 600
    },
    pointHide:{
      type:Boolean,
      default:false
    },
    arrowsHide:{
      type:Boolean,
      default:false
    },
    //自动轮播设置
    autoC:{
      type:Boolean,
      default:true
    },
    cTime:{
      type:Number,
      default:5000
    },
    //按钮切换设置
    bTime:{
      type:Number,
      default:1400
    },
    oTime:{
      type:Number,
      default:15
    }
  },
  data:()=>{
    return {
      pPLength:0,
      nowIndex:0,
      imgNum:0,
      imgQuery:[],
      nowPosition:0,
      aniOn:false,
      aniData:{
        bPosition:0,
        fPosition:0,
        restTime:0,
        stepLength:0,
        restStep:0,
        tarIndex:0,
        //待进行动画队列
        list:[]
      },
      clock:{
        auto:null,
        btnMove:null
      }
    }
  },
  mounted() {
    this.imgNum=this.imgPath.length
    this.pPLength=this.imgNum*24;
    this.imgQuery.push({'index':-1,'path':this.imgPath[this.imgNum-1]});
    for(let i=0;i<this.imgNum;i++){
      this.imgQuery.push({'index':i,'path':this.imgPath[i]});
    }
    this.imgQuery.push({'index':this.imgNum,'path':this.imgPath[0]});
    this.nowPosition=-this.width;
    this.aniOn=true;
    this.fPosition=-this.imgNum*this.imgPath.length;
    if(this.autoC){
      this.autoChange();
    }
  },
  methods:{
    autoChange(){
      this.clock.auto=setInterval(()=>{
        this.moveAni(1)
      },this.cTime)
    },
    moveAni(dir){
      clearInterval(this.clock.auto);
      this.aniData.restStep=this.bTime/this.oTime;
      let oldPo=this.nowPosition;
      let dis=-dir*this.width;
      this.aniData.stepLength=dis/this.aniData.restStep;
      if(this.clock.btnMove!=null){
        clearInterval(this.clock.btnMove);
      }
      this.clock.btnMove=setInterval(()=>{
        this.aniData.restStep=this.aniData.restStep-1;
        this.nowPosition+=this.aniData.stepLength;
        if(this.aniData.restStep<1){
          this.nowPosition=oldPo+dis;
          clearInterval(this.clock.btnMove);
          let nowIndex=this.nowIndex+dir;
          if(nowIndex<0){
            this.nowPosition=-(this.imgNum)*this.width;
            nowIndex=this.imgNum-1;
          }else if(nowIndex==this.imgNum){
            this.nowPosition=-this.width;
            nowIndex=0;
          }
          this.nowIndex=nowIndex;
          if(this.aniData.list.length!=0){
            let nDir=this.aniData.list[0];
            this.aniData.list.shift();
            this.moveAni(nDir);
          }else{
            this.clock.btnMove=null;
            if(this.autoC){
              this.autoChange();
            }
          }
        }
      },this.oTime)
    },
    contentMove(dir){
      if(this.clock.btnMove!=null){
        if(this.aniData.list.length!=0){
          if(this.aniData.list[this.aniData.list.length-1]!=-dir){
            this.aniData.list.push(dir);
          }else {
            this.aniData.list.pop();
          }
        }else{
          this.aniData.list.push(dir);
        }
      }else {
        this.moveAni(dir);
      }
    },
    beforeImg() {
      this.contentMove(-1)
    },
    nextImg(){
      this.contentMove(1)
    },
    moveTo(index){
      clearInterval(this.clock.auto);
      this.nowPosition=-(index+1)*this.width;
      this.nowIndex=index;
      if(this.autoC){
        this.autoChange();
      }
    }
  }
}
</script>

<style scoped>
/*视口样式*/
#viewPort{
  background-color:white;
  position: relative;
  overflow: hidden;
}
#imgContent{
  position: absolute;
  top: 0;
}
.moveAni{
  transition: all 2s ease-in-out;
}
/*图片样式*/
img{
  padding: 0;
  margin: 0;
  float: left;
  display: inline-block;
}
/*左右箭头样式*/
.arrow{
  text-align: center;
  position: absolute;
  top: 42%;
  height:16%;
  width: 7%;
  background-color: black;
  display: inline-block;
  opacity: 0.4;
  transition: all 1s ease-in-out;
  color: white;
}
.arrow:hover{
  opacity: 0.6;
}
#lArrow{
  left: 0;
  border-radius: 0 20px 20px 0;
}
#rArrow{
  right: 0;
  border-radius: 20px 0 0 20px;
}
/*点相关*/
.nowIndex{
  background-color: white !important;
}
#pointPlate{
  position: absolute;
  bottom: 2%;
  left: 50%;
  border-radius: 20px;
  background-color: #c8c2c2;
  background-color: rgba(200,194,194,0.5);
  transition: all 1s ease-in-out;
  text-align: center;
  display: flex;
  justify-content: center;
}
.point{
  flex-wrap: nowrap;
  margin: 2px 4px;
  width: 16px;
  height: 16px;
  border-radius: 100%;
  background-color: black;
  line-height: 100%;
}
</style>