Polymer 'bootstrap-input',
  labelHidden: true

  ready: ->
    @thisValueChanged()

  observe:
    val: 'thisValueChanged'

  thisValueChanged: (e,d,s) ->
    console.log 'thisValueChanged'
    console.log d

    if d && d.length
      marg = 0
      @labelHidden = false
    else
      marg = '15px'
      @labelHidden = true

    @$.input.style['margin-top'] = marg
