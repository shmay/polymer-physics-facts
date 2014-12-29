(function() {
  Polymer('bootstrap-input', {
    labelHidden: true,
    ready: function() {
      return this.thisValueChanged();
    },
    observe: {
      val: 'thisValueChanged'
    },
    thisValueChanged: function(e, d, s) {
      var marg;
      console.log('thisValueChanged');
      console.log(d);
      if (d && d.length) {
        marg = 0;
        this.labelHidden = false;
      } else {
        marg = '15px';
        this.labelHidden = true;
      }
      return this.$.input.style['margin-top'] = marg;
    }
  });

}).call(this);
