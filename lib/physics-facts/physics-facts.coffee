Polymer "physics-facts", 
  ready: ->
    @userid = Cookies.get('user_id')

    @$.ajax.headers = {"X-Requested-With": "XMLHttpRequest"}
    @$.ajax.go()

  handleResponse: (e,d,s) ->
    console.log 'handleResponse'

  handleRoute: (e,d,s) ->
    switch d
      when 'add-fact'
        @$.pages.selected = 2

  tabSelect: (e,d,s) ->
    console.log 'tabSelect'
