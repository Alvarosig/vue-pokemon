<template>
  <div class="d-flex w-100 overflow-hidden vh-100 ">
    <sidebar-menu />
    <div class="overflow-y-auto bg h-100 flex-fill bg-custom">
      <about-section />
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
  height: 100vh;
  width: 100%;
  overflow-y: hidden
}

.bg {
  background-color: #f5f5f5;
}

.font-bold {
  font-weight: bold;
}

.pokemon-background {
  background-color: #f1f1f1; 
  border-radius: 50%;  
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 4px 0;
}

.bg-custom {
  background-image: url('@/assets/pokeball.svg');
  background-repeat: no-repeat;
  background-size: 600px 600px;
  background-position: right -25% top -60%;
}

@media (max-width: 768px) {
  .bg-custom {
    background-image: none;
  }
}
</style>
