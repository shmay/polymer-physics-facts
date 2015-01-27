(function() {
  Polymer('facts-page', {
    attached: function() {
      return this.getFacts();
    },
    getFacts: function() {
      this.facts = void 0;
      this.$.ajax.headers = {
        "X-Requested-With": "XMLHttpRequest"
      };
      return this.$.ajax.go();
    },
    tapAdd: function(e, d, s) {
      return this.fire('open-drawer');
    },
    getFact: function(sender) {
      var fact, fact_id;
      fact_id = parseInt(closestAncestor(sender, 'tr').id.split('_')[1]);
      return fact = _.find(this.facts, function(f) {
        return f.id === fact_id;
      });
    },
    voteUp: function(e, d, s) {
      var fact;
      if (this.signedin) {
        fact = this.getFact(s);
        if (fact.user_vote === 1) {
          return this.deleteVote(fact);
        } else {
          return this.sendVote(s, 1);
        }
      } else {
        return this.fire('open-login');
      }
    },
    voteDown: function(e, d, s) {
      if (this.signedin) {
        return this.sendVote(s, -1);
      } else {
        return this.fire('open-login');
      }
    },
    deleteVote: function(fact) {
      var json, xhr;
      fact.old_user_vote = fact.user_vote;
      fact.votes_count -= fact.user_vote;
      fact.user_vote = 0;
      json = {
        fact_id: fact.id
      };
      xhr = this.$.voteajax;
      xhr.method = 'DELETE';
      xhr.json = JSON.stringify(json);
      xhr.url = "/api/votes";
      return xhr.go();
    },
    sendVote: function(s, dir) {
      var json;
      fact.old_votes_count = fact.votes_count;
      fact.old_user_vote = fact.user_vote;
      fact.votes_count += dir;
      fact.vote_dir = dir;
      json = {
        fact_id: fact_id,
        dir: dir
      };
      this.$.voteajax.body = JSON.stringify(json);
      return this.$.voteajax.go();
    },
    handleResponse: function(e, d, s) {
      var fact, facts, _i, _len;
      facts = d.response.facts;
      for (_i = 0, _len = facts.length; _i < _len; _i++) {
        fact = facts[_i];
        fact.from_now = moment(fact.created_at).fromNow();
        fact.tag_list = fact.tag_names.join(', ');
      }
      return this.facts = facts;
    },
    voteResponse: function(e, d, s) {
      var fact_id, vote;
      vote = d.response;
      return fact_id = vote.fact_id;
    },
    voteError: function(e, d, s) {
      var fact, id;
      id = d.fact.id;
      fact = _.find(this.acts, function(f) {
        return f.id === id;
      });
      return alert('an error occurred while creating your vote');
    }
  });

}).call(this);
