import Vue from "vue"
import App from "./App.vue"
let vm = new Vue({
  el: "#root",
  data() {
    return {
      a: 15,
      b: 5
    }
  },
  template: '<App/>',
  components: {
    App
  }
});
