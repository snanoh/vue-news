<template>
  <div>
    <ul class="news-list">
      <li v-for="job in this.$store.state.jobs" class="post">
        <div class="points">
          {{ job.points || 0 }}
        </div>
        <div>
          <p class="news-title">
            <a :href="job.url">
              {{ job.title }}
            </a>
          </p>
          <small class="link-text">
            by 
            <a :href="job.url">
              {{ job.domain }}
            </a>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>


export default {
  created() {
    this.$store.dispatch('FETCH_JOBS')
  }
}
</script>

<style scoped>
.news-list {
  padding-left: 0px;
  margin-top: 0px;
  margin-bottom: 0px;
}
.post{
  border-bottom: 1px solid #eee;
  align-items: center;
  list-style: none;
  display: flex;
}
.points {
      display: flex;
    align-items: center;
    width: 80px;
    height: 60px;
    justify-content: center;
    color: #42b883;
}
.news-title {
  margin: 0;
}
.link-text{
  color: #828282
}
</style>