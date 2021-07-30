<template>
  <div class="groups-show">
    <div class="container">
      <h2>{{ group.name }}</h2>
      <p>{{ group.losses }}</p>
      <!-- <img v-bind:src="group.image" alt="group.title" /> -->
      <!-- <li v-if="$parent.getUserID() == group.user_id"> -->
      <router-link v-bind:to="`/groups/${group.id}/edit`"><button>Edit group</button></router-link>
      <!-- </li> -->
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
