//Not sure if I need this page.
<template>
  <div class="user-show">
    <div class="container">
      <h1>{{ user.username }}</h1>
      <div v-for="user in group.users" :key="user.id">
        <h2>{{ user.username }}</h2>
      </div>

      <!-- <router-link v-bind:to="`/groups/${group.id}/edit`"><button>Edit group</button></router-link> -->

      <router-link to="/users">Back to all groups.</router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      user: {},
      currentUser: localStorage.getItem("user_id"),
    };
  },
  created: function () {
    axios
      .get("/users/" + this.currentUser)
      .then((response) => {
        this.user = response.data;
      })
      .catch((error) => {
        this.status = error.response.status;
      });
  },
};
</script>
