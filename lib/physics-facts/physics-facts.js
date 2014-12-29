(function() {
  Polymer("physics-facts", {
    ready: function() {
      return this.userid = Cookies.get('user_id');
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
      console.log('tabSelect');
      switch (d.item.id) {
        case 'addfact':
          return this.$.drawer.open();
      }
    },
    closeDrawer: function(e, d, s) {
      return this.$.drawer.close();
    },
    openDrawer: function(e, d, s) {
      return this.$.drawer.open();
    }
  });

}).call(this);
