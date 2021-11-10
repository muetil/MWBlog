<template>
  <div class="oar" :style="{scale:scale}">
    <div class="ar_back">
    </div>
    <a :href="href">
      <div class="ar_title">
        {{ title }}
      </div>
      <div class="tags">
        <span class="date">{{ date }}</span>
        <span class="views">{{ views }}</span>
      </div>
      <div class="ar_img">
        <div class="ar_img_back"></div>
        <img :src="imgPath" alt="">
        <div class="ar_alt">
          <p>{{ article }}</p>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "articlePlate",
  props:{
    title:{
      type:String,
      default:"标题"
    },
    article:{
      type:String,
      default:"文章简介"
    },
    path:{
      type:String,
      default:"#"
    },
    imgPath:{
      type:String,
      default:require('@/assets/img/testImg/ar-1.jpg')
    },
    date:{
      type:String,
      default:"2000-1-1"
    },
    views:{
      type:Number,
      default:0
    },
    scale:{
      type:Number,
      default:1
    }
  }
}
</script>

<style scoped>
a{
  text-decoration: none;
}
.oar{
  display: block;
  box-sizing: border-box;
  border-radius: 5px;
/*  background-color: white;*/
  width: 680px;
  height: 600px;
  margin: 20px 20px 0 20px;
  position: relative;
  overflow: hidden;
  box-shadow:0px 0px 10px 1px #000;
  transition: all 1s ease-in-out;
}
.ar_back{
  opacity: 0.65;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: -9;
  background-color: rgb(255, 255, 255);
}
.ar_title{
  width: 200px;
  height: 45px;
  margin: 30px auto 15px auto;
  line-height: 45px;
  font-size: 30px;
  background-color: turquoise;
  color: white;
  text-align: center;
  border-radius: 5px;
}
.tags{
  width: 250px;
  height: 30px;
  margin:auto;
  text-align: center;
}
.date,.views{
  display: inline-block;
  height: 18px;
  line-height: 18px;
  background-color: black;
  margin: 0 10px;
  color: white;
  font-size: 12px;
  font-weight: bold;
  padding: 0 5px;
  border-radius: 2px;;
}
.ar_img{
  margin: 0 auto;
  width: 640px;
  height: 450px;
  overflow: hidden;
  border-radius: 3px;
  position: relative;
  transition: all 2s linear;
  box-shadow:0px 0px 10px 2px #000;
}
.ar_img .ar_img_back{
  height: 100%;
  width: 100%;
  background-color: white;
  opacity: 0.55;
  z-index: -8;
  position: absolute;
  top: 0px;
  left: 0px;

}
.ar_img>img{
  height: 410px;
  width: 600px;
  margin: 20px;
}
.ar_alt{
  position: absolute;
  top: 20px;
  height: 410px;
  width: 600px;
  left: 20px;
  z-index: 10;
  background-color:black;
  color: white;
  font-size: 18px;
  font-weight: bold;
  opacity: 0;
  text-align: center;
  transition: all 0.7s ease-in-out;
  overflow: hidden;
}
.ar_alt>p{
  display: block;
  font-size: 18px;
  width: 100%;
  height: 100%;
  transform: scale(2);
  transition: all 0.9s ease-in-out;
}
.ar_alt:hover{
  opacity: .55;
}
.ar_alt:hover>p{
  transform: scale(1);
}
</style>