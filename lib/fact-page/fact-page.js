(function() {
  Polymer('fact-page', {
    fact: {},
    factidChanged: function(e, d, s) {
      this.$.ajax.url = "/api/facts/" + this.factid;
      return this.$.ajax.go();
    },
    handleResponse: function(e, d, s) {
      return this.fact = d.response.fact;
    },
    editFact: function(e, d, s) {}
  });

}).call(this);
