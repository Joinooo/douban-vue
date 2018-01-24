<template>
    <mt-search
    v-model="value"
    cancel-text="取消"
    placeholder="搜索">
    </mt-search>
</template>
<script>
export default {
  data(){
      return {
          value: ''
      }
  }
}
</script>
<style scoped>
    .mint-search {
        height: 55px;
    }
</style>


