<template>
  <div class="container">
    <h1>Jobs</h1>
    <div v-for="job in jobs" :key="job.id" class="job">
      <router-link :to="{ name: 'jobsdetails', params: { id: job.id } }">
        <h2>{{ job.title }}</h2>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: [
        { title: "UX Designer", id: 1, detail: "lorm" },
        { title: "Web Developer", id: 2, detail: "lorm" },
        { title: "Vue Developer", id: 3, detail: "lorm" },
      ],
    };
  },
};
</script>

<style>
* {
  padding: 0;
  box-sizing: border-box;
  width: 1000px;
  margin: 0 auto;
}
h1{
  font-family: sans-serif;
  font-size: 50px;
  margin-bottom: 20px;
}
.job h2 {
  font-family: sans-serif;
  background: cornflowerblue;
  color: white;
  max-width: 300px;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 0 30px 10px rgba(0, 0, 0, 0.07);
}
a{
  text-decoration: none;
}
.job h2:hover{
  background-color: #f7f7f7;
  color: #444;
}
</style>
