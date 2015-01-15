Polymer 'auth-dialog',
  submit: ->
    @$.ajax.headers = 
      "X-Requested-With": "XMLHttpRequest"

    json =
      user:
        username: 'shmay'
        email: 'kmurph73@gmail.com'
        password: 'pass1212'

    @$.ajax.body = JSON.stringify json

    @$.ajax.go()

  handleResponse: (e,d,s) ->
