Polymer "router-thingy",
  do: (action, param) -> @asyncFire('route-changed', [action,param])

  ready: ->
    that = @
    routes =
      "": -> that.do('go-home')
      "/": -> that.do('go-home')
      "/tags": -> that.do('tags')
      "/facts/:factid": (param) -> that.do('showfact', parseInt(param))

    router = Router(routes)
    router.init()
