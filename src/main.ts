import '@jsonforms/vue2-vanilla/vanilla.css';
import '@/assets/css/global.scss'

import Vuex from 'vuex'
import VuexORM from '@vuex-orm/core'
import createPersistedState from 'vuex-persistedstate'
import VueCookies from 'vue-cookies'
import Buefy from 'buefy'
import VueRouter from 'vue-router'
import Vue from 'vue'
import App from './App.vue'
import vueFilterPrettyBytes from 'vue-filter-pretty-bytes'
import vuetify from '@/plugins/vuetify'
import browserDetect from "vue-browser-detect-plugin"
import IdleVue from 'idle-vue'

import { router } from './router'
import { orm } from '@/models/orm'
import { persistedPaths } from './models/persistedPaths'
import { APP_NAME } from './constants'

// Uncomment to filter out errors
// Vue.config.errorHandler = (err, vm, info) => {
  //   if (process.env.NODE_ENV !== 'production') {
    //     // Show any error but this one
    //     if (err.message !== "Some error you want to leave out") {
      //       console.error(err)
      //     }
      //   }
      // }
      
Vue.config.productionTip = false
Vue.use(Vuex)

// Create Vuex Store and register database through Vuex ORM.
const store = new Vuex.Store({
  plugins: [
    VuexORM.install(orm),
    createPersistedState({
      paths: persistedPaths,
      key: APP_NAME
    })
  ]
})

const eventsHub = new Vue()
      
Vue.use(vueFilterPrettyBytes)
Vue.use(VueRouter)
Vue.use(VueCookies)
Vue.use(browserDetect);
Vue.use(IdleVue, { eventEmitter: eventsHub, idleTime: 60000, store })
Vue.use(Buefy, {
  defaultIconPack: 'fas',
  defaultContainerElement: '#content',
  defaultNotificationPosition: 'is-top',
  defaultNotificationDuration: 10000,
  defaultNoticeQueue: false,
})

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app')