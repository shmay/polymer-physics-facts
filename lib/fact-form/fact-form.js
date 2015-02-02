(function() {
  Polymer('fact-form', {
    fact: {},
    submitTitle: 'create fact',
    submitIcon: 'add',
    factChanged: function() {},
    clickSub: function() {
      return this.submitty();
    },
    handleResponse: function(e, d, s) {
      this.fire('reload-facts');
      return window.location.hash = "#/facts/" + d.response.fact.id;
    },
    cancel: function(e, d, s) {
      return this.fire('close-drawer');
    },
    tapSubmit: function(e, d, s) {
      var json;
      this.$.ajax.headers = {
        "X-Requested-With": "XMLHttpRequest",
        "X-User-Email": Cookies.get('email'),
        "X-User-Token": Cookies.get('auth_token')
      };
      json = {
        fact: this.fact,
        tag_list: this.tags
      };
      this.$.ajax.body = JSON.stringify(json);
      return this.$.ajax.go();
    },
    setFact: function(fact) {}
  });

}).call(this);
