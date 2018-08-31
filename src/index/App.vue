<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
const app = {
  name:'app'
};
//移动端rem适应配置
window.addEventListener("DOMContentLoaded",()=>{
  let html = document.querySelector("html");
  let fontsize = window.innerWidth / 10;
  fontsize = fontsize > 50 ? 50 : fontsize;
  html.style.fontSize = fontsize + 'px';
});
export default app;
</script>
>
<style lang="less">
@fontSize:16px;
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size:@fontSize;
}
</style>
