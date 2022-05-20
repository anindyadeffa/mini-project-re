<template>
  <div>
    <nav-bar/>
      <div class="container">
        <add-reservation/>
      </div>
      <footer-home/>
  </div>
</template>

<script>
import AddReservation from '@/components/AddReservation.vue'
import NavBar from '@/components/NavBar.vue'
import FooterHome from '@/components/FooterHome.vue'

  export default {
    name: 'HomeView',

    components: {
      NavBar,
      AddReservation,
      FooterHome,
    },
  }
</script>