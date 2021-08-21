<template>
  <div class="teams-show">
    <div class="container">
      <h2>{{ team.name }}</h2>
      <p>{{ team.wins }} - {{ team.losses }}</p>
      <div id="add-team-to-user">
        <button v-if="isLoggedIn()" v-on:click="updateUser()">Add Team</button>
      </div>
      <!-- <router-link v-bind:to="`/teams/${team.id}/edit`"><button>Edit team</button></router-link> -->
      <router-link to="/teams">Back to all teams.</router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      currentTeamParams: {},
      errors: [],
      team: {},
      user: [],
      current_user: localStorage.getItem("user_id"),
    };
  },
  created: function () {
    this.getUser();
    axios
      .get("/teams/" + this.$route.params.id)
      .then((response) => {
        this.team = response.data;
      })
      .catch((error) => {
        this.status = error.response.status;
      });
  },
  methods: {
    updateUser: function () {
      var params = {
        team_id: this.team.id,
        user_id: this.currentUser,
      };
      axios
        .post("/team_users", params)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/teams");
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
