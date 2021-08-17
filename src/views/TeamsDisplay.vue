<template>
  <div class="teams-display">
    <div v-for="team in teams" :key="team.id">
      <router-link v-bind:to="`/teams/${team.id}`">
        <h2>Team: {{ team.name }}</h2>
        <p>Wins: {{ team.wins }}</p>
        <p>Losses: {{ team.losses }}</p>
      </router-link>
    </div>
  </div>
</template>

<style></style>

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
      axios.get("/display").then((response) => {
        this.teams = response.data;
        console.log("All teams:", this.teams);
      });
    },
  },
};
</script>
