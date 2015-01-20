Polymer 'auth-dialog',
  attached: ->
    #jQuery ->
    #  $.ajax
    #    url: "https://apis.google.com/js/client:plus.js?onload=gpAsyncInit"
    #    dataType: "script"
    #    cache: true

  tabSelect: (e,d,sender) -> 
    @$.form.selected = sender.selected

  handleError: (e,d,s) ->
