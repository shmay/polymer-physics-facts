(function() {
  Polymer('auth-form', {
    selectedChanged: function() {
      this.signin = this.selected === 1;
      return this.title = this.selected === 1 ? "Sign In" : "Sign Up";
    },
    submit: function() {
      var json;
      this.$.ajax.headers = {
        "X-Requested-With": "XMLHttpRequest"
      };
      json = {
        email: this.email,
        password: this.pw
      };
      if (!this.signin) {
        json.password_confirmation = this.pwconf;
        json.username = this.username;
      }
      json = {
        user: json
      };
      this.$.ajax.body = JSON.stringify(json);
      return this.$.ajax.go();
    },
    handleResponse: function(e, d, s) {
      var json;
      json = JSON.parse(d.response);
      Cookies.set('email', json.email);
      Cookies.set('auth_token', json.authentication_token);
      this.fire('set-email', json.email);
      return this.fire('close');
    },
    handleError: function(e, d, s) {
      return this.hasError = true;
    }
  });

}).call(this);
