(function() {
  Polymer('tags-page', {
    attached: function() {
      return this.$.ajax.go();
    },
    handleResponse: function(e, d, s) {
      return this.tags = d.response.tags;
    }
  });

}).call(this);
