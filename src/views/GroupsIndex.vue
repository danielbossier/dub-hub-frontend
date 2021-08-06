<template>
  <div class="groups-index">
    <div v-for="group in groups" :key="group.id">
      <router-link v-bind:to="`/groups/${group.id}`">
        <h2>{{ group.name }}</h2>
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
      groups: [],
      currentGroup: {},
    };
  },
  created: function () {
    this.indexGroups();
  },
  methods: {
    indexGroups: function () {
      axios.get("/groups").then((response) => {
        this.groups = response.data;
        console.log("All groups:", this.groups);
      });
    },
  },
};
</script>
