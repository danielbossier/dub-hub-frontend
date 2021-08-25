<template>
  <div class="user-show">
    <div class="container">
      <div class="card-deck">
        <div class="card col text-center" style="width: 15rem">
          <h1>{{ user.username }}</h1>
        </div>
        <div class="card-deck">
          <div class="card col text-center" style="width: 15rem">
            <div v-for="team_user in user.team_users" :key="team_user.id">
              <h2 v-for="error in errors" v-bind:key="error">
                {{ error }}
              </h2>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  <h2>{{ team_user.team.name }}</h2>
                  <h4>{{ team_user.team.wins }} - {{ team_user.team.losses }}</h4>
                </li>
              </ul>
              <div class="col text-center" id="remove-team-from-user">
                <button class="basicButton" v-if="isLoggedIn()" v-on:click="removeTeam(team_user.id)">
                  Remove Team
                </button>
              </div>
            </div>
            <router-link to="/groups"><button class="basicButton">All groups</button></router-link>
          </div>
        </div>
      </div>
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
    removeTeam: function (params) {
      axios
        .delete(`/team_users/${params}`)
        .then((response) => {
          console.log("should be team_user_id", params);
          console.log(response.data);
          this.$router.go();
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
    // sortFunc: function () {
    //   return this.team_users.slice().sort(function (a, b) {
    //     return a.team.wins < b.team.wins ? 1 : -1;
    //   });
    // },
  },
};
</script>
