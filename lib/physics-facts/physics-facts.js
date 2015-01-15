(function() {
  Polymer("physics-facts", {
    ready: function() {
      return this.userid = Cookies.get('user_id');
    },
    handleResponse: function(e, d, s) {
      return console.log('handleResponse');
    },
    handleRoute: function(e, d, s) {
      var id, route;
      route = d[0], id = d[1];
      switch (route) {
        case 'go-home':
          return this.$.pages.selected = 0;
        case 'tags':
          return this.$.pages.selected = 1;
        case 'showfact':
          this.$.factpage.factid = id;
          return this.$.pages.selected = 2;
      }
    },
    tapAuth: function(e, d, s) {
      return this.$.authlog.open();
    },
    tabSelect: function(e, d, s) {
      var h;
      if (d.isSelected) {
        switch (d.item.id) {
          case 'signout':
            this.$.signoutjax.headers = {
              "X-Requested-With": "XMLHttpRequest"
            };
            ({
              "X-User-Email": Cookies.get('user_email'),
              "X-User-Token": Cookies.get('auth_token')
            });
            this.$.signoutjax.go();
            break;
          case 'tags':
            h = "#/tags";
            break;
          case 'facts':
            h = "/";
        }
        if (h) {
          return window.location.hash = h;
        }
      }
    },
    closeDrawer: function(e, d, s) {
      return this.$.drawer.close();
    },
    openDrawer: function(e, d, s) {
      return this.$.drawer.open();
    },
    reloadFacts: function() {
      return this.$.factspage.getFacts();
    }
  });

}).call(this);
