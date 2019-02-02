<template>
  <div>
    <h1 class='header'> Registration</h1>
    <input
      type="email"
      name="email"
      v-model="email"
      placeholder="email" />
    <br>
    <input
    type="password"
      name="password"
      v-model="password"
      placeholder="password" />
      <br>
      <div class="error" v-html="error" />
      <br>
      <button
        @click= "register">
        Register
      </button>
  </div>
</template>

<script>
/* eslint-disable */
import AuthenticationService from '@/services/AuthenticationService'
// controller
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
         await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .header{
    font-size: 20px;
    font-style: oblique;
    color: #1f11ff;
  }
  input{
    height: 20px;
    font-family: 'Courier New', Courier, monospace;
    font-size: 12px;
    
    
  }
  .error{
    color: red;
  }
</style>
