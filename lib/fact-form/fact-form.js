(function() {
  Polymer('fact-form', {
    clickSub: function() {
      return this.submitty();
    },
    handleResponse: function(e, d, s) {
      debugger;
    },
    cancel: function(e, d, s) {
      return this.fire('close-drawer');
    },
    tapSubmit: function(e, d, s) {
      var json;
      this.$.ajax.headers = {
        "X-Requested-With": "XMLHttpRequest",
        "X-User-Email": Cookies.get('user_email'),
        "X-User-Token": Cookies.get('auth_token')
      };
      json = {
        fact: {
          body: this.text,
          title: this.title,
          tag_list: this.tags
        }
      };
      this.$.ajax.body = JSON.stringify(json);
      return this.$.ajax.go();
    }
  });

}).call(this);
