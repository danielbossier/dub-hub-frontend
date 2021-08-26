<template>
  <div class="groups-edit">
    <div class="card-deck">
      <div class="card col text-center mx-auto" style="width: 15rem">
        <form v-on:submit.prevent="updateGroup()">
          <h1>Join Group</h1>
          <ul>
            <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
          </ul>
          <div>
            <h2>{{ currentGroupParams.name }}</h2>
          </div>
          <input class="basicButton" type="submit" value="Join Group" />
        </form>
        <router-link to="/groups"><button class="basicButton">All groups</button></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      currentGroupParams: {},
      errors: [],
      user: [],
      current_user: localStorage.getItem("user_id"),
    };
  },
  created: function () {
    this.getUser();
    axios
      .get(`/groups/${this.$route.params.id}`)
      .then((response) => {
        console.log("Group info:", response.data);
        this.currentGroupParams = response.data;
      })
      .catch((error) => {
        this.status = error.response.status;
      });
  },
  methods: {
    updateGroup: function () {
      var params = {
        group_id: this.currentGroupParams.id,
        user_id: this.currentUser,
      };
      axios
        .post("/group_users", params)
        .then((response) => {
          console.log(response.data);
          this.$router.push(`/groups/${this.currentGroupParams.id}`);
        })
        .catch((error) => {
          this.status = error.response.status;
        });
    },
    getUser: function () {
      axios
        .get("/users/" + this.current_user)
        .then((response) => {
          console.log("current_user ID: ", this.current_user);
          this.user = response.data;
          console.log(this.user);
        })
        .catch((error) => {
          this.status = error.response.status;
        });
    },
    // destroyGroup: function () {
    //   axios.delete(`/groups/${this.$route.params.id}`).then((response) => {
    //     console.log("Group got got!", response.data);
    //     this.$router.push("/groups");
    //   });
    // },
  },
};
</script>
