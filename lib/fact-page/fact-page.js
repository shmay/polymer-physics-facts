(function() {
  Polymer('fact-page', {
    factidChanged: function(e, d, s) {
      console.log('factidChanged');
      this.$.ajax.url = "/api/facts/" + this.factid;
      return this.$.ajax.go();
    },
    handleResponse: function(e, d, s) {
      return this.fact = d.response;
    }
  });

}).call(this);
