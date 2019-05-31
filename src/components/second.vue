<template>
  <div class="hello">
    <h1>second</h1>
    <h2 @click="linkRouter('/first')">{{ msg1 }}</h2>
    <h2 @click="linkRouter('/second')">{{ msg2 }}</h2>
    <h2 @click="linkRouter('/third')">{{ msg3 }}</h2>
    <h2 @click="linkRouter('/fourth')">{{ msg4 }}</h2>
  </div>
</template>

<script>
import VueMetaInfo from '../assets/vue-meta-info.js'
export default {
  name: 'HelloWorld',
  metaInfo: VueMetaInfo.first,
  data () {
    return {
      msg1: 'Welcome to first',
      msg2: 'Welcome to second',
      msg3: 'Welcome to third'
    }
  },
  methods: {
    linkRouter (path) {
      this.$router.push({path: path})
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
