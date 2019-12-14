<template>
  <div id="root">
    <template v-if="!isChildApp">
      <router-view class="app-view"/>
    </template>
    <template v-else>
      <main-layout class="app-view"></main-layout>
    </template>
  </div>
</template>

<script>
import MainLayout from './modules/common/view/MainLayout'
import {Component, Vue, Prop, Watch} from 'vue-property-decorator'

export default @Component({components: {MainLayout}}) class App extends Vue {
  /* vue-props */
  @Prop(Boolean) loading
  @Prop(String) content
  /* vue-vuex */
  /* vue-data */
  name = 'framework'
  /* vue-compute */
  get isChildApp () {
    return this.$route.path.startsWith(process.env.VUE_APP_PRE_FIX)
  }
  /* vue-watch */
  @Watch('content')
  contentWatch (value) {
    this.$store.commit('updateSubAppHtml', value)
  }
  @Watch('loading')
  loadingWatch (value) {
    console.log(value)
  }
  /* vue-lifecycle */
  /* vue-method */
  resize () {
    this.$refs.chart.resize()
  }
}
</script>

<style lang="scss">
  html, body {
    width: 100%;
    height: 100%;
    overflow: hidden;
    margin: 0;
    padding: 0;
  }

  #root {
    width: 100%;
    height: 100%;
  }
</style>
