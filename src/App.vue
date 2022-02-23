<template>
  <background/>
  <top-bar :title="'实验项目库'"/>
  <router-view/>
</template>

<style>

</style>


<script>
import TopBar from "@/components/common/TopBar/TopBar";
import Background from "@/components/content/Background/Background";
import MainContent from "@/components/content/MainContent/MainContent";

export default {
  data:()=>{
    return{
      itemList:[
        ['其它','/'],
        ['首页','/']
    ]
  }
  },
  components: {MainContent, Background, TopBar}
}

</script>