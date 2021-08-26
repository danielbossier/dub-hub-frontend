<template>
  <div class="groups-show">
    <div class="container">
      <!-- <h1>{{ group.name }}</h1> -->
      <div class="card-deck">
        <div class="card col text-center" style="width: 18rem">
          <router-link v-bind:to="`/groups/${group.id}`">
            <div v-for="user in group.users" :key="user.id">
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  <h2>{{ user.username }}</h2>
                  <hr />
                  <div v-for="team in user.teams" :key="team.id">
                    <h2 v-for="error in errors" v-bind:key="error">
                      {{ error }}
                    </h2>
                    <h4>{{ team.name }}</h4>
                    <h4>{{ team.wins }} - {{ team.losses }}</h4>
                    <hr />
                  </div>
                  <h4>User record:</h4>
                  <h4>{{ totalWins(user) }} - {{ totalLosses(user) }}</h4>
                  <router-link v-bind:to="`/users/${user.id}`">
                    <button class="basicButton">Edit Teams</button>
                  </router-link>
                  <!-- <br /> -->
                  <hr />
                </li>
              </ul>
            </div>
            <br />
          </router-link>
        </div>
      </div>
      <router-link v-bind:to="`/groups/${group.id}/edit`">
        <button class="basicButton">Join Group</button>
      </router-link>
      <router-link v-bind:to="`/groups`"><button class="basicButton">All groups</button></router-link>
    </div>
  </div>
</template>

<style>
.groups-show {
  columns: 100px 2;
  opacity: 0.9;
  /* font-size: 1rem; */
}
.basicButton {
  /* background-color: rgb(226, 19, 19); */
  /* border: none; */
  color: black;
  padding: 10px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  transition-duration: 0.4s;
}
.basicButton:hover {
  background-color: red;
  color: white;
}
</style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      group: {},
      user: {},
      errors: [],
    };
  },
  created: function () {
    axios
      .get("/groups/" + this.$route.params.id)
      .then((response) => {
        this.group = response.data;
        console.log(response.data);
      })
      .catch((error) => {
        this.status = error.response.status;
      });
  },
  methods: {
    totalWins: function (user) {
      let winsArray = [];
      winsArray = user.teams.map((x) => x.wins);
      if (winsArray.length == 0) {
        winsArray = "No teams";
        console.log("no teams assigned");
      } else {
        winsArray = winsArray.reduce((x, y) => x + y);
      }
      return winsArray;
    },
    totalLosses: function (user) {
      let lossesArray = [];
      lossesArray = user.teams.map((x) => x.losses);
      if (lossesArray.length == 0) {
        lossesArray = "assigned.";
        console.log("no teams assigned");
      } else {
        lossesArray = lossesArray.reduce((x, y) => x + y);
      }
      return lossesArray;
    },
  },
};
</script>
