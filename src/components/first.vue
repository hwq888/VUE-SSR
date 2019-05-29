<template>
  <div class="hello">
    <h1>first</h1>
    <h1><router-link to="first">{{ msg1 }}</router-link></h1>
    <h1><router-link to="second">{{ msg2 }}</router-link></h1>
    <h1><router-link to="third">{{ msg3 }}</router-link></h1>
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
