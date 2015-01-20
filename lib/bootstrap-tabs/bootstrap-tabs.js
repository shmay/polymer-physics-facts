(function() {
  Polymer('bootstrap-tabs', {
    clickTab: function(e, tab, s) {
      var tabs;
      if (!tab.classList.contains('core-selected')) {
        tabs = this.querySelectorAll(':host /deep/ bs-tab').array();
        return this.selected = tabs.indexOf(tab);
      }
    }
  });

}).call(this);
