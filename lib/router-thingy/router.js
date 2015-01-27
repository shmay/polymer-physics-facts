(function() {
  Polymer("router-thingy", {
    "do": function(action, param) {
      return this.asyncFire('route-changed', [action, param]);
    },
    ready: function() {
      var router, routes, that;
      that = this;
      routes = {
        "": function() {
          return that["do"]('go-home');
        },
        "/": function() {
          return that["do"]('go-home');
        },
        "/tags": function() {
          return that["do"]('tags');
        },
        "/facts/:factid": function(param) {
          return that["do"]('showfact', parseInt(param));
        }
      };
      router = Router(routes);
      return router.init();
    }
  });

}).call(this);
