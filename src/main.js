import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import store from './store'

Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App),
  router,
  store,

  data() {
    return {
    }
  }
}).$mount('#app')
