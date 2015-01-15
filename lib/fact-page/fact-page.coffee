Polymer 'fact-page',
  factidChanged: (e,d,s) ->
    console.log 'factidChanged'
    @$.ajax.url = "/api/facts/#{@factid}"
    @$.ajax.go()

  handleResponse: (e,d,s) ->
    @fact = d.response



