<template>
    <v-toolbar fixed class="green" dark>
        <v-toolbar-title class="mr_4">
          <span class="home"
          @click="navigateTo({name: 'root'})">
          TabTracker</span>
        </v-toolbar-title>
      <!--later ons-->
        <!-- <v-toolbar-items>
          <v-btn flat dark>
            Browse
          </v-btn>
        </v-toolbar-items> -->

        <v-spacer></v-spacer>

        <v-toolbar-items>
          <v-btn
            v-if="!$store.state.isUserLoggedIn"
            flat dark
            @click="navigateTo({name: 'login'})">
              Log In
            <!-- <router-link to="register" style="color: white; text-decoration: none; font-weight: bold">
              Sign Up
            </router-link> -->
          </v-btn>
          <v-btn
            v-if="!$store.state.isUserLoggedIn"
            flat dark
            @click="navigateTo({name: 'register'})">
              Sign Up
            <!-- <router-link to="register" style="color: white; text-decoration: none; font-weight: bold">
              Sign Up
            </router-link> -->
          </v-btn>

          <v-btn
            v-if="$store.state.isUserLoggedIn"
            flat dark
            @click="logout">
              Log Out
            <!-- <router-link to="register" style="color: white; text-decoration: none; font-weight: bold">
              Sign Up
            </router-link> -->
          </v-btn>
        </v-toolbar-items>

    </v-toolbar>
</template>

<script>
/* eslint-disable */
// controller
export default {
  methods:{
    navigateTo (route){
      this.$router.push(route)
    },
    logout () {
      this.$store.dispatch('setToken',null)
      this.$store.dispatch('setUser',null)
      //TDO: redirect to homepage
      this.$router.push({
        name:'root'
      })
    }
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home {
    cursor: pointer;
  }
  .home:hover {
    color: #E97;
  }
  
</style>
