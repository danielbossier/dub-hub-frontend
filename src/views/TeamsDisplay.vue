<template>
  <div class="teams-display">
    <div class="column">
      <div class="card" style="width: 19rem">
        <h2>American League</h2>
        <div v-for="team in teams[0]" :key="team.id">
          <router-link v-bind:to="`/teams/${team.id}`">
            <h2>{{ team.name }}</h2>
            <p>Wins: {{ team.wins }}</p>
            <p>Losses: {{ team.losses }}</p>
          </router-link>
        </div>
      </div>
    </div>
    <div class="column">
      <div class="card" style="width: 22rem">
        <h2>National League</h2>
        <div v-for="team in teams[1]" :key="team.id">
          <router-link v-bind:to="`/teams/${team.id}`">
            <h2>{{ team.name }}</h2>
            <p>Wins: {{ team.wins }}</p>
            <p>Losses: {{ team.losses }}</p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
  <!-- <div class="teams-display">
    <div v-for="team in teams[0]" :key="team.id">
      <router-link v-bind:to="`/teams/${team.id}`">
        <h2>{{ team.name }}</h2>
        <p>Wins: {{ team.wins }}</p>
        <p>Losses: {{ team.losses }}</p>
      </router-link>
    </div>
    <div v-for="team in teams[1]" :key="team.id">
      <router-link v-bind:to="`/teams/${team.id}`">
        <h2>{{ team.name }}</h2>
        <p>Wins: {{ team.wins }}</p>
        <p>Losses: {{ team.losses }}</p>
      </router-link>
    </div>
  </div> -->
</template>

<style>
.column {
  float: left;
  width: 50%;
  padding: 0 10px;
}
.teams-display {
  margin: 0 -5px;
}
.teams-display {
  content: "";
  display: table;
  clear: both;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); /* this adds the "card" effect */
  padding: 14px;
  text-align: left;
  background-color: #f1f1f1;
}
@media screen and (max-width: 600px) {
  .column {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }
}
</style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      teams: [],
      currentTeam: {},
    };
  },
  created: function () {
    this.indexTeams();
  },
  methods: {
    indexTeams: function () {
      axios
        .get("/display")
        .then((response) => {
          this.teams = response.data;
          console.log("All teams:", this.teams);
        })
        .catch((error) => {
          this.status = error.response.status;
        });
    },
  },
};
</script>
