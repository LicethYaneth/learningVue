<template>
  <img alt="MindGround logo" src="./assets/logo-blanco.svg">
  <Titulo texto="MINDGROUND"/>
  <Cuenta />
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import Titulo from './components/Titulo.vue'
import Cuenta from './components/Cuenta.vue'
export default {
  name: 'App',
  components: {
  Cuenta,
  Titulo
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
