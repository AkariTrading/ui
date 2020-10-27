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
        <button @click="userLogin" type="submit">Register</button>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async userLogin() {
      const auth = this.$firebaseauth();
      let errCode = await auth.login(this.email, this.password);
      if (!errCode) {
        this.$router.push("/");
      } else {
        console.log(errCode);
      }
    },
  },
};
</script>
<style >
</style>