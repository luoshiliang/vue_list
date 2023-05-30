<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      value:100
    }
  }
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
.block{
  width: 100px;
  height: 100px;
  position: absolute;
  top: 10px;
  left: 10px;
  margin: auto;
}
.demonstration{
  color: blueviolet;
}
</style>
