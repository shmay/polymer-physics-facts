Polymer "physics-facts", 
  ready: ->
    @signedin = Cookies.get('is_signed_in') == 'true'

    @$.userajax.go() if @signedin

    if window.location.hash == ""
      window.location.hash = "/"

  handleResponse: (e,d,s) -> 
    @signedin = !!JSON.parse(d.response).user.email

  handleSignout: (e,d,s) ->
    Cookies.expire('is_signed_in')
    @signedin = false

  handleRoute: (e,d,s) ->
    [route,id] = d
    switch route
      when 'go-home'
        console.log 'go home'
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
          @$.signoutjax.go()
        when 'tags'
          h = "#/tags"
        when 'facts'
          h = "/"

      if h 
        window.location.hash = h

  closeDrawer: (e,d,s) -> @$.drawer.close()

  openDrawer: (e,d,s) -> @$.drawer.open()

  reloadFacts: -> @$.factspage.getFacts()

  setSignedin: (e,d,s) -> @signedin = d
