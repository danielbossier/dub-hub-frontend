<template>
  <div class="groups-show">
    <div class="container">
      <h1>{{ group.name }}</h1>
      <!-- Will want to display each user in the group -->
      <div v-for="user in group.users" :key="user.id">
        <h2>{{ user.username }}</h2>
      </div>
      <router-link v-bind:to="`/groups/${group.id}`">
        <h2>{{ group.username }}</h2>
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
    });
  },
};
</script>
