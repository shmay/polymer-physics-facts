Polymer 'auth-form',
  selectedChanged: ->
    @signin = @selected == 1
    @title = if @selected == 1 then "Sign In" else "Sign Up"

  submit: ->
    @disable()
    #@$.ajax.headers = 
    #  "X-Requested-With": "XMLHttpRequest"
    
    json =
      email: @email
      password: @pw

    if !@signin
      json.password_confirmation = @pwconf
      json.username = @username
      @$.ajax.url= "/api/sign_up"
    else
      @$.ajax.url= "/api/sign_in"

    json =
      user: json

    @$.ajax.body = JSON.stringify json

    @$.ajax.go()

  handleResponse: (e,d,s) ->
    @enable()

    json = JSON.parse d.response

    Cookies.set("is_signed_in", true)

    @fire('set-signedin', true)

    @fire('close')

  handleError: (e,d,s) -> 
    console.log 'handleError'
    @$.alert.hidden = false

    @enable()

  disable: ->
    @$.alert.hidden = true

    @$.btn.disabled = true

  enable: ->
    @$.btn.disabled = false
