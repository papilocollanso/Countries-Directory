<template>
  <div class="container" id="app">
    <div id="nav">
       <Header/><br>
    </div>
    <router-view/>
    <Footer/>
  </div>
</template>
<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: start;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: normal;
    color: white;

    &.router-link-exact-active {
      color: blue;
    }
  }
}
</style>
