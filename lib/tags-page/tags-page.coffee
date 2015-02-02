Polymer 'tags-page',
  attached: -> @$.ajax.go()

  handleResponse: (e,d,s) -> 
    @tags = d.response.tags
