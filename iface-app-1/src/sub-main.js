import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

let instance = null

export async function bootstrap () {
  console.log('sub-app1 bootstraped')
}

console.log(process.env.BASE_URL)
export async function mount (props) {
  instance = new Vue({
    el: '#app_' + process.env.VUE_APP_APP_NAME,
    router,
    store,
    render: h => h(App)
  })
}

export async function unmount () {
  instance.$destroy()
  instance = null
}
