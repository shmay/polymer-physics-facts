(function() {
  Polymer('smart-drawer', {
    setFact: function(fact) {
      return this.querySelector('#factform').fact = _.clone(fact);
    }
  });

}).call(this);
