<template>
  <div id="app">
    <div class="app-build">
        <router-view/>
    </div>
    
  </div>
</template>
<script>
import '@/index/assets/style/global.css';
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

</style>
