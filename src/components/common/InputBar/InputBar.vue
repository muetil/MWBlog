<template>
  <div id="inputBar_plate">
    <div id="inputBar_ico"></div>
    <input type="text">
  </div>
</template>

<script>
export default {
  name: "InputBar"
}
</script>

<style scoped>
#inputBar_plate{
  height: 40px;
  width: 326px;
  border-radius: 4px;
  overflow: hidden;
  border:#dc2222 solid 1px;
}
#inputBar_plate::after{
  content: "";
  display: block;
  clear: both;
}
#inputBar_ico{
  height: 100%;
  width: 46px;
  background-color: #dc2222;
  float: left;
}
#inputBar_plate>input{
  margin: 0;
  padding: 0 0 0 6px;
  border: 0;
  outline: none;
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  width: 280px;
  float: left;
  box-sizing: border-box;
}
</style>