<template>
  <div class="groups-show">
    <div class="container">
      <h1>{{ group.name }}</h1>
      <router-link v-bind:to="`/groups/${group.id}`">
        <div v-for="user in group.users" :key="user.id">
          <h2>{{ user.username }}</h2>
          <div v-for="team in user.teams" :key="team.id">
            <h5>{{ team.city }}</h5>
            <h5>{{ team.name }}</h5>
            <h5>{{ team.wins }}</h5>
            <h5>{{ team.losses }}</h5>
          </div>
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
};
</script>
