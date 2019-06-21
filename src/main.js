import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
Vue.filter(
  'formatDate',
   function(val){
     var date = new Date(val);
     return [
        date.getDate(), 
        date.getMonth() + 1,
        date.getFullYear()
      ].join('.')
   }
)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
import $ from "jquery";
import ionRangeSlider from 'ion-rangeslider'
import store from './store'
jQuery(document).ready(function(){
  
   $(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 1000,
    max: 10000,
    step: 10,
    hide_from_to: true,
    hide_min_max: true,

    onChange: function (data) {
      console.dir(data.from);
      $('.price-from').text(data.from + ' руб.');
      $('.price-to').text(data.to + ' руб.');
    }
  });
})