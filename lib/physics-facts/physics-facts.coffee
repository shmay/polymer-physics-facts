Polymer "physics-facts", 
  ready: ->
    @userid = Cookies.get('user_id')

    #@$.drawer.open()

  handleResponse: (e,d,s) ->
    console.log 'handleResponse'

  handleRoute: (e,d,s) ->
    switch d
      when 'add-fact'
        @$.pages.selected = 2

  tabSelect: (e,d,s) ->
    console.log 'tabSelect'
    switch d.item.id
      when 'addfact'
        @$.drawer.open()

  closeDrawer: (e,d,s) -> @$.drawer.close()

  openDrawer: (e,d,s) ->
    @$.drawer.open()
