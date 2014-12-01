(function() {
  Polymer('tag-dropdown', {
    watch: {
      tags: 'tagsChanged',
      sel: 'selChanged'
    },
    ready: function() {
      return this.opened = false;
    },
    tagsChanged: function() {
      console.log('tagsChanged');
      console.log(this.tags);
      if (this.tags.length) {
        return this.open();
      } else {
        return this.close();
      }
    },
    selChanged: function() {
      this.fire('sel-val', this.tags[this.sel]);
      return this.$.pdrop.open();
    },
    open: function() {
      this.opened = true;
      return this.checkOpened();
    },
    close: function() {
      this.opened = false;
      return this.checkOpened();
    },
    checkOpened: function() {
      if (this.opened) {
        return this.$.pdrop.open();
      } else {
        return this.$.pdrop.close();
      }
    },
    downarrow: function() {
      if (this.opened) {
        if (this.sel !== void 0) {
          if (this.sel === this.tags.length - 1) {
            return this.sel = void 0;
          } else {
            return this.sel += 1;
          }
        } else {
          return this.sel = 0;
        }
      }
    },
    uparrow: function() {
      if (this.opened) {
        if (this.sel !== void 0) {
          if (this.sel === 0) {
            return this.sel = void 0;
          } else {
            return this.sel -= 1;
          }
        } else {
          return this.sel = this.tags.length - 1;
        }
      }
    }
  });

}).call(this);
