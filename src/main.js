import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

new Vue({
  store,
  router,
  render: h => h(App),
  beforeMount(){
  Vue.prototype.$bus = this
  }
}).$mount('#app')
