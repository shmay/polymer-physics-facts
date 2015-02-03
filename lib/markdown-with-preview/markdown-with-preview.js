(function() {
  Polymer('markdown-with-preview', {
    showPreview: true,
    hidePreview: function(e, d, s) {
      return e.preventDefault();
    }
  });

}).call(this);
