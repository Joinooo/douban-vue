<template>
  <div class="home-list">
      <h1>{{movelist.title}}</h1>
      <ul>
          <li v-for="item in movelist">
              
              <router-link to="#">
                  <img v-bind:src="item.images.small" alt="">
                  <span></span>
              </router-link>
              
          </li>
      </ul>
  </div>
</template>
<script>
export default {
  data(){
      return {
          movelist: ''
      }
  },
  mounted(){
    this.$fetch('/api/v2/movie/in_theaters')
      .then((response) => {
        this.movelist = response.subjects;
        console.log(response.subjects[2].images.small)
      })
  },
}
</script>

<style scoped>
    .home-list {
        width: 100%;
        overflow: hidden;
    }
    .home-list ul {
        width: 100%;
    }
    .home-list ul li {
        float: left;
        width: 33.3%;
    }
    .home-list ul li a {
        display: inline-block;
        width: 100%;
    }
</style>

