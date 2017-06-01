// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import button1 from './components/button1'
import button2 from './components/button2'

Vue.config.productionTip = false
Vue.use(router);

const routes = [{
  path: '/button1',
  component: button1
}, {
  path: '/button2',
  component: button2
}];

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
