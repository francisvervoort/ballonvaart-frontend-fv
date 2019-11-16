<template>
  <div id="app">
    <nav-bar />
    <router-view />
  </div>
</template>

<script>
import NavBar from "@/layouts/NavBar";

export default {
  components: {
    NavBar
  } 
}
</script>

<style lang="scss"></style>