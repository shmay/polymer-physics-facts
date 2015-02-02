(function() {
  Polymer('fact-model', {
    allFacts: function() {
      return this.$.ajax.go();
    },
    findFact: function(id) {
      this.$.find.url = "/api/facts/" + id;
      return this.$.find.go();
    },
    findResponse: function(e, d, s) {
      return this.fire('fact-found', d.response.fact);
    },
    getFact: function(fact_id) {
      return _.find(this.facts, function(f) {
        return f.id === fact_id;
      });
    },
    starFact: function(fact_id) {
      var aj, fact;
      fact = this.getFact(fact_id);
      fact.starred = !fact.starred;
      aj = this.$.starajax;
      aj.url = "/api/facts/" + fact_id + "/star";
      return aj.go();
    },
    starError: function(e, d, s) {
      var fact;
      fact = this.getFact(d.response.star.id);
      fact.starred = !fact.starred;
      return alert('an error occurred while trying to star that crap');
    },
    deleteVote: function(id) {
      var fact, xhr;
      fact = this.getFact(id);
      fact.old_user_vote = fact.user_vote;
      fact.votes_count -= fact.user_vote;
      fact.user_vote = 0;
      xhr = this.$.delajax;
      xhr.method = 'DELETE';
      xhr.url = "/api/votes/" + fact.id;
      return xhr.go();
    },
    sendVote: function(id, dir) {
      var fact, json;
      fact = this.getFact(id);
      fact.old_votes_count = fact.votes_count;
      fact.old_user_vote = fact.user_vote;
      fact.votes_count += dir - fact.user_vote;
      fact.user_vote = dir;
      json = {
        fact_id: fact.id,
        dir: dir
      };
      this.$.voteajax.body = JSON.stringify(json);
      return this.$.voteajax.go();
    },
    voteFact: function(id, dir) {
      var fact;
      fact = this.getFact(id);
      if (fact.user_vote === dir) {
        return this.deleteVote(fact.id);
      } else {
        return this.sendVote(fact.id, dir);
      }
    },
    handleResponse: function(e, d, s) {
      var fact, facts, _i, _len;
      facts = d.response.facts;
      for (_i = 0, _len = facts.length; _i < _len; _i++) {
        fact = facts[_i];
        fact.from_now = moment(fact.created_at).fromNow();
        fact.tag_list = fact.tag_names.join(', ');
      }
      return this.fire('all-facts', facts);
    },
    voteError: function(e, d, s) {
      var fact, id;
      id = d.fact.id;
      fact = _.find(this.acts, function(f) {
        return f.id === id;
      });
      fact.votes_count = fact.old_votes_count;
      fact.user_vote = fact.old_user_vote;
      return alert('an error occurred while creating your vote');
    }
  });

}).call(this);
