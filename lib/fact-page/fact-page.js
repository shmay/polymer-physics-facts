(function() {
  Polymer('fact-page', {
    fact: {},
    stashFact: function(e, fact) {
      return this.fact = fact;
    },
    factidChanged: function(e, d, s) {
      this.fact = {};
      return this.$.model.findFact(this.factid);
    },
    editFact: function(e, d, s) {
      return this.fire('edit-fact', this.fact);
    }
  });

}).call(this);
