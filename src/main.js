import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import firebase from 'firebase'
Vue.config.productionTip = false

let app = null;
// Wait for firebase to init before rendering the application
firebase.auth().onAuthStateChanged(()=>{
  //Init app if not already created
  if(!app){
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})

