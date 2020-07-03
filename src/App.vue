<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <user-profile></user-profile>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import UserProfile from './components/UserProfile';

export default {
  name: 'App',
  components: {
    'user-profile': UserProfile,
    // HelloWorld
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
