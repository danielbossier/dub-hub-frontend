<template>
  <div class="teams-index">
    <div class="card-deck">
      <div class="card" style="width: 15rem">
        <div v-for="team in teams" :key="team.id">
          <router-link v-bind:to="`/teams/${team.id}`">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                {{ team.name }}
                <br />
                {{ team.wins }} - {{ team.losses }}
              </li>
            </ul>
          </router-link>
          <!-- <div v-for="team in teams[1]" :key="team.id">
      <router-link v-bind:to="`/teams/${team.id}`">
        <h2>{{ team.name }}</h2>
        <p>{{ team.wins }} - {{ team.losses }}</p>
      </router-link>
    </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.teams-index {
  opacity: 0.8;
  font-size: 1.75rem;
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
        .get("/teams")
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
