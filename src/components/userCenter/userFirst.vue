<template>
  <div class="hello">
    <h1>first</h1>
  </div>
</template>

<script>
import VueMetaInfo from '@/assets/vue-meta-info.js'
export default {
  name: 'HelloWorld',
  metaInfo: VueMetaInfo.first,
  data () {
    return {
      msg1: 'Welcome to first',
      msg2: 'Welcome to second',
      msg3: 'Welcome to third',
      msg4: 'URL参数传递',
      msg5: '嵌套路由'
    }
  },
  methods: {
    linkRouter (path) {
      this.$router.push({path: path})
    },
    linkFourth (path, id) {
      this.$router.push({path: path, query: {id}})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
    font-weight: normal;
  }
  h2 {
    font-weight: normal; font-size: 14px; color: #2c3e50;
  }
</style>
