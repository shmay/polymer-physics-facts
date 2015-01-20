Polymer "physics-facts", 
  ready: ->
    @email = Cookies.get('email')

  handleResponse: (e,d,s) ->
    console.log 'handleResponse'

  handleRoute: (e,d,s) ->
    [route,id] = d
    switch route
      when 'go-home'
        @$.pages.selected = 0
      when 'tags'
        @$.pages.selected = 1
      when 'showfact'
        @$.factpage.factid = id
        @$.pages.selected = 2

  tapAuth: (e,d,s) -> 
    e.preventDefault()
    e.stopPropagation()
    @$.authlog.open()

  tabSelect: (e,d,s) ->
    if d.isSelected
      switch d.item.id
        when 'signout'
          @email = Cookies.expire('email').get('email')
        when 'tags'
          h = "#/tags"
        when 'facts'
          h = "/"

      if h 
        window.location.hash = h

  closeDrawer: (e,d,s) -> @$.drawer.close()

  openDrawer: (e,d,s) -> @$.drawer.open()

  reloadFacts: -> @$.factspage.getFacts()

  setEmail: (e,d,s) -> @email = d
