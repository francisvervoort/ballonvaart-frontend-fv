<template>
  <div id="app" class="min-h-screen flex flex-col">
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