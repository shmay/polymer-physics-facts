Polymer 'facts-page',
  attached: ->
    @$.ajax.headers = {"X-Requested-With": "XMLHttpRequest"}
    @$.ajax.go()

  tapAdd: (e,d,s) -> 
    @fire('open-drawer')

  handleResponse: (e,d,s) ->
    @facts = d.response
    console.log @facts
