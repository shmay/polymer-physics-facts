(function() {
  Polymer("physics-facts", {
    ready: function() {
      this.signedin = Cookies.get('is_signed_in') === 'true';
      if (this.signedin) {
        this.$.userajax.go();
      }
      if (window.location.hash === "") {
        return window.location.hash = "/";
      }
    },
    handleResponse: function(e, d, s) {
      return this.signedin = !!JSON.parse(d.response).user.email;
    },
    handleSignout: function(e, d, s) {
      Cookies.expire('is_signed_in');
      return this.signedin = false;
    },
    handleRoute: function(e, d, s) {
      var id, route;
      route = d[0], id = d[1];
      switch (route) {
        case 'go-home':
          console.log('go home');
          return this.$.pages.selected = 0;
        case 'tags':
          return this.$.pages.selected = 1;
        case 'showfact':
          this.$.factpage.factid = id;
          return this.$.pages.selected = 2;
      }
    },
    tapAuth: function(e, d, s) {
      e.preventDefault();
      e.stopPropagation();
      return this.$.authlog.open();
    },
    tabSelect: function(e, d, s) {
      var h;
      if (d.isSelected) {
        switch (d.item.id) {
          case 'signout':
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
    },
    setSignedin: function(e, d, s) {
      return this.signedin = d;
    }
  });

}).call(this);
