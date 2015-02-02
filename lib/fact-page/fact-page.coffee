Polymer 'fact-page',
  fact: {}

  stashFact: (e,fact) -> @fact = fact

  factidChanged: (e,d,s) ->
    @fact = {}
    @$.model.findFact(@factid)

  editFact: (e,d,s) -> 
    @fire('edit-fact', @fact)
