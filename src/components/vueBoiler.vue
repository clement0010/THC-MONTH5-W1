<template>
  <div>
    <button @click="getUser">Get User</button>
    <div>
      <div class="card">
        <img src alt="Avatar" style="width:50%" />
        <div class="container">
          <h4>
            <b>Full Name{{ }} {{ }}</b>
          </h4>
          <p>Email {{ }}</p>
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
      profiles: []
    };
  },
  methods: {
    getUser: async function() {
      const res = await axios.get("https://randomuser.me/api/", {
        params: {
          results: 10,
          gender: "male"
        }
      });
      console.log(res.data.results);
    }
  }
};
</script>