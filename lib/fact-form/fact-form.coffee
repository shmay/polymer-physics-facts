Polymer 'fact-form',
  fact: {}

  submitTitle: 'create fact'
  submitIcon: 'add'

  factChanged: ->

  clickSub: -> @submitty()

  handleResponse: (e,d,s) ->
    @fire('reload-facts')

    window.location.hash = "#/facts/#{d.response.fact.id}"

  cancel: (e,d,s) -> 
    @fire('close-drawer')

  tapSubmit: (e,d,s) ->
    @$.ajax.headers = 
      "X-Requested-With": "XMLHttpRequest"
      "X-User-Email": Cookies.get('email')
      "X-User-Token": Cookies.get('auth_token')

    json = 
      fact:@fact
      tag_list:@tags

    @$.ajax.body = JSON.stringify json

    @$.ajax.go()

  setFact: (fact) ->
