Polymer 'fact-page',
  fact: {}

  factidChanged: (e,d,s) ->
    @$.ajax.url = "/api/facts/#{@factid}"
    @$.ajax.go()

  handleResponse: (e,d,s) ->
    @fact = d.response.fact

  editFact: (e,d,s) ->
