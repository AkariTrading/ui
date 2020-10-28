<template>
  <div>
    <h2>Login</h2>
    <div>
      <label>Email</label>
      <input type="text" name="email" v-model="email" />
    </div>
    <div>
      <label>Password</label>
      <input type="text" name="password" v-model="password" />
    </div>
    <div>
      <button @click="userLogin" type="submit">Login</button>
    </div>

    <div>
      <nuxt-link to="/register"><button class="">Sign Up</button></nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
export default Vue.extend({

  data() {
    return {
      email: "",
      password: "",
    };
  },

  methods: {
    async userLogin() {
      if (await this.$auth.login(this.email, this.password)) {
        this.$router.push("/");
      } else {
      }
    },
  },
});
</script>

<style >
</style>