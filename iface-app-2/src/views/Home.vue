<template>
  <div class="home">
    这是子应用2
    <router-link to="/test">跳转</router-link>
  </div>
</template>

<script>
import {Component, Vue} from 'vue-property-decorator'

export default @Component class App extends Vue {}
</script>
