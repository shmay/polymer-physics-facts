Polymer 'fact-form',
  clickSub: -> @submitty()

  handleResponse: (e,d,s) ->
    @fire('reload-facts')

    window.location.hash = "#/facts/#{d.response.id}"

  cancel: (e,d,s) -> 
    @fire('close-drawer')

  tapSubmit: (e,d,s) ->
    @$.ajax.headers = 
      "X-Requested-With": "XMLHttpRequest"
      "X-User-Email": Cookies.get('user_email')
      "X-User-Token": Cookies.get('auth_token')

    json = 
      fact:
        body:@text
        title:@title
      tag_list:@tags

    @$.ajax.body = JSON.stringify json

    @$.ajax.go()
