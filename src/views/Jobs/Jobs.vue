<template>
  <div class="container">
    <h1>Jobs</h1>
    <div v-if="jobs.length">
      <div v-for="job in jobs" :key="job.id" class="job">
        <router-link :to="{ name: 'jobsdetails', params: { id: job.id } }">
          <h2>{{ job.title }}</h2>
        </router-link>
      </div>
    </div>
    <div v-else>
      loading jobs .....
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: [],
    };
  },
  mounted(){
    fetch('http://localhost:3000/jobs')
    .then(res => res.json())
    .then(data => this.jobs = data)
  }
};
</script>

<style scoped>
* {
  padding: 0;
  box-sizing: border-box;
  width: 1000px;
  margin: 0 auto;
}
h1 {
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
a {
  text-decoration: none;
}
.job h2:hover {
  background-color: #f7f7f7;
  color: #444;
}
</style>
