<template>
  <div class="hello">
    <h1>third</h1>
    <h1><router-link :to="{ path:'first'}">{{ msg1 }}</router-link></h1>
    <h1><router-link :to="{ path:'second'}">{{ msg2 }}</router-link></h1>
    <h1><router-link :to="{ path:'third'}">{{ msg3 }}</router-link></h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
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
