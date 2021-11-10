<template>
  <background/>
  <top-bar />
<!--  :items="itemList"-->
  <main-content/>
<!--  <div id="nav">
    <router-link to="/">Home</router-link>
  </div>
  <router-view/>-->
</template>

<style>

</style>


<script>
import TopBar from "@/components/common/TopBar/TopBar";
import Background from "@/components/content/Background/Background";
import MainContent from "@/components/content/MainContent/MainCotent";

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