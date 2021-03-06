import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import "./registerServiceWorker"
import "./plugins/element.js"

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h): any => h(App),
}).$mount("#root")
