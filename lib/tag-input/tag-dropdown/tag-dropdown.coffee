Polymer 'tag-dropdown',
  watch: 
    tags: 'tagsChanged'
    sel: 'selChanged'

  ready: -> @opened = false

  tagsChanged: -> 
    console.log 'tagsChanged'
    console.log @tags
    if @tags.length then @open() else @close()

  selChanged: ->
    @fire('sel-val', @tags[@sel])

    @$.pdrop.open()

  open: -> 
    @opened = true
    @checkOpened()

  close: -> 
    @opened = false
    @checkOpened()

  checkOpened: ->
    if @opened
      @$.pdrop.open()
    else
      @$.pdrop.close()

  downarrow: ->
    if @opened
      if @sel != undefined
        if @sel == @tags.length - 1
          @sel = undefined
        else
          @sel += 1
      else
        @sel = 0

  uparrow: ->
    if @opened
      if @sel != undefined
        if @sel == 0
          @sel = undefined
        else
          @sel -= 1
      else
        @sel = @tags.length - 1
