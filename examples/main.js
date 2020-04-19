import Vue from 'vue'
import App from './App.vue'
import dialogMove from '../packages/index'

Vue.use(dialogMove)

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app')
