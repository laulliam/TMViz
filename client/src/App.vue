<template>
  <div id="app">
    <AppTest></AppTest>
  </div>
</template>

<script>
import AppTest from './components/AppModules/AppTest'
export default {
  name: 'App',
  components: {
    AppTest,
  },
}
</script>

<style>

html,body{
  margin: 0;
  padding: 0;
}
#app {
  position: fixed;
  width:100%;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
