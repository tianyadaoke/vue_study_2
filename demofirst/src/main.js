import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Count from './components/Count'

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.component('Count',Count)

new Vue({
  render: h => h(App),
}).$mount('#app')
