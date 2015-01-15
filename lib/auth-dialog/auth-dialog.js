(function() {
  Polymer('auth-dialog', {
    submit: function() {
      var json;
      this.$.ajax.headers = {
        "X-Requested-With": "XMLHttpRequest"
      };
      json = {
        user: {
          username: 'shmay',
          email: 'kmurph73@gmail.com',
          password: 'pass1212'
        }
      };
      this.$.ajax.body = JSON.stringify(json);
      return this.$.ajax.go();
    },
    handleResponse: function(e, d, s) {}
  });

}).call(this);
