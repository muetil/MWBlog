<template>
  <div id="outPlate">
    <div id="center">
      <div id="left">
        <article-plate/>
        <article-plate/>
      </div>
      <div id="right">
        <div id="LPP">
          <login-plate/>
        </div>
        <DIV id="LSL">
          <line-show-list/>
        </DIV>
      </div>
    </div>
  </div>
</template>

<script>
import ArticlePlate from "@/components/common/articlePlate/articlePlate";
import LoginPlate from "@/components/common/LoginPlate/LoginPlate";
import LineShowList from "@/components/common/LineShowList/LineShowList";
export default {
  name: "MainContent",
  components: {LineShowList, LoginPlate, ArticlePlate},
  props:{
    stepNum:{


    }

  },
  data:()=>{
    return{
      nowMIndex:0,
    }
  },
  methods:{
    getArticle(Num){
      //TODO
    }
  }
}
</script>

<style scoped>
#outPlate{
  width: 100%;
}
#center{
  position: relative;
  margin: 0 auto;
  width: 1200px;
}

#left{
  position: absolute;
  left: 0;
  top:0;
  width: 60%;
}

#right{
  position: absolute;
  right: 0;
  top: 0;
  width: 40%;
  height: 300px;
}

#LPP{
  margin-top: 30px;
}

#LSL{
  margin-top: 20px;
}
</style>