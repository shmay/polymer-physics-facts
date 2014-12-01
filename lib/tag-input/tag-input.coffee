downarrow = 40
uparrow = 38

Polymer 'tag-input',
  tags: ['hey','now', 'when']

  ready: ->
    @target = @$.input

  onKeydown: (e,detail,sender) ->
    @async ->
      val = sender.value

      if e.which == downarrow
        console.log 'downarrow'
        @$.dropdown.downarrow()
      else if e.which == uparrow
        @$.dropdown.uparrow()

      if val and val.length
        @showTags = @tags.filter (n) -> n.match(///#{val}///)
      else
        @$.dropdown.close()


  checkDropdown: -> 
    @$.dropdown.checkOpened()

  onSelVal: (e,d,s) ->
    console.log 'onSelVal'
    console.log d
