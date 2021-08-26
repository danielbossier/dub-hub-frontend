<template>
  <div class="teams-show">
    <div class="container">
      <div class="card col text-center mx-auto" style="width: 16rem">
        <!-- <h2>{{ team.name }}</h2>
        <p>{{ team.wins }} - {{ team.losses }}</p> -->
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            {{ team.name }}
            <br />
            {{ team.wins }} - {{ team.losses }}
          </li>
        </ul>
        <div id="add-team-to-user">
          <button class="basicButton" v-if="isLoggedIn()" v-on:click="updateUser()">Add Team</button>
        </div>
        <router-link to="/display"><button class="basicButton">Back to all teams</button></router-link>
      </div>
    </div>
  </div>
</template>

<style>
.card {
  opacity: 0.8;
  font-size: 1.75rem;
}
</style>

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
        console.log("team ID", this.team);
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
          this.$router.push("/display");
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
          console.log("should be this user", this.user);
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
