(function() {
  Polymer('auth-form', {
    selectedChanged: function() {
      this.signin = this.selected === 1;
      return this.title = this.selected === 1 ? "Sign In" : "Sign Up";
    },
    submit: function() {
      var json;
      this.disable();
      json = {
        email: this.email,
        password: this.pw
      };
      if (!this.signin) {
        json.password_confirmation = this.pwconf;
        json.username = this.username;
        this.$.ajax.url = "/api/sign_up";
      } else {
        this.$.ajax.url = "/api/sign_in";
      }
      json = {
        user: json
      };
      this.$.ajax.body = JSON.stringify(json);
      return this.$.ajax.go();
    },
    handleResponse: function(e, d, s) {
      var json;
      this.enable();
      json = JSON.parse(d.response);
      Cookies.set("is_signed_in", true);
      this.fire('set-signedin', true);
      return this.fire('close');
    },
    handleError: function(e, d, s) {
      console.log('handleError');
      this.$.alert.hidden = false;
      return this.enable();
    },
    disable: function() {
      this.$.alert.hidden = true;
      return this.$.btn.disabled = true;
    },
    enable: function() {
      return this.$.btn.disabled = false;
    }
  });

}).call(this);
