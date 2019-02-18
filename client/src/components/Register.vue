<template>
    <v-layout column>
      <v-flex xs6 md4 lx2>
        <div class="white-elevation2">
          <v-toolbar flat dense dark class="primary">
            <v-toolbar-title>Register</v-toolbar-title>
           </v-toolbar>

          <div class="pa-3">
            <form
              name="tab-tracker-form"
              autocomplete="off">
            <v-text-field
              label="email"
              v-model="email"
            ></v-text-field>
            <br>
            <v-text-field
              label="password"
              type="password"
              v-model="password"
              autocomplete="new-password"
            ></v-text-field>
            </form>
            <br>
          <div class="error" v-html="error" color:red/>
            <br>
            <v-btn
              dark
              class="success"
              @click= "register">
              Register
            </v-btn>
          </div>
          </div>
      </v-flex>
    </v-layout>

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
         const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /* .container{
    width:65%;
    padding: 14px;
  }
  .error{
    color: red;
  } */
</style>
