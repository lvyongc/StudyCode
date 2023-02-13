<template>
  <div class="box">
    <div>
      <h2>登录</h2>
      <p>用户名</p>
      <input type="text" v-model="username" />
      <p>密码</p>
      <input type="text" v-model="password" />
      <br />
      <button @click="login">登录</button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        username: "",
        password: "",
      };
    },
    methods: {
      login() {
        this.$router.push({
          name: "photo",
        });
        // this.$store
        //     .dispatch("login", {
        //     username: this.username,
        //     password: this.password,
        // }).then(()=>{
        //     this.$router.push({
        //         name:'photo'
        //     })
        // })
      },
    },
  };
</script>

<style scoped>
  .box {
    width: 600px;
    height: 300px;
    border: 1px solid #000;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
