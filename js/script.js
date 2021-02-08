new Vue({
  // ELEMENTO //
  el: '#app',

  // DATI //
  data: {
    discsList: []
  },

  // API REQUEST //
  mounted() {

    const self = this;

    axios.get('https://flynn.boolean.careers/exercises/api/array/music')
    .then(function(resp){
      self.discsList = resp.data.response
    });
  }
});
