<template>
<div>
  fuck you
  <button @click="clickevent">点我</button>
  <router-view>
  </router-view>
  <!-- 
    router-view是直接把当前这块区域替换成当前组建的最高子路由 
    而router-link是做一个路由的跳转，替换其他路由，把当前router-view替换成其他的组件
  -->
</div>
</template>
<script>
export default {
  name:'appvue',
  data(){
    return {
      isHahaha:false
    }
  },
  methods:{
    clickevent(){
      this.isHahaha=!this.isHahaha
      this.isHahaha?this.$router.push({ name:'hahaha',params:{id:123}}):this.$router.go(-1)
    }
  }
}
</script>
<style>
</style>
