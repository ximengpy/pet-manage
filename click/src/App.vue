<template>
  <div id="app">
    <router-view v-if="showRouter"></router-view>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      showRouter: true
    }
  },
  provide() {
    return {
      reload: this.reload
    }
  },
  methods: {
    reload() {
      this.showRouter = false
      this.$nextTick(function() {
        this.showRouter = true
      })
    }
  },

}
</script>
<style lang="less">

</style>
