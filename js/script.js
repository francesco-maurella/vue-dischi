new Vue({
  // ELEMENTO //
  el: '#app',

  // DATI //
  data: {
    discsList: [],
    genres: [],
    selected: ''
  },

  methods : {
    // Funzione Visualizza Se
    showIf : function(item){
      return (item === this.selected) ?
      item === this.selected :
      item != this.selected
    }
  },

  // API REQUEST //
  mounted() {

    const self = this;

    axios.get('https://flynn.boolean.careers/exercises/api/array/music')
    .then(function(resp){
      // creazione lista dischi
      self.discsList = resp.data.response
      // creazione lista generi
      self.discsList.forEach((el, i) => {
        if (!self.genres.includes(el.genre)) {
          self.genres.push(el.genre)
        }
      });

    });
  }
});
