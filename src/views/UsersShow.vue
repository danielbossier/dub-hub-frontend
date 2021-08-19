<template>
  <div class="user-show">
    <div class="container">
      <h1>{{ user.username }}</h1>
      <div v-for="team in user.teams" :key="team.id">
        <h2 v-for="error in errors" v-bind:key="error">
          {{ error }}
        </h2>
        <h4>{{ team.city }} {{ team.name }}</h4>
        <h4>{{ team.wins }} - {{ team.losses }}</h4>
      </div>
      <router-link to="/groups">Back to all groups.</router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      user: {},
      errors: [],
      currentUser: localStorage.getItem("user_id"),
    };
  },
  created: function () {
    axios
      .get("/users/" + this.$route.params.id)
      .then((response) => {
        this.user = response.data;
      })
      .catch((error) => {
        this.status = error.response.status;
      });
  },
};
</script>
