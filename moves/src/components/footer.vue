<template>
    <mt-tabbar v-model="selected">
        <mt-tab-item id="首页">
            <router-link to="/home">首页</router-link>
        </mt-tab-item>
        <mt-tab-item id="搜索">
            搜索
        </mt-tab-item>
        <mt-tab-item id="我的">
            我的
        </mt-tab-item>
    </mt-tabbar>
</template>
<script>
export default {
  data(){
      return {
          selected: ""
      }
  }
}
</script>

