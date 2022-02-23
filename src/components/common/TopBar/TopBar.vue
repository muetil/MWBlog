<template>
  <div class="topBar">
    <div id="itemList">
        <a class="item" v-for="item in items"  @click.stop="toArticle(item[1])">
          {{item[0]}}
        </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopBar",
  props:{
    items: {
      default:()=> {
        return[
          ['首页','/']
        ]
      }
    }
  },
  methods:{
    toArticle(path){
      this.$router.push(path)
    }
  }

}
</script>

<style scoped>
.topBar{
  width: 100%;
  height: 50px;
  background-color: black;
  opacity: .8;

}
#itemList{
  height: 100%;
  width: 1200px;
  margin: 0 auto;
}

.item{
  display: inline-block;
  height: 100%;
  width: 80px;
  line-height: 50px;
  text-align: center;
  color: white;
  font-weight: bolder;
  font-size: 20px;
  float: left;
}
.item:hover{
  background-color: rgb(65, 45, 180);
}
</style>