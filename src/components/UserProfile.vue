<template>
  <div>
    <!-- <input :v-model="profileId" /> -->
    <button @click="getUser">Get User</button>
    <div v-for="(profile,index) in profiles" :key="index">
      <div class="card">
        <img :src="profile.picture.thumbnail" alt="Avatar" style="width:50%" />
        <div class="container">
          <h4>
            <b>{{ profile.name.first }} {{ profile.name.last }}</b>
          </h4>
          <p>{{ profile.email }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 40%;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.container {
  padding: 2px 16px;
}
</style>

<script>
import axios from "axios";
export default {
  data() {
    return {
      gender: "male",
      profiles: null
    };
  },
  methods: {
    getUser: async function() {
      const res = await axios.get("https://randomuser.me/api/", {
        params: {
          results: "10",
          gender: `${this.gender}`
        }
      });
      this.profiles = res.data.results;
      console.log(res.data);
    }
  }
};
</script>
