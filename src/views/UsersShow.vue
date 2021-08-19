<template>
  <div class="user-show">
    <div class="container">
      <h1>{{ user.username }}</h1>
      <div v-for="team in user.teams" :key="team.id">
        <h2 v-for="error in errors" v-bind:key="error">
          {{ error }}
        </h2>
        {{ team_users }}
        <h4>{{ team.city }} {{ team.name }}</h4>
        <h4>{{ team.wins }} - {{ team.losses }}</h4>
        <div id="remove-team-from-user">
          <button v-if="isLoggedIn()" v-on:click="removeTeam()">Remove Team</button>
        </div>
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
      team_users: {},
      currentUser: localStorage.getItem("user_id"),
    };
  },
  created: function () {
    this.getUser();
    axios
      .get("/users/" + this.$route.params.id)
      .then((response) => {
        this.user = response.data;
      })
      .catch((error) => {
        this.status = error.response.status;
      });
  },
  methods: {
    removeTeam: function () {
      var params = {
        team_user_id: this.team_users.id,
      };
      axios
        .delete(`/team_users/${18}`)
        .then((response) => {
          console.log("should be team_user_id", params);
          console.log(response.data);
          this.$router.push("/users/" + this.$route.params.id);
        })
        .catch((error) => {
          this.status = error.response.status;
        });
    },
    getUser: function () {
      axios
        .get("/users/" + this.current_user)
        .then((response) => {
          console.log("current_user ID: ", this.current_user);
          this.user = response.data;
          console.log(this.user);
        })
        .catch((error) => {
          this.status = error.response.status;
        });
    },
    isLoggedIn: function () {
      if (localStorage.getItem("jwt")) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>
