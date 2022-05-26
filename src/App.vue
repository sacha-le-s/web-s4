<template>
  <div id="app">
    <Menu id='menu'/>
    <!-- <img alt="Vue logo" src="./assets/index.jpeg"> -->
    <Content/>
  </div>
</template>

<script>
import Menu from './components/menu.vue'
import Content from './components/content.vue'

export default {
  name: 'App',
  components: {
    Menu,
    Content
  }
}
</script>

<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  min-height: 100vh;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #131E37;
  background: #ffffff;
  width: 100%;
  min-height: 100vh;
}

</style>
