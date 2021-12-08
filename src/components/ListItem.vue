<template>
  <div>
      <ul class="news-list">
        <li v-for="item in listItems" class="post">
            <div class="points">
            {{ item.points || 0 }}
            </div>
            <div>
                <!-- 타이틀 영역 -->
                <p class="news-title">
                    <template v-if="item.domain">
                        <a v-bind:href="item.url">
                            {{ item.title }}
                        </a>        
                    </template>
                    <template v-else>
                        <router-link v-bind:to="`item/${item.id}`">
                            {{ item.title }}
                        </router-link>        
                    </template>
                </p>
                <small class="link-text">
                    {{ item.time_ago }} by 
                    <router-link 
                        v-if="item.user"
                        class="link-text" v-bind:to="`/user/${item.user}`">{{ item.user }}</router-link>
                    <a :href="item.url" v-else>
                        {{ item.domain }}
                    </a>
                </small>
            </div>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
    computed : {
        listItems() {
            return this.$store.state.list
            // const name = this.$route.name;
            // if(name === 'news'){
            //     return this.$store.state.news;
            // }else if(name === 'ask'){
            //     return this.$store.state.ask;
            // }else {
            //     return this.$store.state.jobs;
            // }
        }
    },
    // created() {
    //     const name = this.$route.name;
    //     if(name === 'news'){
    //         this.$store.dispatch('FETCH_NEWS')
    //     }else if(name === 'ask'){
    //         this.$store.dispatch('FETCH_ASK')
    //     }else if(name === 'jobs'){
    //         this.$store.dispatch('FETCH_JOBS')
    //     }
    // }
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