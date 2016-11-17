<template>
  <div id="app">
     <router-view transition="fade"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
  return {
  }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.fade-transition{
  transition:all .3s ease;
  height: auto;
  padding: 10px;
  overflow: hidden;
}

.fade-enter,.fade-leave{
  opacity: 0;
  height: 0;
  padding: 0 10px;
}
</style>
