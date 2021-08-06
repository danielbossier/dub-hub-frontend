<template>
  <div class="groups-edit">
    <form v-on:submit.prevent="updateGroup()">
      <h1>Edit Group</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>Username:</label>
        <input type="text" v-model="currentGroupParams.username" />
      </div>
      <input type="submit" value="Submit" />
      <button v-on:click="destroyGroup()">Delete</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      currentGroupParams: {},
      errors: [],
    };
  },
  created: function () {
    axios.get(`/groups/${this.$route.params.id}`).then((response) => {
      console.log("Group info:", response.data);
      this.currentGroupParams = response.data;
    });
  },
  methods: {
    updateGroup: function () {
      axios.patch(`/groups/${this.$route.params.id}`, this.currentGroupParams).then((response) => {
        console.log(response.data);
        this.$router.push(`/groups/${response.data.id}`);
      });
    },
    destroyGroup: function () {
      axios.delete(`/groups/${this.$route.params.id}`).then((response) => {
        console.log("Group got got!", response.data);
        this.$router.push("/groups");
      });
    },
  },
};
</script>
