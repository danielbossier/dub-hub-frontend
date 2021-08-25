<template>
  <div class="groups-index">
    <div class="card-deck">
      <div class="card col text-center" style="width: 22rem">
        <h2 class="title text-center">Join A Group or Create Your Own</h2>
        <hr />
        <div v-for="group in groups" :key="group.id">
          <router-link v-bind:to="`/groups/${group.id}`">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <h2>{{ group.name }}</h2>
                <!-- <hr /> -->
              </li>
            </ul>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.groups-index {
  opacity: 1;
  font-size: 1.75rem;
  padding: 20px;
}
.title {
  color: red;
}
</style>

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
      axios
        .get("/groups")
        .then((response) => {
          this.groups = response.data;
          console.log("All groups:", this.groups);
        })
        .catch((error) => {
          this.status = error.response.status;
        });
    },
  },
};
</script>
