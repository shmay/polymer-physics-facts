(function() {
  var downarrow, uparrow;

  downarrow = 40;

  uparrow = 38;

  Polymer('tag-input', {
    tags: ['hey', 'now', 'when'],
    ready: function() {
      return this.target = this.$.input;
    },
    onKeydown: function(e, detail, sender) {
      return this.async(function() {
        var val;
        val = sender.value;
        if (e.which === downarrow) {
          console.log('downarrow');
          this.$.dropdown.downarrow();
        } else if (e.which === uparrow) {
          this.$.dropdown.uparrow();
        }
        if (val && val.length) {
          return this.showTags = this.tags.filter(function(n) {
            return n.match(RegExp("" + val));
          });
        } else {
          return this.$.dropdown.close();
        }
      });
    },
    checkDropdown: function() {
      return this.$.dropdown.checkOpened();
    },
    onSelVal: function(e, d, s) {
      console.log('onSelVal');
      return console.log(d);
    }
  });

}).call(this);
