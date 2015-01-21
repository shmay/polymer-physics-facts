(function() {
  Polymer('facts-page', {
    attached: function() {
      return this.getFacts();
    },
    getFacts: function() {
      this.facts = void 0;
      this.$.ajax.headers = {
        "X-Requested-With": "XMLHttpRequest"
      };
      return this.$.ajax.go();
    },
    tapAdd: function(e, d, s) {
      return this.fire('open-drawer');
    },
    handleResponse: function(e, d, s) {
      return this.facts = d.response.facts;
    }
  });

}).call(this);
