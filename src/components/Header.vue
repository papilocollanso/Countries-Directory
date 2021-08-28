<template>
  <div>
<nav class="navbar navbar-expand-md navbar-dark fixed-top" id="head">
     <router-link class="navbar-brand" to="/">Home<span class="sr-only">(current)</span></router-link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <button class="navbar-toggler" type="button" @click="toggleNavbar()" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent" v-bind:class="{'show':show}">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
     <router-link to="/about">About</router-link>
      </li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <li class="nav-item">
       <router-link to="/contact">Contact</router-link>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="text" v-model="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-primary text-white my-2 my-sm-0" @click.prevent="searches()"  type="submit">Search</button>
    </form>
  </div>
</nav>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      show: true,
      search: ''
    }
  },
  methods: {
    toggleNavbar () {
      this.show = !this.show
    },
    ...mapActions(['getSearch']),
    searches () {
      console.log(this.getSearch(this.search))
    }
  }
}
</script>
<style lang="css" scoped>
#head{
background-color: black;
}
</style>
