<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
</template>
<script>

export default {
 
    // computed: {
    //     tabTache(){
    //         return  this.$store.state.tabTache
    //     }

    // },
    created(){
      this.$store.state.tabTache = localStorage.getItem("tabTache") ? JSON.parse(localStorage.getItem("tabTache")) : this.$store.state.tabTache;
    },

     
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

#nav {
  padding: 30px;
  background: #2c3e50;
  a {
    font-weight: bold;
    color: #fff;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
