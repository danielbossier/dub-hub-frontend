<template>
  <div class="groups-show">
    <div class="container">
      <h1>{{ group.name }}</h1>
      <router-link v-bind:to="`/groups/${group.id}`">
        <div v-for="user in group.users" :key="user.id">
          <h2>{{ user.username }}</h2>
          <div v-for="team in user.teams" :key="team.id">
            <h2 v-for="error in errors" v-bind:key="error">
              {{ error }}
            </h2>
            <h4>{{ team.city }} {{ team.name }}</h4>
            <h4>{{ team.wins }} - {{ team.losses }}</h4>
          </div>
          <h4>Combined user record:</h4>
          <h4>{{ totalWins(user) }} - {{ totalLosses(user) }}</h4>
          <hr />
        </div>
      </router-link>

      <router-link v-bind:to="`/groups/${group.id}/edit`"><button>Join Group</button></router-link>

      <router-link to="/groups">Back to all groups.</router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      group: {},
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
        console.log("no teams assigned");
      } else {
        lossesArray = lossesArray.reduce((x, y) => x + y);
      }
      return lossesArray;
    },
  },
};
</script>
