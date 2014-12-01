Polymer "router-thingy",
  do: (action) -> @asyncFire('route-changed', action)

  ready: ->
    that = @
    routes =
      "/addfact": (e,d,s) -> that.do('add-fact')

    router = Router(routes)
    router.init()
