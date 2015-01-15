Polymer "physics-facts", 
  ready: ->
    @userid = Cookies.get('user_id')

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
    @$.authlog.open()

  tabSelect: (e,d,s) ->
    if d.isSelected
      switch d.item.id
        when 'signout'
          @$.signoutjax.headers = {"X-Requested-With": "XMLHttpRequest"}
          "X-User-Email": Cookies.get('user_email')
          "X-User-Token": Cookies.get('auth_token')
          @$.signoutjax.go()
        when 'tags'
          h = "#/tags"
        when 'facts'
          h = "/"

      if h 
        window.location.hash = h

  closeDrawer: (e,d,s) ->
    @$.drawer.close()

  openDrawer: (e,d,s) ->
    @$.drawer.open()

  reloadFacts: ->
    @$.factspage.getFacts()
