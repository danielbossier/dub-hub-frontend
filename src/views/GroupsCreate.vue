<template>
  <div class="groups-create">
    <div class="card-deck">
      <div class="card" style="width: 18rem">
        <form v-on:submit.prevent="createGroup()">
          <h1>Create Group</h1>
          <ul>
            <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
          </ul>
          <div>
            <label>Name:</label>
            <input type="text" v-model="newGroupParams.name" />
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  </div>
</template>

<style>
groups-create {
  float: center;
}
</style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      groups: [],
      newGroupParams: {},
      errors: [],
      status: "",
    };
  },
  created: function () {},
  methods: {
    createGroup: function () {
      axios
        .post("/groups", this.newGroupParams)
        .then((response) => {
          this.$router.push("/groups");
          console.log(response.data);
        })
        .catch((error) => {
          this.status = error.response.status;
        });
    },
  },
};
</script>
