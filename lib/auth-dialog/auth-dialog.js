(function() {
  Polymer('auth-dialog', {
    attached: function() {},
    tabSelect: function(e, d, sender) {
      return this.$.form.selected = sender.selected;
    },
    handleError: function(e, d, s) {}
  });

}).call(this);
