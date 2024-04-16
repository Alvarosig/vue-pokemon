<template>
  <div class="container-fluid">
    <div class="row">
      <Sidebar />
      <div class="col container-fluid p-0 bg">
        <AboutSection />
      </div>
    </div>
  </div>
</template>

<script>
import AboutSection from './components/AboutSection.vue';
import Sidebar from './components/Sidebar.vue'

export default {
  name: 'App',
  components: {
    Sidebar,
    AboutSection
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
  padding: 0;
  min-height: 100vh;
}

.bg {
  background-color: #f5f5f5;
}
</style>
