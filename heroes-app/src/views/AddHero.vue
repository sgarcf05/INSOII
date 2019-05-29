<template>
  <div class="home">
    <AddHero msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import AddHero from '@/components/AddHero.vue'

export default {
  name: 'home',
  components: {
    AddHero
  }
}
</script>
