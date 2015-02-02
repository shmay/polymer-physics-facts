(function() {
  Polymer('facts-page', {
    staricon: 'star-outline',
    attached: function() {
      return this.fetchFacts();
    },
    getFactId: function(sender) {
      var fact_id;
      return fact_id = parseInt(closestAncestor(sender, 'tr').id.split('_')[1]);
    },
    fetchFacts: function() {
      this.facts = void 0;
      return this.$.model.allFacts();
    },
    stashFacts: function(e, facts) {
      return this.facts = facts;
    },
    voteUp: function(e, d, s) {
      return this.vote(this.getFactId(s), 1);
    },
    voteDown: function(e, d, s) {
      return this.vote(this.getFactId(s), -1);
    },
    vote: function(id, dir) {
      if (this.signedin) {
        return this.$.model.voteFact(id, dir);
      } else {
        return this.fire('open-login');
      }
    },
    tapAdd: function(e, d, s) {
      return this.fire('open-drawer');
    },
    clickStar: function(e, d, s) {
      if (this.signedin) {
        return this.$.model.starFact(this.getFactId(s));
      } else {
        return this.fire('open-login');
      }
    }
  });

}).call(this);
