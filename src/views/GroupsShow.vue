<template>
  <div class="groups-show">
    <div class="container">
      <h1>{{ group.name }}</h1>
      <router-link v-bind:to="`/groups/${group.id}`">
        <div v-for="user in group.users" :key="user.id">
          <h2>{{ user.username }}</h2>
          <div v-for="team in user.teams" :key="team.id">
            <h5>{{ team.city }} {{ team.name }}</h5>
            <h5>{{ team.wins }} - {{ team.losses }}</h5>
          </div>
          <p>Combined user record:</p>
          <p>{{ totalWins(user) }} - {{ totalLosses(user) }}</p>
          <hr />
        </div>
      </router-link>

      <router-link v-bind:to="`/groups/${group.id}/edit`"><button>Edit group</button></router-link>

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
    };
  },
  created: function () {
    axios.get("/groups/" + this.$route.params.id).then((response) => {
      this.group = response.data;
      console.log(response.data);
    });
  },
  methods: {
    totalWins: function (user) {
      let winsArray = user.teams.map((x) => x.wins).reduce((x, y) => x + y);
      return winsArray;
    },
    totalLosses: function (user) {
      let lossesArray = user.teams.map((x) => x.losses).reduce((x, y) => x + y);
      return lossesArray;
    },
  },
};
</script>
