import Vue from 'vue'
import store from './vuex/store'
import App from './components/App.vue'

new Vuew({
  store,  // inject store to all children
  el: 'body',
  compoenents: { App }
})
