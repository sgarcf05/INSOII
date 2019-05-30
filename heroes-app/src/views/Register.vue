<template>
  <div class="home">
    <Register @sendData='sendUser' msg="Register into the Hero App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Register from '@/components/Auth/Register.vue'

export default {
  name: 'home',
  components: {
    Register
  },
  methods: {
    sendUser: function(id){
      this.$emit('sendUser', id);
    }  
  }
}
</script>
