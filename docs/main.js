// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ZUI from '../src'
import DemoBox from './components/DemoBox';

Vue.config.productionTip = false


Vue.use(ZUI);
Vue.component('demo-box', DemoBox);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
