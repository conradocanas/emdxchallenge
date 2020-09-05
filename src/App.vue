<template>
  <v-app>
    <navbar></navbar>
    <router-view/>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar"
// @ is an alias to /src
export default {
  name: 'Home',
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
