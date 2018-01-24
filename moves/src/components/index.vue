<template>
  <div class="home">
      <headers></headers>
      <router-view></router-view>
      <footers></footers>
  </div>
</template>

<script>
import headers from './header'
import footers from './footer'
export default {
  name: 'index',
  data () {
    return {
      movelist:''
    }
  },
  components:{headers,footers}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
