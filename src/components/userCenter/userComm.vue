<template>
  <div class="hello">
    <h1>公共菜单</h1>
    <h2 @click="linkRouter('/userCenter/userFirst')">{{ msg1 }}</h2>
    <h2 @click="linkRouter('/userCenter/userSecond')">{{ msg2 }}</h2>
    <h2 @click="linkRouter('/userCenter/userThird')">{{ msg3 }}</h2>
    <div>
      <p>内容：</p>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import VueMetaInfo from '@/assets/vue-meta-info.js'
export default {
  name: 'HelloWorld',
  metaInfo: VueMetaInfo.first,
  data () {
    return {
      msg1: 'Welcome to User first page',
      msg2: 'Welcome to User second page',
      msg3: 'Welcome to User third page'
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
