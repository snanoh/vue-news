<template>
  <div>
    <ul class="news-list">
      <li v-for="item in fetchedAsk" class="post">
        <!-- 포인트 영역 -->
        <div class="points">
          {{ item.points }}
        </div>
        <!-- 기타 정보 영역 -->
        <div>
          <p class="news-title">
            <router-link v-bind:to="`/item/${item.id}`">
              {{ item.title }}
            </router-link>
          </p>
          <small class="link-text">
            {{ item.time_ago }} by 
            <router-link class="link-text" v-bind:to="`/user/${item.user}`">{{ item.user }}</router-link>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
      ...mapGetters([
        'fetchedAsk'
      ])
  },
  created() {
    this.$store.dispatch('FETCH_ASK')
    
  }
}
</script>

<style scoped>
.news-list{
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