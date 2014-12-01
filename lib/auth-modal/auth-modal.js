(function() {
  Polymer("auth-modal", {
    open: function() {
      return this.$.dialog.open();
    }
  });

}).call(this);
