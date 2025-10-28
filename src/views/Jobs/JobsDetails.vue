<template>
  <div class="details-container" v-if="job">
    <div class="card">
      <h1 class="title">{{ job.title }}</h1>
      <p class="meta">
        The job id is <span>{{ id }}</span>
      </p>
      <p class="description">{{ job.detail }}</p>
    </div>
  </div>
  <div v-else class="loading">
    <p>Loading job details...</p>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      job: null,
    };
  },
  mounted() {
    fetch("http://localhost:3000/jobs/" + this.id)
      .then((res) => res.json())
      .then((data) => (this.job = data))
      .catch((err) => console.error("Error fetching job:", err));
  },
};
</script>

<style scoped>
.details-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  background: #f9fafc;
  padding: 40px;
}

.card {
  background: white;
  padding: 50px 60px;
  border-radius: 16px;
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.08);
  max-width: 600px;
  text-align: center; /* ensures all text is centered */
  transition: all 0.3s ease;
  margin-bottom: 200px;
}

.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 45px rgba(0, 0, 0, 0.12);
}

.title {
  font-size: 36px;
  color: #2c3e50;
  font-weight: 700;
  margin-bottom: 10px;
}

.meta {
  color: #888;
  font-size: 15px;
  margin-bottom: 20px;
}

.meta span {
  color: #2c3e50;
  font-weight: 600;
}

.description {
  font-size: 18px;
  line-height: 1.6;
  color: #444;
}

.loading {
  text-align: center;
  color: #2c3e50;
  font-size: 20px;
  margin-top: 80px;
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .card {
    width: 90%;
    padding: 30px 20px;
  }

  .title {
    font-size: 28px;
  }

  .description {
    font-size: 16px;
  }
}
</style>
