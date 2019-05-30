<template>
  <div class="home">
    <Login @logUser='sendUser'/>
  </div>
</template>

<script>
// @ is an alias to /src
import Login from '@/components/Auth/Login.vue'

export default {
  name: 'home',
  components: {
    Login
  },
  methods: {
      sendUser: function(id){
        this.$emit('sendUser', id);
      }  
  }
  
}
</script>
