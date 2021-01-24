import Vue from "vue";
//import "./plugins/axios";
window.axios = require("axios");
import "./plugins/chess";
import "./plugins/fontawesome";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
