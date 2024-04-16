<template>
  <div class="container-fluid">
    <div class="row">
      <sidebar-menu />
      <div class="col container-fluid p-0 bg">
        <about-section />
      </div>
    </div>
  </div>
</template>

<script>
import AboutSection from './components/AboutSection.vue'
import SidebarMenu from './components/SidebarMenu.vue'

export default {
  name: 'App',
  components: {
    SidebarMenu,
    AboutSection
  }
}
</script>

<style>
#app {
  font-family: "Dosis", sans-serif;
  font-optical-sizing: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 0;
  min-height: 100vh;
}

.bg {
  background-color: #f5f5f5;
}

.font-bold {
  font-weight: bold;
}

</style>
