<template>
  <div id="LSLPlate">
    <div id="LSL_title">
      {{title}}
    </div>
    <div id="LSL_list">
      <a class="LSL_item" v-for="item in lineList" :href="item[1]">
        {{item[0]}}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "LineShowList",
  props:{
    lineList:{
      type:Object,
      default:()=>{
        return [
          ['评论1', '#'],
          ['评论2', '#'],
          ['评论3', '#'],
          ['评论4', '#'],
          ['评论5', '#'],
          ['评论6', '#'],
          ['评论7', '#'],
          ['评论8', '#'],
          ['评论9', '#'],
      ]
      }
    },
    title:{
      type:String,
      default:'最新评论'
    }

  }
}
</script>

<style scoped>
#LSLPlate{
  width: 360px;
  background:rgba(255,255,255,0.5);
  border-radius: 6px;
  overflow: hidden;
}
#LSL_title{
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  padding-left: 16px;
  font-size: 18px;
  line-height: 40px;
  color: white;
  background: rgba(0,0,0,0.6);
}
.LSL_item{
  display: block;
  width: 100%;
  height: 40px;
/*  background: rgba(255,255,255,0.5);*/
  font-size: 13px;
  font-weight: normal;
  line-height: 40px;
  box-sizing: border-box;
  padding-left: 20px;
  opacity: 0.5;
  background-color: white;
}
.LSL_item:hover{
/*  background: rgba(255,255,255,1);*/
  box-shadow: 0px 0px 40px 2px black;
  opacity: 1;
}

</style>