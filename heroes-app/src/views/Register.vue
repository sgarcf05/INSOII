<template>
  <div class="home">
    <Register msg="Register into the Hero App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Register from '@/components/Auth/Register.vue'

export default {
  name: 'home',
  components: {
    Register
  }
}
</script>
