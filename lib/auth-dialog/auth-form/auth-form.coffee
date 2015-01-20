Polymer 'auth-form',
  selectedChanged: ->
    @signin = @selected == 1
    @title = if @selected == 1 then "Sign In" else "Sign Up"

  submit: ->
    @$.ajax.headers = 
      "X-Requested-With": "XMLHttpRequest"

    json =
      email: @email
      password: @pw

    if !@signin
      json.password_confirmation = @pwconf
      json.username = @username

    json =
      user: json

    @$.ajax.body = JSON.stringify json

    @$.ajax.go()

  handleResponse: (e,d,s) ->
    json = JSON.parse d.response

    Cookies.set('email', json.email)
    Cookies.set('auth_token', json.authentication_token)

    @fire('set-email', json.email)

    @fire('close')

  handleError: (e,d,s) -> @hasError = true
