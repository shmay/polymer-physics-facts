(function() {
  Polymer("physics-facts", {
    ready: function() {
      this.userid = Cookies.get('user_id');
      this.$.ajax.headers = {
        "X-Requested-With": "XMLHttpRequest"
      };
      return this.$.ajax.go();
    },
    handleResponse: function(e, d, s) {
      return console.log('handleResponse');
    },
    handleRoute: function(e, d, s) {
      switch (d) {
        case 'add-fact':
          return this.$.pages.selected = 2;
      }
    },
    tabSelect: function(e, d, s) {
      return console.log('tabSelect');
    }
  });

}).call(this);
