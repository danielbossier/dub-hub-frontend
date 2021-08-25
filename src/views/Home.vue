<template>
  <div class="home">
    <!-- <h1>{{ message }}</h1> -->
    <div class="card col text-center" style="width: 15rem" v-if="!isLoggedIn()">
      <p>Signup or Login!</p>
    </div>
  </div>
</template>

<style>
.home {
  padding: 0 20px;
}
</style>

<script>
export default {
  data: function () {
    return {
      message: "Welcome to The Dub Hub!",
    };
  },
  created: function () {},
  methods: {
    isLoggedIn: function () {
      if (localStorage.getItem("jwt")) {
        return true;
      } else {
        return false;
      }
    },
    getUserId: function () {
      return localStorage.getItem("user_id");
    },
  },
};
</script>
