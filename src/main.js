import Vue from "vue";
import "./plugins/vuetify"
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import i18n from '@/plugins/i18n.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faLinkedin,faGithubSquare, faUserSecret);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
