Polymer 'facts-page',
  attached: ->
    @getFacts()

  getFacts: ->
    @facts = undefined

    @$.ajax.headers = {"X-Requested-With": "XMLHttpRequest"}
    @$.ajax.go()

  tapAdd: (e,d,s) -> 
    @fire('open-drawer')

  handleResponse: (e,d,s) ->
    @facts = d.response
    console.log @facts
