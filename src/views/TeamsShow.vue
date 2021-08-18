<template>
  <div class="teams-show">
    <div class="container">
      <h2>{{ team.name }}</h2>
      <p>{{ team.wins }}</p>
      <p>{{ team.losses }}</p>
      <!-- <img v-bind:src="team.image" alt="team.title" /> -->
      <!-- <li v-if="$parent.getUserID() == team.user_id"> -->
      <router-link v-bind:to="`/teams/${team.id}/edit`"><button>Edit team</button></router-link>
      <!-- </li> -->
      <router-link to="/teams">Back to all teams.</router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      team: {},
      errors: [],
    };
  },
  created: function () {
    axios
      .get("/teams/" + this.$route.params.id)
      .then((response) => {
        this.team = response.data;
      })
      .catch((error) => {
        this.status = error.response.status;
      });
  },
};
</script>
