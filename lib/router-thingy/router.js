(function() {
  Polymer("router-thingy", {
    "do": function(action) {
      return this.asyncFire('route-changed', action);
    },
    ready: function() {
      var router, routes, that;
      that = this;
      routes = {
        "/addfact": function(e, d, s) {
          return that["do"]('add-fact');
        }
      };
      router = Router(routes);
      return router.init();
    }
  });

}).call(this);
