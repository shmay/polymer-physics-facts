(function() {
  var matchesMethod;

  matchesMethod = bowser.msie ? 'msMatchesSelector' : bowser.firefox ? 'mozMatchesSelector' : bowser.webkit ? 'webkitMatchesSelector' : 'matches';

  this.closestAncestor = function(node, selector) {
    while (node) {
      if (node[matchesMethod] && node[matchesMethod](selector)) {
        break;
      } else {
        node = node.parentNode;
      }
    }
    return node;
  };

}).call(this);
